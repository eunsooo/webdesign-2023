window.onload = function(){

    // menu slide (each, left-right)
    let navList = document.querySelectorAll(".nav > ul > li");

    navList.forEach(function(navItem){
        navItem.addEventListener("mouseover", function(){
            this.querySelector(".submenu").style.height = "155px";
        });
    });
    navList.forEach(function(navItem){
        navItem.addEventListener("mouseout", function(){
            this.querySelector(".submenu").style.height = "0px";
        });
    });

    // slider (up-down)
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);

    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        currentIndex ++;

        sliderWrap.style.marginTop = -currentIndex * 350 + "px";
        sliderWrap.style.transition = "all 0.6s";

        setTimeout(() => {
            if(currentIndex == slider.length){
                sliderWrap.style.marginTop = "0px";
                sliderWrap.style.transition = "0s";
                currentIndex = 0;
            }
        }, 700);

    }, 3000);
    
    // popup
    document.querySelector(".popup-btn").addEventListener("click", () => {
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click", () => {
        document.querySelector(".popup-view").style.display = "none";
    });
}