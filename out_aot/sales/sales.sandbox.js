var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SalesService } from "./services/sales.service";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddSale, RemoveSale, UpdateSale, UpdateSaleAccount, UpdateSaleContact, UpdateSaleProduct } from "../statemanagement/actions/data/sale";
export let SalesSandbox = class SalesSandbox {
    constructor(store, salesService) {
        this.store = store;
        this.salesService = salesService;
        this.sales$ = this.store.select(state => state.data.sales);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
        this.isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
    }
    addSale(sale) {
        this.salesService.add(sale).subscribe((sale) => {
            this.store.dispatch(new AddSale(sale));
        }, () => this.handleError());
    }
    updateSale(id, sale) {
        let action = new UpdateSale(id, sale);
        this.store.dispatch(action);
        this.salesService.update(id, sale).subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchSale(id) {
        return this.sales$.switchMap((sales) => {
            return sales.filter((sale) => {
                return sale._id == id;
            });
        });
    }
    removeSale(sale) {
        let action = new RemoveSale(sale._id);
        this.store.dispatch(action);
        this.salesService.remove(sale).subscribe(() => {
        }, () => this.handleError(action));
    }
    setAccount(sale, id) {
        let action = new UpdateSaleAccount(sale._id, id);
        this.store.dispatch(action);
        this.salesService.setAccount(sale, id).subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchSalesByAccount(id) {
        return this.sales$.map((sales) => {
            return sales.filter((sale) => {
                return sale.accountId == id;
            });
        });
    }
    setContact(sale, id) {
        let action = new UpdateSaleContact(sale._id, id);
        this.store.dispatch(action);
        this.salesService.setContact(sale, id).subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchSalesByContact(id) {
        return this.sales$.map((sales) => {
            return sales.filter((sale) => {
                return sale.contactId == id;
            });
        });
    }
    setProduct(sale, id) {
        let action = new UpdateSaleProduct(sale._id, id);
        this.store.dispatch(action);
        this.salesService.setProduct(sale, id).subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchSalesByProduct(id) {
        return this.sales$.map((sales) => {
            return sales.filter((sale) => {
                return sale.productId == id;
            });
        });
    }
    handleError(action) {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({ type: UNDO_ACTION, payload: action });
        }
    }
};
SalesSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, SalesService])
], SalesSandbox);
//# sourceMappingURL=sales.sandbox.js.map