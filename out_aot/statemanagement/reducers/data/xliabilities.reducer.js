import * as xLiability from "../../actions/data/xliability";
export function xLiabilitiesReducer(state = [], action) {
    switch (action.type) {
        case xLiability.ActionTypes.XLIABILITIES_ADD:
            return [...state, action.payload.xLiability];
        case xLiability.ActionTypes.XLIABILITIES_SET_ALL:
            return [...action.payload.xLiabilities];
        case xLiability.ActionTypes.XLIABILITIES_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case xLiability.ActionTypes.XLIABILITIES_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.xLiability) : item);
            }
            else {
                return [...state, action.payload.xLiability];
            }
            ;
        default:
            return state;
    }
}
;
//# sourceMappingURL=xliabilities.reducer.js.map