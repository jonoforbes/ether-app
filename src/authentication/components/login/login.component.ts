import {Component, Output, EventEmitter, Input} from "@angular/core";
import {Credentials} from "../../types/Credentials";
import {FormBuilder, Validators} from "@angular/forms";
@Component({
    selector: "login",
    template: `
        <form [formGroup]="loginForm" fxLayout="column" fxLayoutAlign="start center">
            <h2>Templar EIS Adviser Login</h2>
            <md-input-container align="center" fxFlexAlign="center" fxLayout="row">
                <input type="email" mdInput formControlName="login" placeholder="Enter Login">
            </md-input-container>
            <md-input-container fxFlexAlign="center" fxLayout="row">
                <input type="password" mdInput formControlName="password" placeholder="Enter Password">
            </md-input-container>
            <button class="login-button" md-button type="submit" [disabled]="!loginForm.valid || isBusy" (click)="onSubmit()">
            <p>Sign in</p>
        </button>
        </form>
        
`
})
export class LoginComponent {
    @Output() authenticate = new EventEmitter<Credentials>();
    @Input() isBusy: boolean;

    loginForm = this.formBuilder.group({
        login: ["", Validators.required],
        password: ["", Validators.required]
    });

    constructor(private formBuilder: FormBuilder) {
    }

    onSubmit(): void {
        this.authenticate.emit(this.loginForm.value);
    }
}