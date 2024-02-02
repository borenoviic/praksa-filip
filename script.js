const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDown = document.querySelector('.drop_menu')

window.addEventListener("load", () => {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "flex";
        },
        2000
    )
})

document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('.popup').style.display = "none";
});

toggleBtn.onclick = function () {
    dropDown.classList.toggle('open');

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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});