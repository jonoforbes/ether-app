import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { GoogleMapsResult, GoogleMapsSearchResult } from "../../services/googlemaps.service";
import { FormControl } from "@angular/forms";
import { AddressesSandbox } from "../../addresses.sandbox";

@Component({
    selector: "addresses-search",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div>
            <div class="col-sm-12" >
                <input style="margin-top: 10px" type="text" [formControl]="control" class="form-control input-md" id="searchInput" 
                    autocomplete="off" placeholder="Search Google"/>
                <ul class="address-search-results">
                    <li *ngFor="let item of addressesToShow$|async" (click)="onSelectAddress(item)">
                        <h1>{{item.formatted_address}} </h1>
                    </li>
                </ul>
            </div>
        
        
        </div>
    
    `
})

export class AddressesSearchComponent implements OnDestroy, OnInit {
    @Input() control: FormControl;
    @Output() selectAddress = new EventEmitter<GoogleMapsResult>();

    addressesToShow$ = new BehaviorSubject([]);

    private foundAddressName: string;
    private subscriptions: Array<Subscription> = [];

    constructor(private sb: AddressesSandbox) {

    }

    onSelectAddress(address: GoogleMapsResult): void {
        this.foundAddressName = address.formatted_address;
        this.selectAddress.emit(address);
        this.addressesToShow$.next([]);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    ngOnInit(): void {
        let subscription = this.control.valueChanges
            .do((value: string) => {
                if (value.length < 3) {
                    this.addressesToShow$.next([]);
                }
            })
            .debounceTime(300)
            .distinctUntilChanged()
            .filter(value => value.length > 2 && value !== this.foundAddressName)
            .switchMap(value => this.sb.search(value))
            .map((res: GoogleMapsSearchResult) => res.results)
            .subscribe((addresses: Array<GoogleMapsResult>) => {
                this.addressesToShow$.next(addresses);
            });
        this.subscriptions.push(subscription);
    }


}