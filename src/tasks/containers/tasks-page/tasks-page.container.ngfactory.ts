/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './tasks-page.container';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../tasks.sandbox';
import * as import10 from '@angular/material/core/compatibility/compatibility';
import * as import11 from '@angular/material/sidenav/sidenav';
import * as import12 from '@angular/router/src/directives/router_outlet';
import * as import13 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import14 from '../../../../node_modules/@angular/material/sidenav/sidenav.ngfactory';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import18 from '@angular/common/src/pipes/async_pipe';
import * as import19 from '@angular/material/core/rtl/dir';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from '@angular/core/src/zone/ng_zone';
import * as import22 from '@angular/router/src/router_outlet_map';
import * as import23 from '@angular/core/src/linker/component_factory_resolver';
import * as import24 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_TasksPageContainer {
  /*private*/ _eventHandler:Function;
  context:import0.TasksPageContainer;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.TasksPageContainer(p0);
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
const nodeDebugInfos_TasksPageContainer_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.TasksPageContainer],import0.TasksPageContainer,{})];
var renderType_TasksPageContainer_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_TasksPageContainer_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TasksPageContainer>;
  _TasksPageContainer_0_3:Wrapper_TasksPageContainer;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TasksPageContainer_Host0,renderType_TasksPageContainer_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_TasksPageContainer_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'tasks-page',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_TasksPageContainer0(this.viewUtils,this,0,this._el_0);
    this._TasksPageContainer_0_3 = new Wrapper_TasksPageContainer(this.injectorGet(import9.TasksSandbox,this.parentIndex));
    this.compView_0.create(this._TasksPageContainer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._TasksPageContainer_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TasksPageContainer) && (0 === requestNodeIndex))) { return this._TasksPageContainer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._TasksPageContainer_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TasksPageContainerNgFactory:import8.ComponentFactory<import0.TasksPageContainer> = new import8.ComponentFactory<import0.TasksPageContainer>('tasks-page',View_TasksPageContainer_Host0,import0.TasksPageContainer);
const styles_TasksPageContainer:any[] = ([] as any[]);
const nodeDebugInfos_TasksPageContainer0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import10.MdPrefixRejector,
    import11.MdSidenavContainer
  ]
  ,import11.MdSidenavContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import10.MdPrefixRejector,
    import11.MdSidenav
  ]
  ,import11.MdSidenav,{sidenav: import11.MdSidenav}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import12.RouterOutlet],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import12.RouterOutlet],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_TasksPageContainer:import3.RenderComponentType = import4.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/tasks/containers/tasks-page/tasks-page.container.ts class TasksPageContainer - inline template',0,import5.ViewEncapsulation.None,styles_TasksPageContainer,{});
export class View_TasksPageContainer0 extends import1.DebugAppView<import0.TasksPageContainer> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  compView_3:import1.AppView<import11.MdSidenavContainer>;
  _MdPrefixRejector_3_3:import13.Wrapper_MdPrefixRejector;
  _MdSidenavContainer_3_4:import14.Wrapper_MdSidenavContainer;
  _query_MdSidenav_3_0:import15.QueryList<any>;
  _text_4:any;
  _el_5:any;
  compView_5:import1.AppView<import11.MdSidenav>;
  _MdPrefixRejector_5_3:import13.Wrapper_MdPrefixRejector;
  _MdSidenav_5_4:import14.Wrapper_MdSidenav;
  _text_6:any;
  _el_7:any;
  /*private*/ _vc_7:import16.ViewContainer;
  _RouterOutlet_7_5:import17.Wrapper_RouterOutlet;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  /*private*/ _vc_10:import16.ViewContainer;
  _RouterOutlet_10_5:import17.Wrapper_RouterOutlet;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _pipe_async_0:import18.AsyncPipe;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TasksPageContainer0,renderType_TasksPageContainer,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_TasksPageContainer0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'div',import4.EMPTY_INLINE_ARRAY,this.debug(1,1,8));
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',this.debug(2,1,13));
    this._el_3 = import4.createRenderElement(this.renderer,this._el_1,'md-sidenav-container',new import4.InlineArray2(2,'class','example-sidenav-fab-container'),this.debug(3,2,12));
    this.compView_3 = new import14.View_MdSidenavContainer0(this.viewUtils,this,3,this._el_3);
    this._MdPrefixRejector_3_3 = new import13.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import10.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdSidenavContainer_3_4 = new import14.Wrapper_MdSidenavContainer(this.parentView.injectorGet(import19.Dir,this.parentIndex,(null as any)),new import20.ElementRef(this._el_3),this.renderer,this.parentView.injectorGet(import21.NgZone,this.parentIndex));
    this._query_MdSidenav_3_0 = new import15.QueryList<any>();
    this._text_4 = this.renderer.createText((null as any),'\n                ',this.debug(4,2,72));
    this._el_5 = import4.createRenderElement(this.renderer,(null as any),'md-sidenav',new import4.InlineArray8(8,'align','start','class','left-sidenav','mode','side','tabIndex','-1'),this.debug(5,3,16));
    this.compView_5 = new import14.View_MdSidenav0(this.viewUtils,this,5,this._el_5);
    this._MdPrefixRejector_5_3 = new import13.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import10.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdSidenav_5_4 = new import14.Wrapper_MdSidenav(new import20.ElementRef(this._el_5),this.renderer);
    this._text_6 = this.renderer.createText((null as any),'\n                    ',this.debug(6,3,118));
    this._el_7 = import4.createRenderElement(this.renderer,(null as any),'router-outlet',new import4.InlineArray2(2,'name','m'),this.debug(7,4,20));
    this._vc_7 = new import16.ViewContainer(7,5,this,this._el_7);
    this._RouterOutlet_7_5 = new import17.Wrapper_RouterOutlet(this.parentView.injectorGet(import22.RouterOutletMap,this.parentIndex),this._vc_7.vcRef,this.parentView.injectorGet(import23.ComponentFactoryResolver,this.parentIndex),'m');
    this._text_8 = this.renderer.createText((null as any),'\n                ',this.debug(8,4,60));
    this.compView_5.create(this._MdSidenav_5_4.context);
    this._text_9 = this.renderer.createText((null as any),'\n                ',this.debug(9,5,29));
    this._el_10 = import4.createRenderElement(this.renderer,(null as any),'router-outlet',new import4.InlineArray2(2,'name','d'),this.debug(10,6,16));
    this._vc_10 = new import16.ViewContainer(10,3,this,this._el_10);
    this._RouterOutlet_10_5 = new import17.Wrapper_RouterOutlet(this.parentView.injectorGet(import22.RouterOutletMap,this.parentIndex),this._vc_10.vcRef,this.parentView.injectorGet(import23.ComponentFactoryResolver,this.parentIndex),'d');
    this._text_11 = this.renderer.createText((null as any),'\n            ',this.debug(11,6,56));
    this.compView_3.create(this._MdSidenavContainer_3_4.context);
    this._text_12 = this.renderer.createText(this._el_1,'\n        ',this.debug(12,7,35));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n\n    ',this.debug(13,8,14));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_5,new import4.InlineArray4(4,'transitionend',(null as any),'keydown',(null as any)),this.eventHandler(this.handleEvent_5));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import18.AsyncPipe(this.ref);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._text_13
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.RouterOutlet) && (7 === requestNodeIndex))) { return this._RouterOutlet_7_5.context; }
    if (((token === import10.MdPrefixRejector) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._MdPrefixRejector_5_3.context; }
    if (((token === import11.MdSidenav) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._MdSidenav_5_4.context; }
    if (((token === import12.RouterOutlet) && (10 === requestNodeIndex))) { return this._RouterOutlet_10_5.context; }
    if (((token === import10.MdPrefixRejector) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._MdPrefixRejector_3_3.context; }
    if (((token === import11.MdSidenavContainer) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._MdSidenavContainer_3_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import24.ValueUnwrapper();
    this.debug(3,2,12);
    this._MdPrefixRejector_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this._MdSidenavContainer_3_4.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(5,3,16);
    this._MdPrefixRejector_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(5,3,83);
    const currVal_5_1_0:any = 'start';
    this._MdSidenav_5_4.check_align(currVal_5_1_0,throwOnChange,false);
    this.debug(5,3,37);
    const currVal_5_1_1:any = 'side';
    this._MdSidenav_5_4.check_mode(currVal_5_1_1,throwOnChange,false);
    this.debug(5,3,49);
    valUnwrapper.reset();
    const currVal_5_1_2:boolean = !valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.isCollapsed$));
    this._MdSidenav_5_4.check_opened(currVal_5_1_2,throwOnChange,valUnwrapper.hasWrappedValue);
    if (this._MdSidenav_5_4.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    this.debug(7,4,20);
    this._RouterOutlet_7_5.ngDoCheck(this,this._el_7,throwOnChange);
    this.debug(10,6,16);
    this._RouterOutlet_10_5.ngDoCheck(this,this._el_10,throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._vc_10.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdSidenav_3_0.dirty) {
        this._query_MdSidenav_3_0.reset([this._MdSidenav_5_4.context]);
        this._MdSidenavContainer_3_4.context._sidenavs = this._query_MdSidenav_3_0;
        this._query_MdSidenav_3_0.notifyOnChanges();
      }
      this.debug(5,3,16);
      if ((this.numberOfChecks === 0)) { this._MdSidenav_5_4.context.ngAfterContentInit(); }
      this.debug(3,2,12);
      if ((this.numberOfChecks === 0)) { this._MdSidenavContainer_3_4.context.ngAfterContentInit(); }
    }
    this._MdSidenavContainer_3_4.checkHost(this,this.compView_3,this._el_3,throwOnChange);
    this._MdSidenav_5_4.checkHost(this,this.compView_5,this._el_5,throwOnChange);
    this.compView_3.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_7.destroyNestedViews();
    this._vc_10.destroyNestedViews();
    this.compView_3.destroy();
    this.compView_5.destroy();
    this._RouterOutlet_7_5.ngOnDestroy();
    this.debug(7,4,20);
    this._MdSidenav_5_4.ngOnDestroy();
    this.debug(5,3,16);
    this._RouterOutlet_10_5.ngOnDestroy();
    this.debug(10,6,16);
    this._MdSidenavContainer_3_4.ngOnDestroy();
    this.debug(3,2,12);
    this._pipe_async_0.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 3) && (ngContentIndex == 0))) { cb(this._el_5,ctx); }
    if (((nodeIndex == 3) && (ngContentIndex == 1))) {
      cb(this._text_4,ctx);
      cb(this._text_9,ctx);
      cb(this._vc_10.nativeElement,ctx);
      this._vc_10.visitNestedViewRootNodes(cb,ctx);
      cb(this._text_11,ctx);
    }
    if (((nodeIndex == 5) && (ngContentIndex == 0))) {
      cb(this._text_6,ctx);
      cb(this._vc_7.nativeElement,ctx);
      this._vc_7.visitNestedViewRootNodes(cb,ctx);
      cb(this._text_8,ctx);
    }
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.debug(5,3,16);
    this.compView_5.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdSidenav_5_4.handleEvent(eventName,$event) && result);
    return result;
  }
}