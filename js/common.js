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
        }, 1000)
        setTimeout(function(){
            li.removeClass('hover');
        },1000)

        // i=i+1;
        // if (i>=imgL) {
        //     i=0;
        // };
        
        // $(li[i]).addClass('hover');

        // console.log(i)
    },2000)

    

    // btn.click(function(event) {
    //     e.animate({
    //         opacity:0
    //     }, 300)
    //     setTimeout(function(){
    //         e.animate({
    //             height:0
    //         }, 2*500)
    //     },300)
    // });
}
/* @end **/


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
    });
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
* @name		:
* @author	:Nice
* @version	:
* @type		:基类
* @explain	:
* @relating	:
* @dependent:
*/

/* @end **/