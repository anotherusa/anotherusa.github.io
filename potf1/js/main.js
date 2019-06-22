// JavaScript Document
			$(function() {
				$(".img_box").colorbox();
			});
			$(function(){
				//スムーススクロール
					// #で始まるリンクをクリックしたら実行
				$('a[href^="#"]').click(function() {
				  var speed = 400; 
				  var href = $(this).attr("href");
				  var target = $(href == "#" || href == "" ? 'html' : href);
				  var position = target.offset().top;
				  $('body,html').animate({scrollTop:position}, speed, 'swing');
				  return false;
				});
				$(window).on('load scroll',function(){
					$('.scin').each(function(){
						var cTop = $(this).offset().top;
						var vTop = $(window).scrollTop();
						var vHeight = $(window).height();
						var vBtm = vTop + vHeight*0.8;
						if( vBtm > cTop ){
							$(this).addClass('op');
						}
						if(cTop > vBtm){
							$(this).removeClass('op');
						}
						if(cTop + $(this).height() < vTop){
							$(this).removeClass('op');
						}
					});
				});
				$(window).on('load scroll',function(){
					$('#con1').each(function(){
						var cTop = $(this).offset().top;
						var vTop = $(window).scrollTop();
						var vHeight = $(window).height();
						var vBtm = vTop + vHeight;
						if( vBtm > cTop ){
							$('.sheet1').removeClass('hide');
						}
						if(cTop + $(this).height() < vTop){
							$('.sheet1').addClass('hide');
						}
					});
					$('#con2').each(function(){
						var cTop = $(this).offset().top;
						var vTop = $(window).scrollTop();
						var vHeight = $(window).height();
						var vBtm = vTop + vHeight;
						if( vBtm > cTop ){
							$('.sheet2').removeClass('hide');
						}
						if(cTop + $(this).height() < vTop){
							$('.sheet2').addClass('hide');
						}
					});
					$('#con3').each(function(){
						var cTop = $(this).offset().top;
						var vTop = $(window).scrollTop();
						var vHeight = $(window).height();
						var vBtm = vTop + vHeight;
						if( vBtm > cTop ){
							$('.sheet3').removeClass('hide');
						}
						if(cTop + $(this).height() < vTop){
							$('.sheet3').addClass('hide');
						}
					});
				});
			});