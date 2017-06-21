var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { CommentsSandbox } from "../../comments.sandbox";
export let CommentsBarContainer = class CommentsBarContainer {
    constructor(sb) {
        this.sb = sb;
        this.ngUnsubscribe = new Subject();
        this.sb.commentParentId$
            .takeUntil(this.ngUnsubscribe)
            .subscribe((parentId) => {
            this.sb.commentType$
                .takeUntil(this.ngUnsubscribe)
                .subscribe((commentType) => {
                this.matchingComments$ = this.sb.fetchComments(parentId, commentType);
            });
        });
        this.commentType$ = this.sb.commentType$.takeUntil(this.ngUnsubscribe);
        this.parentId$ = this.sb.commentParentId$.takeUntil(this.ngUnsubscribe);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    onSave(comment) {
        this.sb.addComment(comment);
    }
};
CommentsBarContainer = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [CommentsSandbox])
], CommentsBarContainer);
//# sourceMappingURL=comments-bar.container.js.map