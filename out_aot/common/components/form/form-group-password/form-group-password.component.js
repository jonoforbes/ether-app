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
import { FormControl } from "@angular/forms";
export let FormGroupPassword = class FormGroupPassword {
};
__decorate([
    Input(), 
    __metadata('design:type', FormControl)
], FormGroupPassword.prototype, "control", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], FormGroupPassword.prototype, "label", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], FormGroupPassword.prototype, "placeholder", void 0);
FormGroupPassword = __decorate([
    Component({
        selector: "form-group-password",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <div class="form-group has-feedback" [class.has-success]="control.valid">
             <label class="col-sm-4 control-label">{{label}}</label>
             <div class="col-sm-8">
                <input type="password" 
                    [formControl]="control" 
                    class="form-control input-lg" 
                    placeholder="{{placeholder}}"/>
                    <span *ngIf="control.valid" 
                    class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
            </div>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [])
], FormGroupPassword);
//# sourceMappingURL=form-group-password.component.js.map