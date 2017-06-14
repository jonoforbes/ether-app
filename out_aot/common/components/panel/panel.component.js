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
export let PanelComponent = class PanelComponent {
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], PanelComponent.prototype, "header", void 0);
PanelComponent = __decorate([
    Component({
        selector: "panel",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">{{header}}</h3>
            </div>
            <div class="panel-body">
                <ng-content></ng-content>
            </div>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [])
], PanelComponent);
//# sourceMappingURL=panel.component.js.map