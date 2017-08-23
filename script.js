var header = document.querySelector("header").clientHeight;

// on scroll run the pageScroll function
window.onscroll = function(){
    pageScroll();
}
// when user scrolls past 250 px from the top of document show back-to-top element
function pageScroll(){
    if(document.body.scrollTop > header || document.documentElement.scrollTop > header){
        document.getElementsByClassName("back-to-top")[0].style.display = "block";
    } else {document.getElementsByClassName("back-to-top")[0].style.display ="none";}
}

//Grab page button elements.

 var scrollTop = document.querySelector(".back-to-top");
 var seeWork = document.querySelector("#seeMore");

 seeWork.addEventListener("click", toWork, false);
 scrollTop.addEventListener("click", toTop, false);

// scroll to top
function toTop(){
if(navigator.userAgent.toLowerCase().indexOf('firefox') !== -1){
        //firefox
        scrollTo(document.documentElement, 0, 800);
    }else{
        //rest of navigators
        scrollTo(document.body, 0, 800);
    };
 };

// scroll to mainContent
function toWork(){
if(navigator.userAgent.toLowerCase().indexOf('firefox') !== -1){
        //firefox
        scrollTo(document.documentElement, (0 + header), 700);
    }else{
        //rest of navigators
        scrollTo(document.body, (0 + header), 700);
    };
 };

function scrollTo(element, to, duration){
    if(duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
    setTimeout(function(){
        element.scrollTop = element.scrollTop + perTick;
        if(element.scrollTop == to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
};
