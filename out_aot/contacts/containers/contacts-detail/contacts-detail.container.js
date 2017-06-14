var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { ContactsSandbox } from "../../contacts.sandbox";
export let ContactsDetailContainer = class ContactsDetailContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.ngUnsubscribe = new Subject();
        this.mode = "contacts";
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        console.log('contact container out');
    }
    ngOnInit() {
        this.sub = this.route.params
            .takeUntil(this.ngUnsubscribe)
            .subscribe(params => {
            this.id = params['id'];
            this.editContact$ = this.sb.isAuthenticated$
                .take(1)
                .filter(isAuthenticated => isAuthenticated)
                .flatMap(() => {
                return this.sb.fetchContact(this.id).take(1);
            }).publishReplay().refCount();
        });
    }
    pubId() {
        console.log(this.id);
    }
    onSave(contact) {
        this.sb.updateContact(this.id, contact);
    }
    onRemove(contact) {
        this.sb.removeContact(contact);
    }
};
ContactsDetailContainer = __decorate([
    Component({
        selector: "contacts-detail",
        template: `
    <div class="example-scrolling-content">
        
        
        <div *ngIf="(editContact$|async)">
            <contacts-form-group [contact]="editContact$" (onSave)="onSave($event)" (remove)="onRemove($event)"></contacts-form-group>
            <addresses-widget [contact]="true"></addresses-widget>
            <tasks-widget [mode]="mode"></tasks-widget>
            <documents-widget [mode]="mode"></documents-widget>
        </div>
        
    </div>
    `
    }), 
    __metadata('design:paramtypes', [ContactsSandbox, ActivatedRoute, Router])
], ContactsDetailContainer);
//# sourceMappingURL=contacts-detail.container.js.map