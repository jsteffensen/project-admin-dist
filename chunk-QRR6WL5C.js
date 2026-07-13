import{a as yt,b as Ae,c as Tn,d as Fn,f as Qe,g as In,h as Pn,i as On}from"./chunk-AWWOC4S4.js";import{a as wn,b as Dn,c as xn,d as Sn,e as Mn,f as kn}from"./chunk-MWZN7OHI.js";import{$ as me,$a as ue,A as Zi,Aa as q,Ab as mn,B as H,Ba as De,Bb as pn,C as Yi,Ca as ft,Cb as _n,D as ut,Da as C,Db as gt,E as Kt,Ea as F,F as ee,Fa as xe,Fb as $e,G,Ga as V,Gb as ve,H as x,Ha as Ue,Hb as vt,I as l,Ia as mt,Ib as Z,Ja as S,K as te,Ka as R,Kb as gn,L as ie,La as nn,Lb as vn,M as be,Ma as rn,N as Ce,Na as Yt,O as P,Oa as se,P as z,Qa as L,Qb as Re,R as O,S as ht,Sa as w,T as ne,Ta as on,U as Q,Ua as ce,V as T,Va as M,Vb as Xt,Wa as pt,X as p,Xb as yn,Y as fe,Z as re,Zb as Oe,_ as We,_a as sn,_b as bn,a as K,aa as we,ab as $,ac as Cn,b as J,ba as pe,bb as an,bc as Rn,c as he,cb as qe,cc as En,d as je,da as N,db as ln,dc as An,ea as W,eb as ge,ec as Vn,f as _,fa as m,fb as Ie,g as at,gb as I,ha as k,hb as dn,i as zi,ia as B,ib as cn,j as lt,ja as Xi,k as Bi,ka as Ji,l as ji,lb as un,m as Qt,ma as _e,n as Gi,na as y,o as Te,oa as b,p as dt,r as Wi,ra as A,s as Ui,sa as u,sb as hn,t as Fe,ta as h,u as ct,ua as oe,v as qi,va as en,w as $i,wa as tn,wb as _t,x as Qi,xa as Zt,xb as Se,y as Ki,ya as le,yb as Pe,z as Ge,za as de,zb as fn}from"./chunk-WTKTUKUU.js";var bt=class{applyChanges(t,e,i,r,o){t.forEachOperation((s,a,d)=>{let c,f;if(s.previousIndex==null){let g=i(s,a,d);c=e.createEmbeddedView(g.templateRef,g.context,g.index),f=Ae.INSERTED}else d==null?(e.remove(a),f=Ae.REMOVED):(c=e.get(a),e.move(c,d),f=Ae.MOVED);o&&o({context:c?.context,operation:f,record:s})})}detach(){}};var Co=[[["caption"]],[["colgroup"],["col"]],"*"],wo=["caption","colgroup, col","*"];function Do(n,t){n&1&&V(0,2)}function xo(n,t){n&1&&(u(0,"thead",0),q(1,1),h(),u(2,"tbody",0),q(3,2)(4,3),h(),u(5,"tfoot",0),q(6,4),h())}function So(n,t){n&1&&q(0,1)(1,2)(2,3)(3,4)}var X=new x("CDK_TABLE");var Dt=(()=>{class n{template=l(re);constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),xt=(()=>{class n{template=l(re);constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),Hn=(()=>{class n{template=l(re);constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),Ve=(()=>{class n{_table=l(X,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,r,o){if(i&1&&Ue(o,Dt,5)(o,xt,5)(o,Hn,5),i&2){let s;S(s=R())&&(r.cell=s.first),S(s=R())&&(r.headerCell=s.first),S(s=R())&&(r.footerCell=s.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",I],stickyEnd:[2,"stickyEnd","stickyEnd",I]}})}return n})(),wt=class{constructor(t,e){e.nativeElement.classList.add(...t._columnCssClassName)}},zn=(()=>{class n extends wt{constructor(){super(l(Ve),l(T))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[k]})}return n})();var Bn=(()=>{class n extends wt{constructor(){let e=l(Ve),i=l(T);super(e,i);let r=e._table?._getCellRole();r&&i.nativeElement.setAttribute("role",r)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[k]})}return n})();var ei=(()=>{class n{template=l(re);_differs=l(Ie);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Ze?e.headerCell.template:this instanceof ti?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,features:[ne]})}return n})(),Ze=(()=>{class n extends ei{_table=l(X,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(l(re),l(Ie))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",I]},features:[k,ne]})}return n})(),ti=(()=>{class n extends ei{_table=l(X,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(l(re),l(Ie))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",I]},features:[k,ne]})}return n})(),St=(()=>{class n extends ei{_table=l(X,{optional:!0});when;constructor(){super(l(re),l(Ie))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[k]})}return n})(),Ee=(()=>{class n{_viewContainer=l(pe);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),ii=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=N({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&q(0,0)},dependencies:[Ee],encapsulation:2})}return n})();var ni=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=N({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&q(0,0)},dependencies:[Ee],encapsulation:2})}return n})(),jn=(()=>{class n{templateRef=l(re);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),Nn=["top","bottom","left","right"],Jt=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(t=>this._updateCachedSizes(t)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(t,e,i=!0,r=!0,o,s,a){this._isNativeHtmlTable=t,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=s,this._tableInjector=a,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(t,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(t);let i=[];for(let r of t)r.nodeType===r.ELEMENT_NODE&&i.push(r,...Array.from(r.children));fe({write:()=>{for(let r of i)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(t,e,i,r=!0,o=!0){if(!t.length||!this._isBrowser||!(e.some(D=>D)||i.some(D=>D))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let s=t[0],a=s.children.length,d=this.direction==="rtl",c=d?"right":"left",f=d?"left":"right",g=e.lastIndexOf(!0),v=i.indexOf(!0),E,Me,ke;o&&this._updateStickyColumnReplayQueue({rows:[...t],stickyStartStates:[...e],stickyEndStates:[...i]}),fe({earlyRead:()=>{E=this._getCellWidths(s,r),Me=this._getStickyStartColumnPositions(E,e),ke=this._getStickyEndColumnPositions(E,i)},write:()=>{for(let D of t)for(let j=0;j<a;j++){let Be=D.children[j];e[j]&&this._addStickyStyle(Be,c,Me[j],j===g),i[j]&&this._addStickyStyle(Be,f,ke[j],j===v)}this._positionListener&&E.some(D=>!!D)&&(this._positionListener.stickyColumnsUpdated({sizes:g===-1?[]:E.slice(0,g+1).map((D,j)=>e[j]?D:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:v===-1?[]:E.slice(v).map((D,j)=>i[j+v]?D:null).reverse()}))}},{injector:this._tableInjector})}stickRows(t,e,i){if(!this._isBrowser)return;let r=i==="bottom"?t.slice().reverse():t,o=i==="bottom"?e.slice().reverse():e,s=[],a=[],d=[];fe({earlyRead:()=>{for(let c=0,f=0;c<r.length;c++){if(!o[c])continue;s[c]=f;let g=r[c];d[c]=this._isNativeHtmlTable?Array.from(g.children):[g];let v=this._retrieveElementSize(g).height;f+=v,a[c]=v}},write:()=>{let c=o.lastIndexOf(!0);for(let f=0;f<r.length;f++){if(!o[f])continue;let g=s[f],v=f===c;for(let E of d[f])this._addStickyStyle(E,i,g,v)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:a,offsets:s,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:a,offsets:s,elements:d})}},{injector:this._tableInjector})}updateStickyFooterContainer(t,e){this._isNativeHtmlTable&&fe({write:()=>{let i=t.querySelector("tfoot");i&&(e.some(r=>!r)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(t,e){if(!t.classList.contains(this._stickCellCss))return;for(let r of e)t.style[r]="",t.classList.remove(this._borderCellCss[r]);Nn.some(r=>e.indexOf(r)===-1&&t.style[r])?t.style.zIndex=this._getCalculatedZIndex(t):(t.style.zIndex="",this._needsPositionStickyOnElement&&(t.style.position=""),t.classList.remove(this._stickCellCss))}_addStickyStyle(t,e,i,r){t.classList.add(this._stickCellCss),r&&t.classList.add(this._borderCellCss[e]),t.style[e]=`${i}px`,t.style.zIndex=this._getCalculatedZIndex(t),this._needsPositionStickyOnElement&&(t.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(t){let e={top:100,bottom:10,left:1,right:1},i=0;for(let r of Nn)t.style[r]&&(i+=e[r]);return i?`${i}`:""}_getCellWidths(t,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],r=t.children;for(let o=0;o<r.length;o++){let s=r[o];i.push(this._retrieveElementSize(s).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(t,e){let i=[],r=0;for(let o=0;o<t.length;o++)e[o]&&(i[o]=r,r+=t[o]);return i}_getStickyEndColumnPositions(t,e){let i=[],r=0;for(let o=t.length;o>0;o--)e[o]&&(i[o]=r,r+=t[o]);return i}_retrieveElementSize(t){let e=this._elemSizeCache.get(t);if(e)return e;let i=t.getBoundingClientRect(),r={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(t,r),this._resizeObserver.observe(t,{box:"border-box"})),r}_updateStickyColumnReplayQueue(t){this._removeFromStickyColumnReplayQueue(t.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(t)}_removeFromStickyColumnReplayQueue(t){let e=new Set(t);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(t){let e=!1;for(let i of t){let r=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};r.width!==this._elemSizeCache.get(i.target)?.width&&Ro(i.target)&&(e=!0),this._elemSizeCache.set(i.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Ro(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(t=>n.classList.contains(t))}var Ke=new x("STICKY_POSITIONING_LISTENER");var ri=(()=>{class n{viewContainer=l(pe);elementRef=l(T);constructor(){let e=l(X);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","rowOutlet",""]]})}return n})(),oi=(()=>{class n{viewContainer=l(pe);elementRef=l(T);constructor(){let e=l(X);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),si=(()=>{class n{viewContainer=l(pe);elementRef=l(T);constructor(){let e=l(X);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),ai=(()=>{class n{viewContainer=l(pe);elementRef=l(T);constructor(){let e=l(X);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),li=(()=>{class n{_differs=l(Ie);_changeDetectorRef=l(ge);_elementRef=l(T);_dir=l(Se,{optional:!0});_platform=l(ve);_viewRepeater;_viewportRuler=l(Qe);_injector=l(be);_virtualScrollViewport=l(In,{optional:!0,host:!0});_positionListener=l(Ke,{optional:!0})||l(Ke,{optional:!0,skipSelf:!0});_document=l(Ce);_data;_renderedRange;_onDestroy=new _;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new _;_footerRowStickyUpdates=new _;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new _;_dataStream=new _;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new P;viewChange=new at({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){l(new an("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(H(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Tn:new bt,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),yt(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(r,o,s)=>this._getEmbeddedViewArgs(r.item,s),r=>r.item.data,r=>{r.operation===Ae.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=Ln(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=Ln(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,s)=>{this._addStickyColumnStyles([o],this._headerRowDefs[s])}),this._rowDefs.forEach(o=>{let s=[];for(let a=0;a<i.length;a++)this._renderRows[a].rowDef===o&&s.push(i[a]);this._addStickyColumnStyles(s,o)}),r.forEach((o,s)=>{this._addStickyColumnStyles([o],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let s=this._data[o],a=this._getRenderRowsForData(s,o,r.get(s));this._cachedRenderRowsMap.has(s)||this._cachedRenderRowsMap.set(s,new WeakMap);for(let d=0;d<a.length;d++){let c=a[d],f=this._cachedRenderRowsMap.get(c.data);f.has(c.rowDef)?f.get(c.rowDef).push(c):f.set(c.rowDef,[c]),e.push(c)}}return e}_getRenderRowsForData(e,i,r){return this._getRowDefs(e,i).map(s=>{let a=r&&r.has(s)?r.get(s):[];if(a.length){let d=a.shift();return d.dataIndex=i,d}else return{data:e,rowDef:s,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ct(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Ct(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ct(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ct(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(s,a)=>{let d=!!a.getColumnsDiff();return s||d},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||r||o}_switchDataSource(e){this._data=[],yt(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;yt(this.dataSource)?e=this.dataSource.connect(this):Gi(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Qt(this.dataSource)),this._renderChangeSubscription=dt([e,this.viewChange]).pipe(H(this._onDestroy)).subscribe(([i,r])=>{this._data=i||[],this._renderedRange=r,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let r=Array.from(i?.columns||[]).map(a=>{let d=this._columnDefsByName.get(a);return d}),o=r.map(a=>a.sticky),s=r.map(a=>a.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,s,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(s=>s.when&&s.when(i,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,i){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:i}}_renderRow(e,i,r,o={}){let s=e.viewContainer.createEmbeddedView(i.template,o,r);return this._renderCellTemplateForItem(i,o),s}_renderCellTemplateForItem(e,i){for(let r of this._getCellTemplates(e))Ee.mostRecentCellOutlet&&Ee.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,r=e.length;i<r;i++){let s=e.get(i).context;s.count=r,s.first=i===0,s.last=i===r-1,s.even=i%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[i].dataIndex,s.renderIndex=i):s.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let r=this._columnDefsByName.get(i);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,r)=>i||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new Jt(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:Qt()).pipe(H(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?lt:zi;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(qi(0,i),H(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),dt([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(H(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let s=0;s<o.elements.length;s++){let a=o.elements[s];if(a){let d=o.offsets[s],c=r!==0?Math.max(r-d,d):-d;for(let f of a)f.style.top=`${-c}px`}}}),dt([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(H(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let s=0;s<o.elements.length;s++){let a=o.elements[s];if(a)for(let d of a)d.style.bottom=`${r+o.offsets[s]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(i){let o=r.createEmbeddedView(e.templateRef),s=o.rootNodes[0];if(o.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE){s.setAttribute("role","row"),s.classList.add(...e._contentClassNames);let a=s.querySelectorAll(e._cellSelector);for(let d=0;d<a.length;d++)a[d].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let s=e.start-r.start,a=e.end-e.start,d,c;for(let v=0;v<a;v++){let E=o.get(v+s);if(E&&E.rootNodes.length){d=c=E.rootNodes[0];break}}for(let v=a-1;v>-1;v--){let E=o.get(v+s);if(E&&E.rootNodes.length){c=E.rootNodes[E.rootNodes.length-1];break}}let f=d?.getBoundingClientRect?.(),g=c?.getBoundingClientRect?.();return f&&g?g.bottom-f.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=N({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,r,o){if(i&1&&Ue(o,jn,5)(o,Ve,5)(o,St,5)(o,Ze,5)(o,ti,5),i&2){let s;S(s=R())&&(r._noDataRow=s.first),S(s=R())&&(r._contentColumnDefs=s),S(s=R())&&(r._contentRowDefs=s),S(s=R())&&(r._contentHeaderRowDefs=s),S(s=R())&&(r._contentFooterRowDefs=s)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,r){i&2&&L("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",I],fixedLayout:[2,"fixedLayout","fixedLayout",I],recycleRows:[2,"recycleRows","recycleRows",I]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[M([{provide:X,useExisting:n},{provide:Ke,useValue:null}])],ngContentSelectors:wo,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(xe(Co),V(0),V(1,1),y(2,Do,1,0),y(3,xo,7,0)(4,So,4,0)),i&2&&(p(2),b(r._isServer?2:-1),p(),b(r._isNativeHtmlTable?3:4))},dependencies:[oi,ri,ai,si],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function Ct(n,t){return n.concat(Array.from(t))}function Ln(n,t){let e=t.toUpperCase(),i=n.viewContainer.element.nativeElement;for(;i;){let r=i.nodeType===1?i.nodeName:null;if(r===e)return i;if(r==="TABLE")break;i=i.parentNode}return null}var Gn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=W({type:n});static \u0275inj=G({imports:[On]})}return n})();var Eo=[[["caption"]],[["colgroup"],["col"]],"*"],Mo=["caption","colgroup, col","*"];function ko(n,t){n&1&&V(0,2)}function To(n,t){n&1&&(u(0,"thead",0),q(1,1),h(),u(2,"tbody",2),q(3,3)(4,4),h(),u(5,"tfoot",0),q(6,5),h())}function Fo(n,t){n&1&&q(0,1)(1,3)(2,4)(3,5)}var Wn=(()=>{class n extends li{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Q(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,r){i&2&&L("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[M([{provide:li,useExisting:n},{provide:X,useExisting:n},{provide:Ke,useValue:null}]),k],ngContentSelectors:Mo,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(xe(Eo),V(0),V(1,1),y(2,ko,1,0),y(3,To,7,0)(4,Fo,4,0)),i&2&&(p(2),b(r._isServer?2:-1),p(),b(r._isNativeHtmlTable?3:4))},dependencies:[oi,ri,ai,si],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2})}return n})(),Un=(()=>{class n extends Dt{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Q(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","matCellDef",""]],features:[M([{provide:Dt,useExisting:n}]),k]})}return n})(),qn=(()=>{class n extends xt{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Q(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","matHeaderCellDef",""]],features:[M([{provide:xt,useExisting:n}]),k]})}return n})();var $n=(()=>{class n extends Ve{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Q(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[M([{provide:Ve,useExisting:n}]),k]})}return n})(),Qn=(()=>{class n extends zn{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Q(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[k]})}return n})();var Kn=(()=>{class n extends Bn{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Q(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[k]})}return n})();var Zn=(()=>{class n extends Ze{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Q(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",I]},features:[M([{provide:Ze,useExisting:n}]),k]})}return n})();var Yn=(()=>{class n extends St{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Q(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[M([{provide:St,useExisting:n}]),k]})}return n})(),Xn=(()=>{class n extends ii{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Q(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[M([{provide:ii,useExisting:n}]),k],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&q(0,0)},dependencies:[Ee],encapsulation:2})}return n})();var Jn=(()=>{class n extends ni{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Q(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[M([{provide:ni,useExisting:n}]),k],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&q(0,0)},dependencies:[Ee],encapsulation:2})}return n})();var er=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=W({type:n});static \u0275inj=G({imports:[Gn,Pe]})}return n})();var di=class{_box;_destroyed=new _;_resizeSubject=new _;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new je(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),i.unsubscribe(),this._elementObservables.delete(t)}}).pipe(ct(e=>e.some(i=>i.target===t)),Ki({bufferSize:1,refCount:!0}),H(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},tr=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=l(z);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new di(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ee({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Po=["notch"],Oo=["matFormFieldNotchedOutline",""],Ao=["*"],ir=["iconPrefixContainer"],nr=["textPrefixContainer"],rr=["iconSuffixContainer"],or=["textSuffixContainer"],Vo=["textField"],No=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Lo=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Ho(n,t){n&1&&oe(0,"span",21)}function zo(n,t){if(n&1&&(u(0,"label",20),V(1,1),y(2,Ho,1,0,"span",21),h()),n&2){let e=F(2);A("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),_e("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),b(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Bo(n,t){if(n&1&&y(0,zo,3,5,"label",20),n&2){let e=F();b(e._hasFloatingLabel()?0:-1)}}function jo(n,t){n&1&&oe(0,"div",7)}function Go(n,t){}function Wo(n,t){if(n&1&&B(0,Go,0,0,"ng-template",13),n&2){F(2);let e=se(1);A("ngTemplateOutlet",e)}}function Uo(n,t){if(n&1&&(u(0,"div",9),y(1,Wo,1,1,null,13),h()),n&2){let e=F();A("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),b(e._forceDisplayInfixLabel()?-1:1)}}function qo(n,t){n&1&&(u(0,"div",10,2),V(2,2),h())}function $o(n,t){n&1&&(u(0,"div",11,3),V(2,3),h())}function Qo(n,t){}function Ko(n,t){if(n&1&&B(0,Qo,0,0,"ng-template",13),n&2){F();let e=se(1);A("ngTemplateOutlet",e)}}function Zo(n,t){n&1&&(u(0,"div",14,4),V(2,4),h())}function Yo(n,t){n&1&&(u(0,"div",15,5),V(2,5),h())}function Xo(n,t){n&1&&oe(0,"div",16)}function Jo(n,t){n&1&&(u(0,"div",18),V(1,6),h())}function es(n,t){if(n&1&&(u(0,"mat-hint",22),w(1),h()),n&2){let e=F(2);A("id",e._hintLabelId),p(),on(e.hintLabel)}}function ts(n,t){if(n&1&&(u(0,"div",19),y(1,es,2,2,"mat-hint",22),V(2,7),oe(3,"div",23),V(4,8),h()),n&2){let e=F();p(),b(e.hintLabel?1:-1)}}var ci=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["mat-label"]]})}return n})(),is=new x("MatError");var ui=(()=>{class n{align="start";id=l(Re).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(ft("id",r.id),_e("align",null),L("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),ns=new x("MatPrefix");var hr=new x("MatSuffix"),hi=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[M([{provide:hr,useExisting:n}])]})}return n})(),fr=new x("FloatingLabelParent"),sr=(()=>{class n{_elementRef=l(T);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(tr);_ngZone=l(z);_parent=l(fr);_resizeSubscription=new he;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return rs(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&L("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function rs(n){let t=n;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var ar="mdc-line-ripple--active",Rt="mdc-line-ripple--deactivating",lr=(()=>{class n{_elementRef=l(T);_cleanupTransitionEnd;constructor(){let e=l(z),i=l(me);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Rt),e.add(ar)}deactivate(){this._elementRef.nativeElement.classList.add(Rt)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Rt);e.propertyName==="opacity"&&r&&i.remove(ar,Rt)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),dr=(()=>{class n{_elementRef=l(T);_ngZone=l(z);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=N({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&mt(Po,5),i&2){let o;S(o=R())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&L("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Oo,ngContentSelectors:Ao,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(xe(),Zt(0,"div",1),en(1,"div",2,0),V(3),tn(),Zt(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),fi=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n})}return n})();var mi=new x("MatFormField"),os=new x("MAT_FORM_FIELD_DEFAULT_OPTIONS"),cr="fill",ss="auto",ur="fixed",as="translateY(-50%)",Et=(()=>{class n{_elementRef=l(T);_changeDetectorRef=l(ge);_platform=l(ve);_idGenerator=l(Re);_ngZone=l(z);_defaults=l(os,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=qe("iconPrefixContainer");_textPrefixContainerSignal=qe("textPrefixContainer");_iconSuffixContainerSignal=qe("iconSuffixContainer");_textSuffixContainerSignal=qe("textSuffixContainer");_prefixSuffixContainers=$(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ln(ci);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Oe(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ss}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||cr;this._appearanceSignal.set(i)}_appearanceSignal=O(cr);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ur}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ur}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new _;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=yn();constructor(){let e=this._defaults,i=l(Se);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ht(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=$(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Ge([void 0,void 0]),Te(()=>[i.errorState,i.userAriaDescribedBy]),Qi(),ct(([[o,s],[a,d]])=>o!==a||s!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(H(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Fe(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){cn({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=$(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,d=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",g=`${s+a}px`,E=`calc(${f} * (${g} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Me=`var(--mat-mdc-form-field-label-transform, ${as} translateX(${E}))`,ke=s+a+d+c;return[Me,ke]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=N({type:n,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(nn(o,r._labelChild,ci,5),Ue(o,fi,5)(o,ns,5)(o,hr,5)(o,is,5)(o,ui,5)),i&2){Yt();let s;S(s=R())&&(r._formFieldControl=s.first),S(s=R())&&(r._prefixChildren=s),S(s=R())&&(r._suffixChildren=s),S(s=R())&&(r._errorChildren=s),S(s=R())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(rn(r._iconPrefixContainerSignal,ir,5)(r._textPrefixContainerSignal,nr,5)(r._iconSuffixContainerSignal,rr,5)(r._textSuffixContainerSignal,or,5),mt(Vo,5)(ir,5)(nr,5)(rr,5)(or,5)(sr,5)(dr,5)(lr,5)),i&2){Yt(4);let o;S(o=R())&&(r._textField=o.first),S(o=R())&&(r._iconPrefixContainer=o.first),S(o=R())&&(r._textPrefixContainer=o.first),S(o=R())&&(r._iconSuffixContainer=o.first),S(o=R())&&(r._textSuffixContainer=o.first),S(o=R())&&(r._floatingLabel=o.first),S(o=R())&&(r._notchedOutline=o.first),S(o=R())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&L("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[M([{provide:mi,useExisting:n},{provide:fr,useExisting:n}])],ngContentSelectors:Lo,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(xe(No),B(0,Bo,1,1,"ng-template",null,0,sn),u(2,"div",6,1),C("click",function(s){return r._control.onContainerClick(s)}),y(4,jo,1,0,"div",7),u(5,"div",8),y(6,Uo,2,2,"div",9),y(7,qo,3,0,"div",10),y(8,$o,3,0,"div",11),u(9,"div",12),y(10,Ko,1,1,null,13),V(11),h(),y(12,Zo,3,0,"div",14),y(13,Yo,3,0,"div",15),h(),y(14,Xo,1,0,"div",16),h(),u(15,"div",17),y(16,Jo,2,0,"div",18)(17,ts,5,1,"div",19),h()),i&2){let o;p(2),L("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),b(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),b(r._hasOutline()?6:-1),p(),b(r._hasIconPrefix?7:-1),p(),b(r._hasTextPrefix?8:-1),p(2),b(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),b(r._hasTextSuffix?12:-1),p(),b(r._hasIconSuffix?13:-1),p(),b(r._hasOutline()?-1:14),p(),L("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();p(),b((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[sr,dr,un,lr,ui],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var Ye=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=W({type:n});static \u0275inj=G({imports:[vn,Et,Pe]})}return n})();var ds=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return n})(),cs={passive:!0},mr=(()=>{class n{_platform=l(ve);_ngZone=l(z);_renderer=l(We).createRenderer(null,null);_styleLoader=l(_t);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Bi;this._styleLoader.load(ds);let i=Z(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new _,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,cs)));return this._monitoredElements.set(i,{subject:o,unlisten:d}),o}stopMonitoring(e){let i=Z(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ee({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var pr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=W({type:n});static \u0275inj=G({})}return n})();function gi(n){return n==null||vi(n)===0}function vi(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var wr=new x(""),Dr=new x(""),us=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,kt=class{static min(t){return hs(t)}static max(t){return fs(t)}static required(t){return ms(t)}static requiredTrue(t){return ps(t)}static email(t){return _s(t)}static minLength(t){return gs(t)}static maxLength(t){return vs(t)}static pattern(t){return ys(t)}static nullValidator(t){return xr()}static compose(t){return Tr(t)}static composeAsync(t){return Fr(t)}};function hs(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function fs(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function ms(n){return gi(n.value)?{required:!0}:null}function ps(n){return n.value===!0?null:{required:!0}}function _s(n){return gi(n.value)||us.test(n.value)?null:{email:!0}}function gs(n){return t=>{let e=t.value?.length??vi(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function vs(n){return t=>{let e=t.value?.length??vi(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function ys(n){if(!n)return xr;let t,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),i=>{if(gi(i.value))return null;let r=i.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function xr(n){return null}function Sr(n){return n!=null}function Rr(n){return Ji(n)?ji(n):n}function Er(n){let t={};return n.forEach(e=>{t=e!=null?K(K({},t),e):t}),Object.keys(t).length===0?null:t}function Mr(n,t){return t.map(e=>e(n))}function bs(n){return!n.validate}function kr(n){return n.map(t=>bs(t)?t:e=>t.validate(e))}function Tr(n){if(!n)return null;let t=n.filter(Sr);return t.length==0?null:function(e){return Er(Mr(e,t))}}function yi(n){return n!=null?Tr(kr(n)):null}function Fr(n){if(!n)return null;let t=n.filter(Sr);return t.length==0?null:function(e){let i=Mr(e,t).map(Rr);return Wi(i).pipe(Te(Er))}}function bi(n){return n!=null?Fr(kr(n)):null}function _r(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Ir(n){return n._rawValidators}function Pr(n){return n._rawAsyncValidators}function pi(n){return n?Array.isArray(n)?n:[n]:[]}function Tt(n,t){return Array.isArray(n)?n.includes(t):n===t}function gr(n,t){let e=pi(t);return pi(n).forEach(r=>{Tt(e,r)||e.push(r)}),e}function vr(n,t){return pi(t).filter(e=>!Tt(n,e))}var Ft=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=yi(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=bi(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},He=class extends Ft{name;get formDirective(){return null}get path(){return null}},It=class extends Ft{_parent=null;name=null;valueAccessor=null};var Xe="VALID",Mt="INVALID",Ne="PENDING",Je="DISABLED",ye=class{},Pt=class extends ye{value;source;constructor(t,e){super(),this.value=t,this.source=e}},tt=class extends ye{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},it=class extends ye{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},Le=class extends ye{status;source;constructor(t,e){super(),this.status=t,this.source=e}},Ot=class extends ye{source;constructor(t){super(),this.source=t}},At=class extends ye{source;constructor(t){super(),this.source=t}};function Or(n){return(zt(n)?n.validators:n)||null}function Cs(n){return Array.isArray(n)?yi(n):n||null}function Ar(n,t){return(zt(t)?t.asyncValidators:n)||null}function ws(n){return Array.isArray(n)?bi(n):n||null}function zt(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Ds(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new ut(1e3,"");if(!i[e])throw new ut(1001,"")}function xs(n,t,e){n._forEachChild((i,r)=>{if(e[r]===void 0)throw new ut(-1002,"")})}var Vt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return ue(this.statusReactive)}set status(t){ue(()=>this.statusReactive.set(t))}_status=$(()=>this.statusReactive());statusReactive=O(void 0);get valid(){return this.status===Xe}get invalid(){return this.status===Mt}get pending(){return this.status===Ne}get disabled(){return this.status===Je}get enabled(){return this.status!==Je}errors;get pristine(){return ue(this.pristineReactive)}set pristine(t){ue(()=>this.pristineReactive.set(t))}_pristine=$(()=>this.pristineReactive());pristineReactive=O(!0);get dirty(){return!this.pristine}get touched(){return ue(this.touchedReactive)}set touched(t){ue(()=>this.touchedReactive.set(t))}_touched=$(()=>this.touchedReactive());touchedReactive=O(!1);get untouched(){return!this.touched}_events=new _;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(gr(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(gr(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(vr(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(vr(t,this._rawAsyncValidators))}hasValidator(t){return Tt(this._rawValidators,t)}hasAsyncValidator(t){return Tt(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(J(K({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new it(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new it(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(J(K({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new tt(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new tt(!0,i))}markAsPending(t={}){this.status=Ne;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Le(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(J(K({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Je,this.errors=null,this._forEachChild(r=>{r.disable(J(K({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Pt(this.value,i)),this._events.next(new Le(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(J(K({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Xe,this._forEachChild(i=>{i.enable(J(K({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(J(K({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Xe||this.status===Ne)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Pt(this.value,e)),this._events.next(new Le(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(J(K({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Je:Xe}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=Ne,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let i=Rr(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i?.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new Le(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new P,this.statusChanges=new P}_calculateStatus(){return this._allControlsDisabled()?Je:this.errors?Mt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ne)?Ne:this._anyControlsHaveStatus(Mt)?Mt:Xe}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new tt(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new it(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){zt(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Cs(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=ws(this._rawAsyncValidators)}},Nt=class extends Vt{constructor(t,e,i){super(Or(e),Ar(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){xs(this,!0,t),Object.keys(t).forEach(i=>{Ds(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let r=this.controls[i];r&&r.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,r)=>{i.reset(t?t[r]:null,J(K({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new At(this))}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var Ci=new x("",{factory:()=>wi}),wi="always";function _i(n,t,e=wi){Di(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),Rs(n,t),Ms(n,t),Es(n,t),Ss(n,t)}function yr(n,t,e=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),Ht(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Lt(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Ss(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Di(n,t){let e=Ir(n);t.validator!==null?n.setValidators(_r(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let i=Pr(n);t.asyncValidator!==null?n.setAsyncValidators(_r(i,t.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Lt(t._rawValidators,r),Lt(t._rawAsyncValidators,r)}function Ht(n,t){let e=!1;if(n!==null){if(t.validator!==null){let r=Ir(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==t.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(t.asyncValidator!==null){let r=Pr(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==t.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let i=()=>{};return Lt(t._rawValidators,i),Lt(t._rawAsyncValidators,i),e}function Rs(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Vr(n,t)})}function Es(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Vr(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function Vr(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ms(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Nr(n,t){n==null,Di(n,t)}function ks(n,t){return Ht(n,t)}function Lr(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Ts(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var Fs={provide:He,useExisting:Kt(()=>xi)},et=Promise.resolve(),xi=(()=>{class n extends He{callSetDisabledState;get submitted(){return ue(this.submittedReactive)}_submitted=$(()=>this.submittedReactive());submittedReactive=O(!1);_directives=new Set;form;ngSubmit=new P;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Nt({},yi(e),bi(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){et.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),_i(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){et.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){et.then(()=>{let i=this._findContainer(e.path),r=new Nt({});Nr(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){et.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){et.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Lr(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ot(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||n)(we(wr,10),we(Dr,10),we(Ci,8))};static \u0275dir=m({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&C("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[M([Fs]),k]})}return n})();function br(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function Cr(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Is=class extends Vt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(Or(e),Ar(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),zt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Cr(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new At(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){br(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){br(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Cr(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Ps=n=>n instanceof Is;var Os=(()=>{class n extends He{callSetDisabledState;get submitted(){return ue(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=$(()=>this._submittedReactive());_submittedReactive=O(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ht(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return _i(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){yr(e.control||null,e,!1),Ts(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Lr(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ot(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(yr(i||null,e),Ps(r)&&(_i(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);Nr(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&ks(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Di(this.form,this),this._oldForm&&Ht(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(we(wr,10),we(Dr,10),we(Ci,8))};static \u0275dir=m({type:n,features:[k,ne]})}return n})();var As={provide:He,useExisting:Kt(()=>Si)},Si=(()=>{class n extends Os{form=null;ngSubmit=new P;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Q(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&C("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[M([As]),k]})}return n})();var Vs=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=W({type:n});static \u0275inj=G({})}return n})();var Hr=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Ci,useValue:e.callSetDisabledState??wi}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=W({type:n});static \u0275inj=G({imports:[Vs]})}return n})();var zr=new x("MAT_INPUT_VALUE_ACCESSOR");var Br=(()=>{class n{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ee({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Bt=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(t,e,i,r,o){this._defaultMatcher=t,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let t=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==t&&(this.errorState=o,this._stateChanges.next())}};var Ns=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Ls=new x("MAT_INPUT_CONFIG"),jr=(()=>{class n{_elementRef=l(T);_platform=l(ve);ngControl=l(It,{optional:!0,self:!0});_autofillMonitor=l(mr);_ngZone=l(z);_formField=l(mi,{optional:!0});_renderer=l(me);_uid=l(Re).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(Ls,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new _;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Oe(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(kt.required)??!1}set required(e){this._required=Oe(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Xt().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Oe(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Xt().has(e));constructor(){let e=l(xi,{optional:!0}),i=l(Si,{optional:!0}),r=l(Br),o=l(zr,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?Xi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Bt(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ht(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ns.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&C("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(ft("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),_e("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),L("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",I]},exportAs:["matInput"],features:[M([{provide:fi,useExisting:n}]),ne]})}return n})(),Gr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=W({type:n});static \u0275inj=G({imports:[Ye,Ye,pr,Pe]})}return n})();function Mi(n){let t=n.cloneNode(!0),e=t.querySelectorAll("[id]"),i=n.nodeName.toLowerCase();t.removeAttribute("id");for(let r=0;r<e.length;r++)e[r].removeAttribute("id");return i==="canvas"?qr(n,t):(i==="input"||i==="select"||i==="textarea")&&Ur(n,t),Wr("canvas",n,t,qr),Wr("input, textarea, select",n,t,Ur),t}function Wr(n,t,e,i){let r=t.querySelectorAll(n);if(r.length){let o=e.querySelectorAll(n);for(let s=0;s<r.length;s++)i(r[s],o[s])}}var zs=0;function Ur(n,t){t.type!=="file"&&(t.value=n.value),t.type==="radio"&&t.name&&(t.name=`mat-clone-${t.name}-${zs++}`)}function qr(n,t){let e=t.getContext("2d");if(e)try{e.drawImage(n,0,0)}catch{}}function Oi(n){let t=n.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height,x:t.x,y:t.y}}function ki(n,t,e){let{top:i,bottom:r,left:o,right:s}=n;return e>=i&&e<=r&&t>=o&&t<=s}function Bs(n,t){let e=t.left<n.left,i=t.left+t.width>n.right,r=t.top<n.top,o=t.top+t.height>n.bottom;return e||i||r||o}function ot(n,t,e){n.top+=t,n.bottom=n.top+n.height,n.left+=e,n.right=n.left+n.width}function $r(n,t,e,i){let{top:r,right:o,bottom:s,left:a,width:d,height:c}=n,f=d*t,g=c*t;return i>r-g&&i<s+g&&e>a-f&&e<o+f}var jt=class{_document;positions=new Map;constructor(t){this._document=t}clear(){this.positions.clear()}cache(t){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),t.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:Oi(e)})})}handleScroll(t){let e=$e(t),i=this.positions.get(e);if(!i)return null;let r=i.scrollPosition,o,s;if(e===this._document){let c=this.getViewportScrollPosition();o=c.top,s=c.left}else o=e.scrollTop,s=e.scrollLeft;let a=r.top-o,d=r.left-s;return this.positions.forEach((c,f)=>{c.clientRect&&e!==f&&e.contains(f)&&ot(c.clientRect,a,d)}),r.top=o,r.left=s,{top:a,left:d}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function oo(n,t){let e=n.rootNodes;if(e.length===1&&e[0].nodeType===t.ELEMENT_NODE)return e[0];let i=t.createElement("div");return e.forEach(r=>i.appendChild(r)),i}function Ai(n,t,e){for(let i in t)if(t.hasOwnProperty(i)){let r=t[i];r?n.setProperty(i,r,e?.has(i)?"important":""):n.removeProperty(i)}return n}function ze(n,t){let e=t?"":"none";Ai(n.style,{"touch-action":t?"":"none","-webkit-user-drag":t?"":"none","-webkit-tap-highlight-color":t?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function Qr(n,t,e){Ai(n.style,{position:t?"":"fixed",top:t?"":"0",opacity:t?"":"0",left:t?"":"-999em"},e)}function Gt(n,t){return t&&t!="none"?n+" "+t:n}function Kr(n,t){n.style.width=`${t.width}px`,n.style.height=`${t.height}px`,n.style.transform=st(t.left,t.top)}function st(n,t){return`translate3d(${Math.round(n)}px, ${Math.round(t)}px, 0)`}var nt={capture:!0},Ri={passive:!1,capture:!0},js=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(i,r){},styles:[`@layer cdk-resets {
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
`],encapsulation:2,changeDetection:0})}return n})(),Vi=(()=>{class n{_ngZone=l(z);_document=l(Ce);_styleLoader=l(_t);_renderer=l(We).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new _;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=O([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new _;pointerUp=new _;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,Ri)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,i){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(js),this._activeDragInstances.update(r=>[...r,e]),this._activeDragInstances().length===1)){let r=i.type.startsWith("touch"),o=a=>this.pointerUp.next(a),s=[["scroll",a=>this._scroll.next(a),nt],["selectstart",this._preventDefaultWhileDragging,Ri]];r?s.push(["touchend",o,nt],["touchcancel",o,nt]):s.push(["mouseup",o,nt]),r||s.push(["mousemove",a=>this.pointerMove.next(a),Ri]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=s.map(([a,d,c])=>this._renderer.listen(this._document,a,d,c))})}}stopDragging(e){this._activeDragInstances.update(i=>{let r=i.indexOf(e);return r>-1?(i.splice(r,1),[...i]):i}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let i=[this._scroll];return e&&e!==this._document&&i.push(new je(r=>this._ngZone.runOutsideAngular(()=>{let o=this._renderer.listen(e,"scroll",s=>{this._activeDragInstances().length&&r.next(s)},nt);return()=>{o()}}))),Fe(...i)}registerDirectiveNode(e,i){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,i)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ee({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Zr(n){let t=n.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(n)*t}function Gs(n){let t=getComputedStyle(n),e=Ei(t,"transition-property"),i=e.find(a=>a==="transform"||a==="all");if(!i)return 0;let r=e.indexOf(i),o=Ei(t,"transition-duration"),s=Ei(t,"transition-delay");return Zr(o[r])+Zr(s[r])}function Ei(n,t){return n.getPropertyValue(t).split(",").map(i=>i.trim())}var Ws=new Set(["position"]),Ti=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(t,e,i,r,o,s,a,d,c,f){this._document=t,this._rootElement=e,this._direction=i,this._initialDomRect=r,this._previewTemplate=o,this._previewClass=s,this._pickupPositionOnPage=a,this._initialTransform=d,this._zIndex=c,this._renderer=f}attach(t){this._preview=this._createPreview(),t.appendChild(this._preview),Yr(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(t){this._preview.style.transform=t}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(t){this._preview.classList.add(t)}getTransitionDuration(){return Gs(this._preview)}addEventListener(t,e){return this._renderer.listen(this._preview,t,e)}_createPreview(){let t=this._previewTemplate,e=this._previewClass,i=t?t.template:null,r;if(i&&t){let o=t.matchSize?this._initialDomRect:null,s=t.viewContainer.createEmbeddedView(i,t.context);s.detectChanges(),r=oo(s,this._document),this._previewEmbeddedView=s,t.matchSize?Kr(r,o):r.style.transform=st(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else r=Mi(this._rootElement),Kr(r,this._initialDomRect),this._initialTransform&&(r.style.transform=this._initialTransform);return Ai(r.style,{"pointer-events":"none",margin:Yr(r)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Ws),ze(r,!1),r.classList.add("cdk-drag-preview"),r.setAttribute("popover","manual"),r.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(o=>r.classList.add(o)):r.classList.add(e)),r}};function Yr(n){return"showPopover"in n}var Us={passive:!0},Xr={passive:!1},qs={passive:!1,capture:!0},$s=800,Jr="cdk-drag-placeholder",eo=new Set(["position"]);function so(n,t,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let i=n.get(me,null,{optional:!0})||n.get(We).createRenderer(null,null);return new Fi(t,e,n.get(Ce),n.get(z),n.get(Qe),n.get(Vi),i)}var Fi=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=O(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new _;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=he.EMPTY;_pointerUpSubscription=he.EMPTY;_scrollSubscription=he.EMPTY;_resizeSubscription=he.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(t){t!==this._disabled&&(this._disabled=t,this._toggleNativeDragInteractions(),this._handles.forEach(e=>ze(e,t)))}_disabled=!1;beforeStarted=new _;started=new _;released=new _;ended=new _;entered=new _;exited=new _;dropped=new _;moved=this._moveEvents;data;constrainPosition;constructor(t,e,i,r,o,s,a){this._config=e,this._document=i,this._ngZone=r,this._viewportRuler=o,this._dragDropRegistry=s,this._renderer=a,this.withRootElement(t).withParent(e.parentDragRef||null),this._parentPositions=new jt(i),s.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(t){this._handles=t.map(i=>Z(i)),this._handles.forEach(i=>ze(i,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(i=>{this._handles.indexOf(i)>-1&&e.add(i)}),this._disabledHandles=e,this}withPreviewTemplate(t){return this._previewTemplate=t,this}withPlaceholderTemplate(t){return this._placeholderTemplate=t,this}withRootElement(t){let e=Z(t);if(e!==this._rootElement){this._removeRootElementListeners();let i=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[i.listen(e,"mousedown",this._pointerDown,Xr),i.listen(e,"touchstart",this._pointerDown,Us),i.listen(e,"dragstart",this._nativeDragStart,Xr)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(t){return this._boundaryElement=t?Z(t):null,this._resizeSubscription.unsubscribe(),t&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(t){return this._parentDragRef=t,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&Bs(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let t=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),i=0,r=0;e.left<t.left?i=t.left-e.left:e.right>t.right&&(i=t.right-e.right),e.top<t.top?r=t.top-e.top:e.bottom>t.bottom&&(r=t.bottom-e.bottom);let o=this._activeTransform.x,s=this._activeTransform.y,a=o+i,d=s+r;this._rootElement.style.transform=st(a,d),this._activeTransform={x:a,y:d},this._passiveTransform={x:a,y:d}}}disableHandle(t){!this._disabledHandles.has(t)&&this._handles.indexOf(t)>-1&&(this._disabledHandles.add(t),ze(t,!0))}enableHandle(t){this._disabledHandles.has(t)&&(this._disabledHandles.delete(t),ze(t,this.disabled))}withDirection(t){return this._direction=t,this}_withDropContainer(t){this._dropContainer=t}getFreeDragPosition(){let t=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:t.x,y:t.y}}setFreeDragPosition(t){return this._activeTransform={x:0,y:0},this._passiveTransform.x=t.x,this._passiveTransform.y=t.y,this._dropContainer||this._applyRootElementTransform(t.x,t.y),this}withPreviewContainer(t){return this._previewContainer=t,this}_sortFromLastPointerPosition(){let t=this._lastKnownPointerPosition;t&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(t),t)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=t=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(t);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,t)}else this.disabled||this._initializeDragSequence(this._rootElement,t)};_pointerMove=t=>{let e=this._getPointerPositionOnPage(t);if(!this._hasStartedDragging()){let r=Math.abs(e.x-this._pickupPositionOnPage.x),o=Math.abs(e.y-this._pickupPositionOnPage.y);if(r+o>=this._config.dragStartThreshold){let a=Date.now()>=this._dragStartTime+this._getDragStartDelay(t),d=this._dropContainer;if(!a){this._endDragSequence(t);return}(!d||!d.isDragging()&&!d.isReceiving())&&(t.cancelable&&t.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(t)))}return}t.cancelable&&t.preventDefault();let i=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(i),this._dropContainer)this._updateActiveDropContainer(i,e);else{let r=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,o=this._activeTransform;o.x=i.x-r.x+this._passiveTransform.x,o.y=i.y-r.y+this._passiveTransform.y,this._applyRootElementTransform(o.x,o.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:i,event:t,distance:this._getDragDistance(i),delta:this._pointerDirectionDelta})})};_pointerUp=t=>{this._endDragSequence(t)};_endDragSequence(t){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:t}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(t),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(t);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:t})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(t){rt(t)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),i=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",Qs,qs)}),i){let r=this._rootElement,o=r.parentNode,s=this._placeholder=this._createPlaceholderElement(),a=this._marker=this._marker||this._document.createComment("");o.insertBefore(a,r),this._initialTransform=r.style.transform||"",this._preview=new Ti(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(o,e)),Qr(r,!1,eo),this._document.body.appendChild(o.replaceChild(s,r)),this.started.next({source:this,event:t}),i.start(),this._initialContainer=i,this._initialIndex=i.getItemIndex(this)}else this.started.next({source:this,event:t}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(i?i.getScrollableParents():[])}_initializeDragSequence(t,e){this._parentDragRef&&e.stopPropagation();let i=this.isDragging(),r=rt(e),o=!r&&e.button!==0,s=this._rootElement,a=$e(e),d=!r&&this._lastTouchEventTime&&this._lastTouchEventTime+$s>Date.now(),c=r?_n(e):pn(e);if(a&&a.draggable&&e.type==="mousedown"&&e.preventDefault(),i||o||d||c)return;if(this._handles.length){let v=s.style;this._rootElementTapHighlight=v.webkitTapHighlightColor||"",v.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(v=>this._updateOnScroll(v)),this._boundaryElement&&(this._boundaryRect=Oi(this._boundaryElement));let f=this._previewTemplate;this._pickupPositionInElement=f&&f.template&&!f.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,t,e);let g=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:g.x,y:g.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(t){Qr(this._rootElement,!0,eo),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,i=e.getItemIndex(this),r=this._getPointerPositionOnPage(t),o=this._getDragDistance(r),s=e._isOverContainer(r.x,r.y);this.ended.next({source:this,distance:o,dropPoint:r,event:t}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:s,distance:o,dropPoint:r,event:t}),e.drop(this,i,this._initialIndex,this._initialContainer,s,o,r,t),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:t,y:e},{x:i,y:r}){let o=this._initialContainer._getSiblingContainerFromPosition(this,t,e);!o&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(t,e)&&(o=this._initialContainer),o&&o!==this._dropContainer&&this._ngZone.run(()=>{let s=this._dropContainer.getItemIndex(this),a=this._dropContainer.getItemAtIndex(s+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(o,this._dropContainer,a),this._dropContainer=o,this._dropContainer.enter(this,t,e,o===this._initialContainer&&o.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:o,currentIndex:o.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(i,r),this._dropContainer._sortItem(this,t,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(t,e):this._applyPreviewTransform(t-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let t=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(t.left,t.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(i=>{let r=a=>{(!a||this._preview&&$e(a)===this._preview.element&&a.propertyName==="transform")&&(s(),i(),clearTimeout(o))},o=setTimeout(r,e*1.5),s=this._preview.addEventListener("transitionend",r)}))}_createPlaceholderElement(){let t=this._placeholderTemplate,e=t?t.template:null,i;return e?(this._placeholderRef=t.viewContainer.createEmbeddedView(e,t.context),this._placeholderRef.detectChanges(),i=oo(this._placeholderRef,this._document)):i=Mi(this._rootElement),i.style.pointerEvents="none",i.classList.add(Jr),i}_getPointerPositionInElement(t,e,i){let r=e===this._rootElement?null:e,o=r?r.getBoundingClientRect():t,s=rt(i)?i.targetTouches[0]:i,a=this._getViewportScrollPosition(),d=s.pageX-o.left-a.left,c=s.pageY-o.top-a.top;return{x:o.left-t.left+d,y:o.top-t.top+c}}_getPointerPositionOnPage(t){let e=this._getViewportScrollPosition(),i=rt(t)?t.touches[0]||t.changedTouches[0]||{pageX:0,pageY:0}:t,r=i.pageX-e.left,o=i.pageY-e.top;if(this._ownerSVGElement){let s=this._ownerSVGElement.getScreenCTM();if(s){let a=this._ownerSVGElement.createSVGPoint();return a.x=r,a.y=o,a.matrixTransform(s.inverse())}}return{x:r,y:o}}_getConstrainedPointerPosition(t){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:i,y:r}=this.constrainPosition?this.constrainPosition(t,this,this._initialDomRect,this._pickupPositionInElement):t;if(this.lockAxis==="x"||e==="x"?r=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(i=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:o,y:s}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,a=this._boundaryRect,{width:d,height:c}=this._getPreviewRect(),f=a.top+s,g=a.bottom-(c-s),v=a.left+o,E=a.right-(d-o);i=to(i,v,E),r=to(r,f,g)}return{x:i,y:r}}_updatePointerDirectionDelta(t){let{x:e,y:i}=t,r=this._pointerDirectionDelta,o=this._pointerPositionAtLastDirectionChange,s=Math.abs(e-o.x),a=Math.abs(i-o.y);return s>this._config.pointerDirectionChangeThreshold&&(r.x=e>o.x?1:-1,o.x=e),a>this._config.pointerDirectionChangeThreshold&&(r.y=i>o.y?1:-1,o.y=i),r}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let t=this._handles.length>0||!this.isDragging();t!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=t,ze(this._rootElement,t))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(t=>t()),this._rootElementCleanups=void 0}_applyRootElementTransform(t,e){let i=1/this.scale,r=st(t*i,e*i),o=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=o.transform&&o.transform!="none"?o.transform:""),o.transform=Gt(r,this._initialTransform)}_applyPreviewTransform(t,e){let i=this._previewTemplate?.template?void 0:this._initialTransform,r=st(t,e);this._preview.setTransform(Gt(r,i))}_getDragDistance(t){let e=this._pickupPositionOnPage;return e?{x:t.x-e.x,y:t.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:t,y:e}=this._passiveTransform;if(t===0&&e===0||this.isDragging()||!this._boundaryElement)return;let i=this._rootElement.getBoundingClientRect(),r=this._boundaryElement.getBoundingClientRect();if(r.width===0&&r.height===0||i.width===0&&i.height===0)return;let o=r.left-i.left,s=i.right-r.right,a=r.top-i.top,d=i.bottom-r.bottom;r.width>i.width?(o>0&&(t+=o),s>0&&(t-=s)):t=0,r.height>i.height?(a>0&&(e+=a),d>0&&(e-=d)):e=0,(t!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:t})}_getDragStartDelay(t){let e=this.dragStartDelay;return typeof e=="number"?e:rt(t)?e.touch:e?e.mouse:0}_updateOnScroll(t){let e=this._parentPositions.handleScroll(t);if(e){let i=$e(t);this._boundaryRect&&i!==this._boundaryElement&&i.contains(this._boundaryElement)&&ot(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=gt(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(t,e){let i=this._previewContainer||"global";if(i==="parent")return t;if(i==="global"){let r=this._document;return e||r.fullscreenElement||r.webkitFullscreenElement||r.mozFullScreenElement||r.msFullscreenElement||r.body}return Z(i)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=t=>{if(this._handles.length){let e=this._getTargetHandle(t);e&&!this._disabledHandles.has(e)&&!this.disabled&&t.preventDefault()}else this.disabled||t.preventDefault()};_getTargetHandle(t){return this._handles.find(e=>t.target&&(t.target===e||e.contains(t.target)))}_conditionallyInsertAnchor(t,e,i){if(t===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let r=this._anchor??=Mi(this._placeholder);r.classList.remove(Jr),r.classList.add("cdk-drag-anchor"),r.style.transform="",i?i.before(r):Z(e.element).appendChild(r)}}};function to(n,t,e){return Math.max(t,Math.min(e,n))}function rt(n){return n.type[0]==="t"}function Qs(n){n.preventDefault()}function qt(n,t,e){let i=Wt(t,n.length-1),r=Wt(e,n.length-1);if(i===r)return;let o=n[i],s=r<i?-1:1;for(let a=i;a!==r;a+=s)n[a]=n[a+s];n[r]=o}function ao(n,t,e,i){let r=Wt(e,n.length-1),o=Wt(i,t.length);n.length&&t.splice(o,0,n.splice(r,1)[0])}function Wt(n,t){return Math.max(0,Math.min(t,n))}var Ut=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(t){this._dragDropRegistry=t}_previousSwap={drag:null,delta:0,overlaps:!1};start(t){this.withItems(t)}sort(t,e,i,r){let o=this._itemPositions,s=this._getItemIndexFromPointerPosition(t,e,i,r);if(s===-1&&o.length>0)return null;let a=this.orientation==="horizontal",d=o.findIndex(D=>D.drag===t),c=o[s],f=o[d].clientRect,g=c.clientRect,v=d>s?1:-1,E=this._getItemOffsetPx(f,g,v),Me=this._getSiblingOffsetPx(d,o,v),ke=o.slice();return qt(o,d,s),o.forEach((D,j)=>{if(ke[j]===D)return;let Be=D.drag===t,$t=Be?E:Me,Li=Be?t.getPlaceholderElement():D.drag.getRootElement();D.offset+=$t;let Hi=Math.round(D.offset*(1/D.drag.scale));a?(Li.style.transform=Gt(`translate3d(${Hi}px, 0, 0)`,D.initialTransform),ot(D.clientRect,0,$t)):(Li.style.transform=Gt(`translate3d(0, ${Hi}px, 0)`,D.initialTransform),ot(D.clientRect,$t,0))}),this._previousSwap.overlaps=ki(g,e,i),this._previousSwap.drag=c.drag,this._previousSwap.delta=a?r.x:r.y,{previousIndex:d,currentIndex:s}}enter(t,e,i,r){let o=this._activeDraggables,s=o.indexOf(t),a=t.getPlaceholderElement();s>-1&&o.splice(s,1);let d=r==null||r<0?this._getItemIndexFromPointerPosition(t,e,i):r,c=o[d];if(c===t&&(c=o[d+1]),!c&&(d==null||d===-1||d<o.length-1)&&this._shouldEnterAsFirstChild(e,i)&&(c=o[0]),c&&!this._dragDropRegistry.isDragging(c)){let f=c.getRootElement();f.parentElement.insertBefore(a,f),o.splice(d,0,t)}else this._element.appendChild(a),o.push(t);a.style.transform="",this._cacheItemPositions()}withItems(t){this._activeDraggables=t.slice(),this._cacheItemPositions()}withSortPredicate(t){this._sortPredicate=t}reset(){this._activeDraggables?.forEach(t=>{let e=t.getRootElement();if(e){let i=this._itemPositions.find(r=>r.drag===t)?.initialTransform;e.style.transform=i||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(t){return this._getVisualItemPositions().findIndex(e=>e.drag===t)}getItemAtIndex(t){return this._getVisualItemPositions()[t]?.drag||null}updateOnScroll(t,e){this._itemPositions.forEach(({clientRect:i})=>{ot(i,t,e)}),this._itemPositions.forEach(({drag:i})=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}withElementContainer(t){this._element=t}_cacheItemPositions(){let t=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let i=e.getVisibleElement();return{drag:e,offset:0,initialTransform:i.style.transform||"",clientRect:Oi(i)}}).sort((e,i)=>t?e.clientRect.left-i.clientRect.left:e.clientRect.top-i.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(t,e,i){let r=this.orientation==="horizontal",o=r?e.left-t.left:e.top-t.top;return i===-1&&(o+=r?e.width-t.width:e.height-t.height),o}_getSiblingOffsetPx(t,e,i){let r=this.orientation==="horizontal",o=e[t].clientRect,s=e[t+i*-1],a=o[r?"width":"height"]*i;if(s){let d=r?"left":"top",c=r?"right":"bottom";i===-1?a-=s.clientRect[d]-o[c]:a+=o[d]-s.clientRect[c]}return a}_shouldEnterAsFirstChild(t,e){if(!this._activeDraggables.length)return!1;let i=this._itemPositions,r=this.orientation==="horizontal";if(i[0].drag!==this._activeDraggables[0]){let s=i[i.length-1].clientRect;return r?t>=s.right:e>=s.bottom}else{let s=i[0].clientRect;return r?t<=s.left:e<=s.top}}_getItemIndexFromPointerPosition(t,e,i,r){let o=this.orientation==="horizontal",s=this._itemPositions.findIndex(({drag:a,clientRect:d})=>{if(a===t)return!1;if(r){let c=o?r.x:r.y;if(a===this._previousSwap.drag&&this._previousSwap.overlaps&&c===this._previousSwap.delta)return!1}return o?e>=Math.floor(d.left)&&e<Math.floor(d.right):i>=Math.floor(d.top)&&i<Math.floor(d.bottom)});return s===-1||!this._sortPredicate(s,t)?-1:s}},Ii=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(t,e){this._document=t,this._dragDropRegistry=e}start(t){let e=this._element.childNodes;this._relatedNodes=[];for(let i=0;i<e.length;i++){let r=e[i];this._relatedNodes.push([r,r.nextSibling])}this.withItems(t)}sort(t,e,i,r){let o=this._getItemIndexFromPointerPosition(t,e,i),s=this._previousSwap;if(o===-1||this._activeItems[o]===t)return null;let a=this._activeItems[o];if(s.drag===a&&s.overlaps&&s.deltaX===r.x&&s.deltaY===r.y)return null;let d=this.getItemIndex(t),c=t.getPlaceholderElement(),f=a.getRootElement();o>d?f.after(c):f.before(c),qt(this._activeItems,d,o);let g=this._getRootNode().elementFromPoint(e,i);return s.deltaX=r.x,s.deltaY=r.y,s.drag=a,s.overlaps=f===g||f.contains(g),{previousIndex:d,currentIndex:o}}enter(t,e,i,r){let o=this._activeItems.indexOf(t);o>-1&&this._activeItems.splice(o,1);let s=r==null||r<0?this._getItemIndexFromPointerPosition(t,e,i):r;s===-1&&(s=this._getClosestItemIndexToPointer(t,e,i));let a=this._activeItems[s];a&&!this._dragDropRegistry.isDragging(a)?(this._activeItems.splice(s,0,t),a.getRootElement().before(t.getPlaceholderElement())):(this._activeItems.push(t),this._element.appendChild(t.getPlaceholderElement()))}withItems(t){this._activeItems=t.slice()}withSortPredicate(t){this._sortPredicate=t}reset(){let t=this._element,e=this._previousSwap;for(let i=this._relatedNodes.length-1;i>-1;i--){let[r,o]=this._relatedNodes[i];r.parentNode===t&&r.nextSibling!==o&&(o===null?t.appendChild(r):o.parentNode===t&&t.insertBefore(r,o))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(t){return this._activeItems.indexOf(t)}getItemAtIndex(t){return this._activeItems[t]||null}updateOnScroll(){this._activeItems.forEach(t=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(t){t!==this._element&&(this._element=t,this._rootNode=void 0)}_getItemIndexFromPointerPosition(t,e,i){let r=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(i)),o=r?this._activeItems.findIndex(s=>{let a=s.getRootElement();return r===a||a.contains(r)}):-1;return o===-1||!this._sortPredicate(o,t)?-1:o}_getRootNode(){return this._rootNode||(this._rootNode=gt(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(t,e,i){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let r=1/0,o=-1;for(let s=0;s<this._activeItems.length;s++){let a=this._activeItems[s];if(a!==t){let{x:d,y:c}=a.getRootElement().getBoundingClientRect(),f=Math.hypot(e-d,i-c);f<r&&(r=f,o=s)}}return o}},io=.05,lo=.05,Y=(function(n){return n[n.NONE=0]="NONE",n[n.UP=1]="UP",n[n.DOWN=2]="DOWN",n})(Y||{}),U=(function(n){return n[n.NONE=0]="NONE",n[n.LEFT=1]="LEFT",n[n.RIGHT=2]="RIGHT",n})(U||{});function co(n,t){return new Pi(t,n.get(Vi),n.get(Ce),n.get(z),n.get(Qe))}var Pi=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new _;entered=new _;exited=new _;dropped=new _;sorted=new _;receivingStarted=new _;receivingStopped=new _;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=he.EMPTY;_verticalScrollDirection=Y.NONE;_horizontalScrollDirection=U.NONE;_scrollNode;_stopScrollTimers=new _;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(t,e,i,r,o){this._dragDropRegistry=e,this._ngZone=r,this._viewportRuler=o;let s=this.element=Z(t);this._document=i,this.withOrientation("vertical").withElementContainer(s),e.registerDropContainer(this),this._parentPositions=new jt(i)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(t,e,i,r){this._draggingStarted(),r==null&&this.sortingDisabled&&(r=this._draggables.indexOf(t)),this._sortStrategy.enter(t,e,i,r),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:t,container:this,currentIndex:this.getItemIndex(t)})}exit(t){this._reset(),this.exited.next({item:t,container:this})}drop(t,e,i,r,o,s,a,d={}){this._reset(),this.dropped.next({item:t,currentIndex:e,previousIndex:i,container:this,previousContainer:r,isPointerOverContainer:o,distance:s,dropPoint:a,event:d})}withItems(t){let e=this._draggables;return this._draggables=t,t.forEach(i=>i._withDropContainer(this)),this.isDragging()&&(e.filter(r=>r.isDragging()).every(r=>t.indexOf(r)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(t){return this._direction=t,this._sortStrategy instanceof Ut&&(this._sortStrategy.direction=t),this}connectedTo(t){return this._siblings=t.slice(),this}withOrientation(t){if(t==="mixed")this._sortStrategy=new Ii(this._document,this._dragDropRegistry);else{let e=new Ut(this._dragDropRegistry);e.direction=this._direction,e.orientation=t,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,i)=>this.sortPredicate(e,i,this)),this}withScrollableParents(t){let e=this._container;return this._scrollableElements=t.indexOf(e)===-1?[e,...t]:t.slice(),this}withElementContainer(t){if(t===this._container)return this;let e=Z(this.element),i=this._scrollableElements.indexOf(this._container),r=this._scrollableElements.indexOf(t);return i>-1&&this._scrollableElements.splice(i,1),r>-1&&this._scrollableElements.splice(r,1),this._sortStrategy&&this._sortStrategy.withElementContainer(t),this._cachedShadowRoot=null,this._scrollableElements.unshift(t),this._container=t,this}getScrollableParents(){return this._scrollableElements}getItemIndex(t){return this._isDragging?this._sortStrategy.getItemIndex(t):this._draggables.indexOf(t)}getItemAtIndex(t){return this._isDragging?this._sortStrategy.getItemAtIndex(t):this._draggables[t]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(t,e,i,r){if(this.sortingDisabled||!this._domRect||!$r(this._domRect,io,e,i))return;let o=this._sortStrategy.sort(t,e,i,r);o&&this.sorted.next({previousIndex:o.previousIndex,currentIndex:o.currentIndex,container:this,item:t})}_startScrollingIfNecessary(t,e){if(this.autoScrollDisabled)return;let i,r=Y.NONE,o=U.NONE;if(this._parentPositions.positions.forEach((s,a)=>{a===this._document||!s.clientRect||i||$r(s.clientRect,io,t,e)&&([r,o]=Ks(a,s.clientRect,this._direction,t,e),(r||o)&&(i=a))}),!r&&!o){let{width:s,height:a}=this._viewportRuler.getViewportSize(),d={width:s,height:a,top:0,right:s,bottom:a,left:0};r=uo(d,e),o=ho(d,t),i=window}i&&(r!==this._verticalScrollDirection||o!==this._horizontalScrollDirection||i!==this._scrollNode)&&(this._verticalScrollDirection=r,this._horizontalScrollDirection=o,this._scrollNode=i,(r||o)&&i?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let t=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=t.msScrollSnapType||t.scrollSnapType||"",t.scrollSnapType=t.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let t=this._container.style;t.scrollSnapType=t.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),Ui(0,lt).pipe(H(this._stopScrollTimers)).subscribe(()=>{let t=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===Y.UP?t.scrollBy(0,-e):this._verticalScrollDirection===Y.DOWN&&t.scrollBy(0,e),this._horizontalScrollDirection===U.LEFT?t.scrollBy(-e,0):this._horizontalScrollDirection===U.RIGHT&&t.scrollBy(e,0)})};_isOverContainer(t,e){return this._domRect!=null&&ki(this._domRect,t,e)}_getSiblingContainerFromPosition(t,e,i){return this._siblings.find(r=>r._canReceive(t,e,i))}_canReceive(t,e,i){if(!this._domRect||!ki(this._domRect,e,i)||!this.enterPredicate(t,this))return!1;let r=this._getShadowRoot().elementFromPoint(e,i);return r?r===this._container||this._container.contains(r):!1}_startReceiving(t,e){let i=this._activeSiblings;!i.has(t)&&e.every(r=>this.enterPredicate(r,this)||this._draggables.indexOf(r)>-1)&&(i.add(t),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:t,receiver:this,items:e}))}_stopReceiving(t){this._activeSiblings.delete(t),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:t,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(t=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(t);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let t=gt(this._container);this._cachedShadowRoot=t||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let t=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,t))}};function uo(n,t){let{top:e,bottom:i,height:r}=n,o=r*lo;return t>=e-o&&t<=e+o?Y.UP:t>=i-o&&t<=i+o?Y.DOWN:Y.NONE}function ho(n,t){let{left:e,right:i,width:r}=n,o=r*lo;return t>=e-o&&t<=e+o?U.LEFT:t>=i-o&&t<=i+o?U.RIGHT:U.NONE}function Ks(n,t,e,i,r){let o=uo(t,r),s=ho(t,i),a=Y.NONE,d=U.NONE;if(o){let c=n.scrollTop;o===Y.UP?c>0&&(a=Y.UP):n.scrollHeight-c>n.clientHeight&&(a=Y.DOWN)}if(s){let c=n.scrollLeft;e==="rtl"?s===U.RIGHT?c<0&&(d=U.RIGHT):n.scrollWidth+c>n.clientWidth&&(d=U.LEFT):s===U.LEFT?c>0&&(d=U.LEFT):n.scrollWidth-c>n.clientWidth&&(d=U.RIGHT)}return[a,d]}var Zs=(()=>{class n{_injector=l(be);constructor(){}createDrag(e,i){return so(this._injector,e,i)}createDropList(e){return co(this._injector,e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ee({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),no=new x("CDK_DRAG_PARENT");var Ys=new x("CdkDragHandle");var fo=new x("CDK_DRAG_CONFIG"),mo=new x("CdkDropList"),po=(()=>{class n{element=l(T);dropContainer=l(mo,{optional:!0,skipSelf:!0});_ngZone=l(z);_viewContainerRef=l(pe);_dir=l(Se,{optional:!0});_changeDetectorRef=l(ge);_selfHandle=l(Ys,{optional:!0,self:!0});_parentDrag=l(no,{optional:!0,skipSelf:!0});_dragDropRegistry=l(Vi);_destroyed=new _;_handles=new at([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new P;released=new P;ended=new P;entered=new P;exited=new P;dropped=new P;moved=new je(e=>{let i=this._dragRef.moved.pipe(Te(r=>({source:this,pointerPosition:r.pointerPosition,event:r.event,delta:r.delta,distance:r.distance}))).subscribe(e);return()=>{i.unsubscribe()}});_injector=l(be);constructor(){let e=this.dropContainer,i=l(fo,{optional:!0});this._dragRef=so(this._injector,this.element,{dragStartThreshold:i&&i.dragStartThreshold!=null?i.dragStartThreshold:5,pointerDirectionChangeThreshold:i&&i.pointerDirectionChangeThreshold!=null?i.pointerDirectionChangeThreshold:5,zIndex:i?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),i&&this._assignDefaults(i),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(H(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){fe(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let i=e.rootElementSelector,r=e.freeDragPosition;i&&!i.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,r&&!r.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let i=this._handles.getValue();i.push(e),this._handles.next(i)}_removeHandle(e){let i=this._handles.getValue(),r=i.indexOf(e);r>-1&&(i.splice(r,1),this._handles.next(i))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,i=e;this.rootElementSelector&&(i=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(i||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):Z(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let i=this._dir,r=this.dragStartDelay,o=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,s=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof r=="object"&&r?r:vt(r),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(o).withPreviewTemplate(s).withPreviewContainer(this.previewContainer||"global"),i&&e.withDirection(i.value)}}),e.beforeStarted.pipe($i(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let i=this.element.nativeElement.parentElement;for(;i;){let r=this._dragDropRegistry.getDragDirectiveForNode(i);if(r){e.withParent(r._dragRef);break}i=i.parentElement}})}_handleEvents(e){e.started.subscribe(i=>{this.started.emit({source:this,event:i.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(i=>{this.released.emit({source:this,event:i.event})}),e.ended.subscribe(i=>{this.ended.emit({source:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:i.container.data,item:this,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:i.container.data,item:this})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,isPointerOverContainer:i.isPointerOverContainer,item:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event})})}_assignDefaults(e){let{lockAxis:i,dragStartDelay:r,constrainPosition:o,previewClass:s,boundaryElement:a,draggingDisabled:d,rootElementSelector:c,previewContainer:f}=e;this.disabled=d??!1,this.dragStartDelay=r||0,this.lockAxis=i||null,o&&(this.constrainPosition=o),s&&(this.previewClass=s),a&&(this.boundaryElement=a),c&&(this.rootElementSelector=c),f&&(this.previewContainer=f)}_setupHandlesListener(){this._handles.pipe(Yi(e=>{let i=e.map(r=>r.element);this._selfHandle&&this.rootElementSelector&&i.push(this.element),this._dragRef.withHandles(i)}),Zi(e=>Fe(...e.map(i=>i._stateChanges.pipe(Ge(i))))),H(this._destroyed)).subscribe(e=>{let i=this._dragRef,r=e.element.nativeElement;e.disabled?i.disableHandle(r):i.enableHandle(r)})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(i,r){i&2&&L("cdk-drag-disabled",r.disabled)("cdk-drag-dragging",r._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",I],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",dn]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[M([{provide:no,useExisting:n}]),ne]})}return n})(),ro=new x("CdkDropListGroup");var _o=(()=>{class n{element=l(T);_changeDetectorRef=l(ge);_scrollDispatcher=l(Fn);_dir=l(Se,{optional:!0});_group=l(ro,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new _;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=l(Re).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new P;entered=new P;exited=new P;sorted=new P;_unsortedItems=new Set;constructor(){let e=l(fo,{optional:!0}),i=l(be);this._dropListRef=co(i,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(r,o)=>this.enterPredicate(r.data,o.data),this._dropListRef.sortPredicate=(r,o,s)=>this.sortPredicate(r,o.data,s.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),n._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(i=>i._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let i=this._latestSortedRefs.indexOf(e._dragRef);i>-1&&(this._latestSortedRefs.splice(i,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,i)=>e._dragRef.getVisibleElement().compareDocumentPosition(i._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=n._dropLists.indexOf(this);e>-1&&n._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(Ge(this._dir.value),H(this._destroyed)).subscribe(i=>e.withDirection(i)),e.beforeStarted.subscribe(()=>{let i=gn(this.connectedTo).map(r=>{if(typeof r=="string"){let o=n._dropLists.find(s=>s.id===r);return o}return r});if(this._group&&this._group._items.forEach(r=>{i.indexOf(r)===-1&&i.push(r)}),!this._scrollableParentsResolved){let r=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(o=>o.getElementRef().nativeElement);this._dropListRef.withScrollableParents(r),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let r=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(r)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=vt(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(i.filter(r=>r&&r!==this).map(r=>r._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(i=>i._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:this,item:i.item.data,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:this,item:i.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(i=>{this.sorted.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,container:this,item:i.item.data})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,item:i.item.data,isPointerOverContainer:i.isPointerOverContainer,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),Fe(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:i,draggingDisabled:r,sortingDisabled:o,listAutoScrollDisabled:s,listOrientation:a}=e;this.disabled=r??!1,this.sortingDisabled=o??!1,this.autoScrollDisabled=s??!1,this.orientation=a||"vertical",this.lockAxis=i||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(i,r){i&2&&(_e("id",r.id),L("cdk-drop-list-disabled",r.disabled)("cdk-drop-list-dragging",r._dropListRef.isDragging())("cdk-drop-list-receiving",r._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",I],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",I],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",I],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",I]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[M([{provide:ro,useValue:void 0},{provide:mo,useExisting:n}])]})}return n})();var go=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=W({type:n});static \u0275inj=G({providers:[Zs],imports:[Pn]})}return n})();var Ni=(n,t)=>[n,t];function Js(n,t){n&1&&oe(0,"mat-progress-bar",6)}function ea(n,t){if(n&1){let e=De();u(0,"button",28),C("click",function(){te(e);let r=F(),o=se(15);return ie(r.clearSearch("queue",o))}),u(1,"mat-icon"),w(2,"close"),h()()}}function ta(n,t){n&1&&(u(0,"th",29),w(1," Title "),h())}function ia(n,t){if(n&1&&(u(0,"td",30),w(1),h()),n&2){let e=t.$implicit;p(),ce(" ",e.Title," ")}}function na(n,t){n&1&&(u(0,"th",29),w(1," Owner "),h())}function ra(n,t){if(n&1&&(u(0,"td",30),w(1),h()),n&2){let e=t.$implicit;p(),ce(" ",e.Owner," ")}}function oa(n,t){n&1&&oe(0,"tr",31)}function sa(n,t){if(n&1){let e=De();u(0,"tr",32),C("click",function(){let r=te(e).$implicit,o=F();return ie(o.onTopicRowClick(r))})("cdkDragStarted",function(r){te(e);let o=F();return ie(o.onDragStarted(r))}),h()}if(n&2){let e=t.$implicit;A("cdkDragData",e)}}function aa(n,t){if(n&1){let e=De();u(0,"button",28),C("click",function(){te(e);let r=F(),o=se(37);return ie(r.clearSearch("wip",o))}),u(1,"mat-icon"),w(2,"close"),h()()}}function la(n,t){n&1&&(u(0,"th",29),w(1," Title "),h())}function da(n,t){if(n&1&&(u(0,"td",30),w(1),h()),n&2){let e=t.$implicit;p(),ce(" ",e.Title," ")}}function ca(n,t){n&1&&(u(0,"th",29),w(1," Owner "),h())}function ua(n,t){if(n&1&&(u(0,"td",30),w(1),h()),n&2){let e=t.$implicit;p(),ce(" ",e.Owner," ")}}function ha(n,t){n&1&&oe(0,"tr",31)}function fa(n,t){if(n&1){let e=De();u(0,"tr",32),C("click",function(){let r=te(e).$implicit,o=F();return ie(o.onTopicRowClick(r))})("cdkDragStarted",function(r){te(e);let o=F();return ie(o.onDragStarted(r))}),h()}if(n&2){let e=t.$implicit;A("cdkDragData",e)}}function ma(n,t){if(n&1){let e=De();u(0,"button",28),C("click",function(){te(e);let r=F(),o=se(59);return ie(r.clearSearch("completed",o))}),u(1,"mat-icon"),w(2,"close"),h()()}}function pa(n,t){n&1&&(u(0,"th",29),w(1," Title "),h())}function _a(n,t){if(n&1&&(u(0,"td",30),w(1),h()),n&2){let e=t.$implicit;p(),ce(" ",e.Title," ")}}function ga(n,t){n&1&&(u(0,"th",29),w(1," Owner "),h())}function va(n,t){if(n&1&&(u(0,"td",30),w(1),h()),n&2){let e=t.$implicit;p(),ce(" ",e.Owner," ")}}function ya(n,t){n&1&&oe(0,"tr",31)}function ba(n,t){if(n&1){let e=De();u(0,"tr",32),C("click",function(){let r=te(e).$implicit,o=F();return ie(o.onTopicRowClick(r))})("cdkDragStarted",function(r){te(e);let o=F();return ie(o.onDragStarted(r))}),h()}if(n&2){let e=t.$implicit;A("cdkDragData",e)}}var Ca=2,vo={queue:"queued",wip:"open",completed:"closed"},yo=class n{logger=l(An);router=l(hn);dataService=l(Vn);isLoading=O(!1);queueTopics=O([]);wipTopics=O([]);completedTopics=O([]);queueSearch=O("");wipSearch=O("");completedSearch=O("");filteredQueueTopics=$(()=>this.filterTopics(this.queueTopics(),this.queueSearch()));filteredWipTopics=$(()=>this.filterTopics(this.wipTopics(),this.wipSearch()));filteredCompletedTopics=$(()=>this.filterTopics(this.completedTopics(),this.completedSearch()));displayedColumns=["Title","Owner"];async ngOnInit(){this.logger.debugLog("Wip component initialized"),this.isLoading.set(!0);try{await this.dataService.ready,this.loadTopics()}finally{this.isLoading.set(!1)}}loadTopics(){let t=this.dataService.getItems("Topic");this.queueTopics.set(this.sortByTitle(t.filter(e=>e.Status==="queued"))),this.wipTopics.set(this.sortByTitle(t.filter(e=>e.Status==="open"))),this.completedTopics.set(this.sortByTitle(t.filter(e=>e.Status==="closed")))}filterTopics(t,e){let i=e.trim();if(i.length<Ca)return t;let r=i.toLowerCase();return t.filter(o=>o.Title?.toLowerCase().includes(r)||o.Owner?.toLowerCase().includes(r))}onSearchKeyup(t,e){switch(t){case"queue":this.queueSearch.set(e);break;case"wip":this.wipSearch.set(e);break;case"completed":this.completedSearch.set(e);break}}clearSearch(t,e){e.value="",this.onSearchKeyup(t,"")}sortByTitle=t=>{let e=t.slice();for(let i=1;i<e.length;i++){let r=e[i],o=i-1;for(;o>=0&&e[o].Title>r.Title;)e[o+1]=e[o],o--;e[o+1]=r}return e};drop(t){let e=t.previousContainer.data[t.previousIndex];if(t.previousContainer===t.container){let s=t.container.data.slice();qt(s,t.previousIndex,t.currentIndex),this.setColumnData(this.getColumnKeyForContainerId(t.container.id),s);return}let i=t.previousContainer.data.slice(),r=t.container.data.slice();ao(i,r,t.previousIndex,t.currentIndex),this.setColumnData(this.getColumnKeyForContainerId(t.previousContainer.id),i),this.setColumnData(this.getColumnKeyForContainerId(t.container.id),r);let o=this.getColumnKeyForContainerId(t.container.id);this.persistStatusChange(e,o)}setColumnData(t,e){switch(t){case"queue":this.queueTopics.set(e);break;case"wip":this.wipTopics.set(e);break;case"completed":this.completedTopics.set(e);break}}getColumnKeyForContainerId(t){switch(t){case"queue-drop-list":return"queue";case"wip-drop-list":return"wip";default:return"completed"}}async persistStatusChange(t,e){let i=vo[e];t.Status=i;try{await this.dataService.updateItem("Topic",t.Id,{Title:t.Title,Owner:t.Owner,Status:i}),this.logger.debugLog("Topic status updated",{id:t.Id,newStatus:i})}catch(r){this.logger.debugLog("Failed to update topic status",r)}}onDragStarted(t){t.source.element.nativeElement.querySelectorAll("td, th").forEach(r=>{let o=r.getBoundingClientRect().width;r.style.width=`${o}px`})}async onAddTopicKeyup(t,e){if(t.key!=="Enter")return;let i=t.target,r=i.value.trim();if(r)try{let o=await this.dataService.addItem("Topic",{Title:r,Owner:"",Status:vo[e]});this.addToColumn(e,o),i.value="",this.router.navigate(["/topic",o.Guid])}catch(o){this.logger.debugLog("Failed to create topic",o)}}addToColumn(t,e){switch(t){case"queue":this.queueTopics.set(this.sortByTitle([...this.queueTopics(),e]));break;case"wip":this.wipTopics.set(this.sortByTitle([...this.wipTopics(),e]));break;case"completed":this.completedTopics.set(this.sortByTitle([...this.completedTopics(),e]));break}}onTopicRowClick=t=>{this.logger.debugLog("Topic row clicked",{topicId:t.Id,topicGuid:t.Guid,topicTitle:t.Title}),this.router.navigate(["/topic",t.Guid])};goBack=()=>{this.logger.debugLog("Navigating back to home"),this.router.navigate(["/"])};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-wip"]],decls:75,vars:28,consts:[["queueSearchInput",""],["queueList","cdkDropList"],["wipSearchInput",""],["wipList","cdkDropList"],["completedSearchInput",""],["completedList","cdkDropList"],["mode","indeterminate"],[1,"topics-container"],[1,"header-row"],["mat-icon-button","","aria-label","Back to home",3,"click"],[1,"page-title"],[1,"cards-grid"],[1,"topic-card"],["color","primary"],["appearance","outline","subscriptSizing","dynamic",1,"column-search"],["matInput","","type","text","placeholder","Search ...",3,"keyup"],["mat-icon-button","","matSuffix","","type","button","aria-label","Clear search"],["mat-table","","cdkDropList","","id","queue-drop-list",1,"mat-elevation-z0","striped-table",3,"cdkDropListDropped","dataSource","cdkDropListData","cdkDropListConnectedTo"],["matColumnDef","Title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Owner"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","clickable-row","cdkDrag","",3,"cdkDragData","click","cdkDragStarted",4,"matRowDef","matRowDefColumns"],["appearance","outline","subscriptSizing","dynamic",1,"add-topic-field"],["matInput","","type","text","placeholder","New topic title ...",3,"keyup"],["mat-table","","cdkDropList","","id","wip-drop-list",1,"mat-elevation-z0","striped-table",3,"cdkDropListDropped","dataSource","cdkDropListData","cdkDropListConnectedTo"],["mat-table","","cdkDropList","","id","completed-drop-list",1,"mat-elevation-z0","striped-table",3,"cdkDropListDropped","dataSource","cdkDropListData","cdkDropListConnectedTo"],["mat-icon-button","","matSuffix","","type","button","aria-label","Clear search",3,"click"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","","cdkDrag","",1,"clickable-row",3,"click","cdkDragStarted","cdkDragData"]],template:function(e,i){if(e&1&&(y(0,Js,1,0,"mat-progress-bar",6),u(1,"div",7)(2,"div",8)(3,"button",9),C("click",function(){return i.goBack()}),u(4,"mat-icon"),w(5,"arrow_back"),h()(),u(6,"h1",10),w(7,"Work in Progress"),h()(),u(8,"div",11)(9,"mat-card",12)(10,"mat-toolbar",13)(11,"span"),w(12,"Queued"),h(),u(13,"mat-form-field",14)(14,"input",15,0),C("keyup",function(o){return i.onSearchKeyup("queue",o.target.value)}),h(),y(16,ea,3,0,"button",16),h()(),u(17,"mat-card-content")(18,"table",17,1),C("cdkDropListDropped",function(o){return i.drop(o)}),le(20,18),B(21,ta,2,0,"th",19)(22,ia,2,1,"td",20),de(),le(23,21),B(24,na,2,0,"th",19)(25,ra,2,1,"td",20),de(),B(26,oa,1,0,"tr",22)(27,sa,1,1,"tr",23),h()(),u(28,"mat-card-footer")(29,"mat-form-field",24)(30,"input",25),C("keyup",function(o){return i.onAddTopicKeyup(o,"queue")}),h()()()(),u(31,"mat-card",12)(32,"mat-toolbar",13)(33,"span"),w(34,"In progress"),h(),u(35,"mat-form-field",14)(36,"input",15,2),C("keyup",function(o){return i.onSearchKeyup("wip",o.target.value)}),h(),y(38,aa,3,0,"button",16),h()(),u(39,"mat-card-content")(40,"table",26,3),C("cdkDropListDropped",function(o){return i.drop(o)}),le(42,18),B(43,la,2,0,"th",19)(44,da,2,1,"td",20),de(),le(45,21),B(46,ca,2,0,"th",19)(47,ua,2,1,"td",20),de(),B(48,ha,1,0,"tr",22)(49,fa,1,1,"tr",23),h()(),u(50,"mat-card-footer")(51,"mat-form-field",24)(52,"input",25),C("keyup",function(o){return i.onAddTopicKeyup(o,"wip")}),h()()()(),u(53,"mat-card",12)(54,"mat-toolbar",13)(55,"span"),w(56,"Closed"),h(),u(57,"mat-form-field",14)(58,"input",15,4),C("keyup",function(o){return i.onSearchKeyup("completed",o.target.value)}),h(),y(60,ma,3,0,"button",16),h()(),u(61,"mat-card-content")(62,"table",27,5),C("cdkDropListDropped",function(o){return i.drop(o)}),le(64,18),B(65,pa,2,0,"th",19)(66,_a,2,1,"td",20),de(),le(67,21),B(68,ga,2,0,"th",19)(69,va,2,1,"td",20),de(),B(70,ya,1,0,"tr",22)(71,ba,1,1,"tr",23),h()(),u(72,"mat-card-footer")(73,"mat-form-field",24)(74,"input",25),C("keyup",function(o){return i.onAddTopicKeyup(o,"completed")}),h()()()()()()),e&2){let r=se(19),o=se(41),s=se(63);b(i.isLoading()?0:-1),p(16),b(i.queueSearch()?16:-1),p(2),A("dataSource",i.filteredQueueTopics())("cdkDropListData",i.filteredQueueTopics())("cdkDropListConnectedTo",pt(19,Ni,o,s)),p(8),A("matHeaderRowDef",i.displayedColumns),p(),A("matRowDefColumns",i.displayedColumns),p(11),b(i.wipSearch()?38:-1),p(2),A("dataSource",i.filteredWipTopics())("cdkDropListData",i.filteredWipTopics())("cdkDropListConnectedTo",pt(22,Ni,r,s)),p(8),A("matHeaderRowDef",i.displayedColumns),p(),A("matRowDefColumns",i.displayedColumns),p(11),b(i.completedSearch()?60:-1),p(2),A("dataSource",i.filteredCompletedTopics())("cdkDropListData",i.filteredCompletedTopics())("cdkDropListConnectedTo",pt(25,Ni,r,o)),p(8),A("matHeaderRowDef",i.displayedColumns),p(),A("matRowDefColumns",i.displayedColumns)}},dependencies:[Sn,wn,Dn,xn,En,Rn,mn,fn,Cn,bn,kn,Mn,er,Wn,qn,Zn,$n,Un,Yn,Qn,Kn,Xn,Jn,Ye,Et,hi,Gr,jr,go,_o,po,Hr],styles:[".topics-container[_ngcontent-%COMP%]{padding:20px}.header-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:16px}.page-title[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:500}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-top:20px}.topic-card[_ngcontent-%COMP%]{padding:0;border-radius:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}mat-toolbar[_ngcontent-%COMP%]{min-height:56px;height:auto;padding:4px 16px;font-size:14px;font-weight:500;display:flex;align-items:center;gap:12px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-card-content[_ngcontent-%COMP%]{padding:0!important}table[_ngcontent-%COMP%]{width:100%}.striped-table[_ngcontent-%COMP%]{width:100%;table-layout:fixed}.striped-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), .striped-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){width:40%}.striped-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), .striped-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){width:auto}.striped-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#f5f5f5}.striped-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}.clickable-row[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .2s ease}.clickable-row[_ngcontent-%COMP%]:hover{background-color:#e3f2fd!important}.mat-mdc-header-row[_ngcontent-%COMP%]{background-color:#fafafa}.mat-mdc-header-cell[_ngcontent-%COMP%]{font-weight:600;color:#333}.mat-mdc-cell[_ngcontent-%COMP%], .mat-mdc-header-cell[_ngcontent-%COMP%]{padding:12px 16px}.cdk-drag-preview[_ngcontent-%COMP%]{display:table;box-sizing:border-box;background-color:#fff;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;border-radius:4px;z-index:1000}.cdk-drag-preview[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 16px;background-color:#fff}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drop-list-dragging[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drop-list-receiving[_ngcontent-%COMP%]{background-color:#e3f2fd}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .3s cubic-bezier(0,0,.2,1)}.column-search[_ngcontent-%COMP%]{flex:1 1 auto;width:100%}.column-search[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px}.column-search[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{min-height:0;padding-top:8px;padding-bottom:8px}.column-search[_ngcontent-%COMP%]   input.mat-mdc-input-element[_ngcontent-%COMP%]{color:#212121}.column-search[_ngcontent-%COMP%]   input.mat-mdc-input-element[_ngcontent-%COMP%]::placeholder{color:#757575;opacity:1}.column-search[_ngcontent-%COMP%]   .mdc-notched-outline__leading[_ngcontent-%COMP%], .column-search[_ngcontent-%COMP%]   .mdc-notched-outline__notch[_ngcontent-%COMP%], .column-search[_ngcontent-%COMP%]   .mdc-notched-outline__trailing[_ngcontent-%COMP%]{border-color:transparent!important}.column-search[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]{width:32px;height:32px;padding:4px;color:#757575}.column-search[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}mat-card-footer[_ngcontent-%COMP%]{display:block;padding:8px 12px;border-top:1px solid rgba(0,0,0,.12)}.add-topic-field[_ngcontent-%COMP%]{width:100%}.add-topic-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{min-height:0;padding-top:8px;padding-bottom:8px}"]})};export{yo as Wip};
