import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { ClientDocument } from "../../../client-documents/entities/ClientDocument";

export const ActionTypes = {
    CLIENT_DOCUMENTS_ADD: type("DATA_CLIENT_DOCUMENTS_ADD"),
    CLIENT_DOCUMENTS_REMOVE: type("DATA_CLIENT_DOCUMENTS_REMOVE"),
    CLIENT_DOCUMENTS_UPDATE: type("DATA_CLIENT_DOCUMENTS_UPDATE"),
    CLIENT_DOCUMENTS_UPDATE_DESCRIPTION: type("DATA_CLIENT_DOCUMENTS_UPDATE_DECRIPTION"),
    CLIENT_DOCUMENTS_UPDATE_ACCOUNT: type("DATA_CLIENT_DOCUMENTS_UPDATE_ACCOUNT"),
    CLIENT_DOCUMENTS_UPDATE_CONTACT: type("DATA_CLIENT_DOCUMENTS_UPDATE_CONTACT"),
    CLIENT_DOCUMENTS_UPDATE_SALE: type("DATA_CLIENT_DOCUMENTS_UPDATE_SALE"),
    CLIENT_DOCUMENTS_SET_ALL: type("DATA_CLIENT_DOCUMENTS_ADD_ALL")
}

export class AddClientDocument implements Action {
    type = ActionTypes.CLIENT_DOCUMENTS_ADD;
    payload: {clientDocument: ClientDocument};

    constructor(clientDocument: ClientDocument) {
        this.payload = {clientDocument};
    }
}

export class RemoveClientDocument implements Action {
    type = ActionTypes.CLIENT_DOCUMENTS_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateClientDocument implements Action {
    type = ActionTypes.CLIENT_DOCUMENTS_UPDATE;
    payload: {_id: string, clientDocument: ClientDocument};

    constructor(_id: string, clientDocument: ClientDocument) {
        this.payload = {_id, clientDocument};
    }
}

export class UpdateClientDocumentDescription implements Action {
    type = ActionTypes.CLIENT_DOCUMENTS_UPDATE_DESCRIPTION;
    payload: {_id: string, description: string};

    constructor(_id: string, description: string) {
        this.payload = {_id, description};
    }
}

export class UpdateClientDocumentAccount implements Action {
    type = ActionTypes.CLIENT_DOCUMENTS_UPDATE_ACCOUNT;
    payload: {_id: string, accountId: string};

    constructor(_id: string, accountId: string) {
        this.payload = {_id, accountId};
    }
}

export class UpdateClientDocumentContact implements Action {
    type = ActionTypes.CLIENT_DOCUMENTS_UPDATE_CONTACT;
    payload: {_id: string, contactId: string};

    constructor(_id: string, contactId: string) {
        this.payload = {_id, contactId};
    }
}

export class UpdateClientDocumentSale implements Action {
    type = ActionTypes.CLIENT_DOCUMENTS_UPDATE_SALE;
    payload: {_id: string, saleId: string};

    constructor(_id: string, saleId: string) {
        this.payload = {_id, saleId};
    }
}

export class SetAllClientDocuments implements Action {
    type = ActionTypes.CLIENT_DOCUMENTS_SET_ALL;
    payload: {clientDocuments: ClientDocument[]};

    constructor(clientDocuments: ClientDocument[]) {
        this.payload = {clientDocuments}
    }
}

export type Actions = 
    AddClientDocument
    | RemoveClientDocument
    | UpdateClientDocument
    | SetAllClientDocuments 
    | UpdateClientDocumentDescription 
    | UpdateClientDocumentAccount 
    | UpdateClientDocumentContact 
    | UpdateClientDocumentSale;