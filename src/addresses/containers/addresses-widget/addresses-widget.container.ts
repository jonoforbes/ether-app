import { Component, Input, ChangeDetectionStrategy, Output, OnInit } from "@angular/core";
import { Address } from "../../entities/Address";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { AddressesSandbox } from "../../addresses.sandbox";
import { AddressTabComponent } from "../../components/address-tab/address-tab.component";
import { AddAddressTabComponent } from "../../components/add-address-tab/add-address-tab.component";

@Component({
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
})
export class AddressesWidgetContainer implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    @Input() contact: Boolean = false;
    addresses$: Observable<Array<Address>>;
    id$: Observable<String>;

    constructor(private sb: AddressesSandbox,
                private route: ActivatedRoute) {

    }

    ngOnDetroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    ngOnInit() {

        this.refreshAddresses();

        this.route.params
        .take(1)
        .subscribe((params: Params) => {
            

            this.id$ = params['id'];
            
        });
        console.log('addresses', this.addresses$);
    }

    refreshAddresses() {
        if (!this.contact) {
        console.log('i know we talking accounts')
        const params$ = this.route.params.take(1);
        this.addresses$ = params$
        .take(1)
        .switchMap((params: Params) => this.sb.fetchAddressesByAccount(params['id']));

        }
        else {
        const params$ = this.route.params.take(1);
        this.addresses$ = params$
        .take(1)
        .switchMap((params: Params) => this.sb.fetchAddressesByContact(params['id']));
        }
        
    }

    onSave(address: Address): void {
        this.sb.addAddress(address);
        this.refreshAddresses();

    }



}