import { UserDataService } from "./services/user-data.service";
import { Injectable } from "@angular/core";
import { UserData } from "./entities/UserData";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddUserData, UpdateUserData, RemoveUserData } from "../statemanagement/actions/data/user-data";

@Injectable()
export class TeamSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    team$ = this.store.select(state => state.data.userData);
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);


    constructor(private store: Store<ApplicationState>,
                private userDataService: UserDataService) {

                }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
        
    addUserData(userData: UserData): void {
        this.userDataService.add(userData)
        .take(1)
        .subscribe((userData: UserData) => {
            this.store.dispatch(new AddUserData(userData));
        }, () => this.handleError());
    }

    updateUserData(id: string, userData: UserData): void {
        let action = new UpdateUserData(id, userData);
        this.store.dispatch(action);
        this.userDataService.update(id, userData)
        .take(1)
        .subscribe(() => {   
        }, () => this.handleError(action));
    }

    fetchUserData(id: string): Observable<UserData> {
        return this.team$
        .take(1)
        .switchMap((team: UserData[]) => {
            return team.filter((userData: UserData) => {
                return userData._id == id;
            });
        });
    }

    removeUserData(userData: UserData): void {
        let action = new RemoveUserData(userData._id);
        this.store.dispatch(action);
        this.userDataService.remove(userData)
        .take(1)
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