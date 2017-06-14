import * as contact from "../../actions/data/contact";
export function contactsReducer(state = [], action) {
    switch (action.type) {
        case contact.ActionTypes.CONTACTS_ADD:
            return [...state, action.payload.contact];
        case contact.ActionTypes.CONTACTS_SET_ALL:
            return [...action.payload.contacts];
        case contact.ActionTypes.CONTACTS_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case contact.ActionTypes.CONTACTS_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                console.log("contact already in array");
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.contact) : item);
            }
            else {
                console.log("contact replaced in array");
                return [...state, action.payload.contact];
            }
            ;
        case contact.ActionTypes.CONTACTS_UPDATE_ACCOUNT:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, { accountId: action.payload.accountId }) : item);
        default:
            return state;
    }
}
;
//# sourceMappingURL=contacts.reducer.js.map