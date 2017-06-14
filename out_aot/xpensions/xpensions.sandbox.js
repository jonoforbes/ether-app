var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { XPensionsService } from "./services/xpensions.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddXPension, RemoveXPension, UpdateXPension } from "../statemanagement/actions/data/xpension";
export let XPensionsSandbox = class XPensionsSandbox {
    constructor(store, xPensionsService) {
        this.store = store;
        this.xPensionsService = xPensionsService;
        this.ngUnsubscribe = new Subject();
        this.xPensions$ = this.store.select(state => state.data.xPensions);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addXPension(xPension) {
        this.xPensionsService.add(xPension)
            .take(1)
            .subscribe((xPension) => {
            this.store.dispatch(new AddXPension(xPension));
        }, () => this.handleError());
    }
    updateXPension(id, xPension) {
        let action = new UpdateXPension(id, xPension);
        this.store.dispatch(action);
        this.xPensionsService.update(id, xPension)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchXPension(id) {
        console.log('existing pension', id);
        return this.xPensionsService.fetchXPension(id)
            .take(1)
            .share();
    }
    fetchXPensionsByAccount(id) {
        return this.xPensions$
            .take(2)
            .map((xPensions) => {
            return xPensions.filter((xPension) => {
                return xPension.accountId == id;
            });
        });
    }
    fetchXPensionsByContact(id) {
        return this.xPensions$
            .take(2)
            .map((xPensions) => {
            return xPensions.filter((xPension) => {
                return xPension.contactId == id;
            });
        });
    }
    removeXPension(xPension) {
        let action = new RemoveXPension(xPension._id);
        this.store.dispatch(action);
        this.xPensionsService.remove(xPension)
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
XPensionsSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, XPensionsService])
], XPensionsSandbox);
//# sourceMappingURL=xpensions.sandbox.js.map