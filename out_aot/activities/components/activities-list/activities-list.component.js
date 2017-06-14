var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
export let ActivitiesListComponent = class ActivitiesListComponent {
    constructor() {
        this.removeActivity = new EventEmitter();
        this.order = 'createdAt';
    }
    onRemoveActivity(activity) {
        console.log('remove emitted through list comp');
        this.removeActivity.emit(activity);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], ActivitiesListComponent.prototype, "activities", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ActivitiesListComponent.prototype, "removeActivity", void 0);
ActivitiesListComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [])
], ActivitiesListComponent);
//# sourceMappingURL=activities-list.component.js.map