var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MessagesService } from "./services/messages.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddMessage, UpdateMessage, RemoveMessage } from "../statemanagement/actions/data/message";
export let MessagesSandbox = class MessagesSandbox {
    constructor(store, messagesService) {
        this.store = store;
        this.messagesService = messagesService;
        this.ngUnsubscribe = new Subject();
        this.messages$ = this.store.select(state => state.data.messages);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
        this.isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addMessage(message) {
        this.messagesService.add(message)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((message) => {
            this.store.dispatch(new AddMessage(message));
        }, () => this.handleError());
    }
    updateMessage(id, message) {
        let action = new UpdateMessage(id, message);
        this.store.dispatch(action);
        this.messagesService.update(id, message)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchMessages(id) {
        return this.messages$.map((messages) => {
            return messages.filter((message) => {
                return message.recipientId == id || message.userId == id;
            });
        });
    }
    fetchSent(id) {
        return this.messages$.map((messages) => {
            return messages.filter((message) => {
                return message.userId == id;
            });
        });
    }
    removeMessage(message) {
        let action = new RemoveMessage(message._id);
        this.store.dispatch(action);
        this.messagesService.remove(message)
            .takeUntil(this.ngUnsubscribe)
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
MessagesSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, MessagesService])
], MessagesSandbox);
//# sourceMappingURL=messages.sandbox.js.map