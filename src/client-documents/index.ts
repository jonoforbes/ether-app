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

import { MaterialModule} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";

@NgModule({
    imports:      [ 
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
    exports:    [
        ClientDocumentsPageContainer,
        ClientDocumentsDetailContainer,
        ClientDocumentsMasterContainer
    ],
    providers: [
        ClientDocumentsSandbox,
        ClientDocumentsService,
        BoxAPIService
    ]
})
export class ClientDocumentsModule {  }