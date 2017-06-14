import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { Product } from "../entities/Product";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ProductsService {
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

    add(product: Product): Observable<Product> {
        return this.http.post(`${API_URL}/products`, product, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, product: Product): Observable<Response> {
        return this.http.put(`${API_URL}/products/${id}`, product, this.authorizedHttpOptions());
    }

    remove(product: Product): Observable<Response> {
        return this.http.delete(`${API_URL}/products/${product._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<Product>> {
        return this.http.get(`${API_URL}/products`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    fetchProduct(id: string): Observable<Product> {
        return this.http.get(`${API_URL}/products/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}