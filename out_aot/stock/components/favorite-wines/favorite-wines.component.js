var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from "@angular/core";
export let FavoriteWinesComponent = class FavoriteWinesComponent {
    constructor() {
        this.setStock = new EventEmitter();
    }
    onSetStock(wine, value) {
        this.setStock.emit({ wine, value });
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], FavoriteWinesComponent.prototype, "wines", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], FavoriteWinesComponent.prototype, "setStock", void 0);
FavoriteWinesComponent = __decorate([
    Component({
        selector: "favorite-wines",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `    
    <div>
        <h2><i class="fa fa-star"></i>&nbsp;Favorites</h2>
        <table class="table table-striped">
            <tbody>
            <tr *ngFor="let wine of wines">
                <td style="min-width:70px;">
                    <number-picker [amount]="wine.inStock" (setAmount)="onSetStock(wine, $event)"></number-picker>
                </td>
                <td style="max-width: 200px;">{{wine.name}}</td>
                <td>{{wine.myRating}}/5</td>
            </tr>
            </tbody>
        </table>
    </div>
        `
    }), 
    __metadata('design:paramtypes', [])
], FavoriteWinesComponent);
//# sourceMappingURL=favorite-wines.component.js.map