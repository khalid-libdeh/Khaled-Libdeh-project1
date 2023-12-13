import { getData } from "./passData.js";
import { renderDetails } from "./render.js";
import { loadDetails } from "./topics.js";
import { onFavClick, toggleFav } from "./favourites.js";
let id = getData("id")
let topic = {}
topic = await loadDetails(id)
renderDetails(topic)
onFavClick(() => {
    toggleFav()
})