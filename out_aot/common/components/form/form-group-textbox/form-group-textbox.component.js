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
import { FormControl } from "@angular/forms";
export let FormGroupTextbox = class FormGroupTextbox {
};
__decorate([
    Input(), 
    __metadata('design:type', FormControl)
], FormGroupTextbox.prototype, "control", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], FormGroupTextbox.prototype, "label", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], FormGroupTextbox.prototype, "placeholder", void 0);
FormGroupTextbox = __decorate([
    Component({
        selector: "form-group-textbox",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <div class="form-group has-feedback" [class.has-success]="control.valid && control.dirty">
            <label class="col-sm-4 control-label">{{label}}</label>
             <div class="col-sm-8">
                <input type="text" 
                    [formControl]="control" 
                    class="form-control input-lg" 
                    placeholder="{{placeholder}}"/>
                    <span *ngIf="control.valid && control.dirty" 
                        class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
            </div>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [])
], FormGroupTextbox);
//# sourceMappingURL=form-group-textbox.component.js.map