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
import { Task } from "../../entities/Task";
export let TaskItemComponent = class TaskItemComponent {
    constructor() {
        this.updateTask = new EventEmitter();
        this.updateContact = new EventEmitter();
        this.updateClientAccount = new EventEmitter();
        this.updateSale = new EventEmitter();
        this.updateAssignee = new EventEmitter();
        this.updateDueDate = new EventEmitter();
        this.updateStatus = new EventEmitter();
        this.removeTask = new EventEmitter();
    }
    ngOnInit() {
        this.editableTask = this.task;
    }
    onUpdateTask(editableTask) {
        console.log('content emitted through item', editableTask);
        this.updateTask.emit(editableTask);
    }
    onUpdateContact(contactId) {
        console.log('contact emitted through item', contactId);
        this.updateContact.emit(contactId);
    }
    onUpdateClientAccount(accountId) {
        console.log('account emitted through item', accountId);
        this.updateClientAccount.emit(accountId);
    }
    onUpdateSale(saleId) {
        this.updateSale.emit(saleId);
    }
    onUpdateAssignee(recipientId) {
        console.log('assignee emitted through item', recipientId);
        this.updateAssignee.emit(recipientId);
    }
    onUpdateDueDate(dueDate) {
        this.updateDueDate.emit(dueDate);
    }
    onUpdateStatus() {
        this.updateStatus.emit();
    }
    onRemoveTask() {
        console.log('remove emitted through item');
        this.removeTask.emit();
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Task)
], TaskItemComponent.prototype, "task", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskItemComponent.prototype, "updateTask", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskItemComponent.prototype, "updateContact", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskItemComponent.prototype, "updateClientAccount", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskItemComponent.prototype, "updateSale", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskItemComponent.prototype, "updateAssignee", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskItemComponent.prototype, "updateDueDate", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskItemComponent.prototype, "updateStatus", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaskItemComponent.prototype, "removeTask", void 0);
TaskItemComponent = __decorate([
    Component({
        selector: "task-item",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        
            <div fxLayout="row" fxLayoutAlign="start center">
                <md-checkbox style="margin-left: 20px" fxFlex="500px" [checked]="task.isCompleted" (click)="onUpdateStatus()">
                    <span style="margin-left: 10px;">{{task.content}}</span>
                </md-checkbox>
                <task-menu 
                    (updateContact)="onUpdateContact($event)"
                    (updateClientAccount)="onUpdateClientAccount($event)"
                    (updateSale)="onUpdateSale($event)"
                    (updateAssignee)="onUpdateAssignee($event)"
                    (updateDueDate)="onUpdateDueDate($event)"
                    (removeTask)="onRemoveTask()"
                ></task-menu>
            </div>
        <div fxLayout="row">
            <p style="margin-left: 16px; color: #ccc; font-size: 12px">Due by {{task.dueDate| date:'EEEE d MMMM'}}</p>

        </div>


      
    `
    }), 
    __metadata('design:paramtypes', [])
], TaskItemComponent);
//# sourceMappingURL=task-item.component.js.map