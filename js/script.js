'use strict'

const form = document.querySelector("form")
const searchIcon = document.querySelector(".search-icon")
const closeIcon = document.querySelector(".close-icon")
const input = document.getElementById("input")

searchIcon.addEventListener("click", function() {
    form.classList.add("active")
    this.style.cursor = "auto"
})

input.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        const url = `https://www.google.com/search?q=${this.value}`
        this.click()
        window.open(url, "_blank")
        this.value = ""
    }
}) 

closeIcon.addEventListener("click", function() {
    form.classList.remove("active")
    searchIcon.style.cursor = "pointer"
    input.value = ""
})