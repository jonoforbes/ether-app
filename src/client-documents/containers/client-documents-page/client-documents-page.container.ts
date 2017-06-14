import { Component } from "@angular/core";
import { ClientDocument } from "../../entities/ClientDocument";
import { Observable } from "rxjs/Observable";
import { ClientDocumentsSandbox } from "../../client-documents.sandbox";

@Component({
    selector: "client-documents-page",
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
export class ClientDocumentsPageContainer {
    isCollapsed$ = this.sb.isCollapsed$;

    constructor(private sb: ClientDocumentsSandbox) {
        
    }
    
}