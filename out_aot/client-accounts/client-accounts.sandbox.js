var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ClientAccountsService } from "./services/client-accounts.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddClientAccount, RemoveClientAccount, UpdateStatus, UpdateClientAccount } from "../statemanagement/actions/data/client-account";
export let ClientAccountsSandbox = class ClientAccountsSandbox {
    constructor(store, clientAccountsService) {
        this.store = store;
        this.clientAccountsService = clientAccountsService;
        this.ngUnsubscribe = new Subject();
        this.clientAccounts$ = this.store.select(state => state.data.clientAccounts);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
        this.isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addClientAccount(clientAccount) {
        this.clientAccountsService.add(clientAccount)
            .take(1)
            .subscribe((clientAccount) => {
            this.store.dispatch(new AddClientAccount(clientAccount));
        }, () => this.handleError());
    }
    updateClientAccount(id, clientAccount) {
        let action = new UpdateClientAccount(id, clientAccount);
        this.store.dispatch(action);
        this.clientAccountsService.update(id, clientAccount)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    updateClientAccountStatus(clientAccount, accountStatus) {
        let action = new UpdateStatus(clientAccount._id, accountStatus);
        this.store.dispatch(action);
        this.clientAccountsService.updateStatus(clientAccount, accountStatus)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchClientAccount(id) {
        console.log('account', id);
        return this.clientAccountsService.fetchClientAccount(id)
            .take(1)
            .share();
    }
    removeClientAccount(clientAccount) {
        let action = new RemoveClientAccount(clientAccount._id);
        this.store.dispatch(action);
        this.clientAccountsService.remove(clientAccount)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    handleError(action) {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({ type: UNDO_ACTION, payload: action });
        }
    }
};
ClientAccountsSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, ClientAccountsService])
], ClientAccountsSandbox);
//# sourceMappingURL=client-accounts.sandbox.js.map