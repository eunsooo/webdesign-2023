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

    navList.forEach(nav => {
        nav.querySelector("ul").style.display = "block";
        nav.querySelector("ul").style.heigth = "0px";
        nav.querySelector("ul").style.overflow = "hidden";
        nav.querySelector("ul").style.transition = "all 400ms";
    });

    navList.forEach(function(navItem){
        navItem.addEventListener("mouseover", function(){
            this.querySelector(".submenu").style.height = "156px";
        });
    });
    navList.forEach(function(navItem){
        navItem.addEventListener("mouseout", function(){
            this.querySelector(".submenu").style.height = "0px";
        });
    });
}