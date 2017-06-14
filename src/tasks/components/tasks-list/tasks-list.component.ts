import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Task } from "../../entities/Task";

@Component({
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
})
export class TasksListComponent {
    @Input() tasks: Array<Task>;
    @Output() updateTask = new EventEmitter<{id: string, task: Task}>();
    @Output() updateContact = new EventEmitter<{task: Task, contactId: string}>();
    @Output() updateClientAccount = new EventEmitter<{task: Task, accountId: string}>();
    @Output() updateSale = new EventEmitter<{task: Task, saleId: string}>();
    @Output() updateAssignee = new EventEmitter<{task: Task, recipientId: string}>();
    @Output() updateDueDate = new EventEmitter<{task: Task, dueDate: string}>();
    @Output() updateStatus = new EventEmitter<Task>();
    @Output() removeTask = new EventEmitter<Task>();


    order: string = 'dueDate';

    constructor() {

    }

    onUpdateTask(id: string, task: Task): void {
        console.log('content emitted through list', task);
        this.updateTask.emit({id, task});
    }

    onUpdateContact(task: Task, contactId: string): void {
        console.log('contact emitted through list', contactId);
        this.updateContact.emit({task, contactId});
    }

    onUpdateClientAccount(task: Task, accountId: string): void {
        console.log('contact emitted through list', accountId);
        this.updateClientAccount.emit({task, accountId});
    }

    onUpdateSale(task: Task, saleId): void {
        this.updateSale.emit({task, saleId});
    }
    
    onUpdateAssignee(task: Task, recipientId: string): void {
        console.log('assignee emitted through list', recipientId);
        this.updateAssignee.emit({task, recipientId});
    }

    onUpdateDueDate(task: Task, dueDate: string): void {
        this.updateDueDate.emit({task, dueDate});
    } 

    onUpdateStatus(task: Task): void {
        this.updateStatus.emit(task);
    }

    onRemoveTask(task: Task): void {
        console.log('remove emitted through list');
        this.removeTask.emit(task);
    }

}

// <div fxLayout="row" fxLayoutAlign="start center">
//                 <md-checkbox fxFlex="500px" [checked]="task.isCompleted" (click)="updateStatus(task)">
//                     <span style="margin-left: 10px;">{{task.content}}</span>
//                 </md-checkbox>
//                 <assignment-selector 
//                     [id]="task.recipientId"
//                     (assignments)="updateAssignmentDisplay()" 
//                     (updateAssignee)="updateAssignee($event, task)"
//                 ></assignment-selector>
//             </div>
//         <div fxLayout="row">
//         <h1>Due {{task.dueDate| date:'EEEE d MMMM'}}</h1>
//         </div>