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
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { ContactsSandbox } from "../../contacts.sandbox";
export let ContactsWidgetContainer = class ContactsWidgetContainer {
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
        this.refreshContacts();
        this.route.params
            .take(1)
            .subscribe((params) => {
            this.id$ = params['id'];
        });
    }
    refreshContacts() {
        const params$ = this.route.params.take(1);
        this.contacts$ = params$
            .take(1)
            .switchMap((params) => this.sb.fetchContactsByAccount(params['id']).takeUntil(this.ngUnsubscribe));
    }
    onUpdateContact(contact) {
        this.sb.updateContact(contact._id, contact);
    }
    onAddContact(contact) {
        var accountId = this.id$.toString();
        console.log(accountId);
        console.log('trying to submit');
        var newContact = Object.assign(contact, { accountId });
        console.log('new contact', newContact);
        this.sb.addContact(newContact);
    }
    onSelect(contact) {
        this.router.navigate(['/contacts', { outlets: { 'm': ['list'], 'd': [contact._id] } }]);
    }
    onUpdateContactAccount(contact) {
        var id = "";
        console.log(id);
        console.log(contact);
        this.sb.setAccount(contact, id);
    }
};
ContactsWidgetContainer = __decorate([
    Component({
        selector: "contacts-widget",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <accordion class="widget-accordion" [closeOthers]="false" [showArrows]="true">
          
        <accordion-group class="widget-accordion" [isOpened]="true">
            <accordion-heading class="widget-accordion">
                <h2 class="widget widget-head">Contacts</h2>
            </accordion-heading>

            <md-tab-group class="widget" [selectedIndex]="1">
                <md-tab label="+">
                    <add-contact-tab (addContact)="onAddContact($event)"></add-contact-tab>
                </md-tab>
                <md-tab *ngFor="let item of this.contacts$|async" label="{{item.firstName}} {{item.lastName}}">
                    <contact-tab (updateContact)="onUpdateContact($event)"
                                (updateContactAccount)="onUpdateContactAccount($event)" [contact]="item"></contact-tab>
                </md-tab>      
            </md-tab-group>
        </accordion-group>
    </accordion>
    
    
    
    `
    }), 
    __metadata('design:paramtypes', [ContactsSandbox, ActivatedRoute, Router])
], ContactsWidgetContainer);
//# sourceMappingURL=contacts-widget.container.js.map