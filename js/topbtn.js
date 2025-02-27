
// 비주얼 버튼
window.onload = function () {
    //  gotop버튼
    const topBtn = document.querySelector(".top-btn")
    topBtn.addEventListener("click", function(event){
        event.preventDefault()
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    })
    }