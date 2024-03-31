var typed = new Typed(".text123", {
    strings: ["Frontend Developer", "Video Creator", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "sun.png";
    } else {
        icon.src = "moon.png";
    }
}
