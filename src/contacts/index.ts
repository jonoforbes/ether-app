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
import { ContactsDetailHeaderComponent } from "./components/detail-header/detail-header.component";
import { ContactsDetailFormComponent } from "./components/detail-form/detail-form.component";
import { ContactsMasterListComponent } from "./components/master-list/master-list.component";

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
        ContactsDetailHeaderComponent,
        ContactsDetailFormComponent,
        ContactsMasterListComponent

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
        ContactsDetailHeaderComponent,
        ContactsDetailFormComponent,
        ContactsMasterListComponent
    ],
    providers: [ 
        ContactsService, 
        ContactsSandbox
    ]
})
export class ContactsModule {

}
