$(document).ready(function(){

    /* gnb hover */
    $('.gnb').hover(function(){
      $('.menuBg,.dep2').stop().slideDown();
    },function(){
      $('.menuBg,.dep2').stop().slideUp();
    });

    /* 사이트맵 */
    $('.siteMapArea').on({
      "click":function(){
        $(this).siblings('.siteMap').toggleClass('active');
      }
    });


    /*탭 리스트*/
    $('.tabList li').on({
        "click":function (){
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.tabNav').siblings('.tabCont').eq($(this).index()).addClass('active').siblings('.tabCont').removeClass('active');
        }
    })

    $('.tabList li.common').on({
      "click":function (){
        $(this).parents('#container').addClass('tabBg01');
        if($(this).parents('#container').hasClass('tabBg02')){
          $(this).parents('#container').removeClass('tabBg02');
        }
      }
    })

    $('.tabList li.more').on({
      "click":function (){
        $(this).parents('#container').addClass('tabBg02');
        if($(this).parents('#container').hasClass('tabBg01')){
          $(this).parents('#container').removeClass('tabBg01');
        }
      }
    })

    $('.statusList li').on({
      "click":function (){
          $(this).addClass('active').siblings('li').removeClass('active');
      }
  })

})
