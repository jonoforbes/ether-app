var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { ContactsSandbox } from "../../contacts.sandbox";
export let ContactsIntermediateWidgetContainer = class ContactsIntermediateWidgetContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.xLiabilityOwnerType = "Joint";
        this.xLiabilityContactId = "";
        this.xLiabilityHeader = "Joint";
        this.xAssetOwnerType = "Joint";
        this.xAssetContactId = "";
        this.xAssetHeader = "Joint";
        this.xProtectionOwnerType = "Joint";
        this.xProtectionContactId = "";
        this.xProtectionHeader = "Joint";
        this.xPensionOwnerType = "Joint";
        this.xPensionContactId = "";
        this.xPensionHeader = "Joint";
        this.bankAccountOwnerType = "Joint";
        this.bankAccountContactId = "";
        this.bankAccountHeader = "Joint";
        this.ngUnsubscribe = new Subject();
    }
    selectLiabilityOwner(ownerType, contactId, header) {
        this.xLiabilityOwnerType = ownerType;
        this.xLiabilityContactId = contactId;
        this.xLiabilityHeader = header;
    }
    selectAssetOwner(ownerType, contactId, header) {
        this.xAssetOwnerType = ownerType;
        this.xAssetContactId = contactId;
        this.xAssetHeader = header;
    }
    selectProtectionOwner(ownerType, contactId, header) {
        this.xProtectionContactId = contactId;
        this.xProtectionOwnerType = ownerType;
        this.xProtectionHeader = header;
    }
    selectPensionOwner(ownerType, contactId, header) {
        this.xPensionContactId = contactId;
        this.xPensionOwnerType = ownerType;
        this.xPensionHeader = header;
    }
    selectBankAccountOwner(ownerType, contactId, header) {
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
    }
    refreshContacts() {
        const params$ = this.route.params.take(1);
        this.contacts$ = params$
            .take(1)
            .switchMap((params) => this.sb.fetchContactsByAccount(params['id']).take(1));
    }
    onUpdateContact(contact) {
        this.sb.updateContact(contact._id, contact);
    }
};
ContactsIntermediateWidgetContainer = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [ContactsSandbox, ActivatedRoute, Router])
], ContactsIntermediateWidgetContainer);
//# sourceMappingURL=contacts-intermediate-widget.container.js.map