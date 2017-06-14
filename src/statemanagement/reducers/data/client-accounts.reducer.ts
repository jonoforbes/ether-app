import { Action } from "@ngrx/store";
import * as clientAccount from "../../actions/data/client-account";
import { ClientAccount } from "../../../client-accounts/entities/ClientAccount";

export function clientAccountsReducer(state: Array<ClientAccount> = [],
                                action: clientAccount.Actions): Array<ClientAccount> {
    switch (action.type) {
        case clientAccount.ActionTypes.CLIENT_ACCOUNTS_ADD:
            return [...state, action.payload.clientAccount];
        case clientAccount.ActionTypes.CLIENT_ACCOUNTS_SET_ALL:
            return [...action.payload.clientAccounts];
        case clientAccount.ActionTypes.CLIENT_ACCOUNTS_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case clientAccount.ActionTypes.CLIENT_ACCOUNTS_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length >0) {
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.clientAccount) : item);
            }
            else {
                return [...state, action.payload.clientAccount];
            };
        case clientAccount.ActionTypes.CLIENT_ACCOUNTS_UPDATE_STATUS:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, {accountStatus: action.payload.accountStatus}) : item);
        default:
            return state;
    }
};