export function appendToArray(el, array) {
    let copy = array.slice()
    if (!arrayHasElement(el, array)) {
        copy.push(el)
    }
    return copy
}

export function removeFromArray(el, array) {
    console.log("removeddd")
    console.log(array)
    return (array.filter(obj => obj.id !== el.id));
}

export function arrayHasElement(el, array) {

    let copy = array.slice()
    let doesExist = copy.some(obj => obj.id === el.id);

    if (doesExist ) 
        return true

    return false
}