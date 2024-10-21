const API_URL = 'https://api.thecatapi.com/v1/images/search';

export async function fetchCatImage() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch cat image');
    }
    const data = await response.json();
    return data[0].url; 
}