// $(function(){
//     $(".nav > ul > li").mouseover(function(){
//         $(".nav > ul > li > ul").stop().fadeIn(300);
//         $("#main").addClass("on");
//     });
//     $(".nav > ul > li").mouseout(function(){
//         $(".nav > ul > li > ul").stop().fadeOut(100);
//         $("#main").removeClass("on");
//     });
// })

window.onload = function(){
    let navList = document.querySelector(".nav > ul");

    navList.addEventListener("mouseover", function(){
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.display = "block";
        });
        document.getElementById("main").classList.add("on");
    });
    navList.addEventListener("mouseout", function(){
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.display = "none";
        });
        document.getElementById("main").classList.remove("on");
    });
}