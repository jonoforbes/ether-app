import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { ContactsSandbox } from "../../contacts.sandbox"; 

@Component({
    selector: "contacts-page",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        
        <div style="height: 100vh !important">
            <md-sidenav-container class="example-sidenav-fab-container">
                
                <md-sidenav #sidenav mode="side" [opened]="!(isCollapsed$| async)" align="start" class="left-sidenav">
                
                    <router-outlet name="m"></router-outlet>

                </md-sidenav>
                
                <router-outlet name="d" ></router-outlet>
            
            </md-sidenav-container>
            </div>


        
    
    `
})
export class ContactsPageContainer {
    isCollapsed$ = this.sb.isCollapsed$;
    constructor(private sb: ContactsSandbox) {

    }

}