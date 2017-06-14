import * as activity from "../../actions/data/activity";
export function activitiesReducer(state = [], action) {
    switch (action.type) {
        case activity.ActionTypes.ACTIVITIES_ADD:
            return [...state, action.payload.activity];
        case activity.ActionTypes.ACTIVITIES_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case activity.ActionTypes.ACTIVITIES_SET_ALL:
            return [...action.payload.activities];
        default:
            return state;
    }
}
;
//# sourceMappingURL=activities.reducer.js.map