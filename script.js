const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDown = document.querySelector('.drop_menu')
const darkMode = document.querySelector('.dark')
const content = document.getElementsByTagName('body')[0]


window.addEventListener("load", () => {
    setTimeout(function open(event) {
        var popup = document.querySelector(".popup");
        var body = document.body;

        popup.style.display = "flex";
        body.style.overflow = "hidden";

        document.getElementById("close").addEventListener("click", function () {

            popup.style.display = "none";
            body.style.overflow = "auto";
        });
    }, 2000);
});


document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('.popup').style.display = "none";
});

toggleBtn.onclick = function () {
    dropDown.classList.toggle('open');
    toggleBtnIcon.classList.toggle('fa-times');
}

const swiper = new Swiper('.swiper1', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});

const swiperr = new Swiper('.swiper2', {
    initialSlide: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,

    }
});

darkMode.addEventListener('click', function() {
    darkMode.classList.toggle('active')
    content.classList.toggle('night')
});