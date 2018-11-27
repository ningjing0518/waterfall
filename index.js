
let box=document.getElementById("box");
let uls=box.getElementsByTagName("ul");
let imgs=document.getElementsByTagName("img");
uls=[...uls];
let bodyH=null;
function bind(n) {
    for (var i = 0; i < n; i++) {
       uls.sort(function (a,b) {
           return utils.css(a,"height")-utils.css(b,"height")
       })
        uls[0].innerHTML+=`<li style="height:${utils.getRandom(280,350)}px">
            <img src="" photo="img/${utils.getRandom(1,27)}.jpg" alt="">
            <a href="javascript:;">海贼王</a>
        </li>`
    }
    bodyH=uls[0].offsetHeight;
}
bind(20);
window.onscroll=fn;
function fn() {
    console.log(bodyH);
    let winScroll=utils.win("scrollTop");
    let winT=utils.win("clientHeight");
    if(winScroll+winT>bodyH){
        console.log(1);
        bind(20);
    }
    for (var i = 0; i < imgs.length; i++) {
        lazyImg(imgs[i]);

    }
}
function lazyImg(ele) {
    let winScroll=utils.win("scrollTop");
    let winH=utils.win("clientHeight");
    let imgH=utils.css(ele,"height");
    let imgT=utils.offset(ele).top;
    if(winScroll+winH>imgT+imgH){
        let newImg=new Image();
        let url=ele.getAttribute("photo");
        newImg.src=url;
        newImg.onload=function () {
            ele.src=this.src;
        }
    }
}