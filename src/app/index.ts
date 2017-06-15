//  -- TABLE OF CONTENTS --  //
    // 1  - Angular Imports
    // 2  - Redux
    // 3  - Third Party Libraries
    // 4  - System Level
    // 5  - Independent 
    // 6  - Addresses Module
    // 7  - Calendar Module
    // 8  - Client Accounts Module
    // 9  - Client Documents Module
    // 10 - Contacts Module
    // 11 - Markets Module
    // 12 - Messages Module
    // 13 - Notes Module
    // 14 - Sales Module
    // 15 - Tasks Module
    // 16 - Team Module
    // 17 - Assets Module
    // 18 - Liabilities Module
    // 19 - Pensions Module
    // 20 - Protections Module
    // 21 - Bank Accounts Module
    // 22 - Comments Module


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
    import "rxjs/add/operator/takeUntil";
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
    import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
    import "froala-editor/js/froala_editor.pkgd.min.js";
    import { PopoverModule } from "ngx-popover";
    import { AccordionModule } from "ng2-accordion";
    import { ChartsModule } from 'ng2-charts';
    import 'chart.js';
    import { Ng2PageScrollModule } from 'ng2-page-scroll';
    import { DndModule } from 'ng2-dnd';
    



//  -- System Level --  //
    import { customHttpFactory } from "./customHttp";
    import { routing } from "./routes";
    import { AuthenticationModule } from "../authentication";
    import { ApplicationContainer } from "./containers/application/application.container";
    import { AppSandbox } from "./app.sandbox";
    import { CommonLogicModule } from "../common";
    import { DefaultPageComponent } from "../common/components/default-page/default-page.component";

//  -- Independent --  //
    // import { AboutModule } from "../about";
    // import { StockModule } from "../stock";

//  -- ADDRESSES MODULE --  //
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


// //  -- CALENDAR MODULE --  //
//     //  Injectables
//         import { AppointmentsSandbox } from "../calendar/appointments.sandbox";
//         import { AppointmentsService } from "../calendar/services/appointments.service";

//     //  Containers
//         import { CalendarPageContainer } from "../calendar/containers/calendar-page/calendar-page.container";
//         import { CalendarMasterContainer } from "../calendar/containers/calendar-master/calendar-master.container";
//         import { CalendarDetailContainer } from "../calendar/containers/calendar-detail/calendar-detail.container";


//     //  Components
//         import { DayViewComponent } from '../calendar/components/day-view/day-view.component';
//         import { WeekViewComponent } from '../calendar/components/week-view/week-view.component';
//         import { MonthViewComponent } from '../calendar/components/month-view/month-view.component';
//         import { DayDetailComponent } from '../calendar/components/day-detail/day-detail.component';
//         import { TopbarComponent } from '../calendar/components/topbar/topbar.component';


//  -- CLIENT ACCOUNTS MODULE --  //
    //  Injectables
        import { ClientAccountsSandbox } from "../client-accounts/client-accounts.sandbox";
        import { ClientAccountsService } from "../client-accounts/services/client-accounts.service";

    //  Containers
        import { ClientAccountsPageContainer } from "../client-accounts/containers/client-accounts-page/client-accounts-page.container";
        import { ClientAccountsMasterContainer } from "../client-accounts/containers/client-accounts-master/client-accounts-master.container";
        import { ClientAccountsDetailContainer } from "../client-accounts/containers/client-accounts-detail/client-accounts-detail.container";
        import { AddClientAccountContainer } from "../client-accounts/containers/add-client-account/add-client-account.container";
        import { ClientAccountsFormGroupContainer } from "../client-accounts/containers/client-accounts-form-group/client-accounts-form-group.container";
        import { ClientAccountsOverviewContainer } from "../client-accounts/containers/client-accounts-overview/client-accounts-overview.container";

    //  Components
        import { ClientAccountsDetailHeaderComponent } from "../client-accounts/components/detail-header/detail-header.component";
        import { ClientAccountsDetailFormComponent } from "../client-accounts/components/detail-form/detail-form.component";
        import { ClientAccountsDetailComplianceComponent } from "../client-accounts/components/detail-compliance/detail-compliance.component";
        import { ClientAccountsMasterListComponent } from "../client-accounts/components/master-list/master-list.component";
        import { ClientAccountStatusMenuComponent } from "../client-accounts/components/account-status-menu/account-status-menu.component";
        import { ClientAccountAssignmentSelectorComponent } from "../client-accounts/components/assignment-selector/assignment-selector.component";
        import { ClientAccountsStatusWidgetComponent } from "../client-accounts/components/status-widget/status-widget.component";
        import { ClientAccountsProgressWidgetComponent } from "../client-accounts/components/progress-widget/progress-widget.component";

//  -- CLIENT DOCUMENTS MODULE --  //
    //  Injectables
        import { ClientDocumentsSandbox } from "../client-documents/client-documents.sandbox";
        import { ClientDocumentsService } from "../client-documents/services/client-documents.service";
        import { BoxAPIService } from "../client-documents/services/box-api.service";

    //  Containers
        import { ClientDocumentsPageContainer } from "../client-documents/containers/client-documents-page/client-documents-page.container";
        import { ClientDocumentsMasterContainer } from "../client-documents/containers/client-documents-master/client-documents-master.container";
        import { ClientDocumentsDetailContainer } from "../client-documents/containers/client-documents-detail/client-documents-detail.container";
        import { ClientDocumentsWidgetContainer } from "../client-documents/containers/client-documents-widget/client-documents-widget.container";

    //  Components
        import { ClientDocumentsMasterListComponent } from "../client-documents/components/master-list/master-list.component";
        import { ClientDocumentMenuComponent } from "../client-documents/components/client-document-menu/client-document-menu.component";
        import { ClientDocumentAssignmentSelectorComponent } from "../client-documents/components/assignment-selector/assignment-selector.component";

//  -- CONTACTS MODULE --  //
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
        import { HealthOccupationWidgetContainer } from "../contacts/containers/health-occupation-widget/health-occupation-widget.container";
        import { IncomeWidgetContainer } from "../contacts/containers/income-widget/income-widget.container";
        import { ContactsIntermediateWidgetContainer } from "../contacts/containers/contacts-intermediate-widget/contacts-intermediate-widget.container";

    //  Components
        import { AddContactTabComponent } from "../contacts/components/add-contact-tab/add-contact-tab.component";
        import { ContactTabComponent } from "../contacts/components/contact-tab/contact-tab.component";
        import { HealthOccupationTabComponent } from "../contacts/components/health-occupation-tab/health-occupation-tab.component";
        import { TaxTabComponent } from "../contacts/components/tax-tab/tax-tab.component";
        import { IncomeTabComponent } from "../contacts/components/income-tab/income-tab.component";
        import { ExpenditureTabComponent } from "../contacts/components/expenditure-tab/expenditure-tab.component";
        import { ContactsDetailHeaderComponent } from "../contacts/components/detail-header/detail-header.component";
        import { ContactsDetailFormComponent } from "../contacts/components/detail-form/detail-form.component";
        import { ContactsMasterListComponent } from "../contacts/components/master-list/master-list.component";
        import { ContactAssignmentSelectorComponent } from "../contacts/components/assignment-selector/assignment-selector.component";
        import { ContactAssignmentInfoComponent } from "../contacts/components/assignment-info/assignment-info.component";
        import { ContactMenuComponent } from "../contacts/components/contact-menu/contact-menu.component";

// //  -- MARKETS MODULE --  //
//     //  Injectables
//         import { ProductsSandbox } from "../markets/products.sandbox";
//         import { ProductsService } from "../markets/services/products.service";

//  -- MESSAGES MODULE --  //
    //  Injectables
        import { MessagesSandbox } from "../messages/messages.sandbox";
        import { MessagesService } from "../messages/services/messages.service";

    //  Containers
        import { MessagesPageContainer } from "../messages/containers/messages-page/messages-page.container";
        import { MessagesMasterContainer } from "../messages/containers/messages-master/messages-master.container";
        import { MessagesDetailContainer } from "../messages/containers/messages-detail/messages-detail.container";
        import { MessagesFormGroupContainer } from "../messages/containers/messages-form-group/messages-form-group.container";

    //  Components

        import { MessagesDetailHeaderComponent } from "../messages/components/detail-header/detail-header.component";
        import { MessagesDetailFormComponent } from "../messages/components/detail-form/detail-form.component";
        import { MessagesMasterListComponent } from "../messages/components/master-list/master-list.component";
        import { MessagesDetailListComponent } from "../messages/components/detail-list/detail-list.component";


//  -- NOTES MODULE --  //
    //  Injectables
        import { NotesSandbox } from "../notes/notes.sandbox";
        import { NotesService } from "../notes/services/notes.service";

    //  Containers
        import { NotesPageContainer } from "../notes/containers/notes-page/notes-page.container";
        import { NotesMasterContainer } from "../notes/containers/notes-master/notes-master.container";
        import { NotesDetailContainer } from "../notes/containers/notes-detail/notes-detail.container";
        import { AddNoteContainer } from "../notes/containers/add-note/add-note.container";
        import { NotesEditorGroupContainer } from "../notes/containers/notes-editor-group/notes-editor-group.container";

    //  Components
        import { NotesDetailHeaderComponent } from "../notes/components/detail-header/detail-header.component";
        import { NotesDetailEditorComponent } from "../notes/components/detail-editor/detail-editor.component";
        import { NotesMasterListComponent } from "../notes/components/master-list/master-list.component";

//  -- ACTIVITIES MODULE --  //
    //  Injectables
        import { ActivitiesService } from "../activities/services/activities.service";
        import { ActivitiesSandbox } from "../activities/activities.sandbox";

    //  Containers
        import { AllActivitiesContainer } from "../activities/containers/all-activities/all-activities.container";

    //  Components
        import { MessageActivityComponent } from "../activities/components/message-activity/message-activity.component";
        import { ActivitiesListComponent } from "../activities/components/activities-list/activities-list.component";

//  -- SALES MODULE --  //
    //  Injectables
        import { SalesSandbox } from "../sales/sales.sandbox";
        import { SalesService } from "../sales/services/sales.service";


//  -- TASKS MODULE --  //
    //  Injectables
        import { TasksSandbox } from "../tasks/tasks.sandbox";
        import { TasksService } from "../tasks/services/tasks.service";

    //  Containers
        import { TasksPageContainer } from "../tasks/containers/tasks-page/tasks-page.container";
        import { TasksTodayContainer } from "../tasks/containers/tasks-today/tasks-today.container";
        import { TasksWeekContainer } from "../tasks/containers/tasks-week/tasks-week.container";
        import { TasksNextWeekContainer } from "../tasks/containers/tasks-next-week/tasks-next-week.container";
        import { TasksMonthContainer } from "../tasks/containers/tasks-month/tasks-month.container";
        import { TasksMasterContainer } from "../tasks/containers/tasks-master/tasks-master.container";
        import { TasksFormGroupContainer } from "../tasks/containers/tasks-form-group/tasks-form-group.container";
        import { TasksAllContainer } from "../tasks/containers/tasks-all/tasks-all.container";
        import { TasksWidgetContainer } from "../tasks/containers/tasks-widget/tasks-widget.container";

    //  Components
        import { TasksHeaderComponent } from "../tasks/components/tasks-header/tasks-header.component";
        import { TasksListComponent } from "../tasks/components/tasks-list/tasks-list.component";
        import { TaskItemComponent } from "../tasks/components/task-item/task-item.component";
        import { TaskMenuComponent } from "../tasks/components/task-menu/task-menu.component";
        import { EditTaskComponent } from "../tasks/components/edit-task/edit-task.component";
        import { TaskInfoComponent } from "../tasks/components/task-info/task-info.component";

//  -- TEAM MODULE --  //
    //  Injectables
        import { TeamSandbox } from "../team/team.sandbox";
        import { UserDataService } from "../team/services/user-data.service";

    //  Containers
        import { TeamPageContainer } from "../team/containers/team-page/team-page.container";
        import { TeamMasterContainer } from "../team/containers/team-master/team-master.container";
        import { TeamDetailContainer } from "../team/containers/team-detail/team-detail.container";

    //  Components
        import { TeamAssignmentSelectorComponent } from "../team/components/assignment-selector/assignment-selector.component";
        import { AssignmentButtonLabelComponent } from "../team/components/assignment-button-label/assignment-button-label.component";
        import { TeamMasterListComponent } from "../team/components/master-list/master-list.component";

//  -- ASSETS MODULE --  //
    //  Injectables
        import { XAssetsSandbox } from "../xassets/xassets.sandbox";
        import { XAssetsService } from "../xassets/services/xassets.service";

    //  Containers
        import { XAssetsWidgetContainer } from "../xassets/containers/xassets-widget/xassets-widget.container";
    //  Components
        import { XAssetTabComponent } from "../xassets/components/xasset-tab/xasset-tab.component";
        import { AddXAssetTabComponent } from "../xassets/components/add-xasset-tab/add-xasset-tab.component";

//  -- LIABILITIES MODULE --  //
    //  Injectables
        import { XLiabilitiesSandbox } from "../xliabilities/xliabilities.sandbox";
        import { XLiabilitiesService } from "../xliabilities/services/xliabilities.service";

    //  Containers
        import { XLiabilitiesWidgetContainer } from "../xliabilities/containers/xliabilities-widget/xliabilities-widget.container";

    //  Components
        import { XLiabilityTabComponent } from "../xliabilities/components/xliability-tab/xliability-tab.component";
        import { AddXLiabilityTabComponent } from "../xliabilities/components/add-xliability-tab/add-xliability-tab.component";

//  -- PENSIONS MODULE --  //
    //  Injectables
        import { XPensionsSandbox } from "../xpensions/xpensions.sandbox";
        import { XPensionsService } from "../xpensions/services/xpensions.service";

    //  Containers
        import { XPensionsWidgetContainer } from "../xpensions/containers/xpensions-widget/xpensions-widget.container";

    //  Components
        import { XPensionTabComponent } from "../xpensions/components/xpension-tab/xpension-tab.component";
        import { AddXPensionTabComponent } from "../xpensions/components/add-xpension-tab/add-xpension-tab.component";

//  -- PROTECTIONS MODULE --  //
    //  Injectables
        import { XProtectionsSandbox } from "../xprotections/xprotections.sandbox";
        import { XProtectionsService } from "../xprotections/services/xprotections.service";

    //  Containers
        import { XProtectionsWidgetContainer } from "../xprotections/containers/xprotections-widget/xprotections-widget.container";

    //  Components
        import { XProtectionTabComponent } from "../xprotections/components/xprotection-tab/xprotection-tab.component";
        import { AddXProtectionTabComponent } from "../xprotections/components/add-xprotection-tab/add-xprotection-tab.component";

//  -- BANK ACCOUNTS MODULE --  //
    //  Injectables
        import { BankAccountsSandbox } from "../bank-accounts/bank-accounts.sandbox";
        import { BankAccountsService } from "../bank-accounts/services/bank-accounts.service";

    //  Containers
        import { BankAccountsWidgetContainer } from "../bank-accounts/containers/bank-accounts-widget/bank-accounts-widget.container";

    //  Components
        import { BankAccountTabComponent } from "../bank-accounts/components/bank-account-tab/bank-account-tab.component";
        import { AddBankAccountTabComponent } from "../bank-accounts/components/add-bank-account-tab/add-bank-account-tab.component";

//  -- COMMENTS MODULE --  //
    //  Injectables
        import { CommentsSandbox } from "../comments/comments.sandbox";
        import { CommentsService } from "../comments/services/comments.service";

    //  Containers
        import { CommentFormGroupContainer} from "../comments/containers/comment-form-group/comment-form-group.container";
        import { CommentsBarContainer } from "../comments/containers/comments-bar/comments-bar.container";

    //  Components
        import { CommentFormComponent } from "../comments/components/comment-form/comment-form.component";

// import { ContactsModule } from "../contacts";
// import { NotesModule } from "../notes";
// import { TeamModule } from "../team";
// import { MessagesModule } from "../messages";
// import { ClientAccountsModule } from "../client-accounts";
// import { AppointmentsModule } from "../calendar";
// import { ClientDocumentsModule } from "../client-documents";
// import { SalesModule } from "../sales";
// import { TasksModule } from "../tasks";
// import { ProductsModule } from "../markets";






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
        FroalaEditorModule.forRoot(), 
        FroalaViewModule.forRoot(),
        PopoverModule,
        AccordionModule,
        ChartsModule,
        Ng2PageScrollModule.forRoot(),


        // -- System Level --
        routing, 
        AuthenticationModule, 
        CommonLogicModule, 
        // AboutModule,
        // StockModule,

        // NotesModule,
        // TeamModule,
        // MessagesModule,
        // ClientAccountsModule,
        // AppointmentsModule,
        // ClientDocumentsModule,
        // SalesModule,
        // TasksModule,
        // ProductsModule,
        
        
    ],
    declarations: [
        //  -- System Level --  //
            ApplicationContainer,
            DefaultPageComponent,

        //  -- Addresses Module --  //
            //  Containers
                AddressesWidgetContainer,

            //  Components
                AddAddressTabComponent,
                AddressTabComponent,
                AddressesSearchComponent,

        //  -- Calendar Module --  //
            //  Containers
            //     CalendarDetailContainer,
            //     CalendarMasterContainer,
            //     CalendarPageContainer,
                
            // //  Components
            //     DayViewComponent,
            //     WeekViewComponent,
            //     MonthViewComponent,
            //     DayDetailComponent,
            //     TopbarComponent,

        //  -- Client Accounts Module --  //
            // Containers
                ClientAccountsPageContainer, 
                ClientAccountsMasterContainer,
                ClientAccountsDetailContainer,
                AddClientAccountContainer,
                ClientAccountsFormGroupContainer,
                ClientAccountsOverviewContainer,

            // Components
                ClientAccountsDetailHeaderComponent,
                ClientAccountsDetailFormComponent,
                ClientAccountsDetailComplianceComponent,
                ClientAccountsMasterListComponent,
                ClientAccountStatusMenuComponent,
                ClientAccountAssignmentSelectorComponent,
                ClientAccountsStatusWidgetComponent,
                ClientAccountsProgressWidgetComponent,

        //  -- Client Documents Module --  //
            // Containers
                ClientDocumentsPageContainer,
                ClientDocumentsDetailContainer,
                ClientDocumentsMasterContainer,
                ClientDocumentsWidgetContainer,

            // Components
                ClientDocumentsMasterListComponent,
                ClientDocumentMenuComponent,
                ClientDocumentAssignmentSelectorComponent,

        //  -- Contacts Module -- //
            //  Containers
                ContactsPageContainer,
                ContactsMasterContainer, 
                ContactsDetailContainer,
                AddContactContainer,
                ContactsFormGroupContainer,
                ContactsWidgetContainer,
                HealthOccupationWidgetContainer,
                IncomeWidgetContainer,
                ContactsIntermediateWidgetContainer,

            //  Components
                AddContactTabComponent,
                ContactTabComponent,
                HealthOccupationTabComponent,
                IncomeTabComponent,
                ExpenditureTabComponent,
                TaxTabComponent,
                ContactsDetailHeaderComponent,
                ContactsDetailFormComponent,
                ContactsMasterListComponent,
                ContactAssignmentSelectorComponent,
                ContactAssignmentInfoComponent,
                ContactMenuComponent,

        //  -- Markets Module --  //
            // Containers

            // Components


        //  -- Messages Module --  //
            //  Containers
                MessagesPageContainer, 
                MessagesMasterContainer, 
                MessagesDetailContainer,
                MessagesFormGroupContainer,

            // Components
                MessagesDetailHeaderComponent,
                MessagesDetailFormComponent,
                MessagesMasterListComponent,
                MessagesDetailListComponent,

        //  -- Notes Module --  //
            //  Containers
                NotesPageContainer, 
                NotesMasterContainer, 
                NotesDetailContainer,
                AddNoteContainer,
                NotesEditorGroupContainer,

            //  Components
                NotesDetailHeaderComponent,
                NotesDetailEditorComponent,
                NotesMasterListComponent,

        //  -- Activities Module --  //
            //  Containers
                AllActivitiesContainer,

            //  Components
                MessageActivityComponent,
                ActivitiesListComponent,

        //  -- Tasks Module --  //
            //  Containers
                TasksTodayContainer,
                TasksMasterContainer,
                TasksPageContainer,
                TasksFormGroupContainer,
                TasksWeekContainer,
                TasksNextWeekContainer,
                TasksMonthContainer,
                TasksAllContainer,
                TasksWidgetContainer,

            //  Components
                TasksListComponent,
                TaskItemComponent,
                TaskMenuComponent,
                EditTaskComponent,
                TasksHeaderComponent,
                TaskInfoComponent,

        //  -- Team Module --  //
            //  Containers
                TeamPageContainer, 
                TeamMasterContainer, 
                TeamDetailContainer,

            //  Components
                TeamAssignmentSelectorComponent,
                TeamMasterListComponent,
                AssignmentButtonLabelComponent,

        //  -- Existing Assets Module --  //
            //  Containers
                XAssetsWidgetContainer,

            //  Components
                XAssetTabComponent,
                AddXAssetTabComponent,

        //  -- Existing Liabilities Module --  //
            //  Containers
                XLiabilitiesWidgetContainer,

            //  Components
                XLiabilityTabComponent,
                AddXLiabilityTabComponent,

        //  -- Existing Protections Module --  //
            //  Containers
                XProtectionsWidgetContainer,
            //  Components
                XProtectionTabComponent,
                AddXProtectionTabComponent,

        //  -- Existing Pensions Module --  //
            //  Containers
                XPensionsWidgetContainer,
            //  Components
                XPensionTabComponent,
                AddXPensionTabComponent,

        //  -- Bank Accounts Module --  //
            //  Containers
                BankAccountsWidgetContainer,
            //  Components
                BankAccountTabComponent,
                AddBankAccountTabComponent,

        //  -- Comments Module --  //
            //  Containers
                CommentsBarContainer,
                CommentFormGroupContainer,

            //  Components
                CommentFormComponent

    ],
    exports: [
        //  -- System Level --  //
            ApplicationContainer,
            DefaultPageComponent,

       
    ],
    providers: [
        //  -- System Level --  //
            AppSandbox,

        //  -- Addresses Module --  //
            AddressesSandbox,
            AddressesService,
            GoogleMapsService,

        //  -- Calendar Module --  //
            // AppointmentsSandbox,
            // AppointmentsService,

        //  -- Client Accounts Module --  //
            ClientAccountsService, 
            ClientAccountsSandbox,

        //  -- Client Documents Module --  //
            ClientDocumentsService,
            ClientDocumentsSandbox,
            BoxAPIService,

        //  -- Contacts Module --  //
            ContactsSandbox,
            ContactsService,

        //  -- Markets Module --  //
            // ProductsSandbox,
            // ProductsService,

        //  -- Messages Module --  //
            MessagesSandbox,
            MessagesService,


        //  -- Notes Module --  //
            NotesSandbox,
            NotesService,

        //  -- Activities Module --  //
            ActivitiesSandbox,
            ActivitiesService,

        //  -- Sales Module --  //
            SalesSandbox,
            SalesService,

        //  -- Tasks Module --  //
            TasksSandbox,
            TasksService,

        //  -- Team Module --  //
            UserDataService, 
            TeamSandbox,

        //  -- Assets Module --  //
            XAssetsSandbox,
            XAssetsService,

        //  -- Liabilities Module --  //
            XLiabilitiesSandbox,
            XLiabilitiesService,

        //  -- Pensions Module --  //
            XPensionsSandbox,
            XPensionsService,

        //  -- Protections Module --  //
            XProtectionsSandbox,
            XProtectionsService,

        //  -- Bank Accounts Module --  //
            BankAccountsSandbox,
            BankAccountsService,

        //  -- Comments Module --  //
            CommentsSandbox,
            CommentsService,

        {
            provide: Http,
            useFactory: customHttpFactory,
            deps: [XHRBackend, RequestOptions, Store]
        }
    ]
})
export class AppModule {
}