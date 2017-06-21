import { ActivitiesBarContainerState } from "../../state/ContainersState";
import * as activitiesBar from "../../actions/containers/activities-bar";

let initialState: ActivitiesBarContainerState = {
    isCollapsed: false,
    mode: '',
    commentId: "",
    commentType: ""
};

export function activitiesBarReducer(
    state: ActivitiesBarContainerState = initialState,
    action: activitiesBar.Actions): ActivitiesBarContainerState {
        switch (action.type) {
            case activitiesBar.ActionTypes.TOGGLE_ACTIVITIES_BAR:
                return {
                    isCollapsed: !state.isCollapsed,
                    mode: state.mode,
                    commentId: state.commentId,
                    commentType: state.commentType
                };
            case activitiesBar.ActionTypes.SET_ACTIVITIES_BAR_MODE:
                return {
                    isCollapsed: state.isCollapsed,
                    mode: action.payload.mode,
                    commentId: state.commentId,
                    commentType: state.commentType
                };
            case activitiesBar.ActionTypes.SET_ACTIVITIES_BAR_COMMENT_ID:
                return {
                    isCollapsed: state.isCollapsed,
                    mode: state.mode,
                    commentId: action.payload.id,
                    commentType: state.commentType
                };
            case activitiesBar.ActionTypes.SET_ACTIVITIES_BAR_COMMENT_TYPE:
                return {
                    isCollapsed: state.isCollapsed,
                    mode: state.mode,
                    commentId: state.commentId,
                    commentType: action.payload.commentType
                }
            default:
                return state;
        }
};
