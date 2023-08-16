// $(function(){
//     let currentIndex = 0;

//     $(".sliderWrap").append($(".slider").first().clone(true));

//     setInterval(() => {
//         currentIndex ++;
//         $(".sliderWrap").animate({marginLeft: -currentIndex * 100 + "%"}, 600);

//         if(currentIndex == 3){ //마지막 이미지일때
//             setTimeout(() => {
//                 $(".sliderWrap").animate({marginLeft: 0}, 0)
//                 currentIndex = 0;
//             }, 700);
//         }
//     }, 3000);
// });

window.onload = function(){
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true); //첫번째이미지 저장
    
    sliderWrap.appendChild(sliderClone); //복사한 이미지를 마지막에 추가
    
    setInterval(() => {
        currentIndex ++;

        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";
        sliderWrap.style.transition = "all 0.6s";

        if(currentIndex == 3){
            setTimeout(() => {
                sliderWrap.style.transition = "0s";
                sliderWrap.style.marginLeft = "0";
                currentIndex = 0;
            },700);
        }
    }, 3000);
}