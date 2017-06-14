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
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { MessagesSandbox } from "../../messages.sandbox";
export let MessagesDetailContainer = class MessagesDetailContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.ngUnsubscribe = new Subject();
        this.id$ = new Observable();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    ngOnInit() {
        const params$ = this.route.params;
        this.matchingMessages$ = params$.switchMap((params) => this.sb.fetchMessages(params['id']));
        this.route.params
            .takeUntil(this.ngUnsubscribe)
            .subscribe((params) => {
            this.id$ = params['id'];
        });
    }
    onSave(message) {
        this.sb.addMessage(message);
    }
};
MessagesDetailContainer = __decorate([
    Component({
        selector: "messages-detail",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div class="example-scrolling-content">
        
        <messages-detail-header></messages-detail-header>
         
        <messages-detail-list [recipient]="id$" [messages]="matchingMessages$ | async"></messages-detail-list>
        
        <messages-form-group [recipientId]="id$" (onSave)="onSave($event)"></messages-form-group>
        
        
    </div>
    `
    }), 
    __metadata('design:paramtypes', [MessagesSandbox, ActivatedRoute, Router])
], MessagesDetailContainer);
//# sourceMappingURL=messages-detail.container.js.map