var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { Address } from "../../entities/Address";
import { FormBuilder, Validators } from "@angular/forms";
export let AddAddressTabComponent = class AddAddressTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.address = new Address();
        this.contact = false;
        this.onSave = new EventEmitter();
        this.addressTypes = [
            'Money Purchase',
            'Defined Benefits'
        ];
    }
    ngOnInit() {
        this.addressForm = this.formBuilder.group({
            formattedName: [this.address.formattedName],
            addressType: [this.address.addressType],
            addressSince: [this.address.addressSince],
            primaryAddress: [this.address.primaryAddress],
            houseNumber: [this.address.houseNumber, Validators.required],
            streetName: [this.address.streetName, Validators.required],
            city: [this.address.city, Validators.required],
            postCode: [this.address.postCode, Validators.required],
            country: [this.address.country, Validators.required],
            latitude: [this.address.latitude],
            longitude: [this.address.longitude]
        });
    }
    onSubmit() {
        console.log('contact?', this.contact);
        if (this.contact) {
            console.log('contact!');
            this.address.contactId = this.id;
            this.onSave.emit(Object.assign(this.address, this.addressForm.value));
        }
        else {
            console.log('account!');
            this.address.accountId = this.id;
            this.onSave.emit(Object.assign(this.address, this.addressForm.value));
        }
    }
    onSelectAddress(address) {
        var houseNumber = "";
        var streetName = "";
        var city = "";
        var postCode = "";
        var country = "";
        var houseNumberComponent = address.address_components.filter((addressComponent) => {
            return addressComponent.types.find((type) => {
                return type === "street_number";
            });
        });
        var streetNameComponent = address.address_components.filter((addressComponent) => {
            return addressComponent.types.find((type) => {
                return type === "route";
            });
        });
        var cityComponent = address.address_components.filter((addressComponent) => {
            return addressComponent.types.find((type) => {
                return type === "locality" || type === "postal_town";
            });
        });
        var postCodeComponent = address.address_components.filter((addressComponent) => {
            return addressComponent.types.find((type) => {
                return type === "postal_code";
            });
        });
        var countryComponent = address.address_components.filter((addressComponent) => {
            return addressComponent.types.find((type) => {
                return type === "country";
            });
        });
        if (houseNumberComponent) {
            houseNumber = houseNumberComponent.long_name;
        }
        ;
        if (streetNameComponent) {
            streetName = streetNameComponent.long_name;
        }
        ;
        if (cityComponent) {
            city = cityComponent.long_name;
        }
        ;
        if (postCodeComponent) {
            postCode = postCodeComponent.long_name;
        }
        ;
        if (countryComponent) {
            country = countryComponent.long_name;
        }
        ;
        console.log('house number', houseNumber);
        console.log('street name', streetName);
        console.log('city', city);
        console.log('post code', postCode);
        console.log('country', country);
        console.log(address);
        console.log(this.addressForm);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], AddAddressTabComponent.prototype, "address", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], AddAddressTabComponent.prototype, "id", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], AddAddressTabComponent.prototype, "contact", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], AddAddressTabComponent.prototype, "onSave", void 0);
AddAddressTabComponent = __decorate([
    Component({
        selector: "add-address-tab",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <div class="mapContainer">
                <form [formGroup]="addressForm" (ngSubmit)="onSubmit()">
                <div class="mapDetail" style="margin-top: 0px;">

                    
                        <md-input-container>
                            <input mdInput placeholder="Address Type" [mdAutocomplete]="addressTypeSelect" formControlName="addressType">
                        </md-input-container>
                        <md-autocomplete #addressTypeSelect="mdAutocomplete">
                            <md-option style="overflow: hidden !important" *ngFor="let type of addressTypes" [value]="type">
                                {{ type }}
                            </md-option>
                        </md-autocomplete>
                        <md-input-container>
                            <input mdInput placeholder="House Number" formControlName="houseNumber">
                        </md-input-container>

                        <md-input-container>
                            <input mdInput placeholder="Street Name" formControlName="streetName">
                        </md-input-container>

                        <md-input-container>
                            <input mdInput placeholder="City/Town" formControlName="city">
                        </md-input-container>

                        <md-input-container>
                            <input mdInput placeholder="Postcode" formControlName="postCode">
                        </md-input-container>

                        <md-input-container>
                            <input mdInput placeholder="Country" formControlName="country">
                        </md-input-container>
                    
                </div>

                
                <div class="mapImage">
                    <addresses-search [control]="addressForm.controls['formattedName']" (selectAddress)="onSelectAddress($event)"></addresses-search>
                </div>
                </form>
             </div>
    
    `
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], AddAddressTabComponent);
//# sourceMappingURL=add-address-tab.component.js.map