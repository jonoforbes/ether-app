import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { Appointment } from "../../../calendar/entities/Appointment";

export const ActionTypes = {
    APPOINTMENTS_ADD: type("DATA_APPOINTMENTS_ADD"),
    APPOINTMENTS_REMOVE: type("DATA_APPOINTMENTS_REMOVE"),
    APPOINTMENTS_UPDATE: type("DATA_APPOINTMENTS_UPDATE"),
    APPOINTMENTS_UPDATE_ACCOUNT: type("DATA_APPOINTMENTS_UPDATE_ACCOUNT"),
    APPOINTMENTS_UPDATE_CONTACT: type("DATA_APPOINTMENTS_UPDATE_CONTACT"),
    APPOINTMENTS_UPDATE_SALE: type("DATA_APPOINTMENTS_UPDATE_SALE"),
    APPOINTMENTS_UPDATE_INVITEES: type("DATA_APPOINTMENTS_UPDATE_INVITEES"),
    APPOINTMENTS_SET_ALL: type("DATA_APPOINTMENTS_ADD_ALL")
}

export class AddAppointment implements Action {
    type = ActionTypes.APPOINTMENTS_ADD;
    payload: {appointment: Appointment};

    constructor(appointment: Appointment) {
        this.payload = {appointment};
    }
}

export class RemoveAppointment implements Action {
    type = ActionTypes.APPOINTMENTS_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateAppointment implements Action {
    type = ActionTypes.APPOINTMENTS_UPDATE;
    payload: {_id: string, appointment: Appointment};

    constructor(_id: string, appointment: Appointment) {
        this.payload = {_id, appointment}
    }
}

export class UpdateAppointmentAccount implements Action {
    type = ActionTypes.APPOINTMENTS_UPDATE_ACCOUNT;
    payload: {_id: string, accountId: string};

    constructor(_id: string, accountId: string) {
        this.payload = {_id, accountId};
    }
}

export class UpdateAppointmentContact implements Action {
    type = ActionTypes.APPOINTMENTS_UPDATE_CONTACT;
    payload: {_id: string, contactId: string};

    constructor(_id: string, contactId: string) {
        this.payload = {_id, contactId};
    }
}

export class UpdateAppointmentSale implements Action {
    type = ActionTypes.APPOINTMENTS_UPDATE_SALE;
    payload: {_id: string, saleId: string};

    constructor(_id: string, saleId: string) {
        this.payload = {_id, saleId};
    }
}

export class UpdateAppointmentInvitees implements Action {
    type = ActionTypes.APPOINTMENTS_UPDATE_INVITEES;
    payload: {_id: string, invitees: String[]};

    constructor(_id: string, invitees: String[]) {
        this.payload = {_id, invitees};
    }
}

export class SetAllAppointments implements Action {
    type = ActionTypes.APPOINTMENTS_SET_ALL;
    payload: {appointments: Appointment[]};

    constructor(appointments: Appointment[]) {
        this.payload = {appointments}
    }
}

export type Actions = AddAppointment 
| RemoveAppointment 
| UpdateAppointment 
| SetAllAppointments 
| UpdateAppointmentAccount
| UpdateAppointmentContact 
| UpdateAppointmentSale 
| UpdateAppointmentInvitees;