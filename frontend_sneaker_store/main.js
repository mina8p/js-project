"use strict";
import "./style.css";
import "flowbite";

document.addEventListener("DOMContentLoaded", function () {
  //************************************//
  //_________Show loading page_________//
  //***********************************//
  const loading = document.getElementById("loading");

  //***************************************************************//
  //_________Hide the loading page and show the main page_________//
  //***************************************************************//
  setTimeout(function () {
    loading.style.display = "none";
    const mainContent = document.getElementById("main-content");
    mainContent.classList.remove("hidden");
  }, 3000);

  //******************************//
  //_________Show Slider_________//
  //******************************//
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", function () {
    showSlide(currentSlide + 1);

    //*******************************************************//
    //_________Show/Hide "Next" and "Start" buttons_________//
    //******************************************************//
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      startButton.style.display = "block";
    }
  });

  //*********************************//
  //_________"Start" buttons_________//
  //*********************************//
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", function () {
    window.location.href = "/login.html";
  });

  //****************************************************************//
  //_________Display the first slide and the "Next" button_________//
  //***************************************************************//
  showSlide(currentSlide);
  nextButton.style.display = "block";
});
