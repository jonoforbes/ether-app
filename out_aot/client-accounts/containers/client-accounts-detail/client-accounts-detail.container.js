var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox";
export let ClientAccountsDetailContainer = class ClientAccountsDetailContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.ngUnsubscribe = new Subject();
        this.mode = "accounts";
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        console.log('account detail container out');
    }
    ngOnInit() {
        this.sub = this.route.params
            .takeUntil(this.ngUnsubscribe)
            .subscribe(params => {
            this.id = params['id'];
            this.editClientAccount$ = this.sb.isAuthenticated$.take(1)
                .filter(isAuthenticated => isAuthenticated)
                .flatMap(() => {
                return this.sb.fetchClientAccount(this.id);
            }).publishReplay().refCount();
        });
    }
    pubId() {
        console.log(this.id);
    }
    onSave(clientAccount) {
        this.sb.updateClientAccount(this.id, clientAccount);
    }
    onRemove(clientAccount) {
        this.sb.removeClientAccount(clientAccount);
    }
    onUpdateStatus(item) {
        console.log('status', item.accountStatus);
        console.log('account', item.clientAccount);
        this.sb.updateClientAccountStatus(item.clientAccount, item.accountStatus);
    }
};
ClientAccountsDetailContainer = __decorate([
    Component({
        selector: "client-accounts-detail",
        template: `
    <div class="example-scrolling-content">
        
        
        <div *ngIf="(editClientAccount$|async)">
            <client-accounts-form-group 
                [clientAccount]="editClientAccount$|async"
                (onSave)="onSave($event)" 
                (remove)="onRemove($event)"
                (updateStatus)="onUpdateStatus($event)">
            </client-accounts-form-group>
            <contacts-widget></contacts-widget>
            <addresses-widget [contact]="false"></addresses-widget>
            <health-occupation-widget></health-occupation-widget>
            <income-widget></income-widget>
            <contacts-intermediate-widget></contacts-intermediate-widget>
            <documents-widget [mode]="mode"></documents-widget>
            <tasks-widget [mode]="mode"></tasks-widget>
        </div>
        
    </div>
    `
    }), 
    __metadata('design:paramtypes', [ClientAccountsSandbox, ActivatedRoute, Router])
], ClientAccountsDetailContainer);
//# sourceMappingURL=client-accounts-detail.container.js.map