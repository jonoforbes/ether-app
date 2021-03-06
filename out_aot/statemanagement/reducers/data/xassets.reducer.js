import * as xAsset from "../../actions/data/xasset";
export function xAssetsReducer(state = [], action) {
    switch (action.type) {
        case xAsset.ActionTypes.XASSETS_ADD:
            return [...state, action.payload.xAsset];
        case xAsset.ActionTypes.XASSETS_SET_ALL:
            return [...action.payload.xAssets];
        case xAsset.ActionTypes.XASSETS_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case xAsset.ActionTypes.XASSETS_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.xAsset) : item);
            }
            else {
                return [...state, action.payload.xAsset];
            }
            ;
        default:
            return state;
    }
}
;
//# sourceMappingURL=xassets.reducer.js.map