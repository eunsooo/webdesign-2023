window.onload = function(){
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);

    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        currentIndex ++;

        sliderWrap.style.marginTop = -currentIndex * 300 + "px";
        sliderWrap.style.transition = "all 0.6s"

        if(currentIndex == 3){
            setTimeout(() => {
                sliderWrap.style.marginTop = "0px";
                sliderWrap.style.transition = "0s"
            }, 700);
            currentIndex = 0;
        }
    }, 3000);
}