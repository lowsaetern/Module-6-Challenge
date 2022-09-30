// GLOBAL VARIABLES
var currentCity = document.getElementById("current-city")
var searchBtn = document.getElementById("search-btn")

var degree = "°F"
var mph = " mph"
var percent = "%"

var day = document.getElementById("day-0")
var temp = document.getElementById("temp-data")
var wind = document.getElementById("wind-data")
var humidity = document.getElementById("humidity-data")
var UV = document.getElementById("UV-data")
var currentWeather = document.querySelector('#current-weather')

var day1 = document.getElementById("day-1")
var day2 = document.getElementById("day-2")
var day3 = document.getElementById("day-3")
var day4 = document.getElementById("day-4")
var day5 = document.getElementById("day-5")

var icon1 = document.querySelector('#day-1-Icon')
var temp1 = document.getElementById("day-1-temp")
var wind1 = document.getElementById("day-1-wind")
var humidity1 = document.getElementById("day-1-humidity")

var icon2 = document.querySelector('#day-2-Icon')
var temp2 = document.getElementById("day-2-temp")
var wind2 = document.getElementById("day-2-wind")
var humidity2 = document.getElementById("day-2-humidity")

var icon3 = document.querySelector('#day-3-Icon')
var temp3 = document.getElementById("day-3-temp")
var wind3 = document.getElementById("day-3-wind")
var humidity3 = document.getElementById("day-3-humidity")

var icon4 = document.querySelector('#day-4-Icon')
var temp4 = document.getElementById("day-4-temp")
var wind4 = document.getElementById("day-4-wind")
var humidity4 = document.getElementById("day-4-humidity")

var icon5 = document.querySelector('#day-5-Icon')
var temp5 = document.getElementById("day-5-temp")
var wind5 = document.getElementById("day-5-wind")
var humidity5 = document.getElementById("day-5-humidity")

function LowUV() {
    UV.style.backgroundColor = "#00FF00"
}
function ModerateUV() {
    UV.style.backgroundColor = "#FFFF00"
}
function HighUV() {
    UV.style.backgroundColor = "#FFA500"
}
function VeryHighUV() {
    UV.style.backgroundColor = "#FF0000"
}

searchBtn.addEventListener('click', function (e) {
    e.preventDefault()
    var exclusions = "minutely, hourly, daily, alerts"
    var cityInput = document.getElementById("city-input")
    var ul = document.getElementById("ul")

    var searched = false
    var historyBtns = document.querySelectorAll(".history-btn")
    if (historyBtns) {
        for (let i = 0; i < historyBtns.length; i++) {
            if (historyBtns[i].textContent == cityInput.value) {
                searched = true
            }
        }
    }
    if (!searched) {
        var btn = document.createElement("button")
        btn.classList.add("history-btn")
        var li = document.createElement("li")
        btn.textContent = cityInput.value
        ul.appendChild(li)
        li.appendChild(btn)
        btn.addEventListener('click', function (e) {
            e.preventDefault()
            cityInput.value = this.textContent
        })
    }
    