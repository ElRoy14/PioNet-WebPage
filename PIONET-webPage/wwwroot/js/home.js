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