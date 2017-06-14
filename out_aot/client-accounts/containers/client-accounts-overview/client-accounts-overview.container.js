var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox";
export let ClientAccountsOverviewContainer = class ClientAccountsOverviewContainer {
    constructor(sb) {
        this.sb = sb;
        this.ngUnsubscribe = new Subject();
        this.mode = "overview";
    }
    onSave(clientAccount) {
        this.sb.addClientAccount(clientAccount);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    ngOnInit() {
        this.clientAccounts$ = this.sb.clientAccounts$.take(1);
        this.totalCount$ = this.clientAccounts$.take(1).map(accounts => accounts.length);
        this.activeAccounts$ = this.clientAccounts$
            .take(1)
            .map((accounts) => accounts.filter((account) => account.accountStatus == "Active"));
        this.activeCount$ = this.activeAccounts$.take(1).map(accounts => accounts.length);
        this.inactiveAccounts$ = this.clientAccounts$
            .take(1)
            .map((accounts) => accounts.filter((account) => account.accountStatus == "Inactive"));
        this.inactiveCount$ = this.inactiveAccounts$.take(1).map(accounts => accounts.length);
        this.reviewAccounts$ = this.clientAccounts$
            .take(1)
            .map((accounts) => accounts.filter((account) => account.accountStatus == "Review"));
        this.reviewCount$ = this.reviewAccounts$.take(1).map(accounts => accounts.length);
        this.deletionAccounts$ = this.clientAccounts$
            .take(1)
            .map((accounts) => accounts.filter((account) => account.accountStatus == "Deletion"));
        this.deletionCount$ = this.deletionAccounts$.take(1).map(accounts => accounts.length);
        this.attentionAccounts$ = this.clientAccounts$
            .take(1)
            .map((accounts) => accounts.filter((account) => account.accountStatus == "Attention"));
        this.attentionCount$ = this.attentionAccounts$.take(1).map(accounts => accounts.length);
    }
};
ClientAccountsOverviewContainer = __decorate([
    Component({
        selector: "client-accounts-overview",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div class="example-scrolling-content">
        <client-accounts-detail-header 
            [mode]="mode"></client-accounts-detail-header>

            <add-client-account (onSave)="onSave($event)"></add-client-account>

            <client-accounts-status-widget
                [totalCount]="totalCount$ | async"
                [activeCount]="activeCount$ | async"
                [inactiveCount]="inactiveCount$ | async"
                [reviewCount]="reviewCount$ | async"
                [attentionCount]="attentionCount$ | async"
                [deletionCount]="deletionCount$ | async" 
                ></client-accounts-status-widget>


    </div>
    `
    }), 
    __metadata('design:paramtypes', [ClientAccountsSandbox])
], ClientAccountsOverviewContainer);
//# sourceMappingURL=client-accounts-overview.container.js.map