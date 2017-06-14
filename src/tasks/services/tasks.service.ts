import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { Task } from "../entities/Task";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class TasksService {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    private jwtToken: string;

    constructor(private store: Store<ApplicationState>,
                private http: Http) {
        this.store.select((state: ApplicationState) => state.data.authentication.jwtToken)
        .take(2)
        .subscribe((jwtToken: string) => this.jwtToken = jwtToken);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    add(task: Task): Observable<Task> {
        return this.http.post(`${API_URL}/tasks`, task, this.authorizedHttpOptions())
            .take(1)
            .map((res: Response) => res.json());
    }

    update(id: string, task: Task): Observable<Response> {
        return this.http.put(`${API_URL}/tasks/${id}`, task, this.authorizedHttpOptions());
    }

    remove(task: Task): Observable<Response> {
        return this.http.delete(`${API_URL}/tasks/${task._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<Task>> {
        return this.http.get(`${API_URL}/tasks`, this.authorizedHttpOptions())
            .take(1)
            .map((res: Response) => res.json());
    }

    fetchTask(id: string): Observable<Task> {
        return this.http.get(`${API_URL}/tasks/${id}`, this.authorizedHttpOptions())
            .take(1)
            .map((res: Response) => res.json());
    }

    setAccount(task: Task, accountId: string): Observable<Response> {
        let newTask: Task = Object.assign({}, task, {accountId: accountId});
        return this.http.put(`${API_URL}/tasks/${task._id}`, newTask, this.authorizedHttpOptions());
    }

    setContact(task: Task, contactId: string): Observable<Response> {
        let newTask: Task = Object.assign({}, task, {contactId: contactId});
        return this.http.put(`${API_URL}/tasks/${task._id}`, newTask, this.authorizedHttpOptions());
    }

    setSale(task: Task, saleId: string): Observable<Response> {
        let newTask: Task = Object.assign({}, task, {saleId: saleId});
        return this.http.put(`${API_URL}/tasks/${task._id}`, newTask, this.authorizedHttpOptions());
    }

    setAssignee(task: Task, recipientId: string): Observable<Response> {
        console.log('task in service', task, recipientId);
        let newTask: Task = Object.assign({}, task, {recipientId: recipientId});
        return this.http.put(`${API_URL}/tasks/${task._id}`, newTask, this.authorizedHttpOptions());
    }

    setStatus(task: Task, isCompleted: boolean): Observable<Response> {
        let newTask: Task = Object.assign({}, task, {isCompleted: isCompleted});
        return this.http.put(`${API_URL}/tasks/${task._id}`, newTask, this.authorizedHttpOptions());
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}