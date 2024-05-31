const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentCircleIndex = 0;

// Initially only the first circle should have the active class
circles[currentCircleIndex].classList.add('active');

// Add click event listener to next button
nextButton.addEventListener('click', () => {
    if (currentCircleIndex < circles.length - 1) {
        currentCircleIndex++;
        circles[currentCircleIndex].classList.add('active');
        circles[currentCircleIndex - 1].classList.remove('active');
        prevButton.disabled = false;
        if (currentCircleIndex === circles.length - 1) {
            nextButton.disabled = true;
        }
    }
});

// Add click event listener to previous button
prevButton.addEventListener('click', () => {
    if (currentCircleIndex >= 1) {
        currentCircleIndex--;
        circles[currentCircleIndex].classList.add('active');
        circles[currentCircleIndex + 1].classList.remove('active');
        nextButton.disabled = false;
        if (currentCircleIndex === 0) {
            prevButton.disabled = true;
        }
    }
});
