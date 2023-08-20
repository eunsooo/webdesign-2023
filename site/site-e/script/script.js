window.onload = function(){
    
    // slider
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);

    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        currentIndex ++;

        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";
        sliderWrap.style.transition = "all 0.6s";

        if(currentIndex == slider.length){
            setTimeout(() => {
                sliderWrap.style.marginLeft = "0px";
                sliderWrap.style.transition = "0s";
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    //menu
    const navList = document.querySelectorAll(".nav > ul > li");

    navList.forEach(navItem => {
        navItem.addEventListener("mouseover", function(){
            this.querySelector(".submenu").style.height = "160px";
        });
    });
    navList.forEach(navItem => {
        navItem.addEventListener("mouseout", function(){
            this.querySelector(".submenu").style.height = "0px";
        });
    });
}