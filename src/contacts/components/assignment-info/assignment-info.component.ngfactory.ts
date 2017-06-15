/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './assignment-info.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../contacts.sandbox';
export class Wrapper_ContactAssignmentInfoComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ContactAssignmentInfoComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.ContactAssignmentInfoComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_id(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.id = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
const nodeDebugInfos_ContactAssignmentInfoComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.ContactAssignmentInfoComponent],import0.ContactAssignmentInfoComponent,{})];
var renderType_ContactAssignmentInfoComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_ContactAssignmentInfoComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.ContactAssignmentInfoComponent>;
  _ContactAssignmentInfoComponent_0_3:Wrapper_ContactAssignmentInfoComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ContactAssignmentInfoComponent_Host0,renderType_ContactAssignmentInfoComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ContactAssignmentInfoComponent_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'contact-assignment-info',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_ContactAssignmentInfoComponent0(this.viewUtils,this,0,this._el_0);
    this._ContactAssignmentInfoComponent_0_3 = new Wrapper_ContactAssignmentInfoComponent(this.injectorGet(import10.ContactsSandbox,this.parentIndex));
    this.compView_0.create(this._ContactAssignmentInfoComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._ContactAssignmentInfoComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ContactAssignmentInfoComponent) && (0 === requestNodeIndex))) { return this._ContactAssignmentInfoComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._ContactAssignmentInfoComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ContactAssignmentInfoComponentNgFactory:import9.ComponentFactory<import0.ContactAssignmentInfoComponent> = new import9.ComponentFactory<import0.ContactAssignmentInfoComponent>('contact-assignment-info',View_ContactAssignmentInfoComponent_Host0,import0.ContactAssignmentInfoComponent);
const styles_ContactAssignmentInfoComponent:any[] = ([] as any[]);
const nodeDebugInfos_ContactAssignmentInfoComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_ContactAssignmentInfoComponent:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/contacts/components/assignment-info/assignment-info.component.ts class ContactAssignmentInfoComponent - inline template',0,import6.ViewEncapsulation.None,styles_ContactAssignmentInfoComponent,{});
export class View_ContactAssignmentInfoComponent0 extends import2.DebugAppView<import0.ContactAssignmentInfoComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ContactAssignmentInfoComponent0,renderType_ContactAssignmentInfoComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_ContactAssignmentInfoComponent0);
    this._expr_4 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(0,0,0));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'p',import3.EMPTY_INLINE_ARRAY,this.debug(1,1,4));
    this._text_2 = this.renderer.createText(this._el_1,'',this.debug(2,1,7));
    this._text_3 = this.renderer.createText(parentRenderNode,'        \n    \n\n    \n    ',this.debug(3,1,33));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(2,1,7);
    const currVal_4:any = import3.inlineInterpolate(1,'Contact: ',this.context.contactId,'');
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_2,currVal_4);
      this._expr_4 = currVal_4;
    }
  }
}