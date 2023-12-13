let topicsGrid = document.getElementById("cards-grid")
let cardElement
let cardString
let detailsContainer = document.getElementById("details-container")
let mainContent = document.getElementById("main-content")
export function renderTopics(topics) {
  topicsGrid.innerHTML = "";
  topics.forEach((topic) => {

    cardElement = document.createElement("a");
    cardElement.classList.add('card')
    cardString = `<img class="card-img" src="./Logos/${topic.image}" />
        <div class="card-info">
            <span class="card-type trim">${topic.category}</span>
            <h4 class="card-title">${topic.topic}</h4>`
      + fiveStarsRating(topic.rating)
        `<span class="card-author card-author-color">Author: ${topic.name}</span>
        </div>`;
    cardElement.innerHTML = cardString;
    console.log(topic.id)
    cardElement.addEventListener("click", () => {
      window.location.href = 'details.html?id=' + topic.id;
    })
    topicsGrid.append(cardElement);
  });
}

export const renderDetails = (topic) => {
  detailsContainer.innerHTML = ""
  let detailsElm = document.createElement("div")
  detailsElm.classList.add("details")
  detailsElm.innerHTML = `<div class="details-type web-">${topic.category}</div>
    <div class="title">${topic.topic}</div>` + fiveStarsRating(topic.rating) + `
    <p class="description">${topic.description}</p>

`
  let favCardElm = document.createElement("div")
  favCardElm.classList.add("fav-card")
  favCardElm.innerHTML = `
  <img class="card-img" src="./Logos/${topic.image}" />
  <div class=card-text>
      <span><b>${topic.topic}</b> by <a href="#" class="author">${topic.name}</a></span>
      <div class="fav-box">
          <span class="fav-box-top">Intrested about this topic?</span>
          <button class="add-fav-button ">
              Add to Favourites
              <ion-icon class="button-heart-icon" name="heart-outline"></ion-icon>
          </button>
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

export const fiveStarsRating = (value) => {
  let rate = `<div class="rating-stars">`
  let outlined = `<div class="rating-stars-outlined">`
  const percentage = Math.round((value / 5) * 100);
  for (let i = 0; i < 5; i++) {
    let star = `<svg class ="star" xmlns="http://www.w3.org/2000/svg" class="star ionicon" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"/></svg>`
    let starOutlined = `<svg xmlns="http://www.w3.org/2000/svg" class="star-outlined" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg>`
    rate += `<span class="two-stars">` + "\n" + star + starOutlined + `</span>`
  }
  rate += "\n" + `<div class='overlay' style=" width: ${100 - percentage}%"/>` + "\n" + `</div> </div>`
  return rate
}

export function renderFavourites() {
  
}