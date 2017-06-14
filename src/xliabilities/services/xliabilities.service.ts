import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { XLiability } from "../entities/XLiability";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class XLiabilitiesService {
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

    add(xLiability: XLiability): Observable<XLiability> {
        return this.http.post(`${API_URL}/xliabilities`, xLiability, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, xLiability: XLiability): Observable<Response> {
        return this.http.put(`${API_URL}/xliabilities/${id}`, xLiability, this.authorizedHttpOptions());
    }

    remove(xLiability: XLiability): Observable<Response> {
        return this.http.delete(`${API_URL}/xliabilities/${xLiability._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<XLiability>> {
        return this.http.get(`${API_URL}/xliabilities`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    fetchXLiability(id: string): Observable<XLiability> {
        
        return this.http.get(`${API_URL}/xliabilities/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());       
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}