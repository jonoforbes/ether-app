import { type } from "../../util/util";
export const ActionTypes = {
    CLIENT_DOCUMENTS_ADD: type("DATA_CLIENT_DOCUMENTS_ADD"),
    CLIENT_DOCUMENTS_REMOVE: type("DATA_CLIENT_DOCUMENTS_REMOVE"),
    CLIENT_DOCUMENTS_UPDATE: type("DATA_CLIENT_DOCUMENTS_UPDATE"),
    CLIENT_DOCUMENTS_UPDATE_DESCRIPTION: type("DATA_CLIENT_DOCUMENTS_UPDATE_DECRIPTION"),
    CLIENT_DOCUMENTS_UPDATE_ACCOUNT: type("DATA_CLIENT_DOCUMENTS_UPDATE_ACCOUNT"),
    CLIENT_DOCUMENTS_UPDATE_CONTACT: type("DATA_CLIENT_DOCUMENTS_UPDATE_CONTACT"),
    CLIENT_DOCUMENTS_UPDATE_SALE: type("DATA_CLIENT_DOCUMENTS_UPDATE_SALE"),
    CLIENT_DOCUMENTS_SET_ALL: type("DATA_CLIENT_DOCUMENTS_ADD_ALL")
};
export class AddClientDocument {
    constructor(clientDocument) {
        this.type = ActionTypes.CLIENT_DOCUMENTS_ADD;
        this.payload = { clientDocument };
    }
}
export class RemoveClientDocument {
    constructor(_id) {
        this.type = ActionTypes.CLIENT_DOCUMENTS_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateClientDocument {
    constructor(_id, clientDocument) {
        this.type = ActionTypes.CLIENT_DOCUMENTS_UPDATE;
        this.payload = { _id, clientDocument };
    }
}
export class UpdateClientDocumentDescription {
    constructor(_id, description) {
        this.type = ActionTypes.CLIENT_DOCUMENTS_UPDATE_DESCRIPTION;
        this.payload = { _id, description };
    }
}
export class UpdateClientDocumentAccount {
    constructor(_id, accountId) {
        this.type = ActionTypes.CLIENT_DOCUMENTS_UPDATE_ACCOUNT;
        this.payload = { _id, accountId };
    }
}
export class UpdateClientDocumentContact {
    constructor(_id, contactId) {
        this.type = ActionTypes.CLIENT_DOCUMENTS_UPDATE_CONTACT;
        this.payload = { _id, contactId };
    }
}
export class UpdateClientDocumentSale {
    constructor(_id, saleId) {
        this.type = ActionTypes.CLIENT_DOCUMENTS_UPDATE_SALE;
        this.payload = { _id, saleId };
    }
}
export class SetAllClientDocuments {
    constructor(clientDocuments) {
        this.type = ActionTypes.CLIENT_DOCUMENTS_SET_ALL;
        this.payload = { clientDocuments };
    }
}
//# sourceMappingURL=client-document.js.map