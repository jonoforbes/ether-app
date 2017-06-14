import { type } from "../../util/util";
export const ActionTypes = {
    WINES_ADD: type("DATA_WINES_ADD"),
    WINES_REMOVE: type("DATA_WINES_REMOVE"),
    WINES_UPDATE: type("DATA_WINES_UPDATE"),
    WINES_UPDATE_RATE: type("DATA_WINES_UPDATE_RATE"),
    WINES_UPDATE_STOCK: type("DATA_WINES_UPDATE_STOCK"),
    WINES_SET_ALL: type("DATA_WINES_ADD_ALL"),
};
export class AddWine {
    constructor(wine) {
        this.type = ActionTypes.WINES_ADD;
        this.payload = { wine };
    }
}
export class RemoveWine {
    constructor(_id) {
        this.type = ActionTypes.WINES_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateWine {
    constructor(_id, wine) {
        this.type = ActionTypes.WINES_UPDATE;
        this.payload = { _id, wine };
    }
}
export class UpdateRate {
    constructor(_id, myRating) {
        this.type = ActionTypes.WINES_UPDATE_RATE;
        this.payload = { _id, myRating };
    }
}
export class UpdateStock {
    constructor(_id, myStock) {
        this.type = ActionTypes.WINES_UPDATE_STOCK;
        this.payload = { _id, myStock };
    }
}
export class SetAllWines {
    constructor(wines) {
        this.type = ActionTypes.WINES_SET_ALL;
        this.payload = { wines };
    }
}
//# sourceMappingURL=wine.js.map