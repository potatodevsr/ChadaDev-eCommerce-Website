'use strict';

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

// Display current date
const currentDate = new Date();
const currentDateElement = document.getElementById('currentDate');

const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const year = currentDate.getFullYear();

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

