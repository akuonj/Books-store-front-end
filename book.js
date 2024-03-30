// Function to shuffle array elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to shuffle the images within the pic container
function shuffleImages() {
    const picContainer = document.querySelector('.pic');
    const images = Array.from(picContainer.children);
    const shuffledImages = shuffleArray(images);
    
    // Append shuffled images back to the container
    shuffledImages.forEach(image => {
        picContainer.appendChild(image);
    });
}

// Call the shuffleImages function to shuffle images initially
shuffleImages();

// Shuffle images every three seconds
setInterval(shuffleImages, 3000); // 3000 milliseconds = 3 seconds

