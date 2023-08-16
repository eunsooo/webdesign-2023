// $(function(){
//     $(".popup-btn").click(function(){
//         $(".popup-view").show();
//     });
//     $(".popup-close").click(function(){
//         $(".popup-view").hide();
//     });
// });

window.onload = function(){
    document.querySelector(".popup-btn").addEventListener("click", () => {
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click", () => {
        document.querySelector(".popup-view").style.display = "none";
    });
}