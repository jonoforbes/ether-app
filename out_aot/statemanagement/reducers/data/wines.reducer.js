import * as wine from "../../actions/data/wine";
export function winesReducer(state = [], action) {
    switch (action.type) {
        case wine.ActionTypes.WINES_ADD:
            return [...state, action.payload.wine];
        case wine.ActionTypes.WINES_SET_ALL:
            return [...action.payload.wines];
        case wine.ActionTypes.WINES_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case wine.ActionTypes.WINES_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                console.log("wine already in array");
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.wine) : item);
            }
            else {
                console.log("wine replaced in array");
                return [...state, action.payload.wine];
            }
            ;
        case wine.ActionTypes.WINES_UPDATE_RATE:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, { myRating: action.payload.myRating }) : item);
        case wine.ActionTypes.WINES_UPDATE_STOCK:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, { inStock: action.payload.myStock }) : item);
        default:
            return state;
    }
}
;
//# sourceMappingURL=wines.reducer.js.map