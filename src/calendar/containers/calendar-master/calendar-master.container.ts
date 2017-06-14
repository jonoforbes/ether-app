import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { AppointmentsSandbox } from "../../appointments.sandbox"; 
// import { MasterListComponent } from "../../components/master-list/master-list.component";

@Component({
    selector: "contacts-master",
    template: `
        
        <md-input-container floatingPlaceholder="false" class="etherSearch" dividerColor="#7BACC9">
        <input mdInput placeholder="Search Calendar" style="width: 120px; margin-top: -10px; margin-left: 5px; color: #838383 !important;">
        <button md-icon-button style="margin-left: 120px; margin-top: -50px !important;"><md-icon style="color: #838383; width: 20px;">search</md-icon></button>
      </md-input-container>

      
        
    
    `
})
export class CalendarMasterContainer {

    currentDate$ = this.sb.currentDate$;

    searchCtrl = new FormControl("");

    contacts$ = this.sb.appointments$;
    
    constructor(private sb: AppointmentsSandbox) {
        
    }
}