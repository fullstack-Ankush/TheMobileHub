document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const mapButton = document.getElementById('map-button');
    
    // Function to handle the navbar background on scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Replace this with your actual Google Maps URL
    const googleMapsUrl = 'https://www.google.com/maps/place/The+Mobile+Hub/@<YOUR_LATITUDE>,<YOUR_LONGITUDE>,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd003310023b:0x5e3e2004245c71c!8m2!3d<YOUR_LATITUDE>!4d<YOUR_LONGITUDE>!16s%2Fg%2F123456789?entry=ttu';

    mapButton.addEventListener('click', () => {
        window.open(googleMapsUrl, '_blank');
    });
});
