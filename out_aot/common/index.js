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
import { FormGroupContent } from "./components/form/form-group-content/form-group-content.component";
import { FormGroupFooter } from "./components/form/form-group-footer/form-group-footer.component";
import { FormGroupPassword } from "./components/form/form-group-password/form-group-password.component";
import { FormGroupTextarea } from "./components/form/form-group-textarea/form-group-textarea.component";
import { FormGroupTextbox } from "./components/form/form-group-textbox/form-group-textbox.component";
import { MainComponent } from "./components/main/main.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NumberPickerComponent } from "./components/number-picker/number-picker.component";
import { PanelComponent } from "./components/panel/panel.component";
import { Rating } from "./components/rating/rating.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { CollapsableSidebarContainer } from "./containers/collapsable-sidebar/collapsable-sidebar.container";
import { CommonSandbox } from "./common.sandbox";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AuthenticatedGuard } from "./authenticated.guard";
import { RealTime } from "./realtime";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
import { StripTagsPipe } from "./pipes/strip-tags.pipe";
import { EncodeURIPipe } from "./pipes/encode-uri.pipe";
import { SafePipe } from "./pipes/safe.pipe";
import { OrderByPipe } from "./pipes/order-by.pipe";
export let CommonLogicModule = class CommonLogicModule {
};
CommonLogicModule = __decorate([
    NgModule({
        imports: [
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            RouterModule,
            HttpModule,
            MaterialModule,
            FlexLayoutModule
        ],
        declarations: [
            FormGroupContent,
            FormGroupFooter,
            FormGroupPassword,
            FormGroupTextarea,
            FormGroupTextbox,
            MainComponent,
            NavbarComponent,
            NumberPickerComponent,
            PanelComponent,
            Rating,
            SpinnerComponent,
            CollapsableSidebarContainer,
            StripTagsPipe,
            EncodeURIPipe,
            SafePipe,
            OrderByPipe
        ],
        exports: [
            FormGroupContent,
            FormGroupFooter,
            FormGroupPassword,
            FormGroupTextarea,
            FormGroupTextbox,
            MainComponent,
            NavbarComponent,
            NumberPickerComponent,
            PanelComponent,
            Rating,
            SpinnerComponent,
            CollapsableSidebarContainer,
            StripTagsPipe,
            EncodeURIPipe,
            SafePipe,
            OrderByPipe
        ],
        providers: [
            CommonSandbox,
            AuthenticatedGuard,
            RealTime
        ]
    }), 
    __metadata('design:paramtypes', [])
], CommonLogicModule);
//# sourceMappingURL=index.js.map