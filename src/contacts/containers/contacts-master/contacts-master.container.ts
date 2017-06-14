import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { ContactsSandbox } from "../../contacts.sandbox"; 
import { ContactsMasterListComponent } from "../../components/master-list/master-list.component";

@Component({
    selector: "contacts-master",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        
        <md-input-container floatingPlaceholder="false" class="etherSearch" dividerColor="#7BACC9">
        <input mdInput placeholder="Search Contacts" style="width: 120px; margin-top: -10px; margin-left: 5px; color: #838383 !important;" [formControl]="searchCtrl">
        <button md-icon-button style="margin-left: 120px; margin-top: -50px !important;"><md-icon style="color: #838383; width: 20px;">search</md-icon></button>
      </md-input-container>
        
        <contacts-master-list 
            (updateClientAccount)="onUpdateClientAccount($event)"
            [contacts]="matchingContacts$ | async">
        </contacts-master-list>
    `
})
export class ContactsMasterContainer {
    searchCtrl = new FormControl("");

    contacts$ = this.sb.contacts$;
    matchingContacts$ = Observable.combineLatest(this.searchCtrl.valueChanges.startWith(""), this.contacts$,
    (term: string, contacts: Array<Contact>) => {
        return contacts.filter(contact => contact.firstName.toLowerCase().indexOf(term) > -1);
    });
    constructor(private sb: ContactsSandbox) {
        
    }

    onUpdateClientAccount(item: {contact: Contact, accountId: string}): void {
        this.sb.setAccount(item.contact, item.accountId);
    }
}