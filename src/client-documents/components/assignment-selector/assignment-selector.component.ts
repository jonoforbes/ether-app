import { Component, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
    selector: "document-assignment-selector",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        
    <button md-menu-item [mdMenuTriggerFor]="statusMenu" type="button">
      <h1>Set Document Role</h1>
    </button>
    <md-menu x-position="before" #statusMenu="mdMenu">
        <button *ngFor="let description of documentDescriptions" (click)="onUpdateDescription(description)" md-menu-item type="button"><h1>{{description}}</h1></button>
    </md-menu>

    
    `

})
export class ClientDocumentAssignmentSelectorComponent implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    @Output() updateDescription = new EventEmitter<String>();

    constructor() {

    }

    documentDescriptions: Array<String> = [
        "Passport",
        "Drivers Licence",
        "Birth Certificate",
        "Certificate of Incorporation",
        "Bank Account Details",
        "Contract",
        "Letter"
    ]

    ngOnInit() {
        
        // this.sb.contacts$
        // .takeUntil(this.ngUnsubscribe)
        // .subscribe((contacts: Contact[]) => {
        //     this.assignableContacts = contacts;
        // })
        // this.selectedUser$ = this.sb.team$
        // .map((team: any) => {
        //     return team.filter((userData: UserData) => {
        //         return userData.userId == this.id;
        //     });
        // });
        
    }

    onUpdateDescription(description: string): void {
        console.log('description emitted through selector', description);
        this.updateDescription.emit(description);
    }

}