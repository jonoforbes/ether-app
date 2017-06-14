import { Component, ElementRef, ChangeDetectionStrategy } from "@angular/core";
import { ClientDocument } from "../../entities/ClientDocument";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { ClientDocumentsSandbox } from "../../client-documents.sandbox";
import { ClientDocumentsMasterListComponent } from "../../components/master-list/master-list.component";

@Component({
    selector: "client-documents-master",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <md-input-container floatingPlaceholder="false" class="etherSearch" dividerColor="#7BACC9">
        <input mdInput placeholder="Search Documents" style="width: 120px; margin-top: -10px; margin-left: 5px; color: #838383 !important;" [formControl]="searchCtrl">
        <button md-icon-button style="margin-left: 120px; margin-top: -50px !important;"><md-icon style="color: #838383; width: 20px;">search</md-icon></button>
      </md-input-container>
      <div fxLayout="row">
        <div md-button class="fileUpload" type="button">
            <span style="color: #838383">Add New Document</span>
            <input type="file" id="document-uploader" class="upload"/>
        </div>
        <button md-icon-button type="button" (click)="upload()">
            <md-icon>cloud_upload</md-icon>
        </button>
    </div>
<client-documents-master-list 
    (updateContact)="onUpdateContact($event)"
    (updateClientAccount)="onUpdateClientAccount($event)"
    (updateDescription)="onUpdateDescription($event)"
    [clientDocuments]="matchingClientDocuments$ | async">
</client-documents-master-list>
    `
})
export class ClientDocumentsMasterContainer {
    searchCtrl = new FormControl("");
    mode: string = "documents";
    id: string = "";

    upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#document-uploader');
    
    let fileCount = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
        formData.append('file', inputEl.files.item(0));
        let fileName = inputEl.files.item(0).name;
        this.sb.uploadFile(fileName, this.id, this.mode, formData);

    }


    }

    clientDocuments$ = this.sb.clientDocuments$;
    matchingClientDocuments$ = Observable.combineLatest(this.searchCtrl.valueChanges.startWith(""), this.clientDocuments$,
    (term: string, clientDocuments: Array<ClientDocument>) => {
        return clientDocuments.filter(item => item.name.toLowerCase().indexOf(term) > -1);
    });

    constructor(private sb: ClientDocumentsSandbox,
                private el: ElementRef) {

    }

    onUpdateContact(item: {clientDocument: ClientDocument, contactId: string}): void {
        console.log('doc emitted through container', item.clientDocument, item.contactId);
        this.sb.setContact(item.clientDocument, item.contactId);
    }

    onUpdateClientAccount(item: {clientDocument: ClientDocument, accountId: string}): void {
        this.sb.setAccount(item.clientDocument, item.accountId);
    }
    onUpdateDescription(item: {clientDocument: ClientDocument, description: string}): void {
        this.sb.setDescription(item.clientDocument, item.description);
    }
}