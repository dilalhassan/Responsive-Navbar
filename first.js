var menu = document.querySelector("h2");
var page = document.querySelector("#page");
var h1 = document.querySelector("h1");
var flag = 0;
menu.addEventListener("click", function() {
    if(flag == 0) {
        page.style.top = "10%";
        flag = 1;
        menu.innerHTML = `<i class="ri-eye-off-line"></i>`;
        page.style.transition = "0.9s";
        h1.style.opacity = `0`
    } else {
        page.style.top = "-120%";
        flag = 0;
        menu.innerHTML = `<i class="ri-eye-fill"></i>`;
        page.style.transition = "0.9s";
        h1.style.opacity = `1`
    }
})