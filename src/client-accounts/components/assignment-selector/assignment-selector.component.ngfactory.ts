/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './assignment-selector.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../client-accounts.sandbox';
import * as import11 from '@angular/material/menu/menu-item';
import * as import12 from '@angular/material/menu/menu-trigger';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../../../node_modules/@angular/material/menu/menu-item.ngfactory';
import * as import15 from '../../../../node_modules/@angular/material/menu/menu-trigger.ngfactory';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/material/core/overlay/overlay';
import * as import18 from '@angular/material/core/rtl/dir';
import * as import19 from '@angular/material/core/compatibility/compatibility';
import * as import20 from '@angular/material/icon/icon';
import * as import21 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import22 from '../../../../node_modules/@angular/material/icon/icon.ngfactory';
import * as import23 from '@angular/material/icon/icon-registry';
import * as import24 from '@angular/core/src/linker/template_ref';
import * as import25 from '@angular/common/src/directives/ng_if';
import * as import26 from '@angular/material/menu/menu-directive';
import * as import27 from '@angular/common/src/directives/ng_for';
import * as import28 from '@angular/flex-layout/flexbox/api/layout';
import * as import29 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import30 from '../../../../node_modules/@angular/material/menu/menu-directive.ngfactory';
import * as import31 from '@angular/core/src/linker/query_list';
import * as import32 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import33 from '../../../../node_modules/@angular/flex-layout/flexbox/api/layout.ngfactory';
import * as import34 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import35 from '@angular/flex-layout/media-query/media-monitor';
export class Wrapper_ClientAccountAssignmentSelectorComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ClientAccountAssignmentSelectorComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.ClientAccountAssignmentSelectorComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_fullTitle(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.fullTitle = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.updateClientAccount.subscribe(_eventHandler.bind(view,'updateClientAccount'))); }
  }
}
const nodeDebugInfos_ClientAccountAssignmentSelectorComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.ClientAccountAssignmentSelectorComponent],import0.ClientAccountAssignmentSelectorComponent,{})];
var renderType_ClientAccountAssignmentSelectorComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_ClientAccountAssignmentSelectorComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.ClientAccountAssignmentSelectorComponent>;
  _ClientAccountAssignmentSelectorComponent_0_3:Wrapper_ClientAccountAssignmentSelectorComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ClientAccountAssignmentSelectorComponent_Host0,renderType_ClientAccountAssignmentSelectorComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ClientAccountAssignmentSelectorComponent_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'account-assignment-selector',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_ClientAccountAssignmentSelectorComponent0(this.viewUtils,this,0,this._el_0);
    this._ClientAccountAssignmentSelectorComponent_0_3 = new Wrapper_ClientAccountAssignmentSelectorComponent(this.injectorGet(import10.ClientAccountsSandbox,this.parentIndex));
    this.compView_0.create(this._ClientAccountAssignmentSelectorComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._ClientAccountAssignmentSelectorComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ClientAccountAssignmentSelectorComponent) && (0 === requestNodeIndex))) { return this._ClientAccountAssignmentSelectorComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._ClientAccountAssignmentSelectorComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._ClientAccountAssignmentSelectorComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ClientAccountAssignmentSelectorComponentNgFactory:import9.ComponentFactory<import0.ClientAccountAssignmentSelectorComponent> = new import9.ComponentFactory<import0.ClientAccountAssignmentSelectorComponent>('account-assignment-selector',View_ClientAccountAssignmentSelectorComponent_Host0,import0.ClientAccountAssignmentSelectorComponent);
const styles_ClientAccountAssignmentSelectorComponent:any[] = ([] as any[]);
const nodeDebugInfos_ClientAccountAssignmentSelectorComponent1:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo([
    import11.MdMenuItem,
    import12.MdMenuTrigger
  ]
  ,import11.MdMenuItem,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_ClientAccountAssignmentSelectorComponent1 extends import2.DebugAppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import13.ViewContainer;
  compView_0:import2.AppView<import11.MdMenuItem>;
  _MdMenuItem_0_5:import14.Wrapper_MdMenuItem;
  _MdMenuTrigger_0_6:import15.Wrapper_MdMenuTrigger;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_ClientAccountAssignmentSelectorComponent1,renderType_ClientAccountAssignmentSelectorComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ClientAccountAssignmentSelectorComponent1,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray8(8,'aria-haspopup','true','md-menu-item','','role','menuitem','type','button'),this.debug(0,2,4));
    this._vc_0 = new import13.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new import14.View_MdMenuItem0(this.viewUtils,this,0,this._el_0);
    this._MdMenuItem_0_5 = new import14.Wrapper_MdMenuItem(this.renderer,new import16.ElementRef(this._el_0));
    this._MdMenuTrigger_0_6 = new import15.Wrapper_MdMenuTrigger(this.parentView.injectorGet(import17.Overlay,this.parentIndex),new import16.ElementRef(this._el_0),this._vc_0.vcRef,this.renderer,this.parentView.injectorGet(import18.Dir,this.parentIndex,(null as any)));
    this._text_1 = this.renderer.createText((null as any),'\n      ',this.debug(1,2,89));
    this._el_2 = import3.createRenderElement(this.renderer,(null as any),'h1',import3.EMPTY_INLINE_ARRAY,this.debug(2,3,6));
    this._text_3 = this.renderer.createText(this._el_2,'Link to Account',this.debug(3,3,10));
    this._text_4 = this.renderer.createText((null as any),'\n    ',this.debug(4,3,30));
    this.compView_0.create(this._MdMenuItem_0_5.context);
    this._el_5 = this.renderer.createTemplateAnchor((null as any),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray4(4,'click',(null as any),'mousedown',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_5,((<any>this.renderer).directRenderer? (null as any): [
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
    if (((token === import11.MdMenuItem) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._MdMenuItem_0_5.context; }
    if (((token === import12.MdMenuTrigger) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._MdMenuTrigger_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,2,4);
    this._MdMenuItem_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(0,2,43);
    const currVal_0_1_0:any = (<View_ClientAccountAssignmentSelectorComponent0>this.parentView)._MdMenu_5_4.context;
    this._MdMenuTrigger_0_6.check_menu(currVal_0_1_0,throwOnChange,false);
    this._MdMenuTrigger_0_6.ngDoCheck(this,this._el_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this._MdMenuItem_0_5.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(0,2,4);
      if ((this.numberOfChecks === 0)) { this._MdMenuTrigger_0_6.context.ngAfterViewInit(); }
    }
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this._MdMenuTrigger_0_6.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_5,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {
      cb(this._text_1,ctx);
      cb(this._el_2,ctx);
      cb(this._text_4,ctx);
    }
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.debug(0,2,4);
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdMenuItem_0_5.handleEvent(eventName,$event) && result);
    result = (this._MdMenuTrigger_0_6.handleEvent(eventName,$event) && result);
    return result;
  }
}
const nodeDebugInfos_ClientAccountAssignmentSelectorComponent2:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo([
    import11.MdMenuItem,
    import12.MdMenuTrigger
  ]
  ,import11.MdMenuItem,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import19.MdPrefixRejector,
    import20.MdIcon
  ]
  ,import20.MdIcon,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_ClientAccountAssignmentSelectorComponent2 extends import2.DebugAppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import13.ViewContainer;
  compView_0:import2.AppView<import11.MdMenuItem>;
  _MdMenuItem_0_5:import14.Wrapper_MdMenuItem;
  _MdMenuTrigger_0_6:import15.Wrapper_MdMenuTrigger;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import20.MdIcon>;
  _MdPrefixRejector_2_3:import21.Wrapper_MdPrefixRejector;
  _MdIcon_2_4:import22.Wrapper_MdIcon;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_ClientAccountAssignmentSelectorComponent2,renderType_ClientAccountAssignmentSelectorComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ClientAccountAssignmentSelectorComponent2,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray16(10,'aria-haspopup','true','md-menu-item','','role','menuitem','style','margin-left: 10px','type','button'),this.debug(0,5,4));
    this._vc_0 = new import13.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new import14.View_MdMenuItem0(this.viewUtils,this,0,this._el_0);
    this._MdMenuItem_0_5 = new import14.Wrapper_MdMenuItem(this.renderer,new import16.ElementRef(this._el_0));
    this._MdMenuTrigger_0_6 = new import15.Wrapper_MdMenuTrigger(this.parentView.injectorGet(import17.Overlay,this.parentIndex),new import16.ElementRef(this._el_0),this._vc_0.vcRef,this.renderer,this.parentView.injectorGet(import18.Dir,this.parentIndex,(null as any)));
    this._text_1 = this.renderer.createText((null as any),'\n      ',this.debug(1,5,116));
    this._el_2 = import3.createRenderElement(this.renderer,(null as any),'md-icon',new import3.InlineArray2(2,'role','img'),this.debug(2,6,6));
    this.compView_2 = new import22.View_MdIcon0(this.viewUtils,this,2,this._el_2);
    this._MdPrefixRejector_2_3 = new import21.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import19.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdIcon_2_4 = new import22.Wrapper_MdIcon(new import16.ElementRef(this._el_2),this.renderer,this.parentView.injectorGet(import23.MdIconRegistry,this.parentIndex));
    this._text_3 = this.renderer.createText((null as any),'more_vert',this.debug(3,6,15));
    this.compView_2.create(this._MdIcon_2_4.context);
    this._text_4 = this.renderer.createText((null as any),'\n    ',this.debug(4,6,34));
    this.compView_0.create(this._MdMenuItem_0_5.context);
    this._el_5 = this.renderer.createTemplateAnchor((null as any),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray4(4,'click',(null as any),'mousedown',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_5,((<any>this.renderer).directRenderer? (null as any): [
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
    if (((token === import19.MdPrefixRejector) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._MdPrefixRejector_2_3.context; }
    if (((token === import20.MdIcon) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._MdIcon_2_4.context; }
    if (((token === import11.MdMenuItem) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._MdMenuItem_0_5.context; }
    if (((token === import12.MdMenuTrigger) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._MdMenuTrigger_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,5,4);
    this._MdMenuItem_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(0,5,70);
    const currVal_0_1_0:any = (<View_ClientAccountAssignmentSelectorComponent0>this.parentView)._MdMenu_5_4.context;
    this._MdMenuTrigger_0_6.check_menu(currVal_0_1_0,throwOnChange,false);
    this._MdMenuTrigger_0_6.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(2,6,6);
    this._MdPrefixRejector_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    if (this._MdIcon_2_4.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this._MdMenuItem_0_5.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this._MdIcon_2_4.checkHost(this,this.compView_2,this._el_2,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(2,6,6);
      this._MdIcon_2_4.context.ngAfterViewChecked();
      this.debug(0,5,4);
      if ((this.numberOfChecks === 0)) { this._MdMenuTrigger_0_6.context.ngAfterViewInit(); }
    }
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this.compView_2.destroy();
    this.debug(2,6,6);
    this._MdMenuTrigger_0_6.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_5,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {
      cb(this._text_1,ctx);
      cb(this._el_2,ctx);
      cb(this._text_4,ctx);
    }
    if (((nodeIndex == 2) && (ngContentIndex == 0))) { cb(this._text_3,ctx); }
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.debug(0,5,4);
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdMenuItem_0_5.handleEvent(eventName,$event) && result);
    result = (this._MdMenuTrigger_0_6.handleEvent(eventName,$event) && result);
    return result;
  }
}
const nodeDebugInfos_ClientAccountAssignmentSelectorComponent3:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo([import11.MdMenuItem],import11.MdMenuItem,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_ClientAccountAssignmentSelectorComponent3 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import11.MdMenuItem>;
  _MdMenuItem_0_3:import14.Wrapper_MdMenuItem;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_ClientAccountAssignmentSelectorComponent3,renderType_ClientAccountAssignmentSelectorComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ClientAccountAssignmentSelectorComponent3,declaredViewContainer);
    this._expr_7 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray8(6,'md-menu-item','','role','menuitem','type','button'),this.debug(0,9,8));
    this.compView_0 = new import14.View_MdMenuItem0(this.viewUtils,this,0,this._el_0);
    this._MdMenuItem_0_3 = new import14.Wrapper_MdMenuItem(this.renderer,new import16.ElementRef(this._el_0));
    this._text_1 = this.renderer.createText((null as any),'\n            ',this.debug(1,9,122));
    this._el_2 = import3.createRenderElement(this.renderer,(null as any),'h1',new import3.InlineArray2(2,'style','margin-left: 20px'),this.debug(2,10,12));
    this._text_3 = this.renderer.createText(this._el_2,'',this.debug(3,10,42));
    this._text_4 = this.renderer.createText((null as any),'\n        ',this.debug(4,10,70));
    this.compView_0.create(this._MdMenuItem_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
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
    if (((token === import11.MdMenuItem) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._MdMenuItem_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,9,8);
    this._MdMenuItem_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._MdMenuItem_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.debug(3,10,42);
    const currVal_7:any = import3.inlineInterpolate(1,'',this.context.$implicit.accountName,'');
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setText(this._text_3,currVal_7);
      this._expr_7 = currVal_7;
    }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  dirtyParentQueriesInternal():void {
    (<View_ClientAccountAssignmentSelectorComponent0>this.parentView)._query_MdMenuItem_5_0.setDirty();
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {
      cb(this._text_1,ctx);
      cb(this._el_2,ctx);
      cb(this._text_4,ctx);
    }
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.debug(0,9,8);
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdMenuItem_0_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onUpdateAssignee(this.context.$implicit._id)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
const nodeDebugInfos_ClientAccountAssignmentSelectorComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import24.TemplateRef,
    import25.NgIf
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import24.TemplateRef,
    import25.NgIf
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import19.MdPrefixRejector,
    import26.MdMenu
  ]
  ,import26.MdMenu,{statusMenu: import26.MdMenu}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import24.TemplateRef,
    import27.NgFor
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import11.MdMenuItem,
    import28.LayoutDirective
  ]
  ,import11.MdMenuItem,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import19.MdPrefixRejector,
    import20.MdIcon
  ]
  ,import20.MdIcon,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_ClientAccountAssignmentSelectorComponent:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/client-accounts/components/assignment-selector/assignment-selector.component.ts class ClientAccountAssignmentSelectorComponent - inline template',0,import6.ViewEncapsulation.None,styles_ClientAccountAssignmentSelectorComponent,{});
export class View_ClientAccountAssignmentSelectorComponent0 extends import2.DebugAppView<import0.ClientAccountAssignmentSelectorComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import13.ViewContainer;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import29.Wrapper_NgIf;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import13.ViewContainer;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import29.Wrapper_NgIf;
  _text_4:any;
  _el_5:any;
  compView_5:import2.AppView<import26.MdMenu>;
  _MdPrefixRejector_5_3:import21.Wrapper_MdPrefixRejector;
  _MdMenu_5_4:import30.Wrapper_MdMenu;
  _query_MdMenuItem_5_0:import31.QueryList<any>;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import13.ViewContainer;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import32.Wrapper_NgFor;
  _text_8:any;
  _el_9:any;
  compView_9:import2.AppView<import11.MdMenuItem>;
  _MdMenuItem_9_3:import14.Wrapper_MdMenuItem;
  _LayoutDirective_9_4:import33.Wrapper_LayoutDirective;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  compView_14:import2.AppView<import20.MdIcon>;
  _MdPrefixRejector_14_3:import21.Wrapper_MdPrefixRejector;
  _MdIcon_14_4:import22.Wrapper_MdIcon;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ClientAccountAssignmentSelectorComponent0,renderType_ClientAccountAssignmentSelectorComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_ClientAccountAssignmentSelectorComponent0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        \n    ',this.debug(0,0,0));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(1,2,4));
    this._vc_1 = new import13.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import24.TemplateRef_(this,1,this._anchor_1);
    this._NgIf_1_6 = new import29.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(2,4,13));
    this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(3,5,4));
    this._vc_3 = new import13.ViewContainer(3,(null as any),this,this._anchor_3);
    this._TemplateRef_3_5 = new import24.TemplateRef_(this,3,this._anchor_3);
    this._NgIf_3_6 = new import29.Wrapper_NgIf(this._vc_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(4,7,13));
    this._el_5 = import3.createRenderElement(this.renderer,parentRenderNode,'md-menu',new import3.InlineArray8(6,'role','menu','style','max-height: 100px !important','x-position','before'),this.debug(5,8,4));
    this.compView_5 = new import30.View_MdMenu0(this.viewUtils,this,5,this._el_5);
    this._MdPrefixRejector_5_3 = new import21.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import19.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdMenu_5_4 = new import30.Wrapper_MdMenu('before',(null as any));
    this._query_MdMenuItem_5_0 = new import31.QueryList<any>();
    this._text_6 = this.renderer.createText((null as any),'\n        ',this.debug(6,8,91));
    this._anchor_7 = this.renderer.createTemplateAnchor((null as any),this.debug(7,9,8));
    this._vc_7 = new import13.ViewContainer(7,5,this,this._anchor_7);
    this._TemplateRef_7_5 = new import24.TemplateRef_(this,7,this._anchor_7);
    this._NgFor_7_6 = new import32.Wrapper_NgFor(this._vc_7.vcRef,this._TemplateRef_7_5,this.parentView.injectorGet(import34.IterableDiffers,this.parentIndex),this.ref);
    this._text_8 = this.renderer.createText((null as any),'\n        ',this.debug(8,11,17));
    this._el_9 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray8(6,'fxLayout','row','md-menu-item','','role','menuitem'),this.debug(9,12,8));
    this.compView_9 = new import14.View_MdMenuItem0(this.viewUtils,this,9,this._el_9);
    this._MdMenuItem_9_3 = new import14.Wrapper_MdMenuItem(this.renderer,new import16.ElementRef(this._el_9));
    this._LayoutDirective_9_4 = new import33.Wrapper_LayoutDirective(this.parentView.injectorGet(import35.MediaMonitor,this.parentIndex),new import16.ElementRef(this._el_9),this.renderer);
    this._text_10 = this.renderer.createText((null as any),'\n            ',this.debug(10,12,44));
    this._el_11 = import3.createRenderElement(this.renderer,(null as any),'h1',import3.EMPTY_INLINE_ARRAY,this.debug(11,13,12));
    this._text_12 = this.renderer.createText(this._el_11,'Go to Accounts',this.debug(12,13,16));
    this._text_13 = this.renderer.createText((null as any),'\n            ',this.debug(13,13,35));
    this._el_14 = import3.createRenderElement(this.renderer,(null as any),'md-icon',new import3.InlineArray4(4,'role','img','style','margin-top: 2px'),this.debug(14,14,12));
    this.compView_14 = new import22.View_MdIcon0(this.viewUtils,this,14,this._el_14);
    this._MdPrefixRejector_14_3 = new import21.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import19.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdIcon_14_4 = new import22.Wrapper_MdIcon(new import16.ElementRef(this._el_14),this.renderer,this.parentView.injectorGet(import23.MdIconRegistry,this.parentIndex));
    this._text_15 = this.renderer.createText((null as any),'chevron_right',this.debug(15,14,45));
    this.compView_14.create(this._MdIcon_14_4.context);
    this._text_16 = this.renderer.createText((null as any),'\n        ',this.debug(16,14,68));
    this.compView_9.create(this._MdMenuItem_9_3.context);
    this._text_17 = this.renderer.createText((null as any),'\n    ',this.debug(17,15,17));
    this.compView_5.create(this._MdMenu_5_4.context);
    this._text_18 = this.renderer.createText(parentRenderNode,'\n\n    \n    ',this.debug(18,16,14));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_9,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_9));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import25.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    if (((token === import24.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import25.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    if (((token === import24.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import27.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6.context; }
    if (((token === import19.MdPrefixRejector) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._MdPrefixRejector_14_3.context; }
    if (((token === import20.MdIcon) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._MdIcon_14_4.context; }
    if (((token === import11.MdMenuItem) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._MdMenuItem_9_3.context; }
    if (((token === import28.LayoutDirective) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._LayoutDirective_9_4.context; }
    if (((token === import19.MdPrefixRejector) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._MdPrefixRejector_5_3.context; }
    if (((token === import26.MdMenu) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._MdMenu_5_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(1,2,12);
    const currVal_1_0_0:any = this.context.fullTitle;
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this.debug(3,5,12);
    const currVal_3_0_0:boolean = !this.context.fullTitle;
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    this.debug(5,8,4);
    this._MdPrefixRejector_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this._MdMenu_5_4.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(7,9,16);
    const currVal_7_0_0:any = this.context.clientAccounts;
    this._NgFor_7_6.check_ngForOf(currVal_7_0_0,throwOnChange,false);
    this._NgFor_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    this.debug(9,12,8);
    this._MdMenuItem_9_3.ngDoCheck(this,this._el_9,throwOnChange);
    this.debug(9,12,29);
    const currVal_9_1_0:any = 'row';
    this._LayoutDirective_9_4.check_layout(currVal_9_1_0,throwOnChange,false);
    this._LayoutDirective_9_4.ngDoCheck(this,this._el_9,throwOnChange);
    this.debug(14,14,12);
    this._MdPrefixRejector_14_3.ngDoCheck(this,this._el_14,throwOnChange);
    if (this._MdIcon_14_4.ngDoCheck(this,this._el_14,throwOnChange)) { this.compView_14.markAsCheckOnce(); }
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdMenuItem_5_0.dirty) {
        this._query_MdMenuItem_5_0.reset([
          this._vc_7.mapNestedViews(View_ClientAccountAssignmentSelectorComponent3,(nestedView:View_ClientAccountAssignmentSelectorComponent3):any => {
            return [nestedView._MdMenuItem_0_3.context];
          }),
          this._MdMenuItem_9_3.context
        ]
        );
        this._MdMenu_5_4.context.items = this._query_MdMenuItem_5_0;
        this._query_MdMenuItem_5_0.notifyOnChanges();
      }
      this.debug(5,8,4);
      if ((this.numberOfChecks === 0)) { this._MdMenu_5_4.context.ngAfterContentInit(); }
    }
    this._MdMenuItem_9_3.checkHost(this,this.compView_9,this._el_9,throwOnChange);
    this._MdIcon_14_4.checkHost(this,this.compView_14,this._el_14,throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
    this.compView_9.internalDetectChanges(throwOnChange);
    this.compView_14.internalDetectChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(14,14,12);
      this._MdIcon_14_4.context.ngAfterViewChecked();
    }
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this._vc_3.destroyNestedViews();
    this._vc_7.destroyNestedViews();
    this.compView_5.destroy();
    this.compView_9.destroy();
    this.compView_14.destroy();
    this.debug(1,2,4);
    this.debug(3,5,4);
    this.debug(7,9,8);
    this.debug(14,14,12);
    this._LayoutDirective_9_4.ngOnDestroy();
    this.debug(9,12,8);
    this._MdMenu_5_4.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 5) && (ngContentIndex == 0))) {
      cb(this._text_6,ctx);
      cb(this._vc_7.nativeElement,ctx);
      this._vc_7.visitNestedViewRootNodes(cb,ctx);
      cb(this._text_8,ctx);
      cb(this._el_9,ctx);
      cb(this._text_17,ctx);
    }
    if (((nodeIndex == 9) && (ngContentIndex == 0))) {
      cb(this._text_10,ctx);
      cb(this._el_11,ctx);
      cb(this._text_13,ctx);
      cb(this._el_14,ctx);
      cb(this._text_16,ctx);
    }
    if (((nodeIndex == 14) && (ngContentIndex == 0))) { cb(this._text_15,ctx); }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_ClientAccountAssignmentSelectorComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    if ((nodeIndex == 3)) { return new View_ClientAccountAssignmentSelectorComponent2(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    if ((nodeIndex == 7)) { return new View_ClientAccountAssignmentSelectorComponent3(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    return (null as any);
  }
  handleEvent_9(eventName:string,$event:any):boolean {
    this.debug(9,12,8);
    this.compView_9.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdMenuItem_9_3.handleEvent(eventName,$event) && result);
    return result;
  }
}