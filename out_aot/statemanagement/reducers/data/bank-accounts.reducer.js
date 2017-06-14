import * as bankAccount from "../../actions/data/bank-account";
export function bankAccountsReducer(state = [], action) {
    switch (action.type) {
        case bankAccount.ActionTypes.BANK_ACCOUNTS_ADD:
            return [...state, action.payload.bankAccount];
        case bankAccount.ActionTypes.BANK_ACCOUNTS_SET_ALL:
            return [...action.payload.bankAccounts];
        case bankAccount.ActionTypes.BANK_ACCOUNTS_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case bankAccount.ActionTypes.BANK_ACCOUNTS_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.bankAccount) : item);
            }
            else {
                return [...state, action.payload.bankAccount];
            }
            ;
        default:
            return state;
    }
}
;
//# sourceMappingURL=bank-accounts.reducer.js.map