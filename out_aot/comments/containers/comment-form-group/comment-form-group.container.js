var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Comment } from "../../entities/Comment";
import { FormBuilder } from "@angular/forms";
export let CommentFormGroupContainer = class CommentFormGroupContainer {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.save = new EventEmitter();
        this.comment = new Comment();
    }
    ngOnInit() {
        this.commentForm = this.formBuilder.group({
            content: [this.comment.content]
        });
    }
    onSubmit() {
        console.log('comment', this.comment);
        this.comment.recipientId = "no recipient";
        this.save.emit(Object.assign(this.comment, this.commentForm.value));
        var newComment = this.formBuilder.group({
            content: ''
        });
        this.commentForm = newComment;
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], CommentFormGroupContainer.prototype, "save", void 0);
CommentFormGroupContainer = __decorate([
    Component({
        selector: "comment-form-group",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <form [formGroup]="commentForm" novalidate (ngSubmit)="onSubmit()">

        
   
        

        <comment-form [commentForm]="this.commentForm"></comment-form>
        
    </form>
    `
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], CommentFormGroupContainer);
//# sourceMappingURL=comment-form-group.container.js.map