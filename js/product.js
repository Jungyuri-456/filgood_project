const items = document.querySelectorAll(".blueFilGood, .redFilGood, .greenFilGood");

items.forEach((item) => {
  const elements = [
    item.querySelector(".blueCan, .redCan, .greenCan"),
    item.querySelector(".title_blue"),
    ...item.querySelectorAll(".explain_s span"),
    item.querySelector(".title_s"),
    ...item.querySelectorAll(".explain_p span"),
  ].filter(Boolean); // null 값 제거

  elements.forEach((el, index) => {
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    }
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.5) { // 요소가 30% 이상 보일 때 실행
        elements.forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
        observer.disconnect(); // 애니메이션 실행 후 감지 중단
      }
    });
  }, { threshold: 0.5 }); // 요소의 30%가 보이면 실행

  observer.observe(item);
});