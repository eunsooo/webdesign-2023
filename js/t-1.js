// $(function(){
//     let tabBtn = $(".tab-btn > ul > li");
//     let tabCont = $(".tab-cont > div");

//     tabCont.hide().eq(0).show(); //첫번째 콘텐츠만 보이게 설정

//     tabBtn.click(function(){
//         const index = $(this).index(); //클릭한 번호를 저장

//         $(this).addClass("active").siblings().removeClass("active");
//         tabCont.eq(index).show().siblings().hide();
//     });
// });

window.onload = function(){
    const tabBtn = document.querySelectorAll(".tab-btn > ul > li");
    const tabCont = document.querySelectorAll(".tab-cont > div");

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
}