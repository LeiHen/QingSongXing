// JavaScript Document

/**
 * @name     :adClose
 * @author   :Nice
 * @dependent:广告关闭
 */
function adClose(id) {
    var e=$('#'+id);
    var btn=e.find('.btn_close');

    btn.click(function(event) {
        e.animate({
            opacity:0
        }, 300)
        setTimeout(function(){
            e.animate({
                height:0
            }, 2*500)
        },300)

        return false
    });
}
/* @end **/


/**
 * @name     :bannerTab
 * @author   :Nice
 * @dependent:banner切换
 */
function bannerTab(id) {
    var e=$('#'+id);
    
    var li=e.find('li');
    var img=e.find('.img');

    var imgL=img.length;

    var i=0;

    $(li[0]).addClass('hover');
    
    setInterval(function(){
        
        li.animate({
            opacity:0
        }, 600)
        setTimeout(function(){
            li.removeClass('hover');
            i=i+1;
            if (i>=imgL) {
                i=0;
            };
            $(li[i]).addClass('hover').animate({
                opacity:1
            }, 600);
        },600)

    },7600)
}
/* @end **/

/**
 * @name     :hideShowBtn
 * @author   :Nice
 * @dependent:咨询点评
 */
function hideShowBtn(hideID,showID) {
    var eHide=$('#'+hideID);
    var eShow=$('#'+showID);

    // var btn=e.find('.btn_close');
    // console.log(eHide);

    eHide.click(function(event) {
        $(this).addClass('none');
        eShow.removeClass('none');
        // $(this).animate({
        //     height:0,
        //     marginTop:0,
        //     marginBottom:0,
        //     paddingTop:0,
        //     paddingBottom:0
        // }, 400)


        // eShow.css({
        //     height: 0,
        // });

        // eShow.removeClass('none');
        // eShow.css("height","auto");
        // eShow.css({
        //     height: 100+'%'
        // });


    // eShow.css({
    //     height: 'auto',
    //     opacity: 1
    // });

// eShow.animate({
//     height:100+'%',
//     height:'100%',
//     marginTop:0,
//     marginBottom:0,
//     opacity: 1
// }, 400)
// eShow.find('.item').animate({
//     height:'100%',
//     marginTop:30,
//     marginBottom:30,
//     opacity: 1
// }, 400)

    // eShow.css("transform","translateY(0)");

        // setTimeout(function(){
        //     eShow.css("transform","translateY(0)");
        // },1400)
        

        
        
        // console.log('dsf');
        return false 
    });

   
   

    // btn.click(function(event) {
    //     e.animate({
    //         opacity:0
    //     }, 300)
    //     setTimeout(function(){
    //         e.animate({
    //             height:0
    //         }, 2*500)
    //     },300)
    //     return false
    // });

}
/* @end **/


/**
 * @name     :promptClear
 * @author   :Nice
 * @dependent:提示清除
 */
function promptClear(ID) {
    var e=$('#'+ID);
    var hint=e.next(".prompt");

    e.focus(function(event) {
        if (e.val()=='') {
            hint.addClass('none');
        };
    });

    e.blur(function(event) {
        if (e.val()=='') {
            hint.removeClass('none');
        };
    });

    hint.click(function(event) {
        if (e.val()=='') {
            hint.addClass('none');
        };
        e.focus();
    });
}
/* @end **/



/**
 * @name     :customizationForm
 * @author   :Nice
 * @dependent:定制表单
 */
function customizationForm(ID) {
    var e=$('#'+ID);
    var step=e.find('.step');
    var stepList=step.find('.list');

    var stepListL=stepList.length;

    var info=e.find('.info')
    var item=info.children('.list');

    var itemL=item.length;

    var stepBtnWrap=e.find('.step_btn');
    var stepBtn=e.find('.step_btn .btn');

    var prevBtn=stepBtnWrap.find('.prev_btn');
    var nextBtn=stepBtnWrap.find('.next_btn');
    var submitBtn=stepBtnWrap.find('.submit_btn');
    var verify=stepBtnWrap.find('.verify');

    var i=0;
    // var itemL=4;

    //样式初始化
    info.width(itemL*100+'%');
    item.width(100/itemL+'%');

    nextBtn.stop().animate({
        left:0+'%'
    }, 400)

    function nextBtnEvent(){
        // $(item[i]).addClass('none');
        console.log(item[i])
        i=i+1;
        info.css({
            left:-i*100+'%'
        });
        prevBtn.removeClass('none');

        prevBtn.animate({
            left:0+'%'
        }, 400)

        $(stepList[i]).addClass('active');

        if (i>=itemL-1) {
            i=i-1;

            nextBtn.stop().animate({
                left:200+'%'
            }, 400)

            setTimeout(function(){
                nextBtn.addClass('none');

                verify.stop().animate({
                    opacity:1
                }, 400)
            },500)

            setTimeout(function(){

                prevBtn.stop().animate({
                    left:0+'%'
                }, 400)

                submitBtn.removeClass('none');
                submitBtn.stop().animate({
                    left:0+'%'
                }, 400)
            },500)
        };

        
        
    }

    function prevBtnEvent(){
        info.css({
            left:-i*100+'%'
        });

        console.log(i);

        $(stepList[i+1]).removeClass('active');
        i=i-1;

        if(i!=itemL){
            verify.stop().animate({
                opacity:0
            }, 400)

            submitBtn.stop().animate({
                left:200+'%'
            }, 400)

            setTimeout(function(){
                submitBtn.addClass('none');
            },500)
        };

        if (i<=0) {
            i=0;
            prevBtn.stop().animate({
                left:200+'%'
            }, 400);
            setTimeout(function(){
                prevBtn.addClass('none');
            },500)
            
        };

        

        if (i==0) {
            setTimeout(function(){
                nextBtn.removeClass('none');
            },500)
            
            nextBtn.stop().animate({
                left:200+'%'
            }, 400)
        }
    }

    var L=stepBtn.length;

    nextBtn.click(nextBtnEvent);
    prevBtn.click(prevBtnEvent);
    
}
/* @end **/




/**
 * @name     :collectWeb
 * @author   :Nice
 * @dependent:收藏本站
 */
function addFavorite() {

    if (window.sidebar && window.sidebar.addPanel) { 
    // Mozilla Firefox Bookmark
        window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { 
    // IE Favorite
        window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) { 
    // Opera Hotlist
        this.title = document.title;
        return true;
    } else { 
    // webkit - safari/chrome
        alert('请使用' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D 收藏！');
    }

}
/* @end **/

/**
* @name     :satisfaction
* @author   :Nice
* @version  :
* @explain  :满意度评分
*/
function satisfaction(id){
    var e=$("#"+id),
        itme=e.children('.ico'),
        hint=e.next('.hint'),
        i=0;

        itme.hover(function() {
            var index=$(this).index();
            itme.css({
                color: '#e5e5e5'
            });
            itme.removeClass('icon_heart').removeClass('hover');
            for (var i = 0; i <=index; i++) {
                $(itme[i]).addClass('icon_heart');
            };
            hint.text(i+'分');
        }),function(){

            

            for (var i = 0; i <=index; i++) {
                $(itme[i]).addClass('icon_heart');
            };
            hint.text(i+'分');
        };

        itme.click(function(event) {
            var index=$(this).index();

            itme.css({
                color: '#f54200'
            });

            itme.removeClass('icon_heart').removeClass('hover');
            for (var i = 0; i <=index; i++) {
                $(itme[i]).addClass('icon_heart').addClass('hover');
            };
            hint.text(i+'分');
        });

}
/* @end **/



/**
* @name		:
* @author	:Nice
* @version	:
* @type		:基类
* @explain	:
* @relating	:
* @dependent:
*/

/* @end **/