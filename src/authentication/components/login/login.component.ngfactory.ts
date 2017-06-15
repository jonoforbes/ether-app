/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './login.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/forms/src/form_builder';
import * as import11 from '@angular/flex-layout/flexbox/api/layout';
import * as import12 from '@angular/flex-layout/flexbox/api/layout-align';
import * as import13 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import14 from '@angular/forms/src/directives/control_container';
import * as import15 from '@angular/forms/src/directives/ng_control_status';
import * as import16 from '@angular/flex-layout/flexbox/api/flex-align';
import * as import17 from '@angular/material/input/input-container';
import * as import18 from '@angular/forms/src/directives/default_value_accessor';
import * as import19 from '@angular/forms/src/directives/control_value_accessor';
import * as import20 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import21 from '@angular/forms/src/directives/ng_control';
import * as import22 from '@angular/material/core/compatibility/compatibility';
import * as import23 from '@angular/material/button/button';
import * as import24 from '../../../../node_modules/@angular/flex-layout/flexbox/api/layout.ngfactory';
import * as import25 from '../../../../node_modules/@angular/flex-layout/flexbox/api/layout-align.ngfactory';
import * as import26 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import27 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import28 from '../../../../node_modules/@angular/flex-layout/flexbox/api/flex-align.ngfactory';
import * as import29 from '../../../../node_modules/@angular/material/input/input-container.ngfactory';
import * as import30 from '@angular/core/src/linker/query_list';
import * as import31 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import32 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import33 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import34 from '../../../../node_modules/@angular/material/button/button.ngfactory';
import * as import35 from '@angular/flex-layout/media-query/media-monitor';
import * as import36 from '@angular/core/src/linker/element_ref';
export class Wrapper_LoginComponent {
  /*private*/ _eventHandler:Function;
  context:import0.LoginComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.LoginComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_isBusy(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.isBusy = currValue;
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
    if (emit0) { (this.subscription0 = this.context.authenticate.subscribe(_eventHandler.bind(view,'authenticate'))); }
  }
}
const nodeDebugInfos_LoginComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.LoginComponent],import0.LoginComponent,{})];
var renderType_LoginComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_LoginComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.LoginComponent>;
  _LoginComponent_0_3:Wrapper_LoginComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LoginComponent_Host0,renderType_LoginComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_LoginComponent_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'login',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_LoginComponent0(this.viewUtils,this,0,this._el_0);
    this._LoginComponent_0_3 = new Wrapper_LoginComponent(this.injectorGet(import10.FormBuilder,this.parentIndex));
    this.compView_0.create(this._LoginComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._LoginComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.LoginComponent) && (0 === requestNodeIndex))) { return this._LoginComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._LoginComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._LoginComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const LoginComponentNgFactory:import9.ComponentFactory<import0.LoginComponent> = new import9.ComponentFactory<import0.LoginComponent>('login',View_LoginComponent_Host0,import0.LoginComponent);
const styles_LoginComponent:any[] = ([] as any[]);
const nodeDebugInfos_LoginComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import11.LayoutDirective,
    import12.LayoutAlignDirective,
    import13.FormGroupDirective,
    import14.ControlContainer,
    import15.NgControlStatusGroup
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import11.LayoutDirective,
    import16.FlexAlignDirective,
    import17.MdInputContainer
  ]
  ,import17.MdInputContainer,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import18.DefaultValueAccessor,
    import19.NG_VALUE_ACCESSOR,
    import20.FormControlName,
    import21.NgControl,
    import15.NgControlStatus,
    import17.MdInputDirective
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import11.LayoutDirective,
    import16.FlexAlignDirective,
    import17.MdInputContainer
  ]
  ,import17.MdInputContainer,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import18.DefaultValueAccessor,
    import19.NG_VALUE_ACCESSOR,
    import20.FormControlName,
    import21.NgControl,
    import15.NgControlStatus,
    import17.MdInputDirective
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import22.MdPrefixRejector,
    import23.MdButton,
    import23.MdButtonCssMatStyler
  ]
  ,import23.MdButton,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_LoginComponent:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/authentication/components/login/login.component.ts class LoginComponent - inline template',0,import6.ViewEncapsulation.None,styles_LoginComponent,{});
export class View_LoginComponent0 extends import2.DebugAppView<import0.LoginComponent> {
  _text_0:any;
  _el_1:any;
  _LayoutDirective_1_3:import24.Wrapper_LayoutDirective;
  _LayoutAlignDirective_1_4:import25.Wrapper_LayoutAlignDirective;
  _FormGroupDirective_1_5:import26.Wrapper_FormGroupDirective;
  _ControlContainer_1_6:any;
  _NgControlStatusGroup_1_7:import27.Wrapper_NgControlStatusGroup;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  compView_6:import2.AppView<import17.MdInputContainer>;
  _LayoutDirective_6_3:import24.Wrapper_LayoutDirective;
  _FlexAlignDirective_6_4:import28.Wrapper_FlexAlignDirective;
  _MdInputContainer_6_5:import29.Wrapper_MdInputContainer;
  _query_MdInputDirective_6_0:import30.QueryList<any>;
  _query_MdPlaceholder_6_1:import30.QueryList<any>;
  _query_MdHint_6_2:import30.QueryList<any>;
  _text_7:any;
  _el_8:any;
  _DefaultValueAccessor_8_3:import31.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_8_4:any[];
  _FormControlName_8_5:import32.Wrapper_FormControlName;
  _NgControl_8_6:any;
  _NgControlStatus_8_7:import27.Wrapper_NgControlStatus;
  _MdInputDirective_8_8:import29.Wrapper_MdInputDirective;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  compView_11:import2.AppView<import17.MdInputContainer>;
  _LayoutDirective_11_3:import24.Wrapper_LayoutDirective;
  _FlexAlignDirective_11_4:import28.Wrapper_FlexAlignDirective;
  _MdInputContainer_11_5:import29.Wrapper_MdInputContainer;
  _query_MdInputDirective_11_0:import30.QueryList<any>;
  _query_MdPlaceholder_11_1:import30.QueryList<any>;
  _query_MdHint_11_2:import30.QueryList<any>;
  _text_12:any;
  _el_13:any;
  _DefaultValueAccessor_13_3:import31.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_13_4:any[];
  _FormControlName_13_5:import32.Wrapper_FormControlName;
  _NgControl_13_6:any;
  _NgControlStatus_13_7:import27.Wrapper_NgControlStatus;
  _MdInputDirective_13_8:import29.Wrapper_MdInputDirective;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  compView_16:import2.AppView<import23.MdButton>;
  _MdPrefixRejector_16_3:import33.Wrapper_MdPrefixRejector;
  _MdButton_16_4:import34.Wrapper_MdButton;
  _MdButtonCssMatStyler_16_5:import34.Wrapper_MdButtonCssMatStyler;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LoginComponent0,renderType_LoginComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_LoginComponent0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'form',new import3.InlineArray4(4,'fxLayout','column','fxLayoutAlign','start center'),this.debug(1,1,8));
    this._LayoutDirective_1_3 = new import24.Wrapper_LayoutDirective(this.parentView.injectorGet(import35.MediaMonitor,this.parentIndex),new import36.ElementRef(this._el_1),this.renderer);
    this._LayoutAlignDirective_1_4 = new import25.Wrapper_LayoutAlignDirective(this.parentView.injectorGet(import35.MediaMonitor,this.parentIndex),new import36.ElementRef(this._el_1),this.renderer,this._LayoutDirective_1_3.context);
    this._FormGroupDirective_1_5 = new import26.Wrapper_FormGroupDirective((null as any),(null as any));
    this._ControlContainer_1_6 = this._FormGroupDirective_1_5.context;
    this._NgControlStatusGroup_1_7 = new import27.Wrapper_NgControlStatusGroup(this._ControlContainer_1_6);
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',this.debug(2,1,85));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'h2',import3.EMPTY_INLINE_ARRAY,this.debug(3,2,12));
    this._text_4 = this.renderer.createText(this._el_3,'Templar EIS Adviser Login',this.debug(4,2,16));
    this._text_5 = this.renderer.createText(this._el_1,'\n            ',this.debug(5,2,46));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_1,'md-input-container',new import3.InlineArray8(6,'align','center','fxFlexAlign','center','fxLayout','row'),this.debug(6,3,12));
    this.compView_6 = new import29.View_MdInputContainer0(this.viewUtils,this,6,this._el_6);
    this._LayoutDirective_6_3 = new import24.Wrapper_LayoutDirective(this.parentView.injectorGet(import35.MediaMonitor,this.parentIndex),new import36.ElementRef(this._el_6),this.renderer);
    this._FlexAlignDirective_6_4 = new import28.Wrapper_FlexAlignDirective(this.parentView.injectorGet(import35.MediaMonitor,this.parentIndex),new import36.ElementRef(this._el_6),this.renderer);
    this._MdInputContainer_6_5 = new import29.Wrapper_MdInputContainer();
    this._query_MdInputDirective_6_0 = new import30.QueryList<any>();
    this._query_MdPlaceholder_6_1 = new import30.QueryList<any>();
    this._query_MdHint_6_2 = new import30.QueryList<any>();
    this._text_7 = this.renderer.createText((null as any),'\n                ',this.debug(7,3,83));
    this._el_8 = import3.createRenderElement(this.renderer,(null as any),'input',new import3.InlineArray8(8,'formControlName','login','mdInput','','placeholder','Enter Login','type','email'),this.debug(8,4,16));
    this._DefaultValueAccessor_8_3 = new import31.Wrapper_DefaultValueAccessor(this.renderer,new import36.ElementRef(this._el_8));
    this._NG_VALUE_ACCESSOR_8_4 = [this._DefaultValueAccessor_8_3.context];
    this._FormControlName_8_5 = new import32.Wrapper_FormControlName(this._ControlContainer_1_6,(null as any),(null as any),this._NG_VALUE_ACCESSOR_8_4);
    this._NgControl_8_6 = this._FormControlName_8_5.context;
    this._NgControlStatus_8_7 = new import27.Wrapper_NgControlStatus(this._NgControl_8_6);
    this._MdInputDirective_8_8 = new import29.Wrapper_MdInputDirective(new import36.ElementRef(this._el_8),this.renderer,this._NgControl_8_6);
    this._text_9 = this.renderer.createText((null as any),'\n            ',this.debug(9,4,94));
    this.compView_6.create(this._MdInputContainer_6_5.context);
    this._text_10 = this.renderer.createText(this._el_1,'\n            ',this.debug(10,5,33));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_1,'md-input-container',new import3.InlineArray4(4,'fxFlexAlign','center','fxLayout','row'),this.debug(11,6,12));
    this.compView_11 = new import29.View_MdInputContainer0(this.viewUtils,this,11,this._el_11);
    this._LayoutDirective_11_3 = new import24.Wrapper_LayoutDirective(this.parentView.injectorGet(import35.MediaMonitor,this.parentIndex),new import36.ElementRef(this._el_11),this.renderer);
    this._FlexAlignDirective_11_4 = new import28.Wrapper_FlexAlignDirective(this.parentView.injectorGet(import35.MediaMonitor,this.parentIndex),new import36.ElementRef(this._el_11),this.renderer);
    this._MdInputContainer_11_5 = new import29.Wrapper_MdInputContainer();
    this._query_MdInputDirective_11_0 = new import30.QueryList<any>();
    this._query_MdPlaceholder_11_1 = new import30.QueryList<any>();
    this._query_MdHint_11_2 = new import30.QueryList<any>();
    this._text_12 = this.renderer.createText((null as any),'\n                ',this.debug(12,6,68));
    this._el_13 = import3.createRenderElement(this.renderer,(null as any),'input',new import3.InlineArray8(8,'formControlName','password','mdInput','','placeholder','Enter Password','type','password'),this.debug(13,7,16));
    this._DefaultValueAccessor_13_3 = new import31.Wrapper_DefaultValueAccessor(this.renderer,new import36.ElementRef(this._el_13));
    this._NG_VALUE_ACCESSOR_13_4 = [this._DefaultValueAccessor_13_3.context];
    this._FormControlName_13_5 = new import32.Wrapper_FormControlName(this._ControlContainer_1_6,(null as any),(null as any),this._NG_VALUE_ACCESSOR_13_4);
    this._NgControl_13_6 = this._FormControlName_13_5.context;
    this._NgControlStatus_13_7 = new import27.Wrapper_NgControlStatus(this._NgControl_13_6);
    this._MdInputDirective_13_8 = new import29.Wrapper_MdInputDirective(new import36.ElementRef(this._el_13),this.renderer,this._NgControl_13_6);
    this._text_14 = this.renderer.createText((null as any),'\n            ',this.debug(14,7,103));
    this.compView_11.create(this._MdInputContainer_11_5.context);
    this._text_15 = this.renderer.createText(this._el_1,'\n            ',this.debug(15,8,33));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_1,'button',new import3.InlineArray8(6,'class','login-button','md-button','','type','submit'),this.debug(16,9,12));
    this.compView_16 = new import34.View_MdButton0(this.viewUtils,this,16,this._el_16);
    this._MdPrefixRejector_16_3 = new import33.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import22.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdButton_16_4 = new import34.Wrapper_MdButton(new import36.ElementRef(this._el_16),this.renderer);
    this._MdButtonCssMatStyler_16_5 = new import34.Wrapper_MdButtonCssMatStyler();
    this._text_17 = this.renderer.createText((null as any),'\n            ',this.debug(17,9,126));
    this._el_18 = import3.createRenderElement(this.renderer,(null as any),'p',import3.EMPTY_INLINE_ARRAY,this.debug(18,10,12));
    this._text_19 = this.renderer.createText(this._el_18,'Sign in',this.debug(19,10,15));
    this._text_20 = this.renderer.createText((null as any),'\n        ',this.debug(20,10,26));
    this.compView_16.create(this._MdButton_16_4.context);
    this._text_21 = this.renderer.createText(this._el_1,'\n        ',this.debug(21,11,17));
    this._text_22 = this.renderer.createText(parentRenderNode,'\n        \n',this.debug(22,12,15));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray4(4,'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_1));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_6,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_6));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray8(6,'input',(null as any),'blur',(null as any),'focus',(null as any)),this.eventHandler(this.handleEvent_8));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_11,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_11));
    var disposable_4:Function = import3.subscribeToRenderElement(this,this._el_13,new import3.InlineArray8(6,'input',(null as any),'blur',(null as any),'focus',(null as any)),this.eventHandler(this.handleEvent_13));
    var disposable_5:Function = import3.subscribeToRenderElement(this,this._el_16,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_16));
    this._query_MdInputDirective_6_0.reset([this._MdInputDirective_8_8.context]);
    this._MdInputContainer_6_5.context._mdInputChild = this._query_MdInputDirective_6_0.first;
    this._query_MdPlaceholder_6_1.reset(([] as any[]));
    this._MdInputContainer_6_5.context._placeholderChild = this._query_MdPlaceholder_6_1.first;
    this._query_MdInputDirective_11_0.reset([this._MdInputDirective_13_8.context]);
    this._MdInputContainer_11_5.context._mdInputChild = this._query_MdInputDirective_11_0.first;
    this._query_MdPlaceholder_11_1.reset(([] as any[]));
    this._MdInputContainer_11_5.context._placeholderChild = this._query_MdPlaceholder_11_1.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._text_21,
      this._text_22
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.DefaultValueAccessor) && (8 === requestNodeIndex))) { return this._DefaultValueAccessor_8_3.context; }
    if (((token === import19.NG_VALUE_ACCESSOR) && (8 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_8_4; }
    if (((token === import20.FormControlName) && (8 === requestNodeIndex))) { return this._FormControlName_8_5.context; }
    if (((token === import21.NgControl) && (8 === requestNodeIndex))) { return this._NgControl_8_6; }
    if (((token === import15.NgControlStatus) && (8 === requestNodeIndex))) { return this._NgControlStatus_8_7.context; }
    if (((token === import17.MdInputDirective) && (8 === requestNodeIndex))) { return this._MdInputDirective_8_8.context; }
    if (((token === import11.LayoutDirective) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._LayoutDirective_6_3.context; }
    if (((token === import16.FlexAlignDirective) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._FlexAlignDirective_6_4.context; }
    if (((token === import17.MdInputContainer) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._MdInputContainer_6_5.context; }
    if (((token === import18.DefaultValueAccessor) && (13 === requestNodeIndex))) { return this._DefaultValueAccessor_13_3.context; }
    if (((token === import19.NG_VALUE_ACCESSOR) && (13 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_13_4; }
    if (((token === import20.FormControlName) && (13 === requestNodeIndex))) { return this._FormControlName_13_5.context; }
    if (((token === import21.NgControl) && (13 === requestNodeIndex))) { return this._NgControl_13_6; }
    if (((token === import15.NgControlStatus) && (13 === requestNodeIndex))) { return this._NgControlStatus_13_7.context; }
    if (((token === import17.MdInputDirective) && (13 === requestNodeIndex))) { return this._MdInputDirective_13_8.context; }
    if (((token === import11.LayoutDirective) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._LayoutDirective_11_3.context; }
    if (((token === import16.FlexAlignDirective) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._FlexAlignDirective_11_4.context; }
    if (((token === import17.MdInputContainer) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._MdInputContainer_11_5.context; }
    if (((token === import22.MdPrefixRejector) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._MdPrefixRejector_16_3.context; }
    if (((token === import23.MdButton) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._MdButton_16_4.context; }
    if (((token === import23.MdButtonCssMatStyler) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._MdButtonCssMatStyler_16_5.context; }
    if (((token === import11.LayoutDirective) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._LayoutDirective_1_3.context; }
    if (((token === import12.LayoutAlignDirective) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._LayoutAlignDirective_1_4.context; }
    if (((token === import13.FormGroupDirective) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._FormGroupDirective_1_5.context; }
    if (((token === import14.ControlContainer) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._ControlContainer_1_6; }
    if (((token === import15.NgControlStatusGroup) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._NgControlStatusGroup_1_7.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(1,1,38);
    const currVal_1_0_0:any = 'column';
    this._LayoutDirective_1_3.check_layout(currVal_1_0_0,throwOnChange,false);
    this._LayoutDirective_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(1,1,56);
    const currVal_1_1_0:any = 'start center';
    this._LayoutAlignDirective_1_4.check_align(currVal_1_1_0,throwOnChange,false);
    this._LayoutAlignDirective_1_4.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(1,1,14);
    const currVal_1_2_0:any = this.context.loginForm;
    this._FormGroupDirective_1_5.check_form(currVal_1_2_0,throwOnChange,false);
    this._FormGroupDirective_1_5.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(1,1,8);
    this._NgControlStatusGroup_1_7.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(6,3,68);
    const currVal_6_0_0:any = 'row';
    this._LayoutDirective_6_3.check_layout(currVal_6_0_0,throwOnChange,false);
    this._LayoutDirective_6_3.ngDoCheck(this,this._el_6,throwOnChange);
    this.debug(6,3,47);
    const currVal_6_1_0:any = 'center';
    this._FlexAlignDirective_6_4.check_align(currVal_6_1_0,throwOnChange,false);
    this._FlexAlignDirective_6_4.ngDoCheck(this,this._el_6,throwOnChange);
    this.debug(6,3,32);
    const currVal_6_2_0:any = 'center';
    this._MdInputContainer_6_5.check_align(currVal_6_2_0,throwOnChange,false);
    this._MdInputContainer_6_5.ngDoCheck(this,this._el_6,throwOnChange);
    this.debug(8,4,16);
    this._DefaultValueAccessor_8_3.ngDoCheck(this,this._el_8,throwOnChange);
    this.debug(8,4,44);
    const currVal_8_1_0:any = 'login';
    this._FormControlName_8_5.check_name(currVal_8_1_0,throwOnChange,false);
    this._FormControlName_8_5.ngDoCheck(this,this._el_8,throwOnChange);
    this.debug(8,4,16);
    this._NgControlStatus_8_7.ngDoCheck(this,this._el_8,throwOnChange);
    this.debug(8,4,68);
    const currVal_8_3_0:any = 'Enter Login';
    this._MdInputDirective_8_8.check_placeholder(currVal_8_3_0,throwOnChange,false);
    this.debug(8,4,23);
    const currVal_8_3_1:any = 'email';
    this._MdInputDirective_8_8.check_type(currVal_8_3_1,throwOnChange,false);
    this._MdInputDirective_8_8.ngDoCheck(this,this._el_8,throwOnChange);
    this.debug(11,6,53);
    const currVal_11_0_0:any = 'row';
    this._LayoutDirective_11_3.check_layout(currVal_11_0_0,throwOnChange,false);
    this._LayoutDirective_11_3.ngDoCheck(this,this._el_11,throwOnChange);
    this.debug(11,6,32);
    const currVal_11_1_0:any = 'center';
    this._FlexAlignDirective_11_4.check_align(currVal_11_1_0,throwOnChange,false);
    this._FlexAlignDirective_11_4.ngDoCheck(this,this._el_11,throwOnChange);
    this.debug(11,6,12);
    this._MdInputContainer_11_5.ngDoCheck(this,this._el_11,throwOnChange);
    this.debug(13,7,16);
    this._DefaultValueAccessor_13_3.ngDoCheck(this,this._el_13,throwOnChange);
    this.debug(13,7,47);
    const currVal_13_1_0:any = 'password';
    this._FormControlName_13_5.check_name(currVal_13_1_0,throwOnChange,false);
    this._FormControlName_13_5.ngDoCheck(this,this._el_13,throwOnChange);
    this.debug(13,7,16);
    this._NgControlStatus_13_7.ngDoCheck(this,this._el_13,throwOnChange);
    this.debug(13,7,74);
    const currVal_13_3_0:any = 'Enter Password';
    this._MdInputDirective_13_8.check_placeholder(currVal_13_3_0,throwOnChange,false);
    this.debug(13,7,23);
    const currVal_13_3_1:any = 'password';
    this._MdInputDirective_13_8.check_type(currVal_13_3_1,throwOnChange,false);
    this._MdInputDirective_13_8.ngDoCheck(this,this._el_13,throwOnChange);
    this.debug(16,9,12);
    this._MdPrefixRejector_16_3.ngDoCheck(this,this._el_16,throwOnChange);
    this.debug(16,9,65);
    const currVal_16_1_0:boolean = (!this.context.loginForm.valid || this.context.isBusy);
    this._MdButton_16_4.check_disabled(currVal_16_1_0,throwOnChange,false);
    if (this._MdButton_16_4.ngDoCheck(this,this._el_16,throwOnChange)) { this.compView_16.markAsCheckOnce(); }
    this.debug(16,9,12);
    this._MdButtonCssMatStyler_16_5.ngDoCheck(this,this._el_16,throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdHint_6_2.dirty) {
        this._query_MdHint_6_2.reset(([] as any[]));
        this._MdInputContainer_6_5.context._hintChildren = this._query_MdHint_6_2;
        this._query_MdHint_6_2.notifyOnChanges();
      }
      if (this._query_MdHint_11_2.dirty) {
        this._query_MdHint_11_2.reset(([] as any[]));
        this._MdInputContainer_11_5.context._hintChildren = this._query_MdHint_11_2;
        this._query_MdHint_11_2.notifyOnChanges();
      }
      this.debug(6,3,12);
      if ((this.numberOfChecks === 0)) { this._MdInputContainer_6_5.context.ngAfterContentInit(); }
      this.debug(11,6,12);
      if ((this.numberOfChecks === 0)) { this._MdInputContainer_11_5.context.ngAfterContentInit(); }
    }
    this._NgControlStatusGroup_1_7.checkHost(this,this,this._el_1,throwOnChange);
    this._MdInputContainer_6_5.checkHost(this,this.compView_6,this._el_6,throwOnChange);
    this._NgControlStatus_8_7.checkHost(this,this,this._el_8,throwOnChange);
    this._MdInputDirective_8_8.checkHost(this,this,this._el_8,throwOnChange);
    this._MdInputContainer_11_5.checkHost(this,this.compView_11,this._el_11,throwOnChange);
    this._NgControlStatus_13_7.checkHost(this,this,this._el_13,throwOnChange);
    this._MdInputDirective_13_8.checkHost(this,this,this._el_13,throwOnChange);
    this._MdButton_16_4.checkHost(this,this.compView_16,this._el_16,throwOnChange);
    this._MdButtonCssMatStyler_16_5.checkHost(this,this.compView_16,this._el_16,throwOnChange);
    this.compView_6.internalDetectChanges(throwOnChange);
    this.compView_11.internalDetectChanges(throwOnChange);
    this.compView_16.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_6.destroy();
    this.compView_11.destroy();
    this.compView_16.destroy();
    this._FormControlName_8_5.ngOnDestroy();
    this._MdInputDirective_8_8.ngOnDestroy();
    this.debug(8,4,16);
    this._LayoutDirective_6_3.ngOnDestroy();
    this._FlexAlignDirective_6_4.ngOnDestroy();
    this.debug(6,3,12);
    this._FormControlName_13_5.ngOnDestroy();
    this._MdInputDirective_13_8.ngOnDestroy();
    this.debug(13,7,16);
    this._LayoutDirective_11_3.ngOnDestroy();
    this._FlexAlignDirective_11_4.ngOnDestroy();
    this.debug(11,6,12);
    this.debug(16,9,12);
    this._LayoutDirective_1_3.ngOnDestroy();
    this._LayoutAlignDirective_1_4.ngOnDestroy();
    this._FormGroupDirective_1_5.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 6) && (ngContentIndex == 0))) {  }
    if (((nodeIndex == 6) && (ngContentIndex == 1))) {
      cb(this._text_7,ctx);
      cb(this._el_8,ctx);
      cb(this._text_9,ctx);
    }
    if (((nodeIndex == 6) && (ngContentIndex == 2))) {  }
    if (((nodeIndex == 6) && (ngContentIndex == 3))) {  }
    if (((nodeIndex == 6) && (ngContentIndex == 4))) {  }
    if (((nodeIndex == 11) && (ngContentIndex == 0))) {  }
    if (((nodeIndex == 11) && (ngContentIndex == 1))) {
      cb(this._text_12,ctx);
      cb(this._el_13,ctx);
      cb(this._text_14,ctx);
    }
    if (((nodeIndex == 11) && (ngContentIndex == 2))) {  }
    if (((nodeIndex == 11) && (ngContentIndex == 3))) {  }
    if (((nodeIndex == 11) && (ngContentIndex == 4))) {  }
    if (((nodeIndex == 16) && (ngContentIndex == 0))) {
      cb(this._text_17,ctx);
      cb(this._el_18,ctx);
      cb(this._text_20,ctx);
    }
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.debug(1,1,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._FormGroupDirective_1_5.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_6(eventName:string,$event:any):boolean {
    this.debug(6,3,12);
    this.compView_6.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdInputContainer_6_5.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.debug(8,4,16);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_8_3.handleEvent(eventName,$event) && result);
    result = (this._MdInputDirective_8_8.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_11(eventName:string,$event:any):boolean {
    this.debug(11,6,12);
    this.compView_11.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdInputContainer_11_5.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.debug(13,7,16);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_13_3.handleEvent(eventName,$event) && result);
    result = (this._MdInputDirective_13_8.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_16(eventName:string,$event:any):boolean {
    this.debug(16,9,12);
    this.compView_16.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_16_4.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onSubmit()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}