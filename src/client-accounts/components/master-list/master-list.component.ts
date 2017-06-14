import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges} from "@angular/core";
import { Router } from "@angular/router";
import { ClientAccount } from "../../entities/ClientAccount";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox";

@Component({
    selector: "client-accounts-master-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    
    template: `
        <button md-button (click)="selectOverview()" style="text-align: left !important; padding: 5px; margin-top: -10px;">
          <div fxLayout="row">
          <md-icon style="color: #838383; margin-top: -1px">chevron_right</md-icon><p style="margin: 4px 170px 4px 10px;">Accounts Overview</p>
          </div>
        </button>
        <accordion class="master-list-accordion" style="background-color: #f5f5f5 !important" [closeOthers]="false" [showArrows]="true">
        <accordion-group *ngIf="attentionAccounts.length > 0" [isOpened]="true" style="background-color: #f5f5f5 !important">
            <accordion-heading style="background-color: #f5f5f5 !important">
                <h2>Accounts Requiring Attention ({{attentionAccounts.length}})</h2>
            </accordion-heading>
            <md-nav-list>
            <button md-button *ngFor="let clientAccount of attentionAccounts" style="align-items: true" (click)="selectDetail(clientAccount)">
                <div fxLayout="column" class="initialsBoxAccountAttention">
                    <h1>{{clientAccount.accountName | slice:0:2}}</h1>
                </div>
                <h3 style="margin-top: 17px" md-line>{{clientAccount.accountName}}</h3>
            </button>
            </md-nav-list>
        </accordion-group>
        <accordion-group *ngIf="activeAccounts.length > 0" [isOpened]="true" style="background-color: #f5f5f5 !important">
            <accordion-heading style="background-color: #f5f5f5 !important">
                <h2>Active Accounts ({{activeAccounts.length}})</h2>
            </accordion-heading>
            <md-nav-list>
            <button md-button *ngFor="let clientAccount of activeAccounts" style="align-items: true" (click)="selectDetail(clientAccount)">
                <div fxLayout="column" class="initialsBoxAccountActive">
                    <h1>{{clientAccount.accountName | slice:0:2}}</h1>
                </div>
                <h3 style="margin-top: 17px" md-line>{{clientAccount.accountName}}</h3>
            </button>
            </md-nav-list>
        </accordion-group>
        <accordion-group *ngIf="reviewAccounts.length > 0" [isOpened]="true" style="background-color: #f5f5f5 !important">
            <accordion-heading style="background-color: #f5f5f5 !important">
                <h2>Accounts In Review ({{reviewAccounts.length}})</h2>
            </accordion-heading>
            <md-nav-list>
            <button md-button *ngFor="let clientAccount of reviewAccounts" style="align-items: true" (click)="selectDetail(clientAccount)">
                <div fxLayout="column"  class="initialsBoxAccountReview">
                    <h1>{{clientAccount.accountName | slice:0:2}}</h1>
                </div>
                <h3 style="margin-top: 17px" md-line>{{clientAccount.accountName}}</h3>
            </button>
            </md-nav-list>
        </accordion-group>
        <accordion-group *ngIf="inactiveAccounts.length > 0" [isOpened]="true" style="background-color: #f5f5f5 !important">
            <accordion-heading style="background-color">
                <h2>Draft Accounts ({{inactiveAccounts.length}})</h2>
            </accordion-heading>
            <md-nav-list>
            <button md-button *ngFor="let clientAccount of inactiveAccounts" style="align-items: true" (click)="selectDetail(clientAccount)">
                <div fxLayout="column" class="initialsBoxAccountInactive">
                    <h1>{{clientAccount.accountName | slice:0:2}}</h1>
                </div>
                <h3 style="margin-top: 17px" md-line>{{clientAccount.accountName}}</h3>
            </button>
            </md-nav-list>
        </accordion-group>
        <accordion-group *ngIf="deletionAccounts.length > 0" [isOpened]="true" style="background-color: #f5f5f5 !important">
            <accordion-heading style="background-color: #f5f5f5 !important">
                <h2>Accounts Marked For Deletion ({{deletionAccounts.length}})</h2>
            </accordion-heading>
            <md-nav-list>
            <button md-button *ngFor="let clientAccount of deletionAccounts" style="align-items: true" (click)="selectDetail(clientAccount)">
                <div fxLayout="column" class="initialsBoxAccountDeletion">
                    <h1>{{clientAccount.accountName | slice:0:2}}</h1>
                </div>
                <h3 style="margin-top: 17px" md-line>{{clientAccount.accountName}}</h3>
            </button>
            </md-nav-list>
        </accordion-group>
        </accordion>
    `
})
export class ClientAccountsMasterListComponent implements OnChanges {
    @Input() clientAccounts: Array<ClientAccount>;

    activeAccounts: Array<ClientAccount>;
    attentionAccounts: Array<ClientAccount>;
    reviewAccounts: Array<ClientAccount>;
    inactiveAccounts: Array<ClientAccount>;
    deletionAccounts: Array<ClientAccount>;

    constructor( private router: Router) {

    }
    addClientAccount() {
        this.router.navigate(['/accounts', {outlets: {'m': ['list'], 'd': ['add']}}]);
    }

    selectOverview() {
        this.router.navigate(['/accounts', {outlets: {'m': ['list'], 'd': ['overview']}}]);
        
    }

    selectDetail(clientAccount: ClientAccount) {
        this.router.navigate(['/accounts', {outlets: {'m': ['list'], 'd': [clientAccount._id]}}]);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.activeAccounts = this.clientAccounts.filter((account: ClientAccount) => account.accountStatus == "Active");
        this.attentionAccounts = this.clientAccounts.filter((account: ClientAccount) => account.accountStatus == "Attention");
        this.reviewAccounts = this.clientAccounts.filter((account: ClientAccount) => account.accountStatus == "Review");
        this.inactiveAccounts = this.clientAccounts.filter((account: ClientAccount) => account.accountStatus == "Inactive");
        this.deletionAccounts = this.clientAccounts.filter((account: ClientAccount) => account.accountStatus == "Deletion");
    }
    
}