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
import { MessagesSandbox } from "./messages.sandbox";
import { MessagesService } from "./services/messages.service";
import { MessagesPageContainer } from "./containers/messages-page/messages-page.container";
import { MessagesMasterContainer } from "./containers/messages-master/messages-master.container";
import { MessagesDetailContainer } from "./containers/messages-detail/messages-detail.container";
import { MessagesFormGroupContainer } from "./containers/messages-form-group/messages-form-group.container";
import { DetailHeaderComponent } from "./components/detail-header/detail-header.component";
import { DetailFormComponent } from "./components/detail-form/detail-form.component";
import { MasterListComponent } from "./components/master-list/master-list.component";
import { DetailListComponent } from "./components/detail-list/detail-list.component";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
export let MessagesModule = class MessagesModule {
};
MessagesModule = __decorate([
    NgModule({
        imports: [
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            CommonModule,
            HttpModule,
            CommonLogicModule,
            MaterialModule,
            FlexLayoutModule
        ],
        declarations: [
            MessagesPageContainer,
            MessagesMasterContainer,
            MessagesDetailContainer,
            MessagesFormGroupContainer,
            DetailHeaderComponent,
            DetailFormComponent,
            MasterListComponent,
            DetailListComponent
        ],
        exports: [
            MessagesPageContainer,
            MessagesMasterContainer,
            MessagesDetailContainer,
            MessagesFormGroupContainer,
            DetailFormComponent,
            DetailHeaderComponent,
            MasterListComponent,
            DetailListComponent
        ],
        providers: [
            MessagesService,
            MessagesSandbox
        ]
    }), 
    __metadata('design:paramtypes', [])
], MessagesModule);
//# sourceMappingURL=index.js.map