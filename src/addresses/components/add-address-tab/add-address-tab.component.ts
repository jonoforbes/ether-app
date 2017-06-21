import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Address } from "../../entities/Address";
import { GoogleMapsResult, GoogleMapsAddressComponent } from "../../services/googlemaps.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AddressesSearchComponent } from "../addresses-search/addresses-search.component";

@Component({
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
})
export class AddAddressTabComponent implements OnInit {
    @Input() address = new Address();
    @Input() id: string;
    @Input() contact: Boolean = false;
    @Output() onSave = new EventEmitter<Address>();

    constructor(private formBuilder: FormBuilder) {

    }

    addressTypes = [
        'Money Purchase',
        'Defined Benefits'
    ];

    addressForm: FormGroup;

    ngOnInit(): void {
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

    onSubmit(): void {
        console.log('contact?', this.contact);
        if (this.contact) {
            console.log('contact!')
            this.address.contactId = this.id;
            this.onSave.emit(Object.assign(this.address, this.addressForm.value));
        }
        else {
            console.log('account!')
            this.address.accountId = this.id;
            this.onSave.emit(Object.assign(this.address, this.addressForm.value));
        }
        
    }

    onSelectAddress(address: GoogleMapsResult): void {
        var houseNumber: string = "";
        var streetName: string = "";
        var city: string = "";
        var postCode: string = "";
        var country: string = "";
        var houseNumberComponent: Array<GoogleMapsAddressComponent> = address.address_components.filter((addressComponent: GoogleMapsAddressComponent) => {
                return addressComponent.types.find((type: string) => {
                    return type === "street_number";
                });
            });
        var streetNameComponent: Array<GoogleMapsAddressComponent>  = address.address_components.filter((addressComponent: GoogleMapsAddressComponent) => {
            return addressComponent.types.find((type: string) => {
                return type === "route";
            });
        });
        var cityComponent: Array<GoogleMapsAddressComponent>  = address.address_components.filter((addressComponent: GoogleMapsAddressComponent) => {
            return addressComponent.types.find((type: string) => {
                return type === "locality" || type === "postal_town";
            });
        });
        var postCodeComponent: Array<GoogleMapsAddressComponent> = address.address_components.filter((addressComponent: GoogleMapsAddressComponent) => {
            return addressComponent.types.find((type: string) => {
                return type === "postal_code";
            });
        });
        var countryComponent: Array<GoogleMapsAddressComponent>  = address.address_components.filter((addressComponent: GoogleMapsAddressComponent) => {
            return addressComponent.types.find((type: string) => {
                return type === "country";
            });
        });
        if (houseNumberComponent.length > 0) {
            houseNumber = houseNumberComponent[0].long_name;
        };
        if (streetNameComponent.length > 0) {
            streetName = streetNameComponent[0].long_name;
        };
        if (cityComponent.length > 0) {
            city = cityComponent[0].long_name;
        };
        if (postCodeComponent.length > 0) {
            postCode = postCodeComponent[0].long_name;
        };
        if (countryComponent.length > 0) {
            country = countryComponent[0].long_name;
        };
        console.log('house number', houseNumber);
        console.log('street name', streetName);
        console.log('city', city);
        console.log('post code', postCode);
        console.log('country', country);

        this.addressForm.setValue({
            formattedName: address.formatted_address,
            houseNumber: houseNumber,
            streetName: streetName,
            city: city,
            postCode: postCode,
            country: country,
            latitude: address.geometry.location.lat,
            longitude: address.geometry.location.lng,
            addressType: this.address.addressType,
            addressSince: this.address.addressSince,
            primaryAddress: this.address.primaryAddress
        });
        // console.log(address);
        // console.log(this.addressForm);
    }
}