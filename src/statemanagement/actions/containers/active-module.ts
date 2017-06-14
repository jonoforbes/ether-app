import { type } from "../../util/util";
import { Action } from "@ngrx/store";

export const ActionTypes = {
    ACTIVATE_ROUTE: type("CONTAINER_ACTIVATE_ROUTE"),
    // ACTIVATE_SALES: type("CONTAINER_ACTIVATE_SALES"),
    // ACTIVATE_DOCUMENTS: type("CONTAINER_ACTIVATE_DOCUMENTS"),
    // ACTIVATE_ACCOUNTS: type("CONTAINER_ACTIVATE_ACCOUNTS"),
    // ACTIVATE_MARKETS: type("CONTAINER_ACTIVATE_MARKETS"),
    // ACTIVATE_MAPS: type("CONTAINER_ACTIVATE_MAPS"),
    // ACTIVATE_CONTACTS: type("CONTAINER_ACTIVATE_CONTACTS"),
    // ACTIVATE_CALENDAR: type("CONTAINER_ACTIVATE_CALENDAR"),
    // ACTIVATE_TASKS: type("CONTAINER_ACTIVATE_TASKS"),
}

export class ActivateRoute implements Action {
    type = ActionTypes.ACTIVATE_ROUTE;
    payload: {moduleName: String};

    constructor(moduleName: String) {
        this.payload = { moduleName };
    }
}

export type Actions = ActivateRoute;

// export class ActivateSales implements Action {
//     type = ActionTypes.ACTIVATE_SALES;
//     payload: {moduleName: String};

//     constructor(moduleName: String) {
//         this.payload = { moduleName };
//     }
// }

// export class ActivateDocuments implements Action {
//     type = ActionTypes.ACTIVATE_DOCUMENTS;
//     payload: {moduleName: String};

//     constructor(moduleName: String) {
//         this.payload = { moduleName };
//     }
// }

// export class Activate