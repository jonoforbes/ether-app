import { ActivitiesService } from "./services/activities.service";
import { Injectable } from "@angular/core";
import { Activity } from "./entities/Activity";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddActivity, RemoveActivity } from "../statemanagement/actions/data/activity";

@Injectable()
export class ActivitiesSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    activities$ = this.store.select(state => state.data.activities);

    constructor(private store: Store<ApplicationState>,
                private activitiesService: ActivitiesService) {

                }
    
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    removeActivity(activity: Activity): void {
        let action = new RemoveActivity(activity._id);
        this.store.dispatch(action);
        this.activitiesService.remove(activity)
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