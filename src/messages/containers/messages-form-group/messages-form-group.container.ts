import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Message } from "../../entities/Message";
import { Observable } from "rxjs/Observable";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { MessagesSandbox } from "../../messages.sandbox";
import { TeamSandbox } from "../../../team/team.sandbox"; 
import { MessagesDetailHeaderComponent } from "../../components/detail-header/detail-header.component";
import { MessagesDetailFormComponent } from "../../components/detail-form/detail-form.component";
import { MessagesDetailListComponent } from "../../components/detail-list/detail-list.component";

@Component({
    selector: "messages-form-group",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    
        
        <form [formGroup]="messageForm" novalidate (ngSubmit)="onSubmit()">

        
   
        

        <messages-detail-form [messageForm]="this.messageForm" (remove)="onRemove(message)"></messages-detail-form>
        
    </form>
        
    
    `
})
export class MessagesFormGroupContainer implements OnInit {
    @Input() messages: Observable<Array<Message>>;
    
    @Input() recipientId: string;
    @Output() onSave = new EventEmitter<Message>();
    @Output() remove = new EventEmitter<Message>();

    public messageForm: FormGroup;
    message = new Message();

    constructor(private sb: MessagesSandbox,
                        tsb: TeamSandbox,
                private formBuilder: FormBuilder
                 ) {
        
    }

    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            content: [this.message.content]
        });

    }

    

    onSubmit(): void {
        console.log(this.message);
        console.log(this.recipientId);
        console.log(this.messageForm.value);
        this.message.recipientId = this.recipientId;
        this.onSave.emit(Object.assign(this.message, this.messageForm.value));
        var draftMessage = this.formBuilder.group({
            content: ''
        });
        this.messageForm = draftMessage;
        
    }

    public onRemove(message: Message): void {
        this.remove.emit(message);
    }

    
}