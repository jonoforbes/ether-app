var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { XLiabilitiesService } from "./services/xliabilities.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddXLiability, RemoveXLiability, UpdateXLiability } from "../statemanagement/actions/data/xliability";
export let XLiabilitiesSandbox = class XLiabilitiesSandbox {
    constructor(store, xLiabilitiesService) {
        this.store = store;
        this.xLiabilitiesService = xLiabilitiesService;
        this.ngUnsubscribe = new Subject();
        this.xLiabilities$ = this.store.select(state => state.data.xLiabilities);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addXLiability(xLiability) {
        this.xLiabilitiesService.add(xLiability)
            .take(1)
            .subscribe((xLiability) => {
            this.store.dispatch(new AddXLiability(xLiability));
        }, () => this.handleError());
    }
    updateXLiability(id, xLiability) {
        let action = new UpdateXLiability(id, xLiability);
        this.store.dispatch(action);
        this.xLiabilitiesService.update(id, xLiability)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchXLiability(id) {
        console.log('existing liability', id);
        return this.xLiabilitiesService.fetchXLiability(id)
            .take(1)
            .share();
    }
    fetchXLiabilitiesByAccount(id) {
        return this.xLiabilities$
            .take(2)
            .map((xLiabilities) => {
            return xLiabilities.filter((xLiability) => {
                return xLiability.accountId == id;
            });
        });
    }
    fetchXLiabilitiesByContact(id) {
        return this.xLiabilities$
            .take(2)
            .map((xLiabilities) => {
            return xLiabilities.filter((xLiability) => {
                return xLiability.contactId == id;
            });
        });
    }
    removeXLiability(xLiability) {
        let action = new RemoveXLiability(xLiability._id);
        this.store.dispatch(action);
        this.xLiabilitiesService.remove(xLiability)
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
XLiabilitiesSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, XLiabilitiesService])
], XLiabilitiesSandbox);
//# sourceMappingURL=xliabilities.sandbox.js.map