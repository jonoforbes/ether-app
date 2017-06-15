/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './contact-menu.component';
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
import * as import12 from '@angular/material/icon/icon';
import * as import13 from '@angular/material/menu/menu-directive';
import * as import14 from '../../../client-accounts/components/assignment-selector/assignment-selector.component';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import17 from '../../../../node_modules/@angular/material/button/button.ngfactory';
import * as import18 from '../../../../node_modules/@angular/material/menu/menu-trigger.ngfactory';
import * as import19 from '../../../../node_modules/@angular/material/icon/icon.ngfactory';
import * as import20 from '../../../../node_modules/@angular/material/menu/menu-directive.ngfactory';
import * as import21 from '@angular/core/src/linker/query_list';
import * as import22 from '../../../client-accounts/components/assignment-selector/assignment-selector.component.ngfactory';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from '@angular/material/core/overlay/overlay';
import * as import25 from '@angular/material/core/rtl/dir';
import * as import26 from '@angular/material/icon/icon-registry';
import * as import27 from '../../../client-accounts/client-accounts.sandbox';
export class Wrapper_ContactMenuComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ContactMenuComponent;
  /*private*/ _changed:boolean;
  subscription0:any;
  subscription1:any;
  constructor() {
    this._changed = false;
    this.context = new import0.ContactMenuComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
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
  subscribe(view:import1.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.updateClientAccount.subscribe(_eventHandler.bind(view,'updateClientAccount'))); }
    if (emit1) { (this.subscription1 = this.context.updateSale.subscribe(_eventHandler.bind(view,'updateSale'))); }
  }
}
const nodeDebugInfos_ContactMenuComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.ContactMenuComponent],import0.ContactMenuComponent,{})];
var renderType_ContactMenuComponent_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_ContactMenuComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ContactMenuComponent>;
  _ContactMenuComponent_0_3:Wrapper_ContactMenuComponent;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ContactMenuComponent_Host0,renderType_ContactMenuComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ContactMenuComponent_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'contact-menu',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_ContactMenuComponent0(this.viewUtils,this,0,this._el_0);
    this._ContactMenuComponent_0_3 = new Wrapper_ContactMenuComponent();
    this.compView_0.create(this._ContactMenuComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._ContactMenuComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ContactMenuComponent) && (0 === requestNodeIndex))) { return this._ContactMenuComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._ContactMenuComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._ContactMenuComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ContactMenuComponentNgFactory:import8.ComponentFactory<import0.ContactMenuComponent> = new import8.ComponentFactory<import0.ContactMenuComponent>('contact-menu',View_ContactMenuComponent_Host0,import0.ContactMenuComponent);
const styles_ContactMenuComponent:any[] = ([] as any[]);
const nodeDebugInfos_ContactMenuComponent0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import9.MdPrefixRejector,
    import10.MdButton,
    import10.MdButtonCssMatStyler,
    import11.MdMenuTrigger
  ]
  ,import10.MdButton,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import9.MdPrefixRejector,
    import12.MdIcon
  ]
  ,import12.MdIcon,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import9.MdPrefixRejector,
    import13.MdMenu
  ]
  ,import13.MdMenu,{taskMenu: import13.MdMenu}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import14.ClientAccountAssignmentSelectorComponent],import14.ClientAccountAssignmentSelectorComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_ContactMenuComponent:import3.RenderComponentType = import4.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/contacts/components/contact-menu/contact-menu.component.ts class ContactMenuComponent - inline template',0,import5.ViewEncapsulation.None,styles_ContactMenuComponent,{});
export class View_ContactMenuComponent0 extends import1.DebugAppView<import0.ContactMenuComponent> {
  _text_0:any;
  _el_1:any;
  /*private*/ _vc_1:import15.ViewContainer;
  compView_1:import1.AppView<import10.MdButton>;
  _MdPrefixRejector_1_5:import16.Wrapper_MdPrefixRejector;
  _MdButton_1_6:import17.Wrapper_MdButton;
  _MdButtonCssMatStyler_1_7:import17.Wrapper_MdButtonCssMatStyler;
  _MdMenuTrigger_1_8:import18.Wrapper_MdMenuTrigger;
  _text_2:any;
  _el_3:any;
  compView_3:import1.AppView<import12.MdIcon>;
  _MdPrefixRejector_3_3:import16.Wrapper_MdPrefixRejector;
  _MdIcon_3_4:import19.Wrapper_MdIcon;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  compView_7:import1.AppView<import13.MdMenu>;
  _MdPrefixRejector_7_3:import16.Wrapper_MdPrefixRejector;
  _MdMenu_7_4:import20.Wrapper_MdMenu;
  _query_MdMenuItem_7_0:import21.QueryList<any>;
  _text_8:any;
  _el_9:any;
  compView_9:import1.AppView<import14.ClientAccountAssignmentSelectorComponent>;
  _ClientAccountAssignmentSelectorComponent_9_3:import22.Wrapper_ClientAccountAssignmentSelectorComponent;
  _text_10:any;
  _text_11:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ContactMenuComponent0,renderType_ContactMenuComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_ContactMenuComponent0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'button',new import4.InlineArray8(6,'aria-haspopup','true','md-button','','type','button'),this.debug(1,1,8));
    this._vc_1 = new import15.ViewContainer(1,(null as any),this,this._el_1);
    this.compView_1 = new import17.View_MdButton0(this.viewUtils,this,1,this._el_1);
    this._MdPrefixRejector_1_5 = new import16.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import9.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdButton_1_6 = new import17.Wrapper_MdButton(new import23.ElementRef(this._el_1),this.renderer);
    this._MdButtonCssMatStyler_1_7 = new import17.Wrapper_MdButtonCssMatStyler();
    this._MdMenuTrigger_1_8 = new import18.Wrapper_MdMenuTrigger(this.parentView.injectorGet(import24.Overlay,this.parentIndex),new import23.ElementRef(this._el_1),this._vc_1.vcRef,this.renderer,this.parentView.injectorGet(import25.Dir,this.parentIndex,(null as any)));
    this._text_2 = this.renderer.createText((null as any),'\n            ',this.debug(2,4,26));
    this._el_3 = import4.createRenderElement(this.renderer,(null as any),'md-icon',new import4.InlineArray4(4,'role','img','style','color: #838383; width: 20px;'),this.debug(3,5,12));
    this.compView_3 = new import19.View_MdIcon0(this.viewUtils,this,3,this._el_3);
    this._MdPrefixRejector_3_3 = new import16.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import9.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdIcon_3_4 = new import19.Wrapper_MdIcon(new import23.ElementRef(this._el_3),this.renderer,this.parentView.injectorGet(import26.MdIconRegistry,this.parentIndex));
    this._text_4 = this.renderer.createText((null as any),'more_vert',this.debug(4,5,58));
    this.compView_3.create(this._MdIcon_3_4.context);
    this._text_5 = this.renderer.createText((null as any),'\n            \n        ',this.debug(5,5,77));
    this.compView_1.create(this._MdButton_1_6.context);
    this._text_6 = this.renderer.createText(parentRenderNode,'\n        \n        ',this.debug(6,7,17));
    this._el_7 = import4.createRenderElement(this.renderer,parentRenderNode,'md-menu',new import4.InlineArray4(4,'role','menu','x-position','before'),this.debug(7,9,8));
    this.compView_7 = new import20.View_MdMenu0(this.viewUtils,this,7,this._el_7);
    this._MdPrefixRejector_7_3 = new import16.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import9.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdMenu_7_4 = new import20.Wrapper_MdMenu('before',(null as any));
    this._query_MdMenuItem_7_0 = new import21.QueryList<any>();
    this._text_8 = this.renderer.createText((null as any),'\n            ',this.debug(8,9,56));
    this._el_9 = import4.createRenderElement(this.renderer,(null as any),'account-assignment-selector',import4.EMPTY_INLINE_ARRAY,this.debug(9,10,12));
    this.compView_9 = new import22.View_ClientAccountAssignmentSelectorComponent0(this.viewUtils,this,9,this._el_9);
    this._ClientAccountAssignmentSelectorComponent_9_3 = new import22.Wrapper_ClientAccountAssignmentSelectorComponent(this.parentView.injectorGet(import27.ClientAccountsSandbox,this.parentIndex));
    this.compView_9.create(this._ClientAccountAssignmentSelectorComponent_9_3.context);
    this._text_10 = this.renderer.createText((null as any),'\n        ',this.debug(10,10,144));
    this.compView_7.create(this._MdMenu_7_4.context);
    this._text_11 = this.renderer.createText(parentRenderNode,'\n    \n    \n    \n    \n    ',this.debug(11,11,18));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_1,new import4.InlineArray8(8,'mousedown',(null as any),'focus',(null as any),'blur',(null as any),'click',(null as any)),this.eventHandler(this.handleEvent_1));
    var disposable_1:Function = import4.subscribeToRenderElement(this,this._el_9,new import4.InlineArray2(2,'updateClientAccount',(null as any)),this.eventHandler(this.handleEvent_9));
    this._ClientAccountAssignmentSelectorComponent_9_3.subscribe(this,this.eventHandler(this.handleEvent_9),true);
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
      this._text_10,
      this._text_11
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.MdPrefixRejector) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._MdPrefixRejector_3_3.context; }
    if (((token === import12.MdIcon) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._MdIcon_3_4.context; }
    if (((token === import9.MdPrefixRejector) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdPrefixRejector_1_5.context; }
    if (((token === import10.MdButton) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdButton_1_6.context; }
    if (((token === import10.MdButtonCssMatStyler) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdButtonCssMatStyler_1_7.context; }
    if (((token === import11.MdMenuTrigger) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdMenuTrigger_1_8.context; }
    if (((token === import14.ClientAccountAssignmentSelectorComponent) && (9 === requestNodeIndex))) { return this._ClientAccountAssignmentSelectorComponent_9_3.context; }
    if (((token === import9.MdPrefixRejector) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdPrefixRejector_7_3.context; }
    if (((token === import13.MdMenu) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdMenu_7_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(1,1,8);
    this._MdPrefixRejector_1_5.ngDoCheck(this,this._el_1,throwOnChange);
    if (this._MdButton_1_6.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    this._MdButtonCssMatStyler_1_7.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(1,3,12);
    const currVal_1_3_0:any = this._MdMenu_7_4.context;
    this._MdMenuTrigger_1_8.check_menu(currVal_1_3_0,throwOnChange,false);
    this._MdMenuTrigger_1_8.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(3,5,12);
    this._MdPrefixRejector_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    if (this._MdIcon_3_4.ngDoCheck(this,this._el_3,throwOnChange)) { this.compView_3.markAsCheckOnce(); }
    this.debug(7,9,8);
    this._MdPrefixRejector_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    this._MdMenu_7_4.ngDoCheck(this,this._el_7,throwOnChange);
    this.debug(9,10,41);
    const currVal_9_0_0:any = true;
    this._ClientAccountAssignmentSelectorComponent_9_3.check_fullTitle(currVal_9_0_0,throwOnChange,false);
    if (this._ClientAccountAssignmentSelectorComponent_9_3.ngDoCheck(this,this._el_9,throwOnChange)) { this.compView_9.markAsCheckOnce(); }
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdMenuItem_7_0.dirty) {
        this._query_MdMenuItem_7_0.reset(([] as any[]));
        this._MdMenu_7_4.context.items = this._query_MdMenuItem_7_0;
        this._query_MdMenuItem_7_0.notifyOnChanges();
      }
      this.debug(7,9,8);
      if ((this.numberOfChecks === 0)) { this._MdMenu_7_4.context.ngAfterContentInit(); }
    }
    this._MdButton_1_6.checkHost(this,this.compView_1,this._el_1,throwOnChange);
    this._MdButtonCssMatStyler_1_7.checkHost(this,this.compView_1,this._el_1,throwOnChange);
    this._MdIcon_3_4.checkHost(this,this.compView_3,this._el_3,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_3.internalDetectChanges(throwOnChange);
    this.compView_7.internalDetectChanges(throwOnChange);
    this.compView_9.internalDetectChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(3,5,12);
      this._MdIcon_3_4.context.ngAfterViewChecked();
      this.debug(1,1,8);
      if ((this.numberOfChecks === 0)) { this._MdMenuTrigger_1_8.context.ngAfterViewInit(); }
    }
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_3.destroy();
    this.compView_7.destroy();
    this.compView_9.destroy();
    this.debug(3,5,12);
    this._MdMenuTrigger_1_8.ngOnDestroy();
    this.debug(1,1,8);
    this._ClientAccountAssignmentSelectorComponent_9_3.ngOnDestroy();
    this.debug(9,10,12);
    this._MdMenu_7_4.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_5,ctx);
    }
    if (((nodeIndex == 3) && (ngContentIndex == 0))) { cb(this._text_4,ctx); }
    if (((nodeIndex == 7) && (ngContentIndex == 0))) {
      cb(this._text_8,ctx);
      cb(this._el_9,ctx);
      cb(this._text_10,ctx);
    }
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.debug(1,1,8);
    this.compView_1.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_1_6.handleEvent(eventName,$event) && result);
    result = (this._MdMenuTrigger_1_8.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_9(eventName:string,$event:any):boolean {
    this.debug(9,10,12);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'updateClientAccount')) {
      const pd_sub_0:any = ((<any>this.context.onUpdateClientAccount($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}