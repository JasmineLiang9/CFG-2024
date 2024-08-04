//this let's us click through the tabs on the left hand column//

function showTab(index) {

    // Retrieve tab content elements
    let tabContents =
        document.getElementsByClassName("tab-content");

    // Loop through all tab content elements
    for (let i = 0; i < tabContents.length; i++) {
    
        // Remove the "active" class from all tab content elements
        tabContents[i].classList.remove("active");
    }
    
    // Add the "active" class to the tab 
    // content element at the specified index
    tabContents[index].classList.add("active");
}

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
