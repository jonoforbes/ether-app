var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { Subject } from "rxjs/Subject";
import { ClientDocumentsSandbox } from "../../client-documents.sandbox";
export let ClientDocumentsDetailContainer = class ClientDocumentsDetailContainer {
    constructor(sb, route, router, sanitizer) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.ngUnsubscribe = new Subject();
        this.ACCESS_TOKEN = "EqFyi1Yq1tD9mxY8F38sxDfp73pFd7FP";
        this.FILE_ID_DOC = '93392244621';
        this.FILE_ID_VIDEO = '101504801571';
        this.FILE_ID_3D = '101532838591';
        this.fileReceived = false;
        this.xboxUrl = `https://app.box.com/embed/file/101532838591?view_file_only=true`;
    }
    updateSrc(url) {
        this.boxUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        console.log('url', this.boxUrl);
        this.fileReceived = true;
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    ngOnInit() {
        const params$ = this.route.params;
        this.activeClientDocument$ = params$.switchMap((params) => this.sb.fetchClientDocument(params['id']));
        this.activeClientDocument$
            .takeUntil(this.ngUnsubscribe)
            .subscribe(item => {
            this.sb.getBoxFile(item.boxFileId)
                .take(1)
                .subscribe(item => {
                let constructedUrl = item.expiring_embed_link.url;
                console.log('constructedUrl', constructedUrl);
                this.updateSrc(constructedUrl);
            });
        });
    }
};
ClientDocumentsDetailContainer = __decorate([
    Component({
        selector: "client-documents-detail",
        template: `
        <div class="iframe-container">
    <iframe fxFill *ngIf="fileReceived == true" [src]="boxUrl" frameborder="0"></iframe>
</div>

    `
    }), 
    __metadata('design:paramtypes', [ClientDocumentsSandbox, ActivatedRoute, Router, DomSanitizer])
], ClientDocumentsDetailContainer);
//# sourceMappingURL=client-documents-detail.container.js.map