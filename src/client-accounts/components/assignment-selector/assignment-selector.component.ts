import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, OnInit } from "@angular/core";
import { ClientAccount } from "../../entities/ClientAccount";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
    selector: "account-assignment-selector",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        
    <button *ngIf="fullTitle" md-menu-item [mdMenuTriggerFor]="statusMenu" type="button">
      <h1>Link to Account</h1>
    </button>
    <button *ngIf="!fullTitle" style="margin-left: 10px" md-menu-item [mdMenuTriggerFor]="statusMenu" type="button">
      <md-icon>more_vert</md-icon>
    </button>
    <md-menu x-position="before" #statusMenu="mdMenu" style="max-height: 100px !important">
        <button *ngFor="let account of clientAccounts" md-menu-item (click)="onUpdateAssignee(account._id)" type="button">
            <h1 style="margin-left: 20px">{{account.accountName}}</h1>
        </button>
        <button md-menu-item fxLayout="row">
            <h1>Go to Accounts</h1>
            <md-icon style="margin-top: 2px">chevron_right</md-icon>
        </button>
    </md-menu>

    
    `

})
export class ClientAccountAssignmentSelectorComponent implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    @Input() fullTitle: Boolean = false;
    @Output() updateClientAccount = new EventEmitter<String>();
    

    constructor(private sb: ClientAccountsSandbox) {

    }

    clientAccounts = new Array<ClientAccount>();

    ngOnInit() {

        this.sb.clientAccounts$
        .take(1)
        .subscribe((clientAccounts: ClientAccount[]) => {
            this.clientAccounts = clientAccounts;
        })

        // this.selectedUser$ = this.sb.team$
        // .map((team: any) => {
        //     return team.filter((userData: UserData) => {
        //         return userData.userId == this.id;
        //     });
        // });
        
    }

    onUpdateAssignee(accountId: string): void {
        console.log('account emitted through selector', accountId);
        this.updateClientAccount.emit(accountId);
    }

}