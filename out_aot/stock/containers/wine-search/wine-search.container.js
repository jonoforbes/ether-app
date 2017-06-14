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
import { StockSandbox } from "../../stock.sandbox";
export let WineSearchContainer = class WineSearchContainer {
    constructor(sb) {
        this.sb = sb;
        this.selectWine = new EventEmitter();
        this.winesToShow$ = new BehaviorSubject([]);
        this.subscriptions = [];
    }
    onSelectWine(wine) {
        this.foundWineName = wine.name;
        this.selectWine.emit(wine);
        this.winesToShow$.next([]);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    ngOnInit() {
        let subscription = this.control.valueChanges
            .do((value) => {
            if (value.length < 3) {
                this.winesToShow$.next([]);
            }
        })
            .debounceTime(300)
            .distinctUntilChanged()
            .filter(value => value.length > 2 && value !== this.foundWineName)
            .switchMap(value => this.sb.search(value))
            .map((res) => res.products.list)
            .subscribe((wines) => {
            this.winesToShow$.next(wines);
        });
        this.subscriptions.push(subscription);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', FormControl)
], WineSearchContainer.prototype, "control", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], WineSearchContainer.prototype, "selectWine", void 0);
WineSearchContainer = __decorate([
    Component({
        selector: "wine-search",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <div class="form-group has-feedback" [class.has-success]="control.valid">
            <label for="searchInput" class="col-sm-4 control-label">
                Name (*)
            </label>
            <div class="col-sm-8">
                <input type="text" [formControl]="control" class="form-control input-lg" id="searchInput" 
                    autocomplete="off" placeholder="Name"/>
                <span *ngIf="control.valid" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                <ul class="wine-search-results">
                    <li *ngFor="let item of winesToShow$|async" (click)="onSelectWine(item)">
                        <img src="{{item.labels[0].url}}" alt=""/> {{item.name}} 
                    </li>
                </ul>
            </div>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [StockSandbox])
], WineSearchContainer);
//# sourceMappingURL=wine-search.container.js.map