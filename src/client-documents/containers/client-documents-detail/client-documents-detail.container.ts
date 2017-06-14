import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ClientDocument } from "../../entities/ClientDocument";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { FormControl } from "@angular/forms";
import { ClientDocumentsSandbox } from "../../client-documents.sandbox"; 
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { Store } from "@ngrx/store";




@Component({
    selector: "client-documents-detail",

    template: `
        <div class="iframe-container">
    <iframe fxFill *ngIf="fileReceived == true" [src]="boxUrl" frameborder="0"></iframe>
</div>

    `
})
export class ClientDocumentsDetailContainer implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    ACCESS_TOKEN: string = "EqFyi1Yq1tD9mxY8F38sxDfp73pFd7FP";
    FILE_ID_DOC: string = '93392244621';
    FILE_ID_VIDEO: string = '101504801571';
    FILE_ID_3D: string = '101532838591';
    FILE_ID_TEXT: string;

    private boxUrl: SafeResourceUrl;
    fileReceived: boolean = false;


    

    updateSrc(url) {
        
        this.boxUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        console.log('url', this.boxUrl);
        this.fileReceived = true;
    }

    xboxUrl: string = `https://app.box.com/embed/file/101532838591?view_file_only=true`;

    
    fetchedHtml: any;
    sub: any;
    id: string;
    
    activeClientDocument$: Observable<ClientDocument>;


    constructor(private sb: ClientDocumentsSandbox,
                private route: ActivatedRoute,
                private router: Router,
                private sanitizer: DomSanitizer,
                
    ) {
       
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    ngOnInit() {
        const params$ = this.route.params;

        this.activeClientDocument$ = params$.switchMap(
            (params: Params) => this.sb.fetchClientDocument(params['id']));

        // this.sub = this.route.params.subscribe(params => {
        //     this.id = params['id'];
        //     this.activeClientDocument$ = this.sb.isAuthenticated$
        //         .filter(isAuthenticated => isAuthenticated)
        //         .flatMap(() => {
        //             return this.sb.fetchClientDocument(this.id);
        //         }).publishReplay().refCount();
        // });
        this.activeClientDocument$
        .takeUntil(this.ngUnsubscribe)
        .subscribe(item => {
            this.sb.getBoxFile(item.boxFileId)
            .take(1)
            .subscribe(item => {
                let constructedUrl: string = item.expiring_embed_link.url;
                console.log('constructedUrl', constructedUrl);
                this.updateSrc(constructedUrl);
            })   
            
            // this.updateSrc(constructedUrl);
        });
//         
//         let preview: any = new Box.Preview();
//        preview.show(
//            this.FILE_ID_DOC, {
//   token: this.ACCESS_TOKEN,
//   container: '.preview-container',
//   showDownload: true,
//   collection: [this.FILE_ID_DOC, this.FILE_ID_VIDEO, this.FILE_ID_3D, this.FILE_ID_TEXT]
// });
    //    )

        
    }


}