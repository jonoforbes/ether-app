import { GOOGLE_MAPS_API_URL, GOOGLE_MAPS_API_KEY } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Response, Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Address } from "../entities/Address";

@Injectable()
export class GoogleMapsService {
    constructor(private http: Http) {

    }

    search(query: string): Observable<GoogleMapsSearchResult> {
        var parsedQuery = query.replace(/\s/g, '+');
        return this.http
        .get(`${GOOGLE_MAPS_API_URL}address=${parsedQuery}&key=${GOOGLE_MAPS_API_KEY}`)
        .map((resp: Response) => JSON.parse(JSON.stringify(resp.json())));
    }
}

export interface GoogleMapsSearchResult {
    results: Array<GoogleMapsResult>;
}

export interface GoogleMapsResult {
    address_components: Array<GoogleMapsAddressComponent>;
    formatted_address: string;
    geometry: GoogleMapsGeometry;
    place_id: string;
    types: Array<string>;
}

export interface GoogleMapsAddressComponent {
    long_name: string;
    short_name: string;
    types: Array<string>;
}

export interface GoogleMapsGeometry {
    location: GoogleMapsLocation;
    location_type: string;
    viewport: GoogleMapsViewPort;
}

export interface GoogleMapsLocation {
    lat: number;
    lng: number;
}

export interface GoogleMapsViewPort {
    northeast: GoogleMapsLocation;
    southwest: GoogleMapsLocation;
}