let favouritesBtn = document.getElementById("fav-btn")
let favContainer = document.getElementById("fav-container")

export function onFavClick(cb){
    favouritesBtn.addEventListener('click', () => {
        cb()
    })
}

export function toggleFav(){
   favContainer.classList.toggle("toggle-fav")
}