import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Comment } from "../../entities/Comment";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: "comment-form-group",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <form [formGroup]="commentForm" novalidate (ngSubmit)="onSubmit()">

        
   
        

        <comment-form [commentForm]="this.commentForm"></comment-form>
        
    </form>
    `
})
export class CommentFormGroupContainer implements OnInit {

    // @Input() recipientId: string;
    @Output() save = new EventEmitter<Comment>();

    commentForm: FormGroup;
    comment = new Comment();

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.commentForm = this.formBuilder.group({
            content: [this.comment.content]
        });
    }

    onSubmit(): void {
        console.log('comment', this.comment);
        this.comment.recipientId = "no recipient";
        this.save.emit(Object.assign(this.comment, this.commentForm.value));
        var newComment = this.formBuilder.group({
            content: ''
        });
        this.commentForm = newComment;
    }
}