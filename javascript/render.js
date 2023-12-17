import { fiveStarsRating } from "./renderFav.js"
import { getSearchParam } from "./utility.js"
let topicsGrid = document.getElementById("cards-grid")
let searchResult = document.getElementById("search-result")
let cardElement
let cardString


export function renderTopics(topics) {
  topicsGrid.classList.remove("flex")
  topicsGrid.innerHTML = "";
  searchResult.innerText = `"${topics.length}" Web Topics Found`
  console.log(topics.length)
  topics.forEach((topic) => {

    cardElement = document.createElement("a");
    cardElement.classList.add('card')
    cardString = `<img class="card-img" src="./Logos/${topic.image}" />
        <div class="card-info">
            <span class="card-type trim">${topic.category}</span>
            <h4 class="card-title">${topic.topic}</h4>`
      + fiveStarsRating(topic.rating) +
      `<span class="card-author card-author-color">Author: ${topic.name}</span>
        </div>`;
    cardElement.innerHTML = cardString;
    cardElement.addEventListener("click", () => {
      window.location.href = getSearchParam('details.html?', 'id', topic.id)
    })
    topicsGrid.append(cardElement);

  });
}