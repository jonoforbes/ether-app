import { type } from "../../util/util";
export const ActionTypes = {
    PRODUCTS_ADD: type("DATA_PRODUCTS_ADD"),
    PRODUCTS_REMOVE: type("DATA_PRODUCTS_REMOVE"),
    PRODUCTS_UPDATE: type("DATA_PRODUCTS_UPDATE"),
    PRODUCTS_SET_ALL: type("DATA_PRODUCTS_ADD_ALL")
};
export class AddProduct {
    constructor(product) {
        this.type = ActionTypes.PRODUCTS_ADD;
        this.payload = { product };
    }
}
export class RemoveProduct {
    constructor(_id) {
        this.type = ActionTypes.PRODUCTS_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateProduct {
    constructor(_id, product) {
        this.type = ActionTypes.PRODUCTS_UPDATE;
        this.payload = { _id, product };
    }
}
export class SetAllProducts {
    constructor(products) {
        this.type = ActionTypes.PRODUCTS_SET_ALL;
        this.payload = { products };
    }
}
//# sourceMappingURL=product.js.map