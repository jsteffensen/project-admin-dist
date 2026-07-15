import{a as De,b as la,c as _i,d as ze,e as da,f as gi,g as je,h as It,i as Tt,j as fi,k as Ot,l as bi,m as Ue,n as ca,o as ma,p as lt,q as vi,r as Vt,s as yi,t as Di,u as Rt,v as Pt,w as Ft,x as Lt}from"./chunk-6WWIYETM.js";import{B as zi,C as ji,D as Ui,E as Gi,F as Ki,G as Wi,a as Ci,b as wi,c as ki,d as xi,e as Ai,f as Ei,h as Ii,i as Ti,j as Oi,k as pa,l as Nt,m as Vi,n as Bt,o as Ri,p as Pi,q as Fi,r as Te,s as ha,t as Li,u as Ni,v as ua,w as Bi,x as Hi,y as dt,z as Yi}from"./chunk-VR6CER3P.js";import{$ as mi,B as ei,C as ti,E as ai,F as ii,J as ni,K as St,L as ri,M as z,N as oi,O as de,P as si,Q as oa,R as li,V as di,X as q,Z as sa,_ as ci,aa as At,ba as st,ca as pi,d as Mt,da as ee,ea as ge,ia as hi,j as Za,ka as ui,ma as Et,n as Ie,o as He,oa as Mi,p as _e,pa as Si,q as be,qa as Ht,r as ve,ra as qi,s as ye,w as na,x as Ja,y as Ye,z as ra}from"./chunk-D4ZHVSYI.js";import{$ as s,$a as Ua,$b as y,A as at,Ab as G,Bb as W,Cb as qa,F as ft,Gb as K,Hb as pe,Kb as _,Lb as vt,Mb as h,Nb as Ee,O as xe,Ob as he,P as ea,Pb as yt,Q as N,Qa as ja,Qb as Y,Rb as M,Sa as c,Sb as S,V as ta,W as Q,Wa as me,Wb as Ne,X as ne,Xa as aa,Xb as Dt,Yb as T,Z as O,Za as Se,Zb as le,_ as Ya,_b as m,a as L,ab as bt,ac as V,b as gt,bc as rt,c as Ba,cc as Ct,d as ie,dc as wt,ea as C,eb as D,ec as kt,fa as w,fb as re,fc as ue,ga as ce,gb as X,gc as $a,h as k,ha as it,hb as Ga,ia as U,ic as Be,ja as Le,jb as nt,jc as Qa,kb as Ae,kc as ot,ma as g,mb as Ka,na as Me,nc as Xa,o as Fe,qb as A,ra as f,rb as E,rc as xt,s as Jt,sb as I,tb as Wa,ua as J,ub as oe,va as za,vb as se,vc as R,w as Ha,wb as b,xa as H,xb as l,yb as d,yc as P,z as fe,zb as x,zc as ia}from"./chunk-IWSJXFBA.js";var $i=(()=>{class n{_animationsDisabled=q();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,a){t&2&&T("mat-pseudo-checkbox-indeterminate",a.state==="indeterminate")("mat-pseudo-checkbox-checked",a.state==="checked")("mat-pseudo-checkbox-disabled",a.disabled)("mat-pseudo-checkbox-minimal",a.appearance==="minimal")("mat-pseudo-checkbox-full",a.appearance==="full")("_mat-animation-noopable",a._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,a){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return n})();var xn=["text"],Mn=[[["mat-icon"]],"*"],Sn=["mat-icon","*"];function An(n,r){if(n&1&&x(0,"mat-pseudo-checkbox",1),n&2){let e=h();b("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function En(n,r){if(n&1&&x(0,"mat-pseudo-checkbox",3),n&2){let e=h();b("disabled",e.disabled)}}function In(n,r){if(n&1&&(l(0,"span",4),m(1),d()),n&2){let e=h();c(),V("(",e.group.label,")")}}var ga=new O("MAT_OPTION_PARENT_COMPONENT"),fa=new O("MatOptgroup");var _a=class{source;isUserInput;constructor(r,e=!1){this.source=r,this.isUserInput=e}},Ge=(()=>{class n{_element=s(H);_changeDetectorRef=s(R);_parent=s(ga,{optional:!0});group=s(fa,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(de).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=f(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new g;_text;_stateChanges=new k;constructor(){let e=s(Ie);e.load(At),e.load(He),this._signalDisableRipple=!!this._parent&&Ka(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let a=this._getHostElement();typeof a.focus=="function"&&a.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!z(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new _a(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-option"]],viewQuery:function(t,a){if(t&1&&Y(xn,7),t&2){let i;M(i=S())&&(a._text=i.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,a){t&1&&_("click",function(){return a._selectViaInteraction()})("keydown",function(o){return a._handleKeydown(o)}),t&2&&(pe("id",a.id),A("aria-selected",a.selected)("aria-disabled",a.disabled.toString()),T("mdc-list-item--selected",a.selected)("mat-mdc-option-multiple",a.multiple)("mat-mdc-option-active",a.active)("mdc-list-item--disabled",a.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",P]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Sn,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,a){t&1&&(Ee(Mn),E(0,An,1,2,"mat-pseudo-checkbox",1),he(1),l(2,"span",2,0),he(4,1),d(),E(5,En,1,1,"mat-pseudo-checkbox",3),E(6,In,2,1,"span",4),x(7,"div",5)),t&2&&(I(a.multiple?0:-1),c(5),I(!a.multiple&&a.selected&&!a.hideSingleSelectionIndicator?5:-1),c(),I(a.group&&a.group._inert?6:-1),c(),b("matRippleTrigger",a._getHostElement())("matRippleDisabled",a.disabled||a.disableRipple))},dependencies:[$i,mi],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return n})();function Qi(n,r,e){if(e.length){let t=r.toArray(),a=e.toArray(),i=0;for(let o=0;o<n+1;o++)t[o].group&&t[o].group===a[i]&&i++;return i}return 0}function Xi(n,r,e,t){return n<e?n:n+r>e+t?Math.max(0,n-t+r):e}var Zi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=re({type:n});static \u0275inj=ne({imports:[be]})}return n})();var ba=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=re({type:n});static \u0275inj=ne({imports:[pi,Zi,Ge,be]})}return n})();var On=["trigger"],Vn=["panel"],Rn=[[["mat-select-trigger"]],"*"],Pn=["mat-select-trigger","*"];function Fn(n,r){if(n&1&&(l(0,"span",4),m(1),d()),n&2){let e=h();c(),y(e.placeholder)}}function Ln(n,r){n&1&&he(0)}function Nn(n,r){if(n&1&&(l(0,"span",11),m(1),d()),n&2){let e=h(2);c(),y(e.triggerValue)}}function Bn(n,r){if(n&1&&(l(0,"span",5),E(1,Ln,1,0)(2,Nn,2,1,"span",11),d()),n&2){let e=h();c(),I(e.customTrigger?1:2)}}function Hn(n,r){if(n&1){let e=K();l(0,"div",12,1),_("keydown",function(a){C(e);let i=h();return w(i._handleKeydown(a))}),he(2,1),d()}if(n&2){let e=h();le(e.panelClass),T("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),A("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Yn=new O("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(U);return()=>je(n)}}),zn=new O("MAT_SELECT_CONFIG"),jn=new O("MatSelectTrigger"),va=class{source;value;constructor(r,e){this.source=r,this.value=e}},Ji=(()=>{class n{_viewportRuler=s(ui);_changeDetectorRef=s(R);_elementRef=s(H);_dir=s(_e,{optional:!0});_idGenerator=s(de);_renderer=s(Se);_parentFormField=s(Nt,{optional:!0});ngControl=s(ha,{self:!0,optional:!0});_liveAnnouncer=s(St);_defaultOptions=s(zn,{optional:!0});_animationsDisabled=q();_popoverLocation;_initialized=new k;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let a=this.panel.nativeElement,i=Qi(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&i===1?a.scrollTop=0:a.scrollTop=Xi(o.offsetTop,o.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new va(this,e)}_scrollStrategyFactory=s(Yn);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new k;_errorStateTracker;stateChanges=new k;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=f(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Te.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ha(()=>{let e=this.options;return e?e.changes.pipe(xe(e),ea(()=>fe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ea(()=>this.optionSelectionChanges))});openedChange=new g;_openedStream=this.openedChange.pipe(at(e=>e),Jt(()=>{}));_closedStream=this.openedChange.pipe(at(e=>!e),Jt(()=>{}));selectionChange=new g;valueChange=new g;constructor(){let e=s(Ui),t=s(ua,{optional:!0}),a=s(dt,{optional:!0}),i=s(new xt("tabindex"),{optional:!0}),o=s(bi,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Gi(e,this.ngControl,a,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=i==null?0:parseInt(i)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Ii(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(N(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(N(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(xe(null),N(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?a.setAttribute("aria-labelledby",e):a.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ft(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&oa(this._trackedModal,"aria-owns",t),si(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;oa(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(a),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",i=>{i.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,a=t===40||t===38||t===37||t===39,i=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&i&&!z(e)||(this.multiple||e.altKey)&&a)e.preventDefault(),this.open();else if(!this.multiple){let p=this.selected;o.onKeydown(e);let u=this.selected;u&&p!==u&&this._liveAnnouncer.announce(u.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,a=e.keyCode,i=a===40||a===38,o=t.isTyping();if(i&&e.altKey)e.preventDefault(),this.close();else if(!o&&(a===13||a===32)&&t.activeItem&&!z(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&a===65&&e.ctrlKey){e.preventDefault();let p=this.options.some(u=>!u.disabled&&!u.selected);this.options.forEach(u=>{u.disabled||(p?u.select():u.deselect())})}else{let p=t.activeItemIndex;t.onKeydown(e),this._multiple&&i&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==p&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!z(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof ca?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new oi(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=fe(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(N(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),fe(...this.options.map(t=>t._stateChanges)).pipe(N(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let a=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(a!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),a!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,a)=>this.sortComparator?this.sortComparator(t,a,e):e.indexOf(t)-e.indexOf(a)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(a=>a.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ja(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-select"]],contentQueries:function(t,a,i){if(t&1&&yt(i,jn,5)(i,Ge,5)(i,fa,5),t&2){let o;M(o=S())&&(a.customTrigger=o.first),M(o=S())&&(a.options=o),M(o=S())&&(a.optionGroups=o)}},viewQuery:function(t,a){if(t&1&&Y(On,5)(Vn,5)(ma,5),t&2){let i;M(i=S())&&(a.trigger=i.first),M(i=S())&&(a.panel=i.first),M(i=S())&&(a._overlayDir=i.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,a){t&1&&_("keydown",function(o){return a._handleKeydown(o)})("focus",function(){return a._onFocus()})("blur",function(){return a._onBlur()}),t&2&&(A("id",a.id)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a.panelOpen?a.id+"-panel":null)("aria-expanded",a.panelOpen)("aria-label",a.ariaLabel||null)("aria-required",a.required.toString())("aria-disabled",a.disabled.toString())("aria-invalid",a.errorState)("aria-activedescendant",a._getAriaActiveDescendant()),T("mat-mdc-select-disabled",a.disabled)("mat-mdc-select-invalid",a.errorState)("mat-mdc-select-required",a.required)("mat-mdc-select-empty",a.empty)("mat-mdc-select-multiple",a.multiple)("mat-select-open",a.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",P],disableRipple:[2,"disableRipple","disableRipple",P],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ia(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",P],placeholder:"placeholder",required:[2,"required","required",P],multiple:[2,"multiple","multiple",P],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",P],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",ia],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",P]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ue([{provide:pa,useExisting:n},{provide:ga,useExisting:n}]),J],ngContentSelectors:Pn,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,a){if(t&1&&(Ee(Rn),l(0,"div",2,0),_("click",function(){return a.open()}),l(3,"div",3),E(4,Fn,2,1,"span",4)(5,Bn,3,1,"span",5),d(),l(6,"div",6)(7,"div",7),ce(),l(8,"svg",8),x(9,"path",9),d()()()(),Ae(10,Hn,3,16,"ng-template",10),_("detach",function(){return a.close()})("backdropClick",function(){return a.close()})("overlayKeydown",function(o){return a._handleOverlayKeydown(o)})),t&2){let i=Ne(1);c(3),A("id",a._valueId),c(),I(a.empty?4:5),c(6),b("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",a._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",a._scrollStrategy)("cdkConnectedOverlayOrigin",a._preferredOverlayOrigin||i)("cdkConnectedOverlayPositions",a._positions)("cdkConnectedOverlayWidth",a._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",a._popoverLocation)}},dependencies:[ca,ma],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return n})();var en=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=re({type:n});static \u0275inj=ne({imports:[lt,ba,be,Et,Bt,ba]})}return n})();var ya=new O("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>s(Xa)}),$e="Method not implemented",B=class{locale;_localeChanges=new k;localeChanges=this._localeChanges;setTime(r,e,t,a){throw new Error($e)}getHours(r){throw new Error($e)}getMinutes(r){throw new Error($e)}getSeconds(r){throw new Error($e)}parseTime(r,e){throw new Error($e)}addSeconds(r,e){throw new Error($e)}getValidDateOrNull(r){return this.isDateInstance(r)&&this.isValid(r)?r:null}deserialize(r){return r==null||this.isDateInstance(r)&&this.isValid(r)?r:this.invalid()}setLocale(r){this.locale=r,this._localeChanges.next()}compareDate(r,e){return this.getYear(r)-this.getYear(e)||this.getMonth(r)-this.getMonth(e)||this.getDate(r)-this.getDate(e)}compareTime(r,e){return this.getHours(r)-this.getHours(e)||this.getMinutes(r)-this.getMinutes(e)||this.getSeconds(r)-this.getSeconds(e)}sameDate(r,e){if(r&&e){let t=this.isValid(r),a=this.isValid(e);return t&&a?!this.compareDate(r,e):t==a}return r==e}sameTime(r,e){if(r&&e){let t=this.isValid(r),a=this.isValid(e);return t&&a?!this.compareTime(r,e):t==a}return r==e}clampDate(r,e,t){return e&&this.compareDate(r,e)<0?e:t&&this.compareDate(r,t)>0?t:r}},ke=new O("mat-date-formats");var Gn=["tooltip"],Kn=20;var Wn=new O("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(U);return()=>je(n,{scrollThrottle:Kn})}}),qn=new O("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var tn="tooltip-panel",$n={passive:!0},Qn=8,Xn=8,Zn=24,Jn=200,an=(()=>{class n{_elementRef=s(H);_ngZone=s(Me);_platform=s(Ye);_ariaDescriber=s(li);_focusMonitor=s(ei);_dir=s(_e);_injector=s(U);_viewContainerRef=s(bt);_mediaMatcher=s(ai);_document=s(Le);_renderer=s(Se);_animationsDisabled=q();_defaultOptions=s(qn,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=er;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=sa(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=sa(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=ra(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=ra(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new k;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Qn}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(N(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let a=this._createOverlay(t);this._detach(),this._portal=this._portal||new De(this._tooltipComponent,this._viewContainerRef);let i=this._tooltipInstance=a.attach(this._portal).instance;i._triggerElement=this._elementRef.nativeElement,i._mouseLeaveHideDelay=this._hideDelay,i.afterHidden().pipe(N(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),i.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof H)return this._overlayRef;this._detach()}let t=this._injector.get(hi).getAncestorScrollContainers(this._elementRef),a=`${this._cssClassPrefix}-${tn}`,i=Tt(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return i.positionChanges.pipe(N(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ue(this._injector,{direction:this._dir,positionStrategy:i,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,a]:a,scrollStrategy:this._injector.get(Wn)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(N(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(N(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(N(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(N(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,a=this._getOrigin(),i=this._getOverlayPosition();t.withPositions([this._addOffset(L(L({},a.main),i.main)),this._addOffset(L(L({},a.fallback),i.fallback))])}_addOffset(e){let t=Xn,a=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=a?-t:t:e.originX==="end"&&(e.offsetX=a?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,a;t=="above"||t=="below"?a={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?a={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(a={originX:"end",originY:"center"});let{x:i,y:o}=this._invertPosition(a.originX,a.originY);return{main:a,fallback:{originX:i,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,a;t=="above"?a={overlayX:"center",overlayY:"bottom"}:t=="below"?a={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?a={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(a={overlayX:"start",overlayY:"center"});let{x:i,y:o}=this._invertPosition(a.overlayX,a.overlayY);return{main:a,fallback:{overlayX:i,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),me(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:a,originY:i}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=a==="end"?"left":"right":o=a==="start"?"left":"right":o=t==="bottom"&&i==="top"?"above":"below",o!==this._currentPosition){let p=this._overlayRef;if(p){let u=`${this._cssClassPrefix}-${tn}-`;p.removePanelClass(u+this._currentPosition),p.addPanelClass(u+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],a=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let i=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,a)},this._defaultOptions?.touchLongPressShowDelay??i)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),a=this._elementRef.nativeElement;t!==a&&!a.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,$n))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,a=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(a.userSelect=a.msUserSelect=a.webkitUserSelect=a.MozUserSelect="none"),(e==="on"||!t.draggable)&&(a.webkitUserDrag="none"),a.touchAction="none",a.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||me({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!z(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=X({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,a){t&2&&T("mat-mdc-tooltip-disabled",a.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),er=(()=>{class n{_changeDetectorRef=s(R);_elementRef=s(H);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=q();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new k;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Zn&&e.width>=Jn}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,a=this._showAnimation,i=this._hideAnimation;if(t.classList.remove(e?i:a),t.classList.add(e?a:i),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,a){if(t&1&&Y(Gn,7),t&2){let i;M(i=S())&&(a._tooltip=i.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,a){t&1&&_("mouseleave",function(o){return a._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,a){t&1&&(G(0,"div",1,0),vt("animationend",function(o){return a._handleAnimationEnd(o)}),G(2,"div",2),m(3),W()()),t&2&&(le(a.tooltipClass),T("mdc-tooltip--multiline",a._isMultiline),c(3),y(a.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var tr=["mat-calendar-body",""];function ar(n,r){return this._trackRow(r)}var cn=(n,r)=>r.id;function ir(n,r){if(n&1&&(G(0,"tr",0)(1,"td",3),m(2),W()()),n&2){let e=h();c(),Dt("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),A("colspan",e.numCols),c(),V(" ",e.label," ")}}function nr(n,r){if(n&1&&(G(0,"td",3),m(1),W()),n&2){let e=h(2);Dt("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),A("colspan",e._firstRowOffset),c(),V(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function rr(n,r){if(n&1){let e=K();G(0,"td",6)(1,"button",7),vt("click",function(a){let i=C(e).$implicit,o=h(2);return w(o._cellClicked(i,a))})("focus",function(a){let i=C(e).$implicit,o=h(2);return w(o._emitActiveDateChange(i,a))}),G(2,"span",8),m(3),W(),qa(4,"span",9),W()()}if(n&2){let e=r.$implicit,t=r.$index,a=h().$index,i=h();Dt("width",i._cellWidth)("padding-top",i._cellPadding)("padding-bottom",i._cellPadding),A("data-mat-row",a)("data-mat-col",t),c(),le(e.cssClasses),T("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",i._isActiveCell(a,t))("mat-calendar-body-range-start",i._isRangeStart(e.compareValue))("mat-calendar-body-range-end",i._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",i._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",i._isComparisonBridgeStart(e.compareValue,a,t))("mat-calendar-body-comparison-bridge-end",i._isComparisonBridgeEnd(e.compareValue,a,t))("mat-calendar-body-comparison-start",i._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",i._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",i._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",i._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",i._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",i._isInPreview(e.compareValue)),pe("tabIndex",i._isActiveCell(a,t)?0:-1),A("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",i._isSelected(e.compareValue))("aria-current",i.todayValue===e.compareValue?"date":null)("aria-describedby",i._getDescribedby(e.compareValue)),c(),T("mat-calendar-body-selected",i._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",i._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",i.todayValue===e.compareValue),c(),V(" ",e.displayValue," ")}}function or(n,r){if(n&1&&(G(0,"tr",1),E(1,nr,2,6,"td",4),oe(2,rr,5,49,"td",5,cn),W()),n&2){let e=r.$implicit,t=r.$index,a=h();c(),I(t===0&&a._firstRowOffset?1:-1),c(),se(e)}}function sr(n,r){if(n&1&&(l(0,"th",2)(1,"span",6),m(2),d(),l(3,"span",3),m(4),d()()),n&2){let e=r.$implicit;c(2),y(e.long),c(2),y(e.narrow)}}var lr=["*"];function dr(n,r){}function cr(n,r){if(n&1){let e=K();l(0,"mat-month-view",4),kt("activeDateChange",function(a){C(e);let i=h();return wt(i.activeDate,a)||(i.activeDate=a),w(a)}),_("_userSelection",function(a){C(e);let i=h();return w(i._dateSelected(a))})("dragStarted",function(a){C(e);let i=h();return w(i._dragStarted(a))})("dragEnded",function(a){C(e);let i=h();return w(i._dragEnded(a))}),d()}if(n&2){let e=h();Ct("activeDate",e.activeDate),b("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function mr(n,r){if(n&1){let e=K();l(0,"mat-year-view",5),kt("activeDateChange",function(a){C(e);let i=h();return wt(i.activeDate,a)||(i.activeDate=a),w(a)}),_("monthSelected",function(a){C(e);let i=h();return w(i._monthSelectedInYearView(a))})("selectedChange",function(a){C(e);let i=h();return w(i._goToDateInView(a,"month"))}),d()}if(n&2){let e=h();Ct("activeDate",e.activeDate),b("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function pr(n,r){if(n&1){let e=K();l(0,"mat-multi-year-view",6),kt("activeDateChange",function(a){C(e);let i=h();return wt(i.activeDate,a)||(i.activeDate=a),w(a)}),_("yearSelected",function(a){C(e);let i=h();return w(i._yearSelectedInMultiYearView(a))})("selectedChange",function(a){C(e);let i=h();return w(i._goToDateInView(a,"year"))}),d()}if(n&2){let e=h();Ct("activeDate",e.activeDate),b("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function hr(n,r){}var ur=["button"],_r=[[["","matDatepickerToggleIcon",""]]],gr=["[matDatepickerToggleIcon]"];function fr(n,r){n&1&&(ce(),l(0,"svg",2),x(1,"path",3),d())}var Ze=(()=>{class n{changes=new k;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),br=0,mt=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=br++;cssClasses;constructor(r,e,t,a,i,o=r,p){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=o,this.rawValue=p,this.cssClasses=i instanceof Set?Array.from(i):i}},vr={passive:!1,capture:!0},Yt={passive:!0,capture:!0},nn={passive:!0},Xe=(()=>{class n{_elementRef=s(H);_ngZone=s(Me);_platform=s(Ye);_intl=s(Ze);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new g;previewChange=new g;activeDateChange=new g;dragStarted=new g;dragEnded=new g;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(U);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(Se),t=s(de);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),s(Ie).load(At),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,i=[e.listen(a,"touchmove",this._touchmoveHandler,vr),e.listen(a,"mouseenter",this._enterHandler,Yt),e.listen(a,"focus",this._enterHandler,Yt),e.listen(a,"mouseleave",this._leaveHandler,Yt),e.listen(a,"blur",this._leaveHandler,Yt),e.listen(a,"mousedown",this._mousedownHandler,nn),e.listen(a,"touchstart",this._mousedownHandler,nn)];this._platform.isBrowser&&i.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=i})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:i}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?i-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/i}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/i}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){me(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return wa(e,this.startValue,this.endValue)}_isRangeEnd(e){return ka(e,this.startValue,this.endValue)}_isInRange(e){return xa(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return wa(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let i=this.rows[t][a-1];if(!i){let o=this.rows[t-1];i=o&&o[o.length-1]}return i&&!this._isRangeEnd(i.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let i=this.rows[t][a+1];if(!i){let o=this.rows[t+1];i=o&&o[0]}return i&&!this._isRangeStart(i.compareValue)}_isComparisonEnd(e){return ka(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return xa(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return wa(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return ka(e,this.previewStart,this.previewEnd)}_isInPreview(e){return xa(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=rn(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Ca(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Ca(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=rn(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Ca(e);if(t){let a=t.getAttribute("data-mat-row"),i=t.getAttribute("data-mat-col");if(a&&i)return this.rows[parseInt(a)]?.[parseInt(i)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[J],attrs:tr,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,a){t&1&&(E(0,ir,3,6,"tr",0),oe(1,or,4,1,"tr",1,ar,!0),G(3,"span",2),m(4),W(),G(5,"span",2),m(6),W(),G(7,"span",2),m(8),W(),G(9,"span",2),m(10),W()),t&2&&(I(a._firstRowOffset<a.labelMinRequiredCells?0:-1),c(),se(a.rows),c(2),pe("id",a._startDateLabelId),c(),V(" ",a.startDateAccessibleName,`
`),c(),pe("id",a._endDateLabelId),c(),V(" ",a.endDateAccessibleName,`
`),c(),pe("id",a._comparisonStartDateLabelId),c(),rt(" ",a.comparisonDateAccessibleName," ",a.startDateAccessibleName,`
`),c(),pe("id",a._comparisonEndDateLabelId),c(),rt(" ",a.comparisonDateAccessibleName," ",a.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Da(n){return n?.nodeName==="TD"}function Ca(n){let r;return Da(n)?r=n:Da(n.parentNode)?r=n.parentNode:Da(n.parentNode?.parentNode)&&(r=n.parentNode.parentNode),r?.getAttribute("data-mat-row")!=null?r:null}function wa(n,r,e){return e!==null&&r!==e&&n<e&&n===r}function ka(n,r,e){return r!==null&&r!==e&&n>=r&&n===e}function xa(n,r,e,t){return t&&r!==null&&e!==null&&r!==e&&n>=r&&n<=e}function rn(n){let r=n.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var Z=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e}},pt=(()=>{class n{selection;_adapter;_selectionChanged=new k;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Ua()};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),yr=(()=>{class n extends pt{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(Ya(B))};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var mn={provide:pt,useFactory:()=>s(pt,{optional:!0,skipSelf:!0})||new yr(s(B))};var pn=new O("MAT_DATE_RANGE_SELECTION_STRATEGY");var Ma=7,Dr=0,on=(()=>{class n{_changeDetectorRef=s(R);_dateFormats=s(ke,{optional:!0});_dateAdapter=s(B,{optional:!0});_dir=s(_e,{optional:!0});_rangeStrategy=s(pn,{optional:!0});_rerenderSubscription=ie.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Z?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new g;_userSelection=new g;dragStarted=new g;dragEnded=new g;activeDateChange=new g;_matCalendarBody;_monthLabel=f("");_weeks=f([]);_firstWeekOffset=f(0);_rangeStart=f(null);_rangeEnd=f(null);_comparisonRangeStart=f(null);_comparisonRangeEnd=f(null);_previewStart=f(null);_previewEnd=f(null);_isRange=f(!1);_todayDate=f(null);_weekdays=f([]);constructor(){s(Ie).load(He),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(xe(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),i,o;this._selected instanceof Z?(i=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):i=o=this._getDateInCurrentMonth(this._selected),(i!==t||o!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!z(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Ma+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Ma),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,i=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(i.start)),this._previewEnd.set(this._getCellCompareValue(i.end)),this.activeDrag&&a){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),i=this._dateAdapter.getDayOfWeekNames("long").map((o,p)=>({long:o,narrow:t[p],id:Dr++}));this._weekdays.set(i.slice(e).concat(i.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let i=0,o=this._firstWeekOffset();i<e;i++,o++){o==Ma&&(a.push([]),o=0);let p=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),i+1),u=this._shouldEnableDate(p),v=this._dateAdapter.format(p,this._dateFormats.display.dateA11yLabel),F=this.dateClass?this.dateClass(p,"month"):void 0;a[a.length-1].push(new mt(i+1,t[i],v,u,F,this._getCellCompareValue(p),p))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),i=this._dateAdapter.getDate(e);return new Date(t,a,i).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof Z?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,a){if(t&1&&Y(Xe,5),t&2){let i;M(i=S())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[J],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,a){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),oe(3,sr,5,2,"th",2,cn),d(),l(5,"tr",3),x(6,"th",4),d()(),l(7,"tbody",5),_("selectedValueChange",function(o){return a._dateSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("previewChange",function(o){return a._previewChanged(o)})("dragStarted",function(o){return a.dragStarted.emit(o)})("dragEnded",function(o){return a._dragEnded(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),d()()),t&2&&(c(3),se(a._weekdays()),c(4),b("label",a._monthLabel())("rows",a._weeks())("todayValue",a._todayDate())("startValue",a._rangeStart())("endValue",a._rangeEnd())("comparisonStart",a._comparisonRangeStart())("comparisonEnd",a._comparisonRangeEnd())("previewStart",a._previewStart())("previewEnd",a._previewEnd())("isRange",a._isRange())("labelMinRequiredCells",3)("activeCell",a._dateAdapter.getDate(a.activeDate)-1)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName))},dependencies:[Xe],encapsulation:2,changeDetection:0})}return n})(),$=24,Sa=4,sn=(()=>{class n{_changeDetectorRef=s(R);_dateAdapter=s(B,{optional:!0});_dir=s(_e,{optional:!0});_rerenderSubscription=ie.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),hn(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Z?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new g;yearSelected=new g;activeDateChange=new g;_matCalendarBody;_years=f([]);_todayYear=f(0);_selectedYear=f(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(xe(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-ct(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let i=0,o=[];i<$;i++)o.push(t+i),o.length==Sa&&(a.push(o.map(p=>this._createCellForYear(p))),o=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),i=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(i)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Sa);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Sa);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-ct(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,$-ct(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-$*10:-$);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?$*10:$);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return ct(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),i=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new mt(e,a,a,this._shouldEnableYear(e),i)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Z){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,a){if(t&1&&Y(Xe,5),t&2){let i;M(i=S())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),x(3,"th",2),d()(),l(4,"tbody",3),_("selectedValueChange",function(o){return a._yearSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),d()()),t&2&&(c(4),b("rows",a._years())("todayValue",a._todayYear())("startValue",a._selectedYear())("endValue",a._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",a._getActiveCell()))},dependencies:[Xe],encapsulation:2,changeDetection:0})}return n})();function hn(n,r,e,t,a){let i=n.getYear(r),o=n.getYear(e),p=un(n,t,a);return Math.floor((i-p)/$)===Math.floor((o-p)/$)}function ct(n,r,e,t){let a=n.getYear(r);return Cr(a-un(n,e,t),$)}function un(n,r,e){let t=0;return e?t=n.getYear(e)-$+1:r&&(t=n.getYear(r)),t}function Cr(n,r){return(n%r+r)%r}var ln=(()=>{class n{_changeDetectorRef=s(R);_dateFormats=s(ke,{optional:!0});_dateAdapter=s(B,{optional:!0});_dir=s(_e,{optional:!0});_rerenderSubscription=ie.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Z?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new g;monthSelected=new g;activeDateChange=new g;_matCalendarBody;_months=f([]);_yearLabel=f("");_todayMonth=f(null);_selectedMonth=f(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(xe(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let i=this._getDateFromMonth(t);this.selectedChange.emit(i)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(a,"year"):void 0;return new mt(e,t.toLocaleUpperCase(),i,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let i=a;this._dateAdapter.getMonth(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),i=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>i}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),i=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<i}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof Z?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,a){if(t&1&&Y(Xe,5),t&2){let i;M(i=S())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),x(3,"th",2),d()(),l(4,"tbody",3),_("selectedValueChange",function(o){return a._monthSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),d()()),t&2&&(c(4),b("label",a._yearLabel())("rows",a._months())("todayValue",a._todayMonth())("startValue",a._selectedMonth())("endValue",a._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",a._dateAdapter.getMonth(a.activeDate)))},dependencies:[Xe],encapsulation:2,changeDetection:0})}return n})(),_n=(()=>{class n{_intl=s(Ze);calendar=s(Aa);_dateAdapter=s(B,{optional:!0});_dateFormats=s(ke,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(Ie).load(He);let e=s(R);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-$))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:$))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):hn(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-ct(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+$-1,i=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1));return[i,o]}_periodButtonLabelId=s(de).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:lr,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,a){t&1&&(Ee(),l(0,"div",0)(1,"div",1)(2,"span",2),m(3),d(),l(4,"button",3),_("click",function(){return a.currentPeriodClicked()}),l(5,"span",4),m(6),d(),ce(),l(7,"svg",5),x(8,"polygon",6),d()(),it(),x(9,"div",7),he(10),l(11,"button",8),_("click",function(){return a.previousClicked()}),ce(),l(12,"svg",9),x(13,"path",10),d()(),it(),l(14,"button",11),_("click",function(){return a.nextClicked()}),ce(),l(15,"svg",9),x(16,"path",12),d()()()()),t&2&&(c(2),b("id",a._periodButtonLabelId),c(),y(a.periodButtonDescription),c(),A("aria-label",a.periodButtonLabel)("aria-describedby",a._periodButtonLabelId),c(2),y(a.periodButtonText),c(),T("mat-calendar-invert",a.calendar.currentView!=="month"),c(4),b("disabled",!a.previousEnabled())("matTooltip",a.prevButtonLabel),A("aria-label",a.prevButtonLabel),c(3),b("disabled",!a.nextEnabled())("matTooltip",a.nextButtonLabel),A("aria-label",a.nextButtonLabel))},dependencies:[ee,st,an],encapsulation:2,changeDetection:0})}return n})(),Aa=(()=>{class n{_dateAdapter=s(B,{optional:!0});_dateFormats=s(ke,{optional:!0});_changeDetectorRef=s(R);_elementRef=s(H);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof Z?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new g;yearSelected=new g;monthSelected=new g;viewChanged=new g(!0);_userSelection=new g;_userDragDrop=new g;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new k;constructor(){this._intlChanges=s(Ze).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new De(this.headerComponent||_n),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,i=t||a||e.dateFilter;if(i&&!i.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(na())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof Z||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,a){if(t&1&&Y(on,5)(ln,5)(sn,5),t&2){let i;M(i=S())&&(a.monthView=i.first),M(i=S())&&(a.yearView=i.first),M(i=S())&&(a.multiYearView=i.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[ue([mn]),J],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,a){if(t&1&&(Ae(0,dr,0,0,"ng-template",0),l(1,"div",1),E(2,cr,1,11,"mat-month-view",2)(3,mr,1,6,"mat-year-view",3)(4,pr,1,6,"mat-multi-year-view",3),d()),t&2){let i;b("cdkPortalOutlet",a._calendarHeaderPortal),c(2),I((i=a.currentView)==="month"?2:i==="year"?3:i==="multi-year"?4:-1)}},dependencies:[ze,ti,on,ln,sn],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})(),wr=new O("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(U);return()=>je(n)}}),gn=(()=>{class n{_elementRef=s(H);_animationsDisabled=q();_changeDetectorRef=s(R);_globalModel=s(pt);_dateAdapter=s(B);_ngZone=s(Me);_rangeSelectionStrategy=s(pn,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new k;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(Ie).load(He),this._closeButtonText=s(Ze).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=s(Se);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,i=t instanceof Z;if(i&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(o,this)}else a&&(i||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,a){if(t&1&&Y(Aa,5),t&2){let i;M(i=S())&&(a._calendar=i.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,a){t&2&&(le(a.color?"mat-"+a.color:""),T("mat-datepicker-content-touch",a.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!a._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,a){t&1&&(l(0,"div",0)(1,"mat-calendar",1),_("yearSelected",function(o){return a.datepicker._selectYear(o)})("monthSelected",function(o){return a.datepicker._selectMonth(o)})("viewChanged",function(o){return a.datepicker._viewChanged(o)})("_userSelection",function(o){return a._handleUserSelection(o)})("_userDragDrop",function(o){return a._handleUserDragDrop(o)}),d(),Ae(2,hr,0,0,"ng-template",2),l(3,"button",3),_("focus",function(){return a._closeButtonFocused=!0})("blur",function(){return a._closeButtonFocused=!1})("click",function(){return a.datepicker.close()}),m(4),d()()),t&2&&(T("mat-datepicker-content-container-with-custom-header",a.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",a._actionsPortal),A("aria-modal",!0)("aria-labelledby",a._dialogLabelId??void 0),c(),le(a.datepicker.panelClass),b("id",a.datepicker.id)("startAt",a.datepicker.startAt)("startView",a.datepicker.startView)("minDate",a.datepicker._getMinDate())("maxDate",a.datepicker._getMaxDate())("dateFilter",a.datepicker._getDateFilter())("headerComponent",a.datepicker.calendarHeaderComponent)("selected",a._getSelected())("dateClass",a.datepicker.dateClass)("comparisonStart",a.comparisonStart)("comparisonEnd",a.comparisonEnd)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName),c(),b("cdkPortalOutlet",a._actionsPortal),c(),T("cdk-visually-hidden",!a._closeButtonFocused),b("color",a.color||"primary"),c(),y(a._closeButtonText))},dependencies:[ni,Aa,ze,ee],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return n})(),dn=(()=>{class n{_injector=s(U);_viewContainerRef=s(bt);_dateAdapter=s(B,{optional:!0});_dir=s(_e,{optional:!0});_model=s(pt);_animationsDisabled=q();_scrollStrategy=s(wr);_inputStateChanges=ie.EMPTY;_document=s(Le);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new g;monthSelected=new g;viewChanged=new g(!0);dateClass;openedStream=new g;closedStream=new g;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=ci(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=s(de).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new k;_changeDetectorRef=s(R);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof fi&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=na(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:a,location:i}=this._componentRef;a._animationDone.pipe(ft(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||i.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),a._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new De(gn,this._viewContainerRef),a=this._overlayRef=Ue(this._injector,new It({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?gi(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(i=>{i&&i.preventDefault(),this.close()}),a.keydownEvents().subscribe(i=>{let o=i.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&i.preventDefault()}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||me(()=>{a.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Ot(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Tt(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",a=t==="start"?"end":"start",i=this.yPosition==="above"?"bottom":"top",o=i==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:i},{originX:t,originY:i,overlayX:t,overlayY:o},{originX:a,originY:o,overlayX:a,overlayY:i},{originX:a,originY:i,overlayX:a,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return fe(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(at(a=>a.keyCode===27&&!z(a)||this.datepickerInput&&z(a,"altKey")&&a.keyCode===38&&t.every(i=>!z(a,i)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=X({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",P],disabled:[2,"disabled","disabled",P],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",P],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",P]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[J]})}return n})(),fn=(()=>{class n extends dn{static \u0275fac=(()=>{let e;return function(a){return(e||(e=za(n)))(a||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[ue([mn,{provide:dn,useExisting:n}]),nt],decls:0,vars:0,template:function(t,a){},encapsulation:2,changeDetection:0})}return n})(),Qe=class{target;targetElement;value=null;constructor(r,e){this.target=r,this.targetElement=e,this.value=this.target.value}},kr=(()=>{class n{_elementRef=s(H);_dateAdapter=s(B,{optional:!0});_dateFormats=s(ke,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_disabled;dateChange=new g;dateInput=new g;stateChanges=new k;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=ie.EMPTY;_localeSubscription=ie.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new Qe(this,this._elementRef.nativeElement)),this.dateChange.emit(new Qe(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){xr(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];z(e,"altKey")&&e.keyCode===40&&t.every(i=>!z(e,i))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,a=this._lastValueValid,i=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(i),i=this._dateAdapter.getValidDateOrNull(i);let o=!this._dateAdapter.sameDate(i,this.value);!i||o?this._cvaOnChange(i):(t&&!this.value&&this._cvaOnChange(i),a!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(i),this.dateInput.emit(new Qe(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new Qe(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=X({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",P]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[J]})}return n})();function xr(n,r){let e=Object.keys(n);for(let t of e){let{previousValue:a,currentValue:i}=n[t];if(r.isDateInstance(a)&&r.isDateInstance(i)){if(!r.sameDate(a,i))return!0}else return!0}return!1}var Mr={provide:Ri,useExisting:ta(()=>Ut),multi:!0},Sr={provide:Fi,useExisting:ta(()=>Ut),multi:!0},Ut=(()=>{class n extends kr{_formField=s(Nt,{optional:!0});_closedSubscription=ie.EMPTY;_openedSubscription=ie.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=f(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=Te.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=X({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,a){t&1&&_("input",function(o){return a._onInput(o)})("change",function(){return a._onChange()})("blur",function(){return a._onBlur()})("keydown",function(o){return a._onKeydown(o)}),t&2&&(pe("disabled",a.disabled),A("aria-haspopup",a._datepicker?"dialog":null)("aria-owns",a._ariaOwns())("min",a.min?a._dateAdapter.toIso8601(a.min):null)("max",a.max?a._dateAdapter.toIso8601(a.max):null)("data-mat-calendar",a._datepicker?a._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[ue([Mr,Sr,{provide:ji,useExisting:n}]),nt]})}return n})(),Ar=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=X({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),Ta=(()=>{class n{_intl=s(Ze);_changeDetectorRef=s(R);_stateChanges=ie.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new xt("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:Fe(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:Fe(),a=this.datepicker?fe(this.datepicker.openedStream,this.datepicker.closedStream):Fe();this._stateChanges.unsubscribe(),this._stateChanges=fe(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,a,i){if(t&1&&yt(i,Ar,5),t&2){let o;M(o=S())&&(a._customIcon=o.first)}},viewQuery:function(t,a){if(t&1&&Y(ur,5),t&2){let i;M(i=S())&&(a._button=i.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,a){t&1&&_("click",function(o){return a._open(o)}),t&2&&(A("tabindex",null)("data-mat-calendar",a.datepicker?a.datepicker.id:null),T("mat-datepicker-toggle-active",a.datepicker&&a.datepicker.opened)("mat-accent",a.datepicker&&a.datepicker.color==="accent")("mat-warn",a.datepicker&&a.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",P],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[J],ngContentSelectors:gr,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,a){t&1&&(Ee(_r),l(0,"button",1,0),E(2,fr,2,0,":svg:svg",2),he(3),d()),t&2&&(b("tabIndex",a.disabled?-1:a.tabIndex)("disabled",a.disabled)("disableRipple",a.disableRipple),A("aria-haspopup",a.datepicker?"dialog":null)("aria-label",a.ariaLabel||a._intl.openCalendarLabel)("aria-expanded",a.datepicker?a.datepicker.opened:null),c(2),I(a._customIcon?-1:2))},dependencies:[st],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var bn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=re({type:n});static \u0275inj=ne({providers:[Ze],imports:[ge,lt,ri,da,gn,Ta,_n,be,Et]})}return n})();var Ir=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,Tr=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Oa(n,r){let e=Array(n);for(let t=0;t<n;t++)e[t]=r(t);return e}var Or=(()=>{class n extends B{_matDateLocale=s(ya,{optional:!0});constructor(){super();let e=s(ya,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Oa(12,a=>this._format(t,new Date(2017,a,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Oa(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Oa(7,a=>this._format(t,new Date(2017,0,a+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,a){let i=this._createDateWithOverflow(e,t,a);return i.getMonth()!=t,i}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let a=new Intl.DateTimeFormat(this.locale,gt(L({},t),{timeZone:"utc"}));return this._format(a,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let a=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(a)!=((this.getMonth(e)+t)%12+12)%12&&(a=this._createDateWithOverflow(this.getYear(a),this.getMonth(a),0)),a}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(Ir.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,a,i){let o=this.clone(e);return o.setHours(t,a,i,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let a=e.trim();if(a.length===0)return null;let i=this._parseTimeString(a);if(i===null){let o=a.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(i=this._parseTimeString(o))}return i||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,a){let i=new Date;return i.setFullYear(e,t,a),i.setHours(0,0,0,0),i}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let a=new Date;return a.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),a.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(a)}_parseTimeString(e){let t=e.toUpperCase().match(Tr);if(t){let a=parseInt(t[1]),i=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),p=t[4];if(a===12?a=p==="AM"?0:a:p==="PM"&&(a+=12),Va(a,0,23)&&Va(i,0,59)&&(o==null||Va(o,0,59)))return this.setTime(this.today(),a,i,o||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();function Va(n,r,e){return!isNaN(n)&&n>=r&&n<=e}var Vr={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};function vn(n=Vr){return[{provide:B,useClass:Or},{provide:ke,useValue:n}]}function Rr(n,r){if(n&1){let e=K();l(0,"div",1)(1,"button",2),_("click",function(){C(e);let a=h();return w(a.action())}),m(2),d()()}if(n&2){let e=h();c(2),V(" ",e.data.action," ")}}var Pr=["label"];function Fr(n,r){}var Lr=Math.pow(2,31)-1,Oe=class{_overlayRef;instance;containerInstance;_afterDismissed=new k;_afterOpened=new k;_onAction=new k;_durationTimeoutId;_dismissedByAction=!1;constructor(r,e){this._overlayRef=e,this.containerInstance=r,r._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(r){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(r,Lr))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Gt=new O("MatSnackBarData"),Je=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Nr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=X({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Br=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=X({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Hr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=X({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Yr=(()=>{class n{snackBarRef=s(Oe);data=s(Gt);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,a){t&1&&(l(0,"div",0),m(1),d(),E(2,Rr,3,1,"div",1)),t&2&&(c(),V(" ",a.data.message,`
`),c(),I(a.hasAction?2:-1))},dependencies:[ee,Nr,Br,Hr],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ra="_mat-snack-bar-enter",Pa="_mat-snack-bar-exit",zr=(()=>{class n extends _i{_ngZone=s(Me);_elementRef=s(H);_changeDetectorRef=s(R);_platform=s(Ye);_animationsDisabled=q();snackBarConfig=s(Je);_document=s(Le);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(U);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new k;_onExit=new k;_onEnter=new k;_animationState="void";_live;_label;_role;_liveElementId=s(de).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Pa?this._completeExit():e===Ra&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?me(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ra)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Ra)},200)))}exit(){return this._destroyed?Fe(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?me(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Pa)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Pa),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let a=this._label.nativeElement,i="mdc-snackbar__label";a.classList.toggle(i,!a.querySelector(`.${i}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<t.length;a++){let i=t[a],o=i.getAttribute("aria-owns");this._trackedModals.add(i),o?o.indexOf(e)===-1&&i.setAttribute("aria-owns",o+" "+e):i.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let a=t.replace(this._liveElementId,"").trim();a.length>0?e.setAttribute("aria-owns",a):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),a=e.querySelector("[aria-live]");if(t&&a){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(i=document.activeElement),t.removeAttribute("aria-hidden"),a.appendChild(t),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,a){if(t&1&&Y(ze,7)(Pr,7),t&2){let i;M(i=S())&&(a._portalOutlet=i.first),M(i=S())&&(a._label=i.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,a){t&1&&_("animationend",function(o){return a.onAnimationEnd(o.animationName)})("animationcancel",function(o){return a.onAnimationEnd(o.animationName)}),t&2&&T("mat-snack-bar-container-enter",a._animationState==="visible")("mat-snack-bar-container-exit",a._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!a._animationsDisabled)},features:[nt],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,a){t&1&&(l(0,"div",1)(1,"div",2,0)(3,"div",3),Ae(4,Fr,0,0,"ng-template",4),d(),x(5,"div"),d()()),t&2&&(c(5),A("aria-live",a._live)("role",a._role)("id",a._liveElementId))},dependencies:[ze],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),jr=new O("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Je}),yn=(()=>{class n{_live=s(St);_injector=s(U);_breakpointObserver=s(ii);_parentSnackBar=s(n,{optional:!0,skipSelf:!0});_defaultConfig=s(jr);_animationsDisabled=q();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Yr;snackBarContainerComponent=zr;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",a){let i=L(L({},this._defaultConfig),a);return i.data={message:e,action:t},i.announcementMessage===e&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let a=t&&t.viewContainerRef&&t.viewContainerRef.injector,i=U.create({parent:a||this._injector,providers:[{provide:Je,useValue:t}]}),o=new De(this.snackBarContainerComponent,t.viewContainerRef,i),p=e.attach(o);return p.instance.snackBarConfig=t,p.instance}_attach(e,t){let a=L(L(L({},new Je),this._defaultConfig),t),i=this._createOverlay(a),o=this._attachSnackBarContainer(i,a),p=new Oe(o,i);if(e instanceof aa){let u=new la(e,null,{$implicit:a.data,snackBarRef:p});p.instance=o.attachTemplatePortal(u)}else{let u=this._createInjector(a,p),v=new De(e,void 0,u),F=o.attachComponentPortal(v);p.instance=F.instance}return this._breakpointObserver.observe(di.HandsetPortrait).pipe(N(i.detachments())).subscribe(u=>{i.overlayElement.classList.toggle(this.handsetCssClass,u.matches)}),a.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness)}),this._animateSnackBar(p,a),this._openedSnackBarRef=p,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new It;t.direction=e.direction;let a=Ot(this._injector),i=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!i||e.horizontalPosition==="end"&&i,p=!o&&e.horizontalPosition!=="center";return o?a.left("0"):p?a.right("0"):a.centerHorizontally(),e.verticalPosition==="top"?a.top("0"):a.bottom("0"),t.positionStrategy=a,t.disableAnimations=this._animationsDisabled,Ue(this._injector,t)}_createInjector(e,t){let a=e&&e.viewContainerRef&&e.viewContainerRef.injector;return U.create({parent:a||this._injector,providers:[{provide:Oe,useValue:t},{provide:Gt,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ur={info:"info",warning:"warning",error:"error"},Kt=class n{data=s(Gt);snackBarRef=s(Oe);icon=Ur[this.data.severity];close(){this.snackBarRef.dismiss()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-toast-message"]],decls:8,vars:4,consts:[[1,"toast-content"],[1,"toast-icon"],[1,"toast-message"],["type","button","aria-label","Dismiss",1,"toast-close",3,"click"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"mat-icon",1),m(2),d(),l(3,"span",2),m(4),d(),l(5,"button",3),_("click",function(){return t.close()}),l(6,"mat-icon"),m(7,"close"),d()()()),e&2&&(le("toast-"+t.data.severity),c(2),y(t.icon),c(2),y(t.data.message))},dependencies:[ye,ve],styles:[".toast-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;color:#fff;min-width:260px;max-width:420px;box-shadow:0 4px 12px #0003}.toast-icon[_ngcontent-%COMP%]{flex:0 0 auto}.toast-message[_ngcontent-%COMP%]{flex:1 1 auto;font-size:14px;line-height:1.4;word-break:break-word}.toast-close[_ngcontent-%COMP%]{flex:0 0 auto;background:none;border:none;padding:4px;margin:-4px -4px -4px 0;cursor:pointer;display:flex;align-items:center;color:inherit;opacity:.85}.toast-close[_ngcontent-%COMP%]:hover{opacity:1}.toast-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.toast-info[_ngcontent-%COMP%]{background-color:#1976d2}.toast-warning[_ngcontent-%COMP%]{background-color:#f57c00}.toast-error[_ngcontent-%COMP%]{background-color:#c62828}"]})};var Gr=2500,Wt=class n{snackBar=s(yn);info(r){this.show(r,"info")}warning(r){this.show(r,"warning")}error(r){this.show(r,"error")}show(r,e="info"){this.snackBar.openFromComponent(Kt,{data:{message:r,severity:e},duration:Gr,horizontalPosition:"end",verticalPosition:"top",panelClass:["app-toast-panel",`app-toast-panel-${e}`]})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac,providedIn:"root"})};var qt=class{bytes;view;sectorSize;miniSectorSize;headerRegionSize;miniStreamCutoff;firstDirSector;firstMiniFatSector;numMiniFatSectors;firstDifatSector;numFatSectors;difat;fat=[];miniFat=[];directory=[];miniStreamData=new Uint8Array(0);constructor(r){this.bytes=new Uint8Array(r),this.view=new DataView(r),this.parseHeader(),this.buildFat(),this.buildDirectory(),this.buildMiniFat(),this.buildMiniStream()}getAllEntries(){return this.directory.filter(r=>r.type!==0)}getRoot(){return this.directory[0]}getChildren(r){let e=[],t=a=>{if(a===-1)return;let i=this.directory[a];i&&(t(i.leftSibling),e.push(i),t(i.rightSibling))};return t(r.child),e}readStream(r){if(r.type!==2)throw new Error(`CFB directory entry "${r.name}" is not a stream`);return r.size===0?new Uint8Array(0):r.size<this.miniStreamCutoff?this.readFromMiniSectors(r.startSector,r.size):this.readFromRegularSectors(r.startSector,r.size)}parseHeader(){let r=[208,207,17,224,161,177,26,225];for(let a=0;a<8;a++)if(this.bytes[a]!==r[a])throw new Error("Not a valid .msg file: missing Compound File Binary signature");let e=this.view.getUint16(30,!0);this.sectorSize=1<<e;let t=this.view.getUint16(32,!0);this.miniSectorSize=1<<t,this.headerRegionSize=Math.max(512,this.sectorSize),this.numFatSectors=this.view.getUint32(44,!0),this.firstDirSector=this.view.getUint32(48,!0),this.miniStreamCutoff=this.view.getUint32(56,!0),this.firstMiniFatSector=this.view.getUint32(60,!0),this.numMiniFatSectors=this.view.getUint32(64,!0),this.firstDifatSector=this.view.getUint32(68,!0),this.difat=[];for(let a=0;a<109;a++)this.difat.push(this.view.getUint32(76+a*4,!0))}sectorOffset(r){return this.headerRegionSize+r*this.sectorSize}readSector(r){let e=this.sectorOffset(r);return this.bytes.slice(e,e+this.sectorSize)}buildFat(){let r=[];for(let a=0;a<109&&r.length<this.numFatSectors;a++){let i=this.difat[a];i!==4294967295&&r.push(i)}let e=this.firstDifatSector,t=this.sectorSize/4;for(;e!==4294967294&&e!==4294967295&&r.length<this.numFatSectors;){let a=this.readSector(e),i=new DataView(a.buffer,a.byteOffset,a.byteLength);for(let o=0;o<t-1&&r.length<this.numFatSectors;o++){let p=i.getUint32(o*4,!0);p!==4294967295&&r.push(p)}e=i.getUint32((t-1)*4,!0)}this.fat=[];for(let a of r){let i=this.readSector(a),o=new DataView(i.buffer,i.byteOffset,i.byteLength);for(let p=0;p<t;p++)this.fat.push(o.getUint32(p*4,!0))}}getChain(r,e){let t=[],a=r,i=0;for(;a!==4294967294&&a!==4294967295;)if(t.push(a),a=e[a],++i>2e6)throw new Error("Sector chain exceeded a sane length - file may be corrupt");return t}readFromRegularSectors(r,e){let t=this.getChain(r,this.fat),a=new Uint8Array(e),i=0;for(let o of t){let p=Math.min(this.sectorSize,e-i);if(p<=0)break;a.set(this.readSector(o).subarray(0,p),i),i+=p}return a}buildDirectory(){let r=this.getChain(this.firstDirSector,this.fat),e=this.sectorSize/128;this.directory=[];let t=0;for(let a of r){let i=this.readSector(a),o=new DataView(i.buffer,i.byteOffset,i.byteLength);for(let p=0;p<e;p++){let u=p*128,v=o.getUint16(u+64,!0),F="";if(v>2){let _t=i.subarray(u,u+v-2);F=new TextDecoder("utf-16le").decode(_t)}let et=i[u+66],Ve=o.getInt32(u+68,!0),Re=o.getInt32(u+72,!0),ht=o.getInt32(u+76,!0),tt=o.getUint32(u+116,!0),Pe=o.getUint32(u+120,!0),ut=o.getUint32(u+124,!0)*4294967296+Pe;this.directory.push({index:t,name:F,type:et,leftSibling:Ve,rightSibling:Re,child:ht,startSector:tt,size:ut}),t++}}}buildMiniFat(){if(this.miniFat=[],this.firstMiniFatSector===4294967294||this.numMiniFatSectors===0)return;let r=this.getChain(this.firstMiniFatSector,this.fat),e=this.sectorSize/4;for(let t of r){let a=this.readSector(t),i=new DataView(a.buffer,a.byteOffset,a.byteLength);for(let o=0;o<e;o++)this.miniFat.push(i.getUint32(o*4,!0))}}buildMiniStream(){let r=this.getRoot();if(!r||r.size===0){this.miniStreamData=new Uint8Array(0);return}this.miniStreamData=this.readFromRegularSectors(r.startSector,r.size)}readFromMiniSectors(r,e){let t=new Uint8Array(e),a=r,i=0,o=0;for(;a!==4294967294&&a!==4294967295&&i<e;){let p=a*this.miniSectorSize,u=Math.min(this.miniSectorSize,e-i);if(t.set(this.miniStreamData.subarray(p,p+u),i),i+=u,a=this.miniFat[a],++o>2e6)throw new Error("Mini sector chain exceeded a sane length - file may be corrupt")}return t}};var Kr=55,Wr=3098,qr=3103,$r=23809,Qr=57,Xr=3590,Zr=4096,Jr=3093,eo=12289,to=12291,ao=14846,io=3,no=64,ro=31,oo=30,so=32,lo=8,co=1,mo=2,po=/^__recip_version1\.0_#[0-9A-Fa-f]{8}$/,$t=class n{logger=s(Ht);async parse(r){try{let e=await r.arrayBuffer(),t=new qt(e),a=t.getRoot(),i=t.getChildren(a),o=this.readString(t,i,Kr)??"",p=this.readString(t,i,Wr)??"",u=this.readString(t,i,$r)??this.readString(t,i,qr)??"",v=this.normalizeBody(this.readString(t,i,Zr)??""),F=this.readPropertiesStream(t,i,so),et=this.readSysTimeIso(F,Qr)??this.readSysTimeIso(F,Xr),Ve=[],Re=[];for(let tt of i){if(tt.type!==1||!po.test(tt.name))continue;let Pe=t.getChildren(tt),Na=this.readPropertiesStream(t,Pe,lo),ut=this.readLong(Na,Jr),_t={name:this.readString(t,Pe,eo)??"",email:this.readString(t,Pe,ao)??this.readString(t,Pe,to)??""};ut===co?Ve.push(_t):ut===mo&&Re.push(_t)}let ht={subject:o,from:{name:p,email:u},to:Ve,cc:Re,date:et,body:v};return this.logger.debugLog(`FileParserMsg: parsed "${r.name}"`,ht),ht}catch(e){return this.logger.debugLog(`FileParserMsg: failed to parse "${r.name}"`,e),null}}normalizeBody(r){let e=`\r
\r
 \r
\r
`,t=`\r
\r
`,a=r;for(;a.includes(e);)a=a.split(e).join(t);return a}readString(r,e,t){let a=t.toString(16).padStart(4,"0").toUpperCase(),i=`__substg1.0_${a}${ro.toString(16).padStart(4,"0").toUpperCase()}`,o=e.find(v=>v.type===2&&v.name===i);if(o){let v=r.readStream(o);return new TextDecoder("utf-16le").decode(v).replace(/\u0000+$/,"")}let p=`__substg1.0_${a}${oo.toString(16).padStart(4,"0").toUpperCase()}`,u=e.find(v=>v.type===2&&v.name===p);if(u){let v=r.readStream(u);return new TextDecoder("windows-1252").decode(v).replace(/\u0000+$/,"")}return null}readPropertiesStream(r,e,t){let a=new Map,i=e.find(v=>v.type===2&&v.name==="__properties_version1.0");if(!i)return a;let o=r.readStream(i),p=new DataView(o.buffer,o.byteOffset,o.byteLength),u=Math.floor((o.length-t)/16);for(let v=0;v<u;v++){let F=t+v*16,et=p.getUint16(F,!0),Ve=p.getUint16(F+2,!0),Re=o.slice(F+8,F+16);a.set(Ve,{propType:et,value:Re})}return a}readLong(r,e){let t=r.get(e);return!t||t.propType!==io?null:new DataView(t.value.buffer,t.value.byteOffset,t.value.byteLength).getInt32(0,!0)}readSysTimeIso(r,e){let t=r.get(e);if(!t||t.propType!==no)return null;let a=new DataView(t.value.buffer,t.value.byteOffset,t.value.byteLength),i=a.getUint32(0,!0),o=a.getUint32(4,!0),p=BigInt(o)<<32n|BigInt(i),v=Number((p-116444736000000000n)/10000n);return new Date(v).toISOString()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac,providedIn:"root"})};function uo(n,r){n&1&&(l(0,"div",2),m(1,"Nothing to show for this email."),d())}function _o(n,r){if(n&1&&(l(0,"div",6)(1,"span",7),m(2,"To"),d(),l(3,"span",8),m(4),d()()),n&2){let e=h(2);c(4),y(e.formatRecipients(e.data.to))}}function go(n,r){if(n&1&&(l(0,"div",6)(1,"span",7),m(2,"Cc"),d(),l(3,"span",8),m(4),d()()),n&2){let e=h(2);c(4),y(e.formatRecipients(e.data.cc))}}function fo(n,r){if(n&1&&(l(0,"div",6)(1,"span",7),m(2,"Date"),d(),l(3,"span",8),m(4),Be(5,"date"),d()()),n&2){let e=h(2);c(4),y(ot(5,1,e.data.date,"dd MMM y, HH:mm"))}}function bo(n,r){if(n&1&&(l(0,"div",5)(1,"div",6)(2,"span",7),m(3,"From"),d(),l(4,"span",8),m(5),d()(),E(6,_o,5,1,"div",6),E(7,go,5,1,"div",6),E(8,fo,6,4,"div",6),d(),l(9,"div",9),m(10),d()),n&2){let e=h();c(5),rt("",e.data.from.name," <",e.data.from.email,">"),c(),I(e.data.to.length>0?6:-1),c(),I(e.data.cc.length>0?7:-1),c(),I(e.data.date?8:-1),c(2),y(e.data.body)}}var Qt=class n{data=s(Vt);formatRecipients(r){return r.map(e=>e.name||e.email).join("; ")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-email-dialog"]],decls:12,vars:2,consts:[["mat-dialog-title",""],[1,"email-dialog-content"],[1,"no-content"],["align","end"],["mat-button","","mat-dialog-close",""],[1,"email-meta"],[1,"email-meta-row"],[1,"email-meta-label"],[1,"email-meta-value"],[1,"email-body"]],template:function(e,t){e&1&&(l(0,"h2",0)(1,"mat-icon"),m(2,"mail"),d(),m(3),d(),l(4,"mat-dialog-content",1),E(5,uo,2,0,"div",2)(6,bo,11,6),d(),l(7,"mat-dialog-actions",3)(8,"button",4)(9,"mat-icon"),m(10,"close"),d(),m(11," Close "),d()()),e&2&&(c(3),V(" ",t.data.subject||"(no subject)",`
`),c(2),I(!t.data.body&&t.data.to.length===0&&t.data.cc.length===0&&!t.data.date?5:6))},dependencies:[Lt,Di,Rt,Ft,Pt,ge,ee,ye,ve,Mt],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}mat-dialog-content[_ngcontent-%COMP%]{min-height:300px;max-height:60vh}.no-content[_ngcontent-%COMP%]{text-align:center;color:var(--mat-sys-on-surface-variant);padding:48px 16px;font-size:16px}.email-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px;margin-bottom:8px}.email-meta-row[_ngcontent-%COMP%]{display:flex;gap:12px;padding:12px;background-color:var(--mat-sys-surface-container-low);font-size:13px;border-radius:4px}.email-meta-label[_ngcontent-%COMP%]{flex:0 0 40px;color:var(--mat-sys-primary);font-weight:600}.email-meta-value[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface);word-break:break-word}.email-body[_ngcontent-%COMP%]{margin:8px 0 0;padding:12px;background-color:var(--mat-sys-surface-container);border-radius:4px;font-size:13px;line-height:1.5;color:var(--mat-sys-on-surface-variant);border-left:3px solid var(--mat-sys-primary);white-space:pre-wrap;word-break:break-word}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})};var Xt=class n{data=s(Vt);dialogRef=s(vi);confirm(){this.dialogRef.close(!0)}cancel(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-confirm-dialog"]],decls:16,vars:5,consts:[["mat-dialog-title",""],[1,"confirm-message"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,t){e&1&&(l(0,"h2",0)(1,"mat-icon"),m(2),d(),m(3),d(),l(4,"mat-dialog-content")(5,"p",1),m(6),d()(),l(7,"mat-dialog-actions",2)(8,"button",3),_("click",function(){return t.cancel()}),l(9,"mat-icon"),m(10,"close"),d(),m(11),d(),l(12,"button",4),_("click",function(){return t.confirm()}),l(13,"mat-icon"),m(14,"delete"),d(),m(15),d()()),e&2&&(c(2),y(t.data.icon||"warning"),c(),V(" ",t.data.title,`
`),c(3),y(t.data.message),c(5),V(" ",t.data.cancelText||"Cancel"," "),c(4),V(" ",t.data.confirmText||"Delete"," "))},dependencies:[Lt,Rt,Ft,Pt,ge,ee,ye,ve],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.confirm-message[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--mat-sys-on-surface-variant)}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})};var Cn=/(https?:\/\/[^\s<>"']+)/g,Zt=class n{transform(r){if(!r)return"";let e="",t=0,a;for(Cn.lastIndex=0;(a=Cn.exec(r))!==null;){let i=a[0],o=a.index;e+=this.escapeHtml(r.slice(t,o)),e+=this.buildLink(i),t=o+i.length}return e+=this.escapeHtml(r.slice(t)),e}buildLink(r){let e=this.extractDomain(r),t=this.escapeHtml(r),a=this.escapeHtml(e);return`<a href="${t}" target="_blank" rel="noopener noreferrer">${a}</a>`}extractDomain(r){try{return new URL(r).hostname}catch{return r}}escapeHtml(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}static \u0275fac=function(e){return new(e||n)};static \u0275pipe=Ga({name:"linkify",type:n,pure:!0})};var vo=()=>[],yo=(n,r)=>r.Id,kn=(n,r)=>r.Guid,Do=(n,r)=>r.FileName;function Co(n,r){n&1&&x(0,"mat-progress-bar",2)}function wo(n,r){if(n&1&&(l(0,"mat-option",15),m(1),d()),n&2){let e=r.$implicit;b("value",e),c(),y(e)}}function ko(n,r){if(n&1&&(l(0,"mat-option",15),m(1),d()),n&2){let e=r.$implicit;b("value",e.Id),c(),y(e.Title)}}function xo(n,r){if(n&1){let e=K();l(0,"div",36),_("click",function(){let a=C(e).$implicit,i=h(3);return w(i.openEmailDialog(a))}),l(1,"mat-icon"),m(2,"mail"),d(),l(3,"span",37),m(4),Be(5,"date"),d(),l(6,"span",38),m(7),d()()}if(n&2){let e=r.$implicit;c(4),y(ot(5,2,e.date,"dd MMM y")),c(3),y(e.subject)}}function Mo(n,r){if(n&1){let e=K();l(0,"div",36),_("click",function(){let a=C(e).$implicit,i=h(3);return w(i.onDocumentClick(a))}),ce(),l(1,"svg",39),x(2,"path"),d(),it(),l(3,"span",38),m(4),d()()}if(n&2){let e,t,a=r.$implicit,i=h(3);c(2),A("d",(e=i.getFileTypeIcon(i.getDocExtension(a.FileName)))==null?null:e.path)("fill",(t=i.getFileTypeIcon(i.getDocExtension(a.FileName)))==null?null:t.color),c(2),y(a.OriginalName)}}function So(n,r){if(n&1&&(l(0,"div",34),oe(1,xo,8,5,"div",35,kn),oe(3,Mo,5,3,"div",35,Do),d()),n&2){let e=h().$implicit,t=h();c(),se(t.getEmailsForComment(e.Guid)),c(2),se(e.Docs??$a(0,vo))}}function Ao(n,r){if(n&1){let e=K();l(0,"div",28),_("dragover",function(a){let i=C(e).$implicit,o=h();return w(o.onCommentDragOver(a,i))})("dragleave",function(){let a=C(e).$implicit,i=h();return w(i.onCommentDragLeave(a))})("drop",function(a){let i=C(e).$implicit,o=h();return w(o.onCommentDrop(a,i))}),l(1,"div",29)(2,"span",30),m(3),d(),l(4,"button",31),_("click",function(){let a=C(e).$implicit,i=h();return w(i.deleteComment(a))}),l(5,"mat-icon"),m(6,"delete"),d()()(),x(7,"p",32),Be(8,"linkify"),l(9,"span",33),m(10),Be(11,"date"),d(),E(12,So,5,1,"div",34),d()}if(n&2){let e=r.$implicit,t=h();T("drag-over",t.dragOverCommentGuid()===e.Guid),c(3),y(e.Author),c(),b("disabled",t.isLoading()),c(3),b("innerHTML",Qa(8,7,e.Text),ja),c(3),y(ot(11,9,e.Timestamp,"dd MMM y, HH:mm")),c(2),I(t.getEmailsForComment(e.Guid).length>0||e.Docs&&e.Docs.length>0?12:-1)}}function Eo(n,r){n&1&&(l(0,"p",23),m(1,"No comments yet."),d())}var Io=["queued","open","closed"],To=["long","deger","kajtar","steffensen","odorico","ralea"],Oo={doc:{path:"M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#2b579a"},docx:{path:"M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#2b579a"},xlsx:{path:"M16.2,17H14.2L12,13.2L9.8,17H7.8L11,12L7.8,7H9.8L12,10.8L14.2,7H16.2L13,12M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#217346"},pdf:{path:"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z",color:"#c62828"},ppt:{path:"M9.8,13.4H12.3C13.8,13.4 14.46,13.12 15.1,12.58C15.74,12.03 16,11.25 16,10.23C16,9.26 15.75,8.5 15.1,7.88C14.45,7.29 13.83,7 12.3,7H8V17H9.8V13.4M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M9.8,12V8.4H12.1C12.76,8.4 13.27,8.65 13.6,9C13.93,9.35 14.1,9.72 14.1,10.24C14.1,10.8 13.92,11.19 13.6,11.5C13.28,11.81 12.9,12 12.22,12H9.8Z",color:"#d24726"},pptx:{path:"M9.8,13.4H12.3C13.8,13.4 14.46,13.12 15.1,12.58C15.74,12.03 16,11.25 16,10.23C16,9.26 15.75,8.5 15.1,7.88C14.45,7.29 13.83,7 12.3,7H8V17H9.8V13.4M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M9.8,12V8.4H12.1C12.76,8.4 13.27,8.65 13.6,9C13.93,9.35 14.1,9.72 14.1,10.24C14.1,10.8 13.92,11.19 13.6,11.5C13.28,11.81 12.9,12 12.22,12H9.8Z",color:"#d24726"}},wn=class n{logger=s(Ht);router=s(Za);fb=s(Yi);dataService=s(qi);fileParserMsg=s($t);dialog=s(yi);toast=s(Wt);guid;isLoading=f(!1);topic=f(null);comments=f([]);emails=f([]);dragOverCommentGuid=f(null);siteUsers=f([]);statusOptions=Io;topicForm=this.fb.group({title:["",Te.required],description:[""],status:["queued",Te.required],owner:[null],closed:[null]});initialized=!1;async ngOnInit(){this.logger.debugLog("Topic component initialized",{guid:this.guid}),this.topicForm.get("status").valueChanges.subscribe(r=>{r==="closed"&&this.topicForm.get("closed").setValue(new Date,{emitEvent:!1})}),this.isLoading.set(!0);try{await this.dataService.ready,this.loadTopic(),this.loadComments(),this.loadEmails(),this.loadSiteUsers(),this.initialized=!0}finally{this.isLoading.set(!1)}}ngOnChanges(r){this.initialized&&r.guid&&!r.guid.firstChange&&(this.loadTopic(),this.loadComments(),this.loadEmails())}loadTopic(){let e=this.dataService.getItems("Topic").find(t=>t.Guid===this.guid)??null;this.topic.set(e),e?this.topicForm.setValue({title:e.Title??"",description:e.Description??"",status:e.Status??"queued",owner:e.Owner?Number(e.Owner):null,closed:e.Closed?new Date(e.Closed):null},{emitEvent:!1}):this.topicForm.reset({title:"",description:"",status:"queued",owner:null,closed:null},{emitEvent:!1})}loadSiteUsers(){let e=this.dataService.getItems("siteUsers").filter(t=>{let a=(t.Title??"").toLowerCase();return To.some(i=>a.includes(i.toLowerCase()))});this.siteUsers.set(e)}async saveTopic(){let r=this.topic();if(!r||this.topicForm.invalid)return;let{title:e,description:t,status:a,owner:i,closed:o}=this.topicForm.getRawValue(),v=r,{Id:p}=v,u=Ba(v,["Id"]);this.isLoading.set(!0);try{await this.dataService.updateItem("Topic",r.Id,gt(L({},u),{Title:e,Description:t,Status:a,Owner:i,Closed:o?o.getTime():null})),this.loadTopic(),this.logger.debugLog("Topic details saved",{guid:this.guid})}catch(F){this.logger.debugLog("Failed to save topic details",F)}finally{this.isLoading.set(!1)}}onCommentDragOver(r,e){r.preventDefault(),this.dragOverCommentGuid.set(e.Guid)}onCommentDragLeave(r){this.dragOverCommentGuid()===r.Guid&&this.dragOverCommentGuid.set(null)}async onCommentDrop(r,e){r.preventDefault(),this.dragOverCommentGuid.set(null);let t=r.dataTransfer?.files;if(!(!t||t.length===0))for(let a=0;a<t.length;a++)await this.handleDroppedFile(t[a],e)}async handleDroppedFile(r,e){let t=this.getFileExtension(r);switch(this.resolveFileKind(r,t)){case"msg":{this.logger.debugLog("MSG file dropped on comment",{comment:e.Guid,fileName:r.name});let i=await this.fileParserMsg.parse(r);i&&await this.saveEmail(e,i);break}case"doc":case"docx":case"xlsx":case"pdf":case"ppt":case"pptx":await this.saveDocument(e,r);break;default:{let i=t?`.${t}`:r.name;this.logger.debugLog("Dropped file is not a supported file type - ignoring",{comment:e.Guid,fileName:r.name,fileType:r.type}),this.toast.error(`File type ${i} not allowed`);break}}}getFileExtension(r){let e=r.name.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}getFileTypeIcon(r){return Oo[r]??null}getDocExtension(r){let e=r.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}onDocumentClick(r){this.logger.debugLog("Document clicked - viewer not yet implemented",{fileName:r.FileName,originalName:r.OriginalName})}resolveFileKind(r,e){return e==="msg"||r.type==="application/vnd.ms-outlook"?"msg":e}async saveDocument(r,e){this.isLoading.set(!0);try{let{fileName:t,originalName:a}=await this.dataService.addDocument("Comment",r,e);this.loadComments(),this.logger.debugLog("Document uploaded and linked to comment",{comment:r.Guid,fileName:t,originalName:a})}catch(t){this.logger.debugLog("Failed to upload document",t)}finally{this.isLoading.set(!1)}}async saveEmail(r,e){this.isLoading.set(!0);try{await this.dataService.addItem("Email",L({Parent:r.Guid},e)),this.loadEmails(),this.logger.debugLog("Email saved as child of comment",{comment:r.Guid,subject:e.subject})}catch(t){this.logger.debugLog("Failed to save parsed email",t)}finally{this.isLoading.set(!1)}}loadComments(){let e=this.dataService.getItems("Comment").filter(t=>t.Parent===this.guid).sort((t,a)=>t.Timestamp-a.Timestamp);this.comments.set(e)}loadEmails(){this.emails.set(this.dataService.getItems("Email"))}getEmailsForComment=r=>this.emails().filter(e=>e.Parent===r).sort((e,t)=>this.toTime(e.date)-this.toTime(t.date));toTime(r){return r?new Date(r).getTime():0}openEmailDialog(r){this.dialog.open(Qt,{width:"70vw",height:"80vh",maxWidth:"90vw",maxHeight:"90vh",data:r})}deleteComment(r){this.dialog.open(Xt,{width:"360px",data:{title:"Delete Comment?",message:"This will permanently remove the comment. This cannot be undone.",confirmText:"Delete",cancelText:"Cancel",icon:"delete"}}).afterClosed().subscribe(t=>{t&&this.performDeleteComment(r)})}async performDeleteComment(r){this.isLoading.set(!0);try{await this.deleteChildrenOf(r.Guid),await this.dataService.deleteItem("Comment",r.Id),this.loadComments(),this.loadEmails(),this.logger.debugLog("Comment and its children deleted",{guid:r.Guid})}catch(e){this.logger.debugLog("Failed to delete comment",e)}finally{this.isLoading.set(!1)}}async deleteChildrenOf(r){let e=this.dataService.getAllData(),t=[];for(let[a,i]of Object.entries(e))for(let o of i)o?.Parent===r&&t.push(this.dataService.deleteItem(a,o.Id));await Promise.all(t)}goBack=()=>{this.logger.debugLog("Navigating back to WIP"),this.router.navigate(["/wip"])};onCommentKeydown(r,e){r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),this.addComment(e))}async addComment(r){let e=r.value.trim();if(!(!e||this.isLoading())){this.isLoading.set(!0);try{let t=this.dataService.getCurrentUserFromCache()?.Title??"";await this.dataService.addItem("Comment",{Parent:this.guid,Text:e,Author:t,Timestamp:Date.now()}),this.loadComments(),r.value="",this.logger.debugLog("Comment added",{parent:this.guid})}catch(t){this.logger.debugLog("Failed to add comment",t)}finally{this.isLoading.set(!1)}}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-topic"]],inputs:{guid:"guid"},features:[ue([vn()]),J],decls:63,vars:8,consts:[["closedPicker",""],["commentInput",""],["mode","indeterminate"],[1,"topic-container"],[1,"header-row"],["mat-icon-button","","aria-label","Back to Work in Progress",3,"click"],[1,"page-title"],[1,"cards-grid"],[1,"topic-detail-card"],["color","primary"],[1,"topic-details-form",3,"ngSubmit","formGroup"],["appearance","outline","subscriptSizing","dynamic",1,"detail-field"],["matInput","","type","text","formControlName","title"],["matInput","","rows","4","formControlName","description"],["formControlName","status"],[3,"value"],["formControlName","owner"],["matInput","","formControlName","closed",3,"matDatepicker"],["matSuffix","",3,"for"],[1,"form-actions"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[1,"comments-list"],[1,"comment-bubble",3,"drag-over"],[1,"comments-empty"],["appearance","outline","subscriptSizing","dynamic",1,"add-comment-field"],["matInput","","rows","3","placeholder","Add comment ...",3,"keydown"],["mat-icon-button","","matSuffix","","type","button","aria-label","Send comment",3,"click","disabled"],[1,"comment-input-hint"],[1,"comment-bubble",3,"dragover","dragleave","drop"],[1,"comment-header"],[1,"comment-author"],["mat-icon-button","","aria-label","Delete comment",1,"comment-delete-btn",3,"click","disabled"],[1,"comment-text",3,"innerHTML"],[1,"comment-timestamp"],[1,"comment-emails"],[1,"comment-email-chip"],[1,"comment-email-chip",3,"click"],[1,"comment-email-date"],[1,"comment-email-subject"],["viewBox","0 0 24 24",1,"doc-type-icon"]],template:function(e,t){if(e&1){let a=K();E(0,Co,1,0,"mat-progress-bar",2),l(1,"div",3)(2,"div",4)(3,"button",5),_("click",function(){return t.goBack()}),l(4,"mat-icon"),m(5,"arrow_back"),d()(),l(6,"h1",6),m(7),d()(),l(8,"div",7)(9,"mat-card",8)(10,"mat-toolbar",9)(11,"span"),m(12,"Topic Details"),d()(),l(13,"mat-card-content")(14,"form",10),_("ngSubmit",function(){return t.saveTopic()}),l(15,"mat-form-field",11)(16,"mat-label"),m(17,"Title"),d(),x(18,"input",12),d(),l(19,"mat-form-field",11)(20,"mat-label"),m(21,"Description"),d(),x(22,"textarea",13),d(),l(23,"mat-form-field",11)(24,"mat-label"),m(25,"Status"),d(),l(26,"mat-select",14),oe(27,wo,2,2,"mat-option",15,Wa),d()(),l(29,"mat-form-field",11)(30,"mat-label"),m(31,"Owner"),d(),l(32,"mat-select",16),oe(33,ko,2,2,"mat-option",15,yo),d()(),l(35,"mat-form-field",11)(36,"mat-label"),m(37,"Closed"),d(),x(38,"input",17)(39,"mat-datepicker-toggle",18)(40,"mat-datepicker",null,0),d(),l(42,"div",19)(43,"button",20),m(44," Save "),d()()()()(),l(45,"mat-card",8)(46,"mat-toolbar",9)(47,"span"),m(48,"Notes"),d()(),l(49,"mat-card-content")(50,"div",21),oe(51,Ao,13,12,"div",22,kn,!1,Eo,2,0,"p",23),d()(),l(54,"mat-card-footer")(55,"mat-form-field",24)(56,"textarea",25,1),_("keydown",function(o){C(a);let p=Ne(57);return w(t.onCommentKeydown(o,p))}),d(),l(58,"button",26),_("click",function(){C(a);let o=Ne(57);return w(t.addComment(o))}),l(59,"mat-icon"),m(60,"send"),d()()(),l(61,"span",27),m(62,"[Enter] to submit. [Shift]+[Enter] for new line."),d()()()()()}if(e&2){let a,i=Ne(41);I(t.isLoading()?0:-1),c(7),V("Topic: ",(a=t.topic())==null?null:a.Title),c(7),b("formGroup",t.topicForm),c(13),se(t.statusOptions),c(6),se(t.siteUsers()),c(5),b("matDatepicker",i),c(),b("for",i),c(4),b("disabled",t.topicForm.invalid||t.isLoading()),c(8),se(t.comments()),c(7),b("disabled",t.isLoading())}},dependencies:[xi,Ci,wi,ki,Si,Mi,ye,ve,ge,ee,st,Ei,Ai,Bt,Vi,Ti,Oi,Wi,Ki,en,Ji,Ge,bn,fn,Ut,Ta,zi,Bi,Pi,Li,Ni,dt,Hi,Mt,Zt],styles:[".topic-container[_ngcontent-%COMP%]{padding:20px}.header-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:16px}.page-title[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:500}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px}.topic-detail-card[_ngcontent-%COMP%]{padding:0;border-radius:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;min-height:300px}mat-toolbar[_ngcontent-%COMP%]{min-height:56px;height:auto;padding:4px 16px;font-size:14px;font-weight:500;display:flex;align-items:center;gap:12px}mat-card-content[_ngcontent-%COMP%]{padding:16px!important}.topic-details-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.detail-field[_ngcontent-%COMP%]{width:100%}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.comments-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;max-height:320px;overflow-y:auto}.comment-bubble[_ngcontent-%COMP%]{background-color:#f0f2f5;border:1px solid #d5d8dc;border-radius:12px;padding:10px 14px;max-width:85%;align-self:flex-start;box-shadow:0 1px 2px #00000014;transition:background-color .15s ease,border-color .15s ease}.comment-bubble.drag-over[_ngcontent-%COMP%]{background-color:#e8eaf6;border-color:#3949ab;border-style:dashed}.comment-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.comment-author[_ngcontent-%COMP%]{display:block;font-size:12px;font-weight:600;color:#3949ab;margin-bottom:2px}.comment-delete-btn[_ngcontent-%COMP%]{flex:0 0 auto;width:28px;height:28px;padding:2px;line-height:24px;color:#9e9e9e;margin-top:-4px;margin-right:-6px}.comment-delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.comment-delete-btn[_ngcontent-%COMP%]:hover{color:#c62828}.comment-text[_ngcontent-%COMP%]{margin:0;font-size:14px;line-height:1.4;color:#1a1a1a;white-space:pre-wrap;word-break:break-word}.comment-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3949ab;text-decoration:underline;word-break:break-all}.comment-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#283593}.comment-timestamp[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:11px;color:#757575;text-align:right}.comment-emails[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-top:8px;padding-top:8px;border-top:1px solid #d5d8dc}.comment-email-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:4px 6px;border-radius:6px;background-color:#fff;border:1px solid #d5d8dc;cursor:pointer;transition:background-color .15s ease,border-color .15s ease;max-width:100%;overflow:hidden}.comment-email-chip[_ngcontent-%COMP%]:hover{background-color:#e8eaf6;border-color:#3949ab}.comment-email-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;line-height:16px;color:#3949ab;flex:0 0 auto}.comment-email-chip[_ngcontent-%COMP%]   .doc-type-icon[_ngcontent-%COMP%]{width:16px;height:16px;flex:0 0 auto}.comment-email-date[_ngcontent-%COMP%]{font-size:12px;color:#757575;flex:0 0 auto;white-space:nowrap}.comment-email-subject[_ngcontent-%COMP%]{font-size:12px;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1 1 auto;min-width:0}.comments-empty[_ngcontent-%COMP%]{margin:0;font-size:14px;color:#757575;font-style:italic}mat-card-footer[_ngcontent-%COMP%]{display:block;padding:8px 12px;border-top:1px solid rgba(0,0,0,.12)}.add-comment-field[_ngcontent-%COMP%]{width:100%}.comment-input-hint[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:11px;color:#9e9e9e}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{min-height:0;padding-top:8px;padding-bottom:8px}.add-comment-field[_ngcontent-%COMP%]   textarea.mat-mdc-input-element[_ngcontent-%COMP%]{resize:none;line-height:1.4}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-form-field-icon-suffix[_ngcontent-%COMP%]{align-self:flex-end;padding-bottom:4px}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]{width:32px;height:32px;padding:4px;color:#757575}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;line-height:20px}"]})};export{wn as Topic};
