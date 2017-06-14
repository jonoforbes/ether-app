var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { StockSandbox } from "../../stock.sandbox";
import * as orderBy from "lodash/orderBy";
import * as sumBy from "lodash/sumBy";
export let StockPageContainer = class StockPageContainer {
    constructor(sb) {
        this.sb = sb;
        this.searchCtrl = new FormControl("");
        this.wines$ = this.sb.wines$;
        this.favoriteWines$ = this.wines$.map((wines) => wines.filter((wine) => wine.myRating > 3))
            .map(wines => orderBy(wines, ["myRating"], ["desc"]).slice(0, 5));
        this.numberOfWines$ = this.wines$.map(wines => sumBy(wines, (wine) => wine.inStock));
        this.worth$ = this.wines$.map(wines => sumBy(wines, (wine) => wine.price * wine.inStock).toFixed(2));
        this.matchingWines$ = Observable.combineLatest(this.searchCtrl.valueChanges.startWith(""), this.wines$, (term, wines) => {
            return wines.filter(wine => wine.name.toLowerCase().indexOf(term) > -1);
        });
    }
    onRemove(wine) {
        this.sb.removeWine(wine);
    }
    onSetRate(item) {
        this.sb.setRate(item.wine, item.value);
    }
    onSetStock(item) {
        this.sb.setStock(item.wine, item.value);
    }
};
StockPageContainer = __decorate([
    Component({
        selector: "stock-page",
        template: `
        <default-page>
            <collapsable-sidebar class="hidden-sm hidden-xs">
                <favorite-wines (setStock)="onSetStock($event)" [wines]="favoriteWines$ | async">
                </favorite-wines>
            </collapsable-sidebar>
            <main>
                <div class="row">
                    <div class="col-sm-8">
                        <div class="input-group">
                            <input type="text" class="form-control input-lg" [formControl]="searchCtrl"/>
                            <span class="input-group-addon"><i class="fa fa-search"></i></span>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <a  class="btn btn-primary btn-lg btn-block" [routerLink]="['/stock/add']">
                            <i class="fa fa-plus-circle"></i>&nbsp;Add
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h2>
                            <i class="fa fa-user"></i>&nbsp;My wines
                            <span class="badge badge-primary">{{numberOfWines$|async}}</span>
                            <span class="badge badge-primary">{{worth$|async}} euro</span>
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <wine-results [wines]="matchingWines$|async"
                            (remove)="onRemove($event)" 
                            (setRate)="onSetRate($event)" 
                            (setStock)="onSetStock($event)">
                        </wine-results>
                    </div>
                </div>
            </main>
        </default-page>
     `
    }), 
    __metadata('design:paramtypes', [StockSandbox])
], StockPageContainer);
//# sourceMappingURL=stock-page.container.js.map