import { Component, ChangeDetectionStrategy } from "@angular/core";
import { UserData } from "../../../team/entities/UserData";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { TeamSandbox } from "../../../team/team.sandbox"; 
import { MessagesMasterListComponent } from "../../components/master-list/master-list.component";


@Component({
    selector: "messages-master",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        
        <md-input-container floatingPlaceholder="false" class="etherSearch" dividerColor="#7BACC9">
        <input mdInput placeholder="Search Messages" style="width: 120px; margin-top: -10px; margin-left: 5px; color: #838383 !important;" [formControl]="searchCtrl">
        <button md-icon-button style="margin-left: 120px; margin-top: -50px !important;"><md-icon style="color: #838383; width: 20px;">search</md-icon></button>
      </md-input-container>
        
        <messages-master-list [team]="matchingTeam$ | async"></messages-master-list>
    `
})
export class MessagesMasterContainer {
    searchCtrl = new FormControl("");

    team$ = this.sb.team$;
    matchingTeam$ = Observable.combineLatest(this.searchCtrl.valueChanges.startWith(""), this.team$,
    (term: string, team: Array<UserData>) => {
        return team.filter(item => item.firstName.toLowerCase().indexOf(term) > -1);
    });
    constructor(private sb: TeamSandbox) {
        
    }
}