var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { Wine } from "../../entities/Wine";
import { FormBuilder, Validators } from "@angular/forms";
export let DetailWineFormComponent = class DetailWineFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.wine = new Wine();
        this.onSave = new EventEmitter();
    }
    ngOnInit() {
        this.wineForm = this.formBuilder.group({
            name: [this.wine.name, Validators.required],
            description: [this.wine.description],
            region: [this.wine.region],
            price: [this.wine.price]
        });
    }
    onSubmit() {
        this.onSave.emit(Object.assign(this.wine, this.wineForm.value));
    }
    setRate(rate) {
        this.wine.myRating = rate;
    }
    setInStock(inStock) {
        this.wine.inStock = inStock;
    }
    onSelectWine(wine) {
        this.wineForm.setValue({
            name: wine.name,
            description: wine.description,
            price: wine.priceRetail,
            region: wine.appellation ? wine.appellation.region.name : ""
        });
        this.wine.image = wine.labels.length > 0 ? wine.labels[0].url : null;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DetailWineFormComponent.prototype, "wine", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], DetailWineFormComponent.prototype, "onSave", void 0);
DetailWineFormComponent = __decorate([
    Component({
        selector: "detail-wine-form",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <form [formGroup]="wineForm" class="form-horizontal col-sm-12" (ngSubmit)="onSubmit()">
            <wine-search [control]="wineForm.controls['name']" (selectWine)="onSelectWine($event)"></wine-search>
            <form-group-textarea [label]="'Description'" [control]="wineForm.controls['description']"
                                 [placeholder]="'Enter description'">
            </form-group-textarea>
            <form-group-textbox [label]="'Region'" [control]="wineForm.controls['region']" [placeholder]="'Enter region'">
            </form-group-textbox>
            <form-group-textbox [label]="'Price'" [control]="wineForm.controls['price']" [placeholder]="'Enter price'">
            </form-group-textbox>
            <form-group-content [label]="'Rating'">
                <rating [big]="true" [rating]="wine.myRating" (setRate)="setRate($event)"></rating>
            </form-group-content>
            <form-group-content [label]="'Number in stock'">
                <number-picker [amount]="wine.inStock" (setAmount)="setInStock($event)"></number-picker>
            </form-group-content>
            <div class="form-group has-feedback">
                <div class=" col-sm-offset-4 col-sm-8"><img src="{{wine.image}}" alt=""/></div>
            </div>
            <form-group-footer>
                <button type="submit" [disabled]="!wineForm.valid" class="btn btn-primary btn-lg">
                    <i class="fa fa-save"></i>&nbsp;Save wine
                </button>
                <a [routerLink]="['/stock']" class="btn btn-warning btn-lg"><i class="fa fa-undo"></i>&nbsp;Cancel</a>
            </form-group-footer>
        </form>
     `
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], DetailWineFormComponent);
//# sourceMappingURL=detail-wine-form.component.js.map