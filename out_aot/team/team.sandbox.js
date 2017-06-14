var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { UserDataService } from "./services/user-data.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddUserData, UpdateUserData, RemoveUserData } from "../statemanagement/actions/data/user-data";
export let TeamSandbox = class TeamSandbox {
    constructor(store, userDataService) {
        this.store = store;
        this.userDataService = userDataService;
        this.ngUnsubscribe = new Subject();
        this.team$ = this.store.select(state => state.data.userData);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
        this.isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addUserData(userData) {
        this.userDataService.add(userData)
            .take(1)
            .subscribe((userData) => {
            this.store.dispatch(new AddUserData(userData));
        }, () => this.handleError());
    }
    updateUserData(id, userData) {
        let action = new UpdateUserData(id, userData);
        this.store.dispatch(action);
        this.userDataService.update(id, userData)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchUserData(id) {
        return this.team$
            .take(1)
            .switchMap((team) => {
            return team.filter((userData) => {
                return userData._id == id;
            });
        });
    }
    removeUserData(userData) {
        let action = new RemoveUserData(userData._id);
        this.store.dispatch(action);
        this.userDataService.remove(userData)
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
TeamSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, UserDataService])
], TeamSandbox);
//# sourceMappingURL=team.sandbox.js.map