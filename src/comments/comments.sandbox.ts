import { CommentsService } from "./services/comments.service";
import { Injectable } from "@angular/core";
import { Comment } from "./entities/Comment";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddComment, UpdateComment, RemoveComment } from "../statemanagement/actions/data/comment";

@Injectable()
export class CommentsSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    comments$: Observable<Array<Comment>> = this.store.select(state => state.data.comments);

    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);

    constructor(private store: Store<ApplicationState>,
                private commentsService: CommentsService) {

                }
    
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addComment(comment: Comment): void {
        this.commentsService.add(comment)
        .takeUntil(this.ngUnsubscribe)
        .subscribe((comment: Comment) => {
            this.store.dispatch(new AddComment(comment));
        }, () => this.handleError());
    }

    updateComment(id: string, comment: Comment): void {
        let action = new UpdateComment(id, comment);
        this.store.dispatch(action);
        this.commentsService.add(comment)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((comment: Comment) => {
                this.store.dispatch(new AddComment(comment));
            }, () => this.handleError());
    }

    fetchComments(parentId: string): Observable<Array<Comment>> {
        return this.comments$.map((comments: Comment[]) => {
            return comments.filter((comment: Comment) => {
                return comment.parentId == parentId;
            })
        })
    }

    removeComment(comment: Comment): void {
        let action = new RemoveComment(comment._id);
        this.store.dispatch(action);
        this.commentsService.remove(comment)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
            }, () => this.handleError(action));
    }



    private handleError(action?: Action): void {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({type: UNDO_ACTION, payload: action});
        }
    }
}