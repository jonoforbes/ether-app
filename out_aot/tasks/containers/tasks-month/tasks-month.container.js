var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { TasksSandbox } from "../../tasks.sandbox";
import * as moment from "moment";
export let TasksMonthContainer = class TasksMonthContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.ngUnsubscribe = new Subject();
        this.headerText = "Tasks for This Month";
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    ngOnInit() {
        let startOfMonth = moment().startOf('month');
        let endOfMonth = moment().endOf('month');
        let startString = startOfMonth.format('Do MMMM YYYY');
        let endString = endOfMonth.format('Do MMMM YYYY');
        this.headerDate = `${startString} - ${endString}`;
        this.matchingTasks$ = this.sb.tasks$
            .takeUntil(this.ngUnsubscribe)
            .map((tasks) => {
            return tasks.filter((task) => {
                return moment(task.dueDate).isBetween(startOfMonth, endOfMonth);
            });
        });
    }
    onSave(task) {
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
    onUpdateTask(item) {
        console.log(item);
    }
    onUpdateContact(item) {
        console.log('contact emitted through container', item.task, item.contactId);
        this.sb.setContact(item.task, item.contactId);
    }
    onUpdateClientAccount(item) {
        this.sb.setAccount(item.task, item.accountId);
    }
    onUpdateCompleted(task) {
        if (task.isCompleted == true) {
            this.sb.setStatus(task, false);
        }
        if (task.isCompleted == false) {
            this.sb.setStatus(task, true);
        }
    }
    onUpdateAssignee(item) {
        console.log('assignee emitted through container', item.task, item.recipientId);
        this.sb.setAssignee(item.task, item.recipientId);
    }
    onRemoveTask(task) {
        console.log('remove emitted through container', task);
        this.sb.removeTask(task);
    }
};
TasksMonthContainer = __decorate([
    Component({
        selector: "tasks-month",
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
    }), 
    __metadata('design:paramtypes', [TasksSandbox, ActivatedRoute, Router])
], TasksMonthContainer);
//# sourceMappingURL=tasks-month.container.js.map