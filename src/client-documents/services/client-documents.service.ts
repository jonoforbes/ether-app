import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { ClientDocument } from "../entities/ClientDocument";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ClientDocumentsService {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    private jwtToken: string;

    constructor(private store: Store<ApplicationState>,
                private http: Http) {
        this.store.select((state: ApplicationState) => state.data.authentication.jwtToken)
        .takeUntil(this.ngUnsubscribe)
        .subscribe((jwtToken: string) => this.jwtToken = jwtToken);
    }

    ngOnDestroy() {
        console.log('client docs service destroy');
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    add(clientDocument: ClientDocument): Observable<ClientDocument> {
        return this.http.post(`${API_URL}/clientdocuments`, clientDocument, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, clientDocument: ClientDocument): Observable<Response> {
        return this.http.put(`${API_URL}/clientdocuments/${id}`, clientDocument, this.authorizedHttpOptions());
    }

    remove(clientDocument: ClientDocument): Observable<Response> {
        return this.http.delete(`${API_URL}/clientdocuments/${clientDocument._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<ClientDocument>> {
        return this.http.get(`${API_URL}/clientdocuments`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    fetchClientDocument(id: string): Observable<ClientDocument> {
        return this.http.get(`${API_URL}/clientdocuments/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    setDescription(clientDocument: ClientDocument, description: string): Observable<Response> {
        let newClientDocument: ClientDocument = Object.assign({}, clientDocument, {description: description});
        return this.http.put(`${API_URL}/clientdocuments/${clientDocument._id}`, newClientDocument, this.authorizedHttpOptions());
    }

    setAccount(clientDocument: ClientDocument, accountId: string): Observable<Response> {
        let newClientDocument: ClientDocument = Object.assign({}, clientDocument, {accountId: accountId});
        return this.http.put(`${API_URL}/clientdocuments/${clientDocument._id}`, newClientDocument, this.authorizedHttpOptions());
    }

    setContact(clientDocument: ClientDocument, contactId: string): Observable<Response> {
        let newClientDocument: ClientDocument = Object.assign({}, clientDocument, {contactId: contactId});
        return this.http.put(`${API_URL}/clientdocuments/${clientDocument._id}`, newClientDocument, this.authorizedHttpOptions());
    }

    setSale(clientDocument: ClientDocument, saleId: string): Observable<Response> {
        let newClientDocument: ClientDocument = Object.assign({}, clientDocument, {saleId: saleId});
        return this.http.put(`${API_URL}/clientdocuments/${clientDocument._id}`, newClientDocument, this.authorizedHttpOptions());
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}