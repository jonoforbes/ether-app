/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './master-list.component';
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
import * as import11 from '@angular/material/core/compatibility/compatibility';
import * as import12 from '@angular/material/button/button';
import * as import13 from '@angular/material/core/line/line';
import * as import14 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import15 from '../../../../node_modules/@angular/material/button/button.ngfactory';
import * as import16 from '../../../../node_modules/@angular/material/core/line/line.ngfactory';
import * as import17 from '@angular/core/src/linker/view_container';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/material/list/list';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/common/src/directives/ng_for';
import * as import22 from '../../../../node_modules/@angular/material/list/list.ngfactory';
import * as import23 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import24 from '@angular/core/src/change_detection/differs/iterable_differs';
export class Wrapper_TeamMasterListComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TeamMasterListComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.TeamMasterListComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_team(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.team = currValue;
      this._expr_0 = currValue;
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
const nodeDebugInfos_TeamMasterListComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.TeamMasterListComponent],import0.TeamMasterListComponent,{})];
var renderType_TeamMasterListComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_TeamMasterListComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.TeamMasterListComponent>;
  _TeamMasterListComponent_0_3:Wrapper_TeamMasterListComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TeamMasterListComponent_Host0,renderType_TeamMasterListComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_TeamMasterListComponent_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'team-master-list',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_TeamMasterListComponent0(this.viewUtils,this,0,this._el_0);
    this._TeamMasterListComponent_0_3 = new Wrapper_TeamMasterListComponent(this.injectorGet(import10.Router,this.parentIndex));
    this.compView_0.create(this._TeamMasterListComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._TeamMasterListComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TeamMasterListComponent) && (0 === requestNodeIndex))) { return this._TeamMasterListComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._TeamMasterListComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TeamMasterListComponentNgFactory:import9.ComponentFactory<import0.TeamMasterListComponent> = new import9.ComponentFactory<import0.TeamMasterListComponent>('team-master-list',View_TeamMasterListComponent_Host0,import0.TeamMasterListComponent);
const styles_TeamMasterListComponent:any[] = ([] as any[]);
const nodeDebugInfos_TeamMasterListComponent1:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo([
    import11.MdPrefixRejector,
    import12.MdButton,
    import12.MdButtonCssMatStyler
  ]
  ,import12.MdButton,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import13.MdLine],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_TeamMasterListComponent1 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import12.MdButton>;
  _MdPrefixRejector_0_3:import14.Wrapper_MdPrefixRejector;
  _MdButton_0_4:import15.Wrapper_MdButton;
  _MdButtonCssMatStyler_0_5:import15.Wrapper_MdButtonCssMatStyler;
  _text_1:any;
  _el_2:any;
  _MdLine_2_3:import16.Wrapper_MdLine;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TeamMasterListComponent1,renderType_TeamMasterListComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_TeamMasterListComponent1,declaredViewContainer);
    this._expr_10 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray4(4,'md-button','','style','align-items: true'),this.debug(0,5,8));
    this.compView_0 = new import15.View_MdButton0(this.viewUtils,this,0,this._el_0);
    this._MdPrefixRejector_0_3 = new import14.Wrapper_MdPrefixRejector(this.parentView.parentView.injectorGet(import11.MATERIAL_COMPATIBILITY_MODE,this.parentView.parentIndex,(null as any)));
    this._MdButton_0_4 = new import15.Wrapper_MdButton(new import18.ElementRef(this._el_0),this.renderer);
    this._MdButtonCssMatStyler_0_5 = new import15.Wrapper_MdButtonCssMatStyler();
    this._text_1 = this.renderer.createText((null as any),'\n          \n          \n            ',this.debug(1,5,78));
    this._el_2 = import3.createRenderElement(this.renderer,(null as any),'h3',new import3.InlineArray2(2,'md-line',''),this.debug(2,8,12));
    this._MdLine_2_3 = new import16.Wrapper_MdLine();
    this._text_3 = this.renderer.createText(this._el_2,'',this.debug(3,8,24));
    this._text_4 = this.renderer.createText((null as any),'\n            \n          \n          ',this.debug(4,8,65));
    this.compView_0.create(this._MdButton_0_4.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray8(6,'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_0));
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
    if (((token === import13.MdLine) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._MdLine_2_3.context; }
    if (((token === import11.MdPrefixRejector) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._MdPrefixRejector_0_3.context; }
    if (((token === import12.MdButton) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._MdButton_0_4.context; }
    if (((token === import12.MdButtonCssMatStyler) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._MdButtonCssMatStyler_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,5,8);
    this._MdPrefixRejector_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    if (this._MdButton_0_4.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._MdButtonCssMatStyler_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(2,8,12);
    this._MdLine_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._MdButton_0_4.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this._MdButtonCssMatStyler_0_5.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this._MdLine_2_3.checkHost(this,this,this._el_2,throwOnChange);
    this.debug(3,8,24);
    const currVal_10:any = import3.inlineInterpolate(2,'',this.context.$implicit.firstName,' ',this.context.$implicit.lastName,'');
    if (import3.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setText(this._text_3,currVal_10);
      this._expr_10 = currVal_10;
    }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this.debug(2,8,12);
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
    this.debug(0,5,8);
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_0_4.handleEvent(eventName,$event) && result);
    return result;
  }
}
const nodeDebugInfos_TeamMasterListComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import11.MdPrefixRejector,
    import12.MdButton,
    import12.MdButtonCssMatStyler
  ]
  ,import12.MdButton,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import11.MdPrefixRejector,
    import19.MdList,
    import19.MdNavListCssMatStyler
  ]
  ,import19.MdList,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import20.TemplateRef,
    import21.NgFor
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_TeamMasterListComponent:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/team/components/master-list/master-list.component.ts class TeamMasterListComponent - inline template',0,import6.ViewEncapsulation.None,styles_TeamMasterListComponent,{});
export class View_TeamMasterListComponent0 extends import2.DebugAppView<import0.TeamMasterListComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import2.AppView<import12.MdButton>;
  _MdPrefixRejector_1_3:import14.Wrapper_MdPrefixRejector;
  _MdButton_1_4:import15.Wrapper_MdButton;
  _MdButtonCssMatStyler_1_5:import15.Wrapper_MdButtonCssMatStyler;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  compView_7:import2.AppView<import19.MdList>;
  _MdPrefixRejector_7_3:import14.Wrapper_MdPrefixRejector;
  _MdList_7_4:import22.Wrapper_MdList;
  _MdNavListCssMatStyler_7_5:import22.Wrapper_MdNavListCssMatStyler;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import17.ViewContainer;
  _TemplateRef_9_5:any;
  _NgFor_9_6:import23.Wrapper_NgFor;
  _text_10:any;
  _text_11:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TeamMasterListComponent0,renderType_TeamMasterListComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_TeamMasterListComponent0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'button',new import3.InlineArray4(4,'md-button','','style','text-align: left !important; padding: 5px; margin-top: -10px;'),this.debug(1,1,8));
    this.compView_1 = new import15.View_MdButton0(this.viewUtils,this,1,this._el_1);
    this._MdPrefixRejector_1_3 = new import14.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import11.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdButton_1_4 = new import15.Wrapper_MdButton(new import18.ElementRef(this._el_1),this.renderer);
    this._MdButtonCssMatStyler_1_5 = new import15.Wrapper_MdButtonCssMatStyler();
    this._text_2 = this.renderer.createText((null as any),'\n          ',this.debug(2,1,96));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),'p',new import3.InlineArray2(2,'style','margin: 4px 170px 4px 10px;'),this.debug(3,2,10));
    this._text_4 = this.renderer.createText(this._el_3,'+    Add New Team Member',this.debug(4,2,49));
    this._text_5 = this.renderer.createText((null as any),'\n        ',this.debug(5,2,87));
    this.compView_1.create(this._MdButton_1_4.context);
    this._text_6 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(6,3,17));
    this._el_7 = import3.createRenderElement(this.renderer,parentRenderNode,'md-nav-list',new import3.InlineArray2(2,'role','list'),this.debug(7,4,8));
    this.compView_7 = new import22.View_MdList0(this.viewUtils,this,7,this._el_7);
    this._MdPrefixRejector_7_3 = new import14.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import11.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdList_7_4 = new import22.Wrapper_MdList();
    this._MdNavListCssMatStyler_7_5 = new import22.Wrapper_MdNavListCssMatStyler();
    this._text_8 = this.renderer.createText((null as any),'\n        ',this.debug(8,4,21));
    this._anchor_9 = this.renderer.createTemplateAnchor((null as any),this.debug(9,5,8));
    this._vc_9 = new import17.ViewContainer(9,7,this,this._anchor_9);
    this._TemplateRef_9_5 = new import20.TemplateRef_(this,9,this._anchor_9);
    this._NgFor_9_6 = new import23.Wrapper_NgFor(this._vc_9.vcRef,this._TemplateRef_9_5,this.parentView.injectorGet(import24.IterableDiffers,this.parentIndex),this.ref);
    this._text_10 = this.renderer.createText((null as any),'\n\n      ',this.debug(10,11,19));
    this.compView_7.create(this._MdList_7_4.context);
    this._text_11 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(11,13,20));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray8(6,'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_1));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._text_11
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.MdPrefixRejector) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdPrefixRejector_1_3.context; }
    if (((token === import12.MdButton) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdButton_1_4.context; }
    if (((token === import12.MdButtonCssMatStyler) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdButtonCssMatStyler_1_5.context; }
    if (((token === import20.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import21.NgFor) && (9 === requestNodeIndex))) { return this._NgFor_9_6.context; }
    if (((token === import11.MdPrefixRejector) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdPrefixRejector_7_3.context; }
    if (((token === import19.MdList) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdList_7_4.context; }
    if (((token === import19.MdNavListCssMatStyler) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdNavListCssMatStyler_7_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(1,1,8);
    this._MdPrefixRejector_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    if (this._MdButton_1_4.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    this._MdButtonCssMatStyler_1_5.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(7,4,8);
    this._MdPrefixRejector_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    this._MdList_7_4.ngDoCheck(this,this._el_7,throwOnChange);
    this._MdNavListCssMatStyler_7_5.ngDoCheck(this,this._el_7,throwOnChange);
    this.debug(9,5,26);
    const currVal_9_0_0:any = this.context.team;
    this._NgFor_9_6.check_ngForOf(currVal_9_0_0,throwOnChange,false);
    this._NgFor_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    this._MdButton_1_4.checkHost(this,this.compView_1,this._el_1,throwOnChange);
    this._MdButtonCssMatStyler_1_5.checkHost(this,this.compView_1,this._el_1,throwOnChange);
    this._MdNavListCssMatStyler_7_5.checkHost(this,this.compView_7,this._el_7,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_7.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_9.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_7.destroy();
    this.debug(1,1,8);
    this.debug(9,5,8);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_5,ctx);
    }
    if (((nodeIndex == 7) && (ngContentIndex == 0))) {
      cb(this._text_8,ctx);
      cb(this._vc_9.nativeElement,ctx);
      this._vc_9.visitNestedViewRootNodes(cb,ctx);
      cb(this._text_10,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 9)) { return new View_TeamMasterListComponent1(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    return (null as any);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.debug(1,1,8);
    this.compView_1.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_1_4.handleEvent(eventName,$event) && result);
    return result;
  }
}