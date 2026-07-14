import{a as _t,b as yt,c as Fe,d as Re,e as vt,g as xt,h as Ct,i as St,j as Mt,k as kt,l as wt,m as Et}from"./chunk-PSZRGYAY.js";import{A as Xt,B as Zt,C as Jt,D as ei,a as Ot,b as Dt,c as Tt,d as It,e as Rt,f as At,h as Lt,i as Nt,j as Vt,k as zt,l as Bt,m as Ut,n as be,o as Gt,p as ee,q as Ht,r as jt,s as Kt,t as Wt,u as qt,v as $t,w as _e,x as Yt,z as Qt}from"./chunk-LNAWQ6LV.js";import{G as ct,I as K,J as dt,K as ue,L as mt,M as Pe,R as he,U as pt,V as ut,W as ht,X as ft,Y as fe,Z as ge,d as me,da as gt,fa as bt,ha as Pt,ia as Ft,j as nt,ja as ye,ka as ti,n as at,o as ot,p as rt,q as j,r as st,s as pe,x as lt}from"./chunk-CH42YY3G.js";import{$ as p,A as Ee,Db as G,Eb as Ze,F as je,Hb as y,Ib as f,Jb as se,Kb as H,Lb as Je,Mb as le,Nb as O,O as Oe,Ob as D,P as De,Q as N,Qa as c,Sb as X,Ub as T,Vb as et,W as Ke,Wb as d,X as V,Xa as $e,Xb as g,Yb as ce,Z as I,Zb as tt,_b as Te,a as ke,ac as Z,b as Ue,bb as S,c as Ge,cb as B,cc as J,ea as w,fa as E,ga as We,h as L,ha as qe,hb as Ye,jb as Qe,jc as it,la as z,nb as U,nc as de,ob as b,pb as _,qa as x,qb as Xe,qc as k,rb as Y,rc as Ie,s as we,sb as Q,ta as oe,tb as v,ub as s,vb as l,w as He,wa as re,wb as M,z as ae}from"./chunk-VCOBWY3K.js";var ii=(()=>{class o{_animationsDisabled=he();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=S({type:o,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&T("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return o})();var pi=["text"],ui=[[["mat-icon"]],"*"],hi=["mat-icon","*"];function fi(o,n){if(o&1&&M(0,"mat-pseudo-checkbox",1),o&2){let e=f();v("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function gi(o,n){if(o&1&&M(0,"mat-pseudo-checkbox",3),o&2){let e=f();v("disabled",e.disabled)}}function bi(o,n){if(o&1&&(s(0,"span",4),d(1),l()),o&2){let e=f();c(),ce("(",e.group.label,")")}}var Le=new I("MAT_OPTION_PARENT_COMPONENT"),Ne=new I("MatOptgroup");var Ae=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},W=(()=>{class o{_element=p(re);_changeDetectorRef=p(de);_parent=p(Le,{optional:!0});group=p(Ne,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=p(ue).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=x(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new z;_text;_stateChanges=new L;constructor(){let e=p(at);e.load(ut),e.load(ot),this._signalDisableRipple=!!this._parent&&Qe(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!K(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ae(this,e))}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=S({type:o,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&le(pi,7),t&2){let a;O(a=D())&&(i._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&y("click",function(){return i._selectViaInteraction()})("keydown",function(r){return i._handleKeydown(r)}),t&2&&(Ze("id",i.id),U("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),T("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",k]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:hi,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(se(ui),b(0,fi,1,2,"mat-pseudo-checkbox",1),H(1),s(2,"span",2,0),H(4,1),l(),b(5,gi,1,1,"mat-pseudo-checkbox",3),b(6,bi,2,1,"span",4),M(7,"div",5)),t&2&&(_(i.multiple?0:-1),c(5),_(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),c(),_(i.group&&i.group._inert?6:-1),c(),v("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[ii,pt],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return o})();function ni(o,n,e){if(e.length){let t=n.toArray(),i=e.toArray(),a=0;for(let r=0;r<o+1;r++)t[r].group&&t[r].group===i[a]&&a++;return a}return 0}function ai(o,n,e,t){return o<e?o:o+n>e+t?Math.max(0,o-t+n):e}var oi=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=B({type:o});static \u0275inj=V({imports:[j]})}return o})();var Ve=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=B({type:o});static \u0275inj=V({imports:[ft,oi,W,j]})}return o})();var Ci=["trigger"],Si=["panel"],Mi=[[["mat-select-trigger"]],"*"],ki=["mat-select-trigger","*"];function wi(o,n){if(o&1&&(s(0,"span",4),d(1),l()),o&2){let e=f();c(),g(e.placeholder)}}function Ei(o,n){o&1&&H(0)}function Oi(o,n){if(o&1&&(s(0,"span",11),d(1),l()),o&2){let e=f(2);c(),g(e.triggerValue)}}function Di(o,n){if(o&1&&(s(0,"span",5),b(1,Ei,1,0)(2,Oi,2,1,"span",11),l()),o&2){let e=f();c(),_(e.customTrigger?1:2)}}function Ti(o,n){if(o&1){let e=G();s(0,"div",12,1),y("keydown",function(i){w(e);let a=f();return E(a._handleKeydown(i))}),H(2,1),l()}if(o&2){let e=f();et(e.panelClass),T("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),U("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Ii=new I("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let o=p(qe);return()=>_t(o)}}),Pi=new I("MAT_SELECT_CONFIG"),Fi=new I("MatSelectTrigger"),ze=class{source;value;constructor(n,e){this.source=n,this.value=e}},li=(()=>{class o{_viewportRuler=p(gt);_changeDetectorRef=p(de);_elementRef=p(re);_dir=p(rt,{optional:!0});_idGenerator=p(ue);_renderer=p($e);_parentFormField=p(Bt,{optional:!0});ngControl=p(Ht,{self:!0,optional:!0});_liveAnnouncer=p(ct);_defaultOptions=p(Pi,{optional:!0});_animationsDisabled=he();_popoverLocation;_initialized=new L;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=ni(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=ai(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ze(this,e)}_scrollStrategyFactory=p(Ii);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new L;_errorStateTracker;stateChanges=new L;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=x(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ee.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=He(()=>{let e=this.options;return e?e.changes.pipe(Oe(e),De(()=>ae(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(De(()=>this.optionSelectionChanges))});openedChange=new z;_openedStream=this.openedChange.pipe(Ee(e=>e),we(()=>{}));_closedStream=this.openedChange.pipe(Ee(e=>!e),we(()=>{}));selectionChange=new z;valueChange=new z;constructor(){let e=p(Xt),t=p(Wt,{optional:!0}),i=p(_e,{optional:!0}),a=p(new it("tabindex"),{optional:!0}),r=p(yt,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Zt(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Lt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(N(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(N(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Oe(null),N(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(je(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Pe(this._trackedModal,"aria-owns",t),mt(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Pe(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&a&&!K(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let m=this.selected;r.onKeydown(e);let u=this.selected;u&&m!==u&&this._liveAnnouncer.announce(u.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,r=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!K(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let m=this.options.some(u=>!u.disabled&&!u.selected);this.options.forEach(u=>{u.disabled||(m?u.select():u.deselect())})}else{let m=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==m&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!K(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Fe?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new dt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=ae(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(N(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ae(...this.options.map(t=>t._stateChanges)).pipe(N(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=lt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=S({type:o,selectors:[["mat-select"]],contentQueries:function(t,i,a){if(t&1&&Je(a,Fi,5)(a,W,5)(a,Ne,5),t&2){let r;O(r=D())&&(i.customTrigger=r.first),O(r=D())&&(i.options=r),O(r=D())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&le(Ci,5)(Si,5)(Re,5),t&2){let a;O(a=D())&&(i.trigger=a.first),O(a=D())&&(i.panel=a.first),O(a=D())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&y("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(U("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),T("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",k],disableRipple:[2,"disableRipple","disableRipple",k],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ie(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",k],placeholder:"placeholder",required:[2,"required","required",k],multiple:[2,"multiple","multiple",k],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",k],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ie],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",k]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Te([{provide:zt,useExisting:o},{provide:Le,useExisting:o}]),oe],ngContentSelectors:ki,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(se(Mi),s(0,"div",2,0),y("click",function(){return i.open()}),s(3,"div",3),b(4,wi,2,1,"span",4)(5,Di,3,1,"span",5),l(),s(6,"div",6)(7,"div",7),We(),s(8,"svg",8),M(9,"path",9),l()()()(),Ye(10,Ti,3,16,"ng-template",10),y("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(r){return i._handleOverlayKeydown(r)})),t&2){let a=X(1);c(3),U("id",i._valueId),c(),_(i.empty?4:5),c(6),v("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Fe,Re],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return o})();var ci=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=B({type:o});static \u0275inj=V({imports:[vt,Ve,j,bt,be,Ve]})}return o})();var Ce=class{bytes;view;sectorSize;miniSectorSize;headerRegionSize;miniStreamCutoff;firstDirSector;firstMiniFatSector;numMiniFatSectors;firstDifatSector;numFatSectors;difat;fat=[];miniFat=[];directory=[];miniStreamData=new Uint8Array(0);constructor(n){this.bytes=new Uint8Array(n),this.view=new DataView(n),this.parseHeader(),this.buildFat(),this.buildDirectory(),this.buildMiniFat(),this.buildMiniStream()}getAllEntries(){return this.directory.filter(n=>n.type!==0)}getRoot(){return this.directory[0]}getChildren(n){let e=[],t=i=>{if(i===-1)return;let a=this.directory[i];a&&(t(a.leftSibling),e.push(a),t(a.rightSibling))};return t(n.child),e}readStream(n){if(n.type!==2)throw new Error(`CFB directory entry "${n.name}" is not a stream`);return n.size===0?new Uint8Array(0):n.size<this.miniStreamCutoff?this.readFromMiniSectors(n.startSector,n.size):this.readFromRegularSectors(n.startSector,n.size)}parseHeader(){let n=[208,207,17,224,161,177,26,225];for(let i=0;i<8;i++)if(this.bytes[i]!==n[i])throw new Error("Not a valid .msg file: missing Compound File Binary signature");let e=this.view.getUint16(30,!0);this.sectorSize=1<<e;let t=this.view.getUint16(32,!0);this.miniSectorSize=1<<t,this.headerRegionSize=Math.max(512,this.sectorSize),this.numFatSectors=this.view.getUint32(44,!0),this.firstDirSector=this.view.getUint32(48,!0),this.miniStreamCutoff=this.view.getUint32(56,!0),this.firstMiniFatSector=this.view.getUint32(60,!0),this.numMiniFatSectors=this.view.getUint32(64,!0),this.firstDifatSector=this.view.getUint32(68,!0),this.difat=[];for(let i=0;i<109;i++)this.difat.push(this.view.getUint32(76+i*4,!0))}sectorOffset(n){return this.headerRegionSize+n*this.sectorSize}readSector(n){let e=this.sectorOffset(n);return this.bytes.slice(e,e+this.sectorSize)}buildFat(){let n=[];for(let i=0;i<109&&n.length<this.numFatSectors;i++){let a=this.difat[i];a!==4294967295&&n.push(a)}let e=this.firstDifatSector,t=this.sectorSize/4;for(;e!==4294967294&&e!==4294967295&&n.length<this.numFatSectors;){let i=this.readSector(e),a=new DataView(i.buffer,i.byteOffset,i.byteLength);for(let r=0;r<t-1&&n.length<this.numFatSectors;r++){let m=a.getUint32(r*4,!0);m!==4294967295&&n.push(m)}e=a.getUint32((t-1)*4,!0)}this.fat=[];for(let i of n){let a=this.readSector(i),r=new DataView(a.buffer,a.byteOffset,a.byteLength);for(let m=0;m<t;m++)this.fat.push(r.getUint32(m*4,!0))}}getChain(n,e){let t=[],i=n,a=0;for(;i!==4294967294&&i!==4294967295;)if(t.push(i),i=e[i],++a>2e6)throw new Error("Sector chain exceeded a sane length - file may be corrupt");return t}readFromRegularSectors(n,e){let t=this.getChain(n,this.fat),i=new Uint8Array(e),a=0;for(let r of t){let m=Math.min(this.sectorSize,e-a);if(m<=0)break;i.set(this.readSector(r).subarray(0,m),a),a+=m}return i}buildDirectory(){let n=this.getChain(this.firstDirSector,this.fat),e=this.sectorSize/128;this.directory=[];let t=0;for(let i of n){let a=this.readSector(i),r=new DataView(a.buffer,a.byteOffset,a.byteLength);for(let m=0;m<e;m++){let u=m*128,h=r.getUint16(u+64,!0),C="";if(h>2){let ne=a.subarray(u,u+h-2);C=new TextDecoder("utf-16le").decode(ne)}let q=a[u+66],F=r.getInt32(u+68,!0),R=r.getInt32(u+72,!0),te=r.getInt32(u+76,!0),$=r.getUint32(u+116,!0),A=r.getUint32(u+120,!0),ie=r.getUint32(u+124,!0)*4294967296+A;this.directory.push({index:t,name:C,type:q,leftSibling:F,rightSibling:R,child:te,startSector:$,size:ie}),t++}}}buildMiniFat(){if(this.miniFat=[],this.firstMiniFatSector===4294967294||this.numMiniFatSectors===0)return;let n=this.getChain(this.firstMiniFatSector,this.fat),e=this.sectorSize/4;for(let t of n){let i=this.readSector(t),a=new DataView(i.buffer,i.byteOffset,i.byteLength);for(let r=0;r<e;r++)this.miniFat.push(a.getUint32(r*4,!0))}}buildMiniStream(){let n=this.getRoot();if(!n||n.size===0){this.miniStreamData=new Uint8Array(0);return}this.miniStreamData=this.readFromRegularSectors(n.startSector,n.size)}readFromMiniSectors(n,e){let t=new Uint8Array(e),i=n,a=0,r=0;for(;i!==4294967294&&i!==4294967295&&a<e;){let m=i*this.miniSectorSize,u=Math.min(this.miniSectorSize,e-a);if(t.set(this.miniStreamData.subarray(m,m+u),a),a+=u,i=this.miniFat[i],++r>2e6)throw new Error("Mini sector chain exceeded a sane length - file may be corrupt")}return t}};var Ai=55,Li=3098,Ni=3103,Vi=23809,zi=57,Bi=3590,Ui=4096,Gi=3093,Hi=12289,ji=12291,Ki=14846,Wi=3,qi=64,$i=31,Yi=30,Qi=32,Xi=8,Zi=1,Ji=2,en=/^__recip_version1\.0_#[0-9A-Fa-f]{8}$/,Se=class o{logger=p(ye);async parse(n){try{let e=await n.arrayBuffer(),t=new Ce(e),i=t.getRoot(),a=t.getChildren(i),r=this.readString(t,a,Ai)??"",m=this.readString(t,a,Li)??"",u=this.readString(t,a,Vi)??this.readString(t,a,Ni)??"",h=this.readString(t,a,Ui)??"",C=this.readPropertiesStream(t,a,Qi),q=this.readSysTimeIso(C,zi)??this.readSysTimeIso(C,Bi),F=[],R=[];for(let $ of a){if($.type!==1||!en.test($.name))continue;let A=t.getChildren($),Be=this.readPropertiesStream(t,A,Xi),ie=this.readLong(Be,Gi),ne={name:this.readString(t,A,Hi)??"",email:this.readString(t,A,Ki)??this.readString(t,A,ji)??""};ie===Zi?F.push(ne):ie===Ji&&R.push(ne)}let te={subject:r,from:{name:m,email:u},to:F,cc:R,date:q,body:h};return this.logger.debugLog(`FileParserMsg: parsed "${n.name}"`,te),te}catch(e){return this.logger.debugLog(`FileParserMsg: failed to parse "${n.name}"`,e),null}}readString(n,e,t){let i=t.toString(16).padStart(4,"0").toUpperCase(),a=`__substg1.0_${i}${$i.toString(16).padStart(4,"0").toUpperCase()}`,r=e.find(h=>h.type===2&&h.name===a);if(r){let h=n.readStream(r);return new TextDecoder("utf-16le").decode(h).replace(/\u0000+$/,"")}let m=`__substg1.0_${i}${Yi.toString(16).padStart(4,"0").toUpperCase()}`,u=e.find(h=>h.type===2&&h.name===m);if(u){let h=n.readStream(u);return new TextDecoder("windows-1252").decode(h).replace(/\u0000+$/,"")}return null}readPropertiesStream(n,e,t){let i=new Map,a=e.find(h=>h.type===2&&h.name==="__properties_version1.0");if(!a)return i;let r=n.readStream(a),m=new DataView(r.buffer,r.byteOffset,r.byteLength),u=Math.floor((r.length-t)/16);for(let h=0;h<u;h++){let C=t+h*16,q=m.getUint16(C,!0),F=m.getUint16(C+2,!0),R=r.slice(C+8,C+16);i.set(F,{propType:q,value:R})}return i}readLong(n,e){let t=n.get(e);return!t||t.propType!==Wi?null:new DataView(t.value.buffer,t.value.byteOffset,t.value.byteLength).getInt32(0,!0)}readSysTimeIso(n,e){let t=n.get(e);if(!t||t.propType!==qi)return null;let i=new DataView(t.value.buffer,t.value.byteOffset,t.value.byteLength),a=i.getUint32(0,!0),r=i.getUint32(4,!0),m=BigInt(r)<<32n|BigInt(a),h=Number((m-116444736000000000n)/10000n);return new Date(h).toISOString()}static \u0275fac=function(e){return new(e||o)};static \u0275prov=Ke({token:o,factory:o.\u0275fac,providedIn:"root"})};function an(o,n){if(o&1&&(s(0,"div",3)(1,"span",4),d(2,"To"),l(),s(3,"span",5),d(4),l()()),o&2){let e=f();c(4),g(e.formatRecipients(e.data.to))}}function on(o,n){if(o&1&&(s(0,"div",3)(1,"span",4),d(2,"Cc"),l(),s(3,"span",5),d(4),l()()),o&2){let e=f();c(4),g(e.formatRecipients(e.data.cc))}}function rn(o,n){if(o&1&&(s(0,"div",3)(1,"span",4),d(2,"Date"),l(),s(3,"span",5),d(4),Z(5,"date"),l()()),o&2){let e=f();c(4),g(J(5,1,e.data.date,"dd MMM y, HH:mm"))}}var Me=class o{data=p(xt);formatRecipients(n){return n.map(e=>e.name||e.email).join("; ")}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=S({type:o,selectors:[["app-email-dialog"]],decls:17,vars:7,consts:[["mat-dialog-title",""],[1,"email-dialog-content"],[1,"email-meta"],[1,"email-meta-row"],[1,"email-meta-label"],[1,"email-meta-value"],[1,"email-body"],["align","end"],["mat-button","","mat-dialog-close",""]],template:function(e,t){e&1&&(s(0,"h2",0),d(1),l(),s(2,"mat-dialog-content",1)(3,"div",2)(4,"div",3)(5,"span",4),d(6,"From"),l(),s(7,"span",5),d(8),l()(),b(9,an,5,1,"div",3),b(10,on,5,1,"div",3),b(11,rn,6,4,"div",3),l(),s(12,"div",6),d(13),l()(),s(14,"mat-dialog-actions",7)(15,"button",8),d(16,"Close"),l()()),e&2&&(c(),g(t.data.subject||"(no subject)"),c(7),tt("",t.data.from.name," <",t.data.from.email,">"),c(),_(t.data.to.length>0?9:-1),c(),_(t.data.cc.length>0?10:-1),c(),_(t.data.date?11:-1),c(2),g(t.data.body))},dependencies:[Et,St,Mt,wt,kt,ge,fe,pe,me],styles:[".email-dialog-content[_ngcontent-%COMP%]{max-height:60vh}.email-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid rgba(0,0,0,.12)}.email-meta-row[_ngcontent-%COMP%]{display:flex;gap:8px;font-size:13px}.email-meta-label[_ngcontent-%COMP%]{flex:0 0 40px;font-weight:600;color:#757575}.email-meta-value[_ngcontent-%COMP%]{color:#1a1a1a;word-break:break-word}.email-body[_ngcontent-%COMP%]{font-size:14px;line-height:1.5;color:#1a1a1a;white-space:pre-wrap;word-break:break-word}"]})};var sn=(o,n)=>n.Id,mi=(o,n)=>n.Guid;function ln(o,n){o&1&&M(0,"mat-progress-bar",1)}function cn(o,n){if(o&1&&(s(0,"mat-option",14),d(1),l()),o&2){let e=n.$implicit;v("value",e),c(),g(e)}}function dn(o,n){if(o&1&&(s(0,"mat-option",14),d(1),l()),o&2){let e=n.$implicit;v("value",e.Id),c(),g(e.Title)}}function mn(o,n){if(o&1){let e=G();s(0,"div",30),y("click",function(){let i=w(e).$implicit,a=f(3);return E(a.openEmailDialog(i))}),s(1,"mat-icon"),d(2,"mail"),l(),s(3,"span",31),d(4),Z(5,"date"),l(),s(6,"span",32),d(7),l()()}if(o&2){let e=n.$implicit;c(4),g(J(5,2,e.date,"dd MMM y")),c(3),g(e.subject)}}function pn(o,n){if(o&1&&(s(0,"div",28),Y(1,mn,8,5,"div",29,mi),l()),o&2){let e=f().$implicit,t=f();c(),Q(t.getEmailsForComment(e.Guid))}}function un(o,n){if(o&1){let e=G();s(0,"div",24),y("dragover",function(i){let a=w(e).$implicit,r=f();return E(r.onCommentDragOver(i,a))})("dragleave",function(){let i=w(e).$implicit,a=f();return E(a.onCommentDragLeave(i))})("drop",function(i){let a=w(e).$implicit,r=f();return E(r.onCommentDrop(i,a))}),s(1,"span",25),d(2),l(),s(3,"p",26),d(4),l(),s(5,"span",27),d(6),Z(7,"date"),l(),b(8,pn,3,0,"div",28),l()}if(o&2){let e=n.$implicit,t=f();T("drag-over",t.dragOverCommentGuid()===e.Guid),c(2),g(e.Author),c(2),g(e.Text),c(2),g(J(7,6,e.Timestamp,"dd MMM y, HH:mm")),c(2),_(t.getEmailsForComment(e.Guid).length>0?8:-1)}}function hn(o,n){o&1&&(s(0,"p",20),d(1,"No comments yet."),l())}var fn=["queued","open","closed"],gn=["long","deger","kajtar","steffensen","odorico","rales"],di=class o{logger=p(ye);router=p(nt);fb=p(Yt);dataService=p(ti);fileParserMsg=p(Se);dialog=p(Ct);guid;isLoading=x(!1);topic=x(null);comments=x([]);emails=x([]);dragOverCommentGuid=x(null);siteUsers=x([]);statusOptions=fn;topicForm=this.fb.group({title:["",ee.required],description:[""],status:["queued",ee.required],owner:[null]});initialized=!1;async ngOnInit(){this.logger.debugLog("Topic component initialized",{guid:this.guid}),this.isLoading.set(!0);try{await this.dataService.ready,this.loadTopic(),this.loadComments(),this.loadEmails(),this.loadSiteUsers(),this.initialized=!0}finally{this.isLoading.set(!1)}}ngOnChanges(n){this.initialized&&n.guid&&!n.guid.firstChange&&(this.loadTopic(),this.loadComments(),this.loadEmails())}loadTopic(){let e=this.dataService.getItems("Topic").find(t=>t.Guid===this.guid)??null;this.topic.set(e),e?this.topicForm.setValue({title:e.Title??"",description:e.Description??"",status:e.Status??"queued",owner:e.Owner?Number(e.Owner):null}):this.topicForm.reset({title:"",description:"",status:"queued",owner:null})}loadSiteUsers(){let e=this.dataService.getItems("siteUsers").filter(t=>{let i=(t.Title??"").toLowerCase();return gn.some(a=>i.includes(a.toLowerCase()))});this.siteUsers.set(e)}async saveTopic(){let n=this.topic();if(!n||this.topicForm.invalid)return;let{title:e,description:t,status:i,owner:a}=this.topicForm.getRawValue(),u=n,{Id:r}=u,m=Ge(u,["Id"]);this.isLoading.set(!0);try{await this.dataService.updateItem("Topic",n.Id,Ue(ke({},m),{Title:e,Description:t,Status:i,Owner:a})),this.loadTopic(),this.logger.debugLog("Topic details saved",{guid:this.guid})}catch(h){this.logger.debugLog("Failed to save topic details",h)}finally{this.isLoading.set(!1)}}onCommentDragOver(n,e){n.preventDefault(),this.dragOverCommentGuid.set(e.Guid)}onCommentDragLeave(n){this.dragOverCommentGuid()===n.Guid&&this.dragOverCommentGuid.set(null)}async onCommentDrop(n,e){n.preventDefault(),this.dragOverCommentGuid.set(null);let t=n.dataTransfer?.files;if(!(!t||t.length===0))for(let i=0;i<t.length;i++){let a=t[i];if(this.isMsgFile(a)){this.logger.debugLog("MSG file dropped on comment",{comment:e.Guid,fileName:a.name});let r=await this.fileParserMsg.parse(a);r&&await this.saveEmail(e,r)}else this.logger.debugLog("Dropped file is not a .msg file - ignoring",{comment:e.Guid,fileName:a.name,fileType:a.type})}}async saveEmail(n,e){this.isLoading.set(!0);try{await this.dataService.addItem("Email",ke({Parent:n.Guid},e)),this.loadEmails(),this.logger.debugLog("Email saved as child of comment",{comment:n.Guid,subject:e.subject})}catch(t){this.logger.debugLog("Failed to save parsed email",t)}finally{this.isLoading.set(!1)}}isMsgFile(n){return n.name.toLowerCase().endsWith(".msg")||n.type==="application/vnd.ms-outlook"}loadComments(){let e=this.dataService.getItems("Comment").filter(t=>t.Parent===this.guid).sort((t,i)=>t.Timestamp-i.Timestamp);this.comments.set(e)}loadEmails(){this.emails.set(this.dataService.getItems("Email"))}getEmailsForComment=n=>this.emails().filter(e=>e.Parent===n).sort((e,t)=>this.toTime(e.date)-this.toTime(t.date));toTime(n){return n?new Date(n).getTime():0}openEmailDialog(n){this.dialog.open(Me,{width:"600px",maxHeight:"80vh",data:n})}goBack=()=>{this.logger.debugLog("Navigating back to WIP"),this.router.navigate(["/wip"])};onCommentKeydown(n,e){n.key==="Enter"&&!n.shiftKey&&(n.preventDefault(),this.addComment(e))}async addComment(n){let e=n.value.trim();if(!(!e||this.isLoading())){this.isLoading.set(!0);try{let t=this.dataService.getCurrentUserFromCache()?.Title??"";await this.dataService.addItem("Comment",{Parent:this.guid,Text:e,Author:t,Timestamp:Date.now()}),this.loadComments(),n.value="",this.logger.debugLog("Comment added",{parent:this.guid})}catch(t){this.logger.debugLog("Failed to add comment",t)}finally{this.isLoading.set(!1)}}}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=S({type:o,selectors:[["app-topic"]],inputs:{guid:"guid"},features:[oe],decls:54,vars:6,consts:[["commentInput",""],["mode","indeterminate"],[1,"topic-container"],[1,"header-row"],["mat-icon-button","","aria-label","Back to Work in Progress",3,"click"],[1,"page-title"],[1,"cards-grid"],[1,"topic-detail-card"],["color","primary"],[1,"topic-details-form",3,"ngSubmit","formGroup"],["appearance","outline","subscriptSizing","dynamic",1,"detail-field"],["matInput","","type","text","formControlName","title"],["matInput","","rows","4","formControlName","description"],["formControlName","status"],[3,"value"],["formControlName","owner"],[1,"form-actions"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[1,"comments-list"],[1,"comment-bubble",3,"drag-over"],[1,"comments-empty"],["appearance","outline","subscriptSizing","dynamic",1,"add-comment-field"],["matInput","","rows","3","placeholder","Add comment ...",3,"keydown"],["mat-icon-button","","matSuffix","","type","button","aria-label","Send comment",3,"click","disabled"],[1,"comment-bubble",3,"dragover","dragleave","drop"],[1,"comment-author"],[1,"comment-text"],[1,"comment-timestamp"],[1,"comment-emails"],[1,"comment-email-chip"],[1,"comment-email-chip",3,"click"],[1,"comment-email-date"],[1,"comment-email-subject"]],template:function(e,t){if(e&1){let i=G();b(0,ln,1,0,"mat-progress-bar",1),s(1,"div",2)(2,"div",3)(3,"button",4),y("click",function(){return t.goBack()}),s(4,"mat-icon"),d(5,"arrow_back"),l()(),s(6,"h1",5),d(7),l()(),s(8,"div",6)(9,"mat-card",7)(10,"mat-toolbar",8)(11,"span"),d(12,"Topic Details"),l()(),s(13,"mat-card-content")(14,"form",9),y("ngSubmit",function(){return t.saveTopic()}),s(15,"mat-form-field",10)(16,"mat-label"),d(17,"Title"),l(),M(18,"input",11),l(),s(19,"mat-form-field",10)(20,"mat-label"),d(21,"Description"),l(),M(22,"textarea",12),l(),s(23,"mat-form-field",10)(24,"mat-label"),d(25,"Status"),l(),s(26,"mat-select",13),Y(27,cn,2,2,"mat-option",14,Xe),l()(),s(29,"mat-form-field",10)(30,"mat-label"),d(31,"Owner"),l(),s(32,"mat-select",15),Y(33,dn,2,2,"mat-option",14,sn),l()(),s(35,"div",16)(36,"button",17),d(37," Save "),l()()()()(),s(38,"mat-card",7)(39,"mat-toolbar",8)(40,"span"),d(41,"Notes"),l()(),s(42,"mat-card-content")(43,"div",18),Y(44,un,9,9,"div",19,mi,!1,hn,2,0,"p",20),l()(),s(47,"mat-card-footer")(48,"mat-form-field",21)(49,"textarea",22,0),y("keydown",function(r){w(i);let m=X(50);return E(t.onCommentKeydown(r,m))}),l(),s(51,"button",23),y("click",function(){w(i);let r=X(50);return E(t.addComment(r))}),s(52,"mat-icon"),d(53,"send"),l()()()()()()()}if(e&2){let i;_(t.isLoading()?0:-1),c(7),ce("Topic: ",(i=t.topic())==null?null:i.Title),c(7),v("formGroup",t.topicForm),c(13),Q(t.statusOptions),c(6),Q(t.siteUsers()),c(3),v("disabled",t.topicForm.invalid||t.isLoading()),c(8),Q(t.comments()),c(7),v("disabled",t.isLoading())}},dependencies:[It,Ot,Dt,Tt,Ft,Pt,pe,st,ge,fe,ht,At,Rt,be,Ut,Nt,Vt,ei,Jt,ci,li,W,Qt,qt,Gt,jt,Kt,_e,$t,me],styles:[".topic-container[_ngcontent-%COMP%]{padding:20px}.header-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:16px}.page-title[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:500}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px}.topic-detail-card[_ngcontent-%COMP%]{padding:0;border-radius:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;min-height:300px}mat-toolbar[_ngcontent-%COMP%]{min-height:56px;height:auto;padding:4px 16px;font-size:14px;font-weight:500;display:flex;align-items:center;gap:12px}mat-card-content[_ngcontent-%COMP%]{padding:16px!important}.topic-details-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.detail-field[_ngcontent-%COMP%]{width:100%}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.comments-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;max-height:320px;overflow-y:auto}.comment-bubble[_ngcontent-%COMP%]{background-color:#f0f2f5;border:1px solid #d5d8dc;border-radius:12px;padding:10px 14px;max-width:85%;align-self:flex-start;box-shadow:0 1px 2px #00000014;transition:background-color .15s ease,border-color .15s ease}.comment-bubble.drag-over[_ngcontent-%COMP%]{background-color:#e8eaf6;border-color:#3949ab;border-style:dashed}.comment-author[_ngcontent-%COMP%]{display:block;font-size:12px;font-weight:600;color:#3949ab;margin-bottom:2px}.comment-text[_ngcontent-%COMP%]{margin:0;font-size:14px;line-height:1.4;color:#1a1a1a;white-space:pre-wrap;word-break:break-word}.comment-timestamp[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:11px;color:#757575;text-align:right}.comment-emails[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-top:8px;padding-top:8px;border-top:1px solid #d5d8dc}.comment-email-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:4px 6px;border-radius:6px;background-color:#fff;border:1px solid #d5d8dc;cursor:pointer;transition:background-color .15s ease,border-color .15s ease;max-width:100%;overflow:hidden}.comment-email-chip[_ngcontent-%COMP%]:hover{background-color:#e8eaf6;border-color:#3949ab}.comment-email-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;line-height:16px;color:#3949ab;flex:0 0 auto}.comment-email-date[_ngcontent-%COMP%]{font-size:12px;color:#757575;flex:0 0 auto;white-space:nowrap}.comment-email-subject[_ngcontent-%COMP%]{font-size:12px;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1 1 auto;min-width:0}.comments-empty[_ngcontent-%COMP%]{margin:0;font-size:14px;color:#757575;font-style:italic}mat-card-footer[_ngcontent-%COMP%]{display:block;padding:8px 12px;border-top:1px solid rgba(0,0,0,.12)}.add-comment-field[_ngcontent-%COMP%]{width:100%}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{min-height:0;padding-top:8px;padding-bottom:8px}.add-comment-field[_ngcontent-%COMP%]   textarea.mat-mdc-input-element[_ngcontent-%COMP%]{resize:none;line-height:1.4}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-form-field-icon-suffix[_ngcontent-%COMP%]{align-self:flex-end;padding-bottom:4px}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]{width:32px;height:32px;padding:4px;color:#757575}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;line-height:20px}"]})};export{di as Topic};
