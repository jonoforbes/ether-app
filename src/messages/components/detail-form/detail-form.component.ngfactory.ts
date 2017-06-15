/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './detail-form.component';
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
import * as import12 from '@angular/material/toolbar/toolbar';
import * as import13 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import14 from '@angular/forms/src/directives/control_container';
import * as import15 from '@angular/forms/src/directives/ng_control_status';
import * as import16 from '@angular/material/input/input-container';
import * as import17 from '@angular/forms/src/directives/default_value_accessor';
import * as import18 from '@angular/forms/src/directives/control_value_accessor';
import * as import19 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import20 from '@angular/forms/src/directives/ng_control';
import * as import21 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import22 from '../../../../node_modules/@angular/material/toolbar/toolbar.ngfactory';
import * as import23 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import24 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import25 from '../../../../node_modules/@angular/material/input/input-container.ngfactory';
import * as import26 from '@angular/core/src/linker/query_list';
import * as import27 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import28 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import29 from '@angular/core/src/linker/element_ref';
export class Wrapper_MessagesDetailFormComponent {
  /*private*/ _eventHandler:Function;
  context:import0.MessagesDetailFormComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.MessagesDetailFormComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_messageForm(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.messageForm = currValue;
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
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.remove.subscribe(_eventHandler.bind(view,'remove'))); }
  }
}
const nodeDebugInfos_MessagesDetailFormComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.MessagesDetailFormComponent],import0.MessagesDetailFormComponent,{})];
var renderType_MessagesDetailFormComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_MessagesDetailFormComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.MessagesDetailFormComponent>;
  _MessagesDetailFormComponent_0_3:Wrapper_MessagesDetailFormComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MessagesDetailFormComponent_Host0,renderType_MessagesDetailFormComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_MessagesDetailFormComponent_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'messages-detail-form',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_MessagesDetailFormComponent0(this.viewUtils,this,0,this._el_0);
    this._MessagesDetailFormComponent_0_3 = new Wrapper_MessagesDetailFormComponent(this.injectorGet(import10.Router,this.parentIndex));
    this.compView_0.create(this._MessagesDetailFormComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._MessagesDetailFormComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MessagesDetailFormComponent) && (0 === requestNodeIndex))) { return this._MessagesDetailFormComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._MessagesDetailFormComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._MessagesDetailFormComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const MessagesDetailFormComponentNgFactory:import9.ComponentFactory<import0.MessagesDetailFormComponent> = new import9.ComponentFactory<import0.MessagesDetailFormComponent>('messages-detail-form',View_MessagesDetailFormComponent_Host0,import0.MessagesDetailFormComponent);
const styles_MessagesDetailFormComponent:any[] = ([] as any[]);
const nodeDebugInfos_MessagesDetailFormComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import11.MdPrefixRejector,
    import12.MdToolbar
  ]
  ,import12.MdToolbar,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import13.FormGroupDirective,
    import14.ControlContainer,
    import15.NgControlStatusGroup
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import16.MdInputContainer],import16.MdInputContainer,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import17.DefaultValueAccessor,
    import18.NG_VALUE_ACCESSOR,
    import19.FormControlName,
    import20.NgControl,
    import16.MdInputDirective,
    import15.NgControlStatus
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_MessagesDetailFormComponent:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/messages/components/detail-form/detail-form.component.ts class MessagesDetailFormComponent - inline template',0,import6.ViewEncapsulation.None,styles_MessagesDetailFormComponent,{});
export class View_MessagesDetailFormComponent0 extends import2.DebugAppView<import0.MessagesDetailFormComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import2.AppView<import12.MdToolbar>;
  _MdPrefixRejector_1_3:import21.Wrapper_MdPrefixRejector;
  _MdToolbar_1_4:import22.Wrapper_MdToolbar;
  _text_2:any;
  _el_3:any;
  _FormGroupDirective_3_3:import23.Wrapper_FormGroupDirective;
  _ControlContainer_3_4:any;
  _NgControlStatusGroup_3_5:import24.Wrapper_NgControlStatusGroup;
  _text_4:any;
  _el_5:any;
  compView_5:import2.AppView<import16.MdInputContainer>;
  _MdInputContainer_5_3:import25.Wrapper_MdInputContainer;
  _query_MdInputDirective_5_0:import26.QueryList<any>;
  _query_MdPlaceholder_5_1:import26.QueryList<any>;
  _query_MdHint_5_2:import26.QueryList<any>;
  _text_6:any;
  _el_7:any;
  _DefaultValueAccessor_7_3:import27.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_7_4:any[];
  _FormControlName_7_5:import28.Wrapper_FormControlName;
  _NgControl_7_6:any;
  _MdInputDirective_7_7:import25.Wrapper_MdInputDirective;
  _NgControlStatus_7_8:import24.Wrapper_NgControlStatus;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MessagesDetailFormComponent0,renderType_MessagesDetailFormComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_MessagesDetailFormComponent0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'md-toolbar',new import3.InlineArray8(6,'class','message-form','role','toolbar','style','height: 42px !important; \n                                                                            background-color: #fff !important; \n                                                                            bottom: 42px;\n                                                                            overflow-y: hidden !important;\n                                                                            z-index: 2;\n                                                                            position: fixed'),this.debug(1,1,8));
    this.compView_1 = new import22.View_MdToolbar0(this.viewUtils,this,1,this._el_1);
    this._MdPrefixRejector_1_3 = new import21.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import11.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdToolbar_1_4 = new import22.Wrapper_MdToolbar(new import29.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText((null as any),'\n\n        ',this.debug(2,6,93));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','message-form-row'),this.debug(3,8,8));
    this._FormGroupDirective_3_3 = new import23.Wrapper_FormGroupDirective((null as any),(null as any));
    this._ControlContainer_3_4 = this._FormGroupDirective_3_3.context;
    this._NgControlStatusGroup_3_5 = new import24.Wrapper_NgControlStatusGroup(this._ControlContainer_3_4);
    this._text_4 = this.renderer.createText(this._el_3,'\n\n\n\n          ',this.debug(4,8,64));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'md-input-container',new import3.InlineArray2(2,'floatPlaceholder','never'),this.debug(5,12,10));
    this.compView_5 = new import25.View_MdInputContainer0(this.viewUtils,this,5,this._el_5);
    this._MdInputContainer_5_3 = new import25.Wrapper_MdInputContainer();
    this._query_MdInputDirective_5_0 = new import26.QueryList<any>();
    this._query_MdPlaceholder_5_1 = new import26.QueryList<any>();
    this._query_MdHint_5_2 = new import26.QueryList<any>();
    this._text_6 = this.renderer.createText((null as any),'\n            ',this.debug(6,12,55));
    this._el_7 = import3.createRenderElement(this.renderer,(null as any),'input',new import3.InlineArray8(8,'formControlName','content','mdInput','','placeholder','Press Enter to send a Message','style','width: 500px'),this.debug(7,13,12));
    this._DefaultValueAccessor_7_3 = new import27.Wrapper_DefaultValueAccessor(this.renderer,new import29.ElementRef(this._el_7));
    this._NG_VALUE_ACCESSOR_7_4 = [this._DefaultValueAccessor_7_3.context];
    this._FormControlName_7_5 = new import28.Wrapper_FormControlName(this._ControlContainer_3_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_7_4);
    this._NgControl_7_6 = this._FormControlName_7_5.context;
    this._MdInputDirective_7_7 = new import25.Wrapper_MdInputDirective(new import29.ElementRef(this._el_7),this.renderer,this._NgControl_7_6);
    this._NgControlStatus_7_8 = new import24.Wrapper_NgControlStatus(this._NgControl_7_6);
    this._text_8 = this.renderer.createText((null as any),'\n           \n          ',this.debug(8,13,118));
    this.compView_5.create(this._MdInputContainer_5_3.context);
    this._text_9 = this.renderer.createText(this._el_3,'\n\n          \n\n        ',this.debug(9,15,31));
    this._text_10 = this.renderer.createText((null as any),'\n\n        \n\n',this.debug(10,19,14));
    this.compView_1.create(this._MdToolbar_1_4.context);
    this._text_11 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(11,23,13));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_3,new import3.InlineArray4(4,'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_3));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_5));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_7,new import3.InlineArray8(6,'input',(null as any),'blur',(null as any),'focus',(null as any)),this.eventHandler(this.handleEvent_7));
    this._query_MdInputDirective_5_0.reset([this._MdInputDirective_7_7.context]);
    this._MdInputContainer_5_3.context._mdInputChild = this._query_MdInputDirective_5_0.first;
    this._query_MdPlaceholder_5_1.reset(([] as any[]));
    this._MdInputContainer_5_3.context._placeholderChild = this._query_MdPlaceholder_5_1.first;
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
      this._text_10,
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
    if (((token === import17.DefaultValueAccessor) && (7 === requestNodeIndex))) { return this._DefaultValueAccessor_7_3.context; }
    if (((token === import18.NG_VALUE_ACCESSOR) && (7 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_7_4; }
    if (((token === import19.FormControlName) && (7 === requestNodeIndex))) { return this._FormControlName_7_5.context; }
    if (((token === import20.NgControl) && (7 === requestNodeIndex))) { return this._NgControl_7_6; }
    if (((token === import16.MdInputDirective) && (7 === requestNodeIndex))) { return this._MdInputDirective_7_7.context; }
    if (((token === import15.NgControlStatus) && (7 === requestNodeIndex))) { return this._NgControlStatus_7_8.context; }
    if (((token === import16.MdInputContainer) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._MdInputContainer_5_3.context; }
    if (((token === import13.FormGroupDirective) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._FormGroupDirective_3_3.context; }
    if (((token === import14.ControlContainer) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._ControlContainer_3_4; }
    if (((token === import15.NgControlStatusGroup) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgControlStatusGroup_3_5.context; }
    if (((token === import11.MdPrefixRejector) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdPrefixRejector_1_3.context; }
    if (((token === import12.MdToolbar) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdToolbar_1_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(1,1,8);
    this._MdPrefixRejector_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    if (this._MdToolbar_1_4.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    this.debug(3,8,38);
    const currVal_3_0_0:any = this.context.messageForm;
    this._FormGroupDirective_3_3.check_form(currVal_3_0_0,throwOnChange,false);
    this._FormGroupDirective_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(3,8,8);
    this._NgControlStatusGroup_3_5.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(5,12,30);
    const currVal_5_0_0:any = 'never';
    this._MdInputContainer_5_3.check_floatPlaceholder(currVal_5_0_0,throwOnChange,false);
    this._MdInputContainer_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(7,13,12);
    this._DefaultValueAccessor_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    this.debug(7,13,92);
    const currVal_7_1_0:any = 'content';
    this._FormControlName_7_5.check_name(currVal_7_1_0,throwOnChange,false);
    this._FormControlName_7_5.ngDoCheck(this,this._el_7,throwOnChange);
    this.debug(7,13,48);
    const currVal_7_2_0:any = 'Press Enter to send a Message';
    this._MdInputDirective_7_7.check_placeholder(currVal_7_2_0,throwOnChange,false);
    this._MdInputDirective_7_7.ngDoCheck(this,this._el_7,throwOnChange);
    this.debug(7,13,12);
    this._NgControlStatus_7_8.ngDoCheck(this,this._el_7,throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdHint_5_2.dirty) {
        this._query_MdHint_5_2.reset(([] as any[]));
        this._MdInputContainer_5_3.context._hintChildren = this._query_MdHint_5_2;
        this._query_MdHint_5_2.notifyOnChanges();
      }
      this.debug(5,12,10);
      if ((this.numberOfChecks === 0)) { this._MdInputContainer_5_3.context.ngAfterContentInit(); }
    }
    this._MdToolbar_1_4.checkHost(this,this.compView_1,this._el_1,throwOnChange);
    this._NgControlStatusGroup_3_5.checkHost(this,this,this._el_3,throwOnChange);
    this._MdInputContainer_5_3.checkHost(this,this.compView_5,this._el_5,throwOnChange);
    this._MdInputDirective_7_7.checkHost(this,this,this._el_7,throwOnChange);
    this._NgControlStatus_7_8.checkHost(this,this,this._el_7,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_1.destroy();
    this.compView_5.destroy();
    this._FormControlName_7_5.ngOnDestroy();
    this._MdInputDirective_7_7.ngOnDestroy();
    this.debug(7,13,12);
    this.debug(5,12,10);
    this._FormGroupDirective_3_3.ngOnDestroy();
    this.debug(3,8,8);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_10,ctx);
    }
    if (((nodeIndex == 1) && (ngContentIndex == 1))) {  }
    if (((nodeIndex == 5) && (ngContentIndex == 0))) {  }
    if (((nodeIndex == 5) && (ngContentIndex == 1))) {
      cb(this._text_6,ctx);
      cb(this._el_7,ctx);
      cb(this._text_8,ctx);
    }
    if (((nodeIndex == 5) && (ngContentIndex == 2))) {  }
    if (((nodeIndex == 5) && (ngContentIndex == 3))) {  }
    if (((nodeIndex == 5) && (ngContentIndex == 4))) {  }
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.debug(3,8,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._FormGroupDirective_3_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.debug(5,12,10);
    this.compView_5.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdInputContainer_5_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_7(eventName:string,$event:any):boolean {
    this.debug(7,13,12);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_7_3.handleEvent(eventName,$event) && result);
    result = (this._MdInputDirective_7_7.handleEvent(eventName,$event) && result);
    return result;
  }
}