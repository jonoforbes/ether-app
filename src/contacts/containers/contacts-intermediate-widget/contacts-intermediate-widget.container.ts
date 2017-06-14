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
    selector: "contacts-intermediate-widget",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <accordion class="widget-accordion" [closeOthers]="false" [showArrows]="true">

    <accordion-group class="widget-accordion" [isOpened]="true">
            <accordion-heading class="widget-accordion">
                <h2 class="widget widget-head">Bank Accounts - {{bankAccountHeader}}</h2>
            </accordion-heading>
    <div fxLayout="row" style="margin-left: 18px">
        <div fxLayout="column" fxFlex="578px">
        <bank-accounts-widget [bankAccountOwnerType]="bankAccountOwnerType" [bankAccountContactId]="bankAccountContactId"></bank-accounts-widget>
        
        </div>
        <div fxLayout="column" fxFlex fxLayoutAlign="start end">

          <button md-button (click)="selectBankAccountOwner('Joint', '', 'Joint')" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">chevron_left</md-icon><p style="margin: 4px 10px 4px 10px;">Joint Accounts</p>
            </div>
          </button>
          <button *ngFor="let item of this.contacts$|async" (click)="selectBankAccountOwner('Personal', item._id, item.firstName)" md-button style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">chevron_left</md-icon>
            <p style="margin: 4px 10px 4px 10px;">{{item.firstName}}'s Accounts</p>
            </div>
          </button>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">save</md-icon><p style="margin: 4px 10px 4px 10px;">Press Enter To Save</p>
            </div>
          </button>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">message</md-icon><p style="margin: 4px 10px 4px 10px;">Comments (0)</p>
            </div>
          </button>
        </div>
    </div>
    </accordion-group>

        <accordion-group class="widget-accordion" [isOpened]="true">
            <accordion-heading class="widget-accordion">
                <h2 class="widget widget-head">Existing Liabilities - {{xLiabilityHeader}}</h2>
            </accordion-heading>
    <div fxLayout="row" style="margin-left: 18px">
        <div fxLayout="column" fxFlex="578px">
        <xliabilities-widget [xLiabilityOwnerType]="xLiabilityOwnerType" [xLiabilityContactId]="xLiabilityContactId"></xliabilities-widget>
        
        </div>
        <div fxLayout="column" fxFlex fxLayoutAlign="start end">

          <button md-button (click)="selectLiabilityOwner('Joint', '', 'Joint')" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">chevron_left</md-icon><p style="margin: 4px 10px 4px 10px;">Joint Liabilities</p>
            </div>
          </button>
          <button *ngFor="let item of this.contacts$|async" (click)="selectLiabilityOwner('Personal', item._id, item.firstName)" md-button style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">chevron_left</md-icon>
            <p style="margin: 4px 10px 4px 10px;">{{item.firstName}} {{item.lastName}}</p>
            </div>
          </button>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">save</md-icon><p style="margin: 4px 10px 4px 10px;">Press Enter To Save</p>
            </div>
          </button>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">message</md-icon><p style="margin: 4px 10px 4px 10px;">Comments (0)</p>
            </div>
          </button>
        </div>
    </div>
    </accordion-group>
          
        <accordion-group class="widget-accordion" [isOpened]="true">
            <accordion-heading class="widget-accordion">
                <h2 class="widget widget-head">Existing Assets - {{xAssetHeader}}</h2>
            </accordion-heading>
    <div fxLayout="row" style="margin-left: 18px">
        <div fxLayout="column" fxFlex="578px">
        <xassets-widget [xAssetOwnerType]="xAssetOwnerType" [xAssetContactId]="xAssetContactId"></xassets-widget>
        
        </div>
        <div fxLayout="column" fxFlex fxLayoutAlign="start end">

          <button md-button (click)="selectAssetOwner('Joint', '', 'Joint')" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">chevron_left</md-icon><p style="margin: 4px 10px 4px 10px;">Joint Assets</p>
            </div>
          </button>
          <button *ngFor="let item of this.contacts$|async" (click)="selectAssetOwner('Personal', item._id, item.firstName)" md-button style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">chevron_left</md-icon>
            <p style="margin: 4px 10px 4px 10px;">{{item.firstName}}'s Assets</p>
            </div>
          </button>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">save</md-icon><p style="margin: 4px 10px 4px 10px;">Press Enter To Save</p>
            </div>
          </button>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">message</md-icon><p style="margin: 4px 10px 4px 10px;">Comments (0)</p>
            </div>
          </button>
        </div>
    </div>
    </accordion-group>

    <accordion-group class="widget-accordion" [isOpened]="true">
            <accordion-heading class="widget-accordion">
                <h2 class="widget widget-head">Existing Protections - {{xProtectionHeader}}</h2>
            </accordion-heading>
    <div fxLayout="row" style="margin-left: 18px">
        <div fxLayout="column" fxFlex="578px">
        <xprotections-widget [xProtectionOwnerType]="xProtectionOwnerType" [xProtectionContactId]="xProtectionContactId"></xprotections-widget>
        
        </div>
        <div fxLayout="column" fxFlex fxLayoutAlign="start end">

          <button md-button (click)="selectProtectionOwner('Joint', '', 'Joint')" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">chevron_left</md-icon><p style="margin: 4px 10px 4px 10px;">Joint Protections</p>
            </div>
          </button>
          <button *ngFor="let item of this.contacts$|async" (click)="selectProtectionOwner('Personal', item._id, item.firstName)" md-button style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">chevron_left</md-icon>
            <p style="margin: 4px 10px 4px 10px;">{{item.firstName}}'s Protections</p>
            </div>
          </button>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">save</md-icon><p style="margin: 4px 10px 4px 10px;">Press Enter To Save</p>
            </div>
          </button>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">message</md-icon><p style="margin: 4px 10px 4px 10px;">Comments (0)</p>
            </div>
          </button>
        </div>
    </div>
    </accordion-group>

    <accordion-group class="widget-accordion" [isOpened]="true">
            <accordion-heading class="widget-accordion">
                <h2 class="widget widget-head">Existing Pensions - {{xPensionHeader}}</h2>
            </accordion-heading>
    <div fxLayout="row" style="margin-left: 18px">
        <div fxLayout="column" fxFlex="578px">
        <xpensions-widget [xPensionOwnerType]="xPensionOwnerType" [xPensionContactId]="xPensionContactId"></xpensions-widget>
        
        </div>
        <div fxLayout="column" fxFlex fxLayoutAlign="start end">

          <button md-button (click)="selectPensionOwner('Joint', '', 'Joint')" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">chevron_left</md-icon><p style="margin: 4px 10px 4px 10px;">Joint Pensions</p>
            </div>
          </button>
          <button *ngFor="let item of this.contacts$|async" (click)="selectPensionOwner('Personal', item._id, item.firstName)" md-button style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">chevron_left</md-icon>
            <p style="margin: 4px 10px 4px 10px;">{{item.firstName}}'s Pensions</p>
            </div>
          </button>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">save</md-icon><p style="margin: 4px 10px 4px 10px;">Press Enter To Save</p>
            </div>
          </button>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">message</md-icon><p style="margin: 4px 10px 4px 10px;">Comments (0)</p>
            </div>
          </button>
        </div>
    </div>
    </accordion-group>
    </accordion>

    
    
    
    `
})
export class ContactsIntermediateWidgetContainer implements OnInit {
    xLiabilityOwnerType: string = "Joint";
    xLiabilityContactId: string = "";
    xLiabilityHeader: string = "Joint";

    xAssetOwnerType: string = "Joint";
    xAssetContactId: string = "";
    xAssetHeader: string = "Joint";

    xProtectionOwnerType: string = "Joint";
    xProtectionContactId: string = "";
    xProtectionHeader: string = "Joint";

    xPensionOwnerType: string = "Joint";
    xPensionContactId: string = "";
    xPensionHeader: string = "Joint";

    bankAccountOwnerType: string = "Joint";
    bankAccountContactId: string = "";
    bankAccountHeader: string = "Joint";
    
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    contacts$: Observable<Array<Contact>>;

    constructor(private sb: ContactsSandbox,
                private route: ActivatedRoute,
                private router: Router) {

    }

    selectLiabilityOwner(ownerType: string, contactId: string, header: string) {
        this.xLiabilityOwnerType = ownerType;
        this.xLiabilityContactId = contactId;
        this.xLiabilityHeader = header;
    }

    selectAssetOwner(ownerType: string, contactId: string, header: string) {
        this.xAssetOwnerType = ownerType;
        this.xAssetContactId = contactId;
        this.xAssetHeader = header;
    }

    selectProtectionOwner(ownerType: string, contactId: string, header: string) {
        this.xProtectionContactId = contactId;
        this.xProtectionOwnerType = ownerType;
        this.xProtectionHeader = header;
    }

    selectPensionOwner(ownerType: string, contactId: string, header: string) {
        this.xPensionContactId = contactId;
        this.xPensionOwnerType = ownerType;
        this.xPensionHeader = header;
    }

    selectBankAccountOwner(ownerType: string, contactId: string, header: string) {
      this.bankAccountContactId = contactId;
      this.bankAccountOwnerType = ownerType;
      this.bankAccountHeader = header;
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    ngOnInit() {
        this.refreshContacts();
        //console.log('contacts', this.contacts$);
    }

    refreshContacts() {
        const params$ = this.route.params.take(1);
        this.contacts$ = params$
            .take(1)
            .switchMap((params: Params) => this.sb.fetchContactsByAccount(params['id']).take(1));
    }

    onUpdateContact(contact: Contact): void {
        this.sb.updateContact(contact._id, contact);
    }


}