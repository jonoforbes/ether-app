import { Component, ChangeDetectionStrategy } from "@angular/core";
import { UserData } from "../../entities/UserData";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { TeamSandbox } from "../../team.sandbox"; 
import { TeamMasterListComponent } from "../../components/master-list/master-list.component";

@Component({
    selector: "team-master",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        
        <md-input-container floatingPlaceholder="false" class="etherSearch" dividerColor="#7BACC9">
        <input mdInput placeholder="Search Team" style="width: 120px; margin-top: -10px; margin-left: 5px; color: #838383 !important;" [formControl]="searchCtrl">
        <button md-icon-button style="margin-left: 120px; margin-top: -50px !important;"><md-icon style="color: #838383; width: 20px;">search</md-icon></button>
      </md-input-container>
        
        <team-master-list [team]="matchingTeam$ | async"></team-master-list>
    `
})
export class TeamMasterContainer {
    searchCtrl = new FormControl("");

    team$ = this.sb.team$;
    matchingTeam$ = Observable.combineLatest(this.searchCtrl.valueChanges.startWith(""), this.team$,
    (term: string, team: Array<UserData>) => {
        return team.filter(item => item.firstName.toLowerCase().indexOf(term) > -1);
    });
    constructor(private sb: TeamSandbox) {
        console.log("Team", this.team$)
    }
}