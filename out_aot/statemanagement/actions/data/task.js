import { type } from "../../util/util";
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
};
export class AddTask {
    constructor(task) {
        this.type = ActionTypes.TASKS_ADD;
        this.payload = { task };
    }
}
export class RemoveTask {
    constructor(_id) {
        this.type = ActionTypes.TASKS_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateTask {
    constructor(_id, task) {
        this.type = ActionTypes.TASKS_UPDATE;
        this.payload = { _id, task };
    }
}
export class UpdateTaskAccount {
    constructor(_id, accountId) {
        this.type = ActionTypes.TASKS_UPDATE_ACCOUNT;
        this.payload = { _id, accountId };
    }
}
export class UpdateTaskContact {
    constructor(_id, contactId) {
        this.type = ActionTypes.TASKS_UPDATE_CONTACT;
        this.payload = { _id, contactId };
    }
}
export class UpdateTaskSale {
    constructor(_id, saleId) {
        this.type = ActionTypes.TASKS_UPDATE_SALE;
        this.payload = { _id, saleId };
    }
}
export class UpdateTaskAssignee {
    constructor(_id, recipientId) {
        this.type = ActionTypes.TASKS_UPDATE_ASSIGNEE;
        this.payload = { _id, recipientId };
    }
}
export class UpdateTaskStatus {
    constructor(_id, isCompleted) {
        this.type = ActionTypes.TASKS_UPDATE_STATUS;
        this.payload = { _id, isCompleted };
    }
}
export class SetAllTasks {
    constructor(tasks) {
        this.type = ActionTypes.TASKS_SET_ALL;
        this.payload = { tasks };
    }
}
//# sourceMappingURL=task.js.map