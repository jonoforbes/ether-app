import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { Activity } from "../../../activities/entities/Activity";

export const ActionTypes = {
    ACTIVITIES_ADD: type("DATA_ACTIVITIES_ADD"),
    ACTIVITIES_REMOVE: type("DATA_ACTIVITIES_REMOVE"),
    ACTIVITIES_SET_ALL: type("DATA_ACTIVITIES_ADD_ALL")
}

export class AddActivity implements Action {
    type = ActionTypes.ACTIVITIES_ADD;
    payload: {activity: Activity};

    constructor(activity: Activity) {
        this.payload = {activity};
    }
}

export class RemoveActivity implements Action {
    type = ActionTypes.ACTIVITIES_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class SetAllActivities implements Action {
    type = ActionTypes.ACTIVITIES_SET_ALL;
    payload: {activities: Activity[]};

    constructor(activities: Activity[]) {
        this.payload = {activities};
    }
}

export type Actions = AddActivity | RemoveActivity | SetAllActivities;