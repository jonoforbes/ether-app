import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Appointment } from "../../entities/Appointment";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { AppointmentsSandbox } from "../../appointments.sandbox"; 
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { Store } from "@ngrx/store";

@Component({
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
})
export class CalendarDetailContainer {
    // sub: any;
    id: string;

    viewMode$ = this.sb.viewMode$;
    filteredAppointments$ = this.sb.filteredAppointments$;
    currentDate$ = this.sb.currentDate$;
    currentYear$ = this.sb.currentYear$;
    currentMonth$ = this.sb.currentMonth$;
    currentWeek$ = this.sb.currentWeek$;
    

    

    constructor(private sb: AppointmentsSandbox,
                private route: ActivatedRoute,
                private router: Router) {
        
    }

    onSetViewMode(viewMode: string): void {
        this.sb.onSetViewMode(viewMode);
    }

    onNext(): void {
        this.sb.onNext();
    }

    onPrevious(): void {
        this.sb.onPrevious();
    }

    onSearchChanged(e: string): void {
        this.sb.onSearchChanged(e);
    }

    onAddAppointment(appointment: Appointment): void {
        this.sb.addAppointment(appointment);
    }

    onRemoveAppointment(appointment: Appointment): void {
        this.sb.removeAppointment(appointment);
    }

    
}