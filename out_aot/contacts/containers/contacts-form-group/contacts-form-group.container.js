var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { FormBuilder } from "@angular/forms";
import { ContactsSandbox } from "../../contacts.sandbox";
export let ContactsFormGroupContainer = class ContactsFormGroupContainer {
    constructor(sb, formBuilder) {
        this.sb = sb;
        this.formBuilder = formBuilder;
        this.ngUnsubscribe = new Subject();
        this.onSave = new EventEmitter();
        this.remove = new EventEmitter();
        this.newContact = new Contact();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    ngOnInit() {
        if (this.contact != undefined) {
            this.contact
                .takeUntil(this.ngUnsubscribe)
                .subscribe(contact => {
                this.newContact = contact;
                this.contactForm = this.formBuilder.group({
                    firstName: [contact.firstName],
                    middleName: [contact.middleName],
                    lastName: [contact.lastName],
                    preferredName: [contact.preferredName],
                    salutation: [contact.salutation],
                    dateOfBirth: [contact.dateOfBirth],
                    nationality: [contact.nationality],
                    mobilePhone: [contact.mobilePhone],
                    homePhone: [contact.homePhone],
                    workPhone: [contact.workPhone],
                    primaryEmail: [contact.primaryEmail],
                    secondaryEmail: [contact.secondaryEmail]
                });
            });
        }
        else {
            this.contactForm = this.formBuilder.group({
                firstName: [this.newContact.firstName],
                middleName: [this.newContact.middleName],
                lastName: [this.newContact.lastName],
                preferredName: [this.newContact.preferredName],
                salutation: [this.newContact.salutation],
                dateOfBirth: [this.newContact.dateOfBirth],
                nationality: [this.newContact.nationality],
                mobilePhone: [this.newContact.mobilePhone],
                homePhone: [this.newContact.homePhone],
                workPhone: [this.newContact.workPhone],
                primaryEmail: [this.newContact.primaryEmail],
                secondaryEmail: [this.newContact.secondaryEmail]
            });
        }
    }
    onSubmit() {
        console.log(this.contact);
        console.log(this.contactForm.value);
        this.onSave.emit(Object.assign(this.newContact, this.contactForm.value));
    }
    onRemove(contact) {
        this.remove.emit(contact);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Observable)
], ContactsFormGroupContainer.prototype, "contact", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ContactsFormGroupContainer.prototype, "onSave", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ContactsFormGroupContainer.prototype, "remove", void 0);
ContactsFormGroupContainer = __decorate([
    Component({
        selector: "contacts-form-group",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    
        
        <form [formGroup]="contactForm" novalidate (ngSubmit)="onSubmit()">

        <contacts-detail-header [contactForm]="this.contactForm" [contact]="this.newContact" (submitForm)="onSubmit()"></contacts-detail-header>
   
        


        <contacts-detail-form [contactForm]="this.contactForm" (remove)="onRemove(newContact)"></contacts-detail-form>
        
    </form>
        
    
    `
    }), 
    __metadata('design:paramtypes', [ContactsSandbox, FormBuilder])
], ContactsFormGroupContainer);
//# sourceMappingURL=contacts-form-group.container.js.map