import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ClientAccount } from "../../entities/ClientAccount";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox"; 
import { ClientAccountsMasterListComponent } from "../../components/master-list/master-list.component";

@Component({
    selector: "client-accounts-master",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        
        <md-input-container floatingPlaceholder="false" class="etherSearch" dividerColor="#7BACC9">
        <input mdInput placeholder="Search Accounts" style="width: 120px; margin-top: -10px; margin-left: 5px; color: #838383 !important;" [formControl]="searchCtrl">
        <button md-icon-button style="margin-left: 120px; margin-top: -50px !important;"><md-icon style="color: #838383; width: 20px;">search</md-icon></button>
      </md-input-container>
        
        <client-accounts-master-list [clientAccounts]="matchingClientAccounts$ | async"></client-accounts-master-list>
    `
})
export class ClientAccountsMasterContainer {
    searchCtrl = new FormControl("");

    clientAccounts$ = this.sb.clientAccounts$;
    matchingClientAccounts$ = Observable.combineLatest(this.searchCtrl.valueChanges.startWith(""), this.clientAccounts$,
    (term: string, clientAccounts: Array<ClientAccount>) => {
        return clientAccounts.filter(clientAccount => clientAccount.accountName.toLowerCase().indexOf(term) > -1);
    });
    constructor(private sb: ClientAccountsSandbox) {
        
    }
}