import { Contact } from "../../contacts/entities/Contact";
import { Account } from "../../authentication/types/Account";
import { Note } from "../../notes/entities/Note";
import { Message } from "../../messages/entities/Message";
import { UserData } from "../../team/entities/UserData";
import { Address } from "../../addresses/entities/Address";
import { ClientAccount } from "../../client-accounts/entities/ClientAccount";
import { Appointment } from "../../calendar/entities/Appointment";
import { Product } from "../../markets/entities/Product";
import { Task } from "../../tasks/entities/Task";
import { ClientDocument } from "../../client-documents/entities/ClientDocument";
import { Sale } from "../../sales/entities/Sale";
import { Activity } from "../../activities/entities/Activity";
import { XAsset } from "../../xassets/entities/XAsset";
import { XLiability } from "../../xliabilities/entities/XLiability";
import { XPension } from "../../xpensions/entities/XPension";
import { XProtection } from "../../xprotections/entities/XProtection";
import { BankAccount } from "../../bank-accounts/entities/BankAccount";

export interface DataState {
    authentication: AuthenticationDataState;
    contacts: Array<Contact>;
    notes: Array<Note>;
    messages: Array<Message>;
    userData: Array<UserData>;
    addresses: Array<Address>;
    clientAccounts: Array<ClientAccount>;
    appointments: Array<Appointment>;
    products: Array<Product>;
    tasks: Array<Task>;
    clientDocuments: Array<ClientDocument>;
    sales: Array<Sale>;
    activities: Array<Activity>;
    xAssets: Array<XAsset>;
    xLiabilities: Array<XLiability>;
    xPensions: Array<XPension>;
    xProtections: Array<XProtection>;
    bankAccounts: Array<BankAccount>;
}

export interface AuthenticationDataState {
    isAuthenticated: boolean;
    jwtToken: string;
    account: Account;
}