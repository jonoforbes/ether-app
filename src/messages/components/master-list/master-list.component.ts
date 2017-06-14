import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { UserData } from "../../../team/entities/UserData";
import { MessagesSandbox } from "../../messages.sandbox";

@Component({
    selector: "messages-master-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

        <md-nav-list>

          <button md-button *ngFor="let item of team" style="align-items: true" (click)="selectThread(item)">
          
            <div fxLayout="column" class="initialsBoxAccountInactive">
                <h1>{{item.firstName | slice:0:1}}{{item.lastName | slice:0:1}}</h1>
            </div>
            <h3 style="margin-top: 17px" md-line>{{item.firstName}} {{item.lastName}}</h3>
            
          
          </button>

      </md-nav-list>
    `
})
export class MessagesMasterListComponent {

    @Input() team: Array<UserData>;

    constructor( private router: Router) {

    }
    selectThread(item: UserData) {
        this.router.navigate(['/messages', {outlets: {'m': ['list'], 'd': [item.userId]}}]);
    }
    
}