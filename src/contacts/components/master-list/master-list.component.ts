import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { Contact } from "../../entities/Contact";
// import { ContactMenuComponent } from "../contact-menu/contact-menu.component";

@Component({
    selector: "contacts-master-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button md-button (click)="addContact()" style="text-align: left !important; padding: 5px; margin-top: -10px;">
          <p style="margin: 4px 170px 4px 10px;">+ &nbsp; &nbsp;Add New Contact</p>
        </button>
        <md-nav-list>
        <div fxLayout="row" *ngFor="let contact of contacts | orderByPipe: order">
        <button md-button style="align-items: true" (click)="selectDetail(contact)">
          
            <div fxLayout="column" class="initialsBoxContact">
        <h1>{{contact.firstName | slice:0:1}}{{contact.lastName | slice:0:1}}</h1>
        </div>
            <h3 style="margin-top: 17px" md-line>{{contact.firstName}} {{contact.lastName}}</h3>
            
          
          </button>
          <contact-menu
            (updateClientAccount)="onUpdateClientAccount(contact, $event)"
          ></contact-menu>
        </div>

      </md-nav-list>
    `
})
export class ContactsMasterListComponent {
    @Input() contacts: Array<Contact>;
    @Output() updateClientAccount = new EventEmitter<{contact: Contact, accountId: string}>();
    order: string = 'lastName';

    constructor( private router: Router) {

    }
    addContact() {
        this.router.navigate(['/contacts', {outlets: {'m': ['list'], 'd': ['add']}}]);
    }

    onUpdateClientAccount(contact: Contact, accountId: string): void {

        this.updateClientAccount.emit({contact, accountId});
    }

    selectDetail(contact: Contact) {
        this.router.navigate(['/contacts', {outlets: {'m': ['list'], 'd': [contact._id]}}]);
    }
    
}