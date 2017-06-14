var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
export let TaskMenuComponent = class TaskMenuComponent {
    constructor() {
        this.updateContent = new EventEmitter();
        this.updateContact = new EventEmitter();
        this.updateClientAccount = new EventEmitter();
        this.updateSale = new EventEmitter();
        this.updateAssignee = new EventEmitter();
        this.updateDueDate = new EventEmitter();
        this.removeTask = new EventEmitter();
    }
    onUpdateContent(content) {
        this.updateContent.emit(content);
    }
    onUpdateContact(contactId) {
        console.log('contact emitted through menu', contactId);
        this.updateContact.emit(contactId);
    }
    onUpdateClientAccount(accountId) {
        console.log('account through menu', accountId);
        this.updateClientAccount.emit(accountId);
    }
    onUpdateSale(saleId) {
        this.updateSale.emit(saleId);
    }
    onUpdateAssignee(recipientId) {
        console.log('assignee emitted through menu', recipientId);
        this.updateAssignee.emit(recipientId);
    }
    onUpdateDueDate(dueDate) {
        this.updateDueDate.emit(dueDate);
    }
    onRemoveTask() {
        console.log('remove emitted through menu');
        this.removeTask.emit();
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskMenuComponent.prototype, "updateContent", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskMenuComponent.prototype, "updateContact", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskMenuComponent.prototype, "updateClientAccount", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskMenuComponent.prototype, "updateSale", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskMenuComponent.prototype, "updateAssignee", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskMenuComponent.prototype, "updateDueDate", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskMenuComponent.prototype, "removeTask", void 0);
TaskMenuComponent = __decorate([
    Component({
        selector: "task-menu",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <button 
            md-button 
            [mdMenuTriggerFor]="taskMenu" 
            type="button">
            <md-icon style="color: #838383; width: 20px;">more_horiz</md-icon>
            
        </button>
        
        <md-menu x-position="before" #taskMenu="mdMenu">
            <contact-assignment-selector (updateContact)="onUpdateContact($event)"></contact-assignment-selector>
            <account-assignment-selector [fullTitle]="true" (updateClientAccount)="onUpdateClientAccount($event)"></account-assignment-selector>
            <team-assignment-selector (updateAssignee)="onUpdateAssignee($event)"></team-assignment-selector>
            <button md-menu-item (click)="onRemoveTask()"><h1>Remove Task</h1></button>
        </md-menu>
    
    
    
    
    `
    }), 
    __metadata('design:paramtypes', [])
], TaskMenuComponent);
//# sourceMappingURL=task-menu.component.js.map