import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { Address } from "../entities/Address";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AddressesService {
    private jwtToken: string;
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    constructor(private store: Store<ApplicationState>,
                private http: Http) {
        this.store.select((state: ApplicationState) => state.data.authentication.jwtToken)
            .take(2)
            .subscribe((jwtToken: string) => this.jwtToken = jwtToken);
    }

    add(address: Address): Observable<Address> {
        return this.http.post(`${API_URL}/addresses`, address, this.authorizedHttpOptions())
            .take(1)
            .map((res: Response) => res.json());
    }

    update(id: string, address: Address): Observable<Response> {
        return this.http.put(`${API_URL}/addresses/${id}`, address, this.authorizedHttpOptions())
    }

    remove(address: Address): Observable<Response> {
        return this.http.delete(`${API_URL}/addresses/${address._id}`, this.authorizedHttpOptions())
    }

    load(): Observable<Array<Address>> {
        return this.http.get(`${API_URL}/addresses`, this.authorizedHttpOptions())
            .take(1)
            .map((res: Response) => res.json());
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}