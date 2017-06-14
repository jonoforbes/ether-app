import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { XProtection } from "../entities/XProtection";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class XProtectionsService {
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

    add(xProtection: XProtection): Observable<XProtection> {
        return this.http.post(`${API_URL}/xprotections`, xProtection, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, xProtection: XProtection): Observable<Response> {
        return this.http.put(`${API_URL}/xprotections/${id}`, xProtection, this.authorizedHttpOptions());
    }

    remove(xProtection: XProtection): Observable<Response> {
        return this.http.delete(`${API_URL}/xprotections/${xProtection._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<XProtection>> {
        return this.http.get(`${API_URL}/xprotections`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    fetchXProtection(id: string): Observable<XProtection> {
        
        return this.http.get(`${API_URL}/xprotections/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());       
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}