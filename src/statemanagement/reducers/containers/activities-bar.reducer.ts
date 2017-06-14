import { ActivitiesBarContainerState } from "../../state/ContainersState";
import * as activitiesBar from "../../actions/containers/activities-bar";

let initialState: ActivitiesBarContainerState = {
    isCollapsed: false,
    mode: '',
    commentId: "",
    commentSection: ""
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
                    commentSection: state.commentSection
                };
            case activitiesBar.ActionTypes.SET_ACTIVITIES_BAR_MODE:
                return {
                    isCollapsed: state.isCollapsed,
                    mode: action.payload.mode,
                    commentId: state.commentId,
                    commentSection: state.commentSection
                };
            case activitiesBar.ActionTypes.SET_ACTIVITIES_BAR_COMMENT_ID:
                return {
                    isCollapsed: state.isCollapsed,
                    mode: state.mode,
                    commentId: action.payload.id,
                    commentSection: state.commentSection
                };
            case activitiesBar.ActionTypes.SET_ACTIVITIES_BAR_COMMENT_SECTION:
                return {
                    isCollapsed: state.isCollapsed,
                    mode: state.mode,
                    commentId: state.commentId,
                    commentSection: action.payload.section
                }
            default:
                return state;
        }
};
