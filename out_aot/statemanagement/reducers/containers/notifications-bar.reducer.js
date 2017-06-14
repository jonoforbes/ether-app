import * as notificationsBar from "../../actions/containers/notifications-bar";
let initialState = {
    isCollapsed: true
};
export function notificationsBarReducer(state = initialState, action) {
    switch (action.type) {
        case notificationsBar.ActionTypes.TOGGLE_NOTIFICATIONS_BAR:
            return {
                isCollapsed: !state.isCollapsed
            };
        default:
            return state;
    }
}
;
//# sourceMappingURL=notifications-bar.reducer.js.map