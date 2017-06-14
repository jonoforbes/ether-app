/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './task-item.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/flex-layout/flexbox/api/layout';
import * as import11 from '@angular/flex-layout/flexbox/api/layout-align';
import * as import12 from '@angular/material/core/compatibility/compatibility';
import * as import13 from '@angular/material/checkbox/checkbox';
import * as import14 from '@angular/flex-layout/flexbox/api/flex';
import * as import15 from '@angular/forms/src/directives/control_value_accessor';
import * as import16 from '../task-menu/task-menu.component';
import * as import17 from '../../../../node_modules/@angular/flex-layout/flexbox/api/layout.ngfactory';
import * as import18 from '../../../../node_modules/@angular/flex-layout/flexbox/api/layout-align.ngfactory';
import * as import19 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import20 from '../../../../node_modules/@angular/material/checkbox/checkbox.ngfactory';
import * as import21 from '../../../../node_modules/@angular/flex-layout/flexbox/api/flex.ngfactory';
import * as import22 from '../task-menu/task-menu.component.ngfactory';
import * as import23 from '@angular/common/src/pipes/date_pipe';
import * as import24 from '@angular/flex-layout/media-query/media-monitor';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from '@angular/flex-layout/flexbox/api/layout-wrap';
import * as import27 from '@angular/core/src/i18n/tokens';
export class Wrapper_TaskItemComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TaskItemComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  subscription4:any;
  subscription5:any;
  subscription6:any;
  subscription7:any;
  constructor() {
    this._changed = false;
    this.context = new import0.TaskItemComponent();
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
    (this.subscription3 && this.subscription3.unsubscribe());
    (this.subscription4 && this.subscription4.unsubscribe());
    (this.subscription5 && this.subscription5.unsubscribe());
    (this.subscription6 && this.subscription6.unsubscribe());
    (this.subscription7 && this.subscription7.unsubscribe());
  }
  check_task(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.task = currValue;
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
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean,emit4:boolean,emit5:boolean,emit6:boolean,emit7:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.updateTask.subscribe(_eventHandler.bind(view,'updateTask'))); }
    if (emit1) { (this.subscription1 = this.context.updateContact.subscribe(_eventHandler.bind(view,'updateContact'))); }
    if (emit2) { (this.subscription2 = this.context.updateClientAccount.subscribe(_eventHandler.bind(view,'updateClientAccount'))); }
    if (emit3) { (this.subscription3 = this.context.updateSale.subscribe(_eventHandler.bind(view,'updateSale'))); }
    if (emit4) { (this.subscription4 = this.context.updateAssignee.subscribe(_eventHandler.bind(view,'updateAssignee'))); }
    if (emit5) { (this.subscription5 = this.context.updateDueDate.subscribe(_eventHandler.bind(view,'updateDueDate'))); }
    if (emit6) { (this.subscription6 = this.context.updateStatus.subscribe(_eventHandler.bind(view,'updateStatus'))); }
    if (emit7) { (this.subscription7 = this.context.removeTask.subscribe(_eventHandler.bind(view,'removeTask'))); }
  }
}
const nodeDebugInfos_TaskItemComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.TaskItemComponent],import0.TaskItemComponent,{})];
var renderType_TaskItemComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_TaskItemComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.TaskItemComponent>;
  _TaskItemComponent_0_3:Wrapper_TaskItemComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TaskItemComponent_Host0,renderType_TaskItemComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_TaskItemComponent_Host0);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'task-item',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_TaskItemComponent0(this.viewUtils,this,0,this._el_0);
    this._TaskItemComponent_0_3 = new Wrapper_TaskItemComponent();
    this.compView_0.create(this._TaskItemComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._TaskItemComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TaskItemComponent) && (0 === requestNodeIndex))) { return this._TaskItemComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._TaskItemComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._TaskItemComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TaskItemComponentNgFactory:import9.ComponentFactory<import0.TaskItemComponent> = new import9.ComponentFactory<import0.TaskItemComponent>('task-item',View_TaskItemComponent_Host0,import0.TaskItemComponent);
const styles_TaskItemComponent:any[] = ([] as any[]);
const nodeDebugInfos_TaskItemComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import10.LayoutDirective,
    import11.LayoutAlignDirective
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import12.MdPrefixRejector,
    import13.MdCheckbox,
    import14.FlexDirective,
    import15.NG_VALUE_ACCESSOR
  ]
  ,import13.MdCheckbox,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import16.TaskMenuComponent],import16.TaskMenuComponent,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import10.LayoutDirective],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_TaskItemComponent:import5.RenderComponentType = import3.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/tasks/components/task-item/task-item.component.ts class TaskItemComponent - inline template',0,import6.ViewEncapsulation.None,styles_TaskItemComponent,{});
export class View_TaskItemComponent0 extends import2.DebugAppView<import0.TaskItemComponent> {
  _text_0:any;
  _el_1:any;
  _LayoutDirective_1_3:import17.Wrapper_LayoutDirective;
  _LayoutAlignDirective_1_4:import18.Wrapper_LayoutAlignDirective;
  _text_2:any;
  _el_3:any;
  compView_3:import2.AppView<import13.MdCheckbox>;
  _MdPrefixRejector_3_3:import19.Wrapper_MdPrefixRejector;
  _MdCheckbox_3_4:import20.Wrapper_MdCheckbox;
  _FlexDirective_3_5:import21.Wrapper_FlexDirective;
  __NG_VALUE_ACCESSOR_3_6:any[];
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  compView_9:import2.AppView<import16.TaskMenuComponent>;
  _TaskMenuComponent_9_3:import22.Wrapper_TaskMenuComponent;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _LayoutDirective_12_3:import17.Wrapper_LayoutDirective;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  /*private*/ _expr_28:any;
  /*private*/ _expr_29:any;
  _pipe_date_0:import23.DatePipe;
  _pipe_date_0_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TaskItemComponent0,renderType_TaskItemComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_TaskItemComponent0);
    this._expr_28 = import1.UNINITIALIZED;
    this._expr_29 = import1.UNINITIALIZED;
  }
  get _NG_VALUE_ACCESSOR_3_6():any[] {
    this.debug(3,3,16);
    if ((this.__NG_VALUE_ACCESSOR_3_6 == null)) { (this.__NG_VALUE_ACCESSOR_3_6 = [this._MdCheckbox_3_4.context]); }
    return this.__NG_VALUE_ACCESSOR_3_6;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        \n            ',this.debug(0,0,0));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray4(4,'fxLayout','row','fxLayoutAlign','start center'),this.debug(1,2,12));
    this._LayoutDirective_1_3 = new import17.Wrapper_LayoutDirective(this.parentView.injectorGet(import24.MediaMonitor,this.parentIndex),new import25.ElementRef(this._el_1),this.renderer);
    this._LayoutAlignDirective_1_4 = new import18.Wrapper_LayoutAlignDirective(this.parentView.injectorGet(import24.MediaMonitor,this.parentIndex),new import25.ElementRef(this._el_1),this.renderer,this._LayoutDirective_1_3.context);
    this._text_2 = this.renderer.createText(this._el_1,'\n                ',this.debug(2,2,61));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'md-checkbox',new import3.InlineArray4(4,'fxFlex','500px','style','margin-left: 20px'),this.debug(3,3,16));
    this.compView_3 = new import20.View_MdCheckbox0(this.viewUtils,this,3,this._el_3);
    this._MdPrefixRejector_3_3 = new import19.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import12.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdCheckbox_3_4 = new import20.Wrapper_MdCheckbox(this.renderer,new import25.ElementRef(this._el_3),this.compView_3.ref);
    this._FlexDirective_3_5 = new import21.Wrapper_FlexDirective(this.parentView.injectorGet(import24.MediaMonitor,this.parentIndex),new import25.ElementRef(this._el_3),this.renderer,this._LayoutDirective_1_3.context,this.parentView.injectorGet(import26.LayoutWrapDirective,this.parentIndex,(null as any)));
    this._text_4 = this.renderer.createText((null as any),'\n                    ',this.debug(4,3,126));
    this._el_5 = import3.createRenderElement(this.renderer,(null as any),'span',new import3.InlineArray2(2,'style','margin-left: 10px;'),this.debug(5,4,20));
    this._text_6 = this.renderer.createText(this._el_5,'',this.debug(6,4,53));
    this._text_7 = this.renderer.createText((null as any),'\n                ',this.debug(7,4,76));
    this.compView_3.create(this._MdCheckbox_3_4.context);
    this._text_8 = this.renderer.createText(this._el_1,'\n                ',this.debug(8,5,30));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_1,'task-menu',import3.EMPTY_INLINE_ARRAY,this.debug(9,6,16));
    this.compView_9 = new import22.View_TaskMenuComponent0(this.viewUtils,this,9,this._el_9);
    this._TaskMenuComponent_9_3 = new import22.Wrapper_TaskMenuComponent();
    this.compView_9.create(this._TaskMenuComponent_9_3.context);
    this._text_10 = this.renderer.createText(this._el_1,'\n            ',this.debug(10,13,29));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(11,14,18));
    this._el_12 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'fxLayout','row'),this.debug(12,15,8));
    this._LayoutDirective_12_3 = new import17.Wrapper_LayoutDirective(this.parentView.injectorGet(import24.MediaMonitor,this.parentIndex),new import25.ElementRef(this._el_12),this.renderer);
    this._text_13 = this.renderer.createText(this._el_12,'\n            ',this.debug(13,15,28));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'p',new import3.InlineArray2(2,'style','margin-left: 16px; color: #ccc; font-size: 12px'),this.debug(14,16,12));
    this._text_15 = this.renderer.createText(this._el_14,'',this.debug(15,16,71));
    this._text_16 = this.renderer.createText(this._el_12,'\n\n        ',this.debug(16,16,118));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n\n\n      \n    ',this.debug(17,18,14));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_3,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_3));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_9,new import3.InlineArray16(12,'updateContact',(null as any),'updateClientAccount',(null as any),'updateSale',(null as any),'updateAssignee',(null as any),'updateDueDate',(null as any),'removeTask',(null as any)),this.eventHandler(this.handleEvent_9));
    this._TaskMenuComponent_9_3.subscribe(this,this.eventHandler(this.handleEvent_9),false,true,true,true,true,true,true);
    this.debug((null as any),(null as any),(null as any));
    this._pipe_date_0 = new import23.DatePipe(this.parentView.injectorGet(import27.LOCALE_ID,this.parentIndex));
    this._pipe_date_0_0 = import3.pureProxy2(this._pipe_date_0.transform.bind(this._pipe_date_0));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.MdPrefixRejector) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MdPrefixRejector_3_3.context; }
    if (((token === import13.MdCheckbox) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MdCheckbox_3_4.context; }
    if (((token === import14.FlexDirective) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._FlexDirective_3_5.context; }
    if (((token === import15.NG_VALUE_ACCESSOR) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._NG_VALUE_ACCESSOR_3_6; }
    if (((token === import16.TaskMenuComponent) && (9 === requestNodeIndex))) { return this._TaskMenuComponent_9_3.context; }
    if (((token === import10.LayoutDirective) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._LayoutDirective_1_3.context; }
    if (((token === import11.LayoutAlignDirective) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._LayoutAlignDirective_1_4.context; }
    if (((token === import10.LayoutDirective) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._LayoutDirective_12_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    this.debug(1,2,17);
    const currVal_1_0_0:any = 'row';
    this._LayoutDirective_1_3.check_layout(currVal_1_0_0,throwOnChange,false);
    this._LayoutDirective_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(1,2,32);
    const currVal_1_1_0:any = 'start center';
    this._LayoutAlignDirective_1_4.check_align(currVal_1_1_0,throwOnChange,false);
    this._LayoutAlignDirective_1_4.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(3,3,16);
    this._MdPrefixRejector_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(3,3,70);
    const currVal_3_1_0:any = this.context.task.isCompleted;
    this._MdCheckbox_3_4.check_checked(currVal_3_1_0,throwOnChange,false);
    if (this._MdCheckbox_3_4.ngDoCheck(this,this._el_3,throwOnChange)) { this.compView_3.markAsCheckOnce(); }
    this.debug(3,3,55);
    const currVal_3_2_0:any = '500px';
    this._FlexDirective_3_5.check_flex(currVal_3_2_0,throwOnChange,false);
    this._FlexDirective_3_5.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(9,6,16);
    if (this._TaskMenuComponent_9_3.ngDoCheck(this,this._el_9,throwOnChange)) { this.compView_9.markAsCheckOnce(); }
    this.debug(12,15,13);
    const currVal_12_0_0:any = 'row';
    this._LayoutDirective_12_3.check_layout(currVal_12_0_0,throwOnChange,false);
    this._LayoutDirective_12_3.ngDoCheck(this,this._el_12,throwOnChange);
    this._MdCheckbox_3_4.checkHost(this,this.compView_3,this._el_3,throwOnChange);
    this.debug(6,4,53);
    const currVal_28:any = import3.inlineInterpolate(1,'',this.context.task.content,'');
    if (import3.checkBinding(throwOnChange,this._expr_28,currVal_28)) {
      this.renderer.setText(this._text_6,currVal_28);
      this._expr_28 = currVal_28;
    }
    this.debug(15,16,71);
    valUnwrapper.reset();
    const currVal_29:any = import3.inlineInterpolate(1,'Due by ',valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_0,this._pipe_date_0.transform)(this.context.task.dueDate,'EEEE d MMMM')),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_29,currVal_29))) {
      this.renderer.setText(this._text_15,currVal_29);
      this._expr_29 = currVal_29;
    }
    this.compView_3.internalDetectChanges(throwOnChange);
    this.compView_9.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_3.destroy();
    this.compView_9.destroy();
    this._MdCheckbox_3_4.ngOnDestroy();
    this._FlexDirective_3_5.ngOnDestroy();
    this.debug(3,3,16);
    this._TaskMenuComponent_9_3.ngOnDestroy();
    this.debug(9,6,16);
    this._LayoutDirective_1_3.ngOnDestroy();
    this._LayoutAlignDirective_1_4.ngOnDestroy();
    this.debug(1,2,12);
    this._LayoutDirective_12_3.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 3) && (ngContentIndex == 0))) {
      cb(this._text_4,ctx);
      cb(this._el_5,ctx);
      cb(this._text_7,ctx);
    }
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.debug(3,3,16);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onUpdateStatus()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_9(eventName:string,$event:any):boolean {
    this.debug(9,6,16);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'updateContact')) {
      const pd_sub_0:any = ((<any>this.context.onUpdateContact($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'updateClientAccount')) {
      const pd_sub_1:any = ((<any>this.context.onUpdateClientAccount($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'updateSale')) {
      const pd_sub_2:any = ((<any>this.context.onUpdateSale($event)) !== false);
      result = (pd_sub_2 && result);
    }
    if ((eventName == 'updateAssignee')) {
      const pd_sub_3:any = ((<any>this.context.onUpdateAssignee($event)) !== false);
      result = (pd_sub_3 && result);
    }
    if ((eventName == 'updateDueDate')) {
      const pd_sub_4:any = ((<any>this.context.onUpdateDueDate($event)) !== false);
      result = (pd_sub_4 && result);
    }
    if ((eventName == 'removeTask')) {
      const pd_sub_5:any = ((<any>this.context.onRemoveTask()) !== false);
      result = (pd_sub_5 && result);
    }
    return result;
  }
}