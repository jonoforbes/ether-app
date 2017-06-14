import { type } from "../../util/util";
import { Action } from "@ngrx/store";

export const ActionTypes = {
    TOGGLE_MASTER_BAR: type("CONTAINER_MASTER_BAR_TOGGLE")
}

export class ToggleMasterBar implements Action {
    type = ActionTypes.TOGGLE_MASTER_BAR;

    public constructor() {}
}

export type Actions = ToggleMasterBar;