import * as message from "../../actions/data/message";
export function messagesReducer(state = [], action) {
    switch (action.type) {
        case message.ActionTypes.MESSAGES_ADD:
            return [...state, action.payload.message];
        case message.ActionTypes.MESSAGES_SET_ALL:
            return [...action.payload.messages];
        case message.ActionTypes.MESSAGES_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case message.ActionTypes.MESSAGES_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                console.log("message updated in array");
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.message) : item);
            }
            else {
                console.log("message not found in array");
                return [...state, action.payload.message];
            }
            ;
        default:
            return state;
    }
}
;
//# sourceMappingURL=messages.reducer.js.map