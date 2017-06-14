/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './detail-header.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '@angular/common/src/pipes/slice_pipe';
import * as import12 from '@angular/material/core/compatibility/compatibility';
import * as import13 from '@angular/material/toolbar/toolbar';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/common/src/directives/ng_if';
import * as import16 from '@angular/material/button/button';
import * as import17 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import18 from '../../../../node_modules/@angular/material/toolbar/toolbar.ngfactory';
import * as import19 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from '../../../../node_modules/@angular/material/button/button.ngfactory';
import * as import21 from '../../../common/pipes/strip-tags.pipe';
import * as import22 from '@angular/common/src/pipes/date_pipe';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from '@angular/core/src/i18n/tokens';
export class Wrapper_NotesDetailHeaderComponent {
  /*private*/ _eventHandler:Function;
  context:import0.NotesDetailHeaderComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.NotesDetailHeaderComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_noteForm(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.noteForm = currValue;
      this._expr_0 = currValue;
    }
  }
  check_note(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.note = currValue;
      this._expr_1 = currValue;
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
    if (emit0) { (this.subscription0 = this.context.submitForm.subscribe(_eventHandler.bind(view,'submitForm'))); }
  }
}
const nodeDebugInfos_NotesDetailHeaderComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.NotesDetailHeaderComponent],import0.NotesDetailHeaderComponent,{})];
var renderType_NotesDetailHeaderComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_NotesDetailHeaderComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.NotesDetailHeaderComponent>;
  _NotesDetailHeaderComponent_0_3:Wrapper_NotesDetailHeaderComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NotesDetailHeaderComponent_Host0,renderType_NotesDetailHeaderComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NotesDetailHeaderComponent_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'notes-detail-header',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_NotesDetailHeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._NotesDetailHeaderComponent_0_3 = new Wrapper_NotesDetailHeaderComponent();
    this.compView_0.create(this._NotesDetailHeaderComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._NotesDetailHeaderComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.NotesDetailHeaderComponent) && (0 === requestNodeIndex))) { return this._NotesDetailHeaderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._NotesDetailHeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._NotesDetailHeaderComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const NotesDetailHeaderComponentNgFactory:import9.ComponentFactory<import0.NotesDetailHeaderComponent> = new import9.ComponentFactory<import0.NotesDetailHeaderComponent>('notes-detail-header',View_NotesDetailHeaderComponent_Host0,import0.NotesDetailHeaderComponent);
const styles_NotesDetailHeaderComponent:any[] = ([] as any[]);
const nodeDebugInfos_NotesDetailHeaderComponent1:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_NotesDetailHeaderComponent1 extends import2.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_NotesDetailHeaderComponent1,renderType_NotesDetailHeaderComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NotesDetailHeaderComponent1,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'h3',import3.EMPTY_INLINE_ARRAY,this.debug(0,10,4));
    this._text_1 = this.renderer.createText(this._el_0,'New Note',this.debug(1,10,30));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
const nodeDebugInfos_NotesDetailHeaderComponent2:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_NotesDetailHeaderComponent2 extends import2.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  _pipe_stripTags_0_0:any;
  _pipe_slice_0:import11.SlicePipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_NotesDetailHeaderComponent2,renderType_NotesDetailHeaderComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NotesDetailHeaderComponent2,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'h3',import3.EMPTY_INLINE_ARRAY,this.debug(0,11,4));
    this._text_1 = this.renderer.createText(this._el_0,'',this.debug(1,11,29));
    this._pipe_stripTags_0_0 = import3.pureProxy1((<View_NotesDetailHeaderComponent0>this.parentView)._pipe_stripTags_0.transform.bind((<View_NotesDetailHeaderComponent0>this.parentView)._pipe_stripTags_0));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_slice_0 = new import11.SlicePipe();
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    this.debug(1,11,29);
    valUnwrapper.reset();
    const currVal_2:any = import3.inlineInterpolate(1,'',valUnwrapper.unwrap(this._pipe_slice_0.transform(valUnwrapper.unwrap(import3.castByValue(this._pipe_stripTags_0_0,(<View_NotesDetailHeaderComponent0>this.parentView)._pipe_stripTags_0.transform)(this.parentView.context.note.content)),0,35)),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_2,currVal_2))) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
const nodeDebugInfos_NotesDetailHeaderComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import12.MdPrefixRejector,
    import13.MdToolbar
  ]
  ,import13.MdToolbar,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import14.TemplateRef,
    import15.NgIf
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import14.TemplateRef,
    import15.NgIf
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import12.MdPrefixRejector,
    import16.MdButton,
    import16.MdButtonCssMatStyler
  ]
  ,import16.MdButton,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import12.MdPrefixRejector,
    import16.MdButton,
    import16.MdButtonCssMatStyler
  ]
  ,import16.MdButton,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_NotesDetailHeaderComponent:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/notes/components/detail-header/detail-header.component.ts class NotesDetailHeaderComponent - inline template',0,import6.ViewEncapsulation.None,styles_NotesDetailHeaderComponent,{});
export class View_NotesDetailHeaderComponent0 extends import2.DebugAppView<import0.NotesDetailHeaderComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import2.AppView<import13.MdToolbar>;
  _MdPrefixRejector_1_3:import17.Wrapper_MdPrefixRejector;
  _MdToolbar_1_4:import18.Wrapper_MdToolbar;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import10.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import19.Wrapper_NgIf;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import10.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import19.Wrapper_NgIf;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  compView_12:import2.AppView<import16.MdButton>;
  _MdPrefixRejector_12_3:import17.Wrapper_MdPrefixRejector;
  _MdButton_12_4:import20.Wrapper_MdButton;
  _MdButtonCssMatStyler_12_5:import20.Wrapper_MdButtonCssMatStyler;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  compView_18:import2.AppView<import16.MdButton>;
  _MdPrefixRejector_18_3:import17.Wrapper_MdPrefixRejector;
  _MdButton_18_4:import20.Wrapper_MdButton;
  _MdButtonCssMatStyler_18_5:import20.Wrapper_MdButtonCssMatStyler;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _pipe_stripTags_0:import21.StripTagsPipe;
  /*private*/ _expr_44:any;
  _pipe_date_1:import22.DatePipe;
  _pipe_date_1_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NotesDetailHeaderComponent0,renderType_NotesDetailHeaderComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NotesDetailHeaderComponent0);
    this._expr_44 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'md-toolbar',new import3.InlineArray8(8,'class','context-subheader','color','primary','role','toolbar','style','height: 66px !important; \n                                                                            background-color: #fff !important; \n                                                                            margin-bottom: 0px;\n                                                                            overflow-y: hidden !important;\n                                                                            z-index: 2;\n                                                                            position: fixed;\n                                                                            top: 0px'),this.debug(1,1,8));
    this.compView_1 = new import18.View_MdToolbar0(this.viewUtils,this,1,this._el_1);
    this._MdPrefixRejector_1_3 = new import17.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import12.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdToolbar_1_4 = new import18.Wrapper_MdToolbar(new import23.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText((null as any),'\n                                                                            \n    ',this.debug(2,7,86));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','welcomeBlock'),this.debug(3,9,4));
    this._text_4 = this.renderer.createText(this._el_3,'\n    ',this.debug(4,9,30));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,this.debug(5,10,4));
    this._vc_5 = new import10.ViewContainer(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import14.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import19.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_3,'\n    ',this.debug(6,10,43));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_3,this.debug(7,11,4));
    this._vc_7 = new import10.ViewContainer(7,3,this,this._anchor_7);
    this._TemplateRef_7_5 = new import14.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import19.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_3,'\n\n    ',this.debug(8,11,75));
    this._text_9 = this.renderer.createText((null as any),'\n\n    ',this.debug(9,13,10));
    this._el_10 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','actionBlock'),this.debug(10,15,4));
    this._text_11 = this.renderer.createText(this._el_10,'\n    ',this.debug(11,15,29));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'button',new import3.InlineArray4(4,'md-button','','style','position: absolute; right: 20px; top: 15px; padding: 2px 10px 2px 10px !important; display: block'),this.debug(12,16,4));
    this.compView_12 = new import20.View_MdButton0(this.viewUtils,this,12,this._el_12);
    this._MdPrefixRejector_12_3 = new import17.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import12.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdButton_12_4 = new import20.Wrapper_MdButton(new import23.ElementRef(this._el_12),this.renderer);
    this._MdButtonCssMatStyler_12_5 = new import20.Wrapper_MdButtonCssMatStyler();
    this._text_13 = this.renderer.createText((null as any),'\n      ',this.debug(13,16,146));
    this._el_14 = import3.createRenderElement(this.renderer,(null as any),'p',new import3.InlineArray2(2,'style','color: #c9c9c9'),this.debug(14,17,6));
    this._text_15 = this.renderer.createText(this._el_14,'',this.debug(15,17,32));
    this._text_16 = this.renderer.createText((null as any),'\n    ',this.debug(16,17,61));
    this.compView_12.create(this._MdButton_12_4.context);
    this._text_17 = this.renderer.createText(this._el_10,'\n    ',this.debug(17,18,13));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_10,'button',new import3.InlineArray4(4,'md-button','','style','position: absolute; right: 20px; top: 35px; padding: 2px 10px 2px 10px !important; display: block'),this.debug(18,19,4));
    this.compView_18 = new import20.View_MdButton0(this.viewUtils,this,18,this._el_18);
    this._MdPrefixRejector_18_3 = new import17.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import12.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdButton_18_4 = new import20.Wrapper_MdButton(new import23.ElementRef(this._el_18),this.renderer);
    this._MdButtonCssMatStyler_18_5 = new import20.Wrapper_MdButtonCssMatStyler();
    this._text_19 = this.renderer.createText((null as any),'\n      ',this.debug(19,19,156));
    this._el_20 = import3.createRenderElement(this.renderer,(null as any),'p',import3.EMPTY_INLINE_ARRAY,this.debug(20,20,6));
    this._text_21 = this.renderer.createText(this._el_20,'Save changes',this.debug(21,20,9));
    this._text_22 = this.renderer.createText((null as any),'\n      ',this.debug(22,20,25));
    this.compView_18.create(this._MdButton_18_4.context);
    this._text_23 = this.renderer.createText(this._el_10,'\n      ',this.debug(23,21,15));
    this._text_24 = this.renderer.createText((null as any),'\n      \n\n  ',this.debug(24,22,12));
    this.compView_1.create(this._MdToolbar_1_4.context);
    this._text_25 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(25,25,15));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_stripTags_0 = new import21.StripTagsPipe();
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_12,new import3.InlineArray8(6,'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_12));
    this._pipe_date_1 = new import22.DatePipe(this.parentView.injectorGet(import24.LOCALE_ID,this.parentIndex));
    this._pipe_date_1_0 = import3.pureProxy1(this._pipe_date_1.transform.bind(this._pipe_date_1));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_18,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_18));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._text_24,
      this._text_25
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import15.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    if (((token === import14.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import15.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import12.MdPrefixRejector) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._MdPrefixRejector_12_3.context; }
    if (((token === import16.MdButton) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._MdButton_12_4.context; }
    if (((token === import16.MdButtonCssMatStyler) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._MdButtonCssMatStyler_12_5.context; }
    if (((token === import12.MdPrefixRejector) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._MdPrefixRejector_18_3.context; }
    if (((token === import16.MdButton) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._MdButton_18_4.context; }
    if (((token === import16.MdButtonCssMatStyler) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._MdButtonCssMatStyler_18_5.context; }
    if (((token === import12.MdPrefixRejector) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._MdPrefixRejector_1_3.context; }
    if (((token === import13.MdToolbar) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._MdToolbar_1_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    this.debug(1,1,8);
    this._MdPrefixRejector_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(1,1,46);
    const currVal_1_1_0:any = 'primary';
    this._MdToolbar_1_4.check_color(currVal_1_1_0,throwOnChange,false);
    if (this._MdToolbar_1_4.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    this.debug(5,10,8);
    const currVal_5_0_0:boolean = !this.context.note.content;
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    this.debug(7,11,8);
    const currVal_7_0_0:any = this.context.note.content;
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    this.debug(12,16,4);
    this._MdPrefixRejector_12_3.ngDoCheck(this,this._el_12,throwOnChange);
    this.debug(12,16,128);
    const currVal_12_1_0:any = true;
    this._MdButton_12_4.check_disabled(currVal_12_1_0,throwOnChange,false);
    if (this._MdButton_12_4.ngDoCheck(this,this._el_12,throwOnChange)) { this.compView_12.markAsCheckOnce(); }
    this.debug(12,16,4);
    this._MdButtonCssMatStyler_12_5.ngDoCheck(this,this._el_12,throwOnChange);
    this.debug(18,19,4);
    this._MdPrefixRejector_18_3.ngDoCheck(this,this._el_18,throwOnChange);
    if (this._MdButton_18_4.ngDoCheck(this,this._el_18,throwOnChange)) { this.compView_18.markAsCheckOnce(); }
    this._MdButtonCssMatStyler_18_5.ngDoCheck(this,this._el_18,throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._MdToolbar_1_4.checkHost(this,this.compView_1,this._el_1,throwOnChange);
    this._MdButton_12_4.checkHost(this,this.compView_12,this._el_12,throwOnChange);
    this._MdButtonCssMatStyler_12_5.checkHost(this,this.compView_12,this._el_12,throwOnChange);
    this.debug(15,17,32);
    valUnwrapper.reset();
    const currVal_44:any = import3.inlineInterpolate(1,'',valUnwrapper.unwrap(import3.castByValue(this._pipe_date_1_0,this._pipe_date_1.transform)(this.context.note.createdAt)),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_44,currVal_44))) {
      this.renderer.setText(this._text_15,currVal_44);
      this._expr_44 = currVal_44;
    }
    this._MdButton_18_4.checkHost(this,this.compView_18,this._el_18,throwOnChange);
    this._MdButtonCssMatStyler_18_5.checkHost(this,this.compView_18,this._el_18,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_12.internalDetectChanges(throwOnChange);
    this.compView_18.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_5.destroyNestedViews();
    this._vc_7.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_12.destroy();
    this.compView_18.destroy();
    this.debug(5,10,4);
    this.debug(7,11,4);
    this.debug(12,16,4);
    this.debug(18,19,4);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_9,ctx);
      cb(this._el_10,ctx);
      cb(this._text_24,ctx);
    }
    if (((nodeIndex == 1) && (ngContentIndex == 1))) {  }
    if (((nodeIndex == 12) && (ngContentIndex == 0))) {
      cb(this._text_13,ctx);
      cb(this._el_14,ctx);
      cb(this._text_16,ctx);
    }
    if (((nodeIndex == 18) && (ngContentIndex == 0))) {
      cb(this._text_19,ctx);
      cb(this._el_20,ctx);
      cb(this._text_22,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 5)) { return new View_NotesDetailHeaderComponent1(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    if ((nodeIndex == 7)) { return new View_NotesDetailHeaderComponent2(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    return (null as any);
  }
  handleEvent_12(eventName:string,$event:any):boolean {
    this.debug(12,16,4);
    this.compView_12.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_12_4.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_18(eventName:string,$event:any):boolean {
    this.debug(18,19,4);
    this.compView_18.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_18_4.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      this.context.onSubmit();
      const pd_sub_0:any = ((<any>false) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}