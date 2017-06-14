import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserData } from "../../entities/UserData";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { FormControl } from "@angular/forms";
import { TeamSandbox } from "../../team.sandbox"; 
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { Store } from "@ngrx/store";

@Component({
    selector: "contacts-detail",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <h1>team detail</h1>
    `
})
export class TeamDetailContainer implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    sub: any;
    id: string;
    editTeam$: Observable<UserData>;
     
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
                .filter(isAuthenticated => isAuthenticated) // only when authenticated
                .flatMap(() => {
                    return this.sb.fetchUserData(this.id);
                }).publishReplay().refCount();
        });
    }
    

    constructor(private sb: TeamSandbox,
                private route: ActivatedRoute,
                private router: Router) {
        
    }

    pubId() {
        console.log(this.id);
    }

    onSave(userData: UserData): void {
        this.sb.updateUserData(this.id, userData);
    }

    onRemove(userData: UserData): void {
        this.sb.removeUserData(userData);
        
    }
}