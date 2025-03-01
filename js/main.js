document.addEventListener("DOMContentLoaded", () => {
    const burgerIcon = document.getElementById("burgerIcon");
    const menu = document.getElementById("menu");

    burgerIcon.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
    class Marker{
        constructor(lat, lng, cityName, pageName){
            let marker = L.marker([lat, lng]).addTo(map);
            marker.bindPopup("<a href='./cities/" + pageName + ".html'>" + cityName + "</a>");
        }
    }
    class ImageMarker{
        constructor(lat, lng, imageSrc){
            let marker = L.marker([lat, lng]).addTo(map);
            marker.bindPopup("<a href='" + imageSrc + "'><img src='" + imageSrc + "' width='200' height='200' /></a>");
        }
    }
});

