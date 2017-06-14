import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Address } from "../../entities/Address";
import { GoogleMapsResult } from "../../services/googlemaps.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AddressesSearchComponent } from "../addresses-search/addresses-search.component";

@Component({
    selector: "add-address-tab",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="mapContainer">
                <form [formGroup]="addressForm" (ngSubmit)="onSubmit()">
                <div class="mapDetail" style="margin-top: 0px;">

                    <button type="submit" [disabled]="!addressForm.valid" md-button class="mapButton">
                        <p>SAVE ADDRESS</p>
                    </button>

                    
                        
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

    addressForm: FormGroup;

    ngOnInit(): void {
        this.addressForm = this.formBuilder.group({
            formattedName: [this.address.formattedName],
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
        this.addressForm.setValue({
            formattedName: address.formatted_address,
            houseNumber: address.address_components[0].long_name,
            streetName: address.address_components[1].long_name,
            city: address.address_components[2].long_name,
            postCode: address.address_components[6].long_name,
            country: address.address_components[5].long_name,
            latitude: address.geometry.location.lat,
            longitude: address.geometry.location.lng
        });
        console.log(address);
        console.log(this.addressForm);
    }
}