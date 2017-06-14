import { Component, Input, Output, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { ContactsSandbox } from "../../contacts.sandbox";
import { ContactTabComponent } from "../../components/contact-tab/contact-tab.component";
// import { AddAddressTabComponent } from "../../components/add-address-tab/add-address-tab.component";
import { AddContactTabComponent } from "../../components/add-contact-tab/add-contact-tab.component";

@Component({
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
})
export class ContactsWidgetContainer implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    contacts$: Observable<Array<Contact>>;
    id$ = new Observable<String>();

    constructor(private sb: ContactsSandbox,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    ngOnInit() {

        this.refreshContacts();
        this.route.params
        .take(1)
        .subscribe((params: Params) => {
            

            this.id$ = params['id'];
            
        });
    }

    refreshContacts() {
        const params$ = this.route.params.take(1);
        this.contacts$ = params$
            .take(1)
            .switchMap((params: Params) => this.sb.fetchContactsByAccount(params['id']).takeUntil(this.ngUnsubscribe));
    }

    onUpdateContact(contact: Contact): void {
        this.sb.updateContact(contact._id, contact);
    }

    onAddContact(contact: Contact): void {
        var accountId: string = this.id$.toString();
        console.log(accountId);
        console.log('trying to submit');
        var newContact: Contact = Object.assign(contact, {accountId});
        console.log('new contact', newContact);
        this.sb.addContact(newContact);
    }

    onSelect(contact: Contact):void {
        this.router.navigate(['/contacts', {outlets: {'m': ['list'], 'd': [contact._id]}}]);
    }

    onUpdateContactAccount(contact: Contact): void {
        var id: string = "";
        console.log(id);
        console.log(contact);
        this.sb.setAccount(contact, id);
    }



}

// <md-tab label="+">
//             <add-address-tab [id]="this.id$" (onSave)="onSave($event)"></add-address-tab>
//         </md-tab>
//         <md-tab *ngFor="let item of this.addresses$|async" label="{{item.formattedName}}">
//             <address-tab [address]="item" (onSave)="onSave($event)"></address-tab>
//         </md-tab>