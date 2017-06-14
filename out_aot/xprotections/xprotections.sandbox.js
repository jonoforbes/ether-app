var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { XProtectionsService } from "./services/xprotections.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddXProtection, RemoveXProtection, UpdateXProtection } from "../statemanagement/actions/data/xprotection";
export let XProtectionsSandbox = class XProtectionsSandbox {
    constructor(store, xProtectionsService) {
        this.store = store;
        this.xProtectionsService = xProtectionsService;
        this.ngUnsubscribe = new Subject();
        this.xProtections$ = this.store.select(state => state.data.xProtections);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addXProtection(xProtection) {
        this.xProtectionsService.add(xProtection)
            .take(1)
            .subscribe((xProtection) => {
            this.store.dispatch(new AddXProtection(xProtection));
        }, () => this.handleError());
    }
    updateXProtection(id, xProtection) {
        let action = new UpdateXProtection(id, xProtection);
        this.store.dispatch(action);
        this.xProtectionsService.update(id, xProtection)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchXProtection(id) {
        console.log('existing protection', id);
        return this.xProtectionsService.fetchXProtection(id)
            .take(1)
            .share();
    }
    fetchXProtectionsByAccount(id) {
        return this.xProtections$
            .take(2)
            .map((xProtections) => {
            return xProtections.filter((xProtection) => {
                return xProtection.accountId == id;
            });
        });
    }
    fetchXProtectionsByContact(id) {
        return this.xProtections$
            .take(2)
            .map((xProtections) => {
            return xProtections.filter((xProtection) => {
                return xProtection.contactId == id;
            });
        });
    }
    removeXProtection(xProtection) {
        let action = new RemoveXProtection(xProtection._id);
        this.store.dispatch(action);
        this.xProtectionsService.remove(xProtection)
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
XProtectionsSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, XProtectionsService])
], XProtectionsSandbox);
//# sourceMappingURL=xprotections.sandbox.js.map