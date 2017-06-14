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
import { Activity } from "../../entities/Activity";
import { Router } from "@angular/router";
export let MessageActivityComponent = class MessageActivityComponent {
    constructor(router) {
        this.router = router;
        this.remove = new EventEmitter();
        this.navigate = new EventEmitter();
    }
    onRemove() {
        this.remove.emit(null);
    }
    onNavigate() {
        this.navigate.emit(null);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Activity)
], MessageActivityComponent.prototype, "activity", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], MessageActivityComponent.prototype, "remove", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], MessageActivityComponent.prototype, "navigate", void 0);
MessageActivityComponent = __decorate([
    Component({
        selector: 'message-activity',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <md-card>
    <div class="messageActivityCard">
  
    <h1>{{activity.header}}</h1>
    <h2>{{activity.createdAt}}</h2>
    <button md-icon-button style="position: absolute; top: 10px; right: 10px" (click)="onRemove()">
        <md-icon style="color: #5a5a5a; font-size: 12px !important;">close</md-icon>
    </button>
    <button class="messageActivityClick" md-button (click)="onNavigate()">
    <p>{{activity.content}}</p>
    </button>
    </div>
</md-card>

  `
    }), 
    __metadata('design:paramtypes', [Router])
], MessageActivityComponent);
;
//# sourceMappingURL=message-activity.component.js.map