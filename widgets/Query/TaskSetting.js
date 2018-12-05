// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Query/TaskSetting.html":'\x3cdiv\x3e\r\n  \x3ctable class\x3d"top"\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd class\x3d"first-td"\x3e\r\n        \x3cdiv class\x3d"back-arrow feature-action icon-arrow-back" data-dojo-attach-event\x3d"onclick:_onBtnParamsBackClicked"\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd class\x3d"second-td"\x3e\r\n        \x3cdiv class\x3d"task-name jimu-ellipsis" data-dojo-attach-point\x3d"taskNameDiv"\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd class\x3d"third-td"\x3e\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n  \x3cdiv class\x3d"content-container"\x3e\r\n\r\n    \x3cdiv class\x3d"params-container" data-dojo-attach-point\x3d"paramsContainer"\x3e\r\n      \x3cdiv class\x3d"not-visible" data-dojo-attach-point\x3d"noFilterTip"\x3e${nls.noAttributeSpatialFilterTip}\x3c/div\x3e\r\n      \x3cdiv class\x3d"attributes-section" data-dojo-attach-point\x3d"attributesSectionDiv"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"criteiraLabelDiv" class\x3d"first-stress attribute-filter-label"\x3e${nls.queryCriteira}\x3c/div\x3e\r\n        \x3cdiv class\x3d"sql-div jimu-widget-note" data-dojo-attach-point\x3d"sqlDiv"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"spatial-section" data-dojo-attach-point\x3d"spatialSectionDiv"\x3e\r\n        \x3cdiv class\x3d"spearator not-visible" data-dojo-attach-point\x3d"spatialSpearator"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"spatialFilterLabelDiv" class\x3d"first-stress spatial-filter-label"\x3e${nls.spatialFilter}\x3c/div\x3e\r\n        \x3cdiv class\x3d"spatial-filter-tip" data-dojo-attach-point\x3d"spatialFilterTip"\x3e\x3c/div\x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"spatialTypeSelect" data-dojo-attach-event\x3d"change:_onSpatialTypeSelectChanged" class\x3d"restrict-select-width" style\x3d"width:100%;box-sizing:border-box;"\x3e\x3c/select\x3e\r\n        \x3cdiv class\x3d"spatial-filter-content" data-dojo-attach-point\x3d"spatialFilterContent"\x3e\r\n          \x3cdiv class\x3d"drawing-section" data-dojo-attach-point\x3d"drawingSection"\x3e\x3c/div\x3e\r\n          \x3cdiv class\x3d"features-section" data-dojo-attach-point\x3d"featuresSection"\x3e\r\n            \x3cdiv class\x3d"relationship-section"\x3e\r\n              \x3cdiv class\x3d"second-stress relationship-tip"\x3e${nls.spatialRelationship}\x3c/div\x3e\r\n              \x3cselect data-dojo-attach-point\x3d"relationshipSelect" data-dojo-type\x3d"dijit/form/Select" class\x3d"restrict-select-width relationship-select" style\x3d"width:100%;box-sizing:border-box;"\x3e\x3c/select\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"result-name-container"\x3e\r\n      \x3cdiv class\x3d"first-stress"\x3e${nls.layerName}\x3c/div\x3e\r\n      \x3cdiv class\x3d"result-name-text" data-dojo-attach-point\x3d"layerNameTextBox" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-event\x3d"change:_onLayerNameTextChanged"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"jimu-btn btn-execute" data-dojo-attach-point\x3d"btnExecute" data-dojo-attach-event\x3d"onclick:_onBtnApplyClicked"\x3e${nls.apply}\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dojo/text!./TaskSetting.html dojo/on dojo/Deferred dojo/_base/lang dojo/_base/html dojo/_base/array dojo/promise/all jimu/filterUtils jimu/dijit/FilterParameters ./utils jimu/utils ./SingleQueryLoader ./SpatialFilterByDrawing jimu/dijit/SpatialFilterByFeatures esri/tasks/query".split(" "),function(r,t,u,v,w,x,k,l,g,f,m,y,z,A,n,p,B,C,D,E){return r([t,u,v,w],{baseClass:"query-task-setting",
templateString:x,askForValues:!1,_defaultRelationship:"SPATIAL_REL_INTERSECTS",nls:null,map:null,currentAttrs:null,layerInfosObj:null,postCreate:function(){this.inherited(arguments);this._initSelf()},run:function(){var a=this._getCleanClonedCurrentAttrs(this.currentAttrs);a.query.relationship=this._getRestRelationship();var b=this.getWhere(),h=this.getGeometry();y([b,h]).then(g.hitch(this,function(c){this.deactivate();a.query.where=c[0];a.query.geometry=c[1];a.query.geometry||console.log("Don't use geometry to query.");
if("function"===typeof this.onApply)this.onApply(a)}),g.hitch(this,function(a){console.error(a)}))},hideTempLayers:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.hideTempLayers();this.spatialFilterByFeatures&&this.spatialFilterByFeatures.hideTempLayers()},showTempLayers:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.showTempLayers();this.spatialFilterByFeatures&&this.spatialFilterByFeatures.showTempLayers()},_getCleanClonedCurrentAttrs:function(a){var b=B.getCleanCurrentAttrsTemplate(),
h=null,c;for(c in a)"queryTr"!==c&&"query"!==c&&(h=a[c],b[c]=g.clone(h));b.queryTr=a.queryTr;b.query.maxRecordCount=a.query.maxRecordCount;return b},onGetQueryResponse:function(){this.deactivate();this._tryResetSpatialFilterByDrawing();this._tryResetSpatialFilterByFeatures()},getWhere:function(){var a=new l,b=this._getWhereInfo();if(1===b.status){var h=this.currentAttrs.config.webMapLayerId;if(h){var c=null,c=n.isTable(this.currentAttrs.layerInfo)?this.layerInfosObj.getTableInfoById(h):this.layerInfosObj.getLayerInfoById(h),
h="";c&&(h=c.getFilter());c=b.where;h&&(c="("+h+") AND ("+b.where+")");a.resolve(c)}else a.resolve(b.where)}else a.reject("Can't get a valid sql");return a},_getWhereInfo:function(){var a={status:0,where:""};if(this.askForValues){var b=this.filterParams.getFilterExpr();b&&"string"===typeof b?(a.status=1,a.where=b):(a.status=-1,a.where=null)}else a.status=1,a.where=this.currentAttrs.config.filter.expr;1!==a.status||a.where||(a.where="1\x3d1");return a},_updateExecuteButtonStatus:function(){var a=this._isValidWhereToExecute()&&
this._isValidGeometryToExecute()&&this._isValidLayerNameToExecute();a?f.removeClass(this.btnExecute,"disabled"):f.addClass(this.btnExecute,"disabled");return a},_isValidWhereToExecute:function(){return 0<this._getWhereInfo().status},_isValidLayerNameToExecute:function(){return this.layerNameTextBox.get("value")},_isValidGeometryToExecute:function(){var a=this.spatialTypeSelect.get("value");if("currentMapExtent"!==a){if("drawing"===a)return!!this.spatialFilterByDrawing.getGeometryInfo().geometry;if("useFeatures"===
a)return this.spatialFilterByFeatures.isValidSearchDistance()}return!0},getGeometry:function(){var a=new l,b=this.spatialTypeSelect.get("value");"currentMapExtent"===b?a.resolve(this.map.extent):"drawing"===b?(b=this.spatialFilterByDrawing.getGeometryInfo(),0>b.status?a.reject("Invalid search distance"):(0===b.status&&console.log("User doesn't draw anything"),a.resolve(b.geometry))):"useFeatures"===b?this.spatialFilterByFeatures.getGeometryInfo().then(g.hitch(this,function(b){-2===b.status?a.reject("Invalid search distance"):
(-1===b.status?console.log("User doesn't select a layer"):0===b.status&&console.log("User doesn't select any features"),a.resolve(b.geometry))}),g.hitch(this,function(b){a.reject(b)})):a.resolve(null);return a},deactivate:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.deactivate();this.spatialFilterByFeatures&&this.spatialFilterByFeatures.deactivate()},clearAllGraphics:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.clearAllGraphics();this.spatialFilterByFeatures&&
this.spatialFilterByFeatures.clearAllGraphics()},canAutoRunning:function(){return this._canAttributeFilterAutoRunning()&&this._canSpatialFilterAutoRunning()},_canAttributeFilterAutoRunning:function(){return 0<this._getWhereInfo().status&&!this.askForValues},_canSpatialFilterAutoRunning:function(){var a=this.spatialTypeSelect.getOptions()||[];return 0===a.length?!0:1===a.length?(a=this.spatialTypeSelect.get("value"),"drawing"!==a&&"useFeatures"!==a):!1},_initSelf:function(){var a=this.currentAttrs.config,
b=this.currentAttrs.layerInfo,h=a.name||"",h=p.sanitizeHTML(h);this.taskNameDiv.innerHTML=h;this.taskNameDiv.title=this.taskNameDiv.innerHTML;var c=this.criteiraLabel||"",c=p.sanitizeHTML(c);this.criteiraLabelDiv.innerHTML=c;this.criteiraLabelDiv.title=this.criteiraLabelDiv.innerHTML;c=this.spatialFilterLabel||"";c=p.sanitizeHTML(c);this.spatialFilterLabelDiv.innerHTML=c;this.spatialFilterLabelDiv.title=this.spatialFilterLabelDiv.innerHTML;this.showFilterLabel?(this._showCriteiraLabelDiv(),this._showSpatialFilterLabelDiv()):
(this._hideCriteiraLabelDiv(),this._hideSpatialFilterLabelDiv());this.filterParams=new A;this.filterParams.placeAt(this.sqlDiv,"before");var q={ifDisplaySQL:!0};this.own(k(this.filterParams,"change",g.hitch(this,this._updateExecuteButtonStatus)));this.own(k(this.filterParams,"enter",g.hitch(this,this._onBtnApplyClicked)));c=g.clone(a.filter);this.filterParams.build(a.url,b,c,a.webMapLayerId);var c=new z,d=this.currentAttrs.config.filter;this.askForValues=c.isAskForValues(d);var e=!0,c=!1;if(this.askForValues){e=
!0;d.displaySQL?this.sqlDiv.innerHTML=d.displaySQL:d.expr&&(this.sqlDiv.innerHTML=d.expr);if(d=this.filterParams.getFilterExpr(q))this.sqlDiv.innerHTML=d;this.own(k(this.filterParams,"change",g.hitch(this,function(){this.sqlDiv.innerHTML="";var a=this.filterParams.getFilterExpr(q);a&&(this.sqlDiv.innerHTML=a)})))}else this.currentAttrs.config.showSQL?e="1\x3d1"!==d.expr:(e=!1,c="1\x3d1"===d.expr),this.sqlDiv.innerHTML=d.displaySQL?d.displaySQL:d.expr;this.currentAttrs.config.showSQL?f.removeClass(this.sqlDiv,
"not-visible"):f.addClass(this.sqlDiv,"not-visible");e?f.removeClass(this.attributesSectionDiv,"not-visible"):f.addClass(this.attributesSectionDiv,"not-visible");d=this.currentAttrs.config.spatialFilter;e=null;d||(d={});n.isTable(b)&&(d={});d.currentMapExtent&&(e={value:"currentMapExtent",label:this.nls.useCurrentExtentTip},this.spatialTypeSelect.addOption(e),d.currentMapExtent["default"]&&this.spatialTypeSelect.set("value",e.value));d.drawing&&(e={value:"drawing",label:this.nls.useDrawGraphicTip},
this.spatialTypeSelect.addOption(e),d.drawing["default"]&&this.spatialTypeSelect.set("value",e.value),e=d.drawing.buffer,this.spatialFilterByDrawing=new C({drawBoxOption:{map:this.map,geoTypes:d.drawing.geometryTypes},nls:this.nls,enableBuffer:!!e,distance:g.getObject("defaultDistance",!1,e)||0,unit:g.getObject("defaultUnit",!1,e)||""}),this.own(k(this.spatialFilterByDrawing,"change",g.hitch(this,this._updateExecuteButtonStatus))),this.spatialFilterByDrawing.placeAt(this.drawingSection));if(d.useFeatures){e=
{value:"useFeatures",label:this.nls.useFeaturesTip};this.spatialTypeSelect.addOption(e);d.useFeatures["default"]&&this.spatialTypeSelect.set("value",e.value);var e=d.useFeatures.buffer,l=[];a.webMapLayerId&&l.push(a.webMapLayerId);this.spatialFilterByFeatures=new D({map:this.map,nls:this.nls,enableBuffer:!!e,distance:g.getObject("defaultDistance",!1,e)||0,unit:g.getObject("defaultUnit",!1,e)||"",showLoading:!1,ignoredFeaturelayerIds:l});this.spatialFilterByFeatures.tipNode&&f.setStyle(this.spatialFilterByFeatures.tipNode,
"display","block");this.spatialFilterByFeatures.placeAt(this.featuresSection);this.own(k(this.spatialFilterByFeatures,"loading",g.hitch(this,function(){this.domNode&&this.shelter.show()})));this.own(k(this.spatialFilterByFeatures,"unloading",g.hitch(this,function(){this.domNode&&this.shelter.hide()})));this.own(k(this.spatialFilterByFeatures,"search-distance-change",g.hitch(this,this._updateExecuteButtonStatus)));(a=d.useFeatures.relationships)&&0<a.length?m.forEach(a,g.hitch(this,function(a){this.relationshipSelect.addOption({value:a.relationship,
label:a.label})})):this.relationshipSelect.addOption({value:this._defaultRelationship,label:this._defaultRelationship})}d.fullLayerExtent&&(e={value:"fullLayerExtent",label:this.nls.noSpatialLimitTip},this.spatialTypeSelect.addOption(e),d.fullLayerExtent["default"]&&this.spatialTypeSelect.set("value",e.value));a=!0;d=this.spatialTypeSelect.getOptions()||[];0===d.length?(a=!1,this.spatialFilterTip.innerHTML=this.nls.noSpatialLimitTip):1===d.length?(a="fullLayerExtent"!==d[0].value,this.spatialFilterTip.innerHTML=
d[0].label,f.addClass(this.spatialTypeSelect.domNode,"not-visible")):a=!0;n.isTable(b)&&(a=!1);a?f.removeClass(this.spatialSectionDiv,"not-visible"):f.addClass(this.spatialSectionDiv,"not-visible");this._onSpatialTypeSelectChanged();c&&!a&&f.removeClass(this.noFilterTip,"not-visible");b=this._getBestQueryName(h);this.layerNameTextBox.set("value",b)},getQueryResultName:function(){return this.layerNameTextBox.get("value")},_getConstantRelationship:function(){var a=this._defaultRelationship;"useFeatures"===
this.spatialTypeSelect.get("value")&&(a=this.relationshipSelect.get("value"));return a},_getRestRelationship:function(){var a=this._getConstantRelationship();return E[a]},_onSpatialTypeSelectChanged:function(){var a=this.spatialTypeSelect.get("value");"drawing"===a?f.setStyle(this.drawingSection,"display","block"):(f.setStyle(this.drawingSection,"display","none"),this._tryResetSpatialFilterByDrawing());"useFeatures"===a?f.setStyle(this.featuresSection,"display","block"):(f.setStyle(this.featuresSection,
"display","none"),this._tryResetSpatialFilterByFeatures());this.spatialTypeSelect.domNode.title="";a&&(a=this.spatialTypeSelect.getOptions(a))&&(this.spatialTypeSelect.domNode.title=a.label);this._updateExecuteButtonStatus()},_tryResetSpatialFilterByDrawing:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.reset()},_tryResetSpatialFilterByFeatures:function(){this.spatialFilterByFeatures&&this.spatialFilterByFeatures.reset()},_onBtnParamsBackClicked:function(){this._tryResetSpatialFilterByDrawing();
this._tryResetSpatialFilterByFeatures();if("function"===typeof this.onBack)this.onBack()},_getBestQueryName:function(a){for(var b=a=a?a+(" _"+this.nls.queryResult):a+this.nls.queryResult,f=m.map(this.map.graphicsLayerIds,g.hitch(this,function(a){return this.map.getLayer(a).name})),c=2;0<=m.indexOf(f,b);)b=a+"_"+c,c++;return b},_onLayerNameTextChanged:function(){this._updateExecuteButtonStatus()},_onBtnApplyClicked:function(){this._updateExecuteButtonStatus()&&this.run()},_showCriteiraLabelDiv:function(){f.setStyle(this.criteiraLabelDiv,
"display","block")},_hideCriteiraLabelDiv:function(){f.setStyle(this.criteiraLabelDiv,"display","none")},_showSpatialFilterLabelDiv:function(){f.setStyle(this.spatialFilterLabelDiv,"display","block")},_hideSpatialFilterLabelDiv:function(){f.setStyle(this.spatialFilterLabelDiv,"display","none")}})});