import { Action } from "@ngrx/store";
import * as appointment from "../../actions/data/appointment";
import { Appointment } from "../../../calendar/entities/Appointment";

export function appointmentsReducer(state: Array<Appointment> = [],
                                    action: appointment.Actions): Array<Appointment> {

    switch (action.type) {
        case appointment.ActionTypes.APPOINTMENTS_ADD:
            return [...state, action.payload.appointment];
        case appointment.ActionTypes.APPOINTMENTS_SET_ALL:
            return [...action.payload.appointments];
        case appointment.ActionTypes.APPOINTMENTS_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case appointment.ActionTypes.APPOINTMENTS_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                console.log("appointment update in array");
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.appointment) : item)
            }
            else {
                console.log("appointment not found in array");
                return [...state, action.payload.appointment];
            };
        case appointment.ActionTypes.APPOINTMENTS_UPDATE_ACCOUNT:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, {accountId: action.payload.accountId}) : item);
        case appointment.ActionTypes.APPOINTMENTS_UPDATE_CONTACT:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, {contactId: action.payload.contactId}) : item);
        case appointment.ActionTypes.APPOINTMENTS_UPDATE_SALE:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, {saleId: action.payload.saleId}) : item);
        case appointment.ActionTypes.APPOINTMENTS_UPDATE_INVITEES:
            return state.map(item => item._id === action.payload._id ? Object.assign({}, item, {invitees: action.payload.invitees}) : item);

        default:
            return state;
    }
};