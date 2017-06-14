//  -- Angular Imports --  //
    import { NgModule } from "@angular/core";
    import { BrowserModule } from "@angular/platform-browser";
    import { XHRBackend, RequestOptions, Http } from "@angular/http";
    import { MaterialModule } from "@angular/material";
    import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
    import { HttpModule } from "@angular/http";
    import { RouterModule } from "@angular/router";
    import { CommonModule } from "@angular/common";
    import { ReactiveFormsModule, FormsModule } from "@angular/forms";
    

//  -- Redux --  //
    import { Store } from "@ngrx/store";
    import "rxjs/add/operator/map";
    import "rxjs/add/operator/filter";
    import "rxjs/add/operator/share";
    import "rxjs/add/operator/take";
    import "rxjs/add/operator/mergeMap";
    import "rxjs/add/operator/distinctUntilChanged";
    import "rxjs/add/operator/retryWhen";
    import "rxjs/add/operator/debounceTime";
    import "rxjs/operator/finally";
    import "rxjs/add/operator/finally";
    import "rxjs/add/operator/publishReplay";
    import "rxjs/add/operator/do";
    import "rxjs/add/operator/switchMap";
    import "rxjs/add/observable/combineLatest";
    import "rxjs/add/operator/startWith";

//  -- Third Party Libraries --  //
    import { DpDatePickerModule } from 'ng2-date-picker';
    import { AgmCoreModule } from "@agm/core";
    import "bootstrap";

//  -- System Level --  //
    import { customHttpFactory } from "./customHttp";
    import { routing } from "./routes";
    import { AuthenticationModule } from "../authentication";
    import { ApplicationContainer } from "./containers/application/application.container";
    import { AppSandbox } from "./app.sandbox";
    import { CommonLogicModule } from "../common";

//  -- Independent --  //

//  -- Addresses Module --  //
    //  Injectables
        import { AddressesSandbox } from "../addresses/addresses.sandbox";
        import { AddressesService } from "../addresses/services/addresses.service";
        import { GoogleMapsService } from "../addresses/services/googlemaps.service";

    //  Containers
        import { AddressesWidgetContainer } from "../addresses/containers/addresses-widget/addresses-widget.container";

    //  Components
        import { AddAddressTabComponent } from "../addresses/components/add-address-tab/add-address-tab.component";
        import { AddressTabComponent } from "../addresses/components/address-tab/address-tab.component";
        import { AddressesSearchComponent } from "../addresses/components/addresses-search/addresses-search.component"; 

//  -- Contacts Module --  //
    //  Injectables
        import { ContactsSandbox } from "../contacts/contacts.sandbox";
        import { ContactsService } from "../contacts/services/contacts.service";

    //  Containers
        import { ContactsPageContainer } from "../contacts/containers/contacts-page/contacts-page.container";
        import { ContactsMasterContainer } from "../contacts/containers/contacts-master/contacts-master.container";
        import { ContactsDetailContainer } from "../contacts/containers/contacts-detail/contacts-detail.container";
        import { AddContactContainer } from "../contacts/containers/add-contact/add-contact.container";
        import { ContactsFormGroupContainer } from "../contacts/containers/contacts-form-group/contacts-form-group.container";
        import { ContactsWidgetContainer } from "../contacts/containers/contacts-widget/contacts-widget.container";

    //  Components
        import { AddContactTabComponent } from "../contacts/components/add-contact-tab/add-contact-tab.component";
        import { ContactTabComponent } from "../contacts/components/contact-tab/contact-tab.component";
        import { ContactsDetailHeaderComponent } from "../contacts/components/detail-header/detail-header.component";
        import { ContactsDetailFormComponent } from "../contacts/components/detail-form/detail-form.component";
        import { ContactsMasterListComponent } from "../contacts/components/master-list/master-list.component";

//  -- Client Accounts Module --  //
    //  Injectables
        import { ClientAccountsSandbox } from "../client-accounts/client-accounts.sandbox";
        import { ClientAccountsService } from "../client-accounts/services/client-accounts.service";

    //  Containers
        import { ClientAccountsPageContainer } from "../client-accounts/containers/client-accounts-page/client-accounts-page.container";
        import { ClientAccountsMasterContainer } from "../client-accounts/containers/client-accounts-master/client-accounts-master.container";
        import { ClientAccountsDetailContainer } from "../client-accounts/containers/client-accounts-detail/client-accounts-detail.container";
        import { AddClientAccountContainer } from "../client-accounts/containers/add-client-account/add-client-account.container";
        import { ClientAccountsFormGroupContainer } from "../client-accounts/containers/client-accounts-form-group/client-accounts-form-group.container";

    //  Components
        import { ClientAccountsDetailHeaderComponent } from "../client-accounts/components/detail-header/detail-header.component";
        import { ClientAccountsDetailFormComponent } from "../client-accounts/components/detail-form/detail-form.component";
        import { ClientAccountsMasterListComponent } from "../client-accounts/components/master-list/master-list.component";
        import { ClientAccountStatusMenuComponent } from "../client-accounts/components/account-status-menu/account-status-menu.component";




import { StockModule } from "../stock";
// import { ContactsModule } from "../contacts";
import { NotesModule } from "../notes";
import { TeamModule } from "../team";
import { MessagesModule } from "../messages";
// import { ClientAccountsModule } from "../client-accounts";
import { AppointmentsModule } from "../calendar";
import { ClientDocumentsModule } from "../client-documents";
import { SalesModule } from "../sales";
import { TasksModule } from "../tasks";
import { ProductsModule } from "../markets";
import { AboutModule } from "../about";






@NgModule({
    imports: [
        // -- Angular Imports --
        MaterialModule, 
        FlexLayoutModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        HttpModule, 

        // -- Third Party Libraries --
        DpDatePickerModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAqkrkJ74JFbCXlZO0l7xm_1uHlJebs7B4'
        }),

        // -- System Level --
        routing, 
        AuthenticationModule, 
        CommonLogicModule, 
        AboutModule,
        StockModule,

        NotesModule,
        TeamModule,
        MessagesModule,
        // ClientAccountsModule,
        AppointmentsModule,
        ClientDocumentsModule,
        SalesModule,
        TasksModule,
        ProductsModule,
        
        
    ],
    declarations: [
        //  -- System Level --  //
            ApplicationContainer,

        //  -- Addresses Module --  //
            //  Containers
                AddressesWidgetContainer,

            //  Components
                AddAddressTabComponent,
                AddressTabComponent,
                AddressesSearchComponent,

        //  -- Contacts Module -- //
            //  Containers
                ContactsPageContainer,
                ContactsMasterContainer, 
                ContactsDetailContainer,
                AddContactContainer,
                ContactsFormGroupContainer,
                ContactsWidgetContainer,

            //  Components
                AddContactTabComponent,
                ContactTabComponent,
                ContactsDetailHeaderComponent,
                ContactsDetailFormComponent,
                ContactsMasterListComponent,

        //  -- Client Accounts Module --  //
            // Containers
                ClientAccountsPageContainer, 
                ClientAccountsMasterContainer,
                ClientAccountsDetailContainer,
                AddClientAccountContainer,
                ClientAccountsFormGroupContainer,

            // Components
                ClientAccountsDetailHeaderComponent,
                ClientAccountsDetailFormComponent,
                ClientAccountsMasterListComponent,
                ClientAccountStatusMenuComponent

    ],
    exports: [
        //  -- System Level --  //
            ApplicationContainer,

        //  -- Addresses Module --  //
            //  Containers
                AddressesWidgetContainer,

            //  Components
                AddAddressTabComponent,
                AddressTabComponent,
                AddressesSearchComponent,

        //  -- Contacts Module -- //
            //  Containers
                ContactsPageContainer,
                ContactsMasterContainer, 
                ContactsDetailContainer,
                AddContactContainer,
                ContactsFormGroupContainer,
                ContactsWidgetContainer,

            //  Components
                AddContactTabComponent,
                ContactTabComponent,
                ContactsDetailHeaderComponent,
                ContactsDetailFormComponent,
                ContactsMasterListComponent,

        //  -- Client Accounts Module --  //
            // Containers
                ClientAccountsPageContainer, 
                ClientAccountsMasterContainer,
                ClientAccountsDetailContainer,
                AddClientAccountContainer,
                ClientAccountsFormGroupContainer,

            // Components
                ClientAccountsDetailHeaderComponent,
                ClientAccountsDetailFormComponent,
                ClientAccountsMasterListComponent,
                ClientAccountStatusMenuComponent

    ],
    providers: [
        //  -- System Level --  //
            AppSandbox,

        //  -- Addresses Module --  //
            AddressesSandbox,
            AddressesService,
            GoogleMapsService,

        //  -- Contacts Module --  //
            ContactsSandbox,
            ContactsService,

        //  -- Client Accounts Module --  //
            ClientAccountsService, 
            ClientAccountsSandbox,


        {
            provide: Http,
            useFactory: customHttpFactory,
            deps: [XHRBackend, RequestOptions, Store]
        }
    ]
})
export class AppModule {
}