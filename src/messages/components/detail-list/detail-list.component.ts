import { Component, Input, DoCheck, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { Message } from "../../entities/Message";
import { MessagesSandbox } from "../../messages.sandbox";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "messages-detail-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

        
        
        <div class="message-row" *ngFor="let message of messages" fxLayout="row">
        <div *ngIf="message.recipientId == recipient" fxFill style="margin: 0px !important">
            <h3 style="font-size: 14px; color: #444; margin-right: 30px; margin-top: 0px" fxLayoutAlign="end none">{{message.content}}</h3>
            <h6 style="font-size: 10px; color: #aaa; margin-right: 30px" fxLayoutAlign="end none">{{message.createdAt | date:'medium'}}</h6>
            
        </div>  
        <div *ngIf="message.recipientId !== recipient" fxFill style="background-color: #efefef">
            <h3 style="font-size: 14px; color: #444; margin-left: 30px; margin-top: 0px" fxLayoutAlign="start none">{{message.content}} </h3>
            <h6 style="font-size: 10px; color: #aaa; margin-left: 30px" fxLayoutAlign="start none">{{message.createdAt | date:'medium'}}</h6>
            
        </div>  
          
          </div>
          
    `
})
export class MessagesDetailListComponent {
    @Input() messages: Array<Message>;
    @Input() recipient: String;

    constructor( private router: Router) {

    }

    
}