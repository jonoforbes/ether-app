var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from "@angular/core";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox";
import { Subject } from "rxjs/Subject";
export let ClientAccountAssignmentSelectorComponent = class ClientAccountAssignmentSelectorComponent {
    constructor(sb) {
        this.sb = sb;
        this.ngUnsubscribe = new Subject();
        this.fullTitle = false;
        this.updateClientAccount = new EventEmitter();
        this.clientAccounts = new Array();
    }
    ngOnInit() {
        this.sb.clientAccounts$
            .take(1)
            .subscribe((clientAccounts) => {
            this.clientAccounts = clientAccounts;
        });
    }
    onUpdateAssignee(accountId) {
        console.log('account emitted through selector', accountId);
        this.updateClientAccount.emit(accountId);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], ClientAccountAssignmentSelectorComponent.prototype, "fullTitle", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientAccountAssignmentSelectorComponent.prototype, "updateClientAccount", void 0);
ClientAccountAssignmentSelectorComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [ClientAccountsSandbox])
], ClientAccountAssignmentSelectorComponent);
//# sourceMappingURL=assignment-selector.component.js.map