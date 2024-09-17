let DocumentTitle = document.title;
const navbar = document.getElementById("navbar");
let homeText = document.getElementById('home-text');
let aboutText = document.getElementById('about-text');
let serviceText = document.getElementById('service-text');
let contactText = document.getElementById('contact-text');

document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;


    console.log(windowHeight);
    if (scrollY == 0) {
        navbar.style.transform = 'translateY(-' + (windowHeight * 0.042) + 'px)';
        console.log(windowHeight * 0.042)

    } else if (scrollY < (windowHeight * 0.865)) {
        navbar.style.transform = 'translateY(-' + (scrollY + windowHeight * 0.042) + 'px)';
        console.log(scrollY + windowHeight * 0.042)
    } else {
        navbar.style.transform = 'translatey(-' + (windowHeight * 0.865) + 'px)';
        console.log(windowHeight * 0.865)
    }
});

if (DocumentTitle == 'Home Page - website') {
    homeText.classList.add('color-white');
}
else if (DocumentTitle == 'About Us - website') {
    aboutText.classList.add('color-white');
}
else if (DocumentTitle == 'Service Page - website') {
    serviceText.classList.add('color-white');
}
else if (DocumentTitle == 'Contact Page - website') {
    contactText.classList.add('color-white');
};