import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
import { Appointment } from '../../entities/Appointment';
import { DayWithAppointments } from '../../entities/Day';

@Component({
    selector: 'month-view',
    template: `
        <h2>Month: {{month + 1}}/{{year}}</h2>
        <table>
            <tr *ngFor="let week of weeks">
                <td  *ngFor="let day of week">
                    <div *ngIf="day?.date" fxLayout="column" class="initialsBoxContact" style="margin: 4px; border-radius: 20px">
                        <h1>{{day?.date | date: "dd"}}</h1>
                    </div>
                </td>
            </tr>
        </table>
`
})
export class MonthViewComponent implements OnChanges {
    @Input() month: number;
    @Input() year: number;
    @Input() appointments: Array<Appointment>;

    @Output() public addAppointment = new EventEmitter<Appointment>();
    @Output() public updateAppointment = new EventEmitter<Appointment>();
    @Output() public removeAppointment = new EventEmitter<Appointment>();

    weeks: Array<Array<DayWithAppointments>>;

    ngOnChanges(simpleChanges: any): void {
        if (this.month && this.year) {
            this.weeks = this.calculateMonthWithAppointments(this.month, this.year, this.appointments || []);
        }
    }

    private calculateMonthWithAppointments(month: number, year: number, appointments: Array<Appointment>): Array<Array<DayWithAppointments>> {
        const dayOneM = moment().year(year).month(month).date(1);
        const days = Array.from({length: dayOneM.daysInMonth()}, (value, key) => key + 1);
        console.log('days array', days);
        console.log('dayOneM', dayOneM);
        let res = _.groupBy(days, ((day: number) => moment().year(year).month(month).date(day).week()));
        return Object.keys(res)
            .map((key) => res[key])
            .map((days: Array<number>) => {
                let week: Array<DayWithAppointments> = Array.from({length: 7}, () => null);
                days.forEach((day) => {
                    let dateM = moment().year(year).month(month).date(day);
                    week[dateM.weekday()] = {
                        date: dateM.toDate(),
                        appointments: appointments.filter((appointment: Appointment) => {
                            return dateM.date() === moment(appointment.date).date();
                        })
                    };
                });
                return week;
            });
    }
}