import * as product from "../../actions/data/product";
export function productsReducer(state = [], action) {
    switch (action.type) {
        case product.ActionTypes.PRODUCTS_ADD:
            return [...state, action.payload.product];
        case product.ActionTypes.PRODUCTS_SET_ALL:
            return [...action.payload.products];
        case product.ActionTypes.PRODUCTS_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case product.ActionTypes.PRODUCTS_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                console.log("product updated in array");
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.product) : item);
            }
            else {
                console.log("product not found in array");
                return [...state, action.payload.product];
            }
            ;
        default:
            return state;
    }
}
;
//# sourceMappingURL=products.reducer.js.map