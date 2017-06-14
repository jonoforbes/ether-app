import { ClientDocumentsService } from "./services/client-documents.service";
import { BoxAPIService, BoxResults, BoxEntry } from "./services/box-api.service";
import { Injectable } from "@angular/core";
import { ClientDocument } from "./entities/ClientDocument";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddClientDocument,
    UpdateClientDocument,
    RemoveClientDocument,
    UpdateClientDocumentAccount,
    UpdateClientDocumentContact,
    UpdateClientDocumentSale,
    UpdateClientDocumentDescription } from "../statemanagement/actions/data/client-document";

@Injectable()
export class ClientDocumentsSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    clientDocuments$ = this.store.select(state => state.data.clientDocuments);
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
    boxAccessToken$ = this.store.select(state => state.data.authentication.account.boxAccessToken);
    
    clientDocument = new ClientDocument();

    constructor(private store: Store<ApplicationState>,
                private clientDocumentsService: ClientDocumentsService,
                private boxService: BoxAPIService) {

    }
    sub: any;

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    getBoxFiles(): void {
        this.boxAccessToken$
        .take(1)
        .subscribe(token => {
            let boxToken = token;
            console.log('box token in sandbox', boxToken);
            this.boxService.getFiles(boxToken)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((boxResults: BoxResults) => {
                console.log(boxResults);
            });
        });
        
    }

    getBoxFile(boxFileId: string): Observable<BoxEntry> {
        return this.boxAccessToken$
        .take(1)
        .switchMap(token => {
            let boxToken = token;
            console.log(boxToken);
            return this.boxService.getFile(boxToken, boxFileId);
        })

    }

    // getBoxFile(boxFileId: string): void {
    //     this.boxAccessToken$
    //     .takeUntil(this.ngUnsubscribe)
    //     .subscribe(token => {
    //         let boxToken = token;
    //         this.boxService.getFile(boxToken, boxFileId)
    //         .takeUntil(this.ngUnsubscribe)
    //         .map((boxEntry: BoxEntry) => {
                
    //         })
    //     });
        
    // }

    uploadFile(fileName: string, id: string, mode: string, formData: FormData): void {
        console.log('file name', fileName);
        let attributes = {"name":fileName,"parent":{"id":"0"}};
        let stringAttributes: string = JSON.stringify(attributes);
        let regexedAttributes = stringAttributes.replace(/\\/g, "");
        console.log(regexedAttributes);
        formData.append('attributes', regexedAttributes);
        this.boxAccessToken$
        .take(1)
        .subscribe(token => {
            let boxToken = token;
            console.log(formData);
            this.boxService.uploadFile(boxToken, formData)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((boxResults: BoxResults) => {
                if (boxResults.entries.length) {
                    var contactId: string = "";
                    let accountId: string = "";    
                    if (mode == "contacts") {
                        contactId = id;
                    }
                    if (mode == "accounts") {
                        accountId = id;
                    }
                    
                    let name: string = boxResults.entries[0].name;
                    let boxFileId: string = boxResults.entries[0].id;
                    console.log('name', name);
                    console.log('boxFileId', boxFileId);
                    console.log('account', accountId);
                    console.log('contact', contactId);
                    this.addClientDocument(Object.assign(this.clientDocument, {name, boxFileId, contactId, accountId}));
                }
                else {
                    console.log('fail bro');
                }
            })
        });
    }

    addClientDocument(clientDocument: ClientDocument): void {
        this.clientDocumentsService.add(clientDocument)
        .take(1)
        .subscribe((clientDocument: ClientDocument) => {
            this.store.dispatch(new AddClientDocument(clientDocument));
        }, () => this.handleError());
    }

    updateClientDocument(id: string, clientDocument: ClientDocument): void {
        let action = new UpdateClientDocument(id, clientDocument);
        this.store.dispatch(action);
        this.clientDocumentsService.update(id, clientDocument)
        .take(1)
        .subscribe(() => {   
        }, () => this.handleError(action));
    }

    fetchClientDocument(id: string): Observable<ClientDocument> {
        return this.clientDocuments$
        .take(1)
        .switchMap((clientDocuments: ClientDocument[]) => {
            return clientDocuments.filter((clientDocument: ClientDocument) => {
                return clientDocument._id == id;
            });
        });
    }

    removeClientDocument(clientDocument: ClientDocument): void {
        let action = new RemoveClientDocument(clientDocument._id);
        this.store.dispatch(action);
        this.clientDocumentsService.remove(clientDocument)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    setDescription(clientDocument: ClientDocument, description: string): void {
        let action = new UpdateClientDocumentDescription(clientDocument._id, description);
        this.store.dispatch(action);
        this.clientDocumentsService.setDescription(clientDocument, description)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError());
    }

    setAccount(clientDocument: ClientDocument, id: string): void {
        let action = new UpdateClientDocumentAccount(clientDocument._id, id);
        this.store.dispatch(action);
        this.clientDocumentsService.setAccount(clientDocument, id)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError());
    }

    fetchClientDocumentsByAccount(id: string): Observable<Array<ClientDocument>> {
        return this.clientDocuments$
        .takeUntil(this.ngUnsubscribe)
        .map((clientDocuments: any) => {
            return clientDocuments.filter((clientDocument: ClientDocument) => {
                return clientDocument.accountId == id;
            });
        });
    }

    setContact(clientDocument: ClientDocument, id: string): void {
        let action = new UpdateClientDocumentContact(clientDocument._id, id);
        this.store.dispatch(action);
        this.clientDocumentsService.setContact(clientDocument, id)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError());
    }

    fetchClientDocumentsByContact(id: string): Observable<Array<ClientDocument>> {
        return this.clientDocuments$
        .takeUntil(this.ngUnsubscribe)
        .map((clientDocuments: any) => {
            return clientDocuments.filter((clientDocument: ClientDocument) => {
                return clientDocument.contactId == id;
            });
        });
    }

    setSale(clientDocument: ClientDocument, id: string): void {
        let action = new UpdateClientDocumentSale(clientDocument._id, id);
        this.store.dispatch(action);
        this.clientDocumentsService.setSale(clientDocument, id)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError());
    }

    fetchClientDocumentsBySale(id: string): Observable<Array<ClientDocument>> {
        return this.clientDocuments$
        .take(1)
        .map((clientDocument: any) => {
            return clientDocument.filter((clientDocument: ClientDocument) => {
                return clientDocument.saleId == id;
            });
        });
    }


    private handleError(action?: Action): void {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({type: UNDO_ACTION, payload: action});
        }
    }
}    