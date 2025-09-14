// const panels = document.querySelectorAll('.panel')

// panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses() 
//         panel.classList.add('active')
//     })
// })

// function removeActiveClasses() {
//     panels.forEach((panel) => {
//         panel.classList.remove('active')
//     })
// }

document.addEventListener("DOMContentLoaded", () => {
    ["section1", "section2", "section3"].forEach(id => {
        fetch(`pages/main_page/${id}.html`)
            .then(res => res.text())
            .then(html => {
                document.getElementById(id).innerHTML = html;
                if (id === "section2") {
                    initSlides();
                }
        });            
    });
});

function initSlides() {
    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('.arrow.right');
    const prev = document.querySelector('.arrow.left');
    let current = 0;


    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }


    if (next && prev && slides.length) {
        next.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
    });

    prev.addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });
  }
}