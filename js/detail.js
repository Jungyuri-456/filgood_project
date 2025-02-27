window.onload = function () {
document.addEventListener("DOMContentLoaded", function () {
    const minusBtn = document.querySelector(".minus");
    const plusBtn = document.querySelector(".plus");
    const countSpan = document.querySelector(".count");
    const countProduct = document.querySelector(".countProduct");
    const bundleSelect = document.getElementById("bundle");
    const cartBtn = document.querySelector(".cart");
    const purchaseBtn = document.querySelector(".purchase");

    let count = 0; // 초기 수량
    const pricePerUnit = 18000; // 개당 가격
    let bundlePrice = 0; // 추가되는 번들 가격

    // 가격 업데이트 함수
    function updatePrice() {
        const totalPrice = count * pricePerUnit + bundlePrice;
        countProduct.textContent = totalPrice.toLocaleString() + "원";
    }

    minusBtn.addEventListener("click", function () {
        if (count > 0) {
            count--;
            countSpan.textContent = count;
            updatePrice();
        }
    });

    plusBtn.addEventListener("click", function () {
        count++;
        countSpan.textContent = count;
        updatePrice();
    });

    bundleSelect.addEventListener("change", function () {
    if (bundleSelect.value === "bundleCheck") {
        bundlePrice = 30300;
        count++; // 번들 선택 시 개수 증가
    } else if (bundleSelect.value === "bundleNone") {
        bundlePrice = 0;
    }
    countSpan.textContent = count; // 화면에 개수 업데이트
    updatePrice();
});

    // 장바구니 또는 구매하기 버튼 클릭 시 값 초기화
    function resetValues() {
        count = 1;
        bundlePrice = 0;
        countSpan.textContent = count;
        bundleSelect.value = "bundleNone";
        updatePrice();
    }

    cartBtn.addEventListener("click", function (event) {
        event.preventDefault();
        resetValues();
        alert("🛒 상품이 장바구니에 담겼습니다!");
    });


    purchaseBtn.addEventListener("click", function (event) {
        event.preventDefault();
        resetValues();
    });

    updatePrice(); // 초기 가격 설정
});


// 이미지 선택시 선택한 이미지로
document.addEventListener("DOMContentLoaded", function () {
    const characterSelect = document.getElementById("character_P");
    const productImage = document.querySelector(".productImg img");

    const imageMap = {
        filgu: "images/goods/blue_cup_bg.png",
        tengu: "images/goods/green_cup_bg.png",
        chilgu: "images/goods/red_cup_bg.png"
    };

    characterSelect.addEventListener("change", function () {
        const selectedValue = characterSelect.value;

        if (imageMap[selectedValue]) {
            productImage.src = imageMap[selectedValue];
        }
    });
});
}