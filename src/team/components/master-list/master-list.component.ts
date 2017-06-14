import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { UserData } from "../../entities/UserData";
import { TeamSandbox } from "../../team.sandbox";

@Component({
    selector: "team-master-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button md-button style="text-align: left !important; padding: 5px; margin-top: -10px;">
          <p style="margin: 4px 170px 4px 10px;">+ &nbsp; &nbsp;Add New Team Member</p>
        </button>
        <md-nav-list>
        <button md-button *ngFor="let item of team" style="align-items: true">
          
          
            <h3 md-line>{{item.firstName}} {{item.lastName}}</h3>
            
          
          </button>

      </md-nav-list>
    `
})
export class TeamMasterListComponent {
    @Input() team: Array<UserData>;

    constructor( private router: Router) {

    }
    
}