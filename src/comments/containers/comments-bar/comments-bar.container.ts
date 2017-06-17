import { Component, OnInit, Output, ChangeDetectionStrategy } from "@angular/core";
import { Comment } from "../../entities/Comment";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { CommentsSandbox } from "../../comments.sandbox";

@Component({
    selector: "comments-bar",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <h2>Comments</h2>  
        <comments-list [comments]="this.matchingComments$ | async"></comments-list>
        <comment-form-group (save)="onSave($event)"></comment-form-group>  
    `

})
export class CommentsBarContainer implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    matchingComments$: Observable<Array<Comment>>;

    constructor(private sb: CommentsSandbox) {

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    ngOnInit() {
        this.matchingComments$ = this.sb.comments$;
    }

    onSave(comment: Comment): void {
        this.sb.addComment(comment);
    }
}