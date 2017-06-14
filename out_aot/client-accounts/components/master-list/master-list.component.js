var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
export let ClientAccountsMasterListComponent = class ClientAccountsMasterListComponent {
    constructor(router) {
        this.router = router;
    }
    addClientAccount() {
        this.router.navigate(['/accounts', { outlets: { 'm': ['list'], 'd': ['add'] } }]);
    }
    selectOverview() {
        this.router.navigate(['/accounts', { outlets: { 'm': ['list'], 'd': ['overview'] } }]);
    }
    selectDetail(clientAccount) {
        this.router.navigate(['/accounts', { outlets: { 'm': ['list'], 'd': [clientAccount._id] } }]);
    }
    ngOnChanges(changes) {
        this.activeAccounts = this.clientAccounts.filter((account) => account.accountStatus == "Active");
        this.attentionAccounts = this.clientAccounts.filter((account) => account.accountStatus == "Attention");
        this.reviewAccounts = this.clientAccounts.filter((account) => account.accountStatus == "Review");
        this.inactiveAccounts = this.clientAccounts.filter((account) => account.accountStatus == "Inactive");
        this.deletionAccounts = this.clientAccounts.filter((account) => account.accountStatus == "Deletion");
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], ClientAccountsMasterListComponent.prototype, "clientAccounts", void 0);
ClientAccountsMasterListComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [Router])
], ClientAccountsMasterListComponent);
//# sourceMappingURL=master-list.component.js.map