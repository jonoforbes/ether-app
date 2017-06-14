import { Component } from "@angular/core";
import { Appointment } from "../../entities/Appointment";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { AppointmentsSandbox } from "../../appointments.sandbox"; 


@Component({
    selector: "calendar-page",
    template: `
        
        <div>
            <md-sidenav-container class="example-sidenav-fab-container">
                
                <md-sidenav #sidenav mode="side" [opened]="!(isCollapsed$| async)" align="start" class="left-sidenav">
                
                    <router-outlet name="m"></router-outlet>

                </md-sidenav>
                
                <router-outlet name="d" ></router-outlet>
            
            </md-sidenav-container>
            </div>


        
    
    `
})
export class CalendarPageContainer {
    isCollapsed$ = this.sb.isCollapsed$;
    constructor(private sb: AppointmentsSandbox) {

    }

}