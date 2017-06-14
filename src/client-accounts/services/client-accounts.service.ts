import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { ClientAccount } from "../entities/ClientAccount";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ClientAccountsService {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    private jwtToken: string;

    constructor(private store: Store<ApplicationState>,
                private http: Http) {
        this.store.select((state: ApplicationState) => state.data.authentication.jwtToken)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((jwtToken: string) => this.jwtToken = jwtToken);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    add(clientAccount: ClientAccount): Observable<ClientAccount> {
        return this.http.post(`${API_URL}/clientaccounts`, clientAccount, this.authorizedHttpOptions())
            .take(1)
            .map((res: Response) => res.json());
    }

    update(id: string, clientAccount: ClientAccount): Observable<Response> {
        return this.http.put(`${API_URL}/clientaccounts/${id}`, clientAccount, this.authorizedHttpOptions());
    }

    remove(clientAccount: ClientAccount): Observable<Response> {
        return this.http.delete(`${API_URL}/clientaccounts/${clientAccount._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<ClientAccount>> {
        return this.http.get(`${API_URL}/clientaccounts`, this.authorizedHttpOptions())
            .take(1)
            .map((res: Response) => res.json());
    }

    fetchClientAccount(id: string): Observable<ClientAccount> {
        
        return this.http.get(`${API_URL}/clientaccounts/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());       
    }

    updateStatus(clientAccount: ClientAccount, accountStatus: string): Observable<Response> {
        let newClientAccount: ClientAccount = Object.assign({}, clientAccount, {accountStatus: accountStatus});
        console.log('status', accountStatus);
        return this.http.put(`${API_URL}/clientaccounts/${clientAccount._id}`, newClientAccount, this.authorizedHttpOptions());
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}