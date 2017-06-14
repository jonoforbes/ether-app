import { Component, OnInit, Output, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Task } from "../../entities/Task";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { FormControl } from "@angular/forms";
import { TasksSandbox} from "../../tasks.sandbox";
import { TasksHeaderComponent } from "../../components/tasks-header/tasks-header.component";
import { TasksFormGroupContainer } from "../tasks-form-group/tasks-form-group.container";
import { TasksListComponent } from "../../components/tasks-list/tasks-list.component";
import * as moment from "moment";
import Moment = moment.Moment;


@Component({
    selector: "tasks-today",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

        <div class="example-scrolling-content">
            <tasks-header [date]="headerDate" [title]="headerText"></tasks-header>
            <tasks-form-group (onSave)="onSave($event)"></tasks-form-group>

             <tasks-list [tasks]="matchingTasks$|async" 
             (updateTask)="onUpdateTask($event)"
             (updateAssignee)="onUpdateAssignee($event)"
             (updateContact)="onUpdateContact($event)"
             (updateClientAccount)="onUpdateClientAccount($event)"
             (removeTask)="onRemoveTask($event)"
             (updateStatus)="onUpdateCompleted($event)"
             ></tasks-list>
        </div>

        
       
    
    `
})
export class TasksTodayContainer implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    sub: any;
    matchingTasks$: Observable<Array<Task>>;
    headerDate: string;
    headerText: string = "Tasks for Today";
    

    constructor(private sb: TasksSandbox,
                private route: ActivatedRoute,
                private router: Router) {
        
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
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

    ngOnInit() {
        let dateM = moment();
        let dateString: string = dateM.format('Do MMMM YYYY');
        this.headerDate = dateString;

        this.matchingTasks$ = this.sb.tasks$
        .takeUntil(this.ngUnsubscribe)
        .map((tasks: any) => {
            return tasks.filter((task: Task) => {
                return moment(task.dueDate).format('DD/MM/YYYY') === dateM.format('DD/MM/YYYY')
            })
        })
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