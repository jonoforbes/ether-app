import { Component, Input, EventEmitter, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { Contact } from "../../entities/Contact";
import { ContactsSandbox } from "../../contacts.sandbox";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "contact-assignment-info",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <p>Contact: {{contactId}}</p>        
    

    
    `

})
export class ContactAssignmentInfoComponent {
    @Input() id: string;

    constructor(private sb: ContactsSandbox) {

    }

    assignableContacts$: Observable<Array<Contact>>;
    assignedContact$: Observable<Contact>;

    contactId: string;


}