import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Comment } from "../../entities/Comment";

@Component({
    selector: "comments-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div *ngFor="let comment of comments">
            <h3>{{comment.content}}</h3>
            <h3>{{comment.createdAt}}</h3>
        </div>
    `
})
export class CommentsListComponent {
    @Input() comments: Array<Comment>;

    constructor() {
        
    }
}