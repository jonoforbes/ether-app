import { type } from "../../util/util";
export const ActionTypes = {
    CONTACTS_ADD: type("DATA_CONTACTS_ADD"),
    CONTACTS_REMOVE: type("DATA_CONTACTS_REMOVE"),
    CONTACTS_UPDATE: type("DATA_CONTACTS_UPDATE"),
    CONTACTS_UPDATE_ACCOUNT: type("DATA_CONTACTS_UPDATE_ACCOUNT"),
    CONTACTS_SET_ALL: type("DATA_CONTACTS_ADD_ALL")
};
export class AddContact {
    constructor(contact) {
        this.type = ActionTypes.CONTACTS_ADD;
        this.payload = { contact };
    }
}
export class RemoveContact {
    constructor(_id) {
        this.type = ActionTypes.CONTACTS_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateContact {
    constructor(_id, contact) {
        this.type = ActionTypes.CONTACTS_UPDATE;
        this.payload = { _id, contact };
    }
}
export class UpdateContactAccount {
    constructor(_id, accountId) {
        this.type = ActionTypes.CONTACTS_UPDATE_ACCOUNT;
        this.payload = { _id, accountId };
    }
}
export class SetAllContacts {
    constructor(contacts) {
        this.type = ActionTypes.CONTACTS_SET_ALL;
        this.payload = { contacts };
    }
}
//# sourceMappingURL=contact.js.map