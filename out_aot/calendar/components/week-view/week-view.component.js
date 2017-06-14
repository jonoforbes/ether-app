var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';
export let WeekViewComponent = class WeekViewComponent {
    constructor() {
        this.addAppointment = new EventEmitter();
        this.updateAppointment = new EventEmitter();
        this.removeAppointment = new EventEmitter();
        this.days = [];
    }
    ngOnChanges(simpleChanges) {
        if (this.week && this.year) {
            this.days = this.calculateDaysWithAppointments(this.week, this.year, this.appointments || []);
        }
    }
    calculateDaysWithAppointments(week, year, appointments) {
        let sundayM = moment().year(year).week(week).startOf("week");
        return Array.from({ length: 7 }, () => null)
            .map((val, i) => {
            return {
                date: i > 0 ? moment(sundayM.toDate()).add(i, "days").toDate() : sundayM.toDate(),
                appointments: appointments.filter((appointment) => {
                    return moment(sundayM.toDate()).weekday(i).date() === moment(appointment.date).date();
                })
            };
        });
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Number)
], WeekViewComponent.prototype, "week", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], WeekViewComponent.prototype, "year", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Array)
], WeekViewComponent.prototype, "appointments", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], WeekViewComponent.prototype, "addAppointment", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], WeekViewComponent.prototype, "updateAppointment", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], WeekViewComponent.prototype, "removeAppointment", void 0);
WeekViewComponent = __decorate([
    Component({
        selector: 'week-view',
        template: `
        <h2>Week: {{week}}/{{year}}</h2>
        <table>
            <tr>
                <td *ngFor="let day of days">
                    <day-detail
                            (addAppointment)="addAppointment.emit($event)"
                            (removeAppointment)="removeAppointment.emit($event)"
                            (updateAppointment)="updateAppointment.emit($event)"
                            [date]="day?.date"
                            [appointments]="day?.appointments">
                    </day-detail>
                </td>
            </tr>
        </table>

    `
    }), 
    __metadata('design:paramtypes', [])
], WeekViewComponent);
//# sourceMappingURL=week-view.component.js.map