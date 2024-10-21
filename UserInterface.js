export function displayCatImage(url) {
    const imgElement = document.getElementById('cat-image');
    imgElement.src = url;
    imgElement.alt = 'A cute cat';
}

export function setupButtonClick(callback) {
    const button = document.getElementById('fetch-cat-button');
    button.addEventListener('click', callback);
}