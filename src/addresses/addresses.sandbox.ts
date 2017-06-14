import { AddressesService } from "./services/addresses.service";
import { Injectable, OnDestroy } from "@angular/core";
import { GoogleMapsSearchResult, GoogleMapsService } from "./services/googlemaps.service";
import { Address } from "./entities/Address";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddAddress, RemoveAddress, UpdateAddress } from "../statemanagement/actions/data/address";

@Injectable() 
export class AddressesSandbox implements OnDestroy {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    addresses$ = this.store.select(state => state.data.addresses);
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);

    constructor(private store: Store<ApplicationState>,
                private addressesService: AddressesService,
                private googleMapsService: GoogleMapsService) {

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }


    addAddress(address: Address): void {
        this.addressesService.add(address)
        .take(1)
        .subscribe((address: Address) => {
            this.store.dispatch(new AddAddress(address));
        }, () => this.handleError());
    }

    fetchAddress(id: string): Observable<Address> {
        return this.addresses$
        .take(1)
        .switchMap((addresses: Address[]) => {
            return addresses.filter((address: Address) => {
                return address._id == id;
            });
        });
    }

    fetchAddressesByContact(id: string): Observable<Array<Address>> {
        return this.addresses$
        .take(2)
        .map((addresses: any) => {
            return addresses.filter((address: Address) => {
                return address.contactId == id;
            });
        });
    }

    fetchAddressesByAccount(id: string): Observable<Array<Address>> {
        return this.addresses$
        .take(2)
        .map((addresses: any) => {
            return addresses.filter((address: Address) => {
                return address.accountId == id;
            });
        });
    }

    search(term: string): Observable<GoogleMapsSearchResult> {
        return this.googleMapsService.search(term);
    }

    private handleError(action?: Action): void {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({type: UNDO_ACTION, payload: action});
        }
    }

}