import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { Sale } from "../entities/Sale";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SalesService {
    private jwtToken: string;

    constructor(private store: Store<ApplicationState>,
                private http: Http) {
        this.store.select((state: ApplicationState) => state.data.authentication.jwtToken)
        .subscribe((jwtToken: string) => this.jwtToken = jwtToken);
    }

    add(sale: Sale): Observable<Sale> {
        return this.http.post(`${API_URL}/sales`, sale, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, sale: Sale): Observable<Response> {
        return this.http.put(`${API_URL}/sales/${id}`, sale, this.authorizedHttpOptions());
    }
    
    remove(sale: Sale): Observable<Response> {
        return this.http.delete(`${API_URL}/sales/${sale._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<Sale>> {
        return this.http.get(`${API_URL}/sales`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    fetchSale(id: string): Observable<Sale> {
        return this.http.get(`${API_URL}/sales/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    setAccount(sale: Sale, accountId: string): Observable<Response> {
        let newSale: Sale = Object.assign({}, sale, {accountId: accountId});
        return this.http.put(`${API_URL}/sales/${sale._id}`, newSale, this.authorizedHttpOptions());
    }

    setContact(sale: Sale, contactId: string): Observable<Response> {
        let newSale: Sale = Object.assign({}, sale, {contactId: contactId});
        return this.http.put(`${API_URL}/sales/${sale._id}`, newSale, this.authorizedHttpOptions());
    }

    setProduct(sale: Sale, productId: string): Observable<Response> {
        let newSale: Sale = Object.assign({}, sale, {productId: productId});
        return this.http.put(`${API_URL}/sales/${sale._id}`, newSale, this.authorizedHttpOptions());
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}