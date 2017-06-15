import { type } from "../../util/util";
export const ActionTypes = {
    COMMENTS_ADD: type("DATA_COMMENTS_ADD"),
    COMMENTS_REMOVE: type("DATA_COMMENTS_REMOVE"),
    COMMENTS_UPDATE: type("DATA_COMMENTS_UPDATE"),
    COMMENTS_SET_ALL: type("DATA_COMMENTS_ADD_ALL")
};
export class AddComment {
    constructor(comment) {
        this.type = ActionTypes.COMMENTS_ADD;
        this.payload = { comment };
    }
}
export class RemoveComment {
    constructor(_id) {
        this.type = ActionTypes.COMMENTS_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateComment {
    constructor(_id, comment) {
        this.type = ActionTypes.COMMENTS_UPDATE;
        this.payload = { _id, comment };
    }
}
export class SetAllComments {
    constructor(comments) {
        this.type = ActionTypes.COMMENTS_SET_ALL;
        this.payload = { comments };
    }
}
//# sourceMappingURL=comment.js.map