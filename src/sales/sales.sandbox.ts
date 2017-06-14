import { SalesService } from "./services/sales.service";
import { Injectable } from "@angular/core";
import { Sale } from "./entities/Sale";
import { Observable } from "rxjs/Observable";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import {
    AddSale,
    RemoveSale,
    UpdateSale,
    UpdateSaleAccount,
    UpdateSaleContact,
    UpdateSaleProduct
} from "../statemanagement/actions/data/sale";

@Injectable()
export class SalesSandbox {
    sales$ = this.store.select(state => state.data.sales);
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);

    constructor(private store: Store<ApplicationState>,
                private salesService: SalesService) {

    }

    addSale(sale: Sale): void {
        this.salesService.add(sale).subscribe((sale: Sale) => {
            this.store.dispatch(new AddSale(sale));
        }, () => this.handleError());
    }

    updateSale(id: string, sale: Sale): void {
        let action = new UpdateSale(id, sale);
        this.store.dispatch(action);
        this.salesService.update(id, sale).subscribe(() => {
        }, () => this.handleError(action));
    }

    fetchSale(id: string): Observable<Sale> {
        return this.sales$.switchMap((sales: Sale[]) => {
            return sales.filter((sale: Sale) => {
                return sale._id == id;
            });
        });
    }

    removeSale(sale: Sale): void {
        let action = new RemoveSale(sale._id);
        this.store.dispatch(action);
        this.salesService.remove(sale).subscribe(() => {
        }, () => this.handleError(action));
    }

    setAccount(sale: Sale, id: string): void {
        let action = new UpdateSaleAccount(sale._id, id);
        this.store.dispatch(action);
        this.salesService.setAccount(sale, id).subscribe(() => {
        }, () => this.handleError(action));
    }

    fetchSalesByAccount(id: string): Observable<Array<Sale>> {
        return this.sales$.map((sales: any) => {
            return sales.filter((sale: Sale) => {
                return sale.accountId == id;
            })
        })
    }

    setContact(sale: Sale, id: string): void {
        let action = new UpdateSaleContact(sale._id, id);
        this.store.dispatch(action);
        this.salesService.setContact(sale, id).subscribe(() => {
        }, () => this.handleError(action));
    }

    fetchSalesByContact(id: string): Observable<Array<Sale>> {
        return this.sales$.map((sales: any) => {
            return sales.filter((sale: Sale) => {
                return sale.contactId == id;
            })
        })
    }

    setProduct(sale: Sale, id: string): void {
        let action = new UpdateSaleProduct(sale._id, id);
        this.store.dispatch(action);
        this.salesService.setProduct(sale, id).subscribe(() => {
        }, () => this.handleError(action));
    }

    fetchSalesByProduct(id: string): Observable<Array<Sale>> {
        return this.sales$.map((sales: any) => {
            return sales.filter((sale: Sale) => {
                return sale.productId == id;
            })
        })
    }


    private handleError(action?: Action): void {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({type: UNDO_ACTION, payload: action});
        }
    }
}