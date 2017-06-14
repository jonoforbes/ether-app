import { type } from "../../util/util";
export const ActionTypes = {
    APPOINTMENTS_ADD: type("DATA_APPOINTMENTS_ADD"),
    APPOINTMENTS_REMOVE: type("DATA_APPOINTMENTS_REMOVE"),
    APPOINTMENTS_UPDATE: type("DATA_APPOINTMENTS_UPDATE"),
    APPOINTMENTS_UPDATE_ACCOUNT: type("DATA_APPOINTMENTS_UPDATE_ACCOUNT"),
    APPOINTMENTS_UPDATE_CONTACT: type("DATA_APPOINTMENTS_UPDATE_CONTACT"),
    APPOINTMENTS_UPDATE_SALE: type("DATA_APPOINTMENTS_UPDATE_SALE"),
    APPOINTMENTS_UPDATE_INVITEES: type("DATA_APPOINTMENTS_UPDATE_INVITEES"),
    APPOINTMENTS_SET_ALL: type("DATA_APPOINTMENTS_ADD_ALL")
};
export class AddAppointment {
    constructor(appointment) {
        this.type = ActionTypes.APPOINTMENTS_ADD;
        this.payload = { appointment };
    }
}
export class RemoveAppointment {
    constructor(_id) {
        this.type = ActionTypes.APPOINTMENTS_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateAppointment {
    constructor(_id, appointment) {
        this.type = ActionTypes.APPOINTMENTS_UPDATE;
        this.payload = { _id, appointment };
    }
}
export class UpdateAppointmentAccount {
    constructor(_id, accountId) {
        this.type = ActionTypes.APPOINTMENTS_UPDATE_ACCOUNT;
        this.payload = { _id, accountId };
    }
}
export class UpdateAppointmentContact {
    constructor(_id, contactId) {
        this.type = ActionTypes.APPOINTMENTS_UPDATE_CONTACT;
        this.payload = { _id, contactId };
    }
}
export class UpdateAppointmentSale {
    constructor(_id, saleId) {
        this.type = ActionTypes.APPOINTMENTS_UPDATE_SALE;
        this.payload = { _id, saleId };
    }
}
export class UpdateAppointmentInvitees {
    constructor(_id, invitees) {
        this.type = ActionTypes.APPOINTMENTS_UPDATE_INVITEES;
        this.payload = { _id, invitees };
    }
}
export class SetAllAppointments {
    constructor(appointments) {
        this.type = ActionTypes.APPOINTMENTS_SET_ALL;
        this.payload = { appointments };
    }
}
//# sourceMappingURL=appointment.js.map