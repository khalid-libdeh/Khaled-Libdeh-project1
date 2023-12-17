import { appendToArray, arrayHasElement, removeFromArray } from "./utility.js"

let favouritesBtn = document.getElementById("fav-btn")
let favContainer = document.getElementById("fav-container")

export function onFavClick(cb) {
    favouritesBtn.addEventListener('click', () => {
        cb()
    })
}

export function toggleFav() {
    favContainer.classList.toggle("toggle-fav")
}

export function onAddFavClick(cb) {
    document.getElementById("add-fav-btn").addEventListener('click', () => {
        cb()
    })
}

export function toggleFavoritesBtn(topic, favourites) {
    let copy = favourites.slice()
    let addToFavoritesButton = document.getElementById('add-fav-btn');

    if (arrayHasElement(topic,copy)) {
        // Remove from Favorites
        
        console.log('remove')
        addToFavoritesButton.textContent = 'Add to Favorites';
        return removeFromArray(topic, copy);
    } else {
        // Add to Favorites
        
        addToFavoritesButton.textContent = 'Remove from Favorites';
        return appendToArray(topic, copy);
    }

}