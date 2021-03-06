/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './application.container';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/platform-browser/src/browser/title';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../app.sandbox';
import * as import11 from '@angular/router/src/router';
import * as import12 from '../../../common/components/navbar/navbar.component';
import * as import13 from '../../../common/components/navbar/navbar.component.ngfactory';
import * as import14 from '@angular/common/src/pipes/async_pipe';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '../../../common/common.sandbox';
import * as import17 from '@angular/core/src/change_detection/change_detection_util';
import * as import18 from '../../../comments/containers/comments-bar/comments-bar.container';
import * as import19 from '../../../comments/containers/comments-bar/comments-bar.container.ngfactory';
import * as import20 from '../../../comments/comments.sandbox';
import * as import21 from '../../../activities/containers/all-activities/all-activities.container';
import * as import22 from '../../../activities/containers/all-activities/all-activities.container.ngfactory';
import * as import23 from '../../../activities/activities.sandbox';
import * as import24 from '@angular/core/src/linker/template_ref';
import * as import25 from '@angular/common/src/directives/ng_if';
import * as import26 from '@angular/material/core/compatibility/compatibility';
import * as import27 from '@angular/material/sidenav/sidenav';
import * as import28 from '@angular/router/src/directives/router_outlet';
import * as import29 from '@angular/core/src/linker/query_list';
import * as import30 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import31 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import32 from '../../../../node_modules/@angular/material/sidenav/sidenav.ngfactory';
import * as import33 from '../../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import34 from '@angular/material/core/rtl/dir';
import * as import35 from '@angular/core/src/linker/element_ref';
import * as import36 from '@angular/core/src/zone/ng_zone';
import * as import37 from '@angular/router/src/router_outlet_map';
import * as import38 from '@angular/core/src/linker/component_factory_resolver';
export class Wrapper_ApplicationContainer {
  /*private*/ _eventHandler:Function;
  context:import0.ApplicationContainer;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.ApplicationContainer(p0,p1,p2);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'window:beforeunload')) {
      const pd_sub_0:any = ((<any>this.context.beforeUnloadHandler($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'window:resize')) {
      const pd_sub_1:any = ((<any>this.context.onResize($event)) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
  const nodeDebugInfos_ApplicationContainer_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([
    import3.Title,
    import0.ApplicationContainer
  ]
,import0.ApplicationContainer,{})];
var renderType_ApplicationContainer_Host:import4.RenderComponentType = import5.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_ApplicationContainer_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ApplicationContainer>;
  _Title_0_3:import3.Title;
  _ApplicationContainer_0_4:Wrapper_ApplicationContainer;
  constructor(viewUtils:import5.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ApplicationContainer_Host0,renderType_ApplicationContainer_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ApplicationContainer_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer,'application',import5.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_ApplicationContainer0(this.viewUtils,this,0,this._el_0);
    this._Title_0_3 = new import3.Title();
    this._ApplicationContainer_0_4 = new Wrapper_ApplicationContainer(this._Title_0_3,this.injectorGet(import10.AppSandbox,this.parentIndex),this.injectorGet(import11.Router,this.parentIndex));
    this.compView_0.create(this._ApplicationContainer_0_4.context);
    var disposable_0:Function = import5.subscribeToRenderElement(this,this._el_0,new import5.InlineArray4(4,'beforeunload','window','resize','window'),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._ApplicationContainer_0_4.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Title) && (0 === requestNodeIndex))) { return this._Title_0_3; }
    if (((token === import0.ApplicationContainer) && (0 === requestNodeIndex))) { return this._ApplicationContainer_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._ApplicationContainer_0_4.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._ApplicationContainer_0_4.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.debug(0,0,0);
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._ApplicationContainer_0_4.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const ApplicationContainerNgFactory:import9.ComponentFactory<import0.ApplicationContainer> = new import9.ComponentFactory<import0.ApplicationContainer>('application',View_ApplicationContainer_Host0,import0.ApplicationContainer);
const styles_ApplicationContainer:any[] = ([] as any[]);
const nodeDebugInfos_ApplicationContainer1:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import12.NavbarComponent],import12.NavbarComponent,{})];
class View_ApplicationContainer1 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import12.NavbarComponent>;
  _NavbarComponent_0_3:import13.Wrapper_NavbarComponent;
  _pipe_async_0:import14.AsyncPipe;
  constructor(viewUtils:import5.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_ApplicationContainer1,renderType_ApplicationContainer,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ApplicationContainer1,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import5.createRenderElement(this.renderer,(null as any),'navbar',import5.EMPTY_INLINE_ARRAY,this.debug(0,1,8));
    this.compView_0 = new import13.View_NavbarComponent0(this.viewUtils,this,0,this._el_0);
    this._NavbarComponent_0_3 = new import13.Wrapper_NavbarComponent(this.parentView.injectorGet(import16.CommonSandbox,this.parentIndex));
    this.compView_0.create(this._NavbarComponent_0_3.context);
    var disposable_0:Function = import5.subscribeToRenderElement(this,this._el_0,new import5.InlineArray2(2,'logout',(null as any)),this.eventHandler(this.handleEvent_0));
    this._NavbarComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import14.AsyncPipe(this.parentView.ref);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.NavbarComponent) && (0 === requestNodeIndex))) { return this._NavbarComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import17.ValueUnwrapper();
    this.debug(0,1,16);
    valUnwrapper.reset();
    const currVal_0_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.parentView.context.account$));
    this._NavbarComponent_0_3.check_account(currVal_0_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    if (this._NavbarComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._NavbarComponent_0_3.ngOnDestroy();
    this.debug(0,1,8);
    this._pipe_async_0.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.debug(0,1,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'logout')) {
      const pd_sub_0:any = ((<any>this.parentView.context.logout()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
const nodeDebugInfos_ApplicationContainer2:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_ApplicationContainer2 extends import1.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import5.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_ApplicationContainer2,renderType_ApplicationContainer,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ApplicationContainer2,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import5.createRenderElement(this.renderer,(null as any),'h3',new import5.InlineArray2(2,'style','font-size: 40px; color: #838383'),this.debug(0,12,4));
    this._text_1 = this.renderer.createText(this._el_0,'messages',this.debug(1,12,99));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
const nodeDebugInfos_ApplicationContainer3:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import18.CommentsBarContainer],import18.CommentsBarContainer,{})];
class View_ApplicationContainer3 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import18.CommentsBarContainer>;
  _CommentsBarContainer_0_3:import19.Wrapper_CommentsBarContainer;
  constructor(viewUtils:import5.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_ApplicationContainer3,renderType_ApplicationContainer,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ApplicationContainer3,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import5.createRenderElement(this.renderer,(null as any),'comments-bar',import5.EMPTY_INLINE_ARRAY,this.debug(0,14,4));
    this.compView_0 = new import19.View_CommentsBarContainer0(this.viewUtils,this,0,this._el_0);
    this._CommentsBarContainer_0_3 = new import19.Wrapper_CommentsBarContainer(this.parentView.parentView.injectorGet(import20.CommentsSandbox,this.parentView.parentIndex));
    this.compView_0.create(this._CommentsBarContainer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.CommentsBarContainer) && (0 === requestNodeIndex))) { return this._CommentsBarContainer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,14,4);
    if (this._CommentsBarContainer_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._CommentsBarContainer_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
const nodeDebugInfos_ApplicationContainer4:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import21.AllActivitiesContainer],import21.AllActivitiesContainer,{})];
class View_ApplicationContainer4 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import21.AllActivitiesContainer>;
  _AllActivitiesContainer_0_3:import22.Wrapper_AllActivitiesContainer;
  constructor(viewUtils:import5.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_ApplicationContainer4,renderType_ApplicationContainer,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ApplicationContainer4,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import5.createRenderElement(this.renderer,(null as any),'all-activities',import5.EMPTY_INLINE_ARRAY,this.debug(0,15,4));
    this.compView_0 = new import22.View_AllActivitiesContainer0(this.viewUtils,this,0,this._el_0);
    this._AllActivitiesContainer_0_3 = new import22.Wrapper_AllActivitiesContainer(this.parentView.parentView.injectorGet(import23.ActivitiesSandbox,this.parentView.parentIndex));
    this.compView_0.create(this._AllActivitiesContainer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.AllActivitiesContainer) && (0 === requestNodeIndex))) { return this._AllActivitiesContainer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,15,4);
    if (this._AllActivitiesContainer_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._AllActivitiesContainer_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
const nodeDebugInfos_ApplicationContainer0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import24.TemplateRef,
    import25.NgIf
  ]
  ,(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import26.MdPrefixRejector,
    import27.MdSidenavContainer
  ]
  ,import27.MdSidenavContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import28.RouterOutlet],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import26.MdPrefixRejector,
    import27.MdSidenav
  ]
  ,import27.MdSidenav,{rightsidenav: import27.MdSidenav}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import24.TemplateRef,
    import25.NgIf
  ]
  ,(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import24.TemplateRef,
    import25.NgIf
  ]
  ,(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import24.TemplateRef,
    import25.NgIf
  ]
  ,(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_ApplicationContainer:import4.RenderComponentType = import5.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/app/containers/application/application.container.ts class ApplicationContainer - inline template',0,import6.ViewEncapsulation.None,styles_ApplicationContainer,{});
export class View_ApplicationContainer0 extends import1.DebugAppView<import0.ApplicationContainer> {
  _viewQuery_rightsidenav_0:import29.QueryList<any>;
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import15.ViewContainer;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import30.Wrapper_NgIf;
  _text_2:any;
  _el_3:any;
  compView_3:import1.AppView<import27.MdSidenavContainer>;
  _MdPrefixRejector_3_3:import31.Wrapper_MdPrefixRejector;
  _MdSidenavContainer_3_4:import32.Wrapper_MdSidenavContainer;
  _query_MdSidenav_3_0:import29.QueryList<any>;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  /*private*/ _vc_7:import15.ViewContainer;
  _RouterOutlet_7_5:import33.Wrapper_RouterOutlet;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  compView_10:import1.AppView<import27.MdSidenav>;
  _MdPrefixRejector_10_3:import31.Wrapper_MdPrefixRejector;
  _MdSidenav_10_4:import32.Wrapper_MdSidenav;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _vc_12:import15.ViewContainer;
  _TemplateRef_12_5:any;
  _NgIf_12_6:import30.Wrapper_NgIf;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _vc_14:import15.ViewContainer;
  _TemplateRef_14_5:any;
  _NgIf_14_6:import30.Wrapper_NgIf;
  _text_15:any;
  _anchor_16:any;
  /*private*/ _vc_16:import15.ViewContainer;
  _TemplateRef_16_5:any;
  _NgIf_16_6:import30.Wrapper_NgIf;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _pipe_async_0:import14.AsyncPipe;
  _pipe_async_1:import14.AsyncPipe;
  _pipe_async_2:import14.AsyncPipe;
  _pipe_async_3:import14.AsyncPipe;
  _pipe_async_4:import14.AsyncPipe;
  constructor(viewUtils:import5.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ApplicationContainer0,renderType_ApplicationContainer,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_ApplicationContainer0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_rightsidenav_0 = new import29.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(1,1,8));
    this._vc_1 = new import15.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import24.TemplateRef_(this,1,this._anchor_1);
    this._NgIf_1_6 = new import30.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(2,1,103));
    this._el_3 = import5.createRenderElement(this.renderer,parentRenderNode,'md-sidenav-container',new import5.InlineArray2(2,'class','app-container'),this.debug(3,2,8));
    this.compView_3 = new import32.View_MdSidenavContainer0(this.viewUtils,this,3,this._el_3);
    this._MdPrefixRejector_3_3 = new import31.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import26.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdSidenavContainer_3_4 = new import32.Wrapper_MdSidenavContainer(this.parentView.injectorGet(import34.Dir,this.parentIndex,(null as any)),new import35.ElementRef(this._el_3),this.renderer,this.parentView.injectorGet(import36.NgZone,this.parentIndex));
    this._query_MdSidenav_3_0 = new import29.QueryList<any>();
    this._text_4 = this.renderer.createText((null as any),'\n  \n  ',this.debug(4,2,88));
    this._el_5 = import5.createRenderElement(this.renderer,(null as any),'div',import5.EMPTY_INLINE_ARRAY,this.debug(5,4,2));
    this._text_6 = this.renderer.createText(this._el_5,'\n\n    ',this.debug(6,4,7));
    this._el_7 = import5.createRenderElement(this.renderer,this._el_5,'router-outlet',import5.EMPTY_INLINE_ARRAY,this.debug(7,6,4));
    this._vc_7 = new import15.ViewContainer(7,5,this,this._el_7);
    this._RouterOutlet_7_5 = new import33.Wrapper_RouterOutlet(this.parentView.injectorGet(import37.RouterOutletMap,this.parentIndex),this._vc_7.vcRef,this.parentView.injectorGet(import38.ComponentFactoryResolver,this.parentIndex),(null as any));
    this._text_8 = this.renderer.createText(this._el_5,'\n\n  ',this.debug(8,6,35));
    this._text_9 = this.renderer.createText((null as any),'\n\n  ',this.debug(9,8,8));
    this._el_10 = import5.createRenderElement(this.renderer,(null as any),'md-sidenav',new import5.InlineArray8(6,'align','end','class','right-sidenav','tabIndex','-1'),this.debug(10,10,2));
    this.compView_10 = new import32.View_MdSidenav0(this.viewUtils,this,10,this._el_10);
    this._MdPrefixRejector_10_3 = new import31.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import26.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdSidenav_10_4 = new import32.Wrapper_MdSidenav(new import35.ElementRef(this._el_10),this.renderer);
    this._text_11 = this.renderer.createText((null as any),'\n\n    ',this.debug(11,10,111));
    this._anchor_12 = this.renderer.createTemplateAnchor((null as any),this.debug(12,12,4));
    this._vc_12 = new import15.ViewContainer(12,10,this,this._anchor_12);
    this._TemplateRef_12_5 = new import24.TemplateRef_(this,12,this._anchor_12);
    this._NgIf_12_6 = new import30.Wrapper_NgIf(this._vc_12.vcRef,this._TemplateRef_12_5);
    this._text_13 = this.renderer.createText((null as any),'\n\n    ',this.debug(13,12,112));
    this._anchor_14 = this.renderer.createTemplateAnchor((null as any),this.debug(14,14,4));
    this._vc_14 = new import15.ViewContainer(14,10,this,this._anchor_14);
    this._TemplateRef_14_5 = new import24.TemplateRef_(this,14,this._anchor_14);
    this._NgIf_14_6 = new import30.Wrapper_NgIf(this._vc_14.vcRef,this._TemplateRef_14_5);
    this._text_15 = this.renderer.createText((null as any),'  \n    ',this.debug(15,14,84));
    this._anchor_16 = this.renderer.createTemplateAnchor((null as any),this.debug(16,15,4));
    this._vc_16 = new import15.ViewContainer(16,10,this,this._anchor_16);
    this._TemplateRef_16_5 = new import24.TemplateRef_(this,16,this._anchor_16);
    this._NgIf_16_6 = new import30.Wrapper_NgIf(this._vc_16.vcRef,this._TemplateRef_16_5);
    this._text_17 = this.renderer.createText((null as any),'  \n\n\n\n  ',this.debug(17,15,93));
    this.compView_10.create(this._MdSidenav_10_4.context);
    this._text_18 = this.renderer.createText((null as any),'\n\n',this.debug(18,19,15));
    this.compView_3.create(this._MdSidenavContainer_3_4.context);
    this._text_19 = this.renderer.createText(parentRenderNode,'\n\n  ',this.debug(19,21,23));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import14.AsyncPipe(this.ref);
    var disposable_0:Function = import5.subscribeToRenderElement(this,this._el_3,new import5.InlineArray2(2,'backdropClick',(null as any)),this.eventHandler(this.handleEvent_3));
    this._MdSidenavContainer_3_4.subscribe(this,this.eventHandler(this.handleEvent_3),true);
    var disposable_1:Function = import5.subscribeToRenderElement(this,this._el_10,new import5.InlineArray4(4,'transitionend',(null as any),'keydown',(null as any)),this.eventHandler(this.handleEvent_10));
    this._pipe_async_1 = new import14.AsyncPipe(this.ref);
    this._pipe_async_2 = new import14.AsyncPipe(this.ref);
    this._pipe_async_3 = new import14.AsyncPipe(this.ref);
    this._pipe_async_4 = new import14.AsyncPipe(this.ref);
    this._viewQuery_rightsidenav_0.reset([this._MdSidenav_10_4.context]);
    this.context.rightsidenav = this._viewQuery_rightsidenav_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
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
      this._anchor_12,
      this._text_13,
      this._anchor_14,
      this._text_15,
      this._anchor_16,
      this._text_17,
      this._text_18,
      this._text_19
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import25.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    if (((token === import28.RouterOutlet) && (7 === requestNodeIndex))) { return this._RouterOutlet_7_5.context; }
    if (((token === import24.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import25.NgIf) && (12 === requestNodeIndex))) { return this._NgIf_12_6.context; }
    if (((token === import24.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import25.NgIf) && (14 === requestNodeIndex))) { return this._NgIf_14_6.context; }
    if (((token === import24.TemplateRef) && (16 === requestNodeIndex))) { return this._TemplateRef_16_5; }
    if (((token === import25.NgIf) && (16 === requestNodeIndex))) { return this._NgIf_16_6.context; }
    if (((token === import26.MdPrefixRejector) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._MdPrefixRejector_10_3.context; }
    if (((token === import27.MdSidenav) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._MdSidenav_10_4.context; }
    if (((token === import26.MdPrefixRejector) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._MdPrefixRejector_3_3.context; }
    if (((token === import27.MdSidenavContainer) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._MdSidenavContainer_3_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import17.ValueUnwrapper();
    this.debug(1,1,63);
    valUnwrapper.reset();
    const currVal_1_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.isAuthenticated$));
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgIf_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this.debug(3,2,8);
    this._MdPrefixRejector_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this._MdSidenavContainer_3_4.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(7,6,4);
    this._RouterOutlet_7_5.ngDoCheck(this,this._el_7,throwOnChange);
    this.debug(10,10,2);
    this._MdPrefixRejector_10_3.ngDoCheck(this,this._el_10,throwOnChange);
    this.debug(10,10,47);
    const currVal_10_1_0:any = 'end';
    this._MdSidenav_10_4.check_align(currVal_10_1_0,throwOnChange,false);
    this.debug(10,10,28);
    const currVal_10_1_1:any = import5.inlineInterpolate(1,'',this.context.navMode,'');
    this._MdSidenav_10_4.check_mode(currVal_10_1_1,throwOnChange,false);
    this.debug(10,10,59);
    valUnwrapper.reset();
    const currVal_10_1_2:any = valUnwrapper.unwrap(this._pipe_async_1.transform(this.context.isCollapsed$));
    this._MdSidenav_10_4.check_opened(currVal_10_1_2,throwOnChange,valUnwrapper.hasWrappedValue);
    if (this._MdSidenav_10_4.ngDoCheck(this,this._el_10,throwOnChange)) { this.compView_10.markAsCheckOnce(); }
    this.debug(12,12,8);
    valUnwrapper.reset();
    const currVal_12_0_0:any = (valUnwrapper.unwrap(this._pipe_async_2.transform(this.context.activitiesBarMode$)) == 'messages');
    this._NgIf_12_6.check_ngIf(currVal_12_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgIf_12_6.ngDoCheck(this,this._anchor_12,throwOnChange);
    this.debug(14,14,18);
    valUnwrapper.reset();
    const currVal_14_0_0:any = (valUnwrapper.unwrap(this._pipe_async_3.transform(this.context.activitiesBarMode$)) == 'comments');
    this._NgIf_14_6.check_ngIf(currVal_14_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgIf_14_6.ngDoCheck(this,this._anchor_14,throwOnChange);
    this.debug(16,15,20);
    valUnwrapper.reset();
    const currVal_16_0_0:any = (valUnwrapper.unwrap(this._pipe_async_4.transform(this.context.activitiesBarMode$)) == 'notifications');
    this._NgIf_16_6.check_ngIf(currVal_16_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgIf_16_6.ngDoCheck(this,this._anchor_16,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._vc_12.detectChangesInNestedViews(throwOnChange);
    this._vc_14.detectChangesInNestedViews(throwOnChange);
    this._vc_16.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdSidenav_3_0.dirty) {
        this._query_MdSidenav_3_0.reset([this._MdSidenav_10_4.context]);
        this._MdSidenavContainer_3_4.context._sidenavs = this._query_MdSidenav_3_0;
        this._query_MdSidenav_3_0.notifyOnChanges();
      }
      this.debug(10,10,2);
      if ((this.numberOfChecks === 0)) { this._MdSidenav_10_4.context.ngAfterContentInit(); }
      this.debug(3,2,8);
      if ((this.numberOfChecks === 0)) { this._MdSidenavContainer_3_4.context.ngAfterContentInit(); }
    }
    this._MdSidenavContainer_3_4.checkHost(this,this.compView_3,this._el_3,throwOnChange);
    this._MdSidenav_10_4.checkHost(this,this.compView_10,this._el_10,throwOnChange);
    this.compView_3.internalDetectChanges(throwOnChange);
    this.compView_10.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this._vc_7.destroyNestedViews();
    this._vc_12.destroyNestedViews();
    this._vc_14.destroyNestedViews();
    this._vc_16.destroyNestedViews();
    this.compView_3.destroy();
    this.compView_10.destroy();
    this.debug(1,1,8);
    this._RouterOutlet_7_5.ngOnDestroy();
    this.debug(7,6,4);
    this.debug(12,12,4);
    this.debug(14,14,4);
    this.debug(16,15,4);
    this._MdSidenav_10_4.ngOnDestroy();
    this.debug(10,10,2);
    this._MdSidenavContainer_3_4.ngOnDestroy();
    this.debug(3,2,8);
    this._pipe_async_0.ngOnDestroy();
    this._pipe_async_1.ngOnDestroy();
    this._pipe_async_2.ngOnDestroy();
    this._pipe_async_3.ngOnDestroy();
    this._pipe_async_4.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 3) && (ngContentIndex == 0))) { cb(this._el_10,ctx); }
    if (((nodeIndex == 3) && (ngContentIndex == 1))) {
      cb(this._text_4,ctx);
      cb(this._el_5,ctx);
      cb(this._text_9,ctx);
      cb(this._text_18,ctx);
    }
    if (((nodeIndex == 10) && (ngContentIndex == 0))) {
      cb(this._text_11,ctx);
      cb(this._vc_12.nativeElement,ctx);
      this._vc_12.visitNestedViewRootNodes(cb,ctx);
      cb(this._text_13,ctx);
      cb(this._vc_14.nativeElement,ctx);
      this._vc_14.visitNestedViewRootNodes(cb,ctx);
      cb(this._text_15,ctx);
      cb(this._vc_16.nativeElement,ctx);
      this._vc_16.visitNestedViewRootNodes(cb,ctx);
      cb(this._text_17,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 1)) { return new View_ApplicationContainer1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    if ((nodeIndex == 12)) { return new View_ApplicationContainer2(this.viewUtils,this,12,this._anchor_12,this._vc_12); }
    if ((nodeIndex == 14)) { return new View_ApplicationContainer3(this.viewUtils,this,14,this._anchor_14,this._vc_14); }
    if ((nodeIndex == 16)) { return new View_ApplicationContainer4(this.viewUtils,this,16,this._anchor_16,this._vc_16); }
    return (null as any);
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.debug(3,2,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'backdropClick')) {
      const pd_sub_0:any = ((<any>this.context.onBackdropClick()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_10(eventName:string,$event:any):boolean {
    this.debug(10,10,2);
    this.compView_10.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdSidenav_10_4.handleEvent(eventName,$event) && result);
    return result;
  }
}