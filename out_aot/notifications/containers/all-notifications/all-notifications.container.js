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
import { NotificationsSandbox } from "../../notifications.sandbox";
export let AllNotificationsContainer = class AllNotificationsContainer {
    constructor(sb) {
        this.sb = sb;
        this.ngUnsubscribe = new Subject();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    ngOnInit() {
        this.matchingNotifications$ = this.sb.notifications$;
    }
    onRemoveNotification(notification) {
        console.log('remove emitted through container', notification);
        this.sb.removeNotification(notification);
    }
};
AllNotificationsContainer = __decorate([
    Component({
        selector: "all-notifications",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <notifications-list 
        [notifications]="matchingNotifications$|async"></notifications-list>
    `
    }), 
    __metadata('design:paramtypes', [NotificationsSandbox])
], AllNotificationsContainer);
//# sourceMappingURL=all-notifications.container.js.map