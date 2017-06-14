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
import { AddressesModule } from "../addresses/index";
import { ContactsSandbox } from "./contacts.sandbox";
import { ContactsService } from "./services/contacts.service";
import { ContactsPageContainer } from "./containers/contacts-page/contacts-page.container";
import { ContactsMasterContainer } from "./containers/contacts-master/contacts-master.container";
import { ContactsDetailContainer } from "./containers/contacts-detail/contacts-detail.container";
import { AddContactContainer } from "./containers/add-contact/add-contact.container";
import { ContactsFormGroupContainer } from "./containers/contacts-form-group/contacts-form-group.container";
import { ContactsWidgetContainer } from "./containers/contacts-widget/contacts-widget.container";
import { AddContactTabComponent } from "./components/add-contact-tab/add-contact-tab.component";
import { ContactTabComponent } from "./components/contact-tab/contact-tab.component";
import { DetailHeaderComponent } from "./components/detail-header/detail-header.component";
import { DetailFormComponent } from "./components/detail-form/detail-form.component";
import { MasterListComponent } from "./components/master-list/master-list.component";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
export let ContactsModule = class ContactsModule {
};
ContactsModule = __decorate([
    NgModule({
        imports: [
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            CommonModule,
            HttpModule,
            CommonLogicModule,
            AddressesModule,
            MaterialModule,
            FlexLayoutModule
        ],
        declarations: [
            ContactsPageContainer,
            ContactsMasterContainer,
            ContactsDetailContainer,
            AddContactContainer,
            ContactsFormGroupContainer,
            ContactsWidgetContainer,
            AddContactTabComponent,
            ContactTabComponent,
            DetailHeaderComponent,
            DetailFormComponent,
            MasterListComponent
        ],
        exports: [
            ContactsPageContainer,
            ContactsMasterContainer,
            ContactsDetailContainer,
            AddContactContainer,
            ContactsFormGroupContainer,
            ContactsWidgetContainer,
            AddContactTabComponent,
            ContactTabComponent,
            DetailHeaderComponent,
            DetailFormComponent,
            MasterListComponent
        ],
        providers: [
            ContactsService,
            ContactsSandbox
        ]
    }), 
    __metadata('design:paramtypes', [])
], ContactsModule);
//# sourceMappingURL=index.js.map