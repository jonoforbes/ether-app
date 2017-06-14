import { Component, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { ContactsSandbox } from "../../contacts.sandbox";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
    selector: "contact-assignment-selector",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        
    <button md-menu-item [mdMenuTriggerFor]="statusMenu" type="button">
      <h1>Link to Contact</h1>
    </button>
    <md-menu x-position="before" #statusMenu="mdMenu">
        <button *ngFor="let contact of assignableContacts" md-menu-item (click)="onUpdateAssignee(contact._id)" type="button"><h1>{{contact.firstName}} {{contact.lastName}}</h1></button>
        <button md-menu-item ><h1>Go to Contacts</h1></button>
    </md-menu>

    
    `

})
export class ContactAssignmentSelectorComponent implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    @Output() updateContact = new EventEmitter<String>();

    constructor(private sb: ContactsSandbox) {

    }

    assignableContacts = new Array<Contact>();

    ngOnInit() {
        
        this.sb.contacts$
        .takeUntil(this.ngUnsubscribe)
        .subscribe((contacts: Contact[]) => {
            this.assignableContacts = contacts;
        })
        // this.selectedUser$ = this.sb.team$
        // .map((team: any) => {
        //     return team.filter((userData: UserData) => {
        //         return userData.userId == this.id;
        //     });
        // });
        
    }

    onUpdateAssignee(contactId: string): void {
        console.log('contact emitted through selector', contactId);
        this.updateContact.emit(contactId);
    }

}