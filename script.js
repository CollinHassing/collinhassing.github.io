var header = document.querySelector("header").clientHeight;

// on scroll show back to top arrow
window.onscroll = function(){
    if(document.body.scrollTop > header || document.documentElement.scrollTop > header){
        document.getElementsByClassName("back-to-top")[0].style.display = "block";
    } else {document.getElementsByClassName("back-to-top")[0].style.display ="none";}
}

//Grab page button elements.

 var scrollTop = document.querySelector(".back-to-top");
 var seeWork = document.querySelector("#seeMore");
 var contactButton = document.querySelector("#contactButton")

 seeWork.addEventListener("click", toWork, false);
 scrollTop.addEventListener("click", toTop, false);

//Open Contact Form
function openForm(){
    var form = document.getElementById('contactForm');
    var formHeight = document.getElementById('contactForm').clientHeight;
    if (form.style.display === 'none'){
        form.style.display = 'block';
        window.scrollBy(0, window.innerHeight)
    } else {
        form.style.display = 'none';
    }

}

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
var headerHeight = document.querySelector("header").clientHeight;
if(navigator.userAgent.toLowerCase().indexOf('firefox') !== -1){
        //firefox
        scrollTo(document.documentElement, (0 + headerHeight), 700);
    }else{
        //rest of navigators
        scrollTo(document.body, (0 + headerHeight), 700);
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
