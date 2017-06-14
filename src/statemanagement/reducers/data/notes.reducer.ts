import { Action } from "@ngrx/store";
import * as note from "../../actions/data/note";
import { Note } from "../../../notes/entities/Note";

export function notesReducer(   state: Array<Note> = [],
                                action: note.Actions): Array<Note> {
    switch (action.type) {
        case note.ActionTypes.NOTES_ADD:
            return [...state, action.payload.note];
        case note.ActionTypes.NOTES_SET_ALL:
            return [...action.payload.notes];
        case note.ActionTypes.NOTES_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case note.ActionTypes.NOTES_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.note) : item);
            }
            else {
                return [...state, action.payload.note];
            };
        default:
            return state;
    }
};