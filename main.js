
// перезапускает скрипт прокрутки при удалени товара
function reopenScrollScript() {
	setTimeout(function() {
		jQuery('.inner').scrollbar();
		console.log('tovar delete');
	}, 3000);
}

$(document).ready(function() {
	
	var scroll = true;
	
	
$(window).load(function(){
	
	// NEW
		
		$('<ul id="select_ul_brend" class="inner"></ul>').appendTo( $("select.woof_mselect_pa_brend").parent() );
		$("select.woof_mselect_pa_brend > option").each(function(){
			var vals = $(this).attr("value");
			var text = $(this).text();
			if (vals === "0") {

			}else if (vals === "novinki" || vals === "new" || vals === "yeni") {
				$("#select_ul_brend").prepend('<li><a href="#'+vals+'" class="1">'+text+'</a></li>');
			}else if (vals === "eksklyuziv" || vals === "special" || vals === "xususi") {
				$("#select_ul_brend").prepend('<li><a href="#'+vals+'" class="1">'+text+'</a></li>');
			}else {
				$("#select_ul_brend").append('<li><a href="#'+vals+'">'+text+'</a></li>');
			}
			
		});


		
		$("#select_ul_brend a").click(function(){
			var href = $(this).attr("href").replace('#', '');
			if( $('select.woof_mselect_pa_brend > option[value="'+href+'"]').prop('selected') == false ){
				$('select.woof_mselect_pa_brend > option[value="'+href+'"]').prop("selected", true);
				$('select.woof_mselect_pa_brend > option[value="'+href+'"]').change();
			
			}else{
				$('select.woof_mselect_pa_brend > option[value="'+href+'"]').prop("selected", false);
				$('select.woof_mselect_pa_brend > option[value="'+href+'"]').change();
			}
			return false;
		});
		
	//NEW END


	function scrollFunction(){
		var textBlock=$(".box_scroll_holder");
		var tableBlock=$(".wishlist_table");
		var textBlockHeight = textBlock.height();
		if(textBlockHeight>450){
			textBlock.css("height","450");
			// $("#toOrderConsult").css("padding","50 0 0 0");
			
		};
		setTimeout(function(){

			if(($(".box_scroll_holder").is(".wishlist_table"))){
			alert("f");}
		},3000)
		
	};
	scrollFunction();

	(function(){
		var headerRespons = $(".hedaer_responsive").find(".open_menu");
		headerRespons.on("click", function(){

		});
	})();


	(function getContentFromIframe () {
		var iframe = $("#inst").contents().find("body").html();
		var a = $(iframe).find('a');
		$('.widget2').html(a);
			
	})();
	
	var ww = ($(window).width() - 85);
	var wh = $(window).height();
	// console.log(ww+" "+wh);
	$('#left_slider').carouFredSel({
			scroll: {
				fx : "crossfade"
			},
			auto: false,
			width: (ww/2),
			items: {
				visible: 1,
				width: (ww/2),
				height: wh
			},
			onCreate: function(){
				$('#left_slider li').height(wh);
			}
		});
		$('#right_slider_xs_1').carouFredSel({
			auto: false,
			scroll: 1,
			width: (ww/4),
			height: (wh/2),
			items: {
				visible: 1,
				width: (ww/4),
				height: (wh/2)
			},
			onCreate: function(){
				$('#right_slider_xs_1 li').height(wh/2);
			}
		});
		$('#right_slider_xs_2').carouFredSel({
			scroll: {
				fx : "crossfade"
			},
			auto: false,
			width: (ww/4),
			height: (wh/2),
			items: {
				visible: 1,
				width: (ww/4),
				height: "100%"
			},
			onCreate: function(){
				$('#right_slider_xs_2 li').height(wh/2);
			}
		});
		$('#right_slider_sm').carouFredSel({
			scroll: {
				fx : "crossfade"
			},
			auto: false,
			items: {
				visible: 1,
				width: (ww/2),
				height: (wh/2)
			},
			onCreate: function(){
				$('#right_slider_sm li').height(wh/2);
			}
			
		});
		
	$(".right_slider_box_sm, .right_box_holder").height( wh/2);	
	
});	
 


		if(($(window).width())>1024){	
		$('#fullpage').fullpage({
			 onLeave: function(index, nextIndex, direction ){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 6 && direction =='down'){
                // alert("Going to section 3!");
                $('#footer').css("bottom","0");
                $('.footer-overlay').fadeIn("slow");
                return false;
            }

            else if(index == 6 && direction == 'up' ){
				
				$('.footer-overlay').fadeOut("slow");
				if($("#footer").is(':visible') && scroll){
					return false;               	
				}
				
            }
		 
			 
            }
  
		});

		
	}
	
	
	
$(document).on('click', '#moveTo', function(e){
	scroll = false;
  $.fn.fullpage.moveTo(1);
  
		setTimeout(function(){
			scroll = true;
		}, 1000)

});

	
	if(($(window).width())<=1024){
		$('.last_slide').hide();
		$('#mouseBlock').hide();

	}else{}

		$('#main_pic_1').cycle(); 
		$('#main_pic_2').cycle(); 
		$('#main_pic_3').cycle(); 

	    $('#nav-icon').click(function(){
	        $(this).toggleClass('active');
	        $('#header').toggleClass('close_menu')
	    });
	    $('#nav-icon_respons').click(function(){
	        $(this).toggleClass('active');
	        $('.nav_block').toggleClass('open_menu');
	    });


		$("#next").click(function(){
			$('#left_slider, #right_slider_xs_1, #right_slider_xs_2, #right_slider_sm').trigger("next");
			return false;
		});

		$("#prev").click(function(){
			$('#left_slider, #right_slider_xs_1, #right_slider_xs_2, #right_slider_sm').trigger("prev");
			return false;
		});


		
	    $(".philosophy .left_block").each(function(){
		     var src = $(this).children("img").attr("src");
		     $(this).append('<div class="bg"></div>');
		     $(this).children(".bg").css("background-image","url('"+src+"')");
		});


		$('.flexslider').flexslider({
		    animation: "fade",
		    animationSpeed: 1500,
		    controlNav: false,
		    animationLoop: false
		  });


		$('.flexslider_catalog').flexslider({
		    animation: "fade",
		    animationSpeed: 1500,
		    controlNav: false,
		    animationLoop: false,
		    slideshow :false
		  });

 $(".img_block").each(function(){
		     var src = $(this).children("img").attr("src");
		     $(this).append('<div class="bg"></div>');
		     $(this).children(".bg").css("background-image","url('"+src+"')");
		});

// $(".sider_block .slides li").each(function(){
// 		     var src = $(this).children("img").attr("src");
// 		     $(this).append('<div class="bg"></div>');
// 		     $(this).children(".bg").css("background-image","url('"+src+"')");
// 		});





$(document).on('click', '#mouseBlock', function(){
  $.fn.fullpage.moveTo(2);
});

function windowHeight(){
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var windowWidthCatalog = $(window).width()-385;
	$('.contact_page').css("height",windowHeight);
	$('.product_card .flexslider').css("height",windowHeight);
	$('.catalog').css("width",windowWidthCatalog);
	$('.product_card .right_block').css("height",windowHeight);
	$('.news_catalog .right_block').css("height","auto");
	$('.product_card .news_box').css("height",windowHeight*0.5);
	$('.product_card .news_box .right_block').css("height",windowHeight*0.5);
	$('.nav_block').css("height",windowHeight);
	$('.philosophy .left_block').css("height",windowHeight);	
	$('.news_page .right_block').css("height",windowHeight);	
	// $('#wrapper .woocommerce').css("height",windowHeight);	
	// $('.scroller-el').css("height",windowHeight*0.5);
	$('.scroller-el').css("height",windowHeight*0.5);
	$('.scroller-el').css("width",windowWidthCatalog*0.25);
	if(($(window).width())<=1024){
		$('.contact_page').css("height","auto");
		$('.catalog').css("width",windowWidth);
		$('.news_page .right_block').css("height","auto");
		$('.first_block').css("height",	windowHeight);
		$('#main_pic_1').css("height",	windowHeight);
		$('.product_card .news_box').css("height","auto");
		$('.scroller-el').css("height",windowHeight*0.5);
		$('.scroller-el').css("width",windowWidth*0.5);
		$('#wrapper .product_card .right_block').css("height","auto");
		$('#wrapper .product_card .left_block').css("height","auto");
	}
	if(($(window).width())<=768){
		$('.responsive_block .left_block').css("height","auto");
		$('#wrapper .product_card .right_block').css("height","auto");
	}
	// if(($(window).width())<=667){
	// 	$('#wrapper .woocommerce').css("height","1024");
	// }
	if(($(window).width())<=568){
		$('.scroller-el').css("height",windowHeight);
		$('.scroller-el').css("width",windowWidth);	
		$('.philosophy .left_block').css("height","auto");	
	}
};
windowHeight();
});


/*_______________________news page________________*/ 
$(".news_catalog .left_block").each(function(){
     var src = $(this).children("img").attr("src");
     $(this).append('<div class="bg"></div>');
     $(this).children(".bg").css("background-image","url('"+src+"')");
});

/*_______________________product catalog________________*/ 
$(".scroller-el a").each(function(){
     var src = $(this).children("img").attr("src");
     $(this).append('<div class="bg"></div>');
     $(this).children(".bg").css("background-image","url('"+src+"')");
});

$('.filters_respons').click(function(){
	$('.filters_holder').toggleClass('open_filters');
});

$('body').on('click', '.img_overlay', function(){
var link = $(this).parents(".scroller-el").find("a").attr("href");
window.location.href = link ;

});

/*_______________________product page________________*/ 


/*_______________________contact page________________*/ 
// function fullHeight(element){
// 	var fullHeight = $(window).height();
// 	element.css("height",fullHeight);
// };
// fullHeight($('.contact_page'));
function contactWidth(){
	var textareaWidth =$(".contact-form form p").has('textarea');
	textareaWidth.css("width","100%");
};
contactWidth();

function menuClick(){
	$('a:contains("LOGIN")').on('click',function(){
		$('.pop_login').show();
		return false;
	});
	$('.main_logo').on('click',function(){
		$('.pop_login').show();
		return false;
	});
	$('#login_btn').on('click',function(){
		var login = $('#login_btn input.checkLogin').val();
		var host = $('#login_btn input.hostName').val();
		var lang = getUrlVars()["lang"];

		if (lang === undefined) {
			lang = '';
		}if (lang === 'en') {
			lang = '?lang=en';
		}else if (lang === 'az') {
			lang = '?lang=az';
		}
		if (login === '0') {
			$('.pop_login').show();
		}else {
			 window.location.href = host + "/login/" + lang;
		}
		
		return false;
	});
	$('.close_pop').on('click',function(){
		$('.pop_login').hide();
		return false;
	});
	$('#toOrderConsult').on('click',function(){
		$('.pop_order').show();
		return false;
	});
};
menuClick();



/*_____________________________tabs_______________________*/
jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
    });
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// добавляет мультиязычность фильтра 
function renameFilter() {
	var lang = getUrlVars()["lang"];
	var filter = $(".price_slider_amount .button");
	var title = $(".widget_price_filter h4");
	var reset = $(".woof_reset_search_form");
	var brend = $('.woof_container_inner h4:last');

	if (lang === undefined) {
		filter.text("фильтр");
		title.text("фильтр товаров");
		reset.text("сбросить");
		brend.text("бренд");
	}if (lang === 'en') {
		filter.text("filter");
		title.text("filter products");
		reset.text("reset");
		brend.text("brand name");
	}else if (lang === 'az') {
		filter.text("seçmək");
		title.text("Məhsul seçimi");
		reset.text("yenidən");
		brend.text("Brend Adı");
	}
}
if ($('.filters').length > 0) { renameFilter(); }

// добавляет мультиязычность товара
function renameTovar() {
	var lang = getUrlVars()["lang"];
	var aded = $('.yith-wcwl-wishlistaddedbrowse span');
	var button = $('.yith-wcwl-add-button a');

	if (lang === undefined) {
		aded.text("Продукт добавлен");
		button.text("Добавить в избранное");
	}if (lang === 'en') {
		aded.text("Product added");
		button.text("Add to favorites");
	}else if (lang === 'az') {
		aded.text("Product əlavə");
		button.text("Seçilmişlərə əlavə et");
	}
}
if ($('.yith-wcwl-add-to-wishlist').length > 0) { renameTovar(); }

// перезапускает мультиязычность при добавлении товара
$('.yith-wcwl-add-button a').on('click', function() { renameTovar(); });





// (function($) {
// $(function() {
// 	$(".cogs").on("click",function(){
// 		if {}
//   			$(".filters").show();
//   			$(".cogs").addClass("change_bg");
//   		});
// 	setTimeout(function(){
// 		$(".change_bg").on("click",function(){
// 			$(".filters").hide();
// 			$(".cogs").removeClass("change_bg");
// 	});
// 	},3000);
// });
// })(jQuery);

function openFilter(el) {
	if ($(el).hasClass('change_bg')) {
		$(".filters").hide();
		$(el).removeClass("change_bg");
	}else {
		$(".filters").show();
		$(".cogs").addClass("change_bg");
	}
}

// $(document).ready(function(){
// baron({
// 	root:".wrapper",
// 	scroller: '.scroller',
// 	container: '.container',
// 	bar: '.scroller__bar'
// });

// });

// window.onload = function() {
//     window.dima = baron({
//         root: '.wrapper_1',
//         scroller: '.scroller',
//         bar: '.scroller__bar',
//         barOnCls: 'baron'
//     }).fix({
//         elements: '.header__title',
//         outside: 'header__title_state_fixed',
//         before: 'header__title_position_top',
//         after: 'header__title_position_bottom',
//         clickable: true
//     }).pull({
//         block: '.load',
//         elements: [{
//             self: '.load__value',
//             property: 'width'
//         }],
//         limit: 115,
//         onExpand: function() {
//             $('.load').css('background', 'red');
//         }
//     });

// };


              // window.onload = function() {
              //     // window.dima = baron({
              //     //     root: '.wrapper_1',
              //     //     scroller: '.scroller',
              //     //     bar: '.scroller__bar',
              //     //     barOnCls: 'baron'
              //     // }).pull({
              //     //     block: '.load',
              //         // elements: [{
              //         //     self: '.load__value',
              //         //     property: 'width'
              //         // }],
              //         // limit: 115,
              //         // onExpand: function() {
              //         //     $('.load').css('background', 'red');
              //         // }

              //     });


              // };


jQuery(document).ready(function(){
	if(($(window).width())>=1024){
    	jQuery('.inner').scrollbar();
	};

	if(($(".descr_box").height()>450)){
		$(".inner").css("height","450");
	}else{
		$(".inner").css("height","auto");
	};
	if(($(".scnd_title").height()>=100)){
		$(".scnd_title").addClass("change_size");
	}else{
		$(".scnd_title").removeClass("change_size");
	}

	setTimeout(function(){
		jQuery('.filters .inner').scrollbar();
		},3000)
	
});
 
//  (function ($) {
// 	var methods = {
// 		init: function (options) {
// 			var p = {
// 				parent: $(window),
// 				position:'absolute',	//'absolute' or 'fixed'
// 				veticalAlign:'middle',	//'top','bottom' or 'middle' - default
// 				align:'center'			//'left','right' or 'center' - default
// 			};
// 			if (options) {
// 				$.extend(p, options);
// 			}
// 			return this.each(function () {
// 				var positionEl;
// 				if(p.position == 'absolute' || p.position == 'fixed'){
// 					positionEl = p.position;	
// 				}else{
// 					positionEl = 'absolute';	
// 				}
// 				var 
// 				elWrap = $('<div>').addClass('fullsizeWrap').css({left:'0',top:'0',width:'100%',height:'100%',overflow:'hidden',position:positionEl}),
// 				el = $(this).css({position:'absolute',maxWidth:'none',minWidth:0,maxHeight:'none',minHeight:0}).wrap(elWrap),
// 				parent = el.closest(p.parent).addClass('coverParent');
// 				if($.isWindow(p.parent[0])){
// 					parent = $(window)
// 				}
					
// 				var
// 				elClone = el.clone().removeAttr('class').removeAttr('width').removeAttr('height').css({left:'-9999px',top:'-9999px'}).appendTo('body'),
// 				elCloneW = elClone.width(),
// 				elCloneH = elClone.height(),
// 				wW = parent.width(),
// 				wH = parent.height(),
// 				elFactor = elCloneW / elCloneH,
// 				wFactor = wW/wH;
				
// 				var fullSizeFunc = function(){
// 					if(elFactor < wFactor){

// 						var 
// 						elH = wW / elFactor,
// 						elTop = (elH - wH) / 2;
// 						el.css({width:wW,height:elH, top:-elTop, left:'0'});
// 					}else{

// 						var 
// 						elW = wH * elFactor,
// 						elLeft = (elW - wW) / 2;
// 						el.css({height:wH,width:elW, left:-elLeft, top:'0'});	
// 					}
					
// 					if(p.veticalAlign == 'top'){
// 						el.css({top:0,bottom:'auto'})	
// 					}
// 					if(p.veticalAlign == 'bottom'){
// 						el.css({top:'auto',bottom:'0'})	
// 					}
// 					if(p.align == 'left'){
// 						el.css({right:'auto',left:'0'})		
// 					}
// 					if(p.align == 'right'){
// 						el.css({left:'auto',right:'0'})		
// 					}
					
// 				};
// 				elClone.remove();
// 				fullSizeFunc();
// 				el.fadeTo(500,1)
// 				$(window).on('resize redraw',function(){
// 					wW = parent.width();
// 					wH = parent.height();
// 					wFactor = wW/wH;
// 					fullSizeFunc();
// 				});
				
// 			});
// 		}
// 	};
// 	$.fn.liCover = function (method) {
// 		if (methods[method]) {
// 			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
// 		} else if (typeof method === 'object' || !method) {
// 			return methods.init.apply(this, arguments);
// 		} else {
// 			$.error('Метод ' + method + ' в jQuery.liCover не существует');
// 		}
// 	};
// })(jQuery);

// //инициализация
// $(function(){
//     $(window).load(function(){
//         $('.cover').liCover({
// 			parent: $('.flexslider .slides>li'),
// 			position:'absolute' //'absolute' or 'fixed'	
// 		})
//     })
// });