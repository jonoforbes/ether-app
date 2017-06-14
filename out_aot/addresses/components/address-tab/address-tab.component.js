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
export let AddressTabComponent = class AddressTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.address = new Address();
        this.onSave = new EventEmitter();
        this.mapDraggable = true;
        this.zoomControl = false;
        this.streetViewControl = false;
        this.zoom = 15;
        this.datePickerConfig = {
            appendTo: document.body,
            showGoToCurrent: true,
            format: "DD-MM-YYYY",
            allowMultiSelect: true
        };
    }
    ngOnInit() {
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
    onSubmit() {
        this.address.contactId = this.id;
        this.onSave.emit(Object.assign(this.address, this.addressForm.value));
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], AddressTabComponent.prototype, "address", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], AddressTabComponent.prototype, "id", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], AddressTabComponent.prototype, "onSave", void 0);
AddressTabComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], AddressTabComponent);
//# sourceMappingURL=address-tab.component.js.map