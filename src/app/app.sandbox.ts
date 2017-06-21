import { Injectable } from "@angular/core";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store } from "@ngrx/store";

import { AuthenticationService } from "../authentication/services/authentication.service";
// import { StockService } from "../stock/services/stock.service";
import { ContactsService } from "../contacts/services/contacts.service";
import { NotesService } from "../notes/services/notes.service";
import { UserDataService } from "../team/services/user-data.service";
import { MessagesService } from "../messages/services/messages.service";
import { AddressesService } from "../addresses/services/addresses.service";
import { ClientAccountsService } from "../client-accounts/services/client-accounts.service";
// import { AppointmentsService } from "../calendar/services/appointments.service";
import { ClientDocumentsService } from "../client-documents/services/client-documents.service";
import { SalesService } from "../sales/services/sales.service";
import { TasksService } from "../tasks/services/tasks.service";
import { ActivitiesService } from "../activities/services/activities.service";
// import { ProductsService } from "../markets/services/products.service";
import { XAssetsService } from "../xassets/services/xassets.service";
import { XLiabilitiesService } from "../xliabilities/services/xliabilities.service";
import { XPensionsService } from "../xpensions/services/xpensions.service";
import { XProtectionsService } from "../xprotections/services/xprotections.service";
import { BankAccountsService } from "../bank-accounts/services/bank-accounts.service";
import { CommentsService } from "../comments/services/comments.service";
import { RealTime } from "../common/realtime";


import { Contact } from "../contacts/entities/Contact";
import { Note } from "../notes/entities/Note";
import { Message } from "../messages/entities/Message";
import { UserData } from "../team/entities/UserData";
import { Address } from "../addresses/entities/Address";
import { ClientAccount } from "../client-accounts/entities/ClientAccount";
// import { Appointment } from "../calendar/entities/Appointment";
import { ClientDocument } from "../client-documents/entities/ClientDocument";
import { Sale } from "../sales/entities/Sale";
import { Task } from "../tasks/entities/Task";
import { Activity } from "../activities/entities/Activity";
// import { Product } from "../markets/entities/Product";
import { XAsset } from "../xassets/entities/XAsset";
import { XLiability } from "../xliabilities/entities/XLiability";
import { XPension } from "../xpensions/entities/XPension";
import { XProtection } from "../xprotections/entities/XProtection";
import { BankAccount } from "../bank-accounts/entities/BankAccount";
import { Comment } from "../comments/entities/Comment";

import { LOCALSTORAGE_AUTH } from "../configuration";

import { ClearAuthentication, SetAuthentication } from "../statemanagement/actions/data/autentication";
import { SetAllContacts } from "../statemanagement/actions/data/contact";
import { SetAllNotes } from "../statemanagement/actions/data/note";
import { SetAllUserData } from "../statemanagement/actions/data/user-data";
import { SetAllMessages } from "../statemanagement/actions/data/message";
import { SetAllAddresses } from "../statemanagement/actions/data/address";
import { SetAllClientAccounts } from "../statemanagement/actions/data/client-account";
// import { SetAllAppointments } from "../statemanagement/actions/data/appointment";
import { SetAllClientDocuments } from "../statemanagement/actions/data/client-document";
import { SetAllSales } from "../statemanagement/actions/data/sale";
import { SetAllTasks } from "../statemanagement/actions/data/task";
import { SetAllActivities } from "../statemanagement/actions/data/activity";
// import { SetAllProducts } from "../statemanagement/actions/data/product";
import { SetAllXAssets } from "../statemanagement/actions/data/xasset";
import { SetAllXLiabilities } from "../statemanagement/actions/data/xliability";
import { SetAllXPensions } from "../statemanagement/actions/data/xpension";
import { SetAllXProtections } from "../statemanagement/actions/data/xprotection";
import { SetAllBankAccounts } from "../statemanagement/actions/data/bank-account";
import { SetAllComments } from "../statemanagement/actions/data/comment";
import { ToggleActivitiesBar, SetActivitiesBarMode } from "../statemanagement/actions/containers/activities-bar";


@Injectable()
export class AppSandbox {
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    isBusy$ = this.store.select(state => state.containers.application.isBusy);
    account$ = this.store.select(state => state.data.authentication.account);
    isCollapsed$ = this.store.select(state => state.containers.activitiesBar.isCollapsed);
    activitiesBarMode$ = this.store.select(state => state.containers.activitiesBar.mode);

    constructor(private store: Store<ApplicationState>, 
                private authenticationService: AuthenticationService,
                // private stockService: StockService, 
                private contactsService: ContactsService,
                private notesService: NotesService,
                private userDataService: UserDataService,
                private messagesService: MessagesService,
                private addressesService: AddressesService,
                private clientAccountsService: ClientAccountsService,
                // private appointmentsService: AppointmentsService,
                private clientDocumentsService: ClientDocumentsService,
                private salesService: SalesService,
                private tasksService: TasksService,
                private activitiesService: ActivitiesService,
                // private productsService: ProductsService,
                private xAssetsService: XAssetsService,
                private xLiabilitiesService: XLiabilitiesService,
                private xPensionsService: XPensionsService,
                private xProtectionsService: XProtectionsService,
                private bankAccountsService: BankAccountsService,
                private commentsService: CommentsService,
                private realTime: RealTime) {
    }


    logout(): void {
        localStorage.removeItem(LOCALSTORAGE_AUTH);
        this.store.dispatch(new ClearAuthentication());
        this.realTime.disconnect();
    }

    checkInitialAuthentication(): void {
        let obj = this.authenticationService.checkInitialAuthentication();
        if (obj) {
            // evil fix for bug in @ngrx/dev-tools
            // https://github.com/ngrx/store-devtools/issues/25
            setTimeout(() => {
                this.store.dispatch(new SetAuthentication(obj));
            });
        }
    }


    loadData(): void {
        this.contactsService.load().subscribe((contacts: Array<Contact>) => {
            this.store.dispatch(new SetAllContacts(contacts));
            console.log('setting contacts');
        });
        // this.stockService.load().subscribe((wines: Array<Wine>) => {
        //     this.store.dispatch(new SetAllWines(wines));
        //     console.log('setting stock');
        // });
        this.notesService.load().subscribe((notes: Array<Note>) => {
            this.store.dispatch(new SetAllNotes(notes));
            console.log('setting notes');
        });
        this.userDataService.load().subscribe((userData: Array<UserData>) => {
            this.store.dispatch(new SetAllUserData(userData));
            console.log('setting other users');
        });
        this.messagesService.load().subscribe((messages: Array<Message>) => {
            this.store.dispatch(new SetAllMessages(messages));
            console.log('setting messages');
        });
        this.addressesService.load().subscribe((addresses: Array<Address>) => {
            this.store.dispatch(new SetAllAddresses(addresses));
            console.log('setting addresses');
        });
        this.clientAccountsService.load().subscribe((clientAccounts: Array<ClientAccount>) => {
            this.store.dispatch(new SetAllClientAccounts(clientAccounts));
            console.log('setting accounts');
        });
        // this.appointmentsService.load().subscribe((appointments: Array<Appointment>) => {
        //     this.store.dispatch(new SetAllAppointments(appointments));
        //     console.log('setting appointments');
        // });
        this.clientDocumentsService.load().subscribe((clientDocuments: Array<ClientDocument>) => {
            this.store.dispatch(new SetAllClientDocuments(clientDocuments));
            console.log('setting documents');
        });
        this.salesService.load().subscribe((sales: Array<Sale>) => {
            this.store.dispatch(new SetAllSales(sales));
            console.log('setting sales');
        });
        this.tasksService.load().subscribe((tasks: Array<Task>) => {
            this.store.dispatch(new SetAllTasks(tasks));
            console.log('setting tasks');
        });
        this.activitiesService.load().subscribe((activities: Array<Activity>) => {
            this.store.dispatch(new SetAllActivities(activities));
            console.log('setting activities');
        });
        // this.productsService.load().subscribe((products: Array<Product>) => {
        //     this.store.dispatch(new SetAllProducts(products));
        //     console.log('setting products');
        // })
        this.xAssetsService.load().subscribe((xAssets: Array<XAsset>) => {
            this.store.dispatch(new SetAllXAssets(xAssets));
            console.log('setting assets');
        });
        this.xLiabilitiesService.load().subscribe((xLiabilities: Array<XLiability>) => {
            this.store.dispatch(new SetAllXLiabilities(xLiabilities));
            console.log('setting liabilities');
        });
        this.xPensionsService.load().subscribe((xPensions: Array<XPension>) => {
            this.store.dispatch(new SetAllXPensions(xPensions));
            console.log('setting pensions');
        });
        this.xProtectionsService.load().subscribe((xProtections: Array<XProtection>) => {
            this.store.dispatch(new SetAllXProtections(xProtections));
            console.log('setting protections');
        });
        this.bankAccountsService.load().subscribe((bankAccounts: Array<BankAccount>) => {
            this.store.dispatch(new SetAllBankAccounts(bankAccounts));
            console.log('setting bank accounts');
        });
        this.commentsService.load().subscribe((comments: Array<Comment>) => {
            this.store.dispatch(new SetAllComments(comments));
            console.log('setting comments');
        });

    }

    connectRealTime(): void {
        this.realTime.connect();
    }

    toggleActivitiesBar(): void {
        this.store.dispatch(new ToggleActivitiesBar());
    }
    
    setActivitiesBarMode(mode: string): void {
        this.store.dispatch(new SetActivitiesBarMode(mode));
    }
}