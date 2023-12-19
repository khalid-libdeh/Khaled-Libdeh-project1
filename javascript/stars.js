export function fiveStarsRating(value) {
    let intValue = Math.floor(value)
    let remStars = 5 - intValue
    let fraction = value - intValue
    let container = document.createElement("div")
    container.classList.add("rating-stars")
    for (let i = 0; i < intValue; i++) {
        let starPair = document.createElement("div")
        starPair.classList.add("star-pair")
        starPair.innerHTML = `
        <ion-icon name="star" class="base-icon"></ion-icon>`
        container.append(starPair)
    }

    for (let j = 0; j < remStars; j++) {
        let percantage = fraction * 100
        
        let starPair = document.createElement("div")
        starPair.classList.add("star-pair")
        let star = ""
        if (fraction !== 0)
             star = `<ion-icon name="star" class="base-icon" style="clip-path: inset(0 ${100 -percantage}% 0 0);"></ion-icon>`
        let starOutline = `<ion-icon name="star-outline" class="star-outline"></ion-icon>`
        starPair.innerHTML = star + starOutline
        container.append(starPair)
        fraction = 0
    }

    return container.outerHTML
}