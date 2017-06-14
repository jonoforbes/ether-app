import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Activity } from "../../entities/Activity";

@Component({
    selector: "activities-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div *ngFor="let activity of activities | orderByPipe: order">
            <message-activity 
                *ngIf="activity.type == 'message'"
                [activity]="activity"
                (remove)="onRemoveActivity(activity)"
            ></message-activity>

        </div>
    `
})
export class ActivitiesListComponent {
    @Input() activities: Array<Activity>;
    @Output() removeActivity = new EventEmitter<Activity>();

    order: string = 'createdAt';

    constructor() {

    }

    onRemoveActivity(activity: Activity): void {
        console.log('remove emitted through list comp');
        this.removeActivity.emit(activity);
    }

}