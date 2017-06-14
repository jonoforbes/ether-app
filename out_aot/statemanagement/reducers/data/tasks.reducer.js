import * as task from "../../actions/data/task";
export function tasksReducer(state = [], action) {
    switch (action.type) {
        case task.ActionTypes.TASKS_ADD:
            return [...state, action.payload.task];
        case task.ActionTypes.TASKS_SET_ALL:
            return [...action.payload.tasks];
        case task.ActionTypes.TASKS_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case task.ActionTypes.TASKS_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                console.log("task updated in array");
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.task) : item);
            }
            else {
                console.log("task not found in array");
                return [...state, action.payload.task];
            }
            ;
        case task.ActionTypes.TASKS_UPDATE_ACCOUNT:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, { accountId: action.payload.accountId }) : item);
        case task.ActionTypes.TASKS_UPDATE_ASSIGNEE:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, { recipientId: action.payload.recipientId }) : item);
        case task.ActionTypes.TASKS_UPDATE_CONTACT:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, { contactId: action.payload.contactId }) : item);
        case task.ActionTypes.TASKS_UPDATE_SALE:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, { saleId: action.payload.saleId }) : item);
        case task.ActionTypes.TASKS_UPDATE_STATUS:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, { isCompleted: action.payload.isCompleted }) : item);
        default:
            return state;
    }
}
;
//# sourceMappingURL=tasks.reducer.js.map