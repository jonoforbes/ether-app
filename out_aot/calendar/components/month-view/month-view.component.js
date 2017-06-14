var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
export let MonthViewComponent = class MonthViewComponent {
    constructor() {
        this.addAppointment = new EventEmitter();
        this.updateAppointment = new EventEmitter();
        this.removeAppointment = new EventEmitter();
    }
    ngOnChanges(simpleChanges) {
        if (this.month && this.year) {
            this.weeks = this.calculateMonthWithAppointments(this.month, this.year, this.appointments || []);
        }
    }
    calculateMonthWithAppointments(month, year, appointments) {
        const dayOneM = moment().year(year).month(month).date(1);
        const days = Array.from({ length: dayOneM.daysInMonth() }, (value, key) => key + 1);
        console.log('days array', days);
        console.log('dayOneM', dayOneM);
        let res = _.groupBy(days, ((day) => moment().year(year).month(month).date(day).week()));
        return Object.keys(res)
            .map((key) => res[key])
            .map((days) => {
            let week = Array.from({ length: 7 }, () => null);
            days.forEach((day) => {
                let dateM = moment().year(year).month(month).date(day);
                week[dateM.weekday()] = {
                    date: dateM.toDate(),
                    appointments: appointments.filter((appointment) => {
                        return dateM.date() === moment(appointment.date).date();
                    })
                };
            });
            return week;
        });
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Number)
], MonthViewComponent.prototype, "month", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], MonthViewComponent.prototype, "year", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Array)
], MonthViewComponent.prototype, "appointments", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], MonthViewComponent.prototype, "addAppointment", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], MonthViewComponent.prototype, "updateAppointment", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], MonthViewComponent.prototype, "removeAppointment", void 0);
MonthViewComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [])
], MonthViewComponent);
//# sourceMappingURL=month-view.component.js.map