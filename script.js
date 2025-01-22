let currentPage = 0;

function goToPage(pageIndex) {
    const slider = document.querySelector('.slider-container');
    currentPage = pageIndex;

    // 슬라이드 이동 (수평 방향)
    slider.style.transform = `translateY(-${pageIndex * 100}vh)`;

    // Back 버튼 표시/숨김 관리
    const backButton = document.querySelector('.back-btn');
    if (pageIndex === 0) {
        backButton.style.display = 'none'; // 첫 번째 페이지에서는 숨김
    } else {
        backButton.style.display = 'block'; // 다른 페이지에서는 표시
    }
}
