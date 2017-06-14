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
export let NumberPickerComponent = class NumberPickerComponent {
    constructor() {
        this.setAmount = new EventEmitter();
    }
    up() {
        this.setAmount.emit(this.amount + 1);
    }
    down() {
        this.setAmount.emit(this.amount - 1);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Number)
], NumberPickerComponent.prototype, "amount", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NumberPickerComponent.prototype, "setAmount", void 0);
NumberPickerComponent = __decorate([
    Component({
        selector: "number-picker",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <button type="button" class="btn btn-primary btn-sm" (click)="down()" [disabled]="amount === 0">
           <i class="fa fa-chevron-down"></i>
        </button>
       <span class="amount">{{amount}}</span>
        <button type="button" class="btn btn-primary btn-sm" (click)="up()">
            <i class="fa fa-chevron-up"></i>
        </button>
    `
    }), 
    __metadata('design:paramtypes', [])
], NumberPickerComponent);
//# sourceMappingURL=number-picker.component.js.map