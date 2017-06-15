/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './team-master.container';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../team.sandbox';
import * as import10 from '@angular/material/input/input-container';
import * as import11 from '@angular/forms/src/directives/default_value_accessor';
import * as import12 from '@angular/forms/src/directives/control_value_accessor';
import * as import13 from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import * as import14 from '@angular/forms/src/directives/ng_control';
import * as import15 from '@angular/forms/src/directives/ng_control_status';
import * as import16 from '@angular/material/core/compatibility/compatibility';
import * as import17 from '@angular/material/button/button';
import * as import18 from '@angular/material/icon/icon';
import * as import19 from '../../components/master-list/master-list.component';
import * as import20 from '../../../../node_modules/@angular/material/input/input-container.ngfactory';
import * as import21 from '@angular/core/src/linker/query_list';
import * as import22 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import23 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_directive.ngfactory';
import * as import24 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import25 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import26 from '../../../../node_modules/@angular/material/button/button.ngfactory';
import * as import27 from '../../../../node_modules/@angular/material/icon/icon.ngfactory';
import * as import28 from '../../components/master-list/master-list.component.ngfactory';
import * as import29 from '@angular/common/src/pipes/async_pipe';
import * as import30 from '@angular/core/src/linker/element_ref';
import * as import31 from '@angular/material/icon/icon-registry';
import * as import32 from '@angular/router/src/router';
import * as import33 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_TeamMasterContainer {
  /*private*/ _eventHandler:Function;
  context:import0.TeamMasterContainer;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.TeamMasterContainer(p0);
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
const nodeDebugInfos_TeamMasterContainer_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.TeamMasterContainer],import0.TeamMasterContainer,{})];
var renderType_TeamMasterContainer_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_TeamMasterContainer_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TeamMasterContainer>;
  _TeamMasterContainer_0_3:Wrapper_TeamMasterContainer;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TeamMasterContainer_Host0,renderType_TeamMasterContainer_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_TeamMasterContainer_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'team-master',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_TeamMasterContainer0(this.viewUtils,this,0,this._el_0);
    this._TeamMasterContainer_0_3 = new Wrapper_TeamMasterContainer(this.injectorGet(import9.TeamSandbox,this.parentIndex));
    this.compView_0.create(this._TeamMasterContainer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._TeamMasterContainer_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TeamMasterContainer) && (0 === requestNodeIndex))) { return this._TeamMasterContainer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._TeamMasterContainer_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TeamMasterContainerNgFactory:import8.ComponentFactory<import0.TeamMasterContainer> = new import8.ComponentFactory<import0.TeamMasterContainer>('team-master',View_TeamMasterContainer_Host0,import0.TeamMasterContainer);
const styles_TeamMasterContainer:any[] = ([] as any[]);
const nodeDebugInfos_TeamMasterContainer0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import10.MdInputContainer],import10.MdInputContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import11.DefaultValueAccessor,
    import12.NG_VALUE_ACCESSOR,
    import13.FormControlDirective,
    import14.NgControl,
    import10.MdInputDirective,
    import15.NgControlStatus
  ]
  ,(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import16.MdPrefixRejector,
    import17.MdButton,
    import17.MdIconButtonCssMatStyler
  ]
  ,import17.MdButton,{}),
  new import2.StaticNodeDebugInfo([
    import16.MdPrefixRejector,
    import18.MdIcon
  ]
  ,import18.MdIcon,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import19.TeamMasterListComponent],import19.TeamMasterListComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_TeamMasterContainer:import3.RenderComponentType = import4.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/team/containers/team-master/team-master.container.ts class TeamMasterContainer - inline template',0,import5.ViewEncapsulation.None,styles_TeamMasterContainer,{});
export class View_TeamMasterContainer0 extends import1.DebugAppView<import0.TeamMasterContainer> {
  _text_0:any;
  _el_1:any;
  compView_1:import1.AppView<import10.MdInputContainer>;
  _MdInputContainer_1_3:import20.Wrapper_MdInputContainer;
  _query_MdInputDirective_1_0:import21.QueryList<any>;
  _query_MdPlaceholder_1_1:import21.QueryList<any>;
  _query_MdHint_1_2:import21.QueryList<any>;
  _text_2:any;
  _el_3:any;
  _DefaultValueAccessor_3_3:import22.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_3_4:any[];
  _FormControlDirective_3_5:import23.Wrapper_FormControlDirective;
  _NgControl_3_6:any;
  _MdInputDirective_3_7:import20.Wrapper_MdInputDirective;
  _NgControlStatus_3_8:import24.Wrapper_NgControlStatus;
  _text_4:any;
  _el_5:any;
  compView_5:import1.AppView<import17.MdButton>;
  _MdPrefixRejector_5_3:import25.Wrapper_MdPrefixRejector;
  _MdButton_5_4:import26.Wrapper_MdButton;
  _MdIconButtonCssMatStyler_5_5:import26.Wrapper_MdIconButtonCssMatStyler;
  _el_6:any;
  compView_6:import1.AppView<import18.MdIcon>;
  _MdPrefixRejector_6_3:import25.Wrapper_MdPrefixRejector;
  _MdIcon_6_4:import27.Wrapper_MdIcon;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  compView_10:import1.AppView<import19.TeamMasterListComponent>;
  _TeamMasterListComponent_10_3:import28.Wrapper_TeamMasterListComponent;
  _text_11:any;
  _pipe_async_0:import29.AsyncPipe;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TeamMasterContainer0,renderType_TeamMasterContainer,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_TeamMasterContainer0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        \n        ',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'md-input-container',new import4.InlineArray8(6,'class','etherSearch','dividerColor','#7BACC9','floatingPlaceholder','false'),this.debug(1,2,8));
    this.compView_1 = new import20.View_MdInputContainer0(this.viewUtils,this,1,this._el_1);
    this._MdInputContainer_1_3 = new import20.Wrapper_MdInputContainer();
    this._query_MdInputDirective_1_0 = new import21.QueryList<any>();
    this._query_MdPlaceholder_1_1 = new import21.QueryList<any>();
    this._query_MdHint_1_2 = new import21.QueryList<any>();
    this._text_2 = this.renderer.createText((null as any),'\n        ',this.debug(2,2,99));
    this._el_3 = import4.createRenderElement(this.renderer,(null as any),'input',new import4.InlineArray8(6,'mdInput','','placeholder','Search Team','style','width: 120px; margin-top: -10px; margin-left: 5px; color: #838383 !important;'),this.debug(3,3,8));
    this._DefaultValueAccessor_3_3 = new import22.Wrapper_DefaultValueAccessor(this.renderer,new import30.ElementRef(this._el_3));
    this._NG_VALUE_ACCESSOR_3_4 = [this._DefaultValueAccessor_3_3.context];
    this._FormControlDirective_3_5 = new import23.Wrapper_FormControlDirective((null as any),(null as any),this._NG_VALUE_ACCESSOR_3_4);
    this._NgControl_3_6 = this._FormControlDirective_3_5.context;
    this._MdInputDirective_3_7 = new import20.Wrapper_MdInputDirective(new import30.ElementRef(this._el_3),this.renderer,this._NgControl_3_6);
    this._NgControlStatus_3_8 = new import24.Wrapper_NgControlStatus(this._NgControl_3_6);
    this._text_4 = this.renderer.createText((null as any),'\n        ',this.debug(4,3,162));
    this._el_5 = import4.createRenderElement(this.renderer,(null as any),'button',new import4.InlineArray4(4,'md-icon-button','','style','margin-left: 120px; margin-top: -50px !important;'),this.debug(5,4,8));
    this.compView_5 = new import26.View_MdButton0(this.viewUtils,this,5,this._el_5);
    this._MdPrefixRejector_5_3 = new import25.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import16.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdButton_5_4 = new import26.Wrapper_MdButton(new import30.ElementRef(this._el_5),this.renderer);
    this._MdIconButtonCssMatStyler_5_5 = new import26.Wrapper_MdIconButtonCssMatStyler();
    this._el_6 = import4.createRenderElement(this.renderer,(null as any),'md-icon',new import4.InlineArray4(4,'role','img','style','color: #838383; width: 20px;'),this.debug(6,4,89));
    this.compView_6 = new import27.View_MdIcon0(this.viewUtils,this,6,this._el_6);
    this._MdPrefixRejector_6_3 = new import25.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import16.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdIcon_6_4 = new import27.Wrapper_MdIcon(new import30.ElementRef(this._el_6),this.renderer,this.parentView.injectorGet(import31.MdIconRegistry,this.parentIndex));
    this._text_7 = this.renderer.createText((null as any),'search',this.debug(7,4,135));
    this.compView_6.create(this._MdIcon_6_4.context);
    this.compView_5.create(this._MdButton_5_4.context);
    this._text_8 = this.renderer.createText((null as any),'\n      ',this.debug(8,4,160));
    this.compView_1.create(this._MdInputContainer_1_3.context);
    this._text_9 = this.renderer.createText(parentRenderNode,'\n        \n        ',this.debug(9,5,27));
    this._el_10 = import4.createRenderElement(this.renderer,parentRenderNode,'team-master-list',import4.EMPTY_INLINE_ARRAY,this.debug(10,7,8));
    this.compView_10 = new import28.View_TeamMasterListComponent0(this.viewUtils,this,10,this._el_10);
    this._TeamMasterListComponent_10_3 = new import28.Wrapper_TeamMasterListComponent(this.parentView.injectorGet(import32.Router,this.parentIndex));
    this.compView_10.create(this._TeamMasterListComponent_10_3.context);
    this._text_11 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(11,7,76));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_1,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_1));
    var disposable_1:Function = import4.subscribeToRenderElement(this,this._el_3,new import4.InlineArray8(6,'input',(null as any),'blur',(null as any),'focus',(null as any)),this.eventHandler(this.handleEvent_3));
    var disposable_2:Function = import4.subscribeToRenderElement(this,this._el_5,new import4.InlineArray8(6,'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_5));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import29.AsyncPipe(this.ref);
    this._query_MdInputDirective_1_0.reset([this._MdInputDirective_3_7.context]);
    this._MdInputContainer_1_3.context._mdInputChild = this._query_MdInputDirective_1_0.first;
    this._query_MdPlaceholder_1_1.reset(([] as any[]));
    this._MdInputContainer_1_3.context._placeholderChild = this._query_MdPlaceholder_1_1.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.DefaultValueAccessor) && (3 === requestNodeIndex))) { return this._DefaultValueAccessor_3_3.context; }
    if (((token === import12.NG_VALUE_ACCESSOR) && (3 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_3_4; }
    if (((token === import13.FormControlDirective) && (3 === requestNodeIndex))) { return this._FormControlDirective_3_5.context; }
    if (((token === import14.NgControl) && (3 === requestNodeIndex))) { return this._NgControl_3_6; }
    if (((token === import10.MdInputDirective) && (3 === requestNodeIndex))) { return this._MdInputDirective_3_7.context; }
    if (((token === import15.NgControlStatus) && (3 === requestNodeIndex))) { return this._NgControlStatus_3_8.context; }
    if (((token === import16.MdPrefixRejector) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MdPrefixRejector_6_3.context; }
    if (((token === import18.MdIcon) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MdIcon_6_4.context; }
    if (((token === import16.MdPrefixRejector) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MdPrefixRejector_5_3.context; }
    if (((token === import17.MdButton) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MdButton_5_4.context; }
    if (((token === import17.MdIconButtonCssMatStyler) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MdIconButtonCssMatStyler_5_5.context; }
    if (((token === import10.MdInputContainer) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._MdInputContainer_1_3.context; }
    if (((token === import19.TeamMasterListComponent) && (10 === requestNodeIndex))) { return this._TeamMasterListComponent_10_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import33.ValueUnwrapper();
    this.debug(1,2,76);
    const currVal_1_0_0:any = '#7BACC9';
    this._MdInputContainer_1_3.check_dividerColor(currVal_1_0_0,throwOnChange,false);
    this._MdInputContainer_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(3,3,8);
    this._DefaultValueAccessor_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(3,3,135);
    const currVal_3_1_0:any = this.context.searchCtrl;
    this._FormControlDirective_3_5.check_form(currVal_3_1_0,throwOnChange,false);
    this._FormControlDirective_3_5.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(3,3,23);
    const currVal_3_2_0:any = 'Search Team';
    this._MdInputDirective_3_7.check_placeholder(currVal_3_2_0,throwOnChange,false);
    this._MdInputDirective_3_7.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(3,3,8);
    this._NgControlStatus_3_8.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(5,4,8);
    this._MdPrefixRejector_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    if (this._MdButton_5_4.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    this._MdIconButtonCssMatStyler_5_5.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(6,4,89);
    this._MdPrefixRejector_6_3.ngDoCheck(this,this._el_6,throwOnChange);
    if (this._MdIcon_6_4.ngDoCheck(this,this._el_6,throwOnChange)) { this.compView_6.markAsCheckOnce(); }
    this.debug(10,7,26);
    valUnwrapper.reset();
    const currVal_10_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.matchingTeam$));
    this._TeamMasterListComponent_10_3.check_team(currVal_10_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    if (this._TeamMasterListComponent_10_3.ngDoCheck(this,this._el_10,throwOnChange)) { this.compView_10.markAsCheckOnce(); }
    if (!throwOnChange) {
      if (this._query_MdHint_1_2.dirty) {
        this._query_MdHint_1_2.reset(([] as any[]));
        this._MdInputContainer_1_3.context._hintChildren = this._query_MdHint_1_2;
        this._query_MdHint_1_2.notifyOnChanges();
      }
      this.debug(1,2,8);
      if ((this.numberOfChecks === 0)) { this._MdInputContainer_1_3.context.ngAfterContentInit(); }
    }
    this._MdInputContainer_1_3.checkHost(this,this.compView_1,this._el_1,throwOnChange);
    this._MdInputDirective_3_7.checkHost(this,this,this._el_3,throwOnChange);
    this._NgControlStatus_3_8.checkHost(this,this,this._el_3,throwOnChange);
    this._MdButton_5_4.checkHost(this,this.compView_5,this._el_5,throwOnChange);
    this._MdIconButtonCssMatStyler_5_5.checkHost(this,this.compView_5,this._el_5,throwOnChange);
    this._MdIcon_6_4.checkHost(this,this.compView_6,this._el_6,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
    this.compView_6.internalDetectChanges(throwOnChange);
    this.compView_10.internalDetectChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(6,4,89);
      this._MdIcon_6_4.context.ngAfterViewChecked();
    }
  }
  destroyInternal():void {
    this.compView_1.destroy();
    this.compView_5.destroy();
    this.compView_6.destroy();
    this.compView_10.destroy();
    this._FormControlDirective_3_5.ngOnDestroy();
    this._MdInputDirective_3_7.ngOnDestroy();
    this.debug(3,3,8);
    this.debug(6,4,89);
    this.debug(5,4,8);
    this.debug(1,2,8);
    this.debug(10,7,8);
    this._pipe_async_0.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {  }
    if (((nodeIndex == 1) && (ngContentIndex == 1))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_4,ctx);
      cb(this._el_5,ctx);
      cb(this._text_8,ctx);
    }
    if (((nodeIndex == 1) && (ngContentIndex == 2))) {  }
    if (((nodeIndex == 1) && (ngContentIndex == 3))) {  }
    if (((nodeIndex == 1) && (ngContentIndex == 4))) {  }
    if (((nodeIndex == 5) && (ngContentIndex == 0))) { cb(this._el_6,ctx); }
    if (((nodeIndex == 6) && (ngContentIndex == 0))) { cb(this._text_7,ctx); }
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.debug(1,2,8);
    this.compView_1.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdInputContainer_1_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.debug(3,3,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_3_3.handleEvent(eventName,$event) && result);
    result = (this._MdInputDirective_3_7.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.debug(5,4,8);
    this.compView_5.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_5_4.handleEvent(eventName,$event) && result);
    return result;
  }
}