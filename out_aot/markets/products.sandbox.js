var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ProductsService } from "./services/products.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddProduct, UpdateProduct, RemoveProduct } from "../statemanagement/actions/data/product";
export let ProductsSandbox = class ProductsSandbox {
    constructor(store, productsService) {
        this.store = store;
        this.productsService = productsService;
        this.ngUnsubscribe = new Subject();
        this.products$ = this.store.select(state => state.data.products);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
        this.isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addProduct(product) {
        this.productsService.add(product)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((product) => {
            this.store.dispatch(new AddProduct(product));
        }, () => this.handleError());
    }
    updateProduct(id, product) {
        let action = new UpdateProduct(id, product);
        this.store.dispatch(action);
        this.productsService.update(id, product)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchProduct(id) {
        return this.products$.switchMap((products) => {
            return products.filter((product) => {
                return product._id == id;
            });
        });
    }
    removeProduct(product) {
        let action = new RemoveProduct(product._id);
        this.store.dispatch(action);
        this.productsService.remove(product)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    handleError(action) {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({ type: UNDO_ACTION, payload: action });
        }
    }
};
ProductsSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, ProductsService])
], ProductsSandbox);
//# sourceMappingURL=products.sandbox.js.map