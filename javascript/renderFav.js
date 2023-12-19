import { getSearchParam } from "./utility.js";
import { fiveStarsRating } from "./stars.js";

let favFlex = document.getElementById("fav-flex")

export function renderFavourites(favourites) {
    favFlex.innerHTML = ""
    favourites.forEach((fav) => {
        let favCard = document.createElement("a")
        favCard.classList.add("fav-card")
        favCard.innerHTML = `   
        <img class="fav-card-img card-img" src="./Logos/${fav.image}" />
        <div class="fav-card-info">
            <h4 class="fav-card-title trim">${fav.topic}</h4>`
            + fiveStarsRating(fav.rating) +
            `
            </div>
`
        favFlex.append(favCard)
        favCard.addEventListener('click', () => {
            window.location.href = getSearchParam('details.html?', 'id', fav.id)
        })
    })
}