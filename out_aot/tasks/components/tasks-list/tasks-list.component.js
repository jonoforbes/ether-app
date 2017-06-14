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
export let TasksListComponent = class TasksListComponent {
    constructor() {
        this.updateTask = new EventEmitter();
        this.updateContact = new EventEmitter();
        this.updateClientAccount = new EventEmitter();
        this.updateSale = new EventEmitter();
        this.updateAssignee = new EventEmitter();
        this.updateDueDate = new EventEmitter();
        this.updateStatus = new EventEmitter();
        this.removeTask = new EventEmitter();
        this.order = 'dueDate';
    }
    onUpdateTask(id, task) {
        console.log('content emitted through list', task);
        this.updateTask.emit({ id, task });
    }
    onUpdateContact(task, contactId) {
        console.log('contact emitted through list', contactId);
        this.updateContact.emit({ task, contactId });
    }
    onUpdateClientAccount(task, accountId) {
        console.log('contact emitted through list', accountId);
        this.updateClientAccount.emit({ task, accountId });
    }
    onUpdateSale(task, saleId) {
        this.updateSale.emit({ task, saleId });
    }
    onUpdateAssignee(task, recipientId) {
        console.log('assignee emitted through list', recipientId);
        this.updateAssignee.emit({ task, recipientId });
    }
    onUpdateDueDate(task, dueDate) {
        this.updateDueDate.emit({ task, dueDate });
    }
    onUpdateStatus(task) {
        this.updateStatus.emit(task);
    }
    onRemoveTask(task) {
        console.log('remove emitted through list');
        this.removeTask.emit(task);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], TasksListComponent.prototype, "tasks", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TasksListComponent.prototype, "updateTask", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TasksListComponent.prototype, "updateContact", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TasksListComponent.prototype, "updateClientAccount", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TasksListComponent.prototype, "updateSale", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TasksListComponent.prototype, "updateAssignee", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TasksListComponent.prototype, "updateDueDate", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TasksListComponent.prototype, "updateStatus", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TasksListComponent.prototype, "removeTask", void 0);
TasksListComponent = __decorate([
    Component({
        selector: "tasks-list",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <div  *ngFor="let task of tasks | orderByPipe: order">
            <task-item
                class="task-item"
                [task]="task"
                (updateTask)="onUpdateTask(task._id, $event)"
                (updateContact)="onUpdateContact(task, $event)"
                (updateClientAccount)="onUpdateClientAccount(task, $event)"
                (updateSale)="onUpdateSale(task, $event)"
                (updateAssignee)="onUpdateAssignee(task, $event)"
                (updateDueDate)="onUpdateDueDate(task, $event)"
                (updateStatus)="onUpdateStatus(task)"
                (removeTask)="onRemoveTask(task)"
            ></task-item>
            
        </div>

      
    `
    }), 
    __metadata('design:paramtypes', [])
], TasksListComponent);
//# sourceMappingURL=tasks-list.component.js.map