// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/Address.html":'\x3cdiv\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv class\x3d"esriCTSelectFieldTitle" title\x3d"${nls.addressPage.selectFieldTitle}"\x3e${nls.addressPage.selectFieldTitle}\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"selectNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTHint"\x3e${nls.addressPage.geocoderHint}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/text!./Address.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/Popup dijit/form/Select".split(" "),function(g,c,h,k,l,m,n,p,q){return g([n,m],{baseClass:"jimu-widget-smartEditor-setting-address",templateString:l,postCreate:function(){this.inherited(arguments);this.showDialog()},showDialog:function(){var d=!1,b,d=!1;this._fieldValues&&this._fieldValues.Address&&(this._fieldValues.Address.hasOwnProperty("enabled")&&
(d=this._fieldValues.Address.enabled),this._fieldValues.Address.hasOwnProperty("field")&&(b=this._fieldValues.Address.field));var a=this._getFieldsOptionsObj(this._validGeocoderFields),e=new q({style:{width:"340px"},options:a},k.create("div",{},this.selectNode));b&&e.set("value",b);var f=new p({titleLabel:this.nls.addressPage.popupTitle,width:400,maxHeight:300,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){var a={};a.enabled=d;a.field=e.get("value");this._fieldValues.Address||
(this._fieldValues.Address={actionName:"Address"});c.mixin(this._fieldValues.Address,a);f.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:c.hitch(this,function(){f.close()})}],onClose:c.hitch(this,function(){})})},_getFieldsOptionsObj:function(d){var b=[];h.forEach(d,c.hitch(this,function(a){"esriFieldTypeGeometry"!==a.type&&"esriFieldTypeBlob"!==a.type&&"esriFieldTypeRaster"!==a.type&&"esriFieldTypeXML"!==a.type&&b.push({label:a.alias||a.name,value:a.name})}));return b}})});