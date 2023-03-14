var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  // 탭 콘텐츠인 경우
   /* 메인 최근 게시물 탭 */
    $('div.recent_board ul.tab li a').on('click', function (e) {
        e.preventDefault();
        var index = $('div.recent_board ul.tab li a').index(this);
        $('div.recent_board ul.tab li, div.recent_board div.tab_contents').removeClass('active');
        $('div.recent_board ul.tab li a span').remove();
        $('div.recent_board ul.tab li:eq('+ index +'), div.recent_board div.tab_contents:eq('+ index +')').addClass('active');
      
    });
       /* 메인 최근 게시물 탭 */
       $('div.search_tab ul.tab01 li a').on('click', function (e) {
        e.preventDefault();
        var index = $('div.search_tab ul.tab01 li a').index(this);
        $('div.search_tab ul.tab01 li, div.search_tab div.tab_contents01').removeClass('active');
        $('div.search_tab ul.tab01 li a span').remove();
        $('div.search_tab ul.tab01 li:eq('+ index +'), div.search_tab div.tab_contents01:eq('+ index +')').addClass('active');
      
    });
    		
		$(document).ready(function(){
		
      //탭클릭시 slick슬라이드 초기화
        $(".tap_ul2").click(function(){
          $('.tap_cont_box2 > div > ul').slick('setPosition');
        });
  
        //배너
        $('.banner_list').slick({
          infinite: true, //양방향 무한 모션
          autoplay:true,//자동롤링
          //centerMode:true,//가운데모드
          //centerPadding:'10%',//객체간 간격
          slidesToShow:4,//한번에 보여질개수
          //variableWidth:true,//가변 너비 슬라이드
          cssEase:'cubic-bezier(0.77, 0, 0.175, 1)',//이징 속도(좌:가로,세로, 우:가로,세로)
          speed: 400,//슬라이드 전화시 속도
          nextArrow: $(".banner_controll_box .banner_next"),
          prevArrow: $(".banner_controll_box .banner_prev"),
          responsive:[//반응형 일때 실행
            {
              breakpoint:1199,
              settings:{
                slidesToShow:4,//한번에 보여질개수
              }
            },
            {
              breakpoint:1024,
              settings:{
                slidesToShow:3,//한번에 보여질개수
              }
            },
            {
              breakpoint:768,
              settings:{
                slidesToShow:2,//한번에 보여질개수
              }
            },
            {
              breakpoint:520,
              settings:{
                slidesToShow:1,//한번에 보여질개수
              }
            }
          ]
        });
        $('.banner_play').hide();
        $('.banner_pause').on('click', function() {
          $('.banner_list').slick('slickPause');
          $(this).hide();
          $('.banner_play').show();
        });
        $('.banner_play').on('click', function() {
          $('.banner_list').slick('slickPlay');
          $(this).hide();
          $('.banner_pause').show();
        });
  
      });


      //팝업창 만들기
      
      $("#confirm").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
    $("#modal-open").click(function(){        
        $("#popup").css('display','flex').hide().fadeIn();
        //팝업을 flex속성으로 바꿔준 후 hide()로 숨기고 다시 fadeIn()으로 효과
    });
    $("#close").click(function(){
        modalClose(); //모달 닫기 함수 호출
    });
    function modalClose(){
        $("#popup").fadeOut(); //페이드아웃 효과
    }

    $(function(){
  
      $("#modal-open02").click(function(){   $("#popup02").css('display','flex').hide().fadeIn();
      });
      $("#close02").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup02").fadeOut();
      }                        
    });   
    $(function(){
      $("#modal-open03").click(function(){   $("#popup03").css('display','flex').hide().fadeIn();
      });
      $("#close03").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup03").fadeOut();
      }                        
    });    
    $(function(){

      $("#modal-open04").click(function(){   $("#popup04").css('display','flex').hide().fadeIn();
      });
      $("#close04").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup04").fadeOut();
      }                        
    });
    $(function(){

      $("#modal-open05").click(function(){   $("#popup05").css('display','flex').hide().fadeIn();
      });
      $("#close05").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup05").fadeOut();
      }                        
    });
 


    //메뉴 슬라이드 다운
    
    $("#nav > ul > li").mouseenter(function(){
      $("#nav > ul > li > ul.submunu").show();
    });
    $("#nav > ul > li").mouseleave(function(){
      $("#nav > ul > li > ul.submunu").hide();
    });
   
 
    $(".open1").click(function(){
      //animate({css속성 : 값 }, 시간, 움직임방식, 콜백함수)
      //open1을 클릭하면 다음과 같은 일이 일어남
      //leftwrap 의 css속성중에 left값이 0
        $("#mGnb").animate({"right":"0"},300,"swing");});
      
      $(".close1").click(function(){
        $("#mGnb").animate({"right" : "-300px"}, 300);
      });
  

     /* 모바일메뉴 */
	$('#mGnb li.has-sub > button').on('click', function(){
		//$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp('fast');
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown('fast');
			element.siblings('li').children('ul').slideUp('fast');
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp('fast');
		}
		return false;
	});

	/* 모바일 왼쪽메뉴 */
	$('#mb_lnb li button').click(function(){
		$('#mb_lnb li button').removeClass('on');
		$('#mb_lnb li ul').slideUp('fast');
		if($('+ul',this).is(':hidden')){
			$(this).addClass('on').next().slideDown('fast');
		}else{
			$(this).removeClass('on').next().slideUp('fast');
		}
		return false;
	});
	$('*:not("#mb_lnb li button")').click(function(){
		$('#mb_lnb li button').removeClass('on');
		$('#mb_lnb li ul').slideUp('fast');
	});
	

//내용 이미지 사이즈 조절
// function contentChange() {
// 	var w = $("#contentHtml").width() - 50;

// 	$("#contentHtml").parent().find("img").each(function() {
// 		$(this).css("width", "");

// 		var img = new Image();
// 		img.src = $(this).attr("src");
// 		img.title = $(this).attr("title");
// 		img.alt = $(this).attr("alt");
// 		if($(this).attr("width") > 0)
// 			img.width = $(this).attr("width");

// 		if(img.width > w) {
// 			$(this).css("width", "100%");
// 		}
// 	});
// }

// (function($){

// 	$(window).ready(function() {
// 		contentChange();
// 	});

// 	$(window).load(function() {
// 		contentChange();
// 	});

// })(jQuery);

$( document ).ready(function() {
  
  $( "#rlZonoPop_wrap" ).hide();

  var chkVal =1413;
  if( getCookie('open_windowPop_'+chkVal) != "done" ){
    $( "#rlZonoPop_wrap" ).show();
  }

});

function getCookie( name ) {
   var nameOfCookie = name + "=";
   var x = 0;
   while ( x <= document.cookie.length )
   {
       var y = (x+nameOfCookie.length);
       if ( document.cookie.substring( x, y ) == nameOfCookie ) {
           if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
               endOfCookie = document.cookie.length;
           return unescape( document.cookie.substring( y, endOfCookie ) );
       }
       x = document.cookie.indexOf( " ", x ) + 1;
       if ( x == 0 )
           break;
   }
   return "";
}


// 창 닫기
function fnClose(winName, expiredays){
var chk = $("#cookiePopCloseChk").is(":checked");  				
  if(chk)setCookie( winName, "done" , expiredays);
  $( "#rlZonoPop_wrap" ).hide();
}


var mpopup = $("#mpopup");
var mpopuplCnt = $("#mpopup a").length;
if(mpopuplCnt > 1) {
	mpopup.owlCarousel({
		items : 1,
		loop : true,
		autoplay : true,
		autoplayTimeout:4000,
		nav : false,
		animateOut: 'fadeOut',
		dots:true,
		dotsEach:false,
		dotsContainer:$(".mpopup-wr .ctrl-nums"),
		dotsData:false,
		
	});


    $( '.owl-dot' ).on( 'click', function() {
    	mpopup.trigger('to.owl.carousel', [$(this).index(), 500]);
	     $('.owl-dot' ).removeClass( 'active' );
	     $(this).addClass( 'active' );
	})

	$('.mpopup-wr .ctrlnums-wrap').show();

	$(".mpopup-wr .btn-play").click(function(){
		mpopup.trigger('play.owl.autoplay',3000);
		$(this).css("display","none");
		$(".mpopup-wr .btn-stop").css("display","inline-block");
	})
	$(".mpopup-wr .btn-stop").click(function(){
		mpopup.trigger('stop.owl.autoplay');
		$(this).css("display","none");
		$(".mpopup-wr .btn-play").css("display","inline-block");
	})
}

