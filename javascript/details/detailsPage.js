import { getData } from "../passData.js";
import { renderDetails } from "./renderDetails.js";
import { loadDetails } from "../topics.js";
import { onFavClick, toggleFav, onAddFavClick, toggleFavoritesBtn } from "../favourites.js";
import { renderFavourites } from "../renderFav.js";
import { getLocalStorageValue, setLocalStorageValue } from "../localStorage.js";
import { onDarkButtonClick, toggleDarkMode, onDOMLoad } from "../darkMode.js";

let id = getData("id")
let topic = {}
let favourites = getLocalStorageValue("favourites") || []
onDOMLoad()
topic = await loadDetails(id)
renderDetails(topic, favourites)
onFavClick(() => {
    toggleFav()
    renderFavourites(favourites)
})

onAddFavClick(() => {
    favourites = toggleFavoritesBtn(topic, favourites)
    setLocalStorageValue("favourites", favourites)
    renderFavourites(favourites)

})

onDarkButtonClick(() => {
    toggleDarkMode()
})

