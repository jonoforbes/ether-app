import * as comment from "../../actions/data/comment";
export function commentsReducer(state = [], action) {
    switch (action.type) {
        case comment.ActionTypes.COMMENTS_ADD:
            return [...state, action.payload.comment];
        case comment.ActionTypes.COMMENTS_SET_ALL:
            return [...action.payload.comments];
        case comment.ActionTypes.COMMENTS_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case comment.ActionTypes.COMMENTS_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                console.log("comment updated in array");
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.comment) : item);
            }
            else {
                console.log("comment not found in array");
                return [...state, action.payload.comment];
            }
            ;
        default:
            return state;
    }
}
;
//# sourceMappingURL=comments.reducer.js.map