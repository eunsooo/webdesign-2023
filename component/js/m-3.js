// $(function(){
//     $(".nav > ul > li").mouseover(function(){
//         $(".nav > ul > li > ul").stop().fadeIn(900);
//         $("#header").addClass("on");
//     });
//     $(".nav > ul > li").mouseout(function(){
//         $(".nav > ul > li > ul").stop().fadeOut(100);
//         $("#header").removeClass("on");
//     });
// });

window.onload = function(){
    let navList = document.querySelector(".nav > ul");
    
    // function(){} === () => {}
    navList.addEventListener("mouseover", () => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "156px";
        });
        document.getElementById("header").classList.add("on");
    });
    navList.addEventListener("mouseout", () => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "0px";
        });
        document.getElementById("header").classList.remove("on");
    });
}