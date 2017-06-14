var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { StockService } from "./services/stock.service";
import { Injectable } from "@angular/core";
import { WineComService } from "./services/wineCom.service";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddWine, UpdateWine, UpdateStock, RemoveWine, UpdateRate } from "../statemanagement/actions/data/wine";
export let StockSandbox = class StockSandbox {
    constructor(store, stockService, wineComService) {
        this.store = store;
        this.stockService = stockService;
        this.wineComService = wineComService;
        this.wines$ = this.store.select(state => state.data.wines);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    }
    addWine(wine) {
        this.stockService.add(wine).subscribe((wine) => {
            this.store.dispatch(new AddWine(wine));
        }, () => this.handleError());
    }
    updateWine(id, wine) {
        let action = new UpdateWine(id, wine);
        this.store.dispatch(action);
        this.stockService.update(id, wine).subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchWine(id) {
        return this.stockService.fetchWine(id).share();
    }
    removeWine(wine) {
        let action = new RemoveWine(wine._id);
        this.store.dispatch(action);
        this.stockService.remove(wine).subscribe(() => {
        }, () => this.handleError(action));
    }
    setRate(wine, rate) {
        let action = new UpdateRate(wine._id, rate);
        this.store.dispatch(action);
        this.stockService.setRate(wine, rate).subscribe(() => {
        }, () => this.handleError(action));
    }
    setStock(wine, inStock) {
        let action = new UpdateStock(wine._id, inStock);
        this.store.dispatch(action);
        this.stockService.setStock(wine, inStock).subscribe(() => {
        }, () => this.handleError(action));
    }
    search(term) {
        return this.wineComService.search(term);
    }
    handleError(action) {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({ type: UNDO_ACTION, payload: action });
        }
    }
};
StockSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, StockService, WineComService])
], StockSandbox);
//# sourceMappingURL=stock.sandbox.js.map