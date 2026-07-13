import{$ as Fn,A as yn,B as bn,G as Te,J as ii,K as Cn,L as Dn,N as Ne,O as wn,Q as xn,R as Sn,S as Rn,T as xt,U as Le,V as En,W as Mn,Y as Je,Z as kn,_ as Tn,aa as In,b as fn,ba as Pn,i as hn,m as Ct,n as ke,o as ue,p as pn,q as gn,r as _n,s as vn,t as Dt,v as Ye,w as De,x as wt,y as K}from"./chunk-X3Q2XCYI.js";import{$a as p,A as Ki,Cb as D,Db as O,E as Xi,Eb as he,Fb as P,Gb as Ze,Hb as yt,Ib as S,J as Yi,Jb as R,Kb as on,L as Ji,Lb as an,Ma as h,Mb as ti,N as qe,Nb as de,O as en,Ob as Qe,P as j,Pb as A,Q as tn,Qa as ye,Qb as sn,R as gt,Ra as oe,Rb as w,Sa as $e,Sb as ln,T as ei,Ta as ae,Tb as pe,U as te,Ua as Se,Ub as k,V as N,Va as be,Vb as bt,X as y,Z as l,Za as F,Zb as dn,_a as z,a as Q,ac as ge,b as ee,bc as $,c as _e,ca as ie,cb as I,da as ne,db as G,dc as cn,e as We,ea as xe,fa as ve,fb as nn,fc as Ke,g,gb as rn,gc as un,h as mt,hc as ce,ia as T,ic as Ve,j as Ui,ja as B,jb as se,k as ft,kb as b,kc as V,l as Wi,lb as C,lc as Xe,m as qi,mc as mn,n as Jt,na as L,ob as H,p as $i,pa as _t,pb as u,qa as re,qb as m,r as Ae,ra as Z,rb as le,s as ht,sb as Re,ta as M,tb as Ee,ub as Ce,vb as me,w as Zi,wb as fe,x as Qi,xb as q,y as Oe,yb as Me,z as pt,zb as vt}from"./chunk-TTCIFKC2.js";var xo=["*"];var So=new y("MAT_CARD_CONFIG"),An=(()=>{class n{appearance;constructor(){let e=l(So,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=F({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&A("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:xo,decls:1,vars:0,template:function(i,r){i&1&&(he(),P(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})();var On=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var Vn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-mdc-card-footer"]})}return n})();var Nn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=z({type:n});static \u0275inj=N({imports:[ue]})}return n})();function Eo(n,t){n&1&&Ce(0,"div",2)}var Mo=new y("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var zn=(()=>{class n{_elementRef=l(M);_ngZone=l(B);_changeDetectorRef=l(ce);_renderer=l(ae);_cleanupTransitionEnd;constructor(){let e=Cn(),i=l(Mo,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Ln(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Ln(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new T;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=F({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,r){i&2&&(se("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),sn("mat-"+r.color),A("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Xe],bufferValue:[2,"bufferValue","bufferValue",Xe],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,r){i&1&&(Re(0,"div",0),Ce(1,"div",1),b(2,Eo,1,0,"div",2),Ee(),Re(3,"div",3),Ce(4,"span",4),Ee(),Re(5,"div",5),Ce(6,"span",4),Ee()),i&2&&(h(),Qe("flex-basis",r._getBufferBarFlexBasis()),h(),C(r.mode==="buffer"?2:-1),h(),Qe("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Ln(n,t=0,e=100){return Math.max(t,Math.min(e,n))}var Hn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=z({type:n});static \u0275inj=N({imports:[ue]})}return n})();var St=class{applyChanges(t,e,i,r,o){t.forEachOperation((a,s,d)=>{let c,f;if(a.previousIndex==null){let _=i(a,s,d);c=e.createEmbeddedView(_.templateRef,_.context,_.index),f=Le.INSERTED}else d==null?(e.remove(s),f=Le.REMOVED):(c=e.get(s),e.move(c,d),f=Le.MOVED);o&&o({context:c?.context,operation:f,record:a})})}detach(){}};var To=[[["caption"]],[["colgroup"],["col"]],"*"],Fo=["caption","colgroup, col","*"];function Io(n,t){n&1&&P(0,2)}function Po(n,t){n&1&&(u(0,"thead",0),q(1,1),m(),u(2,"tbody",0),q(3,2)(4,3),m(),u(5,"tfoot",0),q(6,4),m())}function Ao(n,t){n&1&&q(0,1)(1,2)(2,3)(3,4)}var J=new y("CDK_TABLE");var Mt=(()=>{class n{template=l(oe);constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),kt=(()=>{class n{template=l(oe);constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),Gn=(()=>{class n{template=l(oe);constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),ze=(()=>{class n{_table=l(J,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,r,o){if(i&1&&Ze(o,Mt,5)(o,kt,5)(o,Gn,5),i&2){let a;S(a=R())&&(r.cell=a.first),S(a=R())&&(r.headerCell=a.first),S(a=R())&&(r.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",V],stickyEnd:[2,"stickyEnd","stickyEnd",V]}})}return n})(),Et=class{constructor(t,e){e.nativeElement.classList.add(...t._columnCssClassName)}},Un=(()=>{class n extends Et{constructor(){super(l(ze),l(M))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[I]})}return n})();var Wn=(()=>{class n extends Et{constructor(){let e=l(ze),i=l(M);super(e,i);let r=e._table?._getCellRole();r&&i.nativeElement.setAttribute("role",r)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[I]})}return n})();var ri=(()=>{class n{template=l(oe);_differs=l(Ve);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof tt?e.headerCell.template:this instanceof oi?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,features:[re]})}return n})(),tt=(()=>{class n extends ri{_table=l(J,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(l(oe),l(Ve))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",V]},features:[I,re]})}return n})(),oi=(()=>{class n extends ri{_table=l(J,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(l(oe),l(Ve))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",V]},features:[I,re]})}return n})(),Tt=(()=>{class n extends ri{_table=l(J,{optional:!0});when;constructor(){super(l(oe),l(Ve))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[I]})}return n})(),Fe=(()=>{class n{_viewContainer=l(be);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),ai=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=F({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&q(0,0)},dependencies:[Fe],encapsulation:2})}return n})();var si=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=F({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&q(0,0)},dependencies:[Fe],encapsulation:2})}return n})(),qn=(()=>{class n{templateRef=l(oe);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),Bn=["top","bottom","left","right"],ni=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(t=>this._updateCachedSizes(t)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(t,e,i=!0,r=!0,o,a,s){this._isNativeHtmlTable=t,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=a,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(t,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(t);let i=[];for(let r of t)r.nodeType===r.ELEMENT_NODE&&i.push(r,...Array.from(r.children));ye({write:()=>{for(let r of i)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(t,e,i,r=!0,o=!0){if(!t.length||!this._isBrowser||!(e.some(x=>x)||i.some(x=>x))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=t[0],s=a.children.length,d=this.direction==="rtl",c=d?"right":"left",f=d?"left":"right",_=e.lastIndexOf(!0),v=i.indexOf(!0),E,Ie,Pe;o&&this._updateStickyColumnReplayQueue({rows:[...t],stickyStartStates:[...e],stickyEndStates:[...i]}),ye({earlyRead:()=>{E=this._getCellWidths(a,r),Ie=this._getStickyStartColumnPositions(E,e),Pe=this._getStickyEndColumnPositions(E,i)},write:()=>{for(let x of t)for(let U=0;U<s;U++){let Ue=x.children[U];e[U]&&this._addStickyStyle(Ue,c,Ie[U],U===_),i[U]&&this._addStickyStyle(Ue,f,Pe[U],U===v)}this._positionListener&&E.some(x=>!!x)&&(this._positionListener.stickyColumnsUpdated({sizes:_===-1?[]:E.slice(0,_+1).map((x,U)=>e[U]?x:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:v===-1?[]:E.slice(v).map((x,U)=>i[U+v]?x:null).reverse()}))}},{injector:this._tableInjector})}stickRows(t,e,i){if(!this._isBrowser)return;let r=i==="bottom"?t.slice().reverse():t,o=i==="bottom"?e.slice().reverse():e,a=[],s=[],d=[];ye({earlyRead:()=>{for(let c=0,f=0;c<r.length;c++){if(!o[c])continue;a[c]=f;let _=r[c];d[c]=this._isNativeHtmlTable?Array.from(_.children):[_];let v=this._retrieveElementSize(_).height;f+=v,s[c]=v}},write:()=>{let c=o.lastIndexOf(!0);for(let f=0;f<r.length;f++){if(!o[f])continue;let _=a[f],v=f===c;for(let E of d[f])this._addStickyStyle(E,i,_,v)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:a,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:a,elements:d})}},{injector:this._tableInjector})}updateStickyFooterContainer(t,e){this._isNativeHtmlTable&&ye({write:()=>{let i=t.querySelector("tfoot");i&&(e.some(r=>!r)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(t,e){if(!t.classList.contains(this._stickCellCss))return;for(let r of e)t.style[r]="",t.classList.remove(this._borderCellCss[r]);Bn.some(r=>e.indexOf(r)===-1&&t.style[r])?t.style.zIndex=this._getCalculatedZIndex(t):(t.style.zIndex="",this._needsPositionStickyOnElement&&(t.style.position=""),t.classList.remove(this._stickCellCss))}_addStickyStyle(t,e,i,r){t.classList.add(this._stickCellCss),r&&t.classList.add(this._borderCellCss[e]),t.style[e]=`${i}px`,t.style.zIndex=this._getCalculatedZIndex(t),this._needsPositionStickyOnElement&&(t.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(t){let e={top:100,bottom:10,left:1,right:1},i=0;for(let r of Bn)t.style[r]&&(i+=e[r]);return i?`${i}`:""}_getCellWidths(t,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],r=t.children;for(let o=0;o<r.length;o++){let a=r[o];i.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(t,e){let i=[],r=0;for(let o=0;o<t.length;o++)e[o]&&(i[o]=r,r+=t[o]);return i}_getStickyEndColumnPositions(t,e){let i=[],r=0;for(let o=t.length;o>0;o--)e[o]&&(i[o]=r,r+=t[o]);return i}_retrieveElementSize(t){let e=this._elemSizeCache.get(t);if(e)return e;let i=t.getBoundingClientRect(),r={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(t,r),this._resizeObserver.observe(t,{box:"border-box"})),r}_updateStickyColumnReplayQueue(t){this._removeFromStickyColumnReplayQueue(t.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(t)}_removeFromStickyColumnReplayQueue(t){let e=new Set(t);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(t){let e=!1;for(let i of t){let r=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};r.width!==this._elemSizeCache.get(i.target)?.width&&Oo(i.target)&&(e=!0),this._elemSizeCache.set(i.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Oo(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(t=>n.classList.contains(t))}var et=new y("STICKY_POSITIONING_LISTENER");var li=(()=>{class n{viewContainer=l(be);elementRef=l(M);constructor(){let e=l(J);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","rowOutlet",""]]})}return n})(),di=(()=>{class n{viewContainer=l(be);elementRef=l(M);constructor(){let e=l(J);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),ci=(()=>{class n{viewContainer=l(be);elementRef=l(M);constructor(){let e=l(J);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),ui=(()=>{class n{viewContainer=l(be);elementRef=l(M);constructor(){let e=l(J);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),mi=(()=>{class n{_differs=l(Ve);_changeDetectorRef=l(ce);_elementRef=l(M);_dir=l(ke,{optional:!0});_platform=l(De);_viewRepeater;_viewportRuler=l(Je);_injector=l(xe);_virtualScrollViewport=l(kn,{optional:!0,host:!0});_positionListener=l(et,{optional:!0})||l(et,{optional:!0,skipSelf:!0});_document=l(ve);_data;_renderedRange;_onDestroy=new g;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new g;_footerRowStickyUpdates=new g;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new g;_dataStream=new g;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new T;viewChange=new mt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){l(new cn("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(j(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new En:new St,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),xt(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(r,o,a)=>this._getEmbeddedViewArgs(r.item,a),r=>r.item.data,r=>{r.operation===Le.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=jn(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=jn(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let s=0;s<i.length;s++)this._renderRows[s].rowDef===o&&a.push(i[s]);this._addStickyColumnStyles(a,o)}),r.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let a=this._data[o],s=this._getRenderRowsForData(a,o,r.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let d=0;d<s.length;d++){let c=s[d],f=this._cachedRenderRowsMap.get(c.data);f.has(c.rowDef)?f.get(c.rowDef).push(c):f.set(c.rowDef,[c]),e.push(c)}}return e}_getRenderRowsForData(e,i,r){return this._getRowDefs(e,i).map(a=>{let s=r&&r.has(a)?r.get(a):[];if(s.length){let d=s.shift();return d.dataIndex=i,d}else return{data:e,rowDef:a,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Rt(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Rt(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Rt(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Rt(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,s)=>{let d=!!s.getColumnsDiff();return a||d},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||r||o}_switchDataSource(e){this._data=[],xt(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;xt(this.dataSource)?e=this.dataSource.connect(this):$i(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Jt(this.dataSource)),this._renderChangeSubscription=ht([e,this.viewChange]).pipe(j(this._onDestroy)).subscribe(([i,r])=>{this._data=i||[],this._renderedRange=r,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let r=Array.from(i?.columns||[]).map(s=>{let d=this._columnDefsByName.get(s);return d}),o=r.map(s=>s.sticky),a=r.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(i,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,i){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:i}}_renderRow(e,i,r,o={}){let a=e.viewContainer.createEmbeddedView(i.template,o,r);return this._renderCellTemplateForItem(i,o),a}_renderCellTemplateForItem(e,i){for(let r of this._getCellTemplates(e))Fe.mostRecentCellOutlet&&Fe.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,r=e.length;i<r;i++){let a=e.get(i).context;a.count=r,a.first=i===0,a.last=i===r-1,a.even=i%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[i].dataIndex,a.renderIndex=i):a.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let r=this._columnDefsByName.get(i);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,r)=>i||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new ni(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:Jt()).pipe(j(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?ft:Ui;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Ki(0,i),j(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),ht([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(j(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s){let d=o.offsets[a],c=r!==0?Math.max(r-d,d):-d;for(let f of s)f.style.top=`${-c}px`}}}),ht([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(j(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s)for(let d of s)d.style.bottom=`${r+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(i){let o=r.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let s=a.querySelectorAll(e._cellSelector);for(let d=0;d<s.length;d++)s[d].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let a=e.start-r.start,s=e.end-e.start,d,c;for(let v=0;v<s;v++){let E=o.get(v+a);if(E&&E.rootNodes.length){d=c=E.rootNodes[0];break}}for(let v=s-1;v>-1;v--){let E=o.get(v+a);if(E&&E.rootNodes.length){c=E.rootNodes[E.rootNodes.length-1];break}}let f=d?.getBoundingClientRect?.(),_=c?.getBoundingClientRect?.();return f&&_?_.bottom-f.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=F({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,r,o){if(i&1&&Ze(o,qn,5)(o,ze,5)(o,Tt,5)(o,tt,5)(o,oi,5),i&2){let a;S(a=R())&&(r._noDataRow=a.first),S(a=R())&&(r._contentColumnDefs=a),S(a=R())&&(r._contentRowDefs=a),S(a=R())&&(r._contentHeaderRowDefs=a),S(a=R())&&(r._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,r){i&2&&A("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",V],fixedLayout:[2,"fixedLayout","fixedLayout",V],recycleRows:[2,"recycleRows","recycleRows",V]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[k([{provide:J,useExisting:n},{provide:et,useValue:null}])],ngContentSelectors:Fo,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(he(To),P(0),P(1,1),b(2,Io,1,0),b(3,Po,7,0)(4,Ao,4,0)),i&2&&(h(2),C(r._isServer?2:-1),h(),C(r._isNativeHtmlTable?3:4))},dependencies:[di,li,ui,ci],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function Rt(n,t){return n.concat(Array.from(t))}function jn(n,t){let e=t.toUpperCase(),i=n.viewContainer.element.nativeElement;for(;i;){let r=i.nodeType===1?i.nodeName:null;if(r===e)return i;if(r==="TABLE")break;i=i.parentNode}return null}var $n=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=z({type:n});static \u0275inj=N({imports:[Fn]})}return n})();var Vo=[[["caption"]],[["colgroup"],["col"]],"*"],No=["caption","colgroup, col","*"];function Lo(n,t){n&1&&P(0,2)}function zo(n,t){n&1&&(u(0,"thead",0),q(1,1),m(),u(2,"tbody",2),q(3,3)(4,4),m(),u(5,"tfoot",0),q(6,5),m())}function Ho(n,t){n&1&&q(0,1)(1,3)(2,4)(3,5)}var Zn=(()=>{class n extends mi{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Z(n)))(r||n)}})();static \u0275cmp=F({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,r){i&2&&A("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[k([{provide:mi,useExisting:n},{provide:J,useExisting:n},{provide:et,useValue:null}]),I],ngContentSelectors:No,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(he(Vo),P(0),P(1,1),b(2,Lo,1,0),b(3,zo,7,0)(4,Ho,4,0)),i&2&&(h(2),C(r._isServer?2:-1),h(),C(r._isNativeHtmlTable?3:4))},dependencies:[di,li,ui,ci],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return n})(),Qn=(()=>{class n extends Mt{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Z(n)))(r||n)}})();static \u0275dir=p({type:n,selectors:[["","matCellDef",""]],features:[k([{provide:Mt,useExisting:n}]),I]})}return n})(),Kn=(()=>{class n extends kt{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Z(n)))(r||n)}})();static \u0275dir=p({type:n,selectors:[["","matHeaderCellDef",""]],features:[k([{provide:kt,useExisting:n}]),I]})}return n})();var Xn=(()=>{class n extends ze{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Z(n)))(r||n)}})();static \u0275dir=p({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[k([{provide:ze,useExisting:n}]),I]})}return n})(),Yn=(()=>{class n extends Un{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Z(n)))(r||n)}})();static \u0275dir=p({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[I]})}return n})();var Jn=(()=>{class n extends Wn{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Z(n)))(r||n)}})();static \u0275dir=p({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[I]})}return n})();var er=(()=>{class n extends tt{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Z(n)))(r||n)}})();static \u0275dir=p({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",V]},features:[k([{provide:tt,useExisting:n}]),I]})}return n})();var tr=(()=>{class n extends Tt{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Z(n)))(r||n)}})();static \u0275dir=p({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[k([{provide:Tt,useExisting:n}]),I]})}return n})(),ir=(()=>{class n extends ai{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Z(n)))(r||n)}})();static \u0275cmp=F({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[k([{provide:ai,useExisting:n}]),I],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&q(0,0)},dependencies:[Fe],encapsulation:2})}return n})();var nr=(()=>{class n extends si{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Z(n)))(r||n)}})();static \u0275cmp=F({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[k([{provide:si,useExisting:n}]),I],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&q(0,0)},dependencies:[Fe],encapsulation:2})}return n})();var rr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=z({type:n});static \u0275inj=N({imports:[$n,ue]})}return n})();var fi=class{_box;_destroyed=new g;_resizeSubject=new g;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new We(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),i.unsubscribe(),this._elementObservables.delete(t)}}).pipe(pt(e=>e.some(i=>i.target===t)),Ji({bufferSize:1,refCount:!0}),j(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},or=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=l(B);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new fi(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var jo=["notch"],Go=["matFormFieldNotchedOutline",""],Uo=["*"],ar=["iconPrefixContainer"],sr=["textPrefixContainer"],lr=["iconSuffixContainer"],dr=["textSuffixContainer"],Wo=["textField"],qo=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],$o=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Zo(n,t){n&1&&le(0,"span",21)}function Qo(n,t){if(n&1&&(u(0,"label",20),P(1,1),b(2,Zo,1,0,"span",21),m()),n&2){let e=O(2);H("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),se("for",e._control.disableAutomaticLabeling?null:e._control.id),h(2),C(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Ko(n,t){if(n&1&&b(0,Qo,3,5,"label",20),n&2){let e=O();C(e._hasFloatingLabel()?0:-1)}}function Xo(n,t){n&1&&le(0,"div",7)}function Yo(n,t){}function Jo(n,t){if(n&1&&G(0,Yo,0,0,"ng-template",13),n&2){O(2);let e=de(1);H("ngTemplateOutlet",e)}}function ea(n,t){if(n&1&&(u(0,"div",9),b(1,Jo,1,1,null,13),m()),n&2){let e=O();H("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),h(),C(e._forceDisplayInfixLabel()?-1:1)}}function ta(n,t){n&1&&(u(0,"div",10,2),P(2,2),m())}function ia(n,t){n&1&&(u(0,"div",11,3),P(2,3),m())}function na(n,t){}function ra(n,t){if(n&1&&G(0,na,0,0,"ng-template",13),n&2){O();let e=de(1);H("ngTemplateOutlet",e)}}function oa(n,t){n&1&&(u(0,"div",14,4),P(2,4),m())}function aa(n,t){n&1&&(u(0,"div",15,5),P(2,5),m())}function sa(n,t){n&1&&le(0,"div",16)}function la(n,t){n&1&&(u(0,"div",18),P(1,6),m())}function da(n,t){if(n&1&&(u(0,"mat-hint",22),w(1),m()),n&2){let e=O(2);H("id",e._hintLabelId),h(),ln(e.hintLabel)}}function ca(n,t){if(n&1&&(u(0,"div",19),b(1,da,2,2,"mat-hint",22),P(2,7),le(3,"div",23),P(4,8),m()),n&2){let e=O();h(),C(e.hintLabel?1:-1)}}var hi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["mat-label"]]})}return n})(),ua=new y("MatError");var pi=(()=>{class n{align="start";id=l(Te).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(vt("id",r.id),se("align",null),A("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),ma=new y("MatPrefix");var gr=new y("MatSuffix"),gi=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[k([{provide:gr,useExisting:n}])]})}return n})(),_r=new y("FloatingLabelParent"),cr=(()=>{class n{_elementRef=l(M);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(or);_ngZone=l(B);_parent=l(_r);_resizeSubscription=new _e;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return fa(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&A("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function fa(n){let t=n;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var ur="mdc-line-ripple--active",Ft="mdc-line-ripple--deactivating",mr=(()=>{class n{_elementRef=l(M);_cleanupTransitionEnd;constructor(){let e=l(B),i=l(ae);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ft),e.add(ur)}deactivate(){this._elementRef.nativeElement.classList.add(Ft)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Ft);e.propertyName==="opacity"&&r&&i.remove(ur,Ft)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),fr=(()=>{class n{_elementRef=l(M);_ngZone=l(B);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=F({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&yt(jo,5),i&2){let o;S(o=R())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&A("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Go,ngContentSelectors:Uo,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(he(),Ce(0,"div",1),Re(1,"div",2,0),P(3),Ee(),Ce(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),_i=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n})}return n})();var vi=new y("MatFormField"),ha=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),hr="fill",pa="auto",pr="fixed",ga="translateY(-50%)",It=(()=>{class n{_elementRef=l(M);_changeDetectorRef=l(ce);_platform=l(De);_idGenerator=l(Te);_ngZone=l(B);_defaults=l(ha,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ke("iconPrefixContainer");_textPrefixContainerSignal=Ke("textPrefixContainer");_iconSuffixContainerSignal=Ke("iconSuffixContainer");_textSuffixContainerSignal=Ke("textSuffixContainer");_prefixSuffixContainers=$(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=un(hi);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ne(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||pa}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||hr;this._appearanceSignal.set(i)}_appearanceSignal=L(hr);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||pr}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||pr}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new g;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Dn();constructor(){let e=this._defaults,i=l(ke);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),_t(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=$(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(qe([void 0,void 0]),Ae(()=>[i.errorState,i.userAriaDescribedBy]),Yi(),pt(([[o,a],[s,d]])=>o!==s||a!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(j(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Oe(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){mn({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=$(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,d=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",_=`${a+s}px`,E=`calc(${f} * (${_} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Ie=`var(--mat-mdc-form-field-label-transform, ${ga} translateX(${E}))`,Pe=a+s+d+c;return[Ie,Pe]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=F({type:n,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(on(o,r._labelChild,hi,5),Ze(o,_i,5)(o,ma,5)(o,gr,5)(o,ua,5)(o,pi,5)),i&2){ti();let a;S(a=R())&&(r._formFieldControl=a.first),S(a=R())&&(r._prefixChildren=a),S(a=R())&&(r._suffixChildren=a),S(a=R())&&(r._errorChildren=a),S(a=R())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(an(r._iconPrefixContainerSignal,ar,5)(r._textPrefixContainerSignal,sr,5)(r._iconSuffixContainerSignal,lr,5)(r._textSuffixContainerSignal,dr,5),yt(Wo,5)(ar,5)(sr,5)(lr,5)(dr,5)(cr,5)(fr,5)(mr,5)),i&2){ti(4);let o;S(o=R())&&(r._textField=o.first),S(o=R())&&(r._iconPrefixContainer=o.first),S(o=R())&&(r._textPrefixContainer=o.first),S(o=R())&&(r._iconSuffixContainer=o.first),S(o=R())&&(r._textSuffixContainer=o.first),S(o=R())&&(r._floatingLabel=o.first),S(o=R())&&(r._notchedOutline=o.first),S(o=R())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&A("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[k([{provide:vi,useExisting:n},{provide:_r,useExisting:n}])],ngContentSelectors:$o,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(he(qo),G(0,Ko,1,1,"ng-template",null,0,dn),u(2,"div",6,1),D("click",function(a){return r._control.onContainerClick(a)}),b(4,Xo,1,0,"div",7),u(5,"div",8),b(6,ea,2,2,"div",9),b(7,ta,3,0,"div",10),b(8,ia,3,0,"div",11),u(9,"div",12),b(10,ra,1,1,null,13),P(11),m(),b(12,oa,3,0,"div",14),b(13,aa,3,0,"div",15),m(),b(14,sa,1,0,"div",16),m(),u(15,"div",17),b(16,la,2,0,"div",18)(17,ca,5,1,"div",19),m()),i&2){let o;h(2),A("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),h(2),C(!r._hasOutline()&&!r._control.disabled?4:-1),h(2),C(r._hasOutline()?6:-1),h(),C(r._hasIconPrefix?7:-1),h(),C(r._hasTextPrefix?8:-1),h(2),C(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),h(2),C(r._hasTextSuffix?12:-1),h(),C(r._hasIconSuffix?13:-1),h(),C(r._hasOutline()?-1:14),h(),A("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();h(),C((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[cr,fr,fn,mr,pi],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var it=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=z({type:n});static \u0275inj=N({imports:[bn,It,ue]})}return n})();var va=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=F({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),ya={passive:!0},vr=(()=>{class n{_platform=l(De);_ngZone=l(B);_renderer=l($e).createRenderer(null,null);_styleLoader=l(Ct);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Wi;this._styleLoader.load(va);let i=K(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new g,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,ya)));return this._monitoredElements.set(i,{subject:o,unlisten:d}),o}stopMonitoring(e){let i=K(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var yr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=z({type:n});static \u0275inj=N({})}return n})();function Ci(n){return n==null||Di(n)===0}function Di(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Rr=new y(""),Er=new y(""),ba=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,At=class{static min(t){return Ca(t)}static max(t){return Da(t)}static required(t){return wa(t)}static requiredTrue(t){return xa(t)}static email(t){return Sa(t)}static minLength(t){return Ra(t)}static maxLength(t){return Ea(t)}static pattern(t){return Ma(t)}static nullValidator(t){return Mr()}static compose(t){return Ar(t)}static composeAsync(t){return Or(t)}};function Ca(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function Da(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function wa(n){return Ci(n.value)?{required:!0}:null}function xa(n){return n.value===!0?null:{required:!0}}function Sa(n){return Ci(n.value)||ba.test(n.value)?null:{email:!0}}function Ra(n){return t=>{let e=t.value?.length??Di(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Ea(n){return t=>{let e=t.value?.length??Di(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function Ma(n){if(!n)return Mr;let t,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),i=>{if(Ci(i.value))return null;let r=i.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Mr(n){return null}function kr(n){return n!=null}function Tr(n){return rn(n)?qi(n):n}function Fr(n){let t={};return n.forEach(e=>{t=e!=null?Q(Q({},t),e):t}),Object.keys(t).length===0?null:t}function Ir(n,t){return t.map(e=>e(n))}function ka(n){return!n.validate}function Pr(n){return n.map(t=>ka(t)?t:e=>t.validate(e))}function Ar(n){if(!n)return null;let t=n.filter(kr);return t.length==0?null:function(e){return Fr(Ir(e,t))}}function wi(n){return n!=null?Ar(Pr(n)):null}function Or(n){if(!n)return null;let t=n.filter(kr);return t.length==0?null:function(e){let i=Ir(e,t).map(Tr);return Zi(i).pipe(Ae(Fr))}}function xi(n){return n!=null?Or(Pr(n)):null}function br(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Vr(n){return n._rawValidators}function Nr(n){return n._rawAsyncValidators}function yi(n){return n?Array.isArray(n)?n:[n]:[]}function Ot(n,t){return Array.isArray(n)?n.includes(t):n===t}function Cr(n,t){let e=yi(t);return yi(n).forEach(r=>{Ot(e,r)||e.push(r)}),e}function Dr(n,t){return yi(t).filter(e=>!Ot(n,e))}var Vt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=wi(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=xi(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},je=class extends Vt{name;get formDirective(){return null}get path(){return null}},Nt=class extends Vt{_parent=null;name=null;valueAccessor=null};var nt="VALID",Pt="INVALID",He="PENDING",rt="DISABLED",we=class{},Lt=class extends we{value;source;constructor(t,e){super(),this.value=t,this.source=e}},at=class extends we{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},st=class extends we{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},Be=class extends we{status;source;constructor(t,e){super(),this.status=t,this.source=e}},zt=class extends we{source;constructor(t){super(),this.source=t}},Ht=class extends we{source;constructor(t){super(),this.source=t}};function Lr(n){return(Wt(n)?n.validators:n)||null}function Ta(n){return Array.isArray(n)?wi(n):n||null}function zr(n,t){return(Wt(t)?t.asyncValidators:n)||null}function Fa(n){return Array.isArray(n)?xi(n):n||null}function Wt(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Ia(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new gt(1e3,"");if(!i[e])throw new gt(1001,"")}function Pa(n,t,e){n._forEachChild((i,r)=>{if(e[r]===void 0)throw new gt(-1002,"")})}var Bt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return ge(this.statusReactive)}set status(t){ge(()=>this.statusReactive.set(t))}_status=$(()=>this.statusReactive());statusReactive=L(void 0);get valid(){return this.status===nt}get invalid(){return this.status===Pt}get pending(){return this.status===He}get disabled(){return this.status===rt}get enabled(){return this.status!==rt}errors;get pristine(){return ge(this.pristineReactive)}set pristine(t){ge(()=>this.pristineReactive.set(t))}_pristine=$(()=>this.pristineReactive());pristineReactive=L(!0);get dirty(){return!this.pristine}get touched(){return ge(this.touchedReactive)}set touched(t){ge(()=>this.touchedReactive.set(t))}_touched=$(()=>this.touchedReactive());touchedReactive=L(!1);get untouched(){return!this.touched}_events=new g;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Cr(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Cr(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Dr(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Dr(t,this._rawAsyncValidators))}hasValidator(t){return Ot(this._rawValidators,t)}hasAsyncValidator(t){return Ot(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(ee(Q({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new st(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new st(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(ee(Q({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new at(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new at(!0,i))}markAsPending(t={}){this.status=He;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Be(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(ee(Q({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=rt,this.errors=null,this._forEachChild(r=>{r.disable(ee(Q({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Lt(this.value,i)),this._events.next(new Be(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ee(Q({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=nt,this._forEachChild(i=>{i.enable(ee(Q({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(ee(Q({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===nt||this.status===He)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Lt(this.value,e)),this._events.next(new Be(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(ee(Q({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?rt:nt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=He,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let i=Tr(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i?.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new Be(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new T,this.statusChanges=new T}_calculateStatus(){return this._allControlsDisabled()?rt:this.errors?Pt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(He)?He:this._anyControlsHaveStatus(Pt)?Pt:nt}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new at(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new st(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Wt(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Ta(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Fa(this._rawAsyncValidators)}},jt=class extends Bt{constructor(t,e,i){super(Lr(e),zr(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){Pa(this,!0,t),Object.keys(t).forEach(i=>{Ia(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let r=this.controls[i];r&&r.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,r)=>{i.reset(t?t[r]:null,ee(Q({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ht(this))}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var Si=new y("",{factory:()=>Ri}),Ri="always";function bi(n,t,e=Ri){Ei(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),Oa(n,t),Na(n,t),Va(n,t),Aa(n,t)}function wr(n,t,e=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),Ut(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Gt(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Aa(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Ei(n,t){let e=Vr(n);t.validator!==null?n.setValidators(br(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let i=Nr(n);t.asyncValidator!==null?n.setAsyncValidators(br(i,t.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Gt(t._rawValidators,r),Gt(t._rawAsyncValidators,r)}function Ut(n,t){let e=!1;if(n!==null){if(t.validator!==null){let r=Vr(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(t.asyncValidator!==null){let r=Nr(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let i=()=>{};return Gt(t._rawValidators,i),Gt(t._rawAsyncValidators,i),e}function Oa(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Hr(n,t)})}function Va(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Hr(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function Hr(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Na(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Br(n,t){n==null,Ei(n,t)}function La(n,t){return Ut(n,t)}function jr(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function za(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var Ha={provide:je,useExisting:ei(()=>Mi)},ot=Promise.resolve(),Mi=(()=>{class n extends je{callSetDisabledState;get submitted(){return ge(this.submittedReactive)}_submitted=$(()=>this.submittedReactive());submittedReactive=L(!1);_directives=new Set;form;ngSubmit=new T;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new jt({},wi(e),xi(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ot.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),bi(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ot.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ot.then(()=>{let i=this._findContainer(e.path),r=new jt({});Br(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ot.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){ot.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),jr(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new zt(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||n)(Se(Rr,10),Se(Er,10),Se(Si,8))};static \u0275dir=p({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&D("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[k([Ha]),I]})}return n})();function xr(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function Sr(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Ba=class extends Bt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(Lr(e),zr(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Wt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Sr(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ht(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){xr(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){xr(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Sr(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var ja=n=>n instanceof Ba;var Ga=(()=>{class n extends je{callSetDisabledState;get submitted(){return ge(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=$(()=>this._submittedReactive());_submittedReactive=L(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ut(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return bi(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){wr(e.control||null,e,!1),za(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,jr(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new zt(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(wr(i||null,e),ja(r)&&(bi(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);Br(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&La(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Ei(this.form,this),this._oldForm&&Ut(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(Se(Rr,10),Se(Er,10),Se(Si,8))};static \u0275dir=p({type:n,features:[I,re]})}return n})();var Ua={provide:je,useExisting:ei(()=>ki)},ki=(()=>{class n extends Ga{form=null;ngSubmit=new T;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Z(n)))(r||n)}})();static \u0275dir=p({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&D("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[k([Ua]),I]})}return n})();var Wa=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=z({type:n});static \u0275inj=N({})}return n})();var Gr=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Si,useValue:e.callSetDisabledState??Ri}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=z({type:n});static \u0275inj=N({imports:[Wa]})}return n})();var Ur=new y("MAT_INPUT_VALUE_ACCESSOR");var Wr=(()=>{class n{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var qt=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(t,e,i,r,o){this._defaultMatcher=t,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let t=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==t&&(this.errorState=o,this._stateChanges.next())}};var qa=["button","checkbox","file","hidden","image","radio","range","reset","submit"],$a=new y("MAT_INPUT_CONFIG"),qr=(()=>{class n{_elementRef=l(M);_platform=l(De);ngControl=l(Nt,{optional:!0,self:!0});_autofillMonitor=l(vr);_ngZone=l(B);_formField=l(vi,{optional:!0});_renderer=l(ae);_uid=l(Te).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l($a,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new g;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ne(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(At.required)??!1}set required(e){this._required=Ne(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&ii().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ne(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>ii().has(e));constructor(){let e=l(Mi,{optional:!0}),i=l(ki,{optional:!0}),r=l(Wr),o=l(Ur,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?nn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new qt(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&_t(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){qa.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&D("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(vt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),se("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),A("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",V]},exportAs:["matInput"],features:[k([{provide:_i,useExisting:n}]),re]})}return n})(),$r=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=z({type:n});static \u0275inj=N({imports:[it,it,yr,ue]})}return n})();function Ii(n){let t=n.cloneNode(!0),e=t.querySelectorAll("[id]"),i=n.nodeName.toLowerCase();t.removeAttribute("id");for(let r=0;r<e.length;r++)e[r].removeAttribute("id");return i==="canvas"?Kr(n,t):(i==="input"||i==="select"||i==="textarea")&&Qr(n,t),Zr("canvas",n,t,Kr),Zr("input, textarea, select",n,t,Qr),t}function Zr(n,t,e,i){let r=t.querySelectorAll(n);if(r.length){let o=e.querySelectorAll(n);for(let a=0;a<r.length;a++)i(r[a],o[a])}}var Qa=0;function Qr(n,t){t.type!=="file"&&(t.value=n.value),t.type==="radio"&&t.name&&(t.name=`mat-clone-${t.name}-${Qa++}`)}function Kr(n,t){let e=t.getContext("2d");if(e)try{e.drawImage(n,0,0)}catch{}}function Li(n){let t=n.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height,x:t.x,y:t.y}}function Pi(n,t,e){let{top:i,bottom:r,left:o,right:a}=n;return e>=i&&e<=r&&t>=o&&t<=a}function Ka(n,t){let e=t.left<n.left,i=t.left+t.width>n.right,r=t.top<n.top,o=t.top+t.height>n.bottom;return e||i||r||o}function ct(n,t,e){n.top+=t,n.bottom=n.top+n.height,n.left+=e,n.right=n.left+n.width}function Xr(n,t,e,i){let{top:r,right:o,bottom:a,left:s,width:d,height:c}=n,f=d*t,_=c*t;return i>r-_&&i<a+_&&e>s-f&&e<o+f}var $t=class{_document;positions=new Map;constructor(t){this._document=t}clear(){this.positions.clear()}cache(t){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),t.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:Li(e)})})}handleScroll(t){let e=Ye(t),i=this.positions.get(e);if(!i)return null;let r=i.scrollPosition,o,a;if(e===this._document){let c=this.getViewportScrollPosition();o=c.top,a=c.left}else o=e.scrollTop,a=e.scrollLeft;let s=r.top-o,d=r.left-a;return this.positions.forEach((c,f)=>{c.clientRect&&e!==f&&e.contains(f)&&ct(c.clientRect,s,d)}),r.top=o,r.left=a,{top:s,left:d}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function co(n,t){let e=n.rootNodes;if(e.length===1&&e[0].nodeType===t.ELEMENT_NODE)return e[0];let i=t.createElement("div");return e.forEach(r=>i.appendChild(r)),i}function zi(n,t,e){for(let i in t)if(t.hasOwnProperty(i)){let r=t[i];r?n.setProperty(i,r,e?.has(i)?"important":""):n.removeProperty(i)}return n}function Ge(n,t){let e=t?"":"none";zi(n.style,{"touch-action":t?"":"none","-webkit-user-drag":t?"":"none","-webkit-tap-highlight-color":t?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function Yr(n,t,e){zi(n.style,{position:t?"":"fixed",top:t?"":"0",opacity:t?"":"0",left:t?"":"-999em"},e)}function Zt(n,t){return t&&t!="none"?n+" "+t:n}function Jr(n,t){n.style.width=`${t.width}px`,n.style.height=`${t.height}px`,n.style.transform=ut(t.left,t.top)}function ut(n,t){return`translate3d(${Math.round(n)}px, ${Math.round(t)}px, 0)`}var lt={capture:!0},Ti={passive:!1,capture:!0},Xa=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=F({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(i,r){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return n})(),Hi=(()=>{class n{_ngZone=l(B);_document=l(ve);_styleLoader=l(Ct);_renderer=l($e).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new g;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=L([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new g;pointerUp=new g;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,Ti)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,i){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(Xa),this._activeDragInstances.update(r=>[...r,e]),this._activeDragInstances().length===1)){let r=i.type.startsWith("touch"),o=s=>this.pointerUp.next(s),a=[["scroll",s=>this._scroll.next(s),lt],["selectstart",this._preventDefaultWhileDragging,Ti]];r?a.push(["touchend",o,lt],["touchcancel",o,lt]):a.push(["mouseup",o,lt]),r||a.push(["mousemove",s=>this.pointerMove.next(s),Ti]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=a.map(([s,d,c])=>this._renderer.listen(this._document,s,d,c))})}}stopDragging(e){this._activeDragInstances.update(i=>{let r=i.indexOf(e);return r>-1?(i.splice(r,1),[...i]):i}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let i=[this._scroll];return e&&e!==this._document&&i.push(new We(r=>this._ngZone.runOutsideAngular(()=>{let o=this._renderer.listen(e,"scroll",a=>{this._activeDragInstances().length&&r.next(a)},lt);return()=>{o()}}))),Oe(...i)}registerDirectiveNode(e,i){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,i)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function eo(n){let t=n.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(n)*t}function Ya(n){let t=getComputedStyle(n),e=Fi(t,"transition-property"),i=e.find(s=>s==="transform"||s==="all");if(!i)return 0;let r=e.indexOf(i),o=Fi(t,"transition-duration"),a=Fi(t,"transition-delay");return eo(o[r])+eo(a[r])}function Fi(n,t){return n.getPropertyValue(t).split(",").map(i=>i.trim())}var Ja=new Set(["position"]),Ai=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(t,e,i,r,o,a,s,d,c,f){this._document=t,this._rootElement=e,this._direction=i,this._initialDomRect=r,this._previewTemplate=o,this._previewClass=a,this._pickupPositionOnPage=s,this._initialTransform=d,this._zIndex=c,this._renderer=f}attach(t){this._preview=this._createPreview(),t.appendChild(this._preview),to(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(t){this._preview.style.transform=t}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(t){this._preview.classList.add(t)}getTransitionDuration(){return Ya(this._preview)}addEventListener(t,e){return this._renderer.listen(this._preview,t,e)}_createPreview(){let t=this._previewTemplate,e=this._previewClass,i=t?t.template:null,r;if(i&&t){let o=t.matchSize?this._initialDomRect:null,a=t.viewContainer.createEmbeddedView(i,t.context);a.detectChanges(),r=co(a,this._document),this._previewEmbeddedView=a,t.matchSize?Jr(r,o):r.style.transform=ut(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else r=Ii(this._rootElement),Jr(r,this._initialDomRect),this._initialTransform&&(r.style.transform=this._initialTransform);return zi(r.style,{"pointer-events":"none",margin:to(r)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Ja),Ge(r,!1),r.classList.add("cdk-drag-preview"),r.setAttribute("popover","manual"),r.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(o=>r.classList.add(o)):r.classList.add(e)),r}};function to(n){return"showPopover"in n}var es={passive:!0},io={passive:!1},ts={passive:!1,capture:!0},is=800,no="cdk-drag-placeholder",ro=new Set(["position"]);function uo(n,t,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let i=n.get(ae,null,{optional:!0})||n.get($e).createRenderer(null,null);return new Oi(t,e,n.get(ve),n.get(B),n.get(Je),n.get(Hi),i)}var Oi=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=L(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new g;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=_e.EMPTY;_pointerUpSubscription=_e.EMPTY;_scrollSubscription=_e.EMPTY;_resizeSubscription=_e.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(t){t!==this._disabled&&(this._disabled=t,this._toggleNativeDragInteractions(),this._handles.forEach(e=>Ge(e,t)))}_disabled=!1;beforeStarted=new g;started=new g;released=new g;ended=new g;entered=new g;exited=new g;dropped=new g;moved=this._moveEvents;data;constrainPosition;constructor(t,e,i,r,o,a,s){this._config=e,this._document=i,this._ngZone=r,this._viewportRuler=o,this._dragDropRegistry=a,this._renderer=s,this.withRootElement(t).withParent(e.parentDragRef||null),this._parentPositions=new $t(i),a.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(t){this._handles=t.map(i=>K(i)),this._handles.forEach(i=>Ge(i,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(i=>{this._handles.indexOf(i)>-1&&e.add(i)}),this._disabledHandles=e,this}withPreviewTemplate(t){return this._previewTemplate=t,this}withPlaceholderTemplate(t){return this._placeholderTemplate=t,this}withRootElement(t){let e=K(t);if(e!==this._rootElement){this._removeRootElementListeners();let i=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[i.listen(e,"mousedown",this._pointerDown,io),i.listen(e,"touchstart",this._pointerDown,es),i.listen(e,"dragstart",this._nativeDragStart,io)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(t){return this._boundaryElement=t?K(t):null,this._resizeSubscription.unsubscribe(),t&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(t){return this._parentDragRef=t,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&Ka(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let t=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),i=0,r=0;e.left<t.left?i=t.left-e.left:e.right>t.right&&(i=t.right-e.right),e.top<t.top?r=t.top-e.top:e.bottom>t.bottom&&(r=t.bottom-e.bottom);let o=this._activeTransform.x,a=this._activeTransform.y,s=o+i,d=a+r;this._rootElement.style.transform=ut(s,d),this._activeTransform={x:s,y:d},this._passiveTransform={x:s,y:d}}}disableHandle(t){!this._disabledHandles.has(t)&&this._handles.indexOf(t)>-1&&(this._disabledHandles.add(t),Ge(t,!0))}enableHandle(t){this._disabledHandles.has(t)&&(this._disabledHandles.delete(t),Ge(t,this.disabled))}withDirection(t){return this._direction=t,this}_withDropContainer(t){this._dropContainer=t}getFreeDragPosition(){let t=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:t.x,y:t.y}}setFreeDragPosition(t){return this._activeTransform={x:0,y:0},this._passiveTransform.x=t.x,this._passiveTransform.y=t.y,this._dropContainer||this._applyRootElementTransform(t.x,t.y),this}withPreviewContainer(t){return this._previewContainer=t,this}_sortFromLastPointerPosition(){let t=this._lastKnownPointerPosition;t&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(t),t)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=t=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(t);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,t)}else this.disabled||this._initializeDragSequence(this._rootElement,t)};_pointerMove=t=>{let e=this._getPointerPositionOnPage(t);if(!this._hasStartedDragging()){let r=Math.abs(e.x-this._pickupPositionOnPage.x),o=Math.abs(e.y-this._pickupPositionOnPage.y);if(r+o>=this._config.dragStartThreshold){let s=Date.now()>=this._dragStartTime+this._getDragStartDelay(t),d=this._dropContainer;if(!s){this._endDragSequence(t);return}(!d||!d.isDragging()&&!d.isReceiving())&&(t.cancelable&&t.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(t)))}return}t.cancelable&&t.preventDefault();let i=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(i),this._dropContainer)this._updateActiveDropContainer(i,e);else{let r=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,o=this._activeTransform;o.x=i.x-r.x+this._passiveTransform.x,o.y=i.y-r.y+this._passiveTransform.y,this._applyRootElementTransform(o.x,o.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:i,event:t,distance:this._getDragDistance(i),delta:this._pointerDirectionDelta})})};_pointerUp=t=>{this._endDragSequence(t)};_endDragSequence(t){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:t}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(t),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(t);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:t})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(t){dt(t)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),i=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",ns,ts)}),i){let r=this._rootElement,o=r.parentNode,a=this._placeholder=this._createPlaceholderElement(),s=this._marker=this._marker||this._document.createComment("");o.insertBefore(s,r),this._initialTransform=r.style.transform||"",this._preview=new Ai(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(o,e)),Yr(r,!1,ro),this._document.body.appendChild(o.replaceChild(a,r)),this.started.next({source:this,event:t}),i.start(),this._initialContainer=i,this._initialIndex=i.getItemIndex(this)}else this.started.next({source:this,event:t}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(i?i.getScrollableParents():[])}_initializeDragSequence(t,e){this._parentDragRef&&e.stopPropagation();let i=this.isDragging(),r=dt(e),o=!r&&e.button!==0,a=this._rootElement,s=Ye(e),d=!r&&this._lastTouchEventTime&&this._lastTouchEventTime+is>Date.now(),c=r?vn(e):_n(e);if(s&&s.draggable&&e.type==="mousedown"&&e.preventDefault(),i||o||d||c)return;if(this._handles.length){let v=a.style;this._rootElementTapHighlight=v.webkitTapHighlightColor||"",v.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(v=>this._updateOnScroll(v)),this._boundaryElement&&(this._boundaryRect=Li(this._boundaryElement));let f=this._previewTemplate;this._pickupPositionInElement=f&&f.template&&!f.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,t,e);let _=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:_.x,y:_.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(t){Yr(this._rootElement,!0,ro),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,i=e.getItemIndex(this),r=this._getPointerPositionOnPage(t),o=this._getDragDistance(r),a=e._isOverContainer(r.x,r.y);this.ended.next({source:this,distance:o,dropPoint:r,event:t}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:a,distance:o,dropPoint:r,event:t}),e.drop(this,i,this._initialIndex,this._initialContainer,a,o,r,t),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:t,y:e},{x:i,y:r}){let o=this._initialContainer._getSiblingContainerFromPosition(this,t,e);!o&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(t,e)&&(o=this._initialContainer),o&&o!==this._dropContainer&&this._ngZone.run(()=>{let a=this._dropContainer.getItemIndex(this),s=this._dropContainer.getItemAtIndex(a+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(o,this._dropContainer,s),this._dropContainer=o,this._dropContainer.enter(this,t,e,o===this._initialContainer&&o.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:o,currentIndex:o.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(i,r),this._dropContainer._sortItem(this,t,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(t,e):this._applyPreviewTransform(t-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let t=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(t.left,t.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(i=>{let r=s=>{(!s||this._preview&&Ye(s)===this._preview.element&&s.propertyName==="transform")&&(a(),i(),clearTimeout(o))},o=setTimeout(r,e*1.5),a=this._preview.addEventListener("transitionend",r)}))}_createPlaceholderElement(){let t=this._placeholderTemplate,e=t?t.template:null,i;return e?(this._placeholderRef=t.viewContainer.createEmbeddedView(e,t.context),this._placeholderRef.detectChanges(),i=co(this._placeholderRef,this._document)):i=Ii(this._rootElement),i.style.pointerEvents="none",i.classList.add(no),i}_getPointerPositionInElement(t,e,i){let r=e===this._rootElement?null:e,o=r?r.getBoundingClientRect():t,a=dt(i)?i.targetTouches[0]:i,s=this._getViewportScrollPosition(),d=a.pageX-o.left-s.left,c=a.pageY-o.top-s.top;return{x:o.left-t.left+d,y:o.top-t.top+c}}_getPointerPositionOnPage(t){let e=this._getViewportScrollPosition(),i=dt(t)?t.touches[0]||t.changedTouches[0]||{pageX:0,pageY:0}:t,r=i.pageX-e.left,o=i.pageY-e.top;if(this._ownerSVGElement){let a=this._ownerSVGElement.getScreenCTM();if(a){let s=this._ownerSVGElement.createSVGPoint();return s.x=r,s.y=o,s.matrixTransform(a.inverse())}}return{x:r,y:o}}_getConstrainedPointerPosition(t){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:i,y:r}=this.constrainPosition?this.constrainPosition(t,this,this._initialDomRect,this._pickupPositionInElement):t;if(this.lockAxis==="x"||e==="x"?r=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(i=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:o,y:a}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,s=this._boundaryRect,{width:d,height:c}=this._getPreviewRect(),f=s.top+a,_=s.bottom-(c-a),v=s.left+o,E=s.right-(d-o);i=oo(i,v,E),r=oo(r,f,_)}return{x:i,y:r}}_updatePointerDirectionDelta(t){let{x:e,y:i}=t,r=this._pointerDirectionDelta,o=this._pointerPositionAtLastDirectionChange,a=Math.abs(e-o.x),s=Math.abs(i-o.y);return a>this._config.pointerDirectionChangeThreshold&&(r.x=e>o.x?1:-1,o.x=e),s>this._config.pointerDirectionChangeThreshold&&(r.y=i>o.y?1:-1,o.y=i),r}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let t=this._handles.length>0||!this.isDragging();t!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=t,Ge(this._rootElement,t))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(t=>t()),this._rootElementCleanups=void 0}_applyRootElementTransform(t,e){let i=1/this.scale,r=ut(t*i,e*i),o=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=o.transform&&o.transform!="none"?o.transform:""),o.transform=Zt(r,this._initialTransform)}_applyPreviewTransform(t,e){let i=this._previewTemplate?.template?void 0:this._initialTransform,r=ut(t,e);this._preview.setTransform(Zt(r,i))}_getDragDistance(t){let e=this._pickupPositionOnPage;return e?{x:t.x-e.x,y:t.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:t,y:e}=this._passiveTransform;if(t===0&&e===0||this.isDragging()||!this._boundaryElement)return;let i=this._rootElement.getBoundingClientRect(),r=this._boundaryElement.getBoundingClientRect();if(r.width===0&&r.height===0||i.width===0&&i.height===0)return;let o=r.left-i.left,a=i.right-r.right,s=r.top-i.top,d=i.bottom-r.bottom;r.width>i.width?(o>0&&(t+=o),a>0&&(t-=a)):t=0,r.height>i.height?(s>0&&(e+=s),d>0&&(e-=d)):e=0,(t!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:t})}_getDragStartDelay(t){let e=this.dragStartDelay;return typeof e=="number"?e:dt(t)?e.touch:e?e.mouse:0}_updateOnScroll(t){let e=this._parentPositions.handleScroll(t);if(e){let i=Ye(t);this._boundaryRect&&i!==this._boundaryElement&&i.contains(this._boundaryElement)&&ct(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=Dt(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(t,e){let i=this._previewContainer||"global";if(i==="parent")return t;if(i==="global"){let r=this._document;return e||r.fullscreenElement||r.webkitFullscreenElement||r.mozFullScreenElement||r.msFullscreenElement||r.body}return K(i)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=t=>{if(this._handles.length){let e=this._getTargetHandle(t);e&&!this._disabledHandles.has(e)&&!this.disabled&&t.preventDefault()}else this.disabled||t.preventDefault()};_getTargetHandle(t){return this._handles.find(e=>t.target&&(t.target===e||e.contains(t.target)))}_conditionallyInsertAnchor(t,e,i){if(t===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let r=this._anchor??=Ii(this._placeholder);r.classList.remove(no),r.classList.add("cdk-drag-anchor"),r.style.transform="",i?i.before(r):K(e.element).appendChild(r)}}};function oo(n,t,e){return Math.max(t,Math.min(e,n))}function dt(n){return n.type[0]==="t"}function ns(n){n.preventDefault()}function Xt(n,t,e){let i=Qt(t,n.length-1),r=Qt(e,n.length-1);if(i===r)return;let o=n[i],a=r<i?-1:1;for(let s=i;s!==r;s+=a)n[s]=n[s+a];n[r]=o}function mo(n,t,e,i){let r=Qt(e,n.length-1),o=Qt(i,t.length);n.length&&t.splice(o,0,n.splice(r,1)[0])}function Qt(n,t){return Math.max(0,Math.min(t,n))}var Kt=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(t){this._dragDropRegistry=t}_previousSwap={drag:null,delta:0,overlaps:!1};start(t){this.withItems(t)}sort(t,e,i,r){let o=this._itemPositions,a=this._getItemIndexFromPointerPosition(t,e,i,r);if(a===-1&&o.length>0)return null;let s=this.orientation==="horizontal",d=o.findIndex(x=>x.drag===t),c=o[a],f=o[d].clientRect,_=c.clientRect,v=d>a?1:-1,E=this._getItemOffsetPx(f,_,v),Ie=this._getSiblingOffsetPx(d,o,v),Pe=o.slice();return Xt(o,d,a),o.forEach((x,U)=>{if(Pe[U]===x)return;let Ue=x.drag===t,Yt=Ue?E:Ie,ji=Ue?t.getPlaceholderElement():x.drag.getRootElement();x.offset+=Yt;let Gi=Math.round(x.offset*(1/x.drag.scale));s?(ji.style.transform=Zt(`translate3d(${Gi}px, 0, 0)`,x.initialTransform),ct(x.clientRect,0,Yt)):(ji.style.transform=Zt(`translate3d(0, ${Gi}px, 0)`,x.initialTransform),ct(x.clientRect,Yt,0))}),this._previousSwap.overlaps=Pi(_,e,i),this._previousSwap.drag=c.drag,this._previousSwap.delta=s?r.x:r.y,{previousIndex:d,currentIndex:a}}enter(t,e,i,r){let o=this._activeDraggables,a=o.indexOf(t),s=t.getPlaceholderElement();a>-1&&o.splice(a,1);let d=r==null||r<0?this._getItemIndexFromPointerPosition(t,e,i):r,c=o[d];if(c===t&&(c=o[d+1]),!c&&(d==null||d===-1||d<o.length-1)&&this._shouldEnterAsFirstChild(e,i)&&(c=o[0]),c&&!this._dragDropRegistry.isDragging(c)){let f=c.getRootElement();f.parentElement.insertBefore(s,f),o.splice(d,0,t)}else this._element.appendChild(s),o.push(t);s.style.transform="",this._cacheItemPositions()}withItems(t){this._activeDraggables=t.slice(),this._cacheItemPositions()}withSortPredicate(t){this._sortPredicate=t}reset(){this._activeDraggables?.forEach(t=>{let e=t.getRootElement();if(e){let i=this._itemPositions.find(r=>r.drag===t)?.initialTransform;e.style.transform=i||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(t){return this._getVisualItemPositions().findIndex(e=>e.drag===t)}getItemAtIndex(t){return this._getVisualItemPositions()[t]?.drag||null}updateOnScroll(t,e){this._itemPositions.forEach(({clientRect:i})=>{ct(i,t,e)}),this._itemPositions.forEach(({drag:i})=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}withElementContainer(t){this._element=t}_cacheItemPositions(){let t=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let i=e.getVisibleElement();return{drag:e,offset:0,initialTransform:i.style.transform||"",clientRect:Li(i)}}).sort((e,i)=>t?e.clientRect.left-i.clientRect.left:e.clientRect.top-i.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(t,e,i){let r=this.orientation==="horizontal",o=r?e.left-t.left:e.top-t.top;return i===-1&&(o+=r?e.width-t.width:e.height-t.height),o}_getSiblingOffsetPx(t,e,i){let r=this.orientation==="horizontal",o=e[t].clientRect,a=e[t+i*-1],s=o[r?"width":"height"]*i;if(a){let d=r?"left":"top",c=r?"right":"bottom";i===-1?s-=a.clientRect[d]-o[c]:s+=o[d]-a.clientRect[c]}return s}_shouldEnterAsFirstChild(t,e){if(!this._activeDraggables.length)return!1;let i=this._itemPositions,r=this.orientation==="horizontal";if(i[0].drag!==this._activeDraggables[0]){let a=i[i.length-1].clientRect;return r?t>=a.right:e>=a.bottom}else{let a=i[0].clientRect;return r?t<=a.left:e<=a.top}}_getItemIndexFromPointerPosition(t,e,i,r){let o=this.orientation==="horizontal",a=this._itemPositions.findIndex(({drag:s,clientRect:d})=>{if(s===t)return!1;if(r){let c=o?r.x:r.y;if(s===this._previousSwap.drag&&this._previousSwap.overlaps&&c===this._previousSwap.delta)return!1}return o?e>=Math.floor(d.left)&&e<Math.floor(d.right):i>=Math.floor(d.top)&&i<Math.floor(d.bottom)});return a===-1||!this._sortPredicate(a,t)?-1:a}},Vi=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(t,e){this._document=t,this._dragDropRegistry=e}start(t){let e=this._element.childNodes;this._relatedNodes=[];for(let i=0;i<e.length;i++){let r=e[i];this._relatedNodes.push([r,r.nextSibling])}this.withItems(t)}sort(t,e,i,r){let o=this._getItemIndexFromPointerPosition(t,e,i),a=this._previousSwap;if(o===-1||this._activeItems[o]===t)return null;let s=this._activeItems[o];if(a.drag===s&&a.overlaps&&a.deltaX===r.x&&a.deltaY===r.y)return null;let d=this.getItemIndex(t),c=t.getPlaceholderElement(),f=s.getRootElement();o>d?f.after(c):f.before(c),Xt(this._activeItems,d,o);let _=this._getRootNode().elementFromPoint(e,i);return a.deltaX=r.x,a.deltaY=r.y,a.drag=s,a.overlaps=f===_||f.contains(_),{previousIndex:d,currentIndex:o}}enter(t,e,i,r){let o=this._activeItems.indexOf(t);o>-1&&this._activeItems.splice(o,1);let a=r==null||r<0?this._getItemIndexFromPointerPosition(t,e,i):r;a===-1&&(a=this._getClosestItemIndexToPointer(t,e,i));let s=this._activeItems[a];s&&!this._dragDropRegistry.isDragging(s)?(this._activeItems.splice(a,0,t),s.getRootElement().before(t.getPlaceholderElement())):(this._activeItems.push(t),this._element.appendChild(t.getPlaceholderElement()))}withItems(t){this._activeItems=t.slice()}withSortPredicate(t){this._sortPredicate=t}reset(){let t=this._element,e=this._previousSwap;for(let i=this._relatedNodes.length-1;i>-1;i--){let[r,o]=this._relatedNodes[i];r.parentNode===t&&r.nextSibling!==o&&(o===null?t.appendChild(r):o.parentNode===t&&t.insertBefore(r,o))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(t){return this._activeItems.indexOf(t)}getItemAtIndex(t){return this._activeItems[t]||null}updateOnScroll(){this._activeItems.forEach(t=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(t){t!==this._element&&(this._element=t,this._rootNode=void 0)}_getItemIndexFromPointerPosition(t,e,i){let r=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(i)),o=r?this._activeItems.findIndex(a=>{let s=a.getRootElement();return r===s||s.contains(r)}):-1;return o===-1||!this._sortPredicate(o,t)?-1:o}_getRootNode(){return this._rootNode||(this._rootNode=Dt(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(t,e,i){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let r=1/0,o=-1;for(let a=0;a<this._activeItems.length;a++){let s=this._activeItems[a];if(s!==t){let{x:d,y:c}=s.getRootElement().getBoundingClientRect(),f=Math.hypot(e-d,i-c);f<r&&(r=f,o=a)}}return o}},ao=.05,fo=.05,Y=(function(n){return n[n.NONE=0]="NONE",n[n.UP=1]="UP",n[n.DOWN=2]="DOWN",n})(Y||{}),W=(function(n){return n[n.NONE=0]="NONE",n[n.LEFT=1]="LEFT",n[n.RIGHT=2]="RIGHT",n})(W||{});function ho(n,t){return new Ni(t,n.get(Hi),n.get(ve),n.get(B),n.get(Je))}var Ni=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new g;entered=new g;exited=new g;dropped=new g;sorted=new g;receivingStarted=new g;receivingStopped=new g;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=_e.EMPTY;_verticalScrollDirection=Y.NONE;_horizontalScrollDirection=W.NONE;_scrollNode;_stopScrollTimers=new g;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(t,e,i,r,o){this._dragDropRegistry=e,this._ngZone=r,this._viewportRuler=o;let a=this.element=K(t);this._document=i,this.withOrientation("vertical").withElementContainer(a),e.registerDropContainer(this),this._parentPositions=new $t(i)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(t,e,i,r){this._draggingStarted(),r==null&&this.sortingDisabled&&(r=this._draggables.indexOf(t)),this._sortStrategy.enter(t,e,i,r),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:t,container:this,currentIndex:this.getItemIndex(t)})}exit(t){this._reset(),this.exited.next({item:t,container:this})}drop(t,e,i,r,o,a,s,d={}){this._reset(),this.dropped.next({item:t,currentIndex:e,previousIndex:i,container:this,previousContainer:r,isPointerOverContainer:o,distance:a,dropPoint:s,event:d})}withItems(t){let e=this._draggables;return this._draggables=t,t.forEach(i=>i._withDropContainer(this)),this.isDragging()&&(e.filter(r=>r.isDragging()).every(r=>t.indexOf(r)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(t){return this._direction=t,this._sortStrategy instanceof Kt&&(this._sortStrategy.direction=t),this}connectedTo(t){return this._siblings=t.slice(),this}withOrientation(t){if(t==="mixed")this._sortStrategy=new Vi(this._document,this._dragDropRegistry);else{let e=new Kt(this._dragDropRegistry);e.direction=this._direction,e.orientation=t,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,i)=>this.sortPredicate(e,i,this)),this}withScrollableParents(t){let e=this._container;return this._scrollableElements=t.indexOf(e)===-1?[e,...t]:t.slice(),this}withElementContainer(t){if(t===this._container)return this;let e=K(this.element),i=this._scrollableElements.indexOf(this._container),r=this._scrollableElements.indexOf(t);return i>-1&&this._scrollableElements.splice(i,1),r>-1&&this._scrollableElements.splice(r,1),this._sortStrategy&&this._sortStrategy.withElementContainer(t),this._cachedShadowRoot=null,this._scrollableElements.unshift(t),this._container=t,this}getScrollableParents(){return this._scrollableElements}getItemIndex(t){return this._isDragging?this._sortStrategy.getItemIndex(t):this._draggables.indexOf(t)}getItemAtIndex(t){return this._isDragging?this._sortStrategy.getItemAtIndex(t):this._draggables[t]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(t,e,i,r){if(this.sortingDisabled||!this._domRect||!Xr(this._domRect,ao,e,i))return;let o=this._sortStrategy.sort(t,e,i,r);o&&this.sorted.next({previousIndex:o.previousIndex,currentIndex:o.currentIndex,container:this,item:t})}_startScrollingIfNecessary(t,e){if(this.autoScrollDisabled)return;let i,r=Y.NONE,o=W.NONE;if(this._parentPositions.positions.forEach((a,s)=>{s===this._document||!a.clientRect||i||Xr(a.clientRect,ao,t,e)&&([r,o]=rs(s,a.clientRect,this._direction,t,e),(r||o)&&(i=s))}),!r&&!o){let{width:a,height:s}=this._viewportRuler.getViewportSize(),d={width:a,height:s,top:0,right:a,bottom:s,left:0};r=po(d,e),o=go(d,t),i=window}i&&(r!==this._verticalScrollDirection||o!==this._horizontalScrollDirection||i!==this._scrollNode)&&(this._verticalScrollDirection=r,this._horizontalScrollDirection=o,this._scrollNode=i,(r||o)&&i?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let t=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=t.msScrollSnapType||t.scrollSnapType||"",t.scrollSnapType=t.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let t=this._container.style;t.scrollSnapType=t.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),Qi(0,ft).pipe(j(this._stopScrollTimers)).subscribe(()=>{let t=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===Y.UP?t.scrollBy(0,-e):this._verticalScrollDirection===Y.DOWN&&t.scrollBy(0,e),this._horizontalScrollDirection===W.LEFT?t.scrollBy(-e,0):this._horizontalScrollDirection===W.RIGHT&&t.scrollBy(e,0)})};_isOverContainer(t,e){return this._domRect!=null&&Pi(this._domRect,t,e)}_getSiblingContainerFromPosition(t,e,i){return this._siblings.find(r=>r._canReceive(t,e,i))}_canReceive(t,e,i){if(!this._domRect||!Pi(this._domRect,e,i)||!this.enterPredicate(t,this))return!1;let r=this._getShadowRoot().elementFromPoint(e,i);return r?r===this._container||this._container.contains(r):!1}_startReceiving(t,e){let i=this._activeSiblings;!i.has(t)&&e.every(r=>this.enterPredicate(r,this)||this._draggables.indexOf(r)>-1)&&(i.add(t),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:t,receiver:this,items:e}))}_stopReceiving(t){this._activeSiblings.delete(t),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:t,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(t=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(t);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let t=Dt(this._container);this._cachedShadowRoot=t||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let t=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,t))}};function po(n,t){let{top:e,bottom:i,height:r}=n,o=r*fo;return t>=e-o&&t<=e+o?Y.UP:t>=i-o&&t<=i+o?Y.DOWN:Y.NONE}function go(n,t){let{left:e,right:i,width:r}=n,o=r*fo;return t>=e-o&&t<=e+o?W.LEFT:t>=i-o&&t<=i+o?W.RIGHT:W.NONE}function rs(n,t,e,i,r){let o=po(t,r),a=go(t,i),s=Y.NONE,d=W.NONE;if(o){let c=n.scrollTop;o===Y.UP?c>0&&(s=Y.UP):n.scrollHeight-c>n.clientHeight&&(s=Y.DOWN)}if(a){let c=n.scrollLeft;e==="rtl"?a===W.RIGHT?c<0&&(d=W.RIGHT):n.scrollWidth+c>n.clientWidth&&(d=W.LEFT):a===W.LEFT?c>0&&(d=W.LEFT):n.scrollWidth-c>n.clientWidth&&(d=W.RIGHT)}return[s,d]}var os=(()=>{class n{_injector=l(xe);constructor(){}createDrag(e,i){return uo(this._injector,e,i)}createDropList(e){return ho(this._injector,e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),so=new y("CDK_DRAG_PARENT");var as=new y("CdkDragHandle");var _o=new y("CDK_DRAG_CONFIG"),vo=new y("CdkDropList"),yo=(()=>{class n{element=l(M);dropContainer=l(vo,{optional:!0,skipSelf:!0});_ngZone=l(B);_viewContainerRef=l(be);_dir=l(ke,{optional:!0});_changeDetectorRef=l(ce);_selfHandle=l(as,{optional:!0,self:!0});_parentDrag=l(so,{optional:!0,skipSelf:!0});_dragDropRegistry=l(Hi);_destroyed=new g;_handles=new mt([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new T;released=new T;ended=new T;entered=new T;exited=new T;dropped=new T;moved=new We(e=>{let i=this._dragRef.moved.pipe(Ae(r=>({source:this,pointerPosition:r.pointerPosition,event:r.event,delta:r.delta,distance:r.distance}))).subscribe(e);return()=>{i.unsubscribe()}});_injector=l(xe);constructor(){let e=this.dropContainer,i=l(_o,{optional:!0});this._dragRef=uo(this._injector,this.element,{dragStartThreshold:i&&i.dragStartThreshold!=null?i.dragStartThreshold:5,pointerDirectionChangeThreshold:i&&i.pointerDirectionChangeThreshold!=null?i.pointerDirectionChangeThreshold:5,zIndex:i?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),i&&this._assignDefaults(i),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(j(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){ye(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let i=e.rootElementSelector,r=e.freeDragPosition;i&&!i.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,r&&!r.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let i=this._handles.getValue();i.push(e),this._handles.next(i)}_removeHandle(e){let i=this._handles.getValue(),r=i.indexOf(e);r>-1&&(i.splice(r,1),this._handles.next(i))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,i=e;this.rootElementSelector&&(i=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(i||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):K(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let i=this._dir,r=this.dragStartDelay,o=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,a=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof r=="object"&&r?r:wt(r),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(o).withPreviewTemplate(a).withPreviewContainer(this.previewContainer||"global"),i&&e.withDirection(i.value)}}),e.beforeStarted.pipe(Xi(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let i=this.element.nativeElement.parentElement;for(;i;){let r=this._dragDropRegistry.getDragDirectiveForNode(i);if(r){e.withParent(r._dragRef);break}i=i.parentElement}})}_handleEvents(e){e.started.subscribe(i=>{this.started.emit({source:this,event:i.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(i=>{this.released.emit({source:this,event:i.event})}),e.ended.subscribe(i=>{this.ended.emit({source:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:i.container.data,item:this,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:i.container.data,item:this})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,isPointerOverContainer:i.isPointerOverContainer,item:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event})})}_assignDefaults(e){let{lockAxis:i,dragStartDelay:r,constrainPosition:o,previewClass:a,boundaryElement:s,draggingDisabled:d,rootElementSelector:c,previewContainer:f}=e;this.disabled=d??!1,this.dragStartDelay=r||0,this.lockAxis=i||null,o&&(this.constrainPosition=o),a&&(this.previewClass=a),s&&(this.boundaryElement=s),c&&(this.rootElementSelector=c),f&&(this.previewContainer=f)}_setupHandlesListener(){this._handles.pipe(tn(e=>{let i=e.map(r=>r.element);this._selfHandle&&this.rootElementSelector&&i.push(this.element),this._dragRef.withHandles(i)}),en(e=>Oe(...e.map(i=>i._stateChanges.pipe(qe(i))))),j(this._destroyed)).subscribe(e=>{let i=this._dragRef,r=e.element.nativeElement;e.disabled?i.disableHandle(r):i.enableHandle(r)})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(i,r){i&2&&A("cdk-drag-disabled",r.disabled)("cdk-drag-dragging",r._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",V],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",Xe]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[k([{provide:so,useExisting:n}]),re]})}return n})(),lo=new y("CdkDropListGroup");var bo=(()=>{class n{element=l(M);_changeDetectorRef=l(ce);_scrollDispatcher=l(Mn);_dir=l(ke,{optional:!0});_group=l(lo,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new g;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=l(Te).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new T;entered=new T;exited=new T;sorted=new T;_unsortedItems=new Set;constructor(){let e=l(_o,{optional:!0}),i=l(xe);this._dropListRef=ho(i,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(r,o)=>this.enterPredicate(r.data,o.data),this._dropListRef.sortPredicate=(r,o,a)=>this.sortPredicate(r,o.data,a.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),n._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(i=>i._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let i=this._latestSortedRefs.indexOf(e._dragRef);i>-1&&(this._latestSortedRefs.splice(i,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,i)=>e._dragRef.getVisibleElement().compareDocumentPosition(i._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=n._dropLists.indexOf(this);e>-1&&n._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(qe(this._dir.value),j(this._destroyed)).subscribe(i=>e.withDirection(i)),e.beforeStarted.subscribe(()=>{let i=yn(this.connectedTo).map(r=>{if(typeof r=="string"){let o=n._dropLists.find(a=>a.id===r);return o}return r});if(this._group&&this._group._items.forEach(r=>{i.indexOf(r)===-1&&i.push(r)}),!this._scrollableParentsResolved){let r=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(o=>o.getElementRef().nativeElement);this._dropListRef.withScrollableParents(r),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let r=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(r)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=wt(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(i.filter(r=>r&&r!==this).map(r=>r._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(i=>i._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:this,item:i.item.data,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:this,item:i.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(i=>{this.sorted.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,container:this,item:i.item.data})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,item:i.item.data,isPointerOverContainer:i.isPointerOverContainer,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),Oe(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:i,draggingDisabled:r,sortingDisabled:o,listAutoScrollDisabled:a,listOrientation:s}=e;this.disabled=r??!1,this.sortingDisabled=o??!1,this.autoScrollDisabled=a??!1,this.orientation=s||"vertical",this.lockAxis=i||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=p({type:n,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(i,r){i&2&&(se("id",r.id),A("cdk-drop-list-disabled",r.disabled)("cdk-drop-list-dragging",r._dropListRef.isDragging())("cdk-drop-list-receiving",r._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",V],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",V],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",V],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",V]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[k([{provide:lo,useValue:void 0},{provide:vo,useExisting:n}])]})}return n})();var Co=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=z({type:n});static \u0275inj=N({providers:[os],imports:[Tn]})}return n})();var Bi=(n,t)=>[n,t];function ls(n,t){n&1&&le(0,"mat-progress-bar",6)}function ds(n,t){if(n&1){let e=Me();u(0,"button",28),D("click",function(){ie(e);let r=O(),o=de(15);return ne(r.clearSearch("queue",o))}),u(1,"mat-icon"),w(2,"close"),m()()}}function cs(n,t){n&1&&(u(0,"th",29),w(1," Title "),m())}function us(n,t){if(n&1&&(u(0,"td",30),w(1),m()),n&2){let e=t.$implicit;h(),pe(" ",e.Title," ")}}function ms(n,t){n&1&&(u(0,"th",29),w(1," Owner "),m())}function fs(n,t){if(n&1&&(u(0,"td",30),w(1),m()),n&2){let e=t.$implicit;h(),pe(" ",e.Owner," ")}}function hs(n,t){n&1&&le(0,"tr",31)}function ps(n,t){if(n&1){let e=Me();u(0,"tr",32),D("click",function(){let r=ie(e).$implicit,o=O();return ne(o.onTopicRowClick(r))})("cdkDragStarted",function(r){ie(e);let o=O();return ne(o.onDragStarted(r))}),m()}if(n&2){let e=t.$implicit;H("cdkDragData",e)}}function gs(n,t){if(n&1){let e=Me();u(0,"button",28),D("click",function(){ie(e);let r=O(),o=de(37);return ne(r.clearSearch("wip",o))}),u(1,"mat-icon"),w(2,"close"),m()()}}function _s(n,t){n&1&&(u(0,"th",29),w(1," Title "),m())}function vs(n,t){if(n&1&&(u(0,"td",30),w(1),m()),n&2){let e=t.$implicit;h(),pe(" ",e.Title," ")}}function ys(n,t){n&1&&(u(0,"th",29),w(1," Owner "),m())}function bs(n,t){if(n&1&&(u(0,"td",30),w(1),m()),n&2){let e=t.$implicit;h(),pe(" ",e.Owner," ")}}function Cs(n,t){n&1&&le(0,"tr",31)}function Ds(n,t){if(n&1){let e=Me();u(0,"tr",32),D("click",function(){let r=ie(e).$implicit,o=O();return ne(o.onTopicRowClick(r))})("cdkDragStarted",function(r){ie(e);let o=O();return ne(o.onDragStarted(r))}),m()}if(n&2){let e=t.$implicit;H("cdkDragData",e)}}function ws(n,t){if(n&1){let e=Me();u(0,"button",28),D("click",function(){ie(e);let r=O(),o=de(59);return ne(r.clearSearch("completed",o))}),u(1,"mat-icon"),w(2,"close"),m()()}}function xs(n,t){n&1&&(u(0,"th",29),w(1," Title "),m())}function Ss(n,t){if(n&1&&(u(0,"td",30),w(1),m()),n&2){let e=t.$implicit;h(),pe(" ",e.Title," ")}}function Rs(n,t){n&1&&(u(0,"th",29),w(1," Owner "),m())}function Es(n,t){if(n&1&&(u(0,"td",30),w(1),m()),n&2){let e=t.$implicit;h(),pe(" ",e.Owner," ")}}function Ms(n,t){n&1&&le(0,"tr",31)}function ks(n,t){if(n&1){let e=Me();u(0,"tr",32),D("click",function(){let r=ie(e).$implicit,o=O();return ne(o.onTopicRowClick(r))})("cdkDragStarted",function(r){ie(e);let o=O();return ne(o.onDragStarted(r))}),m()}if(n&2){let e=t.$implicit;H("cdkDragData",e)}}var Ts=2,Do={queue:"queued",wip:"open",completed:"closed"},wo=class n{logger=l(In);router=l(hn);dataService=l(Pn);isLoading=L(!1);queueTopics=L([]);wipTopics=L([]);completedTopics=L([]);queueSearch=L("");wipSearch=L("");completedSearch=L("");filteredQueueTopics=$(()=>this.filterTopics(this.queueTopics(),this.queueSearch()));filteredWipTopics=$(()=>this.filterTopics(this.wipTopics(),this.wipSearch()));filteredCompletedTopics=$(()=>this.filterTopics(this.completedTopics(),this.completedSearch()));displayedColumns=["Title","Owner"];async ngOnInit(){this.logger.debugLog("Wip component initialized"),this.isLoading.set(!0);try{await this.dataService.ready,this.loadTopics()}finally{this.isLoading.set(!1)}}loadTopics(){let t=this.dataService.getItems("Topic");this.queueTopics.set(this.sortByTitle(t.filter(e=>e.Status==="queued"))),this.wipTopics.set(this.sortByTitle(t.filter(e=>e.Status==="open"))),this.completedTopics.set(this.sortByTitle(t.filter(e=>e.Status==="closed")))}filterTopics(t,e){let i=e.trim();if(i.length<Ts)return t;let r=i.toLowerCase();return t.filter(o=>o.Title?.toLowerCase().includes(r)||o.Owner?.toLowerCase().includes(r))}onSearchKeyup(t,e){switch(t){case"queue":this.queueSearch.set(e);break;case"wip":this.wipSearch.set(e);break;case"completed":this.completedSearch.set(e);break}}clearSearch(t,e){e.value="",this.onSearchKeyup(t,"")}sortByTitle=t=>{let e=t.slice();for(let i=1;i<e.length;i++){let r=e[i],o=i-1;for(;o>=0&&e[o].Title>r.Title;)e[o+1]=e[o],o--;e[o+1]=r}return e};drop(t){let e=t.previousContainer.data[t.previousIndex];if(t.previousContainer===t.container){let a=t.container.data.slice();Xt(a,t.previousIndex,t.currentIndex),this.setColumnData(this.getColumnKeyForContainerId(t.container.id),a);return}let i=t.previousContainer.data.slice(),r=t.container.data.slice();mo(i,r,t.previousIndex,t.currentIndex),this.setColumnData(this.getColumnKeyForContainerId(t.previousContainer.id),i),this.setColumnData(this.getColumnKeyForContainerId(t.container.id),r);let o=this.getColumnKeyForContainerId(t.container.id);this.persistStatusChange(e,o)}setColumnData(t,e){switch(t){case"queue":this.queueTopics.set(e);break;case"wip":this.wipTopics.set(e);break;case"completed":this.completedTopics.set(e);break}}getColumnKeyForContainerId(t){switch(t){case"queue-drop-list":return"queue";case"wip-drop-list":return"wip";default:return"completed"}}async persistStatusChange(t,e){let i=Do[e];t.Status=i;try{await this.dataService.updateItem("Topic",t.Id,{Title:t.Title,Owner:t.Owner,Status:i}),this.logger.debugLog("Topic status updated",{id:t.Id,newStatus:i})}catch(r){this.logger.debugLog("Failed to update topic status",r)}}onDragStarted(t){t.source.element.nativeElement.querySelectorAll("td, th").forEach(r=>{let o=r.getBoundingClientRect().width;r.style.width=`${o}px`})}async onAddTopicKeyup(t,e){if(t.key!=="Enter")return;let i=t.target,r=i.value.trim();if(r)try{let o=await this.dataService.addItem("Topic",{Title:r,Owner:"",Status:Do[e]});this.addToColumn(e,o),i.value=""}catch(o){this.logger.debugLog("Failed to create topic",o)}}addToColumn(t,e){switch(t){case"queue":this.queueTopics.set(this.sortByTitle([...this.queueTopics(),e]));break;case"wip":this.wipTopics.set(this.sortByTitle([...this.wipTopics(),e]));break;case"completed":this.completedTopics.set(this.sortByTitle([...this.completedTopics(),e]));break}}onTopicRowClick=t=>{this.logger.debugLog("Topic row clicked",{topicId:t.Id,topicGuid:t.Guid,topicTitle:t.Title}),this.router.navigate(["/topic",t.Guid])};goBack=()=>{this.logger.debugLog("Navigating back to home"),this.router.navigate(["/"])};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=F({type:n,selectors:[["app-wip"]],decls:75,vars:28,consts:[["queueSearchInput",""],["queueList","cdkDropList"],["wipSearchInput",""],["wipList","cdkDropList"],["completedSearchInput",""],["completedList","cdkDropList"],["mode","indeterminate"],[1,"topics-container"],[1,"header-row"],["mat-icon-button","","aria-label","Back to home",3,"click"],[1,"page-title"],[1,"cards-grid"],[1,"topic-card"],["color","primary"],["appearance","outline","subscriptSizing","dynamic",1,"column-search"],["matInput","","type","text","placeholder","Search ...",3,"keyup"],["mat-icon-button","","matSuffix","","type","button","aria-label","Clear search"],["mat-table","","cdkDropList","","id","queue-drop-list",1,"mat-elevation-z0","striped-table",3,"cdkDropListDropped","dataSource","cdkDropListData","cdkDropListConnectedTo"],["matColumnDef","Title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Owner"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","clickable-row","cdkDrag","",3,"cdkDragData","click","cdkDragStarted",4,"matRowDef","matRowDefColumns"],["appearance","outline","subscriptSizing","dynamic",1,"add-topic-field"],["matInput","","type","text","placeholder","New topic title ...",3,"keyup"],["mat-table","","cdkDropList","","id","wip-drop-list",1,"mat-elevation-z0","striped-table",3,"cdkDropListDropped","dataSource","cdkDropListData","cdkDropListConnectedTo"],["mat-table","","cdkDropList","","id","completed-drop-list",1,"mat-elevation-z0","striped-table",3,"cdkDropListDropped","dataSource","cdkDropListData","cdkDropListConnectedTo"],["mat-icon-button","","matSuffix","","type","button","aria-label","Clear search",3,"click"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","","cdkDrag","",1,"clickable-row",3,"click","cdkDragStarted","cdkDragData"]],template:function(e,i){if(e&1&&(b(0,ls,1,0,"mat-progress-bar",6),u(1,"div",7)(2,"div",8)(3,"button",9),D("click",function(){return i.goBack()}),u(4,"mat-icon"),w(5,"arrow_back"),m()(),u(6,"h1",10),w(7,"Work in Progress"),m()(),u(8,"div",11)(9,"mat-card",12)(10,"mat-toolbar",13)(11,"span"),w(12,"Queued"),m(),u(13,"mat-form-field",14)(14,"input",15,0),D("keyup",function(o){return i.onSearchKeyup("queue",o.target.value)}),m(),b(16,ds,3,0,"button",16),m()(),u(17,"mat-card-content")(18,"table",17,1),D("cdkDropListDropped",function(o){return i.drop(o)}),me(20,18),G(21,cs,2,0,"th",19)(22,us,2,1,"td",20),fe(),me(23,21),G(24,ms,2,0,"th",19)(25,fs,2,1,"td",20),fe(),G(26,hs,1,0,"tr",22)(27,ps,1,1,"tr",23),m()(),u(28,"mat-card-footer")(29,"mat-form-field",24)(30,"input",25),D("keyup",function(o){return i.onAddTopicKeyup(o,"queue")}),m()()()(),u(31,"mat-card",12)(32,"mat-toolbar",13)(33,"span"),w(34,"In progress"),m(),u(35,"mat-form-field",14)(36,"input",15,2),D("keyup",function(o){return i.onSearchKeyup("wip",o.target.value)}),m(),b(38,gs,3,0,"button",16),m()(),u(39,"mat-card-content")(40,"table",26,3),D("cdkDropListDropped",function(o){return i.drop(o)}),me(42,18),G(43,_s,2,0,"th",19)(44,vs,2,1,"td",20),fe(),me(45,21),G(46,ys,2,0,"th",19)(47,bs,2,1,"td",20),fe(),G(48,Cs,1,0,"tr",22)(49,Ds,1,1,"tr",23),m()(),u(50,"mat-card-footer")(51,"mat-form-field",24)(52,"input",25),D("keyup",function(o){return i.onAddTopicKeyup(o,"wip")}),m()()()(),u(53,"mat-card",12)(54,"mat-toolbar",13)(55,"span"),w(56,"Closed"),m(),u(57,"mat-form-field",14)(58,"input",15,4),D("keyup",function(o){return i.onSearchKeyup("completed",o.target.value)}),m(),b(60,ws,3,0,"button",16),m()(),u(61,"mat-card-content")(62,"table",27,5),D("cdkDropListDropped",function(o){return i.drop(o)}),me(64,18),G(65,xs,2,0,"th",19)(66,Ss,2,1,"td",20),fe(),me(67,21),G(68,Rs,2,0,"th",19)(69,Es,2,1,"td",20),fe(),G(70,Ms,1,0,"tr",22)(71,ks,1,1,"tr",23),m()(),u(72,"mat-card-footer")(73,"mat-form-field",24)(74,"input",25),D("keyup",function(o){return i.onAddTopicKeyup(o,"completed")}),m()()()()()()),e&2){let r=de(19),o=de(41),a=de(63);C(i.isLoading()?0:-1),h(16),C(i.queueSearch()?16:-1),h(2),H("dataSource",i.filteredQueueTopics())("cdkDropListData",i.filteredQueueTopics())("cdkDropListConnectedTo",bt(19,Bi,o,a)),h(8),H("matHeaderRowDef",i.displayedColumns),h(),H("matRowDefColumns",i.displayedColumns),h(11),C(i.wipSearch()?38:-1),h(2),H("dataSource",i.filteredWipTopics())("cdkDropListData",i.filteredWipTopics())("cdkDropListConnectedTo",bt(22,Bi,r,a)),h(8),H("matHeaderRowDef",i.displayedColumns),h(),H("matRowDefColumns",i.displayedColumns),h(11),C(i.completedSearch()?60:-1),h(2),H("dataSource",i.filteredCompletedTopics())("cdkDropListData",i.filteredCompletedTopics())("cdkDropListConnectedTo",bt(25,Bi,r,o)),h(8),H("matHeaderRowDef",i.displayedColumns),h(),H("matRowDefColumns",i.displayedColumns)}},dependencies:[Nn,An,On,Vn,Rn,Sn,gn,pn,xn,wn,Hn,zn,rr,Zn,Kn,er,Xn,Qn,tr,Yn,Jn,ir,nr,it,It,gi,$r,qr,Co,bo,yo,Gr],styles:[".topics-container[_ngcontent-%COMP%]{padding:20px}.header-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:16px}.page-title[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:500}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-top:20px}.topic-card[_ngcontent-%COMP%]{padding:0;border-radius:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}mat-toolbar[_ngcontent-%COMP%]{min-height:56px;height:auto;padding:4px 16px;font-size:14px;font-weight:500;display:flex;align-items:center;gap:12px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-card-content[_ngcontent-%COMP%]{padding:0!important}table[_ngcontent-%COMP%]{width:100%}.striped-table[_ngcontent-%COMP%]{width:100%;table-layout:fixed}.striped-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), .striped-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){width:40%}.striped-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), .striped-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){width:auto}.striped-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#f5f5f5}.striped-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}.clickable-row[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .2s ease}.clickable-row[_ngcontent-%COMP%]:hover{background-color:#e3f2fd!important}.mat-mdc-header-row[_ngcontent-%COMP%]{background-color:#fafafa}.mat-mdc-header-cell[_ngcontent-%COMP%]{font-weight:600;color:#333}.mat-mdc-cell[_ngcontent-%COMP%], .mat-mdc-header-cell[_ngcontent-%COMP%]{padding:12px 16px}.cdk-drag-preview[_ngcontent-%COMP%]{display:table;box-sizing:border-box;background-color:#fff;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;border-radius:4px;z-index:1000}.cdk-drag-preview[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 16px;background-color:#fff}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drop-list-dragging[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drop-list-receiving[_ngcontent-%COMP%]{background-color:#e3f2fd}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .3s cubic-bezier(0,0,.2,1)}.column-search[_ngcontent-%COMP%]{flex:1 1 auto;width:100%}.column-search[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px}.column-search[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{min-height:0;padding-top:8px;padding-bottom:8px}.column-search[_ngcontent-%COMP%]   input.mat-mdc-input-element[_ngcontent-%COMP%]{color:#212121}.column-search[_ngcontent-%COMP%]   input.mat-mdc-input-element[_ngcontent-%COMP%]::placeholder{color:#757575;opacity:1}.column-search[_ngcontent-%COMP%]   .mdc-notched-outline__leading[_ngcontent-%COMP%], .column-search[_ngcontent-%COMP%]   .mdc-notched-outline__notch[_ngcontent-%COMP%], .column-search[_ngcontent-%COMP%]   .mdc-notched-outline__trailing[_ngcontent-%COMP%]{border-color:transparent!important}.column-search[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]{width:32px;height:32px;padding:4px;color:#757575}.column-search[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}mat-card-footer[_ngcontent-%COMP%]{display:block;padding:8px 12px;border-top:1px solid rgba(0,0,0,.12)}.add-topic-field[_ngcontent-%COMP%]{width:100%}.add-topic-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{min-height:0;padding-top:8px;padding-bottom:8px}"]})};export{wo as Wip};
