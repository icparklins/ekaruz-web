!function(a){"use strict";redux.field_objects=redux.field_objects||{},redux.field_objects.slides=redux.field_objects.slides||{},a(document).ready(function(){}),redux.field_objects.slides.init=function(b){b||(b=a(document).find(".redux-group-tab:visible").find(".redux-container-slides:visible")),a(b).each(function(){var b=a(this);redux.field_objects.media.init(b);var c=b;b.hasClass("redux-field-container")||(c=b.parents(".redux-field-container:first")),c.is(":hidden")||(c.hasClass("redux-container-slides")&&c.addClass("redux-field-init"),c.hasClass("redux-field-init")&&(c.removeClass("redux-field-init"),b.find(".redux-slides-remove").live("click",function(){redux_change(a(this)),a(this).parent().siblings().find('input[type="text"]').val(""),a(this).parent().siblings().find("textarea").val(""),a(this).parent().siblings().find('input[type="hidden"]').val("");var b=a(this).parents(".redux-container-slides:first").find(".redux-slides-accordion-group").length;if(b>1)a(this).parents(".redux-slides-accordion-group:first").slideUp("medium",function(){a(this).remove()});else{var c=a(this).parent(".redux-slides-accordion").data("new-content-title");a(this).parents(".redux-slides-accordion-group:first").find(".remove-image").click(),a(this).parents(".redux-container-slides:first").find(".redux-slides-accordion-group:last").find(".redux-slides-header").text(c)}}),b.find(".redux-slides-add").off("click").click(function(){var b=a(this).prev().find(".redux-slides-accordion-group:last").clone(!0),c=a(b).find(".slide-title").attr("name").match(/[0-9]+(?!.*[0-9])/),d=1*c+1;a(b).find('input[type="text"], input[type="hidden"], textarea').each(function(){a(this).attr("name",jQuery(this).attr("name").replace(/[0-9]+(?!.*[0-9])/,d)).attr("id",a(this).attr("id").replace(/[0-9]+(?!.*[0-9])/,d)),a(this).val(""),a(this).hasClass("slide-sort")&&a(this).val(d)});var e=a(this).prev().data("new-content-title");a(b).find(".screenshot").removeAttr("style"),a(b).find(".screenshot").addClass("hide"),a(b).find(".screenshot a").attr("href",""),a(b).find(".remove-image").addClass("hide"),a(b).find(".redux-slides-image").attr("src","").removeAttr("id"),a(b).find("h3").text("").append('<span class="redux-slides-header">'+e+'</span><span class="ui-accordion-header-icon ui-icon ui-icon-plus"></span>'),a(this).prev().append(b)}),b.find(".slide-title").keyup(function(b){var c=b.target.value;a(this).parents().eq(3).find(".redux-slides-header").text(c)}),b.find(".redux-slides-accordion").accordion({header:"> div > fieldset > h3",collapsible:!0,active:!1,heightStyle:"content",icons:{header:"ui-icon-plus",activeHeader:"ui-icon-minus"}}).sortable({axis:"y",handle:"h3",connectWith:".redux-slides-accordion",start:function(a,b){b.placeholder.height(b.item.height()),b.placeholder.width(b.item.width())},placeholder:"ui-state-highlight",stop:function(b,c){c.item.children("h3").triggerHandler("focusout");var d=a("input.slide-sort");d.each(function(b){a(this).val(b)})}})))})}}(jQuery);