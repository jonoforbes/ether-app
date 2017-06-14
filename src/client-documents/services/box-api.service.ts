import { BOX_API_URL, BOX_UPLOAD_API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Rx";
import { Response, Http, RequestOptions, RequestOptionsArgs, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BoxAPIService {
    constructor(private http: Http) {
        
    }

    getFiles(accessToken: string): Observable<BoxResults> {
        return this.http
        .get(`${BOX_API_URL}folders/0/items`, this.authorizedHttpOptions(accessToken))
        .take(1)
        .map((resp: Response) => JSON.parse(JSON.stringify(resp.json())));
    }

    getFile(accessToken: string, boxFileId: string): Observable<BoxEntry> {
        return this.http
        .get(`${BOX_API_URL}files/${boxFileId}?fields=expiring_embed_link`, this.authorizedHttpOptions(accessToken))
        .take(1)
        .map((resp: Response) => JSON.parse(JSON.stringify(resp.json())));
    }

    uploadFile(accessToken: string, formData: FormData): Observable<BoxResults> {
        return this.http
        .post(`${BOX_UPLOAD_API_URL}files/content`, formData, this.authorizedHttpOptions(accessToken))
        .take(1)
        .map((resp: Response) => JSON.parse(JSON.stringify(resp.json())));
}

    private authorizedHttpOptions(accessToken: string): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${accessToken}`
        });
        return new RequestOptions({headers: headers});
    }
}

export interface BoxLink {
    url: string;
}

export interface BoxResults {
    total_count: number;
    entries: Array<BoxEntry>;
}

export interface BoxEntry {
    type: string;
    id: string;
    name?: string;
    expiring_embed_link?: BoxLink;
}