/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './addresses-search.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../addresses.sandbox';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '@angular/forms/src/directives/default_value_accessor';
import * as import13 from '@angular/forms/src/directives/control_value_accessor';
import * as import14 from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import * as import15 from '@angular/forms/src/directives/ng_control';
import * as import16 from '@angular/forms/src/directives/ng_control_status';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import20 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_directive.ngfactory';
import * as import21 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import22 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import23 from '@angular/common/src/pipes/async_pipe';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from '@angular/core/src/change_detection/differs/iterable_differs';
export class Wrapper_AddressesSearchComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AddressesSearchComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.AddressesSearchComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_control(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.control = currValue;
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
    if (emit0) { (this.subscription0 = this.context.selectAddress.subscribe(_eventHandler.bind(view,'selectAddress'))); }
  }
}
const nodeDebugInfos_AddressesSearchComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.AddressesSearchComponent],import0.AddressesSearchComponent,{})];
var renderType_AddressesSearchComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_AddressesSearchComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.AddressesSearchComponent>;
  _AddressesSearchComponent_0_3:Wrapper_AddressesSearchComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AddressesSearchComponent_Host0,renderType_AddressesSearchComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AddressesSearchComponent_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'addresses-search',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_AddressesSearchComponent0(this.viewUtils,this,0,this._el_0);
    this._AddressesSearchComponent_0_3 = new Wrapper_AddressesSearchComponent(this.injectorGet(import10.AddressesSandbox,this.parentIndex));
    this.compView_0.create(this._AddressesSearchComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._AddressesSearchComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AddressesSearchComponent) && (0 === requestNodeIndex))) { return this._AddressesSearchComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._AddressesSearchComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._AddressesSearchComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AddressesSearchComponentNgFactory:import9.ComponentFactory<import0.AddressesSearchComponent> = new import9.ComponentFactory<import0.AddressesSearchComponent>('addresses-search',View_AddressesSearchComponent_Host0,import0.AddressesSearchComponent);
const styles_AddressesSearchComponent:any[] = ([] as any[]);
const nodeDebugInfos_AddressesSearchComponent1:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_AddressesSearchComponent1 extends import2.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_AddressesSearchComponent1,renderType_AddressesSearchComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AddressesSearchComponent1,declaredViewContainer);
    this._expr_5 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,this.debug(0,6,20));
    this._text_1 = this.renderer.createText(this._el_0,'\n                        ',this.debug(1,6,100));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h1',import3.EMPTY_INLINE_ARRAY,this.debug(2,7,24));
    this._text_3 = this.renderer.createText(this._el_2,'',this.debug(3,7,28));
    this._text_4 = this.renderer.createText(this._el_0,'\n                    ',this.debug(4,7,60));
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
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(3,7,28);
    const currVal_5:any = import3.inlineInterpolate(1,'',this.context.$implicit.formatted_address,' ');
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_3,currVal_5);
      this._expr_5 = currVal_5;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.debug(0,6,20);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onSelectAddress(this.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
const nodeDebugInfos_AddressesSearchComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import12.DefaultValueAccessor,
    import13.NG_VALUE_ACCESSOR,
    import14.FormControlDirective,
    import15.NgControl,
    import16.NgControlStatus
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import17.TemplateRef,
    import18.NgFor
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_AddressesSearchComponent:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/addresses/components/addresses-search/addresses-search.component.ts class AddressesSearchComponent - inline template',0,import6.ViewEncapsulation.None,styles_AddressesSearchComponent,{});
export class View_AddressesSearchComponent0 extends import2.DebugAppView<import0.AddressesSearchComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _DefaultValueAccessor_5_3:import19.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_5_4:any[];
  _FormControlDirective_5_5:import20.Wrapper_FormControlDirective;
  _NgControl_5_6:any;
  _NgControlStatus_5_7:import21.Wrapper_NgControlStatus;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import11.ViewContainer;
  _TemplateRef_9_5:any;
  _NgFor_9_6:import22.Wrapper_NgFor;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _pipe_async_0:import23.AsyncPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AddressesSearchComponent0,renderType_AddressesSearchComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_AddressesSearchComponent0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,this.debug(1,1,8));
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',this.debug(2,1,13));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','col-sm-12'),this.debug(3,2,12));
    this._text_4 = this.renderer.createText(this._el_3,'\n                ',this.debug(4,2,36));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'input',new import3.InlineArray16(12,'autocomplete','off','class','form-control input-md','id','searchInput','placeholder','Search Google','style','margin-top: 10px','type','text'),this.debug(5,3,16));
    this._DefaultValueAccessor_5_3 = new import19.Wrapper_DefaultValueAccessor(this.renderer,new import24.ElementRef(this._el_5));
    this._NG_VALUE_ACCESSOR_5_4 = [this._DefaultValueAccessor_5_3.context];
    this._FormControlDirective_5_5 = new import20.Wrapper_FormControlDirective((null as any),(null as any),this._NG_VALUE_ACCESSOR_5_4);
    this._NgControl_5_6 = this._FormControlDirective_5_5.context;
    this._NgControlStatus_5_7 = new import21.Wrapper_NgControlStatus(this._NgControl_5_6);
    this._text_6 = this.renderer.createText(this._el_3,'\n                ',this.debug(6,4,68));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_3,'ul',new import3.InlineArray2(2,'class','address-search-results'),this.debug(7,5,16));
    this._text_8 = this.renderer.createText(this._el_7,'\n                    ',this.debug(8,5,51));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_7,this.debug(9,6,20));
    this._vc_9 = new import11.ViewContainer(9,7,this,this._anchor_9);
    this._TemplateRef_9_5 = new import17.TemplateRef_(this,9,this._anchor_9);
    this._NgFor_9_6 = new import22.Wrapper_NgFor(this._vc_9.vcRef,this._TemplateRef_9_5,this.parentView.injectorGet(import25.IterableDiffers,this.parentIndex),this.ref);
    this._text_10 = this.renderer.createText(this._el_7,'\n                ',this.debug(10,8,25));
    this._text_11 = this.renderer.createText(this._el_3,'\n            ',this.debug(11,9,21));
    this._text_12 = this.renderer.createText(this._el_1,'\n        \n        \n        ',this.debug(12,10,18));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n    \n    ',this.debug(13,13,14));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray4(4,'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_5));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import23.AsyncPipe(this.ref);
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
      this._anchor_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.DefaultValueAccessor) && (5 === requestNodeIndex))) { return this._DefaultValueAccessor_5_3.context; }
    if (((token === import13.NG_VALUE_ACCESSOR) && (5 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_5_4; }
    if (((token === import14.FormControlDirective) && (5 === requestNodeIndex))) { return this._FormControlDirective_5_5.context; }
    if (((token === import15.NgControl) && (5 === requestNodeIndex))) { return this._NgControl_5_6; }
    if (((token === import16.NgControlStatus) && (5 === requestNodeIndex))) { return this._NgControlStatus_5_7.context; }
    if (((token === import17.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import18.NgFor) && (9 === requestNodeIndex))) { return this._NgFor_9_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    this.debug(5,3,16);
    this._DefaultValueAccessor_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(5,3,60);
    const currVal_5_1_0:any = this.context.control;
    this._FormControlDirective_5_5.check_form(currVal_5_1_0,throwOnChange,false);
    this._FormControlDirective_5_5.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(5,3,16);
    this._NgControlStatus_5_7.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(9,6,24);
    valUnwrapper.reset();
    const currVal_9_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.addressesToShow$));
    this._NgFor_9_6.check_ngForOf(currVal_9_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgFor_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    this._NgControlStatus_5_7.checkHost(this,this,this._el_5,throwOnChange);
  }
  destroyInternal():void {
    this._vc_9.destroyNestedViews();
    this._FormControlDirective_5_5.ngOnDestroy();
    this.debug(5,3,16);
    this.debug(9,6,20);
    this._pipe_async_0.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 9)) { return new View_AddressesSearchComponent1(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    return (null as any);
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.debug(5,3,16);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_5_3.handleEvent(eventName,$event) && result);
    return result;
  }
}