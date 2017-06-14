import { type } from "../../util/util";
export const ActionTypes = {
    USER_DATA_ADD: type("DATA_USER_DATA_ADD"),
    USER_DATA_REMOVE: type("DATA_USER_DATA_REMOVE"),
    USER_DATA_UPDATE: type("DATA_USER_DATA_UPDATE"),
    USER_DATA_SET_ALL: type("DATA_USER_DATA_ADD_ALL")
};
export class AddUserData {
    constructor(userData) {
        this.type = ActionTypes.USER_DATA_ADD;
        this.payload = { userData };
    }
}
export class RemoveUserData {
    constructor(_id) {
        this.type = ActionTypes.USER_DATA_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateUserData {
    constructor(_id, userData) {
        this.type = ActionTypes.USER_DATA_UPDATE;
        this.payload = { _id, userData };
    }
}
export class SetAllUserData {
    constructor(userData) {
        this.type = ActionTypes.USER_DATA_SET_ALL;
        this.payload = { userData };
    }
}
//# sourceMappingURL=user-data.js.map