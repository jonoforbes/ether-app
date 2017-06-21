var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup } from "@angular/forms";
export let CommentFormComponent = class CommentFormComponent {
    constructor() {
    }
};
__decorate([
    Input(), 
    __metadata('design:type', FormGroup)
], CommentFormComponent.prototype, "commentForm", void 0);
CommentFormComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [])
], CommentFormComponent);
//# sourceMappingURL=comment-form.component.js.map