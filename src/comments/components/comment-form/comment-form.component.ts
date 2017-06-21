import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { Comment } from "../../entities/Comment";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "comment-form",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <md-toolbar class="message-form" style="height: 42px !important; 
                                                                            background-color: #fff !important; 
                                                                            bottom: 42px;
                                                                            overflow-y: hidden !important;
                                                                            z-index: 2;
                                                                            position: absolute !important">

        <div class="message-form-row" [formGroup]="commentForm">



          <md-input-container floatPlaceholder="never">
            <input mdInput style="width: 200px" placeholder="Press Enter to add Comment" formControlName="content">
           
          </md-input-container>

          

        </div>

        

</md-toolbar>
    `
})
export class CommentFormComponent {
    @Input() commentForm: FormGroup;
    
    constructor() {

    }
}