import * as notification from "../../actions/data/notification";
export function notificationsReducer(state = [], action) {
    switch (action.type) {
        case notification.ActionTypes.NOTIFICATIONS_ADD:
            return [...state, action.payload.notification];
        case notification.ActionTypes.NOTIFICATIONS_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case notification.ActionTypes.NOTIFICATIONS_SET_ALL:
            return [...action.payload.notifications];
        default:
            return state;
    }
}
;
//# sourceMappingURL=notifications.reducer.js.map