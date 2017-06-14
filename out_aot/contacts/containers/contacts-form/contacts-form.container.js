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
import { FormBuilder } from "@angular/forms";
import { ContactsSandbox } from "../../contacts.sandbox";
export let ContactsFormContainer = class ContactsFormContainer {
    constructor(sb, formBuilder) {
        this.sb = sb;
        this.formBuilder = formBuilder;
        this.contact = new Contact();
        this.onSave = new EventEmitter();
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            firstName: [this.contact.firstName],
            middleName: [this.contact.middleName],
            lastName: [this.contact.lastName],
            preferredName: [this.contact.preferredName],
            salutation: [this.contact.salutation],
            dateOfBirth: [this.contact.dateOfBirth],
            nationality: [this.contact.nationality],
            mobilePhone: [this.contact.mobilePhone],
            homePhone: [this.contact.homePhone],
            workPhone: [this.contact.workPhone],
            image: [this.contact.image],
        });
    }
    ngOnChanges() {
        this.contactForm = this.formBuilder.group({
            firstName: [this.contact.firstName],
            middleName: [this.contact.middleName],
            lastName: [this.contact.lastName],
            preferredName: [this.contact.preferredName],
            salutation: [this.contact.salutation],
            dateOfBirth: [this.contact.dateOfBirth],
            nationality: [this.contact.nationality],
            mobilePhone: [this.contact.mobilePhone],
            homePhone: [this.contact.homePhone],
            workPhone: [this.contact.workPhone],
            image: [this.contact.image],
        });
    }
    onSubmit() {
        console.log(this.contact);
        console.log(this.contactForm.value);
        this.onSave.emit(Object.assign(this.contact, this.contactForm.value));
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], ContactsFormContainer.prototype, "contact", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ContactsFormContainer.prototype, "onSave", void 0);
ContactsFormContainer = __decorate([
    Component({
        selector: "contacts-form",
        changeDetection: ChangeDetectionStrategy.Default,
        template: `
    
        
        <form [formGroup]="contactForm" novalidate (ngSubmit)="onSubmit()">


   
        <button type="submit" [disabled]="!contactForm.valid">Submit</button>


        <detail-form [contactForm]="this.contactForm"></detail-form>
    </form>
        
    
    `
    }), 
    __metadata('design:paramtypes', [ContactsSandbox, FormBuilder])
], ContactsFormContainer);
//# sourceMappingURL=contacts-form.container.js.map