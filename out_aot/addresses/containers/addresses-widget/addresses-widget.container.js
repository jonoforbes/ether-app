var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { AddressesSandbox } from "../../addresses.sandbox";
export let AddressesWidgetContainer = class AddressesWidgetContainer {
    constructor(sb, route) {
        this.sb = sb;
        this.route = route;
        this.ngUnsubscribe = new Subject();
        this.contact = false;
    }
    ngOnDetroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    ngOnInit() {
        this.refreshAddresses();
        this.route.params
            .take(1)
            .subscribe((params) => {
            this.id$ = params['id'];
        });
        console.log('addresses', this.addresses$);
    }
    refreshAddresses() {
        if (!this.contact) {
            console.log('i know we talking accounts');
            const params$ = this.route.params.take(1);
            this.addresses$ = params$
                .take(1)
                .switchMap((params) => this.sb.fetchAddressesByAccount(params['id']));
        }
        else {
            const params$ = this.route.params.take(1);
            this.addresses$ = params$
                .take(1)
                .switchMap((params) => this.sb.fetchAddressesByContact(params['id']));
        }
    }
    onSave(address) {
        this.sb.addAddress(address);
        this.refreshAddresses();
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], AddressesWidgetContainer.prototype, "contact", void 0);
AddressesWidgetContainer = __decorate([
    Component({
        selector: "addresses-widget",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <accordion class="widget-accordion" [closeOthers]="false" [showArrows]="true">
          
        <accordion-group class="widget-accordion" [isOpened]="true">
            <accordion-heading class="widget-accordion">
                <h2 class="widget widget-head">Addresses</h2>
            </accordion-heading>

            <md-tab-group class="widget" [selectedIndex]="1">
                <md-tab label="+">
                    <add-address-tab [contact]="contact" [id]="this.id$" (onSave)="onSave($event)"></add-address-tab>
                </md-tab>
                <md-tab *ngFor="let item of this.addresses$|async" label="{{item.formattedName}}">
                    <address-tab [address]="item" (onSave)="onSave($event)"></address-tab>
                </md-tab>
                
            </md-tab-group>
        </accordion-group>
    </accordion>
    
    
    
    `
    }), 
    __metadata('design:paramtypes', [AddressesSandbox, ActivatedRoute])
], AddressesWidgetContainer);
//# sourceMappingURL=addresses-widget.container.js.map