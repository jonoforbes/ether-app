import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { Contact } from "../../../contacts/entities/Contact";

export const ActionTypes = {
    CONTACTS_ADD: type("DATA_CONTACTS_ADD"),
    CONTACTS_REMOVE: type("DATA_CONTACTS_REMOVE"),
    CONTACTS_UPDATE: type("DATA_CONTACTS_UPDATE"),
    CONTACTS_UPDATE_ACCOUNT: type("DATA_CONTACTS_UPDATE_ACCOUNT"),
    CONTACTS_SET_ALL: type("DATA_CONTACTS_ADD_ALL")
}

export class AddContact implements Action {
    type = ActionTypes.CONTACTS_ADD;
    payload: {contact: Contact};

    constructor(contact: Contact) {
        this.payload = {contact};
    }
}

export class RemoveContact implements Action {
    type = ActionTypes.CONTACTS_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateContact implements Action {
    type = ActionTypes.CONTACTS_UPDATE;
    payload: {_id: string, contact: Contact};

    constructor(_id: string, contact: Contact) {
        this.payload = {_id, contact}
    }
}

export class UpdateContactAccount implements Action {
    type = ActionTypes.CONTACTS_UPDATE_ACCOUNT;
    payload: {_id: string, accountId: string};

    constructor(_id: string, accountId: string) {
        this.payload = {_id, accountId};
    }
}

export class SetAllContacts implements Action {
    type = ActionTypes.CONTACTS_SET_ALL;
    payload: {contacts: Contact[]};

    constructor(contacts: Contact[]) {
        this.payload = {contacts}
    }
}

export type Actions = 
    AddContact
    | RemoveContact
    | UpdateContact
    | UpdateContactAccount
    | SetAllContacts;