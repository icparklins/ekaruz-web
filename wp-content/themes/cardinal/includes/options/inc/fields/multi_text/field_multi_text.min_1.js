!function(a){"use strict";redux.field_objects=redux.field_objects||{},redux.field_objects.multi_text=redux.field_objects.multi_text||{},a(document).ready(function(){}),redux.field_objects.multi_text.init=function(b){b||(b=a(document).find(".redux-container-multi_text:visible")),a(b).each(function(){var b=a(this),c=b;b.hasClass("redux-field-container")||(c=b.parents(".redux-field-container:first")),c.is(":hidden")||c.hasClass("redux-field-init")&&(c.removeClass("redux-field-init"),b.find(".redux-multi-text-remove").live("click",function(){redux_change(a(this)),a(this).prev('input[type="text"]').val(""),a(this).parent().slideUp("medium",function(){a(this).remove()})}),b.find(".redux-multi-text-add").click(function(){for(var c=parseInt(a(this).attr("data-add_number")),d=a(this).attr("data-id"),e=a(this).attr("data-name"),f=0;c>f;f++){var g=a("#"+d+" li:last-child").clone();b.find("#"+d).append(g),b.find("#"+d+" li:last-child").removeAttr("style"),b.find("#"+d+' li:last-child input[type="text"]').val(""),b.find("#"+d+' li:last-child input[type="text"]').attr("name",e)}}))})}}(jQuery);