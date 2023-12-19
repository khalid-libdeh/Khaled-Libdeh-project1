let darkButton = document.getElementById("dark-button")

export function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

export function onDarkButtonClick(cb) {
    darkButton.addEventListener('click', () => {
        console.log("dd")
        cb()
    })
}

// Check user's preference in localStorage on page load
export function onDOMLoad() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
};
