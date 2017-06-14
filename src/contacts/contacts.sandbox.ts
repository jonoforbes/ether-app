import { ContactsService } from "./services/contacts.service";
import { Injectable } from "@angular/core";
import { Contact } from "./entities/Contact";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddContact, UpdateContact, UpdateContactAccount, RemoveContact } from "../statemanagement/actions/data/contact";

@Injectable()
export class ContactsSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    contacts$ = this.store.select(state => state.data.contacts);
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);

    constructor(private store: Store<ApplicationState>, 
                private contactsService: ContactsService) {
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addContact(contact: Contact): void {
        this.contactsService.add(contact)
        .take(1)
        .subscribe((contact: Contact) => {
            this.store.dispatch(new AddContact(contact));
        }, () => this.handleError());
    }

    updateContact(id: string, contact: Contact): void {
        let action = new UpdateContact(id, contact);
        this.store.dispatch(action);
        this.contactsService.update(id, contact)
        .take(1)
        .subscribe(() => {   
        }, () => this.handleError(action));
    }

    fetchContact(id: string): Observable<Contact> {
        console.log('contact', id);
        // 
        return this.contactsService.fetchContact(id)
        .take(1)
        .share();
        // return this.contacts$
        // .takeUntil(this.ngUnsubscribe)
        // .switchMap((contacts: Contact[]) => {
        //     return contacts.filter((contact: Contact) => {
        //         return contact._id == id;
        //     });
        // });
    }

    fetchContactsByAccount(id: string): Observable<Array<Contact>> {
        return this.contacts$
        .take(2)
        .map((contacts: any) => {
            return contacts.filter((contact: Contact) => {
                return contact.accountId == id;
            });
        });
    }

    removeContact(contact: Contact): void {
        let action = new RemoveContact(contact._id);
        this.store.dispatch(action);
        this.contactsService.remove(contact)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    // uploadPhoto(event, id: string): void {
    //     this.contactsService.uploadPhoto(event, id).subscribe(() => {
    //     }, () => console.log('error'));        
    // }

    setAccount(contact: Contact, id: string): void {
        let action = new UpdateContactAccount(contact._id, id);
        this.store.dispatch(action);
        this.contactsService.setAccount(contact, id)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError(action));
    }
    
    private handleError(action?: Action): void {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({type: UNDO_ACTION, payload: action});
        }
    }
}