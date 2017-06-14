import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup} from "@angular/forms";
import { Message } from "../../entities/Message";

@Component({
    selector: "messages-detail-header",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <md-toolbar fxFill class="context-subheader" color="primary" style="height: 66px !important; 
                                                                            background-color: #fff !important; 
                                                                            margin-bottom: 0px;
                                                                            overflow-y: hidden !important;
                                                                            z-index: 2;
                                                                            position: fixed;
                                                                            top: 0px">
    

    <div class="welcomeBlock">



    </div>

      

  </md-toolbar>
    `
})
export class MessagesDetailHeaderComponent {

}