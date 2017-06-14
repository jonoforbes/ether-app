import * as xProtection from "../../actions/data/xprotection";
export function xProtectionsReducer(state = [], action) {
    switch (action.type) {
        case xProtection.ActionTypes.XPROTECTIONS_ADD:
            return [...state, action.payload.xProtection];
        case xProtection.ActionTypes.XPROTECTIONS_SET_ALL:
            return [...action.payload.xProtections];
        case xProtection.ActionTypes.XPROTECTIONS_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case xProtection.ActionTypes.XPROTECTIONS_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.xProtection) : item);
            }
            else {
                return [...state, action.payload.xProtection];
            }
            ;
        default:
            return state;
    }
}
;
//# sourceMappingURL=xprotections.reducer.js.map