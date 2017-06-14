var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ClientAccount } from "../../entities/ClientAccount";
import { ClientAccountsService } from "../../services/client-accounts.service";
export let ClientAccountsDetailHeaderComponent = class ClientAccountsDetailHeaderComponent {
    constructor(sv) {
        this.sv = sv;
        this.submitForm = new EventEmitter();
        this.updateStatus = new EventEmitter();
        this.today = new Date();
    }
    onSubmit() {
        this.submitForm.emit(null);
    }
    onUpdateStatus(accountStatus) {
        this.updateStatus.emit(accountStatus);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], ClientAccountsDetailHeaderComponent.prototype, "mode", void 0);
__decorate([
    Input(), 
    __metadata('design:type', FormGroup)
], ClientAccountsDetailHeaderComponent.prototype, "clientAccountForm", void 0);
__decorate([
    Input(), 
    __metadata('design:type', ClientAccount)
], ClientAccountsDetailHeaderComponent.prototype, "clientAccount", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientAccountsDetailHeaderComponent.prototype, "submitForm", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientAccountsDetailHeaderComponent.prototype, "updateStatus", void 0);
ClientAccountsDetailHeaderComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [ClientAccountsService])
], ClientAccountsDetailHeaderComponent);
//# sourceMappingURL=detail-header.component.js.map