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
import { ClientDocumentsSandbox } from "./client-documents.sandbox";
import { ClientDocumentsService } from "./services/client-documents.service";
import { BoxAPIService } from "./services/box-api.service";
import { ClientDocumentsPageContainer } from "./containers/client-documents-page/client-documents-page.container";
import { ClientDocumentsMasterContainer } from "./containers/client-documents-master/client-documents-master.container";
import { ClientDocumentsDetailContainer } from "./containers/client-documents-detail/client-documents-detail.container";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
export let ClientDocumentsModule = class ClientDocumentsModule {
};
ClientDocumentsModule = __decorate([
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
            ClientDocumentsPageContainer,
            ClientDocumentsDetailContainer,
            ClientDocumentsMasterContainer
        ],
        exports: [
            ClientDocumentsPageContainer,
            ClientDocumentsDetailContainer,
            ClientDocumentsMasterContainer
        ],
        providers: [
            ClientDocumentsSandbox,
            ClientDocumentsService,
            BoxAPIService
        ]
    }), 
    __metadata('design:paramtypes', [])
], ClientDocumentsModule);
//# sourceMappingURL=index.js.map