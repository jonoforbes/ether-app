/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './week-view.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../day-detail/day-detail.component';
import * as import11 from '../day-detail/day-detail.component.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
export class Wrapper_WeekViewComponent {
  /*private*/ _eventHandler:Function;
  context:import0.WeekViewComponent;
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
    this.context = new import0.WeekViewComponent();
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
  check_week(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.week = currValue;
      this._changes['week'] = new import1.SimpleChange(this._expr_0,currValue);
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
const nodeDebugInfos_WeekViewComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.WeekViewComponent],import0.WeekViewComponent,{})];
var renderType_WeekViewComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_WeekViewComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.WeekViewComponent>;
  _WeekViewComponent_0_3:Wrapper_WeekViewComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_WeekViewComponent_Host0,renderType_WeekViewComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_WeekViewComponent_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'week-view',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_WeekViewComponent0(this.viewUtils,this,0,this._el_0);
    this._WeekViewComponent_0_3 = new Wrapper_WeekViewComponent();
    this.compView_0.create(this._WeekViewComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._WeekViewComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.WeekViewComponent) && (0 === requestNodeIndex))) { return this._WeekViewComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._WeekViewComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._WeekViewComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const WeekViewComponentNgFactory:import9.ComponentFactory<import0.WeekViewComponent> = new import9.ComponentFactory<import0.WeekViewComponent>('week-view',View_WeekViewComponent_Host0,import0.WeekViewComponent);
const styles_WeekViewComponent:any[] = ([] as any[]);
const nodeDebugInfos_WeekViewComponent1:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import10.DayDetailComponent],import10.DayDetailComponent,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_WeekViewComponent1 extends import2.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import10.DayDetailComponent>;
  _DayDetailComponent_2_3:import11.Wrapper_DayDetailComponent;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_WeekViewComponent1,renderType_WeekViewComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_WeekViewComponent1,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'td',import3.EMPTY_INLINE_ARRAY,this.debug(0,4,16));
    this._text_1 = this.renderer.createText(this._el_0,'\n                    ',this.debug(1,4,45));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'day-detail',import3.EMPTY_INLINE_ARRAY,this.debug(2,5,20));
    this.compView_2 = new import11.View_DayDetailComponent0(this.viewUtils,this,2,this._el_2);
    this._DayDetailComponent_2_3 = new import11.Wrapper_DayDetailComponent();
    this._text_3 = this.renderer.createText((null as any),'\n                    ',this.debug(3,10,63));
    this.compView_2.create(this._DayDetailComponent_2_3.context);
    this._text_4 = this.renderer.createText(this._el_0,'\n                ',this.debug(4,11,33));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray8(6,'addAppointment',(null as any),'removeAppointment',(null as any),'updateAppointment',(null as any)),this.eventHandler(this.handleEvent_2));
    this._DayDetailComponent_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true,true,true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.DayDetailComponent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._DayDetailComponent_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(2,9,28);
    const currVal_2_0_0:any = ((this.context.$implicit == null)? (null as any): this.context.$implicit.date);
    this._DayDetailComponent_2_3.check_date(currVal_2_0_0,throwOnChange,false);
    this.debug(2,10,28);
    const currVal_2_0_1:any = ((this.context.$implicit == null)? (null as any): this.context.$implicit.appointments);
    this._DayDetailComponent_2_3.check_appointments(currVal_2_0_1,throwOnChange,false);
    this._DayDetailComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
    this._DayDetailComponent_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.debug(2,5,20);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'addAppointment')) {
      const pd_sub_0:any = ((<any>this.parentView.context.addAppointment.emit($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'removeAppointment')) {
      const pd_sub_1:any = ((<any>this.parentView.context.removeAppointment.emit($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'updateAppointment')) {
      const pd_sub_2:any = ((<any>this.parentView.context.updateAppointment.emit($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}
const nodeDebugInfos_WeekViewComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import13.TemplateRef,
    import14.NgFor
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_WeekViewComponent:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/calendar/components/week-view/week-view.component.ts class WeekViewComponent - inline template',0,import6.ViewEncapsulation.None,styles_WeekViewComponent,{});
export class View_WeekViewComponent0 extends import2.DebugAppView<import0.WeekViewComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _el_7:any;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import12.ViewContainer;
  _TemplateRef_9_5:any;
  _NgFor_9_6:import15.Wrapper_NgFor;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  /*private*/ _expr_16:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_WeekViewComponent0,renderType_WeekViewComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_WeekViewComponent0);
    this._expr_16 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'h2',import3.EMPTY_INLINE_ARRAY,this.debug(1,1,8));
    this._text_2 = this.renderer.createText(this._el_1,'',this.debug(2,1,12));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(3,1,40));
    this._el_4 = import3.createRenderElement(this.renderer,parentRenderNode,'table',import3.EMPTY_INLINE_ARRAY,this.debug(4,2,8));
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',this.debug(5,2,15));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'tbody',import3.EMPTY_INLINE_ARRAY,this.debug(6,3,12));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_6,'tr',import3.EMPTY_INLINE_ARRAY,this.debug(7,3,12));
    this._text_8 = this.renderer.createText(this._el_7,'\n                ',this.debug(8,3,16));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_7,this.debug(9,4,16));
    this._vc_9 = new import12.ViewContainer(9,7,this,this._anchor_9);
    this._TemplateRef_9_5 = new import13.TemplateRef_(this,9,this._anchor_9);
    this._NgFor_9_6 = new import15.Wrapper_NgFor(this._vc_9.vcRef,this._TemplateRef_9_5,this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.ref);
    this._text_10 = this.renderer.createText(this._el_7,'\n            ',this.debug(10,12,21));
    this._text_11 = this.renderer.createText(this._el_6,'\n        ',this.debug(11,13,17));
    this._text_12 = this.renderer.createText(parentRenderNode,'\n\n    ',this.debug(12,14,16));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._el_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._text_11,
      this._text_12
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import14.NgFor) && (9 === requestNodeIndex))) { return this._NgFor_9_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(9,4,20);
    const currVal_9_0_0:any = this.context.days;
    this._NgFor_9_6.check_ngForOf(currVal_9_0_0,throwOnChange,false);
    this._NgFor_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    this.debug(2,1,12);
    const currVal_16:any = import3.inlineInterpolate(2,'Week: ',this.context.week,'/',this.context.year,'');
    if (import3.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setText(this._text_2,currVal_16);
      this._expr_16 = currVal_16;
    }
  }
  destroyInternal():void {
    this._vc_9.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 9)) { return new View_WeekViewComponent1(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    return (null as any);
  }
}