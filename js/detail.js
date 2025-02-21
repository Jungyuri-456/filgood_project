// 옵션 +,-버튼 클릭
function changeQuantity(amount) {
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    let newValue = currentValue + amount;

    if (newValue < 1) newValue = 1; // 최소 수량 제한
    quantityInput.value = newValue;
}

// 텍스트상자 옵션 선택
function toggleDropdown(boxId, dropdownId, arrowId) {
    let box = document.getElementById(boxId);
    let dropdown = document.getElementById(dropdownId);
    let arrow = document.getElementById(arrowId);

    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        arrow.innerText = '∨';
        box.classList.remove('active');
    } else {
        closeAllDropdowns();
        dropdown.style.display = 'block';
        arrow.innerText = 'ᴧ';
        box.classList.add('active');
    }
}

function selectOption(textId, value, arrowId, boxId) {
    document.getElementById(textId).innerText = value;
    document.getElementById(arrowId).innerText = '∨';
    document.getElementById(boxId).classList.remove('active');
    document.getElementById(boxId).querySelector('.dropdown').style.display = 'none';
}

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.style.display = 'none';
    });
    document.querySelectorAll('.option-box').forEach(box => {
        box.classList.remove('active');
    });
    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.innerText = '∨';
    });
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('.option-box')) {
        closeAllDropdowns();
    }
});