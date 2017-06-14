import * as xPension from "../../actions/data/xpension";
export function xPensionsReducer(state = [], action) {
    switch (action.type) {
        case xPension.ActionTypes.XPENSIONS_ADD:
            return [...state, action.payload.xPension];
        case xPension.ActionTypes.XPENSIONS_SET_ALL:
            return [...action.payload.xPensions];
        case xPension.ActionTypes.XPENSIONS_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case xPension.ActionTypes.XPENSIONS_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.xPension) : item);
            }
            else {
                return [...state, action.payload.xPension];
            }
            ;
        default:
            return state;
    }
}
;
//# sourceMappingURL=xpensions.reducer.js.map