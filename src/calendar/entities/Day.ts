import { Appointment } from './Appointment';
export type DayWithAppointments = {
    date: Date;
    appointments: Array<Appointment>;
}