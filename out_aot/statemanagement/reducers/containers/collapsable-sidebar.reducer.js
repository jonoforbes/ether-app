import * as sidebar from "../../actions/containers/sidebar";
let initialState = {
    isCollapsed: false
};
export function collapsableSidebarReducer(state = initialState, action) {
    switch (action.type) {
        case sidebar.ActionTypes.TOGGLE_SIDEBAR:
            return {
                isCollapsed: !state.isCollapsed
            };
        default:
            return state;
    }
}
;
//# sourceMappingURL=collapsable-sidebar.reducer.js.map