import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { BankAccount } from "../entities/BankAccount";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import {Subject } from "rxjs/Subject";

@Injectable()
export class BankAccountsService {
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

    add(bankAccount: BankAccount): Observable<BankAccount> {
        return this.http.post(`${API_URL}/bankaccounts`, bankAccount, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, bankAccount: BankAccount): Observable<Response> {
        return this.http.put(`${API_URL}/bankaccounts/${id}`, bankAccount, this.authorizedHttpOptions());
    }

    remove(bankAccount: BankAccount): Observable<Response> {
        return this.http.delete(`${API_URL}/bankaccounts/${bankAccount._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<BankAccount>> {
        return this.http.get(`${API_URL}/bankaccounts`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    fetchBankAccount(id: string): Observable<BankAccount> {
        
        return this.http.get(`${API_URL}/bankaccounts/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());       
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}