import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Address } from "../../entities/Address";
import { GoogleMapsResult } from "../../services/googlemaps.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AddressesSearchComponent } from "../addresses-search/addresses-search.component";
import { IDayPickerConfig } from 'ng2-date-picker/dp-day-picker/day-picker-config.model';

@Component({
    selector: "address-tab",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="mapContainer contactTabContainer">
                <form [formGroup]="addressForm" (ngSubmit)="onSubmit()">
                <div class="mapDetail" style="margin-top: 0px;">

                    <button type="submit" [disabled]="!addressForm.valid" md-button class="mapButton">
                        <p>SAVE ADDRESS</p>
                    </button>

                    
                        
                        <md-input-container>
                            <input [readonly]="true" mdInput placeholder="House Number" formControlName="houseNumber">
                        </md-input-container>

                        <md-input-container>
                            <input [readonly]="true" mdInput placeholder="Street Name" formControlName="streetName">
                        </md-input-container>

                        <md-input-container>
                            <input [readonly]="true"  mdInput placeholder="City/Town" formControlName="city">
                        </md-input-container>

                        <md-input-container>
                            <input [readonly]="true" mdInput placeholder="Postcode" formControlName="postCode">
                        </md-input-container>

                        <md-input-container>
                            <input [readonly]="true" mdInput placeholder="Country" formControlName="country">
                        </md-input-container>
                        <h2 class="day-picker-placeholder">Start Date, End Date</h2>
                        <dp-day-picker formControlName="addressSince" [config]="datePickerConfig"></dp-day-picker>
                    
                    
                </div>
                </form>
                <agm-map  class="mapImage" 
                    [latitude]="address.latitude" 
                    [longitude]="address.longitude"
                    [zoomControl]="zoomControl" 
                    [streetViewControl]="streetViewControl" 
                    [mapDraggable]="mapDraggable"
                    [zoom]="zoom">
                <agm-marker [latitude]="address.latitude" [longitude]="address.longitude"></agm-marker>
                </agm-map>
             </div>
    
    `
})
export class AddressTabComponent implements OnInit {
    @Input() address = new Address();
    @Input() id: string;
    @Output() onSave = new EventEmitter<Address>();

    constructor(private formBuilder: FormBuilder) {

    }

    mapDraggable: boolean = true;
    zoomControl: boolean = false;
    streetViewControl: boolean = false;
    zoom: number = 15;

    addressForm: FormGroup;

    datePickerConfig: IDayPickerConfig = {
        appendTo: document.body,
        showGoToCurrent: true,
        format: "DD-MM-YYYY",
        allowMultiSelect: true
    }

    ngOnInit(): void {
        this.addressForm = this.formBuilder.group({
            formattedName: [this.address.formattedName],
            houseNumber: [this.address.houseNumber, Validators.required],
            streetName: [this.address.streetName, Validators.required],
            city: [this.address.city, Validators.required],
            postCode: [this.address.postCode, Validators.required],
            country: [this.address.country, Validators.required],
            addressSince: [this.address.addressSince],
            latitude: [this.address.latitude],
            longitude: [this.address.longitude]
        });
    }

    onSubmit(): void {
        this.address.contactId = this.id;
        this.onSave.emit(Object.assign(this.address, this.addressForm.value));
    }


}