// $(function(){
//     let currentIndex = 0;

//     $(".sliderWrap").append($(".slider").first().clone(true));

//     setInterval(() => {
//         currentIndex ++;

//         $(".sliderWrap").animate({marginLeft: -100 * currentIndex + "%"}, 600);

//         if(currentIndex == 3){
//             setTimeout(() => {
//                 $(".sliderWrap").animate({marginLeft: 0}, 0);
//             }, 700);
//             currentIndex = 0;
//         }
//     }, 3000);
// });

window.onload = function(){
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);

    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        currentIndex ++;

        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";
        sliderWrap.style.transition = "all 0.7s"

        if(currentIndex == 3){
            setTimeout(() => {
                sliderWrap.style.marginLeft = "0";
                sliderWrap.style.transition = "0s";
                currentIndex = 0;
            }, 700);
        }
    }, 3000);
}