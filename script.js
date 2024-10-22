
"use strict"

let burgerEl=document.getElementById(`burgerBar`)
let navEl1=document.getElementById(`navBar1`)
let camexEl=document.getElementById("name1")
let navEl=document.getElementById(`aElements`)
let navEl2=document.getElementById(`aElements1`)





burgerEl.addEventListener(`click`, function(){
    
navEl.classList.toggle("activeHead")
navEl1.classList.toggle(`activeNav`)
camexEl.classList.toggle(`activCamex`)
navEl2.classList.toggle(`activeHead1`)
burgerEl.classList.toggle("activeburger");



burgerEl.classList.toggle(`activeBurger`)})
