import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Contact } from "../../entities/Contact";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { FormControl } from "@angular/forms";
import { ContactsSandbox } from "../../contacts.sandbox"; 
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { Store } from "@ngrx/store";
import { ContactsFormGroupContainer } from "../../containers/contacts-form-group/contacts-form-group.container";
import { AddressesWidgetContainer } from "../../../addresses/containers/addresses-widget/addresses-widget.container";
import { TasksWidgetContainer } from "../../../tasks/containers/tasks-widget/tasks-widget.container";

@Component({
    selector: "contacts-detail",
    
    template: `
    <div class="example-scrolling-content">
        
        
        <div *ngIf="(editContact$|async)">
            <contacts-form-group [contact]="editContact$" (onSave)="onSave($event)" (remove)="onRemove($event)"></contacts-form-group>
            <addresses-widget [contact]="true"></addresses-widget>
            <tasks-widget [mode]="mode"></tasks-widget>
            <documents-widget [mode]="mode"></documents-widget>
        </div>
        
    </div>
    `
})
export class ContactsDetailContainer implements OnInit, OnDestroy {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    sub: any;
    id: string;
    mode: string = "contacts";
    editContact$: Observable<Contact>;

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        console.log('contact container out');
        
    } 

    ngOnInit() {

        this.sub = this.route.params
        .takeUntil(this.ngUnsubscribe)
        .subscribe(params => {
            this.id = params['id']; 
            this.editContact$ = this.sb.isAuthenticated$
                .take(1)
                .filter(isAuthenticated => isAuthenticated) // only when authenticated
                .flatMap(() => {
                    return this.sb.fetchContact(this.id).take(1);
                }).publishReplay().refCount();
        });
    }
    

    constructor(private sb: ContactsSandbox,
                private route: ActivatedRoute,
                private router: Router) {
        
    }

    pubId() {
        console.log(this.id);
    }

    onSave(contact: Contact): void {
        this.sb.updateContact(this.id, contact);
    }

    onRemove(contact: Contact): void {
        this.sb.removeContact(contact);
        
    }
}