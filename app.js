import { fetchCatImage } from './api.js';
import { displayCatImage, setupButtonClick } from './UserInterface.js';

async function getCatImage() {
    try {
        const catImageUrl = await fetchCatImage();
        displayCatImage(catImageUrl);
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

// Set up the button to fetch a cat image
setupButtonClick(getCatImage);