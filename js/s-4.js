// $(function(){
//     let currentIndex = 0;

//     setInterval(() => {
//         let nextIndex = (currentIndex + 1) % 3; // 1 2 0 1 2 0 ..

//         $(".slider").eq(currentIndex).fadeOut(1200);
//         $(".slider").eq(nextIndex).fadeIn(1200);

//         currentIndex = nextIndex;
//     }, 3000);
// });

window.onload = function(){
    let currentIndex = 0;
    const slider = document.querySelectorAll(".slider");

    slider.forEach(el => el.style.opacity = "0"); //display:none이면 애니메이션 적용불가
    slider[0].style.opacity = "1";

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slider.length;

        slider[currentIndex].style.opacity = "0";
        slider[nextIndex].style.opacity = "1";
        slider.forEach(el => el.style.transition = "all 1s");

        currentIndex = nextIndex;
    }, 3000);
}