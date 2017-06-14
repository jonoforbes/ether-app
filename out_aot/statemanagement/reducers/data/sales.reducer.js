import * as sale from "../../actions/data/sale";
export function salesReducer(state = [], action) {
    switch (action.type) {
        case sale.ActionTypes.SALES_ADD:
            return [...state, action.payload.sale];
        case sale.ActionTypes.SALES_SET_ALL:
            return [...action.payload.sales];
        case sale.ActionTypes.SALES_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case sale.ActionTypes.SALES_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                console.log("sale updated in array");
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.sale) : item);
            }
            else {
                console.log("sale not found in array");
                return [...state, action.payload.sale];
            }
            ;
        case sale.ActionTypes.SALES_UPDATE_ACCOUNT:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, { accountId: action.payload.accountId }) : item);
        case sale.ActionTypes.SALES_UPDATE_CONTACT:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, { contactId: action.payload.contactId }) : item);
        case sale.ActionTypes.SALES_UPDATE_PRODUCT:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, { productId: action.payload.productId }) : item);
        default:
            return state;
    }
}
;
//# sourceMappingURL=sales.reducer.js.map