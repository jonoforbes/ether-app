import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { Contact } from "../entities/Contact";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import {Subject } from "rxjs/Subject";

@Injectable()
export class ContactsService {
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

    add(contact: Contact): Observable<Contact> {
        return this.http.post(`${API_URL}/contacts`, contact, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, contact: Contact): Observable<Response> {
        return this.http.put(`${API_URL}/contacts/${id}`, contact, this.authorizedHttpOptions());
    }

    remove(contact: Contact): Observable<Response> {
        return this.http.delete(`${API_URL}/contacts/${contact._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<Contact>> {
        return this.http.get(`${API_URL}/contacts`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    fetchContact(id: string): Observable<Contact> {
        
        return this.http.get(`${API_URL}/contacts/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());       
    }

    setAccount(contact: Contact, accountId: string): Observable<Response> {
        let newContact: Contact = Object.assign({}, contact, {accountId: accountId});
        return this.http.put(`${API_URL}/contacts/${contact._id}`, newContact, this.authorizedHttpOptions());
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}