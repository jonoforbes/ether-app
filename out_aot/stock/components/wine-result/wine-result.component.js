var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, Input, ChangeDetectionStrategy, EventEmitter } from "@angular/core";
import { Wine } from "../../entities/Wine";
export let WineResultComponent = class WineResultComponent {
    constructor() {
        this.remove = new EventEmitter();
        this.setRate = new EventEmitter();
        this.setStock = new EventEmitter();
    }
    onSetRate(value) {
        this.setRate.emit(value);
    }
    onSetStock(value) {
        this.setStock.emit(value);
    }
    onRemove() {
        this.remove.emit(null);
    }
};
__decorate([
    Input("wineResult"), 
    __metadata('design:type', Wine)
], WineResultComponent.prototype, "wine", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], WineResultComponent.prototype, "remove", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], WineResultComponent.prototype, "setRate", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], WineResultComponent.prototype, "setStock", void 0);
WineResultComponent = __decorate([
    Component({
        selector: "[wineResult]",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <td><img src="{{wine.image}}"></td>
        <td>{{wine.name}}</td>
        <td>{{wine.region}}</td>
        <td style="min-width:80px;">
            <number-picker [amount]="wine.inStock" (setAmount)="onSetStock($event)"></number-picker>
        </td>
        <td>{{wine.price}}</td>
        <td><rating [big]="true" [rating]="wine.myRating" (setRate)="onSetRate($event)"></rating></td>
        <td>
             <div class="pull-right">
                <div class="btn-group">
                    <a class="btn btn-lg btn-primary" [routerLink]="['/stock', wine._id]">
                        <i class="fa fa-pencil"></i>
                    </a>
                    <button class="btn btn-lg btn-danger" (click)="onRemove()"><i class="fa fa-trash-o"></i></button>
                </div>
            </div>
        </td>
    `
    }), 
    __metadata('design:paramtypes', [])
], WineResultComponent);
//# sourceMappingURL=wine-result.component.js.map