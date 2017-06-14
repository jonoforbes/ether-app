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
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { TasksSandbox } from "../../tasks.sandbox";
export let TasksWidgetContainer = class TasksWidgetContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.ngUnsubscribe = new Subject();
        this.id$ = new Observable();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    ngOnInit() {
        console.log('mode', this.mode);
        this.route.params
            .take(1)
            .subscribe((params) => {
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
            .switchMap((params) => this.sb.fetchTasksByContact(params['id']));
    }
    getTasksByAccount() {
        const params$ = this.route.params;
        this.tasks$ = params$
            .take(1)
            .switchMap((params) => this.sb.fetchTasksByAccount(params['id']));
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
__decorate([
    Input(), 
    __metadata('design:type', String)
], TasksWidgetContainer.prototype, "mode", void 0);
TasksWidgetContainer = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [TasksSandbox, ActivatedRoute, Router])
], TasksWidgetContainer);
//# sourceMappingURL=tasks-widget.container.js.map