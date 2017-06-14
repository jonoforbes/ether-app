var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Notification } from "../../entities/Notification";
export let MessageNotificationComponent = class MessageNotificationComponent {
    constructor() {
        this.remove = new EventEmitter();
    }
    onRemove() {
        this.remove.emit(null);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Notification)
], MessageNotificationComponent.prototype, "notification", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], MessageNotificationComponent.prototype, "remove", void 0);
MessageNotificationComponent = __decorate([
    Component({
        selector: 'message-notification',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <md-card>
    <md-card-content class="messageNotificationCard">
  
    <h1>{{notification.header}}</h1>
    <h2>{{notification.createdAt}}</h2>
    <button md-icon-button style="position: absolute; top: 10px; right: 10px" (click)="onRemoveNotification()">
        <md-icon style="color: #5a5a5a; font-size: 12px !important;">close</md-icon>
    </button>
    <button class="messageNotificationClick" md-button>
    <p>{{notification.content}}</p>
    </button>
</md-card-content>
<md-card>
  `
    }), 
    __metadata('design:paramtypes', [])
], MessageNotificationComponent);
;
//# sourceMappingURL=message-notification.component.js.map