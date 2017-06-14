import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { Comment } from "../entities/Comment";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class CommentsService {
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

    add(comment: Comment): Observable<Comment> {
        return this.http.post(`${API_URL}/comments`, comment, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, comment: Comment): Observable<Response> {
        return this.http.put(`${API_URL}/comments/${id}`, comment, this.authorizedHttpOptions());
    }

    remove(comment: Comment): Observable<Response> {
        return this.http.delete(`${API_URL}/comments/${comment._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<Comment>> {
        return this.http.get(`${API_URL}/comments`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}