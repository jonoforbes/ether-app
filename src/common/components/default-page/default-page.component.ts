import {Component} from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
    selector: "default-page",
    template: `
    <div class="example-scrolling-content">
    <messages-detail-header></messages-detail-header>
    </div>
    `
})
export class DefaultPageComponent {
}