// show submenu (jQuery)
// $(function(){
//     $(".nav > ul > li").mouseover(function(){
//         $(".nav > ul > li > ul").stop().slideDown();
//     });
//     $(".nav > ul > li").mouseout(function(){
//         $(".nav > ul > li > ul").stop().slideUp();
//     });
// });

// show submenu
window.onload = function(){
    let navList = document.querySelector(".nav > ul");
    
    navList.addEventListener("mouseover", function(){
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "155px";
        });
    });
    navList.addEventListener("mouseout", function(){
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "0px";
        });
    });
}