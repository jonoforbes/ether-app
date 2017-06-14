import { type } from "../../util/util";
export const ActionTypes = {
    NOTES_ADD: type("DATA_NOTES_ADD"),
    NOTES_REMOVE: type("DATA_NOTES_REMOVE"),
    NOTES_UPDATE: type("DATA_NOTES_UPDATE"),
    NOTES_SET_ALL: type("DATA_NOTES_ADD_ALL")
};
export class AddNote {
    constructor(note) {
        this.type = ActionTypes.NOTES_ADD;
        this.payload = { note };
    }
}
export class RemoveNote {
    constructor(_id) {
        this.type = ActionTypes.NOTES_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateNote {
    constructor(_id, note) {
        this.type = ActionTypes.NOTES_UPDATE;
        this.payload = { _id, note };
    }
}
export class SetAllNotes {
    constructor(notes) {
        this.type = ActionTypes.NOTES_SET_ALL;
        this.payload = { notes };
    }
}
//# sourceMappingURL=note.js.map