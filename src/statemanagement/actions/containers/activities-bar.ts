import { type } from "../../util/util";
import { Action } from "@ngrx/store";
export const ActionTypes = {
    TOGGLE_ACTIVITIES_BAR: type("CONTAINER_ACTIVITIES_BAR_TOGGLE"),
    SET_ACTIVITIES_BAR_MODE: type("CONTAINER_ACTIVITIES_BAR_MODE"),
    SET_ACTIVITIES_BAR_COMMENT_ID: type("CONTAINER_ACTIVITIES_BAR_COMMENT_ID"),
    SET_ACTIVITIES_BAR_COMMENT_TYPE: type("CONTAINER_ACTIVITIES_BAR_COMMENT_TYPE")
}

export class ToggleActivitiesBar implements Action {
    type = ActionTypes.TOGGLE_ACTIVITIES_BAR;
    payload: {};

    public constructor() {}
}

export class SetActivitiesBarMode implements Action {
    type = ActionTypes.SET_ACTIVITIES_BAR_MODE;
    payload: {mode: String};
    constructor(mode: String) {
        this.payload = { mode };
    }
}

export class SetActivitiesBarCommentID implements Action {
    type = ActionTypes.SET_ACTIVITIES_BAR_COMMENT_ID;
    payload: {id: String};
    constructor(id: String) {
        this.payload = {id};
    }
}

export class SetActivitiesBarCommentType implements Action {
    type = ActionTypes.SET_ACTIVITIES_BAR_COMMENT_TYPE;
    payload: {commentType: String};
    constructor(commentType: String) {
        this.payload = {commentType};
    }
}




export type Actions = ToggleActivitiesBar | SetActivitiesBarMode | SetActivitiesBarCommentID | SetActivitiesBarCommentType;