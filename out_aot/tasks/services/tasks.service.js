var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Headers, RequestOptions, Http } from "@angular/http";
import { API_URL } from "../../configuration";
import { Subject } from "rxjs/Subject";
export let TasksService = class TasksService {
    constructor(store, http) {
        this.store = store;
        this.http = http;
        this.ngUnsubscribe = new Subject();
        this.store.select((state) => state.data.authentication.jwtToken)
            .take(2)
            .subscribe((jwtToken) => this.jwtToken = jwtToken);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    add(task) {
        return this.http.post(`${API_URL}/tasks`, task, this.authorizedHttpOptions())
            .take(1)
            .map((res) => res.json());
    }
    update(id, task) {
        return this.http.put(`${API_URL}/tasks/${id}`, task, this.authorizedHttpOptions());
    }
    remove(task) {
        return this.http.delete(`${API_URL}/tasks/${task._id}`, this.authorizedHttpOptions());
    }
    load() {
        return this.http.get(`${API_URL}/tasks`, this.authorizedHttpOptions())
            .take(1)
            .map((res) => res.json());
    }
    fetchTask(id) {
        return this.http.get(`${API_URL}/tasks/${id}`, this.authorizedHttpOptions())
            .take(1)
            .map((res) => res.json());
    }
    setAccount(task, accountId) {
        let newTask = Object.assign({}, task, { accountId: accountId });
        return this.http.put(`${API_URL}/tasks/${task._id}`, newTask, this.authorizedHttpOptions());
    }
    setContact(task, contactId) {
        let newTask = Object.assign({}, task, { contactId: contactId });
        return this.http.put(`${API_URL}/tasks/${task._id}`, newTask, this.authorizedHttpOptions());
    }
    setSale(task, saleId) {
        let newTask = Object.assign({}, task, { saleId: saleId });
        return this.http.put(`${API_URL}/tasks/${task._id}`, newTask, this.authorizedHttpOptions());
    }
    setAssignee(task, recipientId) {
        console.log('task in service', task, recipientId);
        let newTask = Object.assign({}, task, { recipientId: recipientId });
        return this.http.put(`${API_URL}/tasks/${task._id}`, newTask, this.authorizedHttpOptions());
    }
    setStatus(task, isCompleted) {
        let newTask = Object.assign({}, task, { isCompleted: isCompleted });
        return this.http.put(`${API_URL}/tasks/${task._id}`, newTask, this.authorizedHttpOptions());
    }
    authorizedHttpOptions() {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({ headers: headers });
    }
};
TasksService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, Http])
], TasksService);
//# sourceMappingURL=tasks.service.js.map