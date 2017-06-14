import { Component, ChangeDetectionStrategy } from "@angular/core";
import { UserData } from "../../entities/UserData";
import { Observable } from "rxjs/Observable";
import { TeamSandbox } from "../../team.sandbox";

@Component({
    selector: "team-page",
    changeDetection: ChangeDetectionStrategy.OnPush,
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
export class TeamPageContainer {
    isCollapsed$ = this.sb.isCollapsed$;
    constructor(private sb: TeamSandbox) {
        
    }
}