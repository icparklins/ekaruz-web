!function(a){"use strict";redux.field_objects=redux.field_objects||{},redux.field_objects.color_rgba=redux.field_objects.color_rgba||{},redux.field_objects.color_rgba.fieldID="",redux.field_objects.color_rgba.hexToRGBA=function(a,b){var c;if(null===a)c="";else{a=a.replace("#","");var d=parseInt(a.substring(0,2),16),e=parseInt(a.substring(2,4),16),f=parseInt(a.substring(4,6),16);c="rgba("+d+","+e+","+f+","+b+")"}return c},redux.field_objects.color_rgba.init=function(b){b||(b=a(document).find(".redux-group-tab:visible").find(".redux-container-color_rgba:visible")),a(b).each(function(){var b=a(this),c=b;b.hasClass("redux-field-container")||(c=b.parents(".redux-field-container:first")),c.is(":hidden")||c.hasClass("redux-field-init")&&(c.removeClass("redux-field-init"),redux.field_objects.color_rgba.modInit(b),redux.field_objects.color_rgba.initColorPicker(b))})},redux.field_objects.color_rgba.modInit=function(a){redux.field_objects.color_rgba.fieldID=a.find(".redux-color_rgba-container").data("id")},redux.field_objects.color_rgba.initColorPicker=function(b){var c=redux.field_objects.color_rgba.fieldID,d=b.find(".redux-color-rgba"),e=d.data("current-alpha");e=Number(null===e||void 0===e?1:e);var f=d.data("current-color");f=""===f||"transparent"===f?"":f;var g=d.data("output-transparent");g=Boolean(""===g?!1:g);var h=b.find(".redux-color-rgba-container"),i=h.data("palette");i=decodeURIComponent(i),i=JSON.parse(i),null===i&&(i=[["#000000","#434343","#666666","#999999","#b7b7b7","#cccccc","#d9d9d9","#efefef","#f3f3f3","#ffffff"],["#980000","#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#4a86e8","#0000ff","#9900ff","#ff00ff"],["#e6b8af","#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d9ead3","#c9daf8","#cfe2f3","#d9d2e9","#ead1dc"],["#dd7e6b","#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#a4c2f4","#9fc5e8","#b4a7d6","#d5a6bd"],["#cc4125","#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6d9eeb","#6fa8dc","#8e7cc3","#c27ba0"],["#a61c00","#cc0000","#e69138","#f1c232","#6aa84f","#45818e","#3c78d8","#3d85c6","#674ea7","#a64d79"],["#85200c","#990000","#b45f06","#bf9000","#38761d","#134f5c","#1155cc","#0b5394","#351c75","#741b47"],["#5b0f00","#660000","#783f04","#7f6000","#274e13","#0c343d","#1c4587","#073763","#20124d","#4c1130"]]);var j=h.data("show-input");j=Boolean(""===j?!1:j);var k=h.data("show-initial");k=Boolean(""===k?!1:k);var l=h.data("show-alpha");l=Boolean(""===l?!1:l);var m=h.data("allow-empty");m=Boolean(""===m?!1:m);var n=h.data("show-palette");n=Boolean(""===n?!1:n);var o=h.data("show-palette-only");o=Boolean(""===o?!1:o);var p=h.data("show-selection-palette");p=Boolean(""===p?!1:p);var q=Number(h.data("max-palette-size")),r=h.data("clickout-fires-change");r=Boolean(""===r?!1:r);var s=String(h.data("choose-text")),t=String(h.data("cancel-text")),u=String(h.data("input-text")),v=h.data("show-buttons");v=Boolean(""===v?!1:v);var w=String(h.data("container-class")),x=String(h.data("replacer-class"));d.spectrum({color:f,showAlpha:l,showInput:j,allowEmpty:m,className:"redux-color-rgba",showInitial:k,showPalette:n,showSelectionPalette:p,maxPaletteSize:q,showPaletteOnly:o,clickoutFiresChange:r,chooseText:s,cancelText:t,showButtons:v,containerClassName:w,replacerClassName:x,preferredFormat:"hex6",localStorageKey:"redux.color-rgba."+c,palette:i,inputText:u,change:function(c){var d,e,f;null===c?(d=g===!0?"transparent":null,e=null):(d=c.toHexString(),e=c.alpha),f="transparent"!=d?redux.field_objects.color_rgba.hexToRGBA(d,e):"transparent";var h=a(this).data("block-id");b.find("input#"+h+"-color").val(d),b.find("input#"+h+"-alpha").val(e),b.find("input#"+h+"-rgba").val(f),redux_change(b.find(".redux-color-rgba-container"))}})}}(jQuery);