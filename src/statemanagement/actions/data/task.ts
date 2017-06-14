import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { Task } from "../../../tasks/entities/Task";

export const ActionTypes = {
    TASKS_ADD: type("DATA_TASKS_ADD"),
    TASKS_REMOVE: type("DATA_TASKS_REMOVE"),
    TASKS_UPDATE: type("DATA_TASKS_UPDATE"),
    TASKS_UPDATE_ACCOUNT: type("DATA_TASKS_UPDATE_ACCOUNT"),
    TASKS_UPDATE_CONTACT: type("DATA_TASKS_UPDATE_CONTACT"),
    TASKS_UPDATE_SALE: type("DATA_TASKS_UPDATE_SALE"),
    TASKS_UPDATE_ASSIGNEE: type("DATA_TASKS_UPDATE_ASSIGNEE"),
    TASKS_UPDATE_STATUS: type("DATA_TASKS_UPDATE_STATUS"),
    TASKS_SET_ALL: type("DATA_TASKS_ADD_ALL")
}

export class AddTask implements Action {
    type = ActionTypes.TASKS_ADD;
    payload: {task: Task};

    constructor(task: Task) {
        this.payload = {task};
    }
}

export class RemoveTask implements Action {
    type = ActionTypes.TASKS_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateTask implements Action {
    type = ActionTypes.TASKS_UPDATE;
    payload: {_id: string, task: Task};

    constructor(_id: string, task: Task) {
        this.payload = {_id, task};
    }
}

export class UpdateTaskAccount implements Action {
    type = ActionTypes.TASKS_UPDATE_ACCOUNT;
    payload: {_id: string, accountId: string};

    constructor(_id: string, accountId: string) {
        this.payload = {_id, accountId};
    }
}

export class UpdateTaskContact implements Action {
    type = ActionTypes.TASKS_UPDATE_CONTACT;
    payload: {_id: string, contactId: string};

    constructor(_id: string, contactId: string) {
        this.payload = {_id, contactId};
    }
}

export class UpdateTaskSale implements Action {
    type = ActionTypes.TASKS_UPDATE_SALE;
    payload: {_id: string, saleId: string};

    constructor(_id: string, saleId: string) {
        this.payload = {_id, saleId};
    }
}

export class UpdateTaskAssignee implements Action {
    type = ActionTypes.TASKS_UPDATE_ASSIGNEE;
    payload: {_id: string, recipientId: string};

    constructor(_id: string, recipientId: string) {
        this.payload = {_id, recipientId};
    }
}

export class UpdateTaskStatus implements Action {
    type = ActionTypes.TASKS_UPDATE_STATUS;
    payload: {_id: string, isCompleted: boolean};

    constructor(_id: string, isCompleted: boolean) {
        this.payload = {_id, isCompleted};
    }
}

export class SetAllTasks implements Action {
    type = ActionTypes.TASKS_SET_ALL;
    payload: {tasks: Task[]};

    constructor(tasks: Task[]) {
        this.payload = {tasks}
    }
}

export type Actions = 
    AddTask 
    | RemoveTask 
    | UpdateTask 
    | UpdateTaskAccount 
    | UpdateTaskAssignee 
    | UpdateTaskContact 
    | UpdateTaskSale 
    | UpdateTaskStatus 
    | SetAllTasks;