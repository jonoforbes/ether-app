import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { Activity } from "../../entities/Activity";



@Component({
    selector: 'task-activity',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <md-card>
        <md-card-content class="taskActivityCard" *ngIf="activity.type=='task'">
            <h1>{{activity.header}}</h1>
            <h2>{{activity.createdAt}}</h2>
            <button md-icon-button style="position: absolute; top: 10px; right: 10px" (click)="deleteMe(i)">
                <md-icon style="color: #5a5a5a; font-size: 12px !important;">close</md-icon>
            </button>
            <md-checkbox>{{activity.content}}</md-checkbox>
        </md-card-content> 
    </md-card>
    
    `
})
export class TaskActivityComponent {
    @Input() activity: Activity;
    @Output() remove = new EventEmitter();

    constructor() {

    }

    onRemove(): void {
        this.remove.emit(null);
    }
}