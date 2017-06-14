/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './detail-list.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/flex-layout/flexbox/api/flex-fill';
import * as import12 from '@angular/flex-layout/flexbox/api/layout-align';
import * as import13 from '../../../../node_modules/@angular/flex-layout/flexbox/api/flex-fill.ngfactory';
import * as import14 from '../../../../node_modules/@angular/flex-layout/flexbox/api/layout-align.ngfactory';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '@angular/flex-layout/media-query/media-monitor';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/flex-layout/flexbox/api/layout';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/common/src/directives/ng_if';
import * as import21 from '../../../../node_modules/@angular/flex-layout/flexbox/api/layout.ngfactory';
import * as import22 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import23 from '@angular/common/src/directives/ng_for';
import * as import24 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import25 from '@angular/common/src/pipes/date_pipe';
import * as import26 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import27 from '@angular/core/src/i18n/tokens';
export class Wrapper_MessagesDetailListComponent {
  /*private*/ _eventHandler:Function;
  context:import0.MessagesDetailListComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.MessagesDetailListComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_messages(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.messages = currValue;
      this._expr_0 = currValue;
    }
  }
  check_recipient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.recipient = currValue;
      this._expr_1 = currValue;
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
const nodeDebugInfos_MessagesDetailListComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.MessagesDetailListComponent],import0.MessagesDetailListComponent,{})];
var renderType_MessagesDetailListComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_MessagesDetailListComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.MessagesDetailListComponent>;
  _MessagesDetailListComponent_0_3:Wrapper_MessagesDetailListComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MessagesDetailListComponent_Host0,renderType_MessagesDetailListComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_MessagesDetailListComponent_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'messages-detail-list',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_MessagesDetailListComponent0(this.viewUtils,this,0,this._el_0);
    this._MessagesDetailListComponent_0_3 = new Wrapper_MessagesDetailListComponent(this.injectorGet(import10.Router,this.parentIndex));
    this.compView_0.create(this._MessagesDetailListComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._MessagesDetailListComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MessagesDetailListComponent) && (0 === requestNodeIndex))) { return this._MessagesDetailListComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._MessagesDetailListComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const MessagesDetailListComponentNgFactory:import9.ComponentFactory<import0.MessagesDetailListComponent> = new import9.ComponentFactory<import0.MessagesDetailListComponent>('messages-detail-list',View_MessagesDetailListComponent_Host0,import0.MessagesDetailListComponent);
const styles_MessagesDetailListComponent:any[] = ([] as any[]);
const nodeDebugInfos_MessagesDetailListComponent2:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo([import11.FlexFillDirective],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import12.LayoutAlignDirective],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import12.LayoutAlignDirective],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_MessagesDetailListComponent2 extends import2.DebugAppView<any> {
  _el_0:any;
  _FlexFillDirective_0_3:import13.Wrapper_FlexFillDirective;
  _text_1:any;
  _el_2:any;
  _LayoutAlignDirective_2_3:import14.Wrapper_LayoutAlignDirective;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _LayoutAlignDirective_5_3:import14.Wrapper_LayoutAlignDirective;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  _pipe_date_0_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_MessagesDetailListComponent2,renderType_MessagesDetailListComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_MessagesDetailListComponent2,declaredViewContainer);
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray4(4,'fxFill','','style','margin: 0px !important'),this.debug(0,5,8));
    this._FlexFillDirective_0_3 = new import13.Wrapper_FlexFillDirective(this.parentView.parentView.injectorGet(import16.MediaMonitor,this.parentView.parentIndex),new import17.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',this.debug(1,5,92));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h3',new import3.InlineArray4(4,'fxLayoutAlign','end none','style','font-size: 14px; color: #444; margin-right: 30px; margin-top: 0px'),this.debug(2,6,12));
    this._LayoutAlignDirective_2_3 = new import14.Wrapper_LayoutAlignDirective(this.parentView.parentView.injectorGet(import16.MediaMonitor,this.parentView.parentIndex),new import17.ElementRef(this._el_2),this.renderer,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',this.debug(3,6,115));
    this._text_4 = this.renderer.createText(this._el_0,'\n            ',this.debug(4,6,139));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'h6',new import3.InlineArray4(4,'fxLayoutAlign','end none','style','font-size: 10px; color: #aaa; margin-right: 30px'),this.debug(5,7,12));
    this._LayoutAlignDirective_5_3 = new import14.Wrapper_LayoutAlignDirective(this.parentView.parentView.injectorGet(import16.MediaMonitor,this.parentView.parentIndex),new import17.ElementRef(this._el_5),this.renderer,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',this.debug(6,7,98));
    this._text_7 = this.renderer.createText(this._el_0,'\n            \n        ',this.debug(7,7,140));
    this._pipe_date_0_0 = import3.pureProxy2((<View_MessagesDetailListComponent0>this.parentView.parentView)._pipe_date_0.transform.bind((<View_MessagesDetailListComponent0>this.parentView.parentView)._pipe_date_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.LayoutAlignDirective) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._LayoutAlignDirective_2_3.context; }
    if (((token === import12.LayoutAlignDirective) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._LayoutAlignDirective_5_3.context; }
    if (((token === import11.FlexFillDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._FlexFillDirective_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    this.debug(0,5,8);
    this._FlexFillDirective_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(2,6,90);
    const currVal_2_0_0:any = 'end none';
    this._LayoutAlignDirective_2_3.check_align(currVal_2_0_0,throwOnChange,false);
    this._LayoutAlignDirective_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this.debug(5,7,73);
    const currVal_5_0_0:any = 'end none';
    this._LayoutAlignDirective_5_3.check_align(currVal_5_0_0,throwOnChange,false);
    this._LayoutAlignDirective_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(3,6,115);
    const currVal_11:any = import3.inlineInterpolate(1,'',this.parentView.context.$implicit.content,'');
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setText(this._text_3,currVal_11);
      this._expr_11 = currVal_11;
    }
    this.debug(6,7,98);
    valUnwrapper.reset();
    const currVal_12:any = import3.inlineInterpolate(1,'',valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_0,(<View_MessagesDetailListComponent0>this.parentView.parentView)._pipe_date_0.transform)(this.parentView.context.$implicit.createdAt,'medium')),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_12,currVal_12))) {
      this.renderer.setText(this._text_6,currVal_12);
      this._expr_12 = currVal_12;
    }
  }
  destroyInternal():void {
    this._LayoutAlignDirective_2_3.ngOnDestroy();
    this.debug(2,6,12);
    this._LayoutAlignDirective_5_3.ngOnDestroy();
    this.debug(5,7,12);
    this._FlexFillDirective_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
const nodeDebugInfos_MessagesDetailListComponent3:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo([import11.FlexFillDirective],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import12.LayoutAlignDirective],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import12.LayoutAlignDirective],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_MessagesDetailListComponent3 extends import2.DebugAppView<any> {
  _el_0:any;
  _FlexFillDirective_0_3:import13.Wrapper_FlexFillDirective;
  _text_1:any;
  _el_2:any;
  _LayoutAlignDirective_2_3:import14.Wrapper_LayoutAlignDirective;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _LayoutAlignDirective_5_3:import14.Wrapper_LayoutAlignDirective;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  _pipe_date_0_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_MessagesDetailListComponent3,renderType_MessagesDetailListComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_MessagesDetailListComponent3,declaredViewContainer);
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray4(4,'fxFill','','style','background-color: #efefef'),this.debug(0,10,8));
    this._FlexFillDirective_0_3 = new import13.Wrapper_FlexFillDirective(this.parentView.parentView.injectorGet(import16.MediaMonitor,this.parentView.parentIndex),new import17.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',this.debug(1,10,96));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h3',new import3.InlineArray4(4,'fxLayoutAlign','start none','style','font-size: 14px; color: #444; margin-left: 30px; margin-top: 0px'),this.debug(2,11,12));
    this._LayoutAlignDirective_2_3 = new import14.Wrapper_LayoutAlignDirective(this.parentView.parentView.injectorGet(import16.MediaMonitor,this.parentView.parentIndex),new import17.ElementRef(this._el_2),this.renderer,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',this.debug(3,11,116));
    this._text_4 = this.renderer.createText(this._el_0,'\n            ',this.debug(4,11,141));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'h6',new import3.InlineArray4(4,'fxLayoutAlign','start none','style','font-size: 10px; color: #aaa; margin-left: 30px'),this.debug(5,12,12));
    this._LayoutAlignDirective_5_3 = new import14.Wrapper_LayoutAlignDirective(this.parentView.parentView.injectorGet(import16.MediaMonitor,this.parentView.parentIndex),new import17.ElementRef(this._el_5),this.renderer,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',this.debug(6,12,99));
    this._text_7 = this.renderer.createText(this._el_0,'\n            \n        ',this.debug(7,12,141));
    this._pipe_date_0_1 = import3.pureProxy2((<View_MessagesDetailListComponent0>this.parentView.parentView)._pipe_date_0.transform.bind((<View_MessagesDetailListComponent0>this.parentView.parentView)._pipe_date_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.LayoutAlignDirective) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._LayoutAlignDirective_2_3.context; }
    if (((token === import12.LayoutAlignDirective) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._LayoutAlignDirective_5_3.context; }
    if (((token === import11.FlexFillDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._FlexFillDirective_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    this.debug(0,10,8);
    this._FlexFillDirective_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(2,11,89);
    const currVal_2_0_0:any = 'start none';
    this._LayoutAlignDirective_2_3.check_align(currVal_2_0_0,throwOnChange,false);
    this._LayoutAlignDirective_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this.debug(5,12,72);
    const currVal_5_0_0:any = 'start none';
    this._LayoutAlignDirective_5_3.check_align(currVal_5_0_0,throwOnChange,false);
    this._LayoutAlignDirective_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(3,11,116);
    const currVal_11:any = import3.inlineInterpolate(1,'',this.parentView.context.$implicit.content,' ');
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setText(this._text_3,currVal_11);
      this._expr_11 = currVal_11;
    }
    this.debug(6,12,99);
    valUnwrapper.reset();
    const currVal_12:any = import3.inlineInterpolate(1,'',valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_1,(<View_MessagesDetailListComponent0>this.parentView.parentView)._pipe_date_0.transform)(this.parentView.context.$implicit.createdAt,'medium')),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_12,currVal_12))) {
      this.renderer.setText(this._text_6,currVal_12);
      this._expr_12 = currVal_12;
    }
  }
  destroyInternal():void {
    this._LayoutAlignDirective_2_3.ngOnDestroy();
    this.debug(2,11,12);
    this._LayoutAlignDirective_5_3.ngOnDestroy();
    this.debug(5,12,12);
    this._FlexFillDirective_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
const nodeDebugInfos_MessagesDetailListComponent1:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo([import18.LayoutDirective],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import19.TemplateRef,
    import20.NgIf
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import19.TemplateRef,
    import20.NgIf
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_MessagesDetailListComponent1 extends import2.DebugAppView<any> {
  _el_0:any;
  _LayoutDirective_0_3:import21.Wrapper_LayoutDirective;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import15.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import22.Wrapper_NgIf;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import15.ViewContainer;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import22.Wrapper_NgIf;
  _text_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_MessagesDetailListComponent1,renderType_MessagesDetailListComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_MessagesDetailListComponent1,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray4(4,'class','message-row','fxLayout','row'),this.debug(0,4,8));
    this._LayoutDirective_0_3 = new import21.Wrapper_LayoutDirective(this.parentView.injectorGet(import16.MediaMonitor,this.parentIndex),new import17.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',this.debug(1,4,81));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,this.debug(2,5,8));
    this._vc_2 = new import15.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import19.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import22.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'  \n        ',this.debug(3,9,14));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,this.debug(4,10,8));
    this._vc_4 = new import15.ViewContainer(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import19.TemplateRef_(this,4,this._anchor_4);
    this._NgIf_4_6 = new import22.Wrapper_NgIf(this._vc_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'  \n          \n          ',this.debug(5,14,14));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import20.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    if (((token === import19.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import20.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6.context; }
    if (((token === import18.LayoutDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._LayoutDirective_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,4,66);
    const currVal_0_0_0:any = 'row';
    this._LayoutDirective_0_3.check_layout(currVal_0_0_0,throwOnChange,false);
    this._LayoutDirective_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(2,5,13);
    const currVal_2_0_0:any = (this.context.$implicit.recipientId == this.parentView.context.recipient);
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this.debug(4,10,13);
    const currVal_4_0_0:any = (this.context.$implicit.recipientId !== this.parentView.context.recipient);
    this._NgIf_4_6.check_ngIf(currVal_4_0_0,throwOnChange,false);
    this._NgIf_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this._vc_4.destroyNestedViews();
    this.debug(2,5,8);
    this.debug(4,10,8);
    this._LayoutDirective_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_MessagesDetailListComponent2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    if ((nodeIndex == 4)) { return new View_MessagesDetailListComponent3(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    return (null as any);
  }
}
const nodeDebugInfos_MessagesDetailListComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import19.TemplateRef,
    import23.NgFor
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_MessagesDetailListComponent:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/messages/components/detail-list/detail-list.component.ts class MessagesDetailListComponent - inline template',0,import6.ViewEncapsulation.None,styles_MessagesDetailListComponent,{});
export class View_MessagesDetailListComponent0 extends import2.DebugAppView<import0.MessagesDetailListComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import15.ViewContainer;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import24.Wrapper_NgFor;
  _text_2:any;
  _pipe_date_0:import25.DatePipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MessagesDetailListComponent0,renderType_MessagesDetailListComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_MessagesDetailListComponent0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n\n        \n        \n        ',this.debug(0,0,0));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(1,4,8));
    this._vc_1 = new import15.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import19.TemplateRef_(this,1,this._anchor_1);
    this._NgFor_1_6 = new import24.Wrapper_NgFor(this._vc_1.vcRef,this._TemplateRef_1_5,this.parentView.injectorGet(import26.IterableDiffers,this.parentIndex),this.ref);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n          \n    ',this.debug(2,16,16));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_date_0 = new import25.DatePipe(this.parentView.injectorGet(import27.LOCALE_ID,this.parentIndex));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import23.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(1,4,33);
    const currVal_1_0_0:any = this.context.messages;
    this._NgFor_1_6.check_ngForOf(currVal_1_0_0,throwOnChange,false);
    this._NgFor_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_MessagesDetailListComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}