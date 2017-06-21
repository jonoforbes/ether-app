import { Component, OnInit, Output, ChangeDetectionStrategy } from "@angular/core";
import { Comment } from "../../entities/Comment";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { CommentsSandbox } from "../../comments.sandbox";

@Component({
    selector: "comments-bar",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div style="height: 100vh !important">
        <div class="example-scrolling-content">
            <div class="commentHeader">
                <h3>Comments</h3>
                <p>{{this.commentType$ | async}}</p>

            </div> 
            <comments-list [comments]="this.matchingComments$ | async"></comments-list>
            <comment-form-group (save)="onSave($event)" [parentId]="this.parentId$ | async" [commentType]="this.commentType$ | async"></comment-form-group>  
        </div>
        </div>
    `

})
export class CommentsBarContainer {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    matchingComments$: Observable<Array<Comment>>
    commentType$: Observable<string>;
    parentId$: Observable<string>;

    constructor(private sb: CommentsSandbox) {
        this.sb.commentParentId$
            .takeUntil(this.ngUnsubscribe)
            .subscribe((parentId: string) => {
                this.sb.commentType$
                .takeUntil(this.ngUnsubscribe)
                .subscribe((commentType: string) => {
                    this.matchingComments$ = this.sb.fetchComments(parentId, commentType);
                })
        })
        this.commentType$ = this.sb.commentType$.takeUntil(this.ngUnsubscribe);
        this.parentId$ = this.sb.commentParentId$.takeUntil(this.ngUnsubscribe);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    // ngOnChanges(simpleChanges: any) {
    //     this.parentId$.take(1).subscribe((parentId: string) => {
    //         this.matchingComments$ = this.sb.fetchComments(parentId);
    //     });
    // }


    onSave(comment: Comment): void {
        this.sb.addComment(comment);
    }
}