var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { error } from "toastr";
export let RegisterComponent = class RegisterComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.authenticate = new EventEmitter();
        this.registerForm = this.formBuilder.group({
            firstName: ["", Validators.required],
            lastName: ["", Validators.required],
            login: ["", Validators.required],
            organization: ["", Validators.required],
            password: ["", Validators.required],
            confirmPassword: ["", Validators.required],
            role: ["", Validators.required],
            boxUserId: ""
        });
    }
    onSubmit() {
        if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
            error("Passwords don't match");
        }
        else {
            this.authenticate.emit(this.registerForm.value);
        }
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], RegisterComponent.prototype, "authenticate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], RegisterComponent.prototype, "isBusy", void 0);
RegisterComponent = __decorate([
    Component({
        selector: "register",
        template: `
        <div class="form-horizontal">
            <form-group-textbox [label]="'First name (*)'" [control]="registerForm.controls['firstName']" 
                [placeholder]="'Enter first name'">
            </form-group-textbox>
            <form-group-textbox [label]="'Last name (*)'"  [control]="registerForm.controls['lastName']" 
                [placeholder]="'Enter last name'">
            </form-group-textbox>
            <form-group-textbox [label]="'Login (*)'" [control]="registerForm.controls['login']" 
                [placeholder]="'Enter login'">
            </form-group-textbox>
            <form-group-password [label]="'Password (*)'" [control]="registerForm.controls['password']" 
                [placeholder]="'Enter password'">
            </form-group-password>
            <form-group-password [label]="'Confirm password (*)'" [control]="registerForm.controls['confirmPassword']" 
                [placeholder]="'Confirm your password'">
            </form-group-password>
            <form-group-textbox [label]="'Organization (*)'" [control]="registerForm.controls['organization']" 
                [placeholder]="'Organization'">
            </form-group-textbox>
            <form-group-textbox [label]="'Role (*)'" [control]="registerForm.controls['role']" 
                [placeholder]="'Role'">
            </form-group-textbox>
            <form-group-footer>
                <button type="submit" [disabled]="!registerForm.valid || isBusy" 
                    class="btn btn-primary btn-block btn-lg" (click)="onSubmit()">
                    <i class="fa fa-user"></i>&nbsp;Sign up
                </button>
            </form-group-footer>
        </div>
       `
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], RegisterComponent);
//# sourceMappingURL=register.component.js.map