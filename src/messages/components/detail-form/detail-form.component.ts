import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { Message } from "../../entities/Message";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "messages-detail-form",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <md-toolbar class="message-form" style="height: 42px !important; 
                                                                            background-color: #fff !important; 
                                                                            bottom: 42px;
                                                                            overflow-y: hidden !important;
                                                                            z-index: 2;
                                                                            position: fixed">

        <div class="message-form-row" [formGroup]="messageForm">



          <md-input-container floatPlaceholder="never">
            <input mdInput style="width: 500px" placeholder="Press Enter to send a Message" formControlName="content">
           
          </md-input-container>

          

        </div>

        

</md-toolbar>
    `
})
export class MessagesDetailFormComponent {
  @Input() messageForm: FormGroup;
  @Output() remove = new EventEmitter();

  constructor( private router: Router ) {

  }

  onRemove(): void {
    this.router.navigate(['/messages', {outlets: {'m': ['list'], 'd': ['add']}}]);
    this.remove.emit(null);
  }

}