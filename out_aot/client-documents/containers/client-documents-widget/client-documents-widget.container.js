var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import 'rxjs/add/observable/from';
import { ClientDocumentsSandbox } from "../../client-documents.sandbox";
export let ClientDocumentsWidgetContainer = class ClientDocumentsWidgetContainer {
    constructor(sb, route, router, el) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.el = el;
    }
    ngOnInit() {
        console.log('doc widget mode', this.mode);
        if (this.mode == "contacts") {
            this.getClientDocumentsByContact();
        }
        if (this.mode == "accounts") {
            this.getClientDocumentsByAccount();
        }
    }
    upload() {
        let inputEl = this.el.nativeElement.querySelector('#document-uploader2');
        let fileCount = inputEl.files.length;
        let formData = new FormData();
        console.log('upload from widget');
        this.route.params
            .take(1)
            .subscribe((params) => {
            if (fileCount > 0) {
                formData.append('file', inputEl.files.item(0));
                let fileName = inputEl.files.item(0).name;
                this.sb.uploadFile(fileName, params['id'], this.mode, formData);
            }
        });
    }
    getClientDocumentsByContact() {
        const params$ = this.route.params.take(1);
        this.clientDocuments$ = params$
            .take(1)
            .switchMap((params) => this.sb.fetchClientDocumentsByContact(params['id']));
    }
    getClientDocumentsByAccount() {
        const params$ = this.route.params.take(1);
        this.clientDocuments$ = params$
            .take(1)
            .switchMap((params) => this.sb.fetchClientDocumentsByAccount(params['id']));
        this.identificationDocuments$ = this.clientDocuments$
            .take(1)
            .map((docs) => docs.filter((doc) => doc.description == "Identification"));
        this.bankDocuments$ = this.clientDocuments$
            .take(1)
            .map((docs) => docs.filter((doc) => doc.description == "Bank Account"));
    }
    onUpdateContact(item) {
        console.log('contact emitted through container', item.clientDocument, item.contactId);
        this.sb.setContact(item.clientDocument, item.contactId);
        this.getClientDocumentsByContact();
    }
    onUpdateClientAccount(item) {
        this.sb.setAccount(item.clientDocument, item.accountId);
        this.getClientDocumentsByAccount();
    }
    onUpdateDescription(item) {
        this.sb.setDescription(item.clientDocument, item.description);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], ClientDocumentsWidgetContainer.prototype, "mode", void 0);
ClientDocumentsWidgetContainer = __decorate([
    Component({
        selector: "documents-widget",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <h2 class="widget widget-head">Documents</h2>


    <div fxLayout="row">
        <div md-button class="fileUpload" type="button">
            <span style="color: #838383">&nbsp;&nbsp;Add New Document</span>
            <input type="file" id="document-uploader2" class="upload"/>
        </div>
        <button md-icon-button type="button" (click)="upload()">
            <md-icon>cloud_upload</md-icon>
        </button>
    </div>
    
    <client-documents-master-list 
        (updateContact)="onUpdateContact($event)"
        (updateClientAccount)="onUpdateClientAccount($event)"
        (updateDescription)="onUpdateDescription($event)"
        [clientDocuments]="clientDocuments$ | async">
    </client-documents-master-list>
    
    
    `
    }), 
    __metadata('design:paramtypes', [ClientDocumentsSandbox, ActivatedRoute, Router, ElementRef])
], ClientDocumentsWidgetContainer);
//# sourceMappingURL=client-documents-widget.container.js.map