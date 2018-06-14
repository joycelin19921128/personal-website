$(document).ready(function () {
      //banner 隨著視窗高度作滿版調整
      document.querySelector('#banner').style.height = window.innerHeight="px"
      window.onresize = function(){
          document.querySelector('#banner').style.height = window.innerHeight="px"
      }

    //漢堡選單
    $('.shownav').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('nav-show');
    });
    //點選選單滑到相對應內容

    var showSkill = false; //讓效果只呈現一次

    $('.scrollTop').click(function (e) {
        e.preventDefault(); //停止連結預設的跳動
        var target = $(this).attr('href'); //點選本身的連結性質
        var targetPos = $(target).offset().top; //取連結相對應內容的高度位置
        $('html, body').animate({
            scrollTop: targetPos
        }, 1000);
        //滑動至相對應內容的高度，可以看到效果，但此時還沒套用到class上
    });

    //滾動時讀取現在滾動的位置-->當滑到相對應內容，選單做樣式變化
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop(); //取滾動的值
        var windowHeight = $(window).height(); //取畫面高度

        //滾動時將觸發此功能
        $('.scrollTop').each(function () {
            var target = $(this).attr('href'); //點選本身的連結性質
            var targetPos = $(target).offset().top; //取連結相對應內容的高度位置
            var tartgetHeight = $(target).outerHeight(); //取連結相對應內容高度包含padding           
            if (targetPos - 1 <= scrollPos && (targetPos + tartgetHeight) > scrollPos) {
                //如果滾動到相對應範圍內  //targerPos - 1 目的去除落差
                $('scrollTop').removeClass('active') //移除前一個選單樣式變化
                $(this).addClass('active'); //滑動到相對應的內容後，連結產生樣式變化   
            } else {
                $(this).removeClass('active') //如果滾動到範圍外選單去除樣式
            }
        });
        //progression bar
        var skillTop = $('#skill').position().top; //skill內容高度
        if (skillTop <= (scrollPos + windowHeight / 2) && !showSkill) {
            showSkill = true;
            //先乘除後加減，所以滑動到畫面的一半高度時就會啟動

            //執行所有的progress-bar
            $('#skill .progress-bar').each(function () {
                var thisValue = $(this).data('progress'); //取data-progress值
                $(this).css('width', thisValue + '%'); //將值加css裡
            });
        }
        // animated
        $('.animatedX').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeInX');
            }
        });
        $('.animatedY').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeInY');
            }
        });
    });
  
});