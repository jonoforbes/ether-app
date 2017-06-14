import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { XPension } from "../entities/XPension";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class XPensionsService {
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

    add(xPension: XPension): Observable<XPension> {
        return this.http.post(`${API_URL}/xpensions`, xPension, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, xPension: XPension): Observable<Response> {
        return this.http.put(`${API_URL}/xpensions/${id}`, xPension, this.authorizedHttpOptions());
    }

    remove(xPension: XPension): Observable<Response> {
        return this.http.delete(`${API_URL}/xpensions/${xPension._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<XPension>> {
        return this.http.get(`${API_URL}/xpensions`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    fetchXPension(id: string): Observable<XPension> {
        
        return this.http.get(`${API_URL}/xpensions/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());       
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}