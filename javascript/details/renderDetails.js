import { fiveStarsRating } from "../renderFav.js"
import { arrayHasElement } from "../utility.js"

let detailsContainer = document.getElementById("details-container")
let mainContent = document.getElementById("main-content")


export const renderDetails = (topic, favourites) => {
    detailsContainer.innerHTML = ""
    let detailsElm = document.createElement("div")
    detailsElm.classList.add("details")
    detailsElm.innerHTML = `<div class="details-type web-">${topic.category}</div>
      <div class="title">${topic.topic}</div>` + fiveStarsRating(topic.rating) + `
      <p class="description">${topic.description}</p>
  
  `
    let favCardElm = document.createElement("div")
    favCardElm.classList.add("fav-details-card")
    favCardElm.innerHTML = `
    <img class="card-img" src="./Logos/${topic.image}" />
    <div class=card-text>
        <span><b>${topic.topic}</b> by <a href="#" class="author">${topic.name}</a></span>
        <div class="fav-box">
            <span class="fav-box-top">Intrested about this topic?</span>`+
        renderAddRemoveBtn(topic, favourites)
        +
        `
            <span class="credit-text">Unlimited Credits</span>
        </div>
      </div>
    `
    let subListElm = document.createElement("div")
    subListElm.classList.add("sub-list-container")
    subListElm.innerHTML = `<ul class="sub-list">
    <li class="sub-list-top sub-item">
    ${topic.topic} Sub Topics
    </li>
    <li class="sub-item">
        <ion-icon class="check-icon" name="checkmark-circle-outline"></ion-icon>
        <span>${topic.topic} syntax and stucture</span>
    </li>
    <li class="sub-item">
        <ion-icon class="check-icon" name="checkmark-circle-outline"></ion-icon>
        <span>${topic.topic} elements and attributes</span>
    </li>
    <li class="sub-item">
        <ion-icon class="check-icon" name="checkmark-circle-outline"></ion-icon>
        <span>${topic.topic} forms and input elements</span>
    </li>
    <li class="sub-item">
        <ion-icon class="check-icon" name="checkmark-circle-outline"></ion-icon>
        <span>${topic.topic} tables and lists</span>
    </li>
    <li class="sub-item">
        <ion-icon class="check-icon" name="checkmark-circle-outline"></ion-icon>
        <span>${topic.topic} multimeia elements (audio, video, images)</span>
    </li>
    <li class="sub-item">
        <ion-icon class="check-icon" name="checkmark-circle-outline"></ion-icon>
        <span>${topic.topic} accessibilty and semantic markup</span>
    </li>
  
  </ul>`


    detailsContainer.append(detailsElm)
    detailsContainer.append(favCardElm)
    mainContent.append(subListElm)
}

export function renderAddRemoveBtn(el, array) {
    let text = "Add to Favourites"

    if (arrayHasElement(el, array)) {
        text = "Remove from Favourites"
    }

    return `  <button id="add-fav-btn" class="add-fav-button">
        ${text}
        <ion-icon class="button-heart-icon" name="heart-outline"></ion-icon>
    </button>
    `
}