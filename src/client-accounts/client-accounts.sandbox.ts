import { ClientAccountsService } from "./services/client-accounts.service";
import { Injectable } from "@angular/core";
import { ClientAccount } from "./entities/ClientAccount";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddClientAccount, RemoveClientAccount, UpdateStatus, UpdateClientAccount } from "../statemanagement/actions/data/client-account";

@Injectable()
export class ClientAccountsSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    clientAccounts$ = this.store.select(state => state.data.clientAccounts);
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);

    constructor(private store: Store<ApplicationState>, 
                private clientAccountsService: ClientAccountsService) {
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addClientAccount(clientAccount: ClientAccount): void {
        this.clientAccountsService.add(clientAccount)
        .take(1)
        .subscribe((clientAccount: ClientAccount) => {
            this.store.dispatch(new AddClientAccount(clientAccount));
        }, () => this.handleError());
    }

    updateClientAccount(id: string, clientAccount: ClientAccount): void {
        let action = new UpdateClientAccount(id, clientAccount);
        this.store.dispatch(action);
        this.clientAccountsService.update(id, clientAccount)
        .take(1)
        .subscribe(() => {   
        }, () => this.handleError(action));
    }

    updateClientAccountStatus(clientAccount: ClientAccount, accountStatus: string): void {
        let action = new UpdateStatus(clientAccount._id, accountStatus);
        this.store.dispatch(action);
        this.clientAccountsService.updateStatus(clientAccount, accountStatus)
        .take(1)
        .subscribe(() => {   
        }, () => this.handleError(action));
    }

    fetchClientAccount(id: string): Observable<ClientAccount> {
        console.log('account', id);
        // 
        return this.clientAccountsService.fetchClientAccount(id)
        .take(1)
        .share();
        // return this.clientAccounts$.switchMap((clientAccounts: ClientAccount[]) => {
        //     return clientAccounts.filter((clientAccount: ClientAccount) => {
        //         return clientAccount._id == id;
        //     });
        // });
    }

    // fetchContactsByAccount(id: string): Observable<Array<Contact>> {
    //     return this.contacts$.map((contacts: any) => {
    //         return contacts.filter((contact: Contact) => {
    //             return contact.accountId == id;
    //         });
    //     });
    // }

    removeClientAccount(clientAccount: ClientAccount): void {
        let action = new RemoveClientAccount(clientAccount._id);
        this.store.dispatch(action);
        this.clientAccountsService.remove(clientAccount)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError(action));
    }
    
    private handleError(action?: Action): void {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({type: UNDO_ACTION, payload: action});
        }
    }
}