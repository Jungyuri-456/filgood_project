window.addEventListener("load", function () {
    const hamburger = document.querySelector(".hamburger")
    const gnb = document.querySelector(".gnb")
    const close = document.querySelector(".gnbClose")
    hamburger.addEventListener("click", function(){
        gnb.style.display = "block"
    })
    close.addEventListener("click" , function(){
        gnb.style.display = "none"
    })
})