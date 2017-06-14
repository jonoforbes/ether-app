var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormControl } from "@angular/forms";
import { AddressesSandbox } from "../../addresses.sandbox";
export let AddressesSearchComponent = class AddressesSearchComponent {
    constructor(sb) {
        this.sb = sb;
        this.selectAddress = new EventEmitter();
        this.addressesToShow$ = new BehaviorSubject([]);
        this.subscriptions = [];
    }
    onSelectAddress(address) {
        this.foundAddressName = address.formatted_address;
        this.selectAddress.emit(address);
        this.addressesToShow$.next([]);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    ngOnInit() {
        let subscription = this.control.valueChanges
            .do((value) => {
            if (value.length < 3) {
                this.addressesToShow$.next([]);
            }
        })
            .debounceTime(300)
            .distinctUntilChanged()
            .filter(value => value.length > 2 && value !== this.foundAddressName)
            .switchMap(value => this.sb.search(value))
            .map((res) => res.results)
            .subscribe((addresses) => {
            this.addressesToShow$.next(addresses);
        });
        this.subscriptions.push(subscription);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', FormControl)
], AddressesSearchComponent.prototype, "control", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], AddressesSearchComponent.prototype, "selectAddress", void 0);
AddressesSearchComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [AddressesSandbox])
], AddressesSearchComponent);
//# sourceMappingURL=addresses-search.component.js.map