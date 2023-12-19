let filterMenu = document.getElementById('filter-menu');

export async function onFilterChange(cb) {
    filterMenu.addEventListener('change', () => {
        cb(filterMenu.value)
    })
}

export function filterTopics(arr, filterBy) {
    if (filterBy === "Default") {
        return arr
    }
    else {
        let filteredArray = arr.filter((el) => {
            return (el.category === filterBy)
        });
        return filteredArray;
    }
}

