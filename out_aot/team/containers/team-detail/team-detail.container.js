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
import { Subject } from "rxjs/Subject";
import { TeamSandbox } from "../../team.sandbox";
export let TeamDetailContainer = class TeamDetailContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.ngUnsubscribe = new Subject();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    ngOnInit() {
        this.sub = this.route.params
            .takeUntil(this.ngUnsubscribe)
            .subscribe(params => {
            this.id = params['id'];
            this.editTeam$ = this.sb.isAuthenticated$
                .filter(isAuthenticated => isAuthenticated)
                .flatMap(() => {
                return this.sb.fetchUserData(this.id);
            }).publishReplay().refCount();
        });
    }
    pubId() {
        console.log(this.id);
    }
    onSave(userData) {
        this.sb.updateUserData(this.id, userData);
    }
    onRemove(userData) {
        this.sb.removeUserData(userData);
    }
};
TeamDetailContainer = __decorate([
    Component({
        selector: "contacts-detail",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <h1>team detail</h1>
    `
    }), 
    __metadata('design:paramtypes', [TeamSandbox, ActivatedRoute, Router])
], TeamDetailContainer);
//# sourceMappingURL=team-detail.container.js.map