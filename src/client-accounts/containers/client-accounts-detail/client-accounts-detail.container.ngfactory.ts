/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './client-accounts-detail.container';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../client-accounts.sandbox';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '@angular/router/src/router';
import * as import12 from '../client-accounts-form-group/client-accounts-form-group.container';
import * as import13 from '../../../contacts/containers/contacts-widget/contacts-widget.container';
import * as import14 from '../../../addresses/containers/addresses-widget/addresses-widget.container';
import * as import15 from '../../../contacts/containers/health-occupation-widget/health-occupation-widget.container';
import * as import16 from '../../../contacts/containers/income-widget/income-widget.container';
import * as import17 from '../../../contacts/containers/contacts-intermediate-widget/contacts-intermediate-widget.container';
import * as import18 from '../../../client-documents/containers/client-documents-widget/client-documents-widget.container';
import * as import19 from '../../../tasks/containers/tasks-widget/tasks-widget.container';
import * as import20 from '../client-accounts-form-group/client-accounts-form-group.container.ngfactory';
import * as import21 from '../../../contacts/containers/contacts-widget/contacts-widget.container.ngfactory';
import * as import22 from '../../../addresses/containers/addresses-widget/addresses-widget.container.ngfactory';
import * as import23 from '../../../contacts/containers/health-occupation-widget/health-occupation-widget.container.ngfactory';
import * as import24 from '../../../contacts/containers/income-widget/income-widget.container.ngfactory';
import * as import25 from '../../../contacts/containers/contacts-intermediate-widget/contacts-intermediate-widget.container.ngfactory';
import * as import26 from '../../../client-documents/containers/client-documents-widget/client-documents-widget.container.ngfactory';
import * as import27 from '../../../tasks/containers/tasks-widget/tasks-widget.container.ngfactory';
import * as import28 from '@angular/common/src/pipes/async_pipe';
import * as import29 from '@angular/core/src/linker/view_container';
import * as import30 from '../../../comments/comments.sandbox';
import * as import31 from '@angular/forms/src/form_builder';
import * as import32 from '../../../contacts/contacts.sandbox';
import * as import33 from '../../../addresses/addresses.sandbox';
import * as import34 from '../../../client-documents/client-documents.sandbox';
import * as import35 from '@angular/core/src/linker/element_ref';
import * as import36 from '../../../tasks/tasks.sandbox';
import * as import37 from '@angular/core/src/change_detection/change_detection_util';
import * as import38 from '@angular/core/src/linker/template_ref';
import * as import39 from '@angular/common/src/directives/ng_if';
import * as import40 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
export class Wrapper_ClientAccountsDetailContainer {
  /*private*/ _eventHandler:Function;
  context:import0.ClientAccountsDetailContainer;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.ClientAccountsDetailContainer(p0,p1,p2);
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
const nodeDebugInfos_ClientAccountsDetailContainer_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.ClientAccountsDetailContainer],import0.ClientAccountsDetailContainer,{})];
var renderType_ClientAccountsDetailContainer_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_ClientAccountsDetailContainer_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ClientAccountsDetailContainer>;
  _ClientAccountsDetailContainer_0_3:Wrapper_ClientAccountsDetailContainer;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ClientAccountsDetailContainer_Host0,renderType_ClientAccountsDetailContainer_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ClientAccountsDetailContainer_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'client-accounts-detail',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_ClientAccountsDetailContainer0(this.viewUtils,this,0,this._el_0);
    this._ClientAccountsDetailContainer_0_3 = new Wrapper_ClientAccountsDetailContainer(this.injectorGet(import9.ClientAccountsSandbox,this.parentIndex),this.injectorGet(import10.ActivatedRoute,this.parentIndex),this.injectorGet(import11.Router,this.parentIndex));
    this.compView_0.create(this._ClientAccountsDetailContainer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._ClientAccountsDetailContainer_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ClientAccountsDetailContainer) && (0 === requestNodeIndex))) { return this._ClientAccountsDetailContainer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._ClientAccountsDetailContainer_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._ClientAccountsDetailContainer_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ClientAccountsDetailContainerNgFactory:import8.ComponentFactory<import0.ClientAccountsDetailContainer> = new import8.ComponentFactory<import0.ClientAccountsDetailContainer>('client-accounts-detail',View_ClientAccountsDetailContainer_Host0,import0.ClientAccountsDetailContainer);
const styles_ClientAccountsDetailContainer:any[] = ([] as any[]);
const nodeDebugInfos_ClientAccountsDetailContainer1:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import12.ClientAccountsFormGroupContainer],import12.ClientAccountsFormGroupContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import13.ContactsWidgetContainer],import13.ContactsWidgetContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import14.AddressesWidgetContainer],import14.AddressesWidgetContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import15.HealthOccupationWidgetContainer],import15.HealthOccupationWidgetContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import16.IncomeWidgetContainer],import16.IncomeWidgetContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import17.ContactsIntermediateWidgetContainer],import17.ContactsIntermediateWidgetContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import18.ClientDocumentsWidgetContainer],import18.ClientDocumentsWidgetContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import19.TasksWidgetContainer],import19.TasksWidgetContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_ClientAccountsDetailContainer1 extends import1.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import1.AppView<import12.ClientAccountsFormGroupContainer>;
  _ClientAccountsFormGroupContainer_2_3:import20.Wrapper_ClientAccountsFormGroupContainer;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  compView_5:import1.AppView<import13.ContactsWidgetContainer>;
  _ContactsWidgetContainer_5_3:import21.Wrapper_ContactsWidgetContainer;
  _text_6:any;
  _el_7:any;
  compView_7:import1.AppView<import14.AddressesWidgetContainer>;
  _AddressesWidgetContainer_7_3:import22.Wrapper_AddressesWidgetContainer;
  _text_8:any;
  _el_9:any;
  compView_9:import1.AppView<import15.HealthOccupationWidgetContainer>;
  _HealthOccupationWidgetContainer_9_3:import23.Wrapper_HealthOccupationWidgetContainer;
  _text_10:any;
  _el_11:any;
  compView_11:import1.AppView<import16.IncomeWidgetContainer>;
  _IncomeWidgetContainer_11_3:import24.Wrapper_IncomeWidgetContainer;
  _text_12:any;
  _el_13:any;
  compView_13:import1.AppView<import17.ContactsIntermediateWidgetContainer>;
  _ContactsIntermediateWidgetContainer_13_3:import25.Wrapper_ContactsIntermediateWidgetContainer;
  _text_14:any;
  _el_15:any;
  compView_15:import1.AppView<import18.ClientDocumentsWidgetContainer>;
  _ClientDocumentsWidgetContainer_15_3:import26.Wrapper_ClientDocumentsWidgetContainer;
  _text_16:any;
  _el_17:any;
  compView_17:import1.AppView<import19.TasksWidgetContainer>;
  _TasksWidgetContainer_17_3:import27.Wrapper_TasksWidgetContainer;
  _text_18:any;
  _pipe_async_0:import28.AsyncPipe;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import29.ViewContainer) {
    super(View_ClientAccountsDetailContainer1,renderType_ClientAccountsDetailContainer,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ClientAccountsDetailContainer1,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'div',import4.EMPTY_INLINE_ARRAY,this.debug(0,4,8));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',this.debug(1,4,48));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'client-accounts-form-group',import4.EMPTY_INLINE_ARRAY,this.debug(2,5,12));
    this.compView_2 = new import20.View_ClientAccountsFormGroupContainer0(this.viewUtils,this,2,this._el_2);
    this._ClientAccountsFormGroupContainer_2_3 = new import20.Wrapper_ClientAccountsFormGroupContainer(this.parentView.parentView.injectorGet(import9.ClientAccountsSandbox,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import30.CommentsSandbox,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import31.FormBuilder,this.parentView.parentIndex));
    this._text_3 = this.renderer.createText((null as any),'\n            ',this.debug(3,9,56));
    this.compView_2.create(this._ClientAccountsFormGroupContainer_2_3.context);
    this._text_4 = this.renderer.createText(this._el_0,'\n            ',this.debug(4,10,41));
    this._el_5 = import4.createRenderElement(this.renderer,this._el_0,'contacts-widget',import4.EMPTY_INLINE_ARRAY,this.debug(5,11,12));
    this.compView_5 = new import21.View_ContactsWidgetContainer0(this.viewUtils,this,5,this._el_5);
    this._ContactsWidgetContainer_5_3 = new import21.Wrapper_ContactsWidgetContainer(this.parentView.parentView.injectorGet(import32.ContactsSandbox,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import11.Router,this.parentView.parentIndex));
    this.compView_5.create(this._ContactsWidgetContainer_5_3.context);
    this._text_6 = this.renderer.createText(this._el_0,'\n            ',this.debug(6,11,47));
    this._el_7 = import4.createRenderElement(this.renderer,this._el_0,'addresses-widget',import4.EMPTY_INLINE_ARRAY,this.debug(7,12,12));
    this.compView_7 = new import22.View_AddressesWidgetContainer0(this.viewUtils,this,7,this._el_7);
    this._AddressesWidgetContainer_7_3 = new import22.Wrapper_AddressesWidgetContainer(this.parentView.parentView.injectorGet(import33.AddressesSandbox,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.ActivatedRoute,this.parentView.parentIndex));
    this.compView_7.create(this._AddressesWidgetContainer_7_3.context);
    this._text_8 = this.renderer.createText(this._el_0,'\n            ',this.debug(8,12,67));
    this._el_9 = import4.createRenderElement(this.renderer,this._el_0,'health-occupation-widget',import4.EMPTY_INLINE_ARRAY,this.debug(9,13,12));
    this.compView_9 = new import23.View_HealthOccupationWidgetContainer0(this.viewUtils,this,9,this._el_9);
    this._HealthOccupationWidgetContainer_9_3 = new import23.Wrapper_HealthOccupationWidgetContainer(this.parentView.parentView.injectorGet(import32.ContactsSandbox,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import11.Router,this.parentView.parentIndex));
    this.compView_9.create(this._HealthOccupationWidgetContainer_9_3.context);
    this._text_10 = this.renderer.createText(this._el_0,'\n            ',this.debug(10,13,65));
    this._el_11 = import4.createRenderElement(this.renderer,this._el_0,'income-widget',import4.EMPTY_INLINE_ARRAY,this.debug(11,14,12));
    this.compView_11 = new import24.View_IncomeWidgetContainer0(this.viewUtils,this,11,this._el_11);
    this._IncomeWidgetContainer_11_3 = new import24.Wrapper_IncomeWidgetContainer(this.parentView.parentView.injectorGet(import32.ContactsSandbox,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import11.Router,this.parentView.parentIndex));
    this.compView_11.create(this._IncomeWidgetContainer_11_3.context);
    this._text_12 = this.renderer.createText(this._el_0,'\n            ',this.debug(12,14,43));
    this._el_13 = import4.createRenderElement(this.renderer,this._el_0,'contacts-intermediate-widget',import4.EMPTY_INLINE_ARRAY,this.debug(13,15,12));
    this.compView_13 = new import25.View_ContactsIntermediateWidgetContainer0(this.viewUtils,this,13,this._el_13);
    this._ContactsIntermediateWidgetContainer_13_3 = new import25.Wrapper_ContactsIntermediateWidgetContainer(this.parentView.parentView.injectorGet(import32.ContactsSandbox,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import11.Router,this.parentView.parentIndex));
    this.compView_13.create(this._ContactsIntermediateWidgetContainer_13_3.context);
    this._text_14 = this.renderer.createText(this._el_0,'\n            ',this.debug(14,15,73));
    this._el_15 = import4.createRenderElement(this.renderer,this._el_0,'documents-widget',import4.EMPTY_INLINE_ARRAY,this.debug(15,16,12));
    this.compView_15 = new import26.View_ClientDocumentsWidgetContainer0(this.viewUtils,this,15,this._el_15);
    this._ClientDocumentsWidgetContainer_15_3 = new import26.Wrapper_ClientDocumentsWidgetContainer(this.parentView.parentView.injectorGet(import34.ClientDocumentsSandbox,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import11.Router,this.parentView.parentIndex),new import35.ElementRef(this._el_15));
    this.compView_15.create(this._ClientDocumentsWidgetContainer_15_3.context);
    this._text_16 = this.renderer.createText(this._el_0,'\n            ',this.debug(16,16,63));
    this._el_17 = import4.createRenderElement(this.renderer,this._el_0,'tasks-widget',import4.EMPTY_INLINE_ARRAY,this.debug(17,17,12));
    this.compView_17 = new import27.View_TasksWidgetContainer0(this.viewUtils,this,17,this._el_17);
    this._TasksWidgetContainer_17_3 = new import27.Wrapper_TasksWidgetContainer(this.parentView.parentView.injectorGet(import36.TasksSandbox,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import11.Router,this.parentView.parentIndex));
    this.compView_17.create(this._TasksWidgetContainer_17_3.context);
    this._text_18 = this.renderer.createText(this._el_0,'\n        ',this.debug(18,17,55));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_2,new import4.InlineArray8(6,'onSave',(null as any),'remove',(null as any),'updateStatus',(null as any)),this.eventHandler(this.handleEvent_2));
    this._ClientAccountsFormGroupContainer_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true,true,true);
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import28.AsyncPipe(this.parentView.ref);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.ClientAccountsFormGroupContainer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._ClientAccountsFormGroupContainer_2_3.context; }
    if (((token === import13.ContactsWidgetContainer) && (5 === requestNodeIndex))) { return this._ContactsWidgetContainer_5_3.context; }
    if (((token === import14.AddressesWidgetContainer) && (7 === requestNodeIndex))) { return this._AddressesWidgetContainer_7_3.context; }
    if (((token === import15.HealthOccupationWidgetContainer) && (9 === requestNodeIndex))) { return this._HealthOccupationWidgetContainer_9_3.context; }
    if (((token === import16.IncomeWidgetContainer) && (11 === requestNodeIndex))) { return this._IncomeWidgetContainer_11_3.context; }
    if (((token === import17.ContactsIntermediateWidgetContainer) && (13 === requestNodeIndex))) { return this._ContactsIntermediateWidgetContainer_13_3.context; }
    if (((token === import18.ClientDocumentsWidgetContainer) && (15 === requestNodeIndex))) { return this._ClientDocumentsWidgetContainer_15_3.context; }
    if (((token === import19.TasksWidgetContainer) && (17 === requestNodeIndex))) { return this._TasksWidgetContainer_17_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import37.ValueUnwrapper();
    this.debug(2,6,16);
    valUnwrapper.reset();
    const currVal_2_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.parentView.context.editClientAccount$));
    this._ClientAccountsFormGroupContainer_2_3.check_clientAccount(currVal_2_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    if (this._ClientAccountsFormGroupContainer_2_3.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    this.debug(5,11,12);
    if (this._ContactsWidgetContainer_5_3.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    this.debug(7,12,30);
    const currVal_7_0_0:any = false;
    this._AddressesWidgetContainer_7_3.check_contact(currVal_7_0_0,throwOnChange,false);
    if (this._AddressesWidgetContainer_7_3.ngDoCheck(this,this._el_7,throwOnChange)) { this.compView_7.markAsCheckOnce(); }
    this.debug(9,13,12);
    if (this._HealthOccupationWidgetContainer_9_3.ngDoCheck(this,this._el_9,throwOnChange)) { this.compView_9.markAsCheckOnce(); }
    this.debug(11,14,12);
    if (this._IncomeWidgetContainer_11_3.ngDoCheck(this,this._el_11,throwOnChange)) { this.compView_11.markAsCheckOnce(); }
    this.debug(13,15,12);
    if (this._ContactsIntermediateWidgetContainer_13_3.ngDoCheck(this,this._el_13,throwOnChange)) { this.compView_13.markAsCheckOnce(); }
    this.debug(15,16,30);
    const currVal_15_0_0:any = this.parentView.context.mode;
    this._ClientDocumentsWidgetContainer_15_3.check_mode(currVal_15_0_0,throwOnChange,false);
    if (this._ClientDocumentsWidgetContainer_15_3.ngDoCheck(this,this._el_15,throwOnChange)) { this.compView_15.markAsCheckOnce(); }
    this.debug(17,17,26);
    const currVal_17_0_0:any = this.parentView.context.mode;
    this._TasksWidgetContainer_17_3.check_mode(currVal_17_0_0,throwOnChange,false);
    if (this._TasksWidgetContainer_17_3.ngDoCheck(this,this._el_17,throwOnChange)) { this.compView_17.markAsCheckOnce(); }
    this.compView_2.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
    this.compView_7.internalDetectChanges(throwOnChange);
    this.compView_9.internalDetectChanges(throwOnChange);
    this.compView_11.internalDetectChanges(throwOnChange);
    this.compView_13.internalDetectChanges(throwOnChange);
    this.compView_15.internalDetectChanges(throwOnChange);
    this.compView_17.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
    this.compView_5.destroy();
    this.compView_7.destroy();
    this.compView_9.destroy();
    this.compView_11.destroy();
    this.compView_13.destroy();
    this.compView_15.destroy();
    this.compView_17.destroy();
    this._ClientAccountsFormGroupContainer_2_3.ngOnDestroy();
    this.debug(2,5,12);
    this._ContactsWidgetContainer_5_3.ngOnDestroy();
    this.debug(5,11,12);
    this.debug(7,12,12);
    this._HealthOccupationWidgetContainer_9_3.ngOnDestroy();
    this.debug(9,13,12);
    this._IncomeWidgetContainer_11_3.ngOnDestroy();
    this.debug(11,14,12);
    this._ContactsIntermediateWidgetContainer_13_3.ngOnDestroy();
    this.debug(13,15,12);
    this.debug(15,16,12);
    this._TasksWidgetContainer_17_3.ngOnDestroy();
    this.debug(17,17,12);
    this._pipe_async_0.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.debug(2,5,12);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'onSave')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onSave($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'remove')) {
      const pd_sub_1:any = ((<any>this.parentView.context.onRemove($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'updateStatus')) {
      const pd_sub_2:any = ((<any>this.parentView.context.onUpdateStatus($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}
const nodeDebugInfos_ClientAccountsDetailContainer0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import38.TemplateRef,
    import39.NgIf
  ]
  ,(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_ClientAccountsDetailContainer:import3.RenderComponentType = import4.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/client-accounts/containers/client-accounts-detail/client-accounts-detail.container.ts class ClientAccountsDetailContainer - inline template',0,import5.ViewEncapsulation.None,styles_ClientAccountsDetailContainer,{});
export class View_ClientAccountsDetailContainer0 extends import1.DebugAppView<import0.ClientAccountsDetailContainer> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import29.ViewContainer;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import40.Wrapper_NgIf;
  _text_4:any;
  _text_5:any;
  _pipe_async_0:import28.AsyncPipe;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ClientAccountsDetailContainer0,renderType_ClientAccountsDetailContainer,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ClientAccountsDetailContainer0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','example-scrolling-content'),this.debug(1,1,4));
    this._text_2 = this.renderer.createText(this._el_1,'\n        \n        \n        ',this.debug(2,1,43));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,this.debug(3,4,8));
    this._vc_3 = new import29.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import38.TemplateRef_(this,3,this._anchor_3);
    this._NgIf_3_6 = new import40.Wrapper_NgIf(this._vc_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n        \n    ',this.debug(4,18,14));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(5,20,10));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import28.AsyncPipe(this.ref);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import38.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import39.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import37.ValueUnwrapper();
    this.debug(3,4,13);
    valUnwrapper.reset();
    const currVal_3_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.editClientAccount$));
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgIf_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
    this.debug(3,4,8);
    this._pipe_async_0.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 3)) { return new View_ClientAccountsDetailContainer1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    return (null as any);
  }
}