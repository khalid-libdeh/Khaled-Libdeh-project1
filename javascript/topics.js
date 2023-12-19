//Get topics data from backend
export async function loadTopics(topicName) {
    try {
        const url = new URL('https://tap-web-1.herokuapp.com/topics/list');
        if (topicName) {
            url.searchParams.append('phrase', topicName);
        }
        const response = await fetch(url.toString());
        if (response.status === 200) {
            let data = await response.json();
            return data;
            // handle data
        } else {
            console.log(response.status);
        }
    } catch (err) {
        console.log(err);
    }

}

export async function loadDetails(id) {
    try {
        const response = await fetch('https://tap-web-1.herokuapp.com/topics/details/' + id);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error; // Re-throw the error to handle it elsewhere if needed
    }
}

