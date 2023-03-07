const intro = document.querySelector("#intro");
const p1 = document.querySelector("#page1");
const p2 = document.querySelector("#page2");
const p3 = document.querySelector("#page3");
const p4 = document.querySelector("#page4");
const mp3 = document.querySelector("#audios");

function buka() {
    p1.style.display = "block";
    p2.style.display = "block";
    p3.style.display = "block";
    p4.style.display = "block";
    mp3.play().loop;

    if (p1.style.display = "block") {
        p1.scrollIntoView()
        AOS.init("true")
    } else {

    }

}