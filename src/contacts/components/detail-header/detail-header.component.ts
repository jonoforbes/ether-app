import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup} from "@angular/forms";
import { Contact } from "../../entities/Contact";


@Component({
    selector: "contacts-detail-header",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <md-toolbar class="context-subheader" color="primary" style="height: 66px !important; 
                                                                            background-color: #fff !important; 
                                                                            margin-bottom: 0px;
                                                                            overflow-y: hidden !important;
                                                                            z-index: 2;
                                                                            position: fixed;
                                                                            top: 0px">
    <div class="initialsBoxHeader">
    <h1>{{contact?.firstName | slice:0:1}}{{contact?.lastName | slice:0:1}}</h1>
    </div>
    <div class="welcomeBlock">
    
    <h3 *ngIf="!contact.firstName">New Contact</h3>
    <h3 *ngIf="contact.firstName">{{contact.firstName}} {{contact.lastName}}</h3>
    <button md-button style="padding: 2px 10px 2px 1px !important" [disabled]="true">
      <p>Assign to Account</p>
    </button>
    </div>

    <div class="actionBlock">
    <button md-button style="position: absolute; right: 20px; top: 15px; padding: 2px 10px 2px 10px !important; display: block" [disabled]="true" type="button">
        <a style="height: 10px; margin-top: -7px; padding: 0px; position: fixed" [href]="emailLink">Email</a>
    </button>
    <button md-button style="position: absolute; right: 20px; top: 35px; padding: 2px 10px 2px 10px !important; display: block" (click)="onSubmit(); false">
      <p>Save changes</p>
      </button>
      </div>
      

  </md-toolbar>
    `
})
export class ContactsDetailHeaderComponent {
    @Input() contactForm: FormGroup;
    @Input() contact: Contact;
    @Output() submitForm = new EventEmitter();

    emailLink: string = "mailto:";

    constructor() {

    }

    ngOnInit() {
        console.log('createdat', this.contact.createdAt);
        this.emailLink = `mailto: ${this.contact.primaryEmail}`;
    }
    // uploadPhoto(event, id: string): void {
    //     this.sv.uploadPhoto(event, id).subscribe(() => {
    //     }, () => console.log('error'));        
    // }

    onSubmit(): void {
        this.submitForm.emit(null);
    }
}