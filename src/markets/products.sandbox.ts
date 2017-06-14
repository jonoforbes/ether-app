import { ProductsService } from "./services/products.service";
import { Injectable } from "@angular/core";
import { Product } from "./entities/Product";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import {
    AddProduct,
    UpdateProduct,
    RemoveProduct
} from "../statemanagement/actions/data/product";

@Injectable()
export class ProductsSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    products$ = this.store.select(state => state.data.products);
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);


    constructor(private store: Store<ApplicationState>,
                private productsService: ProductsService) {

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addProduct(product: Product): void {
        this.productsService.add(product)
        .takeUntil(this.ngUnsubscribe)
        .subscribe((product: Product) => {
            this.store.dispatch(new AddProduct(product));
        }, () => this.handleError());
    }

    updateProduct(id: string, product: Product): void {
        let action = new UpdateProduct(id, product);
        this.store.dispatch(action);
        this.productsService.update(id, product)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    fetchProduct(id: string): Observable<Product> {
        return this.products$.switchMap((products: Product[]) => {
            return products.filter((product: Product) => {
                return product._id == id;
            });
        });
    }

    removeProduct(product: Product): void {
        let action = new RemoveProduct(product._id);
        this.store.dispatch(action);
        this.productsService.remove(product)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    private handleError(action?: Action): void {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({type: UNDO_ACTION, payload: action});
        }
    }
}