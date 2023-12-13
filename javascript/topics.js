//Get topics data from backend
export async function loadTopics(topicName) {
    try {
        let response;
        if (!topicName) {
            response = await fetch('https://tap-web-1.herokuapp.com/topics/list');
        }
        else {
            response = await fetch('https://tap-web-1.herokuapp.com/topics/list?phrase=' + topicName);
        }

        console.log(response.status); // 200
        console.log(response.statusText); // OK
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
        console.error('Error loading details:', error);
        throw error; // Re-throw the error to handle it elsewhere if needed
    }
}

