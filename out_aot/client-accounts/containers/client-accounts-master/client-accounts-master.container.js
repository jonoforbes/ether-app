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
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox";
export let ClientAccountsMasterContainer = class ClientAccountsMasterContainer {
    constructor(sb) {
        this.sb = sb;
        this.searchCtrl = new FormControl("");
        this.clientAccounts$ = this.sb.clientAccounts$;
        this.matchingClientAccounts$ = Observable.combineLatest(this.searchCtrl.valueChanges.startWith(""), this.clientAccounts$, (term, clientAccounts) => {
            return clientAccounts.filter(clientAccount => clientAccount.accountName.toLowerCase().indexOf(term) > -1);
        });
    }
};
ClientAccountsMasterContainer = __decorate([
    Component({
        selector: "client-accounts-master",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        
        <md-input-container floatingPlaceholder="false" class="etherSearch" dividerColor="#7BACC9">
        <input mdInput placeholder="Search Accounts" style="width: 120px; margin-top: -10px; margin-left: 5px; color: #838383 !important;" [formControl]="searchCtrl">
        <button md-icon-button style="margin-left: 120px; margin-top: -50px !important;"><md-icon style="color: #838383; width: 20px;">search</md-icon></button>
      </md-input-container>
        
        <client-accounts-master-list [clientAccounts]="matchingClientAccounts$ | async"></client-accounts-master-list>
    `
    }), 
    __metadata('design:paramtypes', [ClientAccountsSandbox])
], ClientAccountsMasterContainer);
//# sourceMappingURL=client-accounts-master.container.js.map