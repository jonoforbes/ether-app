var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppointmentsSandbox } from "../../appointments.sandbox";
export let CalendarDetailContainer = class CalendarDetailContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.viewMode$ = this.sb.viewMode$;
        this.filteredAppointments$ = this.sb.filteredAppointments$;
        this.currentDate$ = this.sb.currentDate$;
        this.currentYear$ = this.sb.currentYear$;
        this.currentMonth$ = this.sb.currentMonth$;
        this.currentWeek$ = this.sb.currentWeek$;
    }
    onSetViewMode(viewMode) {
        this.sb.onSetViewMode(viewMode);
    }
    onNext() {
        this.sb.onNext();
    }
    onPrevious() {
        this.sb.onPrevious();
    }
    onSearchChanged(e) {
        this.sb.onSearchChanged(e);
    }
    onAddAppointment(appointment) {
        this.sb.addAppointment(appointment);
    }
    onRemoveAppointment(appointment) {
        this.sb.removeAppointment(appointment);
    }
};
CalendarDetailContainer = __decorate([
    Component({
        selector: "calendar-detail",
        template: `
    <topbar
                (next)="onNext()"
                (previous)="onPrevious()"
                (setViewMode)="onSetViewMode($event)"
                (searchChanged)="onSearchChanged($event)"
        ></topbar>
        
            <day-view
                    
                    [appointments]="filteredAppointments$|async"
                    [date]="currentDate$|async"
                    (removeAppointment)="onRemoveAppointment($event)"
                    (addAppointment)="onAddAppointment($event)"
            >
            </day-view>
            <week-view
                    
                    [appointments]="filteredAppointments$|async"
                    [year]="currentYear$|async"
                    [week]="currentWeek$|async"
                    (removeAppointment)="onRemoveAppointment($event)"
                    (addAppointment)="onAddAppointment($event)"
            >
            </week-view>
            <month-view
                    
                    [month]="currentMonth$|async"
                    [year]="currentYear$|async"
                    [appointments]="filteredAppointments$|async"
                    (removeAppointment)="onRemoveAppointment($event)"
                    (addAppointment)="onAddAppointment($event)"
            >
        </month-view>
        


    `
    }), 
    __metadata('design:paramtypes', [AppointmentsSandbox, ActivatedRoute, Router])
], CalendarDetailContainer);
//# sourceMappingURL=calendar-detail.container.js.map