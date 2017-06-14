var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthenticationService } from "./services/authentication.service";
import { AuthenticationSandbox } from "./authentication.sandbox";
import { RegisterContainer } from "./containers/register/register.container";
import { AuthenticationContainer } from "./containers/authentication/authentication.container";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { CommonLogicModule } from "../common/index";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
export let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    NgModule({
        imports: [FlexLayoutModule, FormsModule, ReactiveFormsModule, RouterModule, CommonModule, HttpModule, CommonLogicModule, MaterialModule],
        declarations: [AuthenticationContainer, RegisterContainer, LoginComponent, RegisterComponent],
        exports: [AuthenticationContainer, RegisterContainer],
        providers: [AuthenticationService, AuthenticationSandbox]
    }), 
    __metadata('design:paramtypes', [])
], AuthenticationModule);
//# sourceMappingURL=index.js.map