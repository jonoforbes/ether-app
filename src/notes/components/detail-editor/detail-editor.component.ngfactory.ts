/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './detail-editor.component';
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
import * as import11 from '@angular/flex-layout/flexbox/api/flex-fill';
import * as import12 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import13 from '@angular/forms/src/directives/control_container';
import * as import14 from '@angular/forms/src/directives/ng_control_status';
import * as import15 from '@angular/forms/src/directives/default_value_accessor';
import * as import16 from 'angular2-froala-wysiwyg/editor/editor.directive';
import * as import17 from '@angular/forms/src/directives/control_value_accessor';
import * as import18 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import19 from '@angular/forms/src/directives/ng_control';
import * as import20 from '../../../../node_modules/@angular/flex-layout/flexbox/api/flex-fill.ngfactory';
import * as import21 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import22 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import23 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import24 from '../../../../node_modules/angular2-froala-wysiwyg/editor/editor.directive.ngfactory';
import * as import25 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import26 from '@angular/flex-layout/media-query/media-monitor';
import * as import27 from '@angular/core/src/linker/element_ref';
export class Wrapper_NotesDetailEditorComponent {
  /*private*/ _eventHandler:Function;
  context:import0.NotesDetailEditorComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.NotesDetailEditorComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
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
const nodeDebugInfos_NotesDetailEditorComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.NotesDetailEditorComponent],import0.NotesDetailEditorComponent,{})];
var renderType_NotesDetailEditorComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_NotesDetailEditorComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.NotesDetailEditorComponent>;
  _NotesDetailEditorComponent_0_3:Wrapper_NotesDetailEditorComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NotesDetailEditorComponent_Host0,renderType_NotesDetailEditorComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NotesDetailEditorComponent_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'notes-detail-editor',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_NotesDetailEditorComponent0(this.viewUtils,this,0,this._el_0);
    this._NotesDetailEditorComponent_0_3 = new Wrapper_NotesDetailEditorComponent(this.injectorGet(import10.Router,this.parentIndex));
    this.compView_0.create(this._NotesDetailEditorComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._NotesDetailEditorComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.NotesDetailEditorComponent) && (0 === requestNodeIndex))) { return this._NotesDetailEditorComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._NotesDetailEditorComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._NotesDetailEditorComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const NotesDetailEditorComponentNgFactory:import9.ComponentFactory<import0.NotesDetailEditorComponent> = new import9.ComponentFactory<import0.NotesDetailEditorComponent>('notes-detail-editor',View_NotesDetailEditorComponent_Host0,import0.NotesDetailEditorComponent);
const styles_NotesDetailEditorComponent:any[] = ([] as any[]);
const nodeDebugInfos_NotesDetailEditorComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import11.FlexFillDirective,
    import12.FormGroupDirective,
    import13.ControlContainer,
    import14.NgControlStatusGroup
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import15.DefaultValueAccessor,
    import16.FroalaEditorDirective,
    import17.NG_VALUE_ACCESSOR,
    import18.FormControlName,
    import19.NgControl,
    import14.NgControlStatus
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_NotesDetailEditorComponent:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/notes/components/detail-editor/detail-editor.component.ts class NotesDetailEditorComponent - inline template',0,import6.ViewEncapsulation.None,styles_NotesDetailEditorComponent,{});
export class View_NotesDetailEditorComponent0 extends import2.DebugAppView<import0.NotesDetailEditorComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _FlexFillDirective_3_3:import20.Wrapper_FlexFillDirective;
  _FormGroupDirective_3_4:import21.Wrapper_FormGroupDirective;
  _ControlContainer_3_5:any;
  _NgControlStatusGroup_3_6:import22.Wrapper_NgControlStatusGroup;
  _text_4:any;
  _el_5:any;
  _DefaultValueAccessor_5_3:import23.Wrapper_DefaultValueAccessor;
  _FroalaEditorDirective_5_4:import24.Wrapper_FroalaEditorDirective;
  _NG_VALUE_ACCESSOR_5_5:any[];
  _FormControlName_5_6:import25.Wrapper_FormControlName;
  _NgControl_5_7:any;
  _NgControlStatus_5_8:import22.Wrapper_NgControlStatus;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NotesDetailEditorComponent0,renderType_NotesDetailEditorComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_NotesDetailEditorComponent0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','note-editor'),this.debug(1,1,8));
    this._text_2 = this.renderer.createText(this._el_1,'\n\n        ',this.debug(2,1,33));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'fxFill',''),this.debug(3,3,8));
    this._FlexFillDirective_3_3 = new import20.Wrapper_FlexFillDirective(this.parentView.injectorGet(import26.MediaMonitor,this.parentIndex),new import27.ElementRef(this._el_3),this.renderer);
    this._FormGroupDirective_3_4 = new import21.Wrapper_FormGroupDirective((null as any),(null as any));
    this._ControlContainer_3_5 = this._FormGroupDirective_3_4.context;
    this._NgControlStatusGroup_3_6 = new import22.Wrapper_NgControlStatusGroup(this._ControlContainer_3_5);
    this._text_4 = this.renderer.createText(this._el_3,'\n\n          ',this.debug(4,3,43));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'textarea',new import3.InlineArray2(2,'formControlName','content'),this.debug(5,5,10));
    this._DefaultValueAccessor_5_3 = new import23.Wrapper_DefaultValueAccessor(this.renderer,new import27.ElementRef(this._el_5));
    this._FroalaEditorDirective_5_4 = new import24.Wrapper_FroalaEditorDirective(new import27.ElementRef(this._el_5));
    this._NG_VALUE_ACCESSOR_5_5 = [
      this._DefaultValueAccessor_5_3.context,
      this._FroalaEditorDirective_5_4.context
    ]
    ;
    this._FormControlName_5_6 = new import25.Wrapper_FormControlName(this._ControlContainer_3_5,(null as any),(null as any),this._NG_VALUE_ACCESSOR_5_5);
    this._NgControl_5_7 = this._FormControlName_5_6.context;
    this._NgControlStatus_5_8 = new import22.Wrapper_NgControlStatus(this._NgControl_5_7);
    this._text_6 = this.renderer.createText(this._el_3,'\n\n        ',this.debug(6,5,82));
    this._text_7 = this.renderer.createText(this._el_1,'\n        \n\n\n',this.debug(7,7,14));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(8,11,6));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_3,new import3.InlineArray4(4,'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_3));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray4(4,'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_5));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.DefaultValueAccessor) && (5 === requestNodeIndex))) { return this._DefaultValueAccessor_5_3.context; }
    if (((token === import16.FroalaEditorDirective) && (5 === requestNodeIndex))) { return this._FroalaEditorDirective_5_4.context; }
    if (((token === import17.NG_VALUE_ACCESSOR) && (5 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_5_5; }
    if (((token === import18.FormControlName) && (5 === requestNodeIndex))) { return this._FormControlName_5_6.context; }
    if (((token === import19.NgControl) && (5 === requestNodeIndex))) { return this._NgControl_5_7; }
    if (((token === import14.NgControlStatus) && (5 === requestNodeIndex))) { return this._NgControlStatus_5_8.context; }
    if (((token === import11.FlexFillDirective) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._FlexFillDirective_3_3.context; }
    if (((token === import12.FormGroupDirective) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._FormGroupDirective_3_4.context; }
    if (((token === import13.ControlContainer) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._ControlContainer_3_5; }
    if (((token === import14.NgControlStatusGroup) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._NgControlStatusGroup_3_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(3,3,8);
    this._FlexFillDirective_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(3,3,20);
    const currVal_3_1_0:any = this.context.noteForm;
    this._FormGroupDirective_3_4.check_form(currVal_3_1_0,throwOnChange,false);
    this._FormGroupDirective_3_4.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(3,3,8);
    this._NgControlStatusGroup_3_6.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(5,5,10);
    this._DefaultValueAccessor_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(5,5,20);
    const currVal_5_1_0:any = this.context.options;
    this._FroalaEditorDirective_5_4.check_froalaEditor(currVal_5_1_0,throwOnChange,false);
    this._FroalaEditorDirective_5_4.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(5,5,45);
    const currVal_5_2_0:any = 'content';
    this._FormControlName_5_6.check_name(currVal_5_2_0,throwOnChange,false);
    this._FormControlName_5_6.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(5,5,10);
    this._NgControlStatus_5_8.ngDoCheck(this,this._el_5,throwOnChange);
    this._NgControlStatusGroup_3_6.checkHost(this,this,this._el_3,throwOnChange);
    this._NgControlStatus_5_8.checkHost(this,this,this._el_5,throwOnChange);
  }
  destroyInternal():void {
    this._FroalaEditorDirective_5_4.ngOnDestroy();
    this._FormControlName_5_6.ngOnDestroy();
    this.debug(5,5,10);
    this._FlexFillDirective_3_3.ngOnDestroy();
    this._FormGroupDirective_3_4.ngOnDestroy();
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.debug(3,3,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._FormGroupDirective_3_4.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.debug(5,5,10);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_5_3.handleEvent(eventName,$event) && result);
    return result;
  }
}