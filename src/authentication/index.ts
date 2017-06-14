import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AuthenticationService} from "./services/authentication.service";
import {AuthenticationSandbox} from "./authentication.sandbox";
import {RegisterContainer} from "./containers/register/register.container";
import {AuthenticationContainer} from "./containers/authentication/authentication.container";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CommonLogicModule} from "../common/index";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MaterialModule} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";

@NgModule({
    imports: [FlexLayoutModule, FormsModule, ReactiveFormsModule, RouterModule, CommonModule, HttpModule, CommonLogicModule, MaterialModule],
    declarations: [AuthenticationContainer, RegisterContainer, LoginComponent, RegisterComponent],
    exports: [AuthenticationContainer, RegisterContainer],
    providers: [AuthenticationService, AuthenticationSandbox]
})
export class AuthenticationModule {
}

