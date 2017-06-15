var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AuthenticationService } from "../authentication/services/authentication.service";
import { ContactsService } from "../contacts/services/contacts.service";
import { NotesService } from "../notes/services/notes.service";
import { UserDataService } from "../team/services/user-data.service";
import { MessagesService } from "../messages/services/messages.service";
import { AddressesService } from "../addresses/services/addresses.service";
import { ClientAccountsService } from "../client-accounts/services/client-accounts.service";
import { ClientDocumentsService } from "../client-documents/services/client-documents.service";
import { SalesService } from "../sales/services/sales.service";
import { TasksService } from "../tasks/services/tasks.service";
import { ActivitiesService } from "../activities/services/activities.service";
import { XAssetsService } from "../xassets/services/xassets.service";
import { XLiabilitiesService } from "../xliabilities/services/xliabilities.service";
import { XPensionsService } from "../xpensions/services/xpensions.service";
import { XProtectionsService } from "../xprotections/services/xprotections.service";
import { BankAccountsService } from "../bank-accounts/services/bank-accounts.service";
import { CommentsService } from "../comments/services/comments.service";
import { RealTime } from "../common/realtime";
import { LOCALSTORAGE_AUTH } from "../configuration";
import { ClearAuthentication, SetAuthentication } from "../statemanagement/actions/data/autentication";
import { SetAllContacts } from "../statemanagement/actions/data/contact";
import { SetAllNotes } from "../statemanagement/actions/data/note";
import { SetAllUserData } from "../statemanagement/actions/data/user-data";
import { SetAllMessages } from "../statemanagement/actions/data/message";
import { SetAllAddresses } from "../statemanagement/actions/data/address";
import { SetAllClientAccounts } from "../statemanagement/actions/data/client-account";
import { SetAllClientDocuments } from "../statemanagement/actions/data/client-document";
import { SetAllSales } from "../statemanagement/actions/data/sale";
import { SetAllTasks } from "../statemanagement/actions/data/task";
import { SetAllActivities } from "../statemanagement/actions/data/activity";
import { SetAllXAssets } from "../statemanagement/actions/data/xasset";
import { SetAllXLiabilities } from "../statemanagement/actions/data/xliability";
import { SetAllXPensions } from "../statemanagement/actions/data/xpension";
import { SetAllXProtections } from "../statemanagement/actions/data/xprotection";
import { SetAllBankAccounts } from "../statemanagement/actions/data/bank-account";
import { SetAllComments } from "../statemanagement/actions/data/comment";
import { ToggleActivitiesBar } from "../statemanagement/actions/containers/activities-bar";
export let AppSandbox = class AppSandbox {
    constructor(store, authenticationService, contactsService, notesService, userDataService, messagesService, addressesService, clientAccountsService, clientDocumentsService, salesService, tasksService, activitiesService, xAssetsService, xLiabilitiesService, xPensionsService, xProtectionsService, bankAccountsService, commentsService, realTime) {
        this.store = store;
        this.authenticationService = authenticationService;
        this.contactsService = contactsService;
        this.notesService = notesService;
        this.userDataService = userDataService;
        this.messagesService = messagesService;
        this.addressesService = addressesService;
        this.clientAccountsService = clientAccountsService;
        this.clientDocumentsService = clientDocumentsService;
        this.salesService = salesService;
        this.tasksService = tasksService;
        this.activitiesService = activitiesService;
        this.xAssetsService = xAssetsService;
        this.xLiabilitiesService = xLiabilitiesService;
        this.xPensionsService = xPensionsService;
        this.xProtectionsService = xProtectionsService;
        this.bankAccountsService = bankAccountsService;
        this.commentsService = commentsService;
        this.realTime = realTime;
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
        this.isBusy$ = this.store.select(state => state.containers.application.isBusy);
        this.account$ = this.store.select(state => state.data.authentication.account);
        this.isCollapsed$ = this.store.select(state => state.containers.activitiesBar.isCollapsed);
        this.activitiesBarMode$ = this.store.select(state => state.containers.activitiesBar.mode);
    }
    logout() {
        localStorage.removeItem(LOCALSTORAGE_AUTH);
        this.store.dispatch(new ClearAuthentication());
        this.realTime.disconnect();
    }
    checkInitialAuthentication() {
        let obj = this.authenticationService.checkInitialAuthentication();
        if (obj) {
            setTimeout(() => {
                this.store.dispatch(new SetAuthentication(obj));
            });
        }
    }
    loadData() {
        this.contactsService.load().subscribe((contacts) => {
            this.store.dispatch(new SetAllContacts(contacts));
            console.log('setting contacts');
        });
        this.notesService.load().subscribe((notes) => {
            this.store.dispatch(new SetAllNotes(notes));
            console.log('setting notes');
        });
        this.userDataService.load().subscribe((userData) => {
            this.store.dispatch(new SetAllUserData(userData));
            console.log('setting other users');
        });
        this.messagesService.load().subscribe((messages) => {
            this.store.dispatch(new SetAllMessages(messages));
            console.log('setting messages');
        });
        this.addressesService.load().subscribe((addresses) => {
            this.store.dispatch(new SetAllAddresses(addresses));
            console.log('setting addresses');
        });
        this.clientAccountsService.load().subscribe((clientAccounts) => {
            this.store.dispatch(new SetAllClientAccounts(clientAccounts));
            console.log('setting accounts');
        });
        this.clientDocumentsService.load().subscribe((clientDocuments) => {
            this.store.dispatch(new SetAllClientDocuments(clientDocuments));
            console.log('setting documents');
        });
        this.salesService.load().subscribe((sales) => {
            this.store.dispatch(new SetAllSales(sales));
            console.log('setting sales');
        });
        this.tasksService.load().subscribe((tasks) => {
            this.store.dispatch(new SetAllTasks(tasks));
            console.log('setting tasks');
        });
        this.activitiesService.load().subscribe((activities) => {
            this.store.dispatch(new SetAllActivities(activities));
            console.log('setting activities');
        });
        this.xAssetsService.load().subscribe((xAssets) => {
            this.store.dispatch(new SetAllXAssets(xAssets));
            console.log('setting assets');
        });
        this.xLiabilitiesService.load().subscribe((xLiabilities) => {
            this.store.dispatch(new SetAllXLiabilities(xLiabilities));
            console.log('setting liabilities');
        });
        this.xPensionsService.load().subscribe((xPensions) => {
            this.store.dispatch(new SetAllXPensions(xPensions));
            console.log('setting pensions');
        });
        this.xProtectionsService.load().subscribe((xProtections) => {
            this.store.dispatch(new SetAllXProtections(xProtections));
            console.log('setting protections');
        });
        this.bankAccountsService.load().subscribe((bankAccounts) => {
            this.store.dispatch(new SetAllBankAccounts(bankAccounts));
            console.log('setting bank accounts');
        });
        this.commentsService.load().subscribe((comments) => {
            this.store.dispatch(new SetAllComments(comments));
            console.log('setting comments');
        });
    }
    connectRealTime() {
        this.realTime.connect();
    }
    toggleActivitiesBar() {
        this.store.dispatch(new ToggleActivitiesBar());
    }
};
AppSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, AuthenticationService, ContactsService, NotesService, UserDataService, MessagesService, AddressesService, ClientAccountsService, ClientDocumentsService, SalesService, TasksService, ActivitiesService, XAssetsService, XLiabilitiesService, XPensionsService, XProtectionsService, BankAccountsService, CommentsService, RealTime])
], AppSandbox);
//# sourceMappingURL=app.sandbox.js.map