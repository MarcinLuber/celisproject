//nawigacja do strony
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        console.log()
    }
}
//sprawdzanie strony


// document.addEventListener("DOMContentLoaded", function () {
//     // Pobierz element, na którym chcesz zmienić kolor
//     var element = document.getElementById("PAGE1");
//     var elementz = document.getElementById("btn1");

//     // Dodaj nasłuchiwanie zdarzenia najechania myszką
//     element.addEventListener("mouseover", function () {
//         // Zmiana koloru po najechaniu myszką
//         elementz.style.backgroundColor = "red";
//     });

//     // Dodaj nasłuchiwanie zdarzenia opuszczenia myszy
//     element.addEventListener("mouseout", function () {
//         // Powrót do pierwotnego koloru po opuszczeniu myszy
//         elementz.style.backgroundColor = "grey";
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    // Funkcja do obsługi zdarzeń najechania myszką
    function handleMouseOver(event) {
        var relatedButtonId = event.target.dataset.relatedButton;
        var relatedButton = document.getElementById(relatedButtonId);
        relatedButton.style.backgroundColor = "red";
    }

    // Funkcja do obsługi zdarzeń opuszczenia myszy
    function handleMouseOut(event) {
        var relatedButtonId = event.target.dataset.relatedButton;
        var relatedButton = document.getElementById(relatedButtonId);
        relatedButton.style.backgroundColor = "grey";
    }

    // Tablice z identyfikatorami elementów
    var pageIds = ["PAGE1", "PAGE2", "PAGE3", "PAGE4", "PAGE5"];
    var btnIds = ["btn1", "btn2", "btn3", "btn4", "btn5"];

    // Iteracja po stronach
    for (var i = 0; i < pageIds.length; i++) {
        var pageElement = document.getElementById(pageIds[i]);
        var relatedButtonId = btnIds[i];
        pageElement.dataset.relatedButton = relatedButtonId;
        pageElement.addEventListener("mouseover", handleMouseOver);
        pageElement.addEventListener("mouseout", handleMouseOut);
    }
});