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

//Grab top top element and adding listener when clicked.

 var scrollTop = document.querySelector(".back-to-top");
 scrollTop.addEventListener("click", toTop, false);

// scroll to top speed.
function toTop(){
scrollTo(document.body, 0, 800);
 }

function scrollTo(element, to, duration){
    if(duration <= 0) return;
    var difference = to - element.scrollTop;
    var time = difference / duration * 10;

    setTimeout(function(){
        element.scrollTop = element.scrollTop + time;
        if(element.scrollTop == to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}
