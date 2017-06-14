import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Task } from "../../entities/Task";
import { TaskMenuComponent } from "../task-menu/task-menu.component";
import { EditTaskComponent } from "../edit-task/edit-task.component";
import { TaskInfoComponent } from "../task-info/task-info.component";

@Component({
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
})
export class TaskItemComponent {
    @Input() task: Task;
    @Output() updateTask = new EventEmitter<Task>();
    @Output() updateContact = new EventEmitter<string>();
    @Output() updateClientAccount = new EventEmitter<string>();
    @Output() updateSale = new EventEmitter<string>();
    @Output() updateAssignee = new EventEmitter<string>();
    @Output() updateDueDate = new EventEmitter<string>();
    @Output() updateStatus = new EventEmitter();
    @Output() removeTask = new EventEmitter();

    constructor() {

    }

    // <edit-task [task]="editableTask" (updateTask)="onUpdateTask($event)"></edit-task>
    editableTask: Task;

    ngOnInit() {
        this.editableTask = this.task;
    }



    onUpdateTask(editableTask: Task): void {
        console.log('content emitted through item', editableTask);
        this.updateTask.emit(editableTask);
    }

    onUpdateContact(contactId: string): void {
        console.log('contact emitted through item', contactId);
        this.updateContact.emit(contactId);
    }

    onUpdateClientAccount(accountId: string): void {
        console.log('account emitted through item', accountId);
        this.updateClientAccount.emit(accountId);
    }

    onUpdateSale(saleId: string): void {
        this.updateSale.emit(saleId);
    }

    onUpdateAssignee(recipientId: string): void {
        console.log('assignee emitted through item', recipientId);
        this.updateAssignee.emit(recipientId);
    }

    onUpdateDueDate(dueDate: string): void {
        this.updateDueDate.emit(dueDate);
    }

    // onUpdateStatus(): void {
    //     if (this.task.isCompleted == true) {
    //         var updatedTask = this.task;
    //         updatedTask.isCompleted = false;
    //     }
    //     if (this.task.isCompleted == false) {
    //         var updatedTask = this.task;
    //         updatedTask.isCompleted = false;
    //     }
    //     this.updateStatus.emit(updatedTask);
    // }

    onUpdateStatus(): void {
        this.updateStatus.emit();
    }

    onRemoveTask(): void {
        console.log('remove emitted through item');
        this.removeTask.emit();
    }
}

// <h1>Due {{task.dueDate| date:'EEEE d MMMM'}}</h1>