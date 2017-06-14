/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './xpensions-widget.container';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../xpensions.sandbox';
import * as import11 from '@angular/router/src/router_state';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/material/core/compatibility/compatibility';
import * as import14 from '@angular/material/tabs/tab';
import * as import15 from '../../components/xpension-tab/xpension-tab.component';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import18 from '../../../../node_modules/@angular/material/tabs/tab.ngfactory';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '../../components/xpension-tab/xpension-tab.component.ngfactory';
import * as import21 from '@angular/forms/src/form_builder';
import * as import22 from '@angular/material/tabs/tab-group';
import * as import23 from '../../components/add-xpension-tab/add-xpension-tab.component';
import * as import24 from '@angular/core/src/linker/template_ref';
import * as import25 from '@angular/common/src/directives/ng_for';
import * as import26 from '../../../../node_modules/@angular/material/tabs/tab-group.ngfactory';
import * as import27 from '../../components/add-xpension-tab/add-xpension-tab.component.ngfactory';
import * as import28 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import29 from '@angular/common/src/pipes/async_pipe';
import * as import30 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import31 from '@angular/common/src/directives/ng_if';
import * as import32 from '@angular/material/button/button';
import * as import33 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import34 from '../../../../node_modules/@angular/material/button/button.ngfactory';
import * as import35 from '@angular/core/src/linker/element_ref';
export class Wrapper_XPensionsWidgetContainer {
  /*private*/ _eventHandler:Function;
  context:import0.XPensionsWidgetContainer;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.XPensionsWidgetContainer(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  check_xPensionOwnerType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.xPensionOwnerType = currValue;
      this._changes['xPensionOwnerType'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_xPensionContactId(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.xPensionContactId = currValue;
      this._changes['xPensionContactId'] = new import1.SimpleChange(this._expr_1,currValue);
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
const nodeDebugInfos_XPensionsWidgetContainer_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.XPensionsWidgetContainer],import0.XPensionsWidgetContainer,{})];
var renderType_XPensionsWidgetContainer_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_XPensionsWidgetContainer_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.XPensionsWidgetContainer>;
  _XPensionsWidgetContainer_0_3:Wrapper_XPensionsWidgetContainer;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_XPensionsWidgetContainer_Host0,renderType_XPensionsWidgetContainer_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_XPensionsWidgetContainer_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'xpensions-widget',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_XPensionsWidgetContainer0(this.viewUtils,this,0,this._el_0);
    this._XPensionsWidgetContainer_0_3 = new Wrapper_XPensionsWidgetContainer(this.injectorGet(import10.XPensionsSandbox,this.parentIndex),this.injectorGet(import11.ActivatedRoute,this.parentIndex),this.injectorGet(import12.Router,this.parentIndex));
    this.compView_0.create(this._XPensionsWidgetContainer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._XPensionsWidgetContainer_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.XPensionsWidgetContainer) && (0 === requestNodeIndex))) { return this._XPensionsWidgetContainer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._XPensionsWidgetContainer_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._XPensionsWidgetContainer_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const XPensionsWidgetContainerNgFactory:import9.ComponentFactory<import0.XPensionsWidgetContainer> = new import9.ComponentFactory<import0.XPensionsWidgetContainer>('xpensions-widget',View_XPensionsWidgetContainer_Host0,import0.XPensionsWidgetContainer);
const styles_XPensionsWidgetContainer:any[] = ([] as any[]);
const nodeDebugInfos_XPensionsWidgetContainer2:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo([
    import13.MdPrefixRejector,
    import14.MdTab
  ]
  ,import14.MdTab,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import15.XPensionTabComponent],import15.XPensionTabComponent,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_XPensionsWidgetContainer2 extends import2.DebugAppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import16.ViewContainer;
  compView_0:import2.AppView<import14.MdTab>;
  _MdPrefixRejector_0_5:import17.Wrapper_MdPrefixRejector;
  _MdTab_0_6:import18.Wrapper_MdTab;
  _query_MdTabLabel_0_0:import19.QueryList<any>;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import15.XPensionTabComponent>;
  _XPensionTabComponent_2_3:import20.Wrapper_XPensionTabComponent;
  _text_3:any;
  _el_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_XPensionsWidgetContainer2,renderType_XPensionsWidgetContainer,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_XPensionsWidgetContainer2,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'md-tab',import3.EMPTY_INLINE_ARRAY,this.debug(0,6,8));
    this._vc_0 = new import16.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new import18.View_MdTab0(this.viewUtils,this,0,this._el_0);
    this._MdPrefixRejector_0_5 = new import17.Wrapper_MdPrefixRejector(this.parentView.parentView.injectorGet(import13.MATERIAL_COMPATIBILITY_MODE,this.parentView.parentIndex,(null as any)));
    this._MdTab_0_6 = new import18.Wrapper_MdTab(this._vc_0.vcRef);
    this._query_MdTabLabel_0_0 = new import19.QueryList<any>();
    this._text_1 = this.renderer.createText((null as any),'\n            ',this.debug(1,6,96));
    this._el_2 = import3.createRenderElement(this.renderer,(null as any),'xpension-tab',import3.EMPTY_INLINE_ARRAY,this.debug(2,7,12));
    this.compView_2 = new import20.View_XPensionTabComponent0(this.viewUtils,this,2,this._el_2);
    this._XPensionTabComponent_2_3 = new import20.Wrapper_XPensionTabComponent(this.parentView.parentView.injectorGet(import21.FormBuilder,this.parentView.parentIndex));
    this.compView_2.create(this._XPensionTabComponent_2_3.context);
    this._text_3 = this.renderer.createText((null as any),'\n        ',this.debug(3,7,99));
    this.compView_0.create(this._MdTab_0_6.context);
    this._el_4 = this.renderer.createTemplateAnchor((null as any),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'updateXPension',(null as any)),this.eventHandler(this.handleEvent_2));
    this._XPensionTabComponent_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true);
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
    if (((token === import15.XPensionTabComponent) && (2 === requestNodeIndex))) { return this._XPensionTabComponent_2_3.context; }
    if (((token === import13.MdPrefixRejector) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._MdPrefixRejector_0_5.context; }
    if (((token === import14.MdTab) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._MdTab_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,6,8);
    this._MdPrefixRejector_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(0,6,63);
    const currVal_0_1_0:any = import3.inlineInterpolate(1,'',this.context.$implicit.pensionType,'');
    this._MdTab_0_6.check_textLabel(currVal_0_1_0,throwOnChange,false);
    this._MdTab_0_6.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(2,7,62);
    const currVal_2_0_0:any = this.context.$implicit;
    this._XPensionTabComponent_2_3.check_xPension(currVal_2_0_0,throwOnChange,false);
    if (this._XPensionTabComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  dirtyParentQueriesInternal():void {
    (<View_XPensionsWidgetContainer1>this.parentView)._query_MdTab_0_0.setDirty();
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this.compView_2.destroy();
    this._XPensionTabComponent_2_3.ngOnDestroy();
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
    if ((eventName == 'updateXPension')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.onUpdate($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
const nodeDebugInfos_XPensionsWidgetContainer1:import4.StaticNodeDebugInfo[] = [
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
  new import4.StaticNodeDebugInfo([import23.AddXPensionTabComponent],import23.AddXPensionTabComponent,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import24.TemplateRef,
    import25.NgFor
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_XPensionsWidgetContainer1 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import22.MdTabGroup>;
  _MdPrefixRejector_0_3:import17.Wrapper_MdPrefixRejector;
  _MdTabGroup_0_4:import26.Wrapper_MdTabGroup;
  _query_MdTab_0_0:import19.QueryList<any>;
  _text_1:any;
  _el_2:any;
  /*private*/ _vc_2:import16.ViewContainer;
  compView_2:import2.AppView<import14.MdTab>;
  _MdPrefixRejector_2_5:import17.Wrapper_MdPrefixRejector;
  _MdTab_2_6:import18.Wrapper_MdTab;
  _query_MdTabLabel_2_0:import19.QueryList<any>;
  _text_3:any;
  _el_4:any;
  compView_4:import2.AppView<import23.AddXPensionTabComponent>;
  _AddXPensionTabComponent_4_3:import27.Wrapper_AddXPensionTabComponent;
  _text_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import16.ViewContainer;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import28.Wrapper_NgFor;
  _text_8:any;
  _pipe_async_0:import29.AsyncPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_XPensionsWidgetContainer1,renderType_XPensionsWidgetContainer,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_XPensionsWidgetContainer1,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'md-tab-group',import3.EMPTY_INLINE_ARRAY,this.debug(0,2,4));
    this.compView_0 = new import26.View_MdTabGroup0(this.viewUtils,this,0,this._el_0);
    this._MdPrefixRejector_0_3 = new import17.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import13.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdTabGroup_0_4 = new import26.Wrapper_MdTabGroup(this.renderer);
    this._query_MdTab_0_0 = new import19.QueryList<any>();
    this._text_1 = this.renderer.createText((null as any),'\n        ',this.debug(1,2,76));
    this._el_2 = import3.createRenderElement(this.renderer,(null as any),'md-tab',new import3.InlineArray2(2,'label','+'),this.debug(2,3,8));
    this._vc_2 = new import16.ViewContainer(2,0,this,this._el_2);
    this.compView_2 = new import18.View_MdTab0(this.viewUtils,this,2,this._el_2);
    this._MdPrefixRejector_2_5 = new import17.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import13.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdTab_2_6 = new import18.Wrapper_MdTab(this._vc_2.vcRef);
    this._query_MdTabLabel_2_0 = new import19.QueryList<any>();
    this._text_3 = this.renderer.createText((null as any),'\n        ',this.debug(3,3,26));
    this._el_4 = import3.createRenderElement(this.renderer,(null as any),'add-xpension-tab',import3.EMPTY_INLINE_ARRAY,this.debug(4,4,8));
    this.compView_4 = new import27.View_AddXPensionTabComponent0(this.viewUtils,this,4,this._el_4);
    this._AddXPensionTabComponent_4_3 = new import27.Wrapper_AddXPensionTabComponent(this.parentView.injectorGet(import21.FormBuilder,this.parentIndex));
    this.compView_4.create(this._AddXPensionTabComponent_4_3.context);
    this._text_5 = this.renderer.createText((null as any),'\n        ',this.debug(5,4,77));
    this.compView_2.create(this._MdTab_2_6.context);
    this._text_6 = this.renderer.createText((null as any),'\n        ',this.debug(6,5,17));
    this._anchor_7 = this.renderer.createTemplateAnchor((null as any),this.debug(7,6,8));
    this._vc_7 = new import16.ViewContainer(7,0,this,this._anchor_7);
    this._TemplateRef_7_5 = new import24.TemplateRef_(this,7,this._anchor_7);
    this._NgFor_7_6 = new import28.Wrapper_NgFor(this._vc_7.vcRef,this._TemplateRef_7_5,this.parentView.injectorGet(import30.IterableDiffers,this.parentIndex),this.parentView.ref);
    this._text_8 = this.renderer.createText((null as any),'      \n    ',this.debug(8,8,17));
    this.compView_0.create(this._MdTabGroup_0_4.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_4,new import3.InlineArray2(2,'addXPension',(null as any)),this.eventHandler(this.handleEvent_4));
    this._AddXPensionTabComponent_4_3.subscribe(this,this.eventHandler(this.handleEvent_4),true);
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import29.AsyncPipe(this.parentView.ref);
    this._query_MdTabLabel_2_0.reset(([] as any[]));
    this._MdTab_2_6.context.templateLabel = this._query_MdTabLabel_2_0.first;
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._anchor_7,
      this._text_8
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.AddXPensionTabComponent) && (4 === requestNodeIndex))) { return this._AddXPensionTabComponent_4_3.context; }
    if (((token === import13.MdPrefixRejector) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdPrefixRejector_2_5.context; }
    if (((token === import14.MdTab) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdTab_2_6.context; }
    if (((token === import24.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import25.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6.context; }
    if (((token === import13.MdPrefixRejector) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._MdPrefixRejector_0_3.context; }
    if (((token === import22.MdTabGroup) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._MdTabGroup_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    this.debug(0,2,4);
    this._MdPrefixRejector_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(0,2,56);
    const currVal_0_1_0:any = 1;
    this._MdTabGroup_0_4.check_selectedIndex(currVal_0_1_0,throwOnChange,false);
    this._MdTabGroup_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(2,3,8);
    this._MdPrefixRejector_2_5.ngDoCheck(this,this._el_2,throwOnChange);
    this.debug(2,3,16);
    const currVal_2_1_0:any = '+';
    this._MdTab_2_6.check_textLabel(currVal_2_1_0,throwOnChange,false);
    this._MdTab_2_6.ngDoCheck(this,this._el_2,throwOnChange);
    this.debug(4,4,8);
    if (this._AddXPensionTabComponent_4_3.ngDoCheck(this,this._el_4,throwOnChange)) { this.compView_4.markAsCheckOnce(); }
    this.debug(7,6,16);
    valUnwrapper.reset();
    const currVal_7_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.parentView.context.xPensions$));
    this._NgFor_7_6.check_ngForOf(currVal_7_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgFor_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdTab_0_0.dirty) {
        this._query_MdTab_0_0.reset([
          this._MdTab_2_6.context,
          this._vc_7.mapNestedViews(View_XPensionsWidgetContainer2,(nestedView:View_XPensionsWidgetContainer2):any => {
            return [nestedView._MdTab_0_6.context];
          })
        ]
        );
        this._MdTabGroup_0_4.context._tabs = this._query_MdTab_0_0;
        this._query_MdTab_0_0.notifyOnChanges();
      }
      this.debug(0,2,4);
      this._MdTabGroup_0_4.context.ngAfterContentChecked();
    }
    this._MdTabGroup_0_4.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
    this.compView_4.internalDetectChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(0,2,4);
      this._MdTabGroup_0_4.context.ngAfterViewChecked();
    }
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this._vc_7.destroyNestedViews();
    this.compView_0.destroy();
    this.compView_2.destroy();
    this.compView_4.destroy();
    this._AddXPensionTabComponent_4_3.ngOnDestroy();
    this.debug(4,4,8);
    this.debug(2,3,8);
    this.debug(7,6,8);
    this._MdTabGroup_0_4.ngOnDestroy();
    this.debug(0,2,4);
    this._pipe_async_0.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 2) && (ngContentIndex == 0))) {
      cb(this._text_3,ctx);
      cb(this._el_4,ctx);
      cb(this._text_5,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 7)) { return new View_XPensionsWidgetContainer2(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    return (null as any);
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.debug(4,4,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'addXPension')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onSave($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
const nodeDebugInfos_XPensionsWidgetContainer0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import24.TemplateRef,
    import31.NgIf
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import13.MdPrefixRejector,
    import32.MdButton,
    import32.MdButtonCssMatStyler
  ]
  ,import32.MdButton,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_XPensionsWidgetContainer:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/xpensions/containers/xpensions-widget/xpensions-widget.container.ts class XPensionsWidgetContainer - inline template',0,import6.ViewEncapsulation.None,styles_XPensionsWidgetContainer,{});
export class View_XPensionsWidgetContainer0 extends import2.DebugAppView<import0.XPensionsWidgetContainer> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import16.ViewContainer;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import33.Wrapper_NgIf;
  _text_2:any;
  _el_3:any;
  compView_3:import2.AppView<import32.MdButton>;
  _MdPrefixRejector_3_3:import17.Wrapper_MdPrefixRejector;
  _MdButton_3_4:import34.Wrapper_MdButton;
  _MdButtonCssMatStyler_3_5:import34.Wrapper_MdButtonCssMatStyler;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_XPensionsWidgetContainer0,renderType_XPensionsWidgetContainer,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_XPensionsWidgetContainer0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n\n    ',this.debug(0,0,0));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(1,2,4));
    this._vc_1 = new import16.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import24.TemplateRef_(this,1,this._anchor_1);
    this._NgIf_1_6 = new import33.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(2,9,19));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'button',new import3.InlineArray2(2,'md-button',''),this.debug(3,10,4));
    this.compView_3 = new import34.View_MdButton0(this.viewUtils,this,3,this._el_3);
    this._MdPrefixRejector_3_3 = new import17.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import13.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdButton_3_4 = new import34.Wrapper_MdButton(new import35.ElementRef(this._el_3),this.renderer);
    this._MdButtonCssMatStyler_3_5 = new import34.Wrapper_MdButtonCssMatStyler();
    this._el_4 = import3.createRenderElement(this.renderer,(null as any),'p',new import3.InlineArray2(2,'style','color: #838383'),this.debug(4,10,44));
    this._text_5 = this.renderer.createText(this._el_4,'Test Inputs',this.debug(5,10,70));
    this.compView_3.create(this._MdButton_3_4.context);
    this._text_6 = this.renderer.createText(parentRenderNode,'\n        \n\n    \n    \n    \n    ',this.debug(6,10,94));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_3,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_3));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2,
      this._el_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import31.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    if (((token === import13.MdPrefixRejector) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdPrefixRejector_3_3.context; }
    if (((token === import32.MdButton) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdButton_3_4.context; }
    if (((token === import32.MdButtonCssMatStyler) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdButtonCssMatStyler_3_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(1,2,18);
    const currVal_1_0_0:any = (this.context.xPensionContactId !== '');
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this.debug(3,10,4);
    this._MdPrefixRejector_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    if (this._MdButton_3_4.ngDoCheck(this,this._el_3,throwOnChange)) { this.compView_3.markAsCheckOnce(); }
    this._MdButtonCssMatStyler_3_5.ngDoCheck(this,this._el_3,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._MdButton_3_4.checkHost(this,this.compView_3,this._el_3,throwOnChange);
    this._MdButtonCssMatStyler_3_5.checkHost(this,this.compView_3,this._el_3,throwOnChange);
    this.compView_3.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this.compView_3.destroy();
    this.debug(1,2,4);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 3) && (ngContentIndex == 0))) { cb(this._el_4,ctx); }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_XPensionsWidgetContainer1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.debug(3,10,4);
    this.compView_3.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_3_4.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.logInputs()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}