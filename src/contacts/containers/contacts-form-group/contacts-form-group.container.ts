import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { ContactsSandbox } from "../../contacts.sandbox"; 
import { ContactsDetailHeaderComponent } from "../../components/detail-header/detail-header.component";
import { ContactsDetailFormComponent } from "../../components/detail-form/detail-form.component";

@Component({
    selector: "contacts-form-group",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    
        
        <form [formGroup]="contactForm" novalidate (ngSubmit)="onSubmit()">

        <contacts-detail-header [contactForm]="this.contactForm" [contact]="this.newContact" (submitForm)="onSubmit()"></contacts-detail-header>
   
        


        <contacts-detail-form [contactForm]="this.contactForm" (remove)="onRemove(newContact)"></contacts-detail-form>
        
    </form>
        
    
    `
})
export class ContactsFormGroupContainer implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    @Input() contact: Observable<Contact>;
    @Output() onSave = new EventEmitter<Contact>();
    @Output() remove = new EventEmitter<Contact>();

    public contactForm: FormGroup;
    public newContact = new Contact();

    constructor(private sb: ContactsSandbox,
                private formBuilder: FormBuilder
                 ) {
        
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

        })
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

    

    onSubmit(): void {
        console.log(this.contact);
        console.log(this.contactForm.value);
        this.onSave.emit(Object.assign(this.newContact, this.contactForm.value));
    }

    public onRemove(contact: Contact): void {
        this.remove.emit(contact);
    }

    
}