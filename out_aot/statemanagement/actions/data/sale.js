import { type } from "../../util/util";
export const ActionTypes = {
    SALES_ADD: type("DATA_SALES_ADD"),
    SALES_REMOVE: type("DATA_SALES_REMOVE"),
    SALES_UPDATE: type("DATA_SALES_UPDATE"),
    SALES_SET_ALL: type("DATA_SALES_ADD_ALL"),
    SALES_UPDATE_ACCOUNT: type("DATA_SALES_UPDATE_ACCOUNT"),
    SALES_UPDATE_CONTACT: type("DATA_SALES_UPDATE_CONTACT"),
    SALES_UPDATE_PRODUCT: type("DATA_SALES_UPDATE_PRODUCT")
};
export class AddSale {
    constructor(sale) {
        this.type = ActionTypes.SALES_ADD;
        this.payload = { sale };
    }
}
export class RemoveSale {
    constructor(_id) {
        this.type = ActionTypes.SALES_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateSale {
    constructor(_id, sale) {
        this.type = ActionTypes.SALES_UPDATE;
        this.payload = { _id, sale };
    }
}
export class UpdateSaleAccount {
    constructor(_id, accountId) {
        this.type = ActionTypes.SALES_UPDATE_ACCOUNT;
        this.payload = { _id, accountId };
    }
}
export class UpdateSaleContact {
    constructor(_id, contactId) {
        this.type = ActionTypes.SALES_UPDATE_CONTACT;
        this.payload = { _id, contactId };
    }
}
export class UpdateSaleProduct {
    constructor(_id, productId) {
        this.type = ActionTypes.SALES_UPDATE_PRODUCT;
        this.payload = { _id, productId };
    }
}
export class SetAllSales {
    constructor(sales) {
        this.type = ActionTypes.SALES_SET_ALL;
        this.payload = { sales };
    }
}
//# sourceMappingURL=sale.js.map