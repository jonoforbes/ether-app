import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { Note } from "../../../notes/entities/Note";

export const ActionTypes = {
    NOTES_ADD: type("DATA_NOTES_ADD"),
    NOTES_REMOVE: type("DATA_NOTES_REMOVE"),
    NOTES_UPDATE: type("DATA_NOTES_UPDATE"),
    NOTES_SET_ALL: type("DATA_NOTES_ADD_ALL")
}

export class AddNote implements Action {
    type = ActionTypes.NOTES_ADD;
    payload: {note: Note};

    constructor(note: Note) {
        this.payload = { note };
    }
}

export class RemoveNote implements Action {
    type = ActionTypes.NOTES_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = { _id };
    }
}

export class UpdateNote implements Action {
    type = ActionTypes.NOTES_UPDATE;
    payload: {_id: string, note: Note};

    constructor(_id: string, note: Note) {
        this.payload = {_id, note};
    }
}

export class SetAllNotes implements Action {
    type = ActionTypes.NOTES_SET_ALL;
    payload: {notes: Note[]};

    constructor(notes: Note[]) {
        this.payload = { notes };
    }
}

export type Actions = 
    AddNote
    | RemoveNote
    | UpdateNote
    | SetAllNotes;