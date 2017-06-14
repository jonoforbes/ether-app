var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
export let MessagesDetailListComponent = class MessagesDetailListComponent {
    constructor(router) {
        this.router = router;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], MessagesDetailListComponent.prototype, "messages", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], MessagesDetailListComponent.prototype, "recipient", void 0);
MessagesDetailListComponent = __decorate([
    Component({
        selector: "messages-detail-list",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `

        
        
        <div class="message-row" *ngFor="let message of messages" fxLayout="row">
        <div *ngIf="message.recipientId == recipient" fxFill style="margin: 0px !important">
            <h3 style="font-size: 14px; color: #444; margin-right: 30px; margin-top: 0px" fxLayoutAlign="end none">{{message.content}}</h3>
            <h6 style="font-size: 10px; color: #aaa; margin-right: 30px" fxLayoutAlign="end none">{{message.createdAt | date:'medium'}}</h6>
            
        </div>  
        <div *ngIf="message.recipientId !== recipient" fxFill style="background-color: #efefef">
            <h3 style="font-size: 14px; color: #444; margin-left: 30px; margin-top: 0px" fxLayoutAlign="start none">{{message.content}} </h3>
            <h6 style="font-size: 10px; color: #aaa; margin-left: 30px" fxLayoutAlign="start none">{{message.createdAt | date:'medium'}}</h6>
            
        </div>  
          
          </div>
          
    `
    }), 
    __metadata('design:paramtypes', [Router])
], MessagesDetailListComponent);
//# sourceMappingURL=detail-list.component.js.map