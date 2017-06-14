import { Action } from "@ngrx/store";
import * as clientDocument from "../../actions/data/client-document";
import { ClientDocument } from "../../../client-documents/entities/ClientDocument";

export function clientDocumentsReducer(state: Array<ClientDocument> = [],
                                action: clientDocument.Actions): Array<ClientDocument> {
    switch (action.type) {
        case clientDocument.ActionTypes.CLIENT_DOCUMENTS_ADD:
            return [...state, action.payload.clientDocument];
        case clientDocument.ActionTypes.CLIENT_DOCUMENTS_SET_ALL:
            return [...action.payload.clientDocuments];
        case clientDocument.ActionTypes.CLIENT_DOCUMENTS_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case clientDocument.ActionTypes.CLIENT_DOCUMENTS_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                console.log("document updated in array");
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.clientDocument) : item)
            }
            else {
                console.log("document not found in array");
                return [...state, action.payload.clientDocument];
            };
        case clientDocument.ActionTypes.CLIENT_DOCUMENTS_UPDATE_DESCRIPTION: 
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, {description: action.payload.description}) : item);
        case clientDocument.ActionTypes.CLIENT_DOCUMENTS_UPDATE_ACCOUNT:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, {accountId: action.payload.accountId}) : item);
        case clientDocument.ActionTypes.CLIENT_DOCUMENTS_UPDATE_CONTACT:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, {contactId: action.payload.contactId}) : item);
        case clientDocument.ActionTypes.CLIENT_DOCUMENTS_UPDATE_SALE:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, {saleId: action.payload.saleId}) : item);
        default:
            return state;
            
    }
};