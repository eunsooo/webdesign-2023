window.onload = function(){

    // slider fade in-out
    let currentIndex = 0;
    const slider = document.querySelectorAll(".slider");

    slider.forEach(img => img.style.opacity = "0");
    slider[0].style.opacity = "1";

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slider.length;
        
        slider[currentIndex].style.opacity = "0";
        slider[nextIndex].style.opacity = "1";
        slider.forEach(el => el.style.transition = "all 1s");

        currentIndex = nextIndex;
    }, 3000);

    // menu slideDown
    const navList = document.querySelectorAll(".nav > ul > li");

    navList.forEach(function(navItem){
        navItem.addEventListener("mouseover", function(){
            this.querySelector(".submenu").style.height = "117px";
        });
        navItem.addEventListener("mouseout", function(){
            this.querySelector(".submenu").style.height = "0px";
        });
    });

    // tabmenu switch
    const tabBtn = document.querySelectorAll(".info-menu > ul > li");
    const tabCont = document.querySelectorAll(".info-cont > div");

    tabCont.forEach(el => el.style.display = "none");
    tabCont[0].style.display = "block";

    tabBtn.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabBtn.forEach(tab => tab.classList.remove("active"));
            tab.classList.add("active");

            tabCont.forEach(cont => cont.style.display = "none");
            tabCont[index].style.display = "block";
        });
    });

    // popup
    document.querySelector(".popup-btn").addEventListener("click", () => {
        document.querySelector(".popup-view").style.display = "block";
    })
    document.querySelector(".popup-close").addEventListener("click", () => {
        document.querySelector(".popup-view").style.display = "none";
    })
}