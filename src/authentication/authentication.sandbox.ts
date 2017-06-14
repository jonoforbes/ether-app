import {Injectable} from "@angular/core";
import {Credentials} from "./types/Credentials";
import {Account} from "./types/Account";
import {AuthenticationService} from "./services/authentication.service";
import {AuthenticationResult} from "./types/AuthenticationResult";
import {Observable} from "rxjs/Observable";
import {ApplicationState} from "../statemanagement/state/ApplicationState";
import {Store} from "@ngrx/store";
import {info} from "toastr";
import {LOCALSTORAGE_AUTH} from "../configuration";
import {SetAuthentication} from "../statemanagement/actions/data/autentication";

@Injectable()
export class AuthenticationSandbox {
    isBusy$ = this.store.select(state => state.containers.application.isBusy);

    constructor(private authenticationService: AuthenticationService, private store: Store<ApplicationState>) {
    }

    login(credentials: Credentials): Observable<AuthenticationResult> {
        return this.authenticationService.authenticate(credentials).do(res => this.handleAuth(res)).share();
    }

    register(account: Account): Observable<AuthenticationResult> {
        console.log(account);
        return this.authenticationService.register(account).do(res => this.handleAuth(res)).share();
    }

    private handleAuth(authenticationResult: AuthenticationResult): void {
        window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(authenticationResult));
        var welcomeFirstName: string = authenticationResult.firstName;
        var welcomeTitle: string = `Welcome back, ${welcomeFirstName}`;
        var welcomeMessage: string = "You have x notifications";
        info(welcomeMessage, welcomeTitle);
        this.store.dispatch(new SetAuthentication(authenticationResult));
    }
}