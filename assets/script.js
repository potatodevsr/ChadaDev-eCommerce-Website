'use strict';

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

// Display current date
const currentDate = new Date();

document.getElementById('currentDate1').textContent = currentDate.toLocaleDateString();
document.getElementById('currentDate2').textContent = currentDate.toLocaleDateString();
document.getElementById('currentDate3').textContent = currentDate.toLocaleDateString();

currentDateElement.textContent = `${day}/${month}/${year}`;

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}


const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    window.scrollY >= 200 ? header.classList.add("active")
        : header.classList.remove("active");
})

