// $(function(){
//     $(".nav > ul > li").mouseover(function(){
//         $(this).find(".submenu").stop().slideDown();
//     });
//     $(".nav > ul > li").mouseout(function(){
//         $(this).find(".submenu").stop().slideUp();
//     });
// });

window.onload = function(){
    let navList = document.querySelectorAll(".nav > ul > li");

    navList.forEach(navItem => {
        navItem.addEventListener("mouseover", function() {
            this.querySelector(".submenu").style.height = "156px";
        });
    });

    navList.forEach(navItem => {
        navItem.addEventListener("mouseout", function() {
            this.querySelector(".submenu").style.height = "0px";
        });
    });
}