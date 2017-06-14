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

import { MessagesDetailHeaderComponent } from "./components/detail-header/detail-header.component";
import { MessagesDetailFormComponent } from "./components/detail-form/detail-form.component";
import { MessagesMasterListComponent } from "./components/master-list/master-list.component";
import { MessagesDetailListComponent } from "./components/detail-list/detail-list.component";

import { MaterialModule} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";


@NgModule({
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
        MessagesDetailHeaderComponent,
        MessagesDetailFormComponent,
        MessagesMasterListComponent,
        MessagesDetailListComponent



    ],
    exports: [ 
        MessagesPageContainer,
        MessagesMasterContainer,
        MessagesDetailContainer,
        MessagesFormGroupContainer,
        MessagesDetailFormComponent,
        MessagesDetailHeaderComponent,
        MessagesMasterListComponent,
        MessagesDetailListComponent

    ],
    providers: [ 
        MessagesService, 
        MessagesSandbox
    ]
})
export class MessagesModule {

}
