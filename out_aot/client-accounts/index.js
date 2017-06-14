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
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonLogicModule } from "../common/index";
import { ContactsModule } from "../contacts/index";
import { ClientAccountsSandbox } from "./client-accounts.sandbox";
import { ClientAccountsService } from "./services/client-accounts.service";
import { ClientAccountsPageContainer } from "./containers/client-accounts-page/client-accounts-page.container";
import { ClientAccountsMasterContainer } from "./containers/client-accounts-master/client-accounts-master.container";
import { ClientAccountsDetailContainer } from "./containers/client-accounts-detail/client-accounts-detail.container";
import { AddClientAccountContainer } from "./containers/add-client-account/add-client-account.container";
import { ClientAccountsFormGroupContainer } from "./containers/client-accounts-form-group/client-accounts-form-group.container";
import { ClientAccountsDetailHeaderComponent } from "./components/detail-header/detail-header.component";
import { ClientAccountsDetailFormComponent } from "./components/detail-form/detail-form.component";
import { ClientAccountsMasterListComponent } from "./components/master-list/master-list.component";
import { ClientAccountStatusMenuComponent } from "./components/account-status-menu/account-status-menu.component";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
export let ClientAccountsModule = class ClientAccountsModule {
};
ClientAccountsModule = __decorate([
    NgModule({
        imports: [
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            CommonModule,
            HttpModule,
            CommonLogicModule,
            ContactsModule,
            MaterialModule,
            FlexLayoutModule
        ],
        declarations: [
            ClientAccountsPageContainer,
            ClientAccountsMasterContainer,
            ClientAccountsDetailContainer,
            AddClientAccountContainer,
            ClientAccountsFormGroupContainer,
            ClientAccountsDetailHeaderComponent,
            ClientAccountsDetailFormComponent,
            ClientAccountsMasterListComponent,
            ClientAccountStatusMenuComponent
        ],
        exports: [
            ClientAccountsPageContainer,
            ClientAccountsMasterContainer,
            ClientAccountsDetailContainer,
            AddClientAccountContainer,
            ClientAccountsFormGroupContainer,
            ClientAccountsDetailHeaderComponent,
            ClientAccountsDetailFormComponent,
            ClientAccountsMasterListComponent,
            ClientAccountStatusMenuComponent
        ],
        providers: [
            ClientAccountsService,
            ClientAccountsSandbox
        ]
    }), 
    __metadata('design:paramtypes', [])
], ClientAccountsModule);
//# sourceMappingURL=index.js.map