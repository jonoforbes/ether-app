var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ActivitiesService } from "./services/activities.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { RemoveActivity } from "../statemanagement/actions/data/activity";
export let ActivitiesSandbox = class ActivitiesSandbox {
    constructor(store, activitiesService) {
        this.store = store;
        this.activitiesService = activitiesService;
        this.ngUnsubscribe = new Subject();
        this.activities$ = this.store.select(state => state.data.activities);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    removeActivity(activity) {
        let action = new RemoveActivity(activity._id);
        this.store.dispatch(action);
        this.activitiesService.remove(activity)
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
ActivitiesSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, ActivitiesService])
], ActivitiesSandbox);
//# sourceMappingURL=activities.sandbox.js.map