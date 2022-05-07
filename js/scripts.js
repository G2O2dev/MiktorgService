$('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
        event.preventDefault();
        $("html, body").stop().animate({
            scrollTop: target.offset().top
        }, 1200); // Время прокрутки
    }
});

function PopUpShow() {
    document.getElementById('popup').style.display = "block";
}

function PopUpHide() {
    document.getElementById('popup').style.display = "none";
}