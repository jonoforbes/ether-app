/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './xliabilities-widget.container';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../xliabilities.sandbox';
import * as import11 from '@angular/router/src/router_state';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/material/core/compatibility/compatibility';
import * as import14 from '@angular/material/tabs/tab';
import * as import15 from '../../components/xliability-tab/xliability-tab.component';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import18 from '../../../../node_modules/@angular/material/tabs/tab.ngfactory';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '../../components/xliability-tab/xliability-tab.component.ngfactory';
import * as import21 from '@angular/forms/src/form_builder';
import * as import22 from '@angular/material/tabs/tab-group';
import * as import23 from '../../components/add-xliability-tab/add-xliability-tab.component';
import * as import24 from '@angular/core/src/linker/template_ref';
import * as import25 from '@angular/common/src/directives/ng_for';
import * as import26 from '../../../../node_modules/@angular/material/tabs/tab-group.ngfactory';
import * as import27 from '../../components/add-xliability-tab/add-xliability-tab.component.ngfactory';
import * as import28 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import29 from '@angular/common/src/pipes/async_pipe';
import * as import30 from '@angular/core/src/change_detection/differs/iterable_differs';
export class Wrapper_XLiabilitiesWidgetContainer {
  /*private*/ _eventHandler:Function;
  context:import0.XLiabilitiesWidgetContainer;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.XLiabilitiesWidgetContainer(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  check_xLiabilityOwnerType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.xLiabilityOwnerType = currValue;
      this._changes['xLiabilityOwnerType'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_xLiabilityContactId(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.xLiabilityContactId = currValue;
      this._changes['xLiabilityContactId'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
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
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
const nodeDebugInfos_XLiabilitiesWidgetContainer_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.XLiabilitiesWidgetContainer],import0.XLiabilitiesWidgetContainer,{})];
var renderType_XLiabilitiesWidgetContainer_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_XLiabilitiesWidgetContainer_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.XLiabilitiesWidgetContainer>;
  _XLiabilitiesWidgetContainer_0_3:Wrapper_XLiabilitiesWidgetContainer;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_XLiabilitiesWidgetContainer_Host0,renderType_XLiabilitiesWidgetContainer_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_XLiabilitiesWidgetContainer_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'xliabilities-widget',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_XLiabilitiesWidgetContainer0(this.viewUtils,this,0,this._el_0);
    this._XLiabilitiesWidgetContainer_0_3 = new Wrapper_XLiabilitiesWidgetContainer(this.injectorGet(import10.XLiabilitiesSandbox,this.parentIndex),this.injectorGet(import11.ActivatedRoute,this.parentIndex),this.injectorGet(import12.Router,this.parentIndex));
    this.compView_0.create(this._XLiabilitiesWidgetContainer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._XLiabilitiesWidgetContainer_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.XLiabilitiesWidgetContainer) && (0 === requestNodeIndex))) { return this._XLiabilitiesWidgetContainer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._XLiabilitiesWidgetContainer_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._XLiabilitiesWidgetContainer_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const XLiabilitiesWidgetContainerNgFactory:import9.ComponentFactory<import0.XLiabilitiesWidgetContainer> = new import9.ComponentFactory<import0.XLiabilitiesWidgetContainer>('xliabilities-widget',View_XLiabilitiesWidgetContainer_Host0,import0.XLiabilitiesWidgetContainer);
const styles_XLiabilitiesWidgetContainer:any[] = ([] as any[]);
const nodeDebugInfos_XLiabilitiesWidgetContainer1:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo([
    import13.MdPrefixRejector,
    import14.MdTab
  ]
  ,import14.MdTab,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import15.XLiabilityTabComponent],import15.XLiabilityTabComponent,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_XLiabilitiesWidgetContainer1 extends import2.DebugAppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import16.ViewContainer;
  compView_0:import2.AppView<import14.MdTab>;
  _MdPrefixRejector_0_5:import17.Wrapper_MdPrefixRejector;
  _MdTab_0_6:import18.Wrapper_MdTab;
  _query_MdTabLabel_0_0:import19.QueryList<any>;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import15.XLiabilityTabComponent>;
  _XLiabilityTabComponent_2_3:import20.Wrapper_XLiabilityTabComponent;
  _text_3:any;
  _el_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_XLiabilitiesWidgetContainer1,renderType_XLiabilitiesWidgetContainer,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_XLiabilitiesWidgetContainer1,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'md-tab',import3.EMPTY_INLINE_ARRAY,this.debug(0,6,8));
    this._vc_0 = new import16.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new import18.View_MdTab0(this.viewUtils,this,0,this._el_0);
    this._MdPrefixRejector_0_5 = new import17.Wrapper_MdPrefixRejector(this.parentView.parentView.injectorGet(import13.MATERIAL_COMPATIBILITY_MODE,this.parentView.parentIndex,(null as any)));
    this._MdTab_0_6 = new import18.Wrapper_MdTab(this._vc_0.vcRef);
    this._query_MdTabLabel_0_0 = new import19.QueryList<any>();
    this._text_1 = this.renderer.createText((null as any),'\n            ',this.debug(1,6,96));
    this._el_2 = import3.createRenderElement(this.renderer,(null as any),'xliability-tab',import3.EMPTY_INLINE_ARRAY,this.debug(2,7,12));
    this.compView_2 = new import20.View_XLiabilityTabComponent0(this.viewUtils,this,2,this._el_2);
    this._XLiabilityTabComponent_2_3 = new import20.Wrapper_XLiabilityTabComponent(this.parentView.parentView.injectorGet(import21.FormBuilder,this.parentView.parentIndex));
    this.compView_2.create(this._XLiabilityTabComponent_2_3.context);
    this._text_3 = this.renderer.createText((null as any),'\n        ',this.debug(3,7,109));
    this.compView_0.create(this._MdTab_0_6.context);
    this._el_4 = this.renderer.createTemplateAnchor((null as any),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'updateXLiability',(null as any)),this.eventHandler(this.handleEvent_2));
    this._XLiabilityTabComponent_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true);
    this._query_MdTabLabel_0_0.reset(([] as any[]));
    this._MdTab_0_6.context.templateLabel = this._query_MdTabLabel_0_0.first;
    this.init(this._el_4,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.XLiabilityTabComponent) && (2 === requestNodeIndex))) { return this._XLiabilityTabComponent_2_3.context; }
    if (((token === import13.MdPrefixRejector) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._MdPrefixRejector_0_5.context; }
    if (((token === import14.MdTab) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._MdTab_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,6,8);
    this._MdPrefixRejector_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(0,6,68);
    const currVal_0_1_0:any = import3.inlineInterpolate(1,'',this.context.$implicit.type,'');
    this._MdTab_0_6.check_textLabel(currVal_0_1_0,throwOnChange,false);
    this._MdTab_0_6.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(2,7,66);
    const currVal_2_0_0:any = this.context.$implicit;
    this._XLiabilityTabComponent_2_3.check_xLiability(currVal_2_0_0,throwOnChange,false);
    if (this._XLiabilityTabComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  dirtyParentQueriesInternal():void {
    (<View_XLiabilitiesWidgetContainer0>this.parentView)._query_MdTab_1_0.setDirty();
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this.compView_2.destroy();
    this._XLiabilityTabComponent_2_3.ngOnDestroy();
    this.debug(2,7,12);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_4,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {
      cb(this._text_1,ctx);
      cb(this._el_2,ctx);
      cb(this._text_3,ctx);
    }
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.debug(2,7,12);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'updateXLiability')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onUpdate($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
const nodeDebugInfos_XLiabilitiesWidgetContainer0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import13.MdPrefixRejector,
    import22.MdTabGroup
  ]
  ,import22.MdTabGroup,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import13.MdPrefixRejector,
    import14.MdTab
  ]
  ,import14.MdTab,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import23.AddXLiabilityTabComponent],import23.AddXLiabilityTabComponent,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import24.TemplateRef,
    import25.NgFor
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_XLiabilitiesWidgetContainer:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/xliabilities/containers/xliabilities-widget/xliabilities-widget.container.ts class XLiabilitiesWidgetContainer - inline template',0,import6.ViewEncapsulation.None,styles_XLiabilitiesWidgetContainer,{});
export class View_XLiabilitiesWidgetContainer0 extends import2.DebugAppView<import0.XLiabilitiesWidgetContainer> {
  _text_0:any;
  _el_1:any;
  compView_1:import2.AppView<import22.MdTabGroup>;
  _MdPrefixRejector_1_3:import17.Wrapper_MdPrefixRejector;
  _MdTabGroup_1_4:import26.Wrapper_MdTabGroup;
  _query_MdTab_1_0:import19.QueryList<any>;
  _text_2:any;
  _el_3:any;
  /*private*/ _vc_3:import16.ViewContainer;
  compView_3:import2.AppView<import14.MdTab>;
  _MdPrefixRejector_3_5:import17.Wrapper_MdPrefixRejector;
  _MdTab_3_6:import18.Wrapper_MdTab;
  _query_MdTabLabel_3_0:import19.QueryList<any>;
  _text_4:any;
  _el_5:any;
  compView_5:import2.AppView<import23.AddXLiabilityTabComponent>;
  _AddXLiabilityTabComponent_5_3:import27.Wrapper_AddXLiabilityTabComponent;
  _text_6:any;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import16.ViewContainer;
  _TemplateRef_8_5:any;
  _NgFor_8_6:import28.Wrapper_NgFor;
  _text_9:any;
  _text_10:any;
  _pipe_async_0:import29.AsyncPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_XLiabilitiesWidgetContainer0,renderType_XLiabilitiesWidgetContainer,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_XLiabilitiesWidgetContainer0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n\n    ',this.debug(0,0,0));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'md-tab-group',import3.EMPTY_INLINE_ARRAY,this.debug(1,2,4));
    this.compView_1 = new import26.View_MdTabGroup0(this.viewUtils,this,1,this._el_1);
    this._MdPrefixRejector_1_3 = new import17.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import13.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdTabGroup_1_4 = new import26.Wrapper_MdTabGroup(this.renderer);
    this._query_MdTab_1_0 = new import19.QueryList<any>();
    this._text_2 = this.renderer.createText((null as any),'\n        ',this.debug(2,2,38));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),'md-tab',new import3.InlineArray2(2,'label','+'),this.debug(3,3,8));
    this._vc_3 = new import16.ViewContainer(3,1,this,this._el_3);
    this.compView_3 = new import18.View_MdTab0(this.viewUtils,this,3,this._el_3);
    this._MdPrefixRejector_3_5 = new import17.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import13.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdTab_3_6 = new import18.Wrapper_MdTab(this._vc_3.vcRef);
    this._query_MdTabLabel_3_0 = new import19.QueryList<any>();
    this._text_4 = this.renderer.createText((null as any),'\n        ',this.debug(4,3,26));
    this._el_5 = import3.createRenderElement(this.renderer,(null as any),'add-xliability-tab',import3.EMPTY_INLINE_ARRAY,this.debug(5,4,8));
    this.compView_5 = new import27.View_AddXLiabilityTabComponent0(this.viewUtils,this,5,this._el_5);
    this._AddXLiabilityTabComponent_5_3 = new import27.Wrapper_AddXLiabilityTabComponent(this.parentView.injectorGet(import21.FormBuilder,this.parentIndex));
    this.compView_5.create(this._AddXLiabilityTabComponent_5_3.context);
    this._text_6 = this.renderer.createText((null as any),'\n        ',this.debug(6,4,83));
    this.compView_3.create(this._MdTab_3_6.context);
    this._text_7 = this.renderer.createText((null as any),'\n        ',this.debug(7,5,17));
    this._anchor_8 = this.renderer.createTemplateAnchor((null as any),this.debug(8,6,8));
    this._vc_8 = new import16.ViewContainer(8,1,this,this._anchor_8);
    this._TemplateRef_8_5 = new import24.TemplateRef_(this,8,this._anchor_8);
    this._NgFor_8_6 = new import28.Wrapper_NgFor(this._vc_8.vcRef,this._TemplateRef_8_5,this.parentView.injectorGet(import30.IterableDiffers,this.parentIndex),this.ref);
    this._text_9 = this.renderer.createText((null as any),'      \n    ',this.debug(9,8,17));
    this.compView_1.create(this._MdTabGroup_1_4.context);
    this._text_10 = this.renderer.createText(parentRenderNode,'\n        \n\n    \n    \n    \n    ',this.debug(10,9,19));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'addXLiability',(null as any)),this.eventHandler(this.handleEvent_5));
    this._AddXLiabilityTabComponent_5_3.subscribe(this,this.eventHandler(this.handleEvent_5),true);
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import29.AsyncPipe(this.ref);
    this._query_MdTabLabel_3_0.reset(([] as any[]));
    this._MdTab_3_6.context.templateLabel = this._query_MdTabLabel_3_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._text_10
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.AddXLiabilityTabComponent) && (5 === requestNodeIndex))) { return this._AddXLiabilityTabComponent_5_3.context; }
    if (((token === import13.MdPrefixRejector) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._MdPrefixRejector_3_5.context; }
    if (((token === import14.MdTab) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._MdTab_3_6.context; }
    if (((token === import24.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import25.NgFor) && (8 === requestNodeIndex))) { return this._NgFor_8_6.context; }
    if (((token === import13.MdPrefixRejector) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._MdPrefixRejector_1_3.context; }
    if (((token === import22.MdTabGroup) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._MdTabGroup_1_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    this.debug(1,2,4);
    this._MdPrefixRejector_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(1,2,18);
    const currVal_1_1_0:any = 1;
    this._MdTabGroup_1_4.check_selectedIndex(currVal_1_1_0,throwOnChange,false);
    this._MdTabGroup_1_4.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(3,3,8);
    this._MdPrefixRejector_3_5.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(3,3,16);
    const currVal_3_1_0:any = '+';
    this._MdTab_3_6.check_textLabel(currVal_3_1_0,throwOnChange,false);
    this._MdTab_3_6.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(5,4,8);
    if (this._AddXLiabilityTabComponent_5_3.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    this.debug(8,6,16);
    valUnwrapper.reset();
    const currVal_8_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.xLiabilities$));
    this._NgFor_8_6.check_ngForOf(currVal_8_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgFor_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdTab_1_0.dirty) {
        this._query_MdTab_1_0.reset([
          this._MdTab_3_6.context,
          this._vc_8.mapNestedViews(View_XLiabilitiesWidgetContainer1,(nestedView:View_XLiabilitiesWidgetContainer1):any => {
            return [nestedView._MdTab_0_6.context];
          })
        ]
        );
        this._MdTabGroup_1_4.context._tabs = this._query_MdTab_1_0;
        this._query_MdTab_1_0.notifyOnChanges();
      }
      this.debug(1,2,4);
      this._MdTabGroup_1_4.context.ngAfterContentChecked();
    }
    this._MdTabGroup_1_4.checkHost(this,this.compView_1,this._el_1,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_3.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(1,2,4);
      this._MdTabGroup_1_4.context.ngAfterViewChecked();
    }
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
    this._vc_8.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_3.destroy();
    this.compView_5.destroy();
    this._AddXLiabilityTabComponent_5_3.ngOnDestroy();
    this.debug(5,4,8);
    this.debug(3,3,8);
    this.debug(8,6,8);
    this._MdTabGroup_1_4.ngOnDestroy();
    this.debug(1,2,4);
    this._pipe_async_0.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 3) && (ngContentIndex == 0))) {
      cb(this._text_4,ctx);
      cb(this._el_5,ctx);
      cb(this._text_6,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 8)) { return new View_XLiabilitiesWidgetContainer1(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    return (null as any);
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.debug(5,4,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'addXLiability')) {
      const pd_sub_0:any = ((<any>this.context.onSave($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}