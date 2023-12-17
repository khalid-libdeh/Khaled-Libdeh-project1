let favFlex = document.getElementById("fav-flex")

export function fiveStarsRating(value) {
    let rate = `<div class="rating-stars">`
    let outlined = `<div class="rating-stars-outlined">`
    const percentage = Math.round((value / 5) * 100);
    for (let i = 0; i < 5; i++) {
        let star = `<svg xmlns="http://www.w3.org/2000/svg" class="star ionicon" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"/></svg>`
        let starOutlined = `<svg xmlns="http://www.w3.org/2000/svg" class="star-outlined" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg>`
        rate += `<span class="two-stars">` + "\n" + star + starOutlined + `</span>`
    }
    rate += "\n" + `<div class='overlay' style=" width: ${100 - percentage}%"/>` + "\n" + `</div> </div>`
    return rate
}

export function renderFavourites(favourites) {
    favFlex.innerHTML = ""
    favourites.forEach((fav) => {
        let favCard = document.createElement("a")
        favCard.classList.add("fav-card")
        favCard.innerHTML = `   
        <img class="fav-card-img card-img" src="./Logos/${fav.image}" />
        <div class="fav-card-info">
            <h4 class="fav-card-title">${fav.topic}</h4>`
            + fiveStarsRating(fav.rating) +
            `
            </div>
`
        favFlex.append(favCard)
    })
}