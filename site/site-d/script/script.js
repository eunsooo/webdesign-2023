window.onload = function(){
    //menu slide
    let navList = document.querySelectorAll(".nav > ul > li");

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

    //slider
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".imageWrap");
    const slider = document.querySelectorAll(".image");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);

    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        currentIndex ++;

        sliderWrap.style.marginTop = -currentIndex * 400 + "px";
        sliderWrap.style.transition = "all 600ms"
        
        if(currentIndex == slider.length) {
            setTimeout(() => {
                sliderWrap.style.marginTop = "0px";
                sliderWrap.style.transition = "0s"
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    //popup
    document.querySelector(".popup-btn").addEventListener("click", () => {
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click", () => {
        document.querySelector(".popup-view").style.display = "none";
    });
};