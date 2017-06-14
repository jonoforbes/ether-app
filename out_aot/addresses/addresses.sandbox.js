var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AddressesService } from "./services/addresses.service";
import { Injectable } from "@angular/core";
import { GoogleMapsService } from "./services/googlemaps.service";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddAddress } from "../statemanagement/actions/data/address";
export let AddressesSandbox = class AddressesSandbox {
    constructor(store, addressesService, googleMapsService) {
        this.store = store;
        this.addressesService = addressesService;
        this.googleMapsService = googleMapsService;
        this.ngUnsubscribe = new Subject();
        this.addresses$ = this.store.select(state => state.data.addresses);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
        this.isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addAddress(address) {
        this.addressesService.add(address)
            .take(1)
            .subscribe((address) => {
            this.store.dispatch(new AddAddress(address));
        }, () => this.handleError());
    }
    fetchAddress(id) {
        return this.addresses$
            .take(1)
            .switchMap((addresses) => {
            return addresses.filter((address) => {
                return address._id == id;
            });
        });
    }
    fetchAddressesByContact(id) {
        return this.addresses$
            .take(2)
            .map((addresses) => {
            return addresses.filter((address) => {
                return address.contactId == id;
            });
        });
    }
    fetchAddressesByAccount(id) {
        return this.addresses$
            .take(2)
            .map((addresses) => {
            return addresses.filter((address) => {
                return address.accountId == id;
            });
        });
    }
    search(term) {
        return this.googleMapsService.search(term);
    }
    handleError(action) {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({ type: UNDO_ACTION, payload: action });
        }
    }
};
AddressesSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, AddressesService, GoogleMapsService])
], AddressesSandbox);
//# sourceMappingURL=addresses.sandbox.js.map