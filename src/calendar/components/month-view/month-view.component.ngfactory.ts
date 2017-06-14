/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './month-view.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/flex-layout/flexbox/api/layout';
import * as import11 from '../../../../node_modules/@angular/flex-layout/flexbox/api/layout.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/flex-layout/media-query/media-monitor';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import20 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import21 from '@angular/common/src/pipes/date_pipe';
import * as import22 from '@angular/core/src/i18n/tokens';
export class Wrapper_MonthViewComponent {
  /*private*/ _eventHandler:Function;
  context:import0.MonthViewComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  constructor() {
    this._changed = false;
    this._changes = {};
    this.context = new import0.MonthViewComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
  }
  check_month(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.month = currValue;
      this._changes['month'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_year(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.year = currValue;
      this._changes['year'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_appointments(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.appointments = currValue;
      this._changes['appointments'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.addAppointment.subscribe(_eventHandler.bind(view,'addAppointment'))); }
    if (emit1) { (this.subscription1 = this.context.updateAppointment.subscribe(_eventHandler.bind(view,'updateAppointment'))); }
    if (emit2) { (this.subscription2 = this.context.removeAppointment.subscribe(_eventHandler.bind(view,'removeAppointment'))); }
  }
}
const nodeDebugInfos_MonthViewComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.MonthViewComponent],import0.MonthViewComponent,{})];
var renderType_MonthViewComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_MonthViewComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.MonthViewComponent>;
  _MonthViewComponent_0_3:Wrapper_MonthViewComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MonthViewComponent_Host0,renderType_MonthViewComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_MonthViewComponent_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'month-view',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_MonthViewComponent0(this.viewUtils,this,0,this._el_0);
    this._MonthViewComponent_0_3 = new Wrapper_MonthViewComponent();
    this.compView_0.create(this._MonthViewComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._MonthViewComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MonthViewComponent) && (0 === requestNodeIndex))) { return this._MonthViewComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._MonthViewComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._MonthViewComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const MonthViewComponentNgFactory:import9.ComponentFactory<import0.MonthViewComponent> = new import9.ComponentFactory<import0.MonthViewComponent>('month-view',View_MonthViewComponent_Host0,import0.MonthViewComponent);
const styles_MonthViewComponent:any[] = ([] as any[]);
const nodeDebugInfos_MonthViewComponent3:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo([import10.LayoutDirective],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_MonthViewComponent3 extends import2.DebugAppView<any> {
  _el_0:any;
  _LayoutDirective_0_3:import11.Wrapper_LayoutDirective;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_6:any;
  _pipe_date_0_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_MonthViewComponent3,renderType_MonthViewComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_MonthViewComponent3,declaredViewContainer);
    this._expr_6 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray8(6,'class','initialsBoxContact','fxLayout','column','style','margin: 4px; border-radius: 20px'),this.debug(0,5,20));
    this._LayoutDirective_0_3 = new import11.Wrapper_LayoutDirective(this.parentView.parentView.parentView.parentView.injectorGet(import13.MediaMonitor,this.parentView.parentView.parentView.parentIndex),new import14.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n                        ',this.debug(1,5,129));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h1',import3.EMPTY_INLINE_ARRAY,this.debug(2,6,24));
    this._text_3 = this.renderer.createText(this._el_2,'',this.debug(3,6,28));
    this._text_4 = this.renderer.createText(this._el_0,'\n                    ',this.debug(4,6,59));
    this._pipe_date_0_0 = import3.pureProxy2((<View_MonthViewComponent0>this.parentView.parentView.parentView)._pipe_date_0.transform.bind((<View_MonthViewComponent0>this.parentView.parentView.parentView)._pipe_date_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.LayoutDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._LayoutDirective_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    this.debug(0,5,43);
    const currVal_0_0_0:any = 'column';
    this._LayoutDirective_0_3.check_layout(currVal_0_0_0,throwOnChange,false);
    this._LayoutDirective_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(3,6,28);
    valUnwrapper.reset();
    const currVal_6:any = import3.inlineInterpolate(1,'',valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_0,(<View_MonthViewComponent0>this.parentView.parentView.parentView)._pipe_date_0.transform)(((this.parentView.context.$implicit == null)? (null as any): this.parentView.context.$implicit.date),'dd')),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_6,currVal_6))) {
      this.renderer.setText(this._text_3,currVal_6);
      this._expr_6 = currVal_6;
    }
  }
  destroyInternal():void {
    this._LayoutDirective_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
const nodeDebugInfos_MonthViewComponent2:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import15.TemplateRef,
    import16.NgIf
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_MonthViewComponent2 extends import2.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import12.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import17.Wrapper_NgIf;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_MonthViewComponent2,renderType_MonthViewComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_MonthViewComponent2,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'td',import3.EMPTY_INLINE_ARRAY,this.debug(0,4,16));
    this._text_1 = this.renderer.createText(this._el_0,'\n                    ',this.debug(1,4,46));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,this.debug(2,5,20));
    this._vc_2 = new import12.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import15.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import17.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n                ',this.debug(3,7,26));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import16.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(2,5,25);
    const currVal_2_0_0:any = ((this.context.$implicit == null)? (null as any): this.context.$implicit.date);
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_MonthViewComponent3(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
const nodeDebugInfos_MonthViewComponent1:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import15.TemplateRef,
    import18.NgFor
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_MonthViewComponent1 extends import2.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import12.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import19.Wrapper_NgFor;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_MonthViewComponent1,renderType_MonthViewComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_MonthViewComponent1,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'tr',import3.EMPTY_INLINE_ARRAY,this.debug(0,3,12));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',this.debug(1,3,43));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,this.debug(2,4,16));
    this._vc_2 = new import12.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import15.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import19.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.parentView.injectorGet(import20.IterableDiffers,this.parentView.parentIndex),this.parentView.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n            ',this.debug(3,8,21));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import18.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(2,4,21);
    const currVal_2_0_0:any = this.context.$implicit;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_MonthViewComponent2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
const nodeDebugInfos_MonthViewComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import15.TemplateRef,
    import18.NgFor
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_MonthViewComponent:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/calendar/components/month-view/month-view.component.ts class MonthViewComponent - inline template',0,import6.ViewEncapsulation.None,styles_MonthViewComponent,{});
export class View_MonthViewComponent0 extends import2.DebugAppView<import0.MonthViewComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import12.ViewContainer;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import19.Wrapper_NgFor;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_13:any;
  _pipe_date_0:import21.DatePipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MonthViewComponent0,renderType_MonthViewComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_MonthViewComponent0);
    this._expr_13 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'h2',import3.EMPTY_INLINE_ARRAY,this.debug(1,1,8));
    this._text_2 = this.renderer.createText(this._el_1,'',this.debug(2,1,12));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(3,1,46));
    this._el_4 = import3.createRenderElement(this.renderer,parentRenderNode,'table',import3.EMPTY_INLINE_ARRAY,this.debug(4,2,8));
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',this.debug(5,2,15));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'tbody',import3.EMPTY_INLINE_ARRAY,this.debug(6,3,12));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_6,this.debug(7,3,12));
    this._vc_7 = new import12.ViewContainer(7,6,this,this._anchor_7);
    this._TemplateRef_7_5 = new import15.TemplateRef_(this,7,this._anchor_7);
    this._NgFor_7_6 = new import19.Wrapper_NgFor(this._vc_7.vcRef,this._TemplateRef_7_5,this.parentView.injectorGet(import20.IterableDiffers,this.parentIndex),this.ref);
    this._text_8 = this.renderer.createText(this._el_6,'\n        ',this.debug(8,9,17));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n',this.debug(9,10,16));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_date_0 = new import21.DatePipe(this.parentView.injectorGet(import22.LOCALE_ID,this.parentIndex));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._anchor_7,
      this._text_8,
      this._text_9
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import18.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(7,3,16);
    const currVal_7_0_0:any = this.context.weeks;
    this._NgFor_7_6.check_ngForOf(currVal_7_0_0,throwOnChange,false);
    this._NgFor_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this.debug(2,1,12);
    const currVal_13:any = import3.inlineInterpolate(2,'Month: ',(this.context.month + 1),'/',this.context.year,'');
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setText(this._text_2,currVal_13);
      this._expr_13 = currVal_13;
    }
  }
  destroyInternal():void {
    this._vc_7.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 7)) { return new View_MonthViewComponent1(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    return (null as any);
  }
}