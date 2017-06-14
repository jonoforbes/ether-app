import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { FormGroup} from "@angular/forms";
import { ClientAccount } from "../../entities/ClientAccount";
import { ClientAccountsService } from "../../services/client-accounts.service";
import { ClientAccountStatusMenuComponent } from "../account-status-menu/account-status-menu.component";

@Component({
    selector: "client-accounts-detail-header",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <md-toolbar fxFill class="context-subheader" color="primary" style="height: 66px !important; 
                                                                            background-color: #fff !important; 
                                                                            margin-bottom: 0px;
                                                                            overflow-y: hidden !important;
                                                                            z-index: 2;
                                                                            position: absolute;
                                                                            top: 0px">
    
      
    
    <div class="welcomeBlock">
    
    <h3 *ngIf="mode == 'new'">New Account</h3>
    <h3 *ngIf="mode == 'overview'">Accounts Overview</h3>
    <h3 *ngIf="clientAccount">{{clientAccount.accountName}}</h3>
    <client-account-status-menu *ngIf="clientAccount" (updateStatus)="onUpdateStatus($event)"></client-account-status-menu>
    <button *ngIf="mode == 'overview'" md-button style="padding: 2px 10px 2px 1px !important">
      <p style="text-align: left !important">{{today | date:'EEEE d MMMM'}}</p>
    </button>
    </div>

    <div class="actionBlock">
    <button *ngIf="clientAccount" md-button style="position: absolute; right: 20px; top: 15px; padding: 2px 10px 2px 10px !important; display: block" [disabled]="true">
      <p style="color: #c9c9c9">Account Type: Retail</p>
    </button>
    <button *ngIf="clientAccount" md-button style="position: absolute; right: 20px; top: 35px; padding: 2px 10px 2px 10px !important; display: block" (click)="onSubmit(); false">
      <p>Create Report</p>
      </button>
      </div>

      </md-toolbar>
      <md-toolbar fxFill class="mini-subheader" *ngIf="clientAccount" color="primary" style="height: 36px !important; 
                                                                            background-color: #fff !important; 
                                                                            margin-bottom: 0px;
                                                                            overflow-y: hidden !important;
                                                                            z-index: 2;
                                                                            position: absolute;
                                                                            top: 66px">
      
      <client-accounts-progress-widget fxFill [accountStatus]="this.clientAccount.accountStatus"></client-accounts-progress-widget>
  </md-toolbar>
    `
})
export class ClientAccountsDetailHeaderComponent {
    @Input() mode: string;
    @Input() clientAccountForm: FormGroup;
    @Input() clientAccount: ClientAccount;
    @Output() submitForm = new EventEmitter();
    @Output() updateStatus = new EventEmitter<string>();

    today: Date = new Date();

    constructor(private sv: ClientAccountsService) {

    }

    onSubmit(): void {
        this.submitForm.emit(null);
    }
    onUpdateStatus(accountStatus: string): void {
        this.updateStatus.emit(accountStatus);
    }
}