webpackJsonp([37],{2067:function(l,e,n){"use strict";function View_CoreSitePickerComponent_1(l){return t._57(0,[(l()(),t._31(0,0,null,null,2,"ion-option",[],null,null,null,null,null)),t._30(1,16384,[[4,4]],0,H.a,[t.t],{value:[0,"value"]},null),(l()(),t._55(2,null,["",""]))],function(l,e){l(e,1,0,e.context.$implicit.id)},function(l,e){l(e,2,0,e.context.$implicit.fullNameAndSiteName)})}function View_CoreSitePickerComponent_0(l){return t._57(0,[(l()(),t._31(0,0,null,null,23,"ion-item",[["class","item item-block"]],null,null,null,N.b,N.a)),t._30(1,1097728,null,3,T.a,[q.a,M.a,t.t,t.V,[2,G.a]],null,null),t._52(335544320,1,{contentLabel:0}),t._52(603979776,2,{_buttons:1}),t._52(603979776,3,{_icons:1}),t._30(5,16384,null,0,J.a,[],null,null),(l()(),t._55(-1,2,["\n    "])),(l()(),t._31(7,0,null,1,3,"ion-label",[],null,null,null,null,null)),t._30(8,16384,[[1,4]],0,K.a,[M.a,t.t,t.V,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._55(9,null,["",""])),t._47(131072,U.a,[E.a,t.j]),(l()(),t._55(-1,2,["\n    "])),(l()(),t._31(12,0,null,3,10,"ion-select",[["interface","action-sheet"]],[[2,"select-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"keyup.space"]],function(l,e,n){var i=!0,a=l.component;if("click"===e){i=!1!==t._44(l,13)._click(n)&&i}if("keyup.space"===e){i=!1!==t._44(l,13)._keyup()&&i}if("ngModelChange"===e){i=!1!==(a.selectedSite=n)&&i}if("ngModelChange"===e){i=!1!==a.siteSelected.emit(a.selectedSite)&&i}return i},z.b,z.a)),t._30(13,1228800,null,1,B.a,[Q.a,q.a,M.a,t.t,t.V,[2,T.a],W.a],{interface:[0,"interface"]},null),t._52(603979776,4,{options:1}),t._50(1024,null,X.l,function(l){return[l]},[B.a]),t._30(16,671744,null,0,X.q,[[8,null],[8,null],[8,null],[2,X.l]],{model:[0,"model"]},{update:"ngModelChange"}),t._50(2048,null,X.m,null,[X.q]),t._30(18,16384,null,0,X.n,[X.m],null,null),(l()(),t._55(-1,null,["\n        "])),(l()(),t._26(16777216,null,null,1,null,View_CoreSitePickerComponent_1)),t._30(21,802816,null,0,Y.j,[t._11,t._6,t.E],{ngForOf:[0,"ngForOf"]},null),(l()(),t._55(-1,null,["\n    "])),(l()(),t._55(-1,2,["\n"])),(l()(),t._55(-1,null,["\n"]))],function(l,e){var n=e.component;l(e,13,0,"action-sheet");l(e,16,0,n.selectedSite);l(e,21,0,n.sites)},function(l,e){l(e,9,0,t._56(e,9,0,t._44(e,10).transform("core.site")));l(e,12,0,t._44(e,13)._disabled,t._44(e,18).ngClassUntouched,t._44(e,18).ngClassTouched,t._44(e,18).ngClassPristine,t._44(e,18).ngClassDirty,t._44(e,18).ngClassValid,t._44(e,18).ngClassInvalid,t._44(e,18).ngClassPending)})}function View_CoreSharedFilesListPage_1(l){return t._57(0,[(l()(),t._31(0,0,null,null,11,"ion-buttons",[["end",""]],null,null,null,null,null)),t._30(1,16384,null,1,R.a,[M.a,t.t,t.V,[2,j.a],[2,O.a]],null,null),t._52(603979776,1,{_buttons:1}),(l()(),t._55(-1,null,["\n            "])),(l()(),t._31(4,0,null,null,6,"button",[["icon-only",""],["ion-button",""]],[[1,"aria-label",0]],[[null,"click"]],function(l,e,n){var t=!0;if("click"===e){t=!1!==l.component.closeModal()&&t}return t},D.b,D.a)),t._30(5,1097728,[[1,4]],0,$.a,[[8,""],M.a,t.t,t.V],null,null),t._47(131072,U.a,[E.a,t.j]),(l()(),t._55(-1,0,["\n                "])),(l()(),t._31(8,0,null,0,1,"ion-icon",[["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t._30(9,147456,null,0,A.a,[M.a,t.t,t.V],{name:[0,"name"]},null),(l()(),t._55(-1,0,["\n            "])),(l()(),t._55(-1,null,["\n        "]))],function(l,e){l(e,9,0,"close")},function(l,e){l(e,4,0,t._56(e,4,0,t._44(e,6).transform("core.close")));l(e,8,0,t._44(e,9)._hidden)})}function View_CoreSharedFilesListPage_2(l){return t._57(0,[(l()(),t._31(0,0,null,null,1,"core-site-picker",[],[[8,"hidden",0]],[[null,"siteSelected"]],function(l,e,n){var t=!0;if("siteSelected"===e){t=!1!==l.component.changeSite(n)&&t}return t},View_CoreSitePickerComponent_0,el)),t._30(1,114688,null,0,Z.a,[E.a,s.a,ll.a],{initialSite:[0,"initialSite"]},{siteSelected:"siteSelected"})],function(l,e){l(e,1,0,e.component.siteId)},function(l,e){l(e,0,0,!e.component.filesLoaded)})}function View_CoreSharedFilesListPage_5(l){return t._57(0,[(l()(),t._31(0,0,null,null,1,"core-local-file",[],null,[[null,"onClick"],[null,"onDelete"],[null,"onRename"]],function(l,e,n){var t=!0,i=l.component;if("onClick"===e){t=!1!==i.filePicked(l.parent.context.$implicit)&&t}if("onDelete"===e){t=!1!==i.fileDeleted(l.parent.context.index)&&t}if("onRename"===e){t=!1!==i.fileRenamed(l.parent.context.index,n)&&t}return t},nl.b,nl.a)),t._30(1,114688,null,0,tl.a,[il.a,al.a,r.a,o.a,ul.a,ol.a,s.a,u.a],{file:[0,"file"],manage:[1,"manage"],overrideClick:[2,"overrideClick"]},{onDelete:"onDelete",onRename:"onRename",onClick:"onClick"})],function(l,e){var n=e.component;l(e,1,0,e.parent.context.$implicit,n.manage,n.pick)},null)}function View_CoreSharedFilesListPage_6(l){return t._57(0,[(l()(),t._31(0,0,null,null,12,"a",[["class","item-media item item-block"],["ion-item",""],["text-wrap",""]],null,[[null,"click"]],function(l,e,n){var t=!0;if("click"===e){t=!1!==l.component.openFolder(l.parent.context.$implicit)&&t}return t},N.b,N.a)),t._30(1,1097728,null,3,T.a,[q.a,M.a,t.t,t.V,[2,G.a]],null,null),t._52(335544320,2,{contentLabel:0}),t._52(603979776,3,{_buttons:1}),t._52(603979776,4,{_icons:1}),t._30(5,16384,null,0,J.a,[],null,null),(l()(),t._55(-1,2,["\n                    "])),(l()(),t._31(7,0,null,0,1,"img",[["item-start",""],["role","presentation"],["src","assets/img/files/folder-64.png"]],[[8,"alt",0]],null,null,null,null)),t._47(131072,U.a,[E.a,t.j]),(l()(),t._55(-1,2,["\n                    "])),(l()(),t._31(10,0,null,2,1,"p",[],null,null,null,null,null)),(l()(),t._55(11,null,["",""])),(l()(),t._55(-1,2,["\n                "]))],null,function(l,e){l(e,7,0,t._34(1,"",t._56(e,7,0,t._44(e,8).transform("core.folder")),""));l(e,11,0,e.parent.context.$implicit.name)})}function View_CoreSharedFilesListPage_4(l){return t._57(0,[(l()(),t._31(0,0,null,null,7,null,null,null,null,null,null,null)),(l()(),t._55(-1,null,["\n                "])),(l()(),t._26(16777216,null,null,1,null,View_CoreSharedFilesListPage_5)),t._30(3,16384,null,0,Y.k,[t._11,t._6],{ngIf:[0,"ngIf"]},null),(l()(),t._55(-1,null,["\n                "])),(l()(),t._26(16777216,null,null,1,null,View_CoreSharedFilesListPage_6)),t._30(6,16384,null,0,Y.k,[t._11,t._6],{ngIf:[0,"ngIf"]},null),(l()(),t._55(-1,null,["\n            "]))],function(l,e){l(e,3,0,e.context.$implicit.isFile);l(e,6,0,!e.context.$implicit.isFile)},null)}function View_CoreSharedFilesListPage_3(l){return t._57(0,[(l()(),t._31(0,0,null,null,5,"ion-list",[],null,null,null,null,null)),t._30(1,16384,null,0,sl.a,[M.a,t.t,t.V,rl.a,_l.l,cl.a],null,null),(l()(),t._55(-1,null,["\n            "])),(l()(),t._26(16777216,null,null,1,null,View_CoreSharedFilesListPage_4)),t._30(4,802816,null,0,Y.j,[t._11,t._6,t.E],{ngForOf:[0,"ngForOf"]},null),(l()(),t._55(-1,null,["\n        "]))],function(l,e){l(e,4,0,e.component.files)},null)}function View_CoreSharedFilesListPage_7(l){return t._57(0,[(l()(),t._31(0,0,null,null,2,"core-empty-box",[["icon","folder"]],null,null,null,dl.b,dl.a)),t._30(1,49152,null,0,fl.a,[],{message:[0,"message"],icon:[1,"icon"]},null),t._47(131072,U.a,[E.a,t.j])],function(l,e){l(e,1,0,t._56(e,1,0,t._44(e,2).transform("core.sharedfiles.nosharedfiles")),"folder")},null)}function View_CoreSharedFilesListPage_8(l){return t._57(0,[(l()(),t._31(0,0,null,null,2,"core-empty-box",[["icon","folder"]],null,null,null,dl.b,dl.a)),t._30(1,49152,null,0,fl.a,[],{message:[0,"message"],icon:[1,"icon"]},null),t._47(131072,U.a,[E.a,t.j])],function(l,e){l(e,1,0,t._56(e,1,0,t._44(e,2).transform("core.sharedfiles.nosharedfilestoupload")),"folder")},null)}function View_CoreSharedFilesListPage_0(l){return t._57(0,[(l()(),t._31(0,0,null,null,14,"ion-header",[],null,null,null,null,null)),t._30(1,16384,null,0,hl.a,[M.a,t.t,t.V,[2,gl.a]],null,null),(l()(),t._55(-1,null,["\n    "])),(l()(),t._31(3,0,null,null,10,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,pl.b,pl.a)),t._30(4,49152,null,0,O.a,[Q.a,[2,gl.a],[2,ml.a],M.a,t.t,t.V],null,null),t._30(5,212992,null,0,Cl.a,[O.a,rl.a,E.a,u.a],null,null),(l()(),t._55(-1,3,["\n        "])),(l()(),t._31(7,0,null,3,2,"ion-title",[],null,null,null,bl.b,bl.a)),t._30(8,49152,null,0,Pl.a,[M.a,t.t,t.V,[2,j.a],[2,O.a]],null,null),(l()(),t._55(9,0,["",""])),(l()(),t._55(-1,3,["\n\n        "])),(l()(),t._26(16777216,null,2,1,null,View_CoreSharedFilesListPage_1)),t._30(12,16384,null,0,Y.k,[t._11,t._6],{ngIf:[0,"ngIf"]},null),(l()(),t._55(-1,3,["\n    "])),(l()(),t._55(-1,null,["\n"])),(l()(),t._55(-1,null,["\n"])),(l()(),t._31(16,0,null,null,27,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Sl.b,Sl.a)),t._30(17,4374528,null,0,Fl.a,[M.a,rl.a,cl.a,t.t,t.V,Q.a,vl.a,t.M,[2,gl.a],[2,ml.a]],null,null),(l()(),t._55(-1,1,["\n    "])),(l()(),t._31(19,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(l,e,n){var t=!0;if("ionRefresh"===e){t=!1!==l.component.refreshFiles(n)&&t}return t},null,null)),t._30(20,212992,null,0,Ll.a,[rl.a,Fl.a,t.M,_l.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(l()(),t._55(-1,null,["\n        "])),(l()(),t._31(22,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,kl.b,kl.a)),t._30(23,114688,null,0,yl.a,[Ll.a,M.a],{pullingText:[0,"pullingText"]},null),t._47(131072,U.a,[E.a,t.j]),(l()(),t._55(-1,null,["\n    "])),(l()(),t._55(-1,1,["\n    "])),(l()(),t._55(-1,1,["\n    "])),(l()(),t._26(16777216,null,1,1,null,View_CoreSharedFilesListPage_2)),t._30(29,16384,null,0,Y.k,[t._11,t._6],{ngIf:[0,"ngIf"]},null),(l()(),t._55(-1,1,["\n    "])),(l()(),t._31(31,0,null,1,11,"core-loading",[],null,null,null,Vl.b,Vl.a)),t._30(32,638976,null,0,wl.a,[E.a,t.t,u.a,al.a],{hideUntil:[0,"hideUntil"]},null),(l()(),t._55(-1,0,["\n        "])),(l()(),t._26(16777216,null,0,1,null,View_CoreSharedFilesListPage_3)),t._30(35,16384,null,0,Y.k,[t._11,t._6],{ngIf:[0,"ngIf"]},null),(l()(),t._55(-1,0,["\n        "])),(l()(),t._26(16777216,null,0,1,null,View_CoreSharedFilesListPage_7)),t._30(38,16384,null,0,Y.k,[t._11,t._6],{ngIf:[0,"ngIf"]},null),(l()(),t._55(-1,0,["\n        "])),(l()(),t._26(16777216,null,0,1,null,View_CoreSharedFilesListPage_8)),t._30(41,16384,null,0,Y.k,[t._11,t._6],{ngIf:[0,"ngIf"]},null),(l()(),t._55(-1,0,["\n    "])),(l()(),t._55(-1,1,["\n"])),(l()(),t._55(-1,null,["\n"]))],function(l,e){var n=e.component;l(e,5,0);l(e,12,0,n.isModal);l(e,20,0,n.filesLoaded);l(e,23,0,t._34(1,"",t._56(e,23,0,t._44(e,24).transform("core.pulltorefresh")),""));l(e,29,0,n.showSitePicker);l(e,32,0,n.filesLoaded);l(e,35,0,n.files&&n.files.length>0);l(e,38,0,n.files&&!n.files.length&&n.manage);l(e,41,0,n.files&&!n.files.length&&!n.manage)},function(l,e){var n=e.component;l(e,3,0,t._44(e,4)._hidden,t._44(e,4)._sbPadding);l(e,9,0,n.title);l(e,16,0,t._44(e,17).statusbarPadding,t._44(e,17)._hasRefresher);l(e,19,0,"inactive"!==t._44(e,20).state,t._44(e,20)._top);l(e,22,0,t._44(e,23).r.state)})}Object.defineProperty(e,"__esModule",{value:!0});var t=n(0),i=n(5),a=n(3),u=n(9),o=n(57),s=n(1),r=n(11),_=n(488),c=this&&this.__decorate||function(l,e,n,t){var i,a=arguments.length,u=a<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(l,e,n,t);else for(var o=l.length-1;o>=0;o--)(i=l[o])&&(u=(a<3?i(u):a>3?i(e,n,u):i(e,n))||u);return a>3&&u&&Object.defineProperty(e,n,u),u},d=this&&this.__metadata||function(l,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,e)},f=function(){function CoreSharedFilesListPage(l,e,n,t,i,a,u,o,s){this.viewCtrl=l,this.sharedFilesProvider=n,this.sitesProvider=t,this.textUtils=i,this.translate=a,this.fileProvider=u,this.eventsProvider=o,this.navCtrl=s,this.path="",this.siteId=e.get("siteId")||this.sitesProvider.getCurrentSiteId(),this.mimetypes=e.get("mimetypes"),this.isModal=!!e.get("isModal"),this.manage=!!e.get("manage"),this.pick=!!e.get("pick"),this.path=e.get("path")||"",this.showSitePicker=!e.get("hideSitePicker")}return CoreSharedFilesListPage.prototype.ngOnInit=function(){var l=this;this.loadFiles(),this.shareObserver=this.eventsProvider.on(u.a.FILE_SHARED,function(e){e.siteId==l.siteId&&(l.filesLoaded=!1,l.loadFiles().finally(function(){l.filesLoaded=!0}))})},CoreSharedFilesListPage.prototype.loadFiles=function(){var l=this;return this.title=this.path?this.fileProvider.getFileAndDirectoryFromPath(this.path).name:this.translate.instant("core.sharedfiles.sharedfiles"),this.sharedFilesProvider.getSiteSharedFiles(this.siteId,this.path,this.mimetypes).then(function(e){l.files=e,l.filesLoaded=!0})},CoreSharedFilesListPage.prototype.closeModal=function(){this.viewCtrl.dismiss()},CoreSharedFilesListPage.prototype.refreshFiles=function(l){this.loadFiles().finally(function(){l.complete()})},CoreSharedFilesListPage.prototype.fileDeleted=function(l){this.files.splice(l,1)},CoreSharedFilesListPage.prototype.fileRenamed=function(l,e){this.files[l]=e.file},CoreSharedFilesListPage.prototype.openFolder=function(l){var e=this.textUtils.concatenatePaths(this.path,l.name);this.isModal?(this.path=e,this.filesLoaded=!1,this.loadFiles()):this.navCtrl.push("CoreSharedFilesListPage",{path:e,manage:this.manage,pick:this.pick,siteId:this.siteId,mimetypes:this.mimetypes,isModal:this.isModal})},CoreSharedFilesListPage.prototype.changeSite=function(l){this.siteId=l,this.path="",this.filesLoaded=!1,this.loadFiles()},CoreSharedFilesListPage.prototype.filePicked=function(l){this.viewCtrl.dismiss(l)},CoreSharedFilesListPage.prototype.ngOnDestroy=function(){this.shareObserver&&this.shareObserver.off()},CoreSharedFilesListPage=c([Object(t.m)({selector:"page-core-shared-files-list",templateUrl:"list.html"}),d("design:paramtypes",[i.G,i.t,_.a,s.a,r.a,a.c,o.a,u.a,i.s])],CoreSharedFilesListPage)}(),h=n(26),g=n(32),p=this&&this.__decorate||function(l,e,n,t){var i,a=arguments.length,u=a<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(l,e,n,t);else for(var o=l.length-1;o>=0;o--)(i=l[o])&&(u=(a<3?i(u):a>3?i(e,n,u):i(e,n))||u);return a>3&&u&&Object.defineProperty(e,n,u),u},m=function(){function CoreSharedFilesListPageModule(){}return CoreSharedFilesListPageModule=p([Object(t.I)({declarations:[f],imports:[h.a,g.a,i.l.forChild(f),a.b.forChild()]})],CoreSharedFilesListPageModule)}(),C=n(1522),b=n(1523),P=n(1524),S=n(1525),F=n(1526),v=n(1527),L=n(1528),k=n(1529),y=n(1530),V=n(1531),w=n(1532),I=n(1533),x=n(1534),R=n(372),M=n(8),j=n(247),O=n(212),D=n(46),$=n(43),U=n(25),E=n(18),A=n(48),H=n(108),N=n(31),T=n(21),q=n(19),G=n(27),J=n(33),K=n(67),z=n(123),B=n(109),Q=n(35),W=n(59),X=n(23),Y=n(7),Z=n(1583),ll=n(40),el=t._29({encapsulation:2,styles:[],data:{}}),nl=(t._27("core-site-picker",Z.a,function View_CoreSitePickerComponent_Host_0(l){return t._57(0,[(l()(),t._31(0,0,null,null,1,"core-site-picker",[],null,null,null,View_CoreSitePickerComponent_0,el)),t._30(1,114688,null,0,Z.a,[E.a,s.a,ll.a],null,null)],function(l,e){l(e,1,0)},null)},{initialSite:"initialSite"},{siteSelected:"siteSelected"},[]),n(747)),tl=n(382),il=n(66),al=n(2),ul=n(4),ol=n(24),sl=n(86),rl=n(16),_l=n(44),cl=n(34),dl=n(124),fl=n(114),hl=n(371),gl=n(39),pl=n(723),ml=n(20),Cl=n(473),bl=n(724),Pl=n(314),Sl=n(181),Fl=n(29),vl=n(107),Ll=n(159),kl=n(213),yl=n(173),Vl=n(54),wl=n(51),Il=n(69),xl=t._29({encapsulation:2,styles:[],data:{}}),Rl=t._27("page-core-shared-files-list",f,function View_CoreSharedFilesListPage_Host_0(l){return t._57(0,[(l()(),t._31(0,0,null,null,1,"page-core-shared-files-list",[],null,null,null,View_CoreSharedFilesListPage_0,xl)),t._30(1,245760,null,0,f,[gl.a,Il.a,_.a,s.a,r.a,E.a,o.a,u.a,ml.a],null,null)],function(l,e){l(e,1,0)},null)},{},{},[]),Ml=n(367),jl=n(368),Ol=n(370),Dl=n(369),$l=n(472),Ul=n(722),El=n(106),Al=n(270);n.d(e,"CoreSharedFilesListPageModuleNgFactory",function(){return Hl});var Hl=t._28(m,[],function(l){return t._40([t._41(512,t.o,t._21,[[8,[C.a,b.a,P.a,S.a,F.a,v.a,L.a,k.a,y.a,V.a,w.a,I.a,x.a,Rl]],[3,t.o],t.K]),t._41(4608,Y.m,Y.l,[t.G,[2,Y.w]]),t._41(4608,X.x,X.x,[]),t._41(4608,X.d,X.d,[]),t._41(4608,Ml.b,Ml.a,[]),t._41(4608,jl.a,jl.b,[]),t._41(4608,Ol.b,Ol.a,[]),t._41(4608,Dl.b,Dl.a,[]),t._41(4608,E.a,E.a,[$l.a,Ml.b,jl.a,Ol.b,Dl.b,E.b,E.c]),t._41(512,Y.b,Y.b,[]),t._41(512,X.v,X.v,[]),t._41(512,X.i,X.i,[]),t._41(512,X.s,X.s,[]),t._41(512,Ul.a,Ul.a,[]),t._41(512,a.b,a.b,[]),t._41(512,g.a,g.a,[]),t._41(512,El.a,El.a,[]),t._41(512,h.a,h.a,[]),t._41(512,Ul.b,Ul.b,[]),t._41(512,m,m,[]),t._41(256,E.c,void 0,[]),t._41(256,E.b,void 0,[]),t._41(256,Al.a,f,[])])})}});