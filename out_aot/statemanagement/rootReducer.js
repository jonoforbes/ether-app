import { collapsableSidebarReducer } from "./reducers/containers/collapsable-sidebar.reducer";
import { activitiesBarReducer } from "./reducers/containers/activities-bar.reducer";
import { masterBarReducer } from "./reducers/containers/master-bar.reducer";
import { applicationReducer } from "./reducers/containers/application.reducer";
import { activeModuleReducer } from "./reducers/containers/active-module.reducer";
import { authenticationReducer } from "./reducers/data/authentication.reducer";
import { contactsReducer } from "./reducers/data/contacts.reducer";
import { notesReducer } from "./reducers/data/notes.reducer";
import { messagesReducer } from "./reducers/data/messages.reducer";
import { userDataReducer } from "./reducers/data/user-data.reducer";
import { addressesReducer } from "./reducers/data/addresses.reducer";
import { clientAccountsReducer } from "./reducers/data/client-accounts.reducer";
import { appointmentsReducer } from "./reducers/data/appointments.reducer";
import { productsReducer } from "./reducers/data/products.reducer";
import { tasksReducer } from "./reducers/data/tasks.reducer";
import { clientDocumentsReducer } from "./reducers/data/client-documents.reducer";
import { salesReducer } from "./reducers/data/sales.reducer";
import { activitiesReducer } from "./reducers/data/activities.reducer";
import { xAssetsReducer } from "./reducers/data/xassets.reducer";
import { xLiabilitiesReducer } from "./reducers/data/xliabilities.reducer";
import { xPensionsReducer } from "./reducers/data/xpensions.reducer";
import { xProtectionsReducer } from "./reducers/data/xprotections.reducer";
import { bankAccountsReducer } from "./reducers/data/bank-accounts.reducer";
import { commentsReducer } from "./reducers/data/comments.reducer";
import { combineReducers } from "@ngrx/store";
let dataReducers = combineReducers({
    authentication: authenticationReducer,
    contacts: contactsReducer,
    notes: notesReducer,
    messages: messagesReducer,
    userData: userDataReducer,
    addresses: addressesReducer,
    clientAccounts: clientAccountsReducer,
    appointments: appointmentsReducer,
    products: productsReducer,
    tasks: tasksReducer,
    clientDocuments: clientDocumentsReducer,
    sale: salesReducer,
    activities: activitiesReducer,
    xAssets: xAssetsReducer,
    xLiabilities: xLiabilitiesReducer,
    xPensions: xPensionsReducer,
    xProtections: xProtectionsReducer,
    bankAccounts: bankAccountsReducer,
    comments: commentsReducer
});
let containersReducers = combineReducers({
    collapsableSidebar: collapsableSidebarReducer,
    activitiesBar: activitiesBarReducer,
    masterBar: masterBarReducer,
    application: applicationReducer,
    activeModule: activeModuleReducer
});
let productionReducer = combineReducers({
    data: dataReducers,
    containers: containersReducers
});
export function rootReducer(state, action) {
    return productionReducer(state, action);
}
//# sourceMappingURL=rootReducer.js.map