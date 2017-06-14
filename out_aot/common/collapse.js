var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, HostBinding, ElementRef } from '@angular/core';
export let Collapse = class Collapse {
    constructor(el) {
        this.el = el;
        this.measureHeight();
    }
    set collapse(value) {
        if (value !== undefined) {
            if (value) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    }
    measureHeight() {
        let elem = this.el.nativeElement;
        elem.className = elem.className.replace('collapse', '');
        this.h = elem.scrollHeight;
    }
    hide() {
        this.height = this.h + 'px';
        setTimeout(() => {
            this.height = '0px';
            this.isCollapsing = true;
        }, 1);
    }
    show() {
        this.height = '0px';
        setTimeout(() => {
            this.height = this.h + 'px';
            this.isCollapsing = true;
        }, 1);
    }
};
__decorate([
    HostBinding('class.collapsing'), 
    __metadata('design:type', Boolean)
], Collapse.prototype, "isCollapsing", void 0);
__decorate([
    HostBinding('style.height'), 
    __metadata('design:type', String)
], Collapse.prototype, "height", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean), 
    __metadata('design:paramtypes', [Boolean])
], Collapse.prototype, "collapse", null);
Collapse = __decorate([
    Directive({ selector: '[collapse]' }), 
    __metadata('design:paramtypes', [ElementRef])
], Collapse);
//# sourceMappingURL=collapse.js.map