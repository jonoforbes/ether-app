import * as masterBar from "../../actions/containers/master-bar";
let initialState = {
    isCollapsed: false
};
export function masterBarReducer(state = initialState, action) {
    switch (action.type) {
        case masterBar.ActionTypes.TOGGLE_MASTER_BAR:
            return {
                isCollapsed: !state.isCollapsed
            };
        default:
            return state;
    }
}
;
//# sourceMappingURL=master-bar.reducer.js.map