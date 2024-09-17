let title = document.getElementById('service-title-wrapper');
let actual = 0;

DocumentTitle = document.title;
homeText = document.getElementById('home-text');
aboutText = document.getElementById('about-text');
serviceText = document.getElementById('service-text');
contactText = document.getElementById('contact-text');

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

title.addEventListener('click', function () {
    var elements = document.getElementsByClassName('block');
    actual += 1;

    let sectionToHide = document.getElementById('service-block-' + actual);

    if (actual == elements.length) {
        actual = 0;
    }

    let sectionToShow = document.getElementById('service-block-' + (actual + 1));
    let titleToShow = document.getElementById('service-block-' + (actual + 1) + '-title');
    title.innerHTML = "<h1>" + titleToShow.textContent + "</h1>";

    sectionToHide.classList.add('hidden');
    sectionToShow.classList.remove('hidden')
})