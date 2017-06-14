import { Component, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { UserData } from "../../entities/UserData";
import { TeamSandbox } from "../../team.sandbox";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "team-assignment-selector",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        
    <button md-menu-item [mdMenuTriggerFor]="statusMenu" type="button">
      <h1>Assign to a Team Member</h1>
    </button>
    <md-menu x-position="before" #statusMenu="mdMenu">
        <button *ngFor="let user of assignableUsers$|async" md-menu-item (click)="onUpdateAssignee(user.userId)" type="button"><h1>{{user.firstName}} {{user.lastName}}</h1></button>

    </md-menu>

    
    `

})
export class TeamAssignmentSelectorComponent implements OnInit {
    @Output() updateAssignee = new EventEmitter<String>();

    constructor(private sb: TeamSandbox) {

    }

    assignableUsers$: Observable<Array<UserData>>;

    ngOnInit() {
        this.assignableUsers$ = this.sb.team$;
        // this.selectedUser$ = this.sb.team$
        // .map((team: any) => {
        //     return team.filter((userData: UserData) => {
        //         return userData.userId == this.id;
        //     });
        // });
        
    }

    onUpdateAssignee(recipientId: string): void {
        console.log('assignee emitted through selector', recipientId);
        this.updateAssignee.emit(recipientId);
    }

}