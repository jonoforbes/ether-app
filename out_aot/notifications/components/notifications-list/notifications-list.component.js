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
export let NotificationsListComponent = class NotificationsListComponent {
    constructor() {
        this.removeNotification = new EventEmitter();
        this.order = 'createdAt';
    }
    onRemoveNotification(notification) {
        console.log('remove emitted through list comp');
        this.removeNotification.emit(notification);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], NotificationsListComponent.prototype, "notifications", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NotificationsListComponent.prototype, "removeNotification", void 0);
NotificationsListComponent = __decorate([
    Component({
        selector: "notifications-list",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <div *ngFor="let notification of notifications | orderByPipe: order">
            <message-notification 
                *ngIf="notification.type == message"
                [notification]="notification"
                (removeNotification)="onRemoveNotification(notification)"
            ></message-notification>

        </div>
    `
    }), 
    __metadata('design:paramtypes', [])
], NotificationsListComponent);
//# sourceMappingURL=notifications-list.component.js.map