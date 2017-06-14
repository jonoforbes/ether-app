import { Component, ChangeDetectionStrategy, Input, Output, OnInit } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { ContactsSandbox } from "../../contacts.sandbox";

@Component({
    selector: "income-widget",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <accordion class="widget-accordion" [closeOthers]="false" [showArrows]="true">
          
          <accordion-group class="widget-accordion" [isOpened]="true">
            <accordion-heading class="widget-accordion">
                <h2 class="widget widget-head">Income</h2>
            </accordion-heading>
            <md-tab-group class="widget" [selectedIndex]="0">
                <md-tab *ngFor="let item of this.contacts$|async" label="{{item.firstName}} {{item.lastName}}">
                    <income-tab (updateContact)="onUpdateContact($event)" [contact]="item"></income-tab>
                </md-tab>      
            </md-tab-group>
          </accordion-group>
          <accordion-group class="widget-accordion" [isOpened]="true">
            <accordion-heading class="widget-accordion">
                <h2 class="widget widget-head">Expenditure</h2>
            </accordion-heading>
            <md-tab-group class="widget" [selectedIndex]="0">
                <md-tab *ngFor="let item of this.contacts$|async" label="{{item.firstName}} {{item.lastName}}">
                    <expenditure-tab (updateContact)="onUpdateContact($event)" [contact]="item"></expenditure-tab>
                </md-tab>      
            </md-tab-group>
          </accordion-group>
          <accordion-group class="widget-accordion" [isOpened]="true">
            <accordion-heading class="widget-accordion">
                <h2 class="widget widget-head">Tax</h2>
            </accordion-heading>
            <md-tab-group class="widget" [selectedIndex]="0">
                <md-tab *ngFor="let item of this.contacts$|async" label="{{item.firstName}} {{item.lastName}}">
                    <tax-tab (updateContact)="onUpdateContact($event)" [contact]="item"></tax-tab>
                </md-tab>      
            </md-tab-group>
          </accordion-group>
    </accordion>

        

    
    
    
    `
})
export class IncomeWidgetContainer implements OnInit {
    
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
        console.log('income widget removed');
    }

    ngOnInit() {
        this.refreshContacts();
        //console.log('contacts', this.contacts$);
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


}