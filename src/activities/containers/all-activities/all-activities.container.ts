import { Component, OnInit, Output, ChangeDetectionStrategy } from "@angular/core";
import { Activity } from "../../entities/Activity";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ActivitiesSandbox } from "../../activities.sandbox";
import { ActivitiesListComponent } from "../../components/activities-list/activities-list.component";
import { MessageActivityComponent } from "../../components/message-activity/message-activity.component";

@Component({
    selector: "all-activities",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <activities-list 
        [activities]="matchingActivities$|async"
        (removeActivity)="onRemoveActivity($event)"
        ></activities-list>
    `
})
export class AllActivitiesContainer implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    sub: any;
    matchingActivities$: Observable<Array<Activity>>;

    constructor(private sb: ActivitiesSandbox) {

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    ngOnInit() {
        this.matchingActivities$ = this.sb.activities$;
    }

    onRemoveActivity(activity: Activity): void {
        console.log('remove emitted through container', activity);
        this.sb.removeActivity(activity);
    }




}