import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { Comment } from "../../../comments/entities/Comment";

export const ActionTypes = {
    COMMENTS_ADD: type("DATA_COMMENTS_ADD"),
    COMMENTS_REMOVE: type("DATA_COMMENTS_REMOVE"),
    COMMENTS_UPDATE: type("DATA_COMMENTS_UPDATE"),
    COMMENTS_SET_ALL: type("DATA_COMMENTS_ADD_ALL")
}

export class AddComment implements Action {
    type = ActionTypes.COMMENTS_ADD;
    payload: {comment: Comment};

    constructor(comment: Comment) {
        this.payload = {comment};
    }
}

export class RemoveComment implements Action {
    type = ActionTypes.COMMENTS_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateComment implements Action {
    type = ActionTypes.COMMENTS_UPDATE;
    payload: {_id: string, comment: Comment};

    constructor(_id: string, comment: Comment) {
        this.payload = {_id, comment};
    }
}

export class SetAllComments implements Action {
    type = ActionTypes.COMMENTS_SET_ALL;
    payload: {comments: Comment[]};

    constructor(comments: Comment[]) {
        this.payload = {comments};
    }
}

export type Actions = 
    AddComment
    | RemoveComment 
    | UpdateComment 
    | SetAllComments;