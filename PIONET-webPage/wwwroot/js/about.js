let images = [
    {
        "url": "/img/page/networking.jpg"
    },
    {
        "url": "/img/page/server.jpg"
    },
    {
        "url": "/img/page/computers.jpg"
    }
];

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


let image = document.getElementById('image-pointer');
let points = document.getElementById('about-carousel-points');
let actual = 0;
carouselPosition();

image.addEventListener('click', function () {
    actual += 1;

    if (actual == images.length) {
        actual = 0;
    }

    image.innerHTML = '<img src="' + images[actual].url + '" alt="imagen logo" loading="lazy" />';

    carouselPosition();
});

function carouselPosition() {
    points.innerHTML = "";
    for (var i = 0; i < images.length; i++) {
        console.log("i:" + i);
        console.log("actual:" + actual);

        if (i == actual) {
            console.log('pasó');
            points.innerHTML += '<p class="bold">.</p>';
        } else {
            points.innerHTML += '<p>.</p>'
        }
    }
}