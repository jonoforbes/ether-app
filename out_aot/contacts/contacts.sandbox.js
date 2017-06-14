var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ContactsService } from "./services/contacts.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddContact, UpdateContact, UpdateContactAccount, RemoveContact } from "../statemanagement/actions/data/contact";
export let ContactsSandbox = class ContactsSandbox {
    constructor(store, contactsService) {
        this.store = store;
        this.contactsService = contactsService;
        this.ngUnsubscribe = new Subject();
        this.contacts$ = this.store.select(state => state.data.contacts);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
        this.isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addContact(contact) {
        this.contactsService.add(contact)
            .take(1)
            .subscribe((contact) => {
            this.store.dispatch(new AddContact(contact));
        }, () => this.handleError());
    }
    updateContact(id, contact) {
        let action = new UpdateContact(id, contact);
        this.store.dispatch(action);
        this.contactsService.update(id, contact)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchContact(id) {
        console.log('contact', id);
        return this.contactsService.fetchContact(id)
            .take(1)
            .share();
    }
    fetchContactsByAccount(id) {
        return this.contacts$
            .take(2)
            .map((contacts) => {
            return contacts.filter((contact) => {
                return contact.accountId == id;
            });
        });
    }
    removeContact(contact) {
        let action = new RemoveContact(contact._id);
        this.store.dispatch(action);
        this.contactsService.remove(contact)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    setAccount(contact, id) {
        let action = new UpdateContactAccount(contact._id, id);
        this.store.dispatch(action);
        this.contactsService.setAccount(contact, id)
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
ContactsSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, ContactsService])
], ContactsSandbox);
//# sourceMappingURL=contacts.sandbox.js.map