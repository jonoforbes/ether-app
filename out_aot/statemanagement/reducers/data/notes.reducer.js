import * as note from "../../actions/data/note";
export function notesReducer(state = [], action) {
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
            }
            ;
        default:
            return state;
    }
}
;
//# sourceMappingURL=notes.reducer.js.map