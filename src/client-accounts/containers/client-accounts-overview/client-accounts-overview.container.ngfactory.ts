/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './client-accounts-overview.container';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../client-accounts.sandbox';
import * as import10 from '../../components/detail-header/detail-header.component';
import * as import11 from '../add-client-account/add-client-account.container';
import * as import12 from '../../components/status-widget/status-widget.component';
import * as import13 from '../../components/detail-header/detail-header.component.ngfactory';
import * as import14 from '../add-client-account/add-client-account.container.ngfactory';
import * as import15 from '../../components/status-widget/status-widget.component.ngfactory';
import * as import16 from '@angular/common/src/pipes/async_pipe';
import * as import17 from '../../services/client-accounts.service';
import * as import18 from '@angular/forms/src/form_builder';
import * as import19 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_ClientAccountsOverviewContainer {
  /*private*/ _eventHandler:Function;
  context:import0.ClientAccountsOverviewContainer;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.ClientAccountsOverviewContainer(p0);
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
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
const nodeDebugInfos_ClientAccountsOverviewContainer_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.ClientAccountsOverviewContainer],import0.ClientAccountsOverviewContainer,{})];
var renderType_ClientAccountsOverviewContainer_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_ClientAccountsOverviewContainer_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ClientAccountsOverviewContainer>;
  _ClientAccountsOverviewContainer_0_3:Wrapper_ClientAccountsOverviewContainer;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ClientAccountsOverviewContainer_Host0,renderType_ClientAccountsOverviewContainer_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ClientAccountsOverviewContainer_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'client-accounts-overview',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_ClientAccountsOverviewContainer0(this.viewUtils,this,0,this._el_0);
    this._ClientAccountsOverviewContainer_0_3 = new Wrapper_ClientAccountsOverviewContainer(this.injectorGet(import9.ClientAccountsSandbox,this.parentIndex));
    this.compView_0.create(this._ClientAccountsOverviewContainer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._ClientAccountsOverviewContainer_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ClientAccountsOverviewContainer) && (0 === requestNodeIndex))) { return this._ClientAccountsOverviewContainer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._ClientAccountsOverviewContainer_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._ClientAccountsOverviewContainer_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ClientAccountsOverviewContainerNgFactory:import8.ComponentFactory<import0.ClientAccountsOverviewContainer> = new import8.ComponentFactory<import0.ClientAccountsOverviewContainer>('client-accounts-overview',View_ClientAccountsOverviewContainer_Host0,import0.ClientAccountsOverviewContainer);
const styles_ClientAccountsOverviewContainer:any[] = ([] as any[]);
const nodeDebugInfos_ClientAccountsOverviewContainer0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import10.ClientAccountsDetailHeaderComponent],import10.ClientAccountsDetailHeaderComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import11.AddClientAccountContainer],import11.AddClientAccountContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import12.ClientAccountsStatusWidgetComponent],import12.ClientAccountsStatusWidgetComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_ClientAccountsOverviewContainer:import3.RenderComponentType = import4.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/client-accounts/containers/client-accounts-overview/client-accounts-overview.container.ts class ClientAccountsOverviewContainer - inline template',0,import5.ViewEncapsulation.None,styles_ClientAccountsOverviewContainer,{});
export class View_ClientAccountsOverviewContainer0 extends import1.DebugAppView<import0.ClientAccountsOverviewContainer> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  compView_3:import1.AppView<import10.ClientAccountsDetailHeaderComponent>;
  _ClientAccountsDetailHeaderComponent_3_3:import13.Wrapper_ClientAccountsDetailHeaderComponent;
  _text_4:any;
  _el_5:any;
  compView_5:import1.AppView<import11.AddClientAccountContainer>;
  _AddClientAccountContainer_5_3:import14.Wrapper_AddClientAccountContainer;
  _text_6:any;
  _el_7:any;
  compView_7:import1.AppView<import12.ClientAccountsStatusWidgetComponent>;
  _ClientAccountsStatusWidgetComponent_7_3:import15.Wrapper_ClientAccountsStatusWidgetComponent;
  _text_8:any;
  _text_9:any;
  _pipe_async_0:import16.AsyncPipe;
  _pipe_async_1:import16.AsyncPipe;
  _pipe_async_2:import16.AsyncPipe;
  _pipe_async_3:import16.AsyncPipe;
  _pipe_async_4:import16.AsyncPipe;
  _pipe_async_5:import16.AsyncPipe;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ClientAccountsOverviewContainer0,renderType_ClientAccountsOverviewContainer,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_ClientAccountsOverviewContainer0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','example-scrolling-content'),this.debug(1,1,4));
    this._text_2 = this.renderer.createText(this._el_1,'\n        ',this.debug(2,1,43));
    this._el_3 = import4.createRenderElement(this.renderer,this._el_1,'client-accounts-detail-header',import4.EMPTY_INLINE_ARRAY,this.debug(3,2,8));
    this.compView_3 = new import13.View_ClientAccountsDetailHeaderComponent0(this.viewUtils,this,3,this._el_3);
    this._ClientAccountsDetailHeaderComponent_3_3 = new import13.Wrapper_ClientAccountsDetailHeaderComponent(this.parentView.injectorGet(import17.ClientAccountsService,this.parentIndex));
    this.compView_3.create(this._ClientAccountsDetailHeaderComponent_3_3.context);
    this._text_4 = this.renderer.createText(this._el_1,'\n\n            ',this.debug(4,3,58));
    this._el_5 = import4.createRenderElement(this.renderer,this._el_1,'add-client-account',import4.EMPTY_INLINE_ARRAY,this.debug(5,5,12));
    this.compView_5 = new import14.View_AddClientAccountContainer0(this.viewUtils,this,5,this._el_5);
    this._AddClientAccountContainer_5_3 = new import14.Wrapper_AddClientAccountContainer(this.parentView.injectorGet(import18.FormBuilder,this.parentIndex));
    this.compView_5.create(this._AddClientAccountContainer_5_3.context);
    this._text_6 = this.renderer.createText(this._el_1,'\n\n            ',this.debug(6,5,79));
    this._el_7 = import4.createRenderElement(this.renderer,this._el_1,'client-accounts-status-widget',import4.EMPTY_INLINE_ARRAY,this.debug(7,7,12));
    this.compView_7 = new import15.View_ClientAccountsStatusWidgetComponent0(this.viewUtils,this,7,this._el_7);
    this._ClientAccountsStatusWidgetComponent_7_3 = new import15.Wrapper_ClientAccountsStatusWidgetComponent();
    this.compView_7.create(this._ClientAccountsStatusWidgetComponent_7_3.context);
    this._text_8 = this.renderer.createText(this._el_1,'\n\n\n    ',this.debug(8,14,49));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(9,17,10));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_5,new import4.InlineArray2(2,'onSave',(null as any)),this.eventHandler(this.handleEvent_5));
    this._AddClientAccountContainer_5_3.subscribe(this,this.eventHandler(this.handleEvent_5),true);
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import16.AsyncPipe(this.ref);
    this._pipe_async_1 = new import16.AsyncPipe(this.ref);
    this._pipe_async_2 = new import16.AsyncPipe(this.ref);
    this._pipe_async_3 = new import16.AsyncPipe(this.ref);
    this._pipe_async_4 = new import16.AsyncPipe(this.ref);
    this._pipe_async_5 = new import16.AsyncPipe(this.ref);
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
      this._text_9
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.ClientAccountsDetailHeaderComponent) && (3 === requestNodeIndex))) { return this._ClientAccountsDetailHeaderComponent_3_3.context; }
    if (((token === import11.AddClientAccountContainer) && (5 === requestNodeIndex))) { return this._AddClientAccountContainer_5_3.context; }
    if (((token === import12.ClientAccountsStatusWidgetComponent) && (7 === requestNodeIndex))) { return this._ClientAccountsStatusWidgetComponent_7_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import19.ValueUnwrapper();
    this.debug(3,3,12);
    const currVal_3_0_0:any = this.context.mode;
    this._ClientAccountsDetailHeaderComponent_3_3.check_mode(currVal_3_0_0,throwOnChange,false);
    if (this._ClientAccountsDetailHeaderComponent_3_3.ngDoCheck(this,this._el_3,throwOnChange)) { this.compView_3.markAsCheckOnce(); }
    this.debug(5,5,12);
    if (this._AddClientAccountContainer_5_3.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    this.debug(7,8,16);
    valUnwrapper.reset();
    const currVal_7_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.totalCount$));
    this._ClientAccountsStatusWidgetComponent_7_3.check_totalCount(currVal_7_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this.debug(7,9,16);
    valUnwrapper.reset();
    const currVal_7_0_1:any = valUnwrapper.unwrap(this._pipe_async_1.transform(this.context.activeCount$));
    this._ClientAccountsStatusWidgetComponent_7_3.check_activeCount(currVal_7_0_1,throwOnChange,valUnwrapper.hasWrappedValue);
    this.debug(7,10,16);
    valUnwrapper.reset();
    const currVal_7_0_2:any = valUnwrapper.unwrap(this._pipe_async_2.transform(this.context.inactiveCount$));
    this._ClientAccountsStatusWidgetComponent_7_3.check_inactiveCount(currVal_7_0_2,throwOnChange,valUnwrapper.hasWrappedValue);
    this.debug(7,11,16);
    valUnwrapper.reset();
    const currVal_7_0_3:any = valUnwrapper.unwrap(this._pipe_async_3.transform(this.context.reviewCount$));
    this._ClientAccountsStatusWidgetComponent_7_3.check_reviewCount(currVal_7_0_3,throwOnChange,valUnwrapper.hasWrappedValue);
    this.debug(7,12,16);
    valUnwrapper.reset();
    const currVal_7_0_4:any = valUnwrapper.unwrap(this._pipe_async_4.transform(this.context.attentionCount$));
    this._ClientAccountsStatusWidgetComponent_7_3.check_attentionCount(currVal_7_0_4,throwOnChange,valUnwrapper.hasWrappedValue);
    this.debug(7,13,16);
    valUnwrapper.reset();
    const currVal_7_0_5:any = valUnwrapper.unwrap(this._pipe_async_5.transform(this.context.deletionCount$));
    this._ClientAccountsStatusWidgetComponent_7_3.check_deletionCount(currVal_7_0_5,throwOnChange,valUnwrapper.hasWrappedValue);
    if (this._ClientAccountsStatusWidgetComponent_7_3.ngDoCheck(this,this._el_7,throwOnChange)) { this.compView_7.markAsCheckOnce(); }
    this.compView_3.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
    this.compView_7.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_3.destroy();
    this.compView_5.destroy();
    this.compView_7.destroy();
    this._ClientAccountsDetailHeaderComponent_3_3.ngOnDestroy();
    this.debug(3,2,8);
    this._AddClientAccountContainer_5_3.ngOnDestroy();
    this.debug(5,5,12);
    this.debug(7,7,12);
    this._pipe_async_0.ngOnDestroy();
    this._pipe_async_1.ngOnDestroy();
    this._pipe_async_2.ngOnDestroy();
    this._pipe_async_3.ngOnDestroy();
    this._pipe_async_4.ngOnDestroy();
    this._pipe_async_5.ngOnDestroy();
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.debug(5,5,12);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'onSave')) {
      const pd_sub_0:any = ((<any>this.context.onSave($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}