window.onload = function(){
    // slider left-right
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);

    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        currentIndex ++;
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";
        sliderWrap.style.transition = "all 0.6s";

        setTimeout(() => {
            if(currentIndex == 3){
                sliderWrap.style.marginLeft = "0";
                sliderWrap.style.transition = "0s";
                currentIndex = 0;
            }
        }, 700);
    }, 3000);

    // menu slide (up-down)
    const navList = document.querySelector(".nav > ul");

    navList.addEventListener("mouseover", () => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.opacity = "1";
            sub.style.transition = "all 0.3s";
        })
        document.getElementById("header").classList.add("on");
    });
    navList.addEventListener("mouseout", () => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.opacity = "0";
            sub.style.transition = "all 0.3s";
        })
        document.getElementById("header").classList.remove("on");
    });

    // popup
    document.querySelector(".popup-btn").addEventListener("click", () => {
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click", () => {
        document.querySelector(".popup-view").style.display = "none";
    });
}