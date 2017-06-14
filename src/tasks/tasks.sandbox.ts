import { TasksService } from "./services/tasks.service";
import { Injectable } from "@angular/core";
import { Task } from "./entities/Task";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import {
    AddTask,
    UpdateTask, 
    RemoveTask,
    UpdateTaskAccount,
    UpdateTaskAssignee,
    UpdateTaskContact,
    UpdateTaskSale,
    UpdateTaskStatus
} from "../statemanagement/actions/data/task";

@Injectable()
export class TasksSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    tasks$ = this.store.select(state => state.data.tasks)
    .takeUntil(this.ngUnsubscribe);
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated)
    .take(1);
    isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed)
    .takeUntil(this.ngUnsubscribe);
    userId$ = this.store.select(state => state.data.authentication.account.userId)
    .take(1);

    constructor(private store: Store<ApplicationState>,
                private tasksService: TasksService) {

    }

    ngOnDestroy() {
        console.log('task sandbox out!');
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addTask(task: Task): void {
        this.tasksService.add(task)
        .take(1)
        .subscribe((task: Task) => {
            this.store.dispatch(new AddTask(task));
        }, () => this.handleError());
    }

    updateTask(id: string, task: Task): void {
        this.userId$
        .take(1)
        .subscribe((id: string) => {
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
        })
        
    }

    fetchTask(id: string): Observable<Task> {
        return this.tasks$
        .take(1)
        .switchMap((tasks: Task[]) => {
            return tasks.filter((task: Task) => {
                return task._id == id;
            });
        });
    }

    removeTask(task: Task): void {
        this.userId$
        .take(1)
        .subscribe((id: string) => {
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
        })


    }

    setAccount(task: Task, id: string): void {
        this.userId$
        .take(1)
        .subscribe((uid: string) => {
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
        })
    }

    fetchTasksByAccount(id: string): Observable<Array<Task>> {
        return this.tasks$
        .take(2)
        .map((tasks: any) => {
            return tasks.filter((task: Task) => {
                return task.accountId == id;
            });
        });
    }

    setContact(task: Task, id: string): void {
        let action = new UpdateTaskContact(task._id, id);
        this.store.dispatch(action);
        this.tasksService.setContact(task, id)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    fetchTasksByContact(id: string): Observable<Array<Task>> {
        return this.tasks$
        .take(2)
        .map((tasks: any) => {
            return tasks.filter((task: Task) => {
                return task.contactId == id;
            });
        });
    }

    setSale(task: Task, id: string): void {
        let action = new UpdateTaskSale(task._id, id);
        this.store.dispatch(action);
        this.tasksService.setSale(task, id)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    fetchTasksBySale(id: string): Observable<Array<Task>> {
        return this.tasks$
        .take(1)
        .map((tasks: any) => {
            return tasks.filter((task: Task) => {
                return task.saleId == id;
            });
        });
    }

    setAssignee(task: Task, recipientId: string): void {
        this.userId$
        .take(1)
        .subscribe((id: string) => {
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
        })
        
    }

    fetchTasksByAssignee(id: string): Observable<Array<Task>> {
        return this.tasks$
        .take(1)
        .map((tasks: any) => {
            return tasks.filter((task: Task) => {
                return task.recipientId == id;
            });
        });
    }

    setStatus(task, isCompleted: boolean): void {
        let action = new UpdateTaskStatus(task._id, isCompleted);
        this.store.dispatch(action);
        this.tasksService.setStatus(task, isCompleted)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    private handleError(action?: Action): void {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({type: UNDO_ACTION, payload: action});
        }
    }
}