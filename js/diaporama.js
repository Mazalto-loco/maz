let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    updateCounter(slideIndex + 1, slides.length);
}

document.querySelectorAll('.slide img').forEach(img => {
    img.addEventListener('click', () => {
        plusSlides(1);
    });
});

function updateCounter(current, total) {
    document.getElementById("counter").innerText = `${current}/${total}`;
}