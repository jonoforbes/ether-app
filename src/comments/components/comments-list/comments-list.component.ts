import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Comment } from "../../entities/Comment";

@Component({
    selector: "comments-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="commentItem" *ngFor="let comment of comments">
            <div  class="commentBox">
                <h2>Jono wrote:</h2>
                <h3>{{comment.content}}</h3>
            </div>
            <p>Added {{comment.createdAt | date:'jm'}}, {{comment.createdAt | date:'d/M/y'}}</p>
        </div>
    `
})
export class CommentsListComponent {
    @Input() comments: Array<Comment>;

    constructor() {
        
    }
}