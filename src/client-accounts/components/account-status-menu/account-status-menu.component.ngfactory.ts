/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './account-status-menu.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/material/core/compatibility/compatibility';
import * as import10 from '@angular/material/button/button';
import * as import11 from '@angular/material/menu/menu-trigger';
import * as import12 from '@angular/material/menu/menu-directive';
import * as import13 from '@angular/material/menu/menu-item';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import16 from '../../../../node_modules/@angular/material/button/button.ngfactory';
import * as import17 from '../../../../node_modules/@angular/material/menu/menu-trigger.ngfactory';
import * as import18 from '../../../../node_modules/@angular/material/menu/menu-directive.ngfactory';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '../../../../node_modules/@angular/material/menu/menu-item.ngfactory';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '@angular/material/core/overlay/overlay';
import * as import23 from '@angular/material/core/rtl/dir';
export class Wrapper_ClientAccountStatusMenuComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ClientAccountStatusMenuComponent;
  /*private*/ _changed:boolean;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.ClientAccountStatusMenuComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
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
  subscribe(view:import1.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.updateStatus.subscribe(_eventHandler.bind(view,'updateStatus'))); }
  }
}
const nodeDebugInfos_ClientAccountStatusMenuComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.ClientAccountStatusMenuComponent],import0.ClientAccountStatusMenuComponent,{})];
var renderType_ClientAccountStatusMenuComponent_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_ClientAccountStatusMenuComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ClientAccountStatusMenuComponent>;
  _ClientAccountStatusMenuComponent_0_3:Wrapper_ClientAccountStatusMenuComponent;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ClientAccountStatusMenuComponent_Host0,renderType_ClientAccountStatusMenuComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ClientAccountStatusMenuComponent_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'client-account-status-menu',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_ClientAccountStatusMenuComponent0(this.viewUtils,this,0,this._el_0);
    this._ClientAccountStatusMenuComponent_0_3 = new Wrapper_ClientAccountStatusMenuComponent();
    this.compView_0.create(this._ClientAccountStatusMenuComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._ClientAccountStatusMenuComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ClientAccountStatusMenuComponent) && (0 === requestNodeIndex))) { return this._ClientAccountStatusMenuComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._ClientAccountStatusMenuComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._ClientAccountStatusMenuComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ClientAccountStatusMenuComponentNgFactory:import8.ComponentFactory<import0.ClientAccountStatusMenuComponent> = new import8.ComponentFactory<import0.ClientAccountStatusMenuComponent>('client-account-status-menu',View_ClientAccountStatusMenuComponent_Host0,import0.ClientAccountStatusMenuComponent);
const styles_ClientAccountStatusMenuComponent:any[] = ([] as any[]);
const nodeDebugInfos_ClientAccountStatusMenuComponent0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import9.MdPrefixRejector,
    import10.MdButton,
    import10.MdButtonCssMatStyler,
    import11.MdMenuTrigger
  ]
  ,import10.MdButton,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import9.MdPrefixRejector,
    import12.MdMenu
  ]
  ,import12.MdMenu,{statusMenu: import12.MdMenu}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import13.MdMenuItem],import13.MdMenuItem,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import13.MdMenuItem],import13.MdMenuItem,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import13.MdMenuItem],import13.MdMenuItem,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import13.MdMenuItem],import13.MdMenuItem,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import13.MdMenuItem],import13.MdMenuItem,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_ClientAccountStatusMenuComponent:import3.RenderComponentType = import4.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/client-accounts/components/account-status-menu/account-status-menu.component.ts class ClientAccountStatusMenuComponent - inline template',0,import5.ViewEncapsulation.None,styles_ClientAccountStatusMenuComponent,{});
export class View_ClientAccountStatusMenuComponent0 extends import1.DebugAppView<import0.ClientAccountStatusMenuComponent> {
  _text_0:any;
  _el_1:any;
  /*private*/ _vc_1:import14.ViewContainer;
  compView_1:import1.AppView<import10.MdButton>;
  _MdPrefixRejector_1_5:import15.Wrapper_MdPrefixRejector;
  _MdButton_1_6:import16.Wrapper_MdButton;
  _MdButtonCssMatStyler_1_7:import16.Wrapper_MdButtonCssMatStyler;
  _MdMenuTrigger_1_8:import17.Wrapper_MdMenuTrigger;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  compView_7:import1.AppView<import12.MdMenu>;
  _MdPrefixRejector_7_3:import15.Wrapper_MdPrefixRejector;
  _MdMenu_7_4:import18.Wrapper_MdMenu;
  _query_MdMenuItem_7_0:import19.QueryList<any>;
  _text_8:any;
  _el_9:any;
  compView_9:import1.AppView<import13.MdMenuItem>;
  _MdMenuItem_9_3:import20.Wrapper_MdMenuItem;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  compView_13:import1.AppView<import13.MdMenuItem>;
  _MdMenuItem_13_3:import20.Wrapper_MdMenuItem;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  compView_17:import1.AppView<import13.MdMenuItem>;
  _MdMenuItem_17_3:import20.Wrapper_MdMenuItem;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  compView_21:import1.AppView<import13.MdMenuItem>;
  _MdMenuItem_21_3:import20.Wrapper_MdMenuItem;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  compView_25:import1.AppView<import13.MdMenuItem>;
  _MdMenuItem_25_3:import20.Wrapper_MdMenuItem;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ClientAccountStatusMenuComponent0,renderType_ClientAccountStatusMenuComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_ClientAccountStatusMenuComponent0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'button',new import4.InlineArray8(8,'aria-haspopup','true','md-button','','style','padding: 2px 10px 2px 1px !important','type','button'),this.debug(1,1,4));
    this._vc_1 = new import14.ViewContainer(1,(null as any),this,this._el_1);
    this.compView_1 = new import16.View_MdButton0(this.viewUtils,this,1,this._el_1);
    this._MdPrefixRejector_1_5 = new import15.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import9.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdButton_1_6 = new import16.Wrapper_MdButton(new import21.ElementRef(this._el_1),this.renderer);
    this._MdButtonCssMatStyler_1_7 = new import16.Wrapper_MdButtonCssMatStyler();
    this._MdMenuTrigger_1_8 = new import17.Wrapper_MdMenuTrigger(this.parentView.injectorGet(import22.Overlay,this.parentIndex),new import21.ElementRef(this._el_1),this._vc_1.vcRef,this.renderer,this.parentView.injectorGet(import23.Dir,this.parentIndex,(null as any)));
    this._text_2 = this.renderer.createText((null as any),'\n      ',this.debug(2,1,113));
    this._el_3 = import4.createRenderElement(this.renderer,(null as any),'p',new import4.InlineArray2(2,'style','text-align: left !important'),this.debug(3,2,6));
    this._text_4 = this.renderer.createText(this._el_3,'Edit Account Status',this.debug(4,2,45));
    this._text_5 = this.renderer.createText((null as any),'\n    ',this.debug(5,2,68));
    this.compView_1.create(this._MdButton_1_6.context);
    this._text_6 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(6,3,13));
    this._el_7 = import4.createRenderElement(this.renderer,parentRenderNode,'md-menu',new import4.InlineArray4(4,'role','menu','x-position','before'),this.debug(7,4,4));
    this.compView_7 = new import18.View_MdMenu0(this.viewUtils,this,7,this._el_7);
    this._MdPrefixRejector_7_3 = new import15.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import9.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdMenu_7_4 = new import18.Wrapper_MdMenu('before',(null as any));
    this._query_MdMenuItem_7_0 = new import19.QueryList<any>();
    this._text_8 = this.renderer.createText((null as any),'\n        ',this.debug(8,4,54));
    this._el_9 = import4.createRenderElement(this.renderer,(null as any),'button',new import4.InlineArray8(6,'md-menu-item','','role','menuitem','type','button'),this.debug(9,5,8));
    this.compView_9 = new import20.View_MdMenuItem0(this.viewUtils,this,9,this._el_9);
    this._MdMenuItem_9_3 = new import20.Wrapper_MdMenuItem(this.renderer,new import21.ElementRef(this._el_9));
    this._el_10 = import4.createRenderElement(this.renderer,(null as any),'h1',import4.EMPTY_INLINE_ARRAY,this.debug(10,5,67));
    this._text_11 = this.renderer.createText(this._el_10,'Active',this.debug(11,5,71));
    this.compView_9.create(this._MdMenuItem_9_3.context);
    this._text_12 = this.renderer.createText((null as any),'\n        ',this.debug(12,5,91));
    this._el_13 = import4.createRenderElement(this.renderer,(null as any),'button',new import4.InlineArray8(6,'md-menu-item','','role','menuitem','type','button'),this.debug(13,6,8));
    this.compView_13 = new import20.View_MdMenuItem0(this.viewUtils,this,13,this._el_13);
    this._MdMenuItem_13_3 = new import20.Wrapper_MdMenuItem(this.renderer,new import21.ElementRef(this._el_13));
    this._el_14 = import4.createRenderElement(this.renderer,(null as any),'h1',import4.EMPTY_INLINE_ARRAY,this.debug(14,6,69));
    this._text_15 = this.renderer.createText(this._el_14,'Inactive',this.debug(15,6,73));
    this.compView_13.create(this._MdMenuItem_13_3.context);
    this._text_16 = this.renderer.createText((null as any),'\n        ',this.debug(16,6,95));
    this._el_17 = import4.createRenderElement(this.renderer,(null as any),'button',new import4.InlineArray8(6,'md-menu-item','','role','menuitem','type','button'),this.debug(17,7,8));
    this.compView_17 = new import20.View_MdMenuItem0(this.viewUtils,this,17,this._el_17);
    this._MdMenuItem_17_3 = new import20.Wrapper_MdMenuItem(this.renderer,new import21.ElementRef(this._el_17));
    this._el_18 = import4.createRenderElement(this.renderer,(null as any),'h1',import4.EMPTY_INLINE_ARRAY,this.debug(18,7,67));
    this._text_19 = this.renderer.createText(this._el_18,'Mark for Review',this.debug(19,7,71));
    this.compView_17.create(this._MdMenuItem_17_3.context);
    this._text_20 = this.renderer.createText((null as any),'\n        ',this.debug(20,7,100));
    this._el_21 = import4.createRenderElement(this.renderer,(null as any),'button',new import4.InlineArray8(6,'md-menu-item','','role','menuitem','type','button'),this.debug(21,8,8));
    this.compView_21 = new import20.View_MdMenuItem0(this.viewUtils,this,21,this._el_21);
    this._MdMenuItem_21_3 = new import20.Wrapper_MdMenuItem(this.renderer,new import21.ElementRef(this._el_21));
    this._el_22 = import4.createRenderElement(this.renderer,(null as any),'h1',import4.EMPTY_INLINE_ARRAY,this.debug(22,8,70));
    this._text_23 = this.renderer.createText(this._el_22,'Mark for Attention Needed',this.debug(23,8,74));
    this.compView_21.create(this._MdMenuItem_21_3.context);
    this._text_24 = this.renderer.createText((null as any),'\n        ',this.debug(24,8,113));
    this._el_25 = import4.createRenderElement(this.renderer,(null as any),'button',new import4.InlineArray8(6,'md-menu-item','','role','menuitem','type','button'),this.debug(25,9,8));
    this.compView_25 = new import20.View_MdMenuItem0(this.viewUtils,this,25,this._el_25);
    this._MdMenuItem_25_3 = new import20.Wrapper_MdMenuItem(this.renderer,new import21.ElementRef(this._el_25));
    this._el_26 = import4.createRenderElement(this.renderer,(null as any),'h1',import4.EMPTY_INLINE_ARRAY,this.debug(26,9,69));
    this._text_27 = this.renderer.createText(this._el_26,'Mark for Deletion',this.debug(27,9,73));
    this.compView_25.create(this._MdMenuItem_25_3.context);
    this._text_28 = this.renderer.createText((null as any),'\n    ',this.debug(28,9,104));
    this.compView_7.create(this._MdMenu_7_4.context);
    this._text_29 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(29,10,14));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_1,new import4.InlineArray8(8,'mousedown',(null as any),'focus',(null as any),'blur',(null as any),'click',(null as any)),this.eventHandler(this.handleEvent_1));
    var disposable_1:Function = import4.subscribeToRenderElement(this,this._el_9,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_9));
    var disposable_2:Function = import4.subscribeToRenderElement(this,this._el_13,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_13));
    var disposable_3:Function = import4.subscribeToRenderElement(this,this._el_17,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_17));
    var disposable_4:Function = import4.subscribeToRenderElement(this,this._el_21,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_21));
    var disposable_5:Function = import4.subscribeToRenderElement(this,this._el_25,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_25));
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
      this._el_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._text_29
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
    if (((token === import9.MdPrefixRejector) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdPrefixRejector_1_5.context; }
    if (((token === import10.MdButton) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdButton_1_6.context; }
    if (((token === import10.MdButtonCssMatStyler) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdButtonCssMatStyler_1_7.context; }
    if (((token === import11.MdMenuTrigger) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdMenuTrigger_1_8.context; }
    if (((token === import13.MdMenuItem) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._MdMenuItem_9_3.context; }
    if (((token === import13.MdMenuItem) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._MdMenuItem_13_3.context; }
    if (((token === import13.MdMenuItem) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._MdMenuItem_17_3.context; }
    if (((token === import13.MdMenuItem) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 23)))) { return this._MdMenuItem_21_3.context; }
    if (((token === import13.MdMenuItem) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._MdMenuItem_25_3.context; }
    if (((token === import9.MdPrefixRejector) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 28)))) { return this._MdPrefixRejector_7_3.context; }
    if (((token === import12.MdMenu) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 28)))) { return this._MdMenu_7_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(1,1,4);
    this._MdPrefixRejector_1_5.ngDoCheck(this,this._el_1,throwOnChange);
    if (this._MdButton_1_6.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    this._MdButtonCssMatStyler_1_7.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(1,1,67);
    const currVal_1_3_0:any = this._MdMenu_7_4.context;
    this._MdMenuTrigger_1_8.check_menu(currVal_1_3_0,throwOnChange,false);
    this._MdMenuTrigger_1_8.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(7,4,4);
    this._MdPrefixRejector_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    this._MdMenu_7_4.ngDoCheck(this,this._el_7,throwOnChange);
    this.debug(9,5,8);
    this._MdMenuItem_9_3.ngDoCheck(this,this._el_9,throwOnChange);
    this.debug(13,6,8);
    this._MdMenuItem_13_3.ngDoCheck(this,this._el_13,throwOnChange);
    this.debug(17,7,8);
    this._MdMenuItem_17_3.ngDoCheck(this,this._el_17,throwOnChange);
    this.debug(21,8,8);
    this._MdMenuItem_21_3.ngDoCheck(this,this._el_21,throwOnChange);
    this.debug(25,9,8);
    this._MdMenuItem_25_3.ngDoCheck(this,this._el_25,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdMenuItem_7_0.dirty) {
        this._query_MdMenuItem_7_0.reset([
          this._MdMenuItem_9_3.context,
          this._MdMenuItem_13_3.context,
          this._MdMenuItem_17_3.context,
          this._MdMenuItem_21_3.context,
          this._MdMenuItem_25_3.context
        ]
        );
        this._MdMenu_7_4.context.items = this._query_MdMenuItem_7_0;
        this._query_MdMenuItem_7_0.notifyOnChanges();
      }
      this.debug(7,4,4);
      if ((this.numberOfChecks === 0)) { this._MdMenu_7_4.context.ngAfterContentInit(); }
    }
    this._MdButton_1_6.checkHost(this,this.compView_1,this._el_1,throwOnChange);
    this._MdButtonCssMatStyler_1_7.checkHost(this,this.compView_1,this._el_1,throwOnChange);
    this._MdMenuItem_9_3.checkHost(this,this.compView_9,this._el_9,throwOnChange);
    this._MdMenuItem_13_3.checkHost(this,this.compView_13,this._el_13,throwOnChange);
    this._MdMenuItem_17_3.checkHost(this,this.compView_17,this._el_17,throwOnChange);
    this._MdMenuItem_21_3.checkHost(this,this.compView_21,this._el_21,throwOnChange);
    this._MdMenuItem_25_3.checkHost(this,this.compView_25,this._el_25,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_7.internalDetectChanges(throwOnChange);
    this.compView_9.internalDetectChanges(throwOnChange);
    this.compView_13.internalDetectChanges(throwOnChange);
    this.compView_17.internalDetectChanges(throwOnChange);
    this.compView_21.internalDetectChanges(throwOnChange);
    this.compView_25.internalDetectChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(1,1,4);
      if ((this.numberOfChecks === 0)) { this._MdMenuTrigger_1_8.context.ngAfterViewInit(); }
    }
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_7.destroy();
    this.compView_9.destroy();
    this.compView_13.destroy();
    this.compView_17.destroy();
    this.compView_21.destroy();
    this.compView_25.destroy();
    this._MdMenuTrigger_1_8.ngOnDestroy();
    this.debug(1,1,4);
    this.debug(9,5,8);
    this.debug(13,6,8);
    this.debug(17,7,8);
    this.debug(21,8,8);
    this.debug(25,9,8);
    this._MdMenu_7_4.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_5,ctx);
    }
    if (((nodeIndex == 7) && (ngContentIndex == 0))) {
      cb(this._text_8,ctx);
      cb(this._el_9,ctx);
      cb(this._text_12,ctx);
      cb(this._el_13,ctx);
      cb(this._text_16,ctx);
      cb(this._el_17,ctx);
      cb(this._text_20,ctx);
      cb(this._el_21,ctx);
      cb(this._text_24,ctx);
      cb(this._el_25,ctx);
      cb(this._text_28,ctx);
    }
    if (((nodeIndex == 9) && (ngContentIndex == 0))) { cb(this._el_10,ctx); }
    if (((nodeIndex == 13) && (ngContentIndex == 0))) { cb(this._el_14,ctx); }
    if (((nodeIndex == 17) && (ngContentIndex == 0))) { cb(this._el_18,ctx); }
    if (((nodeIndex == 21) && (ngContentIndex == 0))) { cb(this._el_22,ctx); }
    if (((nodeIndex == 25) && (ngContentIndex == 0))) { cb(this._el_26,ctx); }
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.debug(1,1,4);
    this.compView_1.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_1_6.handleEvent(eventName,$event) && result);
    result = (this._MdMenuTrigger_1_8.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_9(eventName:string,$event:any):boolean {
    this.debug(9,5,8);
    this.compView_9.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdMenuItem_9_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onSetActive()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.debug(13,6,8);
    this.compView_13.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdMenuItem_13_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onSetInactive()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_17(eventName:string,$event:any):boolean {
    this.debug(17,7,8);
    this.compView_17.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdMenuItem_17_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onSetReview()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_21(eventName:string,$event:any):boolean {
    this.debug(21,8,8);
    this.compView_21.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdMenuItem_21_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onSetAttention()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_25(eventName:string,$event:any):boolean {
    this.debug(25,9,8);
    this.compView_25.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdMenuItem_25_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onSetDeletion()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}