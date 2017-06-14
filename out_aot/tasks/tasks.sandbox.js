var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { TasksService } from "./services/tasks.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddTask, UpdateTask, RemoveTask, UpdateTaskAccount, UpdateTaskAssignee, UpdateTaskContact, UpdateTaskSale, UpdateTaskStatus } from "../statemanagement/actions/data/task";
export let TasksSandbox = class TasksSandbox {
    constructor(store, tasksService) {
        this.store = store;
        this.tasksService = tasksService;
        this.ngUnsubscribe = new Subject();
        this.tasks$ = this.store.select(state => state.data.tasks)
            .takeUntil(this.ngUnsubscribe);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated)
            .take(1);
        this.isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed)
            .takeUntil(this.ngUnsubscribe);
        this.userId$ = this.store.select(state => state.data.authentication.account.userId)
            .take(1);
    }
    ngOnDestroy() {
        console.log('task sandbox out!');
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addTask(task) {
        this.tasksService.add(task)
            .take(1)
            .subscribe((task) => {
            this.store.dispatch(new AddTask(task));
        }, () => this.handleError());
    }
    updateTask(id, task) {
        this.userId$
            .take(1)
            .subscribe((id) => {
            let userId = id;
            if (task.userId = userId) {
                let action = new UpdateTask(id, task);
                this.store.dispatch(action);
                this.tasksService.update(id, task)
                    .take(1)
                    .subscribe(() => {
                }, () => this.handleError(action));
            }
            else {
                toastr.error("You don't have permission to edit this task");
            }
        });
    }
    fetchTask(id) {
        return this.tasks$
            .take(1)
            .switchMap((tasks) => {
            return tasks.filter((task) => {
                return task._id == id;
            });
        });
    }
    removeTask(task) {
        this.userId$
            .take(1)
            .subscribe((id) => {
            let userId = id;
            if (task.userId == userId) {
                let action = new RemoveTask(task._id);
                this.store.dispatch(action);
                this.tasksService.remove(task)
                    .take(1)
                    .subscribe(() => {
                }, () => this.handleError(action));
            }
            else {
                toastr.error("You don't have permission to remove this task");
            }
        });
    }
    setAccount(task, id) {
        this.userId$
            .take(1)
            .subscribe((uid) => {
            let userId = uid;
            if (task.userId == userId) {
                let action = new UpdateTaskAccount(task._id, id);
                this.store.dispatch(action);
                this.tasksService.setAccount(task, id)
                    .take(1)
                    .subscribe(() => {
                }, () => this.handleError(action));
            }
            else {
                toastr.error("You don't have permission to link this task");
            }
        });
    }
    fetchTasksByAccount(id) {
        return this.tasks$
            .take(2)
            .map((tasks) => {
            return tasks.filter((task) => {
                return task.accountId == id;
            });
        });
    }
    setContact(task, id) {
        let action = new UpdateTaskContact(task._id, id);
        this.store.dispatch(action);
        this.tasksService.setContact(task, id)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchTasksByContact(id) {
        return this.tasks$
            .take(2)
            .map((tasks) => {
            return tasks.filter((task) => {
                return task.contactId == id;
            });
        });
    }
    setSale(task, id) {
        let action = new UpdateTaskSale(task._id, id);
        this.store.dispatch(action);
        this.tasksService.setSale(task, id)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchTasksBySale(id) {
        return this.tasks$
            .take(1)
            .map((tasks) => {
            return tasks.filter((task) => {
                return task.saleId == id;
            });
        });
    }
    setAssignee(task, recipientId) {
        this.userId$
            .take(1)
            .subscribe((id) => {
            let userId = id;
            if (task.userId == userId) {
                let action = new UpdateTaskAssignee(task._id, recipientId);
                this.store.dispatch(action);
                this.tasksService.setAssignee(task, recipientId)
                    .take(1)
                    .subscribe(() => {
                }, () => this.handleError(action));
            }
            else {
                toastr.error("You dont have permission to reassign this task");
            }
        });
    }
    fetchTasksByAssignee(id) {
        return this.tasks$
            .take(1)
            .map((tasks) => {
            return tasks.filter((task) => {
                return task.recipientId == id;
            });
        });
    }
    setStatus(task, isCompleted) {
        let action = new UpdateTaskStatus(task._id, isCompleted);
        this.store.dispatch(action);
        this.tasksService.setStatus(task, isCompleted)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    handleError(action) {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({ type: UNDO_ACTION, payload: action });
        }
    }
};
TasksSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, TasksService])
], TasksSandbox);
//# sourceMappingURL=tasks.sandbox.js.map