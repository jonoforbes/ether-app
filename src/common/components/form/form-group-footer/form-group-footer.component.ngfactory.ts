/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './form-group-footer.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
export class Wrapper_FormGroupFooter {
  /*private*/ _eventHandler:Function;
  context:import0.FormGroupFooter;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.FormGroupFooter();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
const nodeDebugInfos_FormGroupFooter_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.FormGroupFooter],import0.FormGroupFooter,{})];
var renderType_FormGroupFooter_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_FormGroupFooter_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.FormGroupFooter>;
  _FormGroupFooter_0_3:Wrapper_FormGroupFooter;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_FormGroupFooter_Host0,renderType_FormGroupFooter_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_FormGroupFooter_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'form-group-footer',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_FormGroupFooter0(this.viewUtils,this,0,this._el_0);
    this._FormGroupFooter_0_3 = new Wrapper_FormGroupFooter();
    this.compView_0.create(this._FormGroupFooter_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._FormGroupFooter_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.FormGroupFooter) && (0 === requestNodeIndex))) { return this._FormGroupFooter_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._FormGroupFooter_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
}
export const FormGroupFooterNgFactory:import8.ComponentFactory<import0.FormGroupFooter> = new import8.ComponentFactory<import0.FormGroupFooter>('form-group-footer',View_FormGroupFooter_Host0,import0.FormGroupFooter);
const styles_FormGroupFooter:any[] = ([] as any[]);
const nodeDebugInfos_FormGroupFooter0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_FormGroupFooter:import3.RenderComponentType = import4.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/common/components/form/form-group-footer/form-group-footer.component.ts class FormGroupFooter - inline template',1,import5.ViewEncapsulation.None,styles_FormGroupFooter,{});
export class View_FormGroupFooter0 extends import1.DebugAppView<import0.FormGroupFooter> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_FormGroupFooter0,renderType_FormGroupFooter,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_FormGroupFooter0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','form-group'),this.debug(1,1,8));
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',this.debug(2,1,32));
    this._el_3 = import4.createRenderElement(this.renderer,this._el_1,'div',new import4.InlineArray2(2,'class','col-sm-offset-4 col-sm-8'),this.debug(3,2,12));
    this._text_4 = this.renderer.createText(this._el_3,'\n               ',this.debug(4,2,50));
    this.debug((null as any),3,15);
    this.projectNodes(this._el_3,0);
    this._text_5 = this.renderer.createText(this._el_3,'\n            ',this.debug(5,3,40));
    this._text_6 = this.renderer.createText(this._el_1,'\n        ',this.debug(6,4,18));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(7,5,14));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._text_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
}