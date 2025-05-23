

const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-arrow.prev');
const nextButton = document.querySelector('.slider-arrow.next');
const dots = document.querySelectorAll('.slider-dots .dot');
//const sliderWrapper = document.querySelector('.slider-wrapper'); // Thêm dòng này nếu bạn có wrapper
const images = [
    { src: 'HR_analyst.png', href: 'https://www.datacamp.com/datalab/w/ed3ce27f-0789-463b-ac60-29dc5d31332f' },
    { src: 'bike_rent.png', href: 'https://www.kaggle.com/code/cuongngo8645/cyclistic-bikes-project' },
    { src: 'grocery_store.png', href: 'https://github.com/Cuong8645/Grocery-Store-Sales/blob/main/README.md' }
    // Thêm các hình ảnh và URL khác của bạn vào đây
];
let currentIndex = 0;
let intervalId;
let slideInterval = 3000; // Thời gian chuyển đổi slide tự động

function updateSlider() {
    console.log(images[currentIndex].src);
    sliderImage.src = images[currentIndex].src;
    updateDots();
}

sliderImage.addEventListener('click', () => {
    const targetURL = images[currentIndex].href;
    if (targetURL) {
        window.open(targetURL, '_blank'); // Mở trong tab mới
    }
});

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function startAutoSlide() {
    // Thiết lập interval để tự động chuyển slide sau mỗi 3 giây (3000 milliseconds)
    intervalId = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}


function goToSlide(index) {
    currentIndex = index;
    updateSlider();
    stopAutoSlide(); // Dừng tự động chuyển khi người dùng tương tác với dot
    startAutoSlide(); // Bắt đầu lại tự động chuyển sau khi tương tác
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

// Cập nhật slideshow ban đầu
updateSlider();
startAutoSlide();
// Hiệu ứng nhấp nháy tiêu đề
const dynamicTitle = document.getElementById('dynamic-title');
const name = "Cuong Ngo"; // Thay "[Tên của bạn]" bằng tên thật của bạn
const jobTitle = "<span class='job-title'>Data Analyst</span>";
let isShowingName = true;

function toggleTitle() {
    dynamicTitle.innerHTML = isShowingName ? name : jobTitle; // Sử dụng innerHTML để chèn cả thẻ span
    isShowingName = !isShowingName;
}

// Gọi hàm toggleTitle mỗi 2 giây (2000 milliseconds)
setInterval(toggleTitle, 2000);

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
