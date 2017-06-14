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
import { BrowserModule } from "@angular/platform-browser";
import { XHRBackend, RequestOptions, Http } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
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
import { customHttpFactory } from "./customHttp";
import { routing } from "./routes";
import { AuthenticationModule } from "../authentication";
import { ApplicationContainer } from "./containers/application/application.container";
import { AppSandbox } from "./app.sandbox";
import { CommonLogicModule } from "../common";
import { DefaultPageComponent } from "../common/components/default-page/default-page.component";
import { AddressesSandbox } from "../addresses/addresses.sandbox";
import { AddressesService } from "../addresses/services/addresses.service";
import { GoogleMapsService } from "../addresses/services/googlemaps.service";
import { AddressesWidgetContainer } from "../addresses/containers/addresses-widget/addresses-widget.container";
import { AddAddressTabComponent } from "../addresses/components/add-address-tab/add-address-tab.component";
import { AddressTabComponent } from "../addresses/components/address-tab/address-tab.component";
import { AddressesSearchComponent } from "../addresses/components/addresses-search/addresses-search.component";
import { ClientAccountsSandbox } from "../client-accounts/client-accounts.sandbox";
import { ClientAccountsService } from "../client-accounts/services/client-accounts.service";
import { ClientAccountsPageContainer } from "../client-accounts/containers/client-accounts-page/client-accounts-page.container";
import { ClientAccountsMasterContainer } from "../client-accounts/containers/client-accounts-master/client-accounts-master.container";
import { ClientAccountsDetailContainer } from "../client-accounts/containers/client-accounts-detail/client-accounts-detail.container";
import { AddClientAccountContainer } from "../client-accounts/containers/add-client-account/add-client-account.container";
import { ClientAccountsFormGroupContainer } from "../client-accounts/containers/client-accounts-form-group/client-accounts-form-group.container";
import { ClientAccountsOverviewContainer } from "../client-accounts/containers/client-accounts-overview/client-accounts-overview.container";
import { ClientAccountsDetailHeaderComponent } from "../client-accounts/components/detail-header/detail-header.component";
import { ClientAccountsDetailFormComponent } from "../client-accounts/components/detail-form/detail-form.component";
import { ClientAccountsDetailComplianceComponent } from "../client-accounts/components/detail-compliance/detail-compliance.component";
import { ClientAccountsMasterListComponent } from "../client-accounts/components/master-list/master-list.component";
import { ClientAccountStatusMenuComponent } from "../client-accounts/components/account-status-menu/account-status-menu.component";
import { ClientAccountAssignmentSelectorComponent } from "../client-accounts/components/assignment-selector/assignment-selector.component";
import { ClientAccountsStatusWidgetComponent } from "../client-accounts/components/status-widget/status-widget.component";
import { ClientAccountsProgressWidgetComponent } from "../client-accounts/components/progress-widget/progress-widget.component";
import { ClientDocumentsSandbox } from "../client-documents/client-documents.sandbox";
import { ClientDocumentsService } from "../client-documents/services/client-documents.service";
import { BoxAPIService } from "../client-documents/services/box-api.service";
import { ClientDocumentsPageContainer } from "../client-documents/containers/client-documents-page/client-documents-page.container";
import { ClientDocumentsMasterContainer } from "../client-documents/containers/client-documents-master/client-documents-master.container";
import { ClientDocumentsDetailContainer } from "../client-documents/containers/client-documents-detail/client-documents-detail.container";
import { ClientDocumentsWidgetContainer } from "../client-documents/containers/client-documents-widget/client-documents-widget.container";
import { ClientDocumentsMasterListComponent } from "../client-documents/components/master-list/master-list.component";
import { ClientDocumentMenuComponent } from "../client-documents/components/client-document-menu/client-document-menu.component";
import { ClientDocumentAssignmentSelectorComponent } from "../client-documents/components/assignment-selector/assignment-selector.component";
import { ContactsSandbox } from "../contacts/contacts.sandbox";
import { ContactsService } from "../contacts/services/contacts.service";
import { ContactsPageContainer } from "../contacts/containers/contacts-page/contacts-page.container";
import { ContactsMasterContainer } from "../contacts/containers/contacts-master/contacts-master.container";
import { ContactsDetailContainer } from "../contacts/containers/contacts-detail/contacts-detail.container";
import { AddContactContainer } from "../contacts/containers/add-contact/add-contact.container";
import { ContactsFormGroupContainer } from "../contacts/containers/contacts-form-group/contacts-form-group.container";
import { ContactsWidgetContainer } from "../contacts/containers/contacts-widget/contacts-widget.container";
import { HealthOccupationWidgetContainer } from "../contacts/containers/health-occupation-widget/health-occupation-widget.container";
import { IncomeWidgetContainer } from "../contacts/containers/income-widget/income-widget.container";
import { ContactsIntermediateWidgetContainer } from "../contacts/containers/contacts-intermediate-widget/contacts-intermediate-widget.container";
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
import { MessagesSandbox } from "../messages/messages.sandbox";
import { MessagesService } from "../messages/services/messages.service";
import { MessagesPageContainer } from "../messages/containers/messages-page/messages-page.container";
import { MessagesMasterContainer } from "../messages/containers/messages-master/messages-master.container";
import { MessagesDetailContainer } from "../messages/containers/messages-detail/messages-detail.container";
import { MessagesFormGroupContainer } from "../messages/containers/messages-form-group/messages-form-group.container";
import { MessagesDetailHeaderComponent } from "../messages/components/detail-header/detail-header.component";
import { MessagesDetailFormComponent } from "../messages/components/detail-form/detail-form.component";
import { MessagesMasterListComponent } from "../messages/components/master-list/master-list.component";
import { MessagesDetailListComponent } from "../messages/components/detail-list/detail-list.component";
import { NotesSandbox } from "../notes/notes.sandbox";
import { NotesService } from "../notes/services/notes.service";
import { NotesPageContainer } from "../notes/containers/notes-page/notes-page.container";
import { NotesMasterContainer } from "../notes/containers/notes-master/notes-master.container";
import { NotesDetailContainer } from "../notes/containers/notes-detail/notes-detail.container";
import { AddNoteContainer } from "../notes/containers/add-note/add-note.container";
import { NotesEditorGroupContainer } from "../notes/containers/notes-editor-group/notes-editor-group.container";
import { NotesDetailHeaderComponent } from "../notes/components/detail-header/detail-header.component";
import { NotesDetailEditorComponent } from "../notes/components/detail-editor/detail-editor.component";
import { NotesMasterListComponent } from "../notes/components/master-list/master-list.component";
import { ActivitiesService } from "../activities/services/activities.service";
import { ActivitiesSandbox } from "../activities/activities.sandbox";
import { AllActivitiesContainer } from "../activities/containers/all-activities/all-activities.container";
import { MessageActivityComponent } from "../activities/components/message-activity/message-activity.component";
import { ActivitiesListComponent } from "../activities/components/activities-list/activities-list.component";
import { SalesSandbox } from "../sales/sales.sandbox";
import { SalesService } from "../sales/services/sales.service";
import { TasksSandbox } from "../tasks/tasks.sandbox";
import { TasksService } from "../tasks/services/tasks.service";
import { TasksPageContainer } from "../tasks/containers/tasks-page/tasks-page.container";
import { TasksTodayContainer } from "../tasks/containers/tasks-today/tasks-today.container";
import { TasksWeekContainer } from "../tasks/containers/tasks-week/tasks-week.container";
import { TasksNextWeekContainer } from "../tasks/containers/tasks-next-week/tasks-next-week.container";
import { TasksMonthContainer } from "../tasks/containers/tasks-month/tasks-month.container";
import { TasksMasterContainer } from "../tasks/containers/tasks-master/tasks-master.container";
import { TasksFormGroupContainer } from "../tasks/containers/tasks-form-group/tasks-form-group.container";
import { TasksAllContainer } from "../tasks/containers/tasks-all/tasks-all.container";
import { TasksWidgetContainer } from "../tasks/containers/tasks-widget/tasks-widget.container";
import { TasksHeaderComponent } from "../tasks/components/tasks-header/tasks-header.component";
import { TasksListComponent } from "../tasks/components/tasks-list/tasks-list.component";
import { TaskItemComponent } from "../tasks/components/task-item/task-item.component";
import { TaskMenuComponent } from "../tasks/components/task-menu/task-menu.component";
import { EditTaskComponent } from "../tasks/components/edit-task/edit-task.component";
import { TaskInfoComponent } from "../tasks/components/task-info/task-info.component";
import { TeamSandbox } from "../team/team.sandbox";
import { UserDataService } from "../team/services/user-data.service";
import { TeamPageContainer } from "../team/containers/team-page/team-page.container";
import { TeamMasterContainer } from "../team/containers/team-master/team-master.container";
import { TeamDetailContainer } from "../team/containers/team-detail/team-detail.container";
import { TeamAssignmentSelectorComponent } from "../team/components/assignment-selector/assignment-selector.component";
import { AssignmentButtonLabelComponent } from "../team/components/assignment-button-label/assignment-button-label.component";
import { TeamMasterListComponent } from "../team/components/master-list/master-list.component";
import { XAssetsSandbox } from "../xassets/xassets.sandbox";
import { XAssetsService } from "../xassets/services/xassets.service";
import { XAssetsWidgetContainer } from "../xassets/containers/xassets-widget/xassets-widget.container";
import { XAssetTabComponent } from "../xassets/components/xasset-tab/xasset-tab.component";
import { AddXAssetTabComponent } from "../xassets/components/add-xasset-tab/add-xasset-tab.component";
import { XLiabilitiesSandbox } from "../xliabilities/xliabilities.sandbox";
import { XLiabilitiesService } from "../xliabilities/services/xliabilities.service";
import { XLiabilitiesWidgetContainer } from "../xliabilities/containers/xliabilities-widget/xliabilities-widget.container";
import { XLiabilityTabComponent } from "../xliabilities/components/xliability-tab/xliability-tab.component";
import { AddXLiabilityTabComponent } from "../xliabilities/components/add-xliability-tab/add-xliability-tab.component";
import { XPensionsSandbox } from "../xpensions/xpensions.sandbox";
import { XPensionsService } from "../xpensions/services/xpensions.service";
import { XPensionsWidgetContainer } from "../xpensions/containers/xpensions-widget/xpensions-widget.container";
import { XPensionTabComponent } from "../xpensions/components/xpension-tab/xpension-tab.component";
import { AddXPensionTabComponent } from "../xpensions/components/add-xpension-tab/add-xpension-tab.component";
import { XProtectionsSandbox } from "../xprotections/xprotections.sandbox";
import { XProtectionsService } from "../xprotections/services/xprotections.service";
import { XProtectionsWidgetContainer } from "../xprotections/containers/xprotections-widget/xprotections-widget.container";
import { XProtectionTabComponent } from "../xprotections/components/xprotection-tab/xprotection-tab.component";
import { AddXProtectionTabComponent } from "../xprotections/components/add-xprotection-tab/add-xprotection-tab.component";
import { BankAccountsSandbox } from "../bank-accounts/bank-accounts.sandbox";
import { BankAccountsService } from "../bank-accounts/services/bank-accounts.service";
import { BankAccountsWidgetContainer } from "../bank-accounts/containers/bank-accounts-widget/bank-accounts-widget.container";
import { BankAccountTabComponent } from "../bank-accounts/components/bank-account-tab/bank-account-tab.component";
import { AddBankAccountTabComponent } from "../bank-accounts/components/add-bank-account-tab/add-bank-account-tab.component";
export let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [
            MaterialModule,
            FlexLayoutModule,
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            CommonModule,
            HttpModule,
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
            routing,
            AuthenticationModule,
            CommonLogicModule,
        ],
        declarations: [
            ApplicationContainer,
            DefaultPageComponent,
            AddressesWidgetContainer,
            AddAddressTabComponent,
            AddressTabComponent,
            AddressesSearchComponent,
            ClientAccountsPageContainer,
            ClientAccountsMasterContainer,
            ClientAccountsDetailContainer,
            AddClientAccountContainer,
            ClientAccountsFormGroupContainer,
            ClientAccountsOverviewContainer,
            ClientAccountsDetailHeaderComponent,
            ClientAccountsDetailFormComponent,
            ClientAccountsDetailComplianceComponent,
            ClientAccountsMasterListComponent,
            ClientAccountStatusMenuComponent,
            ClientAccountAssignmentSelectorComponent,
            ClientAccountsStatusWidgetComponent,
            ClientAccountsProgressWidgetComponent,
            ClientDocumentsPageContainer,
            ClientDocumentsDetailContainer,
            ClientDocumentsMasterContainer,
            ClientDocumentsWidgetContainer,
            ClientDocumentsMasterListComponent,
            ClientDocumentMenuComponent,
            ClientDocumentAssignmentSelectorComponent,
            ContactsPageContainer,
            ContactsMasterContainer,
            ContactsDetailContainer,
            AddContactContainer,
            ContactsFormGroupContainer,
            ContactsWidgetContainer,
            HealthOccupationWidgetContainer,
            IncomeWidgetContainer,
            ContactsIntermediateWidgetContainer,
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
            MessagesPageContainer,
            MessagesMasterContainer,
            MessagesDetailContainer,
            MessagesFormGroupContainer,
            MessagesDetailHeaderComponent,
            MessagesDetailFormComponent,
            MessagesMasterListComponent,
            MessagesDetailListComponent,
            NotesPageContainer,
            NotesMasterContainer,
            NotesDetailContainer,
            AddNoteContainer,
            NotesEditorGroupContainer,
            NotesDetailHeaderComponent,
            NotesDetailEditorComponent,
            NotesMasterListComponent,
            AllActivitiesContainer,
            MessageActivityComponent,
            ActivitiesListComponent,
            TasksTodayContainer,
            TasksMasterContainer,
            TasksPageContainer,
            TasksFormGroupContainer,
            TasksWeekContainer,
            TasksNextWeekContainer,
            TasksMonthContainer,
            TasksAllContainer,
            TasksWidgetContainer,
            TasksListComponent,
            TaskItemComponent,
            TaskMenuComponent,
            EditTaskComponent,
            TasksHeaderComponent,
            TaskInfoComponent,
            TeamPageContainer,
            TeamMasterContainer,
            TeamDetailContainer,
            TeamAssignmentSelectorComponent,
            TeamMasterListComponent,
            AssignmentButtonLabelComponent,
            XAssetsWidgetContainer,
            XAssetTabComponent,
            AddXAssetTabComponent,
            XLiabilitiesWidgetContainer,
            XLiabilityTabComponent,
            AddXLiabilityTabComponent,
            XProtectionsWidgetContainer,
            XProtectionTabComponent,
            AddXProtectionTabComponent,
            XPensionsWidgetContainer,
            XPensionTabComponent,
            AddXPensionTabComponent,
            BankAccountsWidgetContainer,
            BankAccountTabComponent,
            AddBankAccountTabComponent
        ],
        exports: [
            ApplicationContainer,
            DefaultPageComponent,
        ],
        providers: [
            AppSandbox,
            AddressesSandbox,
            AddressesService,
            GoogleMapsService,
            ClientAccountsService,
            ClientAccountsSandbox,
            ClientDocumentsService,
            ClientDocumentsSandbox,
            BoxAPIService,
            ContactsSandbox,
            ContactsService,
            MessagesSandbox,
            MessagesService,
            NotesSandbox,
            NotesService,
            ActivitiesSandbox,
            ActivitiesService,
            SalesSandbox,
            SalesService,
            TasksSandbox,
            TasksService,
            UserDataService,
            TeamSandbox,
            XAssetsSandbox,
            XAssetsService,
            XLiabilitiesSandbox,
            XLiabilitiesService,
            XPensionsSandbox,
            XPensionsService,
            XProtectionsSandbox,
            XProtectionsService,
            BankAccountsSandbox,
            BankAccountsService,
            {
                provide: Http,
                useFactory: customHttpFactory,
                deps: [XHRBackend, RequestOptions, Store]
            }
        ]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
//# sourceMappingURL=index.js.map