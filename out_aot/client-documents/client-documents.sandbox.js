var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ClientDocumentsService } from "./services/client-documents.service";
import { BoxAPIService } from "./services/box-api.service";
import { Injectable } from "@angular/core";
import { ClientDocument } from "./entities/ClientDocument";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddClientDocument, UpdateClientDocument, RemoveClientDocument, UpdateClientDocumentAccount, UpdateClientDocumentContact, UpdateClientDocumentSale, UpdateClientDocumentDescription } from "../statemanagement/actions/data/client-document";
export let ClientDocumentsSandbox = class ClientDocumentsSandbox {
    constructor(store, clientDocumentsService, boxService) {
        this.store = store;
        this.clientDocumentsService = clientDocumentsService;
        this.boxService = boxService;
        this.ngUnsubscribe = new Subject();
        this.clientDocuments$ = this.store.select(state => state.data.clientDocuments);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
        this.isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
        this.boxAccessToken$ = this.store.select(state => state.data.authentication.account.boxAccessToken);
        this.clientDocument = new ClientDocument();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    getBoxFiles() {
        this.boxAccessToken$
            .take(1)
            .subscribe(token => {
            let boxToken = token;
            console.log('box token in sandbox', boxToken);
            this.boxService.getFiles(boxToken)
                .takeUntil(this.ngUnsubscribe)
                .subscribe((boxResults) => {
                console.log(boxResults);
            });
        });
    }
    getBoxFile(boxFileId) {
        return this.boxAccessToken$
            .take(1)
            .switchMap(token => {
            let boxToken = token;
            console.log(boxToken);
            return this.boxService.getFile(boxToken, boxFileId);
        });
    }
    uploadFile(fileName, id, mode, formData) {
        console.log('file name', fileName);
        let attributes = { "name": fileName, "parent": { "id": "0" } };
        let stringAttributes = JSON.stringify(attributes);
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
                .subscribe((boxResults) => {
                if (boxResults.entries.length) {
                    var contactId = "";
                    let accountId = "";
                    if (mode == "contacts") {
                        contactId = id;
                    }
                    if (mode == "accounts") {
                        accountId = id;
                    }
                    let name = boxResults.entries[0].name;
                    let boxFileId = boxResults.entries[0].id;
                    console.log('name', name);
                    console.log('boxFileId', boxFileId);
                    console.log('account', accountId);
                    console.log('contact', contactId);
                    this.addClientDocument(Object.assign(this.clientDocument, { name, boxFileId, contactId, accountId }));
                }
                else {
                    console.log('fail bro');
                }
            });
        });
    }
    addClientDocument(clientDocument) {
        this.clientDocumentsService.add(clientDocument)
            .take(1)
            .subscribe((clientDocument) => {
            this.store.dispatch(new AddClientDocument(clientDocument));
        }, () => this.handleError());
    }
    updateClientDocument(id, clientDocument) {
        let action = new UpdateClientDocument(id, clientDocument);
        this.store.dispatch(action);
        this.clientDocumentsService.update(id, clientDocument)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchClientDocument(id) {
        return this.clientDocuments$
            .take(1)
            .switchMap((clientDocuments) => {
            return clientDocuments.filter((clientDocument) => {
                return clientDocument._id == id;
            });
        });
    }
    removeClientDocument(clientDocument) {
        let action = new RemoveClientDocument(clientDocument._id);
        this.store.dispatch(action);
        this.clientDocumentsService.remove(clientDocument)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    setDescription(clientDocument, description) {
        let action = new UpdateClientDocumentDescription(clientDocument._id, description);
        this.store.dispatch(action);
        this.clientDocumentsService.setDescription(clientDocument, description)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError());
    }
    setAccount(clientDocument, id) {
        let action = new UpdateClientDocumentAccount(clientDocument._id, id);
        this.store.dispatch(action);
        this.clientDocumentsService.setAccount(clientDocument, id)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError());
    }
    fetchClientDocumentsByAccount(id) {
        return this.clientDocuments$
            .takeUntil(this.ngUnsubscribe)
            .map((clientDocuments) => {
            return clientDocuments.filter((clientDocument) => {
                return clientDocument.accountId == id;
            });
        });
    }
    setContact(clientDocument, id) {
        let action = new UpdateClientDocumentContact(clientDocument._id, id);
        this.store.dispatch(action);
        this.clientDocumentsService.setContact(clientDocument, id)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError());
    }
    fetchClientDocumentsByContact(id) {
        return this.clientDocuments$
            .takeUntil(this.ngUnsubscribe)
            .map((clientDocuments) => {
            return clientDocuments.filter((clientDocument) => {
                return clientDocument.contactId == id;
            });
        });
    }
    setSale(clientDocument, id) {
        let action = new UpdateClientDocumentSale(clientDocument._id, id);
        this.store.dispatch(action);
        this.clientDocumentsService.setSale(clientDocument, id)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError());
    }
    fetchClientDocumentsBySale(id) {
        return this.clientDocuments$
            .take(1)
            .map((clientDocument) => {
            return clientDocument.filter((clientDocument) => {
                return clientDocument.saleId == id;
            });
        });
    }
    handleError(action) {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({ type: UNDO_ACTION, payload: action });
        }
    }
};
ClientDocumentsSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, ClientDocumentsService, BoxAPIService])
], ClientDocumentsSandbox);
//# sourceMappingURL=client-documents.sandbox.js.map