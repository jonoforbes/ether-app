import { Component, Input, Output, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Task } from "../../entities/Task";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { TasksSandbox } from "../../tasks.sandbox";
import { TasksListComponent } from "../../components/tasks-list/tasks-list.component";



@Component({
    selector: "tasks-widget",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <h2 class="widget widget-head">Tasks</h2>
    <tasks-list
        [tasks]="tasks$|async" 
        (updateTask)="onUpdateTask($event)"
        (updateAssignee)="onUpdateAssignee($event)"
        (updateContact)="onUpdateContact($event)"
        (updateClientAccount)="onUpdateClientAccount($event)"
        (removeTask)="onRemoveTask($event)"
        (updateStatus)="onUpdateCompleted($event)"
    ></tasks-list>
    
    
    
    `
})
export class TasksWidgetContainer implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    @Input() mode: string;
    tasks$: Observable<Array<Task>>;
    id$ = new Observable<String>();

    constructor(private sb: TasksSandbox,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    ngOnInit() {
        console.log('mode', this.mode);


        this.route.params
        .take(1)
        .subscribe((params: Params) => {
            

            this.id$ = params['id'];
            
        });

        if (this.mode == "contacts") {
            this.getTasksByContact();
        }
        
        if (this.mode == "accounts") {
            this.getTasksByAccount();
        }
    }

    

    getTasksByContact() {
        const params$ = this.route.params;
        this.tasks$ = params$
        .take(1)
        .switchMap((params: Params) => this.sb.fetchTasksByContact(params['id']));
    }

    getTasksByAccount() {
        const params$ = this.route.params;
        this.tasks$ = params$
        .take(1)
        .switchMap((params: Params) => this.sb.fetchTasksByAccount(params['id']));
    }

    onSave(task: Task): void {
        if (task.dueDate == "") {
            console.log('no date');
            task.dueDate = new Date().toISOString();
            return this.sb.addTask(task);
        }
        else if (task.dueDate == null) {
            console.log('null date');
            task.dueDate = new Date().toISOString();
            return this.sb.addTask(task);
        }
        else {
            return this.sb.addTask(task);
        }
        
    }

    onUpdateTask(item: {id: string, task: Task}): void {
        console.log(item);
        // this.sb.updateTask(item.id, item.task);
    }

    onUpdateContact(item: {task: Task, contactId: string}): void {
        console.log('contact emitted through container', item.task, item.contactId);
        this.sb.setContact(item.task, item.contactId);
    }

    onUpdateClientAccount(item: {task: Task, accountId: string}): void {
        this.sb.setAccount(item.task, item.accountId);
    }

    onUpdateCompleted(task: Task): void {
        if (task.isCompleted == true) {
            this.sb.setStatus(task, false);
        }
        if (task.isCompleted == false) {
            this.sb.setStatus(task, true);
        }
    }

    onUpdateAssignee(item: {task: Task, recipientId: string}): void {
        console.log('assignee emitted through container', item.task, item.recipientId);
        this.sb.setAssignee(item.task, item.recipientId);
    }

    onRemoveTask(task: Task): void {
        console.log('remove emitted through container', task);
        this.sb.removeTask(task);
    }



}

// <md-tab label="+">
//             <add-address-tab [id]="this.id$" (onSave)="onSave($event)"></add-address-tab>
//         </md-tab>
//         <md-tab *ngFor="let item of this.addresses$|async" label="{{item.formattedName}}">
//             <address-tab [address]="item" (onSave)="onSave($event)"></address-tab>
//         </md-tab>