const panels = document.querySelectorAll(".panel");

function animateImage() {
    this.classList.toggle("open");
}

function animateText(e) {
    // console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener("click", animateImage));
panels.forEach(panel => panel.addEventListener("transitionend", animateText));