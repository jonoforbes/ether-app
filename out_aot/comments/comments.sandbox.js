var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CommentsService } from "./services/comments.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddComment, UpdateComment, RemoveComment } from "../statemanagement/actions/data/comment";
import { ToggleActivitiesBar, SetActivitiesBarMode, SetActivitiesBarCommentID, SetActivitiesBarCommentType } from "../statemanagement/actions/containers/activities-bar";
export let CommentsSandbox = class CommentsSandbox {
    constructor(store, commentsService) {
        this.store = store;
        this.commentsService = commentsService;
        this.ngUnsubscribe = new Subject();
        this.comments$ = this.store.select(state => state.data.comments);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
        this.isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
        this.commentsCollapsed$ = this.store.select(state => state.containers.activitiesBar.isCollapsed);
        this.commentParentId$ = this.store.select(state => state.containers.activitiesBar.commentId);
        this.commentType$ = this.store.select(state => state.containers.activitiesBar.commentType);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addComment(comment) {
        this.commentsService.add(comment)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((comment) => {
            this.store.dispatch(new AddComment(comment));
        }, () => this.handleError());
    }
    updateComment(id, comment) {
        let action = new UpdateComment(id, comment);
        this.store.dispatch(action);
        this.commentsService.add(comment)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((comment) => {
            this.store.dispatch(new AddComment(comment));
        }, () => this.handleError());
    }
    fetchComments(parentId, commentType) {
        console.log('fetching comments by id');
        return this.comments$.map((comments) => {
            return comments.filter((comment) => {
                return comment.parentId == parentId && comment.commentType == commentType;
            });
        });
    }
    removeComment(comment) {
        let action = new RemoveComment(comment._id);
        this.store.dispatch(action);
        this.commentsService.remove(comment)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    openComments(parentId, commentType) {
        console.log('in sandbox', parentId);
        console.log('in sandbox', commentType);
        this.store.dispatch(new SetActivitiesBarCommentID(parentId));
        this.store.dispatch(new SetActivitiesBarCommentType(commentType));
        this.store.dispatch(new SetActivitiesBarMode('comments'));
        this.commentsCollapsed$.take(1).subscribe((isCollapsed) => {
            if (isCollapsed == false) {
                this.store.dispatch(new ToggleActivitiesBar());
            }
        });
    }
    handleError(action) {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({ type: UNDO_ACTION, payload: action });
        }
    }
};
CommentsSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, CommentsService])
], CommentsSandbox);
//# sourceMappingURL=comments.sandbox.js.map