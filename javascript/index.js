import { loadTopics } from "./topics.js";
import { renderTopics } from "./render.js";
import { fiveStarsRating } from "./render.js";
import { onSearch } from "./search.js";
import { onSortChange, sortTopics } from "./sort.js";
import { onFilterChange, filterTopics } from "./filter.js";
import { onFavClick, toggleFav } from "./favourites.js";

//creating current topics array
let topics = []
let filter = "Default"
let sort = "Default"

topics = await loadTopics()
renderTopics(topics)
onSearch(async (searchValue) => {
    topics = await loadTopics(searchValue);
    renderTopics(filterTopics(sortTopics(topics, sort), filter))
});

onFilterChange((filterValue) => {
    filter = filterValue
    renderTopics(filterTopics(sortTopics(topics, sort), filter))
})

onSortChange((sortValue) => {
    sort = sortValue
    renderTopics(filterTopics(sortTopics(topics, sort), filter))
})

onFavClick(() => {
    toggleFav()
})


