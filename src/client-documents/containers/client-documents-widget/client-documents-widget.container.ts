import { Component, Input, Output, OnInit, ElementRef, ChangeDetectionStrategy } from "@angular/core";
import { ClientDocument } from "../../entities/ClientDocument";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/from';
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { ClientDocumentsSandbox } from "../../client-documents.sandbox";
import { ClientDocumentsMasterListComponent } from "../../components/master-list/master-list.component";


@Component({
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
})
export class ClientDocumentsWidgetContainer implements OnInit {
    @Input() mode: string;
    clientDocuments$: Observable<Array<ClientDocument>>;
    id$: Observable<String>;

    identificationDocuments$: Observable<Array<ClientDocument>>;
    bankDocuments$: Observable<Array<ClientDocument>>;
    contractDocuments$: Observable<Array<ClientDocument>>;
    correspondenceDocuments$: Observable<Array<ClientDocument>>;
    reportDocuments$: Observable<Array<ClientDocument>>;
    otherDocuments$: Observable<Array<ClientDocument>>;

    



    constructor(private sb: ClientDocumentsSandbox,
                private route: ActivatedRoute,
                private router: Router,
                private el: ElementRef) {

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
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#document-uploader2');

    let fileCount = inputEl.files.length;
    let formData = new FormData();
    console.log('upload from widget');
    this.route.params
    .take(1)
    .subscribe((params: Params) => {

    if (fileCount > 0) {
        formData.append('file', inputEl.files.item(0));
        let fileName = inputEl.files.item(0).name;
        this.sb.uploadFile(fileName, params['id'], this.mode, formData);

    }
    })


    }

    

    getClientDocumentsByContact() {
        const params$ = this.route.params.take(1);
        this.clientDocuments$ = params$
        .take(1)
        .switchMap((params: Params) => this.sb.fetchClientDocumentsByContact(params['id']));
    }

     getClientDocumentsByAccount() {
        const params$ = this.route.params.take(1);
        this.clientDocuments$ = params$
        .take(1)
        .switchMap((params: Params) => this.sb.fetchClientDocumentsByAccount(params['id']));
        this.identificationDocuments$ = this.clientDocuments$
            .take(1)
            .map((docs: ClientDocument[]) => docs.filter((doc: ClientDocument) => doc.description == "Identification"));
        this.bankDocuments$ = this.clientDocuments$
            .take(1)
            .map((docs: ClientDocument[]) => docs.filter((doc: ClientDocument) => doc.description == "Bank Account"))
    }

    onUpdateContact(item: {clientDocument: ClientDocument, contactId: string}): void {
        console.log('contact emitted through container', item.clientDocument, item.contactId);
        this.sb.setContact(item.clientDocument, item.contactId);
        this.getClientDocumentsByContact();
    }

    onUpdateClientAccount(item: {clientDocument: ClientDocument, accountId: string}): void {
        this.sb.setAccount(item.clientDocument, item.accountId);
        this.getClientDocumentsByAccount();
    }
    onUpdateDescription(item: {clientDocument: ClientDocument, description: string}): void {
        this.sb.setDescription(item.clientDocument, item.description);
    }
}