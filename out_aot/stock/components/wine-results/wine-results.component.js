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
export let WineResultsComponent = class WineResultsComponent {
    constructor() {
        this.remove = new EventEmitter();
        this.setRate = new EventEmitter();
        this.setStock = new EventEmitter();
    }
    onSetRate(wine, value) {
        this.setRate.emit({ wine, value });
    }
    onSetStock(wine, value) {
        this.setStock.emit({ wine, value });
    }
    onRemove(wine) {
        this.remove.emit(wine);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], WineResultsComponent.prototype, "wines", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], WineResultsComponent.prototype, "remove", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], WineResultsComponent.prototype, "setRate", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], WineResultsComponent.prototype, "setStock", void 0);
WineResultsComponent = __decorate([
    Component({
        selector: "wine-results",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Region</th>
                    <th>In stock</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let wine of wines" [wineResult]="wine" 
                    (setStock)="onSetStock(wine, $event)" (setRate)="onSetRate(wine, $event)" (remove)="onRemove(wine)">
                </tr>
                <tr *ngIf="wines && wines.length === 0">
                    <td colspan="7">You haven't added any wines yet</td>
                </tr>
            </tbody>
        </table>
    `
    }), 
    __metadata('design:paramtypes', [])
], WineResultsComponent);
//# sourceMappingURL=wine-results.component.js.map