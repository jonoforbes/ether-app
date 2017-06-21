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
export let CommentsListComponent = class CommentsListComponent {
    constructor() {
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], CommentsListComponent.prototype, "comments", void 0);
CommentsListComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [])
], CommentsListComponent);
//# sourceMappingURL=comments-list.component.js.map