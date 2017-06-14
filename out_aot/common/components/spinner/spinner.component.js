var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
export let SpinnerComponent = class SpinnerComponent {
};
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], SpinnerComponent.prototype, "spin", void 0);
SpinnerComponent = __decorate([
    Component({
        selector: "spinner",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <div class="spinner" [class.active]="spin">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>`
    }), 
    __metadata('design:paramtypes', [])
], SpinnerComponent);
//# sourceMappingURL=spinner.component.js.map