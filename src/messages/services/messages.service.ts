import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { Message } from "../entities/Message";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class MessagesService {
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

    add(message: Message): Observable<Message> {
        return this.http.post(`${API_URL}/messages`, message, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, message: Message): Observable<Response> {
        return this.http.put(`${API_URL}/messages/${id}`, message, this.authorizedHttpOptions());
    }

    remove(message: Message): Observable<Response> {
        return this.http.delete(`${API_URL}/messages/${message._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<Message>> {
        return this.http.get(`${API_URL}/messages`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    fetchMessages(id: string): Observable<Array<Message>> {
        
        return this.http.get(`${API_URL}/messages/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());      
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}