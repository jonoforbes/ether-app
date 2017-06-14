var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Component, ChangeDetectionStrategy } from "@angular/core";
export let FormGroupContent = class FormGroupContent {
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], FormGroupContent.prototype, "label", void 0);
FormGroupContent = __decorate([
    Component({
        selector: "form-group-content",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <div class="form-group has-feedback">
            <label class="col-sm-4 control-label">{{label}}</label>
            <div class="col-sm-8">
                <ng-content></ng-content>
            </div>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [])
], FormGroupContent);
//# sourceMappingURL=form-group-content.component.js.map