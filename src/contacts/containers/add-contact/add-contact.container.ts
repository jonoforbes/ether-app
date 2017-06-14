import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { Observable } from "rxjs/Observable";
import { Validators, FormGroup, FormArray, FormBuilder } from "@angular/forms";
import { ContactsSandbox } from "../../contacts.sandbox"; 
import { ContactsFormGroupContainer } from "../../containers/contacts-form-group/contacts-form-group.container";

@Component({
    selector: "add-contact",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="example-scrolling-content">
        


        <contacts-form-group (onSave)="onSave($event)"></contacts-form-group>

        
    </div>
    `
})
export class AddContactContainer {

    constructor(private sb: ContactsSandbox,
                
                 ) {
        
    }


    onSave(contact: Contact): void {
        this.sb.addContact(contact);
    }

    
}