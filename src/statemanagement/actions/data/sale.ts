import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { Sale } from "../../../sales/entities/Sale";

export const ActionTypes = {
    SALES_ADD: type("DATA_SALES_ADD"),
    SALES_REMOVE: type("DATA_SALES_REMOVE"),
    SALES_UPDATE: type("DATA_SALES_UPDATE"),
    SALES_SET_ALL: type("DATA_SALES_ADD_ALL"),
    SALES_UPDATE_ACCOUNT: type("DATA_SALES_UPDATE_ACCOUNT"),
    SALES_UPDATE_CONTACT: type("DATA_SALES_UPDATE_CONTACT"),
    SALES_UPDATE_PRODUCT: type("DATA_SALES_UPDATE_PRODUCT")
}

export class AddSale implements Action {
    type = ActionTypes.SALES_ADD;
    payload: {sale: Sale};

    constructor(sale: Sale) {
        this.payload = {sale};
    }
}

export class RemoveSale implements Action {
    type = ActionTypes.SALES_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateSale implements Action {
    type = ActionTypes.SALES_UPDATE;
    payload: {_id: string, sale: Sale};

    constructor(_id: string, sale: Sale) {
        this.payload = {_id, sale};
    }
}

export class UpdateSaleAccount implements Action {
    type = ActionTypes.SALES_UPDATE_ACCOUNT;
    payload: {_id: string, accountId: string};

    constructor(_id: string, accountId: string) {
        this.payload = {_id, accountId};
    }
}

export class UpdateSaleContact implements Action {
    type = ActionTypes.SALES_UPDATE_CONTACT;
    payload: {_id: string, contactId: string};

    constructor(_id: string, contactId: string) {
        this.payload = {_id, contactId};
    }
}

export class UpdateSaleProduct implements Action {
    type = ActionTypes.SALES_UPDATE_PRODUCT;
    payload: {_id: string, productId: string}

    constructor(_id: string, productId) {
        this.payload = {_id, productId};
    }
}

export class SetAllSales implements Action {
    type = ActionTypes.SALES_SET_ALL;
    payload: {sales: Sale[]};

    constructor(sales: Sale[]) {
        this.payload = {sales}
    }
}

export type Actions = 
    AddSale
    | RemoveSale
    | UpdateSale 
    | UpdateSaleAccount 
    | UpdateSaleContact 
    | UpdateSaleProduct 
    | SetAllSales;