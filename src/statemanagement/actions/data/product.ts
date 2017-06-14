import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { Product } from "../../../markets/entities/Product";

export const ActionTypes = {
    PRODUCTS_ADD: type("DATA_PRODUCTS_ADD"),
    PRODUCTS_REMOVE: type("DATA_PRODUCTS_REMOVE"),
    PRODUCTS_UPDATE: type("DATA_PRODUCTS_UPDATE"),
    PRODUCTS_SET_ALL: type("DATA_PRODUCTS_ADD_ALL")
}

export class AddProduct implements Action {
    type = ActionTypes.PRODUCTS_ADD;
    payload: {product: Product};

    constructor(product: Product) {
        this.payload = {product};
    }
}

export class RemoveProduct implements Action {
    type = ActionTypes.PRODUCTS_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateProduct implements Action {
    type = ActionTypes.PRODUCTS_UPDATE;
    payload: {_id: string, product: Product};

    constructor(_id: string, product: Product) {
        this.payload = {_id, product}
    }
}

export class SetAllProducts implements Action {
    type = ActionTypes.PRODUCTS_SET_ALL;
    payload: {products: Product[]};

    constructor(products: Product[]) {
        this.payload = {products}
    }
}

export type Actions =
    AddProduct
    | RemoveProduct
    | UpdateProduct
    | SetAllProducts;