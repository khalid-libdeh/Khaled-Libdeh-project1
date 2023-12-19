let sortMenu = document.getElementById('sort-menu');

export async function onSortChange(cb) {
    sortMenu.addEventListener('change', () => {
        cb(sortMenu.value)
    })
}

export function sortTopics(arr, sortBy) {
    if (sortBy === "Default") {
        return arr
    }
    else if (sortBy === "Topic Title") {
        return sortArrayByString(arr, "topic")
    } else {
        return sortArrayByString(arr, "name")
    }
}

function sortArrayByString(arr, attribute) {
    let copy = arr.slice()
    copy.sort((a, b) => {
        const nameA = a[attribute].toUpperCase(); // Convert names to uppercase for case-insensitive sorting
        const nameB = b[attribute].toUpperCase();

        if (nameA < nameB) {
            return -1; // Name A comes before Name B
        } else if (nameA > nameB) {
            return 1; // Name B comes before Name A
        } else {
            return 0; // Names are equal
        }
    });
    return copy
}


