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
import { Message } from "../../entities/Message";
import { Observable } from "rxjs/Observable";
import { FormBuilder } from "@angular/forms";
import { MessagesSandbox } from "../../messages.sandbox";
import { TeamSandbox } from "../../../team/team.sandbox";
export let MessagesFormGroupContainer = class MessagesFormGroupContainer {
    constructor(sb, tsb, formBuilder) {
        this.sb = sb;
        this.formBuilder = formBuilder;
        this.onSave = new EventEmitter();
        this.remove = new EventEmitter();
        this.message = new Message();
    }
    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            content: [this.message.content]
        });
    }
    onSubmit() {
        console.log(this.message);
        console.log(this.recipientId);
        console.log(this.messageForm.value);
        this.message.recipientId = this.recipientId;
        this.onSave.emit(Object.assign(this.message, this.messageForm.value));
        var draftMessage = this.formBuilder.group({
            content: ''
        });
        this.messageForm = draftMessage;
    }
    onRemove(message) {
        this.remove.emit(message);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Observable)
], MessagesFormGroupContainer.prototype, "messages", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], MessagesFormGroupContainer.prototype, "recipientId", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], MessagesFormGroupContainer.prototype, "onSave", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], MessagesFormGroupContainer.prototype, "remove", void 0);
MessagesFormGroupContainer = __decorate([
    Component({
        selector: "messages-form-group",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    
        
        <form [formGroup]="messageForm" novalidate (ngSubmit)="onSubmit()">

        
   
        

        <messages-detail-form [messageForm]="this.messageForm" (remove)="onRemove(message)"></messages-detail-form>
        
    </form>
        
    
    `
    }), 
    __metadata('design:paramtypes', [MessagesSandbox, TeamSandbox, FormBuilder])
], MessagesFormGroupContainer);
//# sourceMappingURL=messages-form-group.container.js.map