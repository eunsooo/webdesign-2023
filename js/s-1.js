// $(function(){
//     let currentIndex = 0;

//     setInterval(function(){
//         let nextIndex = (currentIndex + 1) % 3; // 1 2 0 1 2 0 무한반복

//         $(".slider").eq(currentIndex).fadeOut();
//         $(".slider").eq(nextIndex).fadeIn();

//         currentIndex = nextIndex; // 2번째 인덱스값을 현재 인덱스값에 저장

//         // console.log("currentIndex: " + currentIndex);
//         // console.log("nextIndex: " + nextIndex);
//     }, 3000);
// });

window.onload = function(){
    let currentIndex = 0; 
    const slider = document.querySelectorAll(".slider");

    slider.forEach(img => img.style.opacity = "0");
    slider[0].style.opacity = "1";

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slider.length;

        slider[currentIndex].style.opacity = "0";
        slider[nextIndex].style.opacity = "1";
        slider.forEach(img => img.style.transition = "all 1s")

        currentIndex = nextIndex;
    }, 3000);
}