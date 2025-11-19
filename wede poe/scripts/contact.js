
//map
var map = L.map('map').setView([-25.808,  29.456], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//office location
var marker = L.marker([-25.808,  29.456]).addTo(map);
marker.bindPopup("<b>Physical Office</b>").openPopup();

//form submission
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    
    alert("Thank you for reaching out! We have received your message and will get back to you shortly.");
    document.getElementById('contactForm').reset();
});

document.getElementById('enquireForm').addEventListener('submit', function(e){
    e.preventDefault();
    
    alert("Thank you for reaching out! We have received your message and will get back to you shortly.");
    document.getElementById('enquireForm').reset();
});