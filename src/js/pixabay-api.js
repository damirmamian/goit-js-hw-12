import axios from 'axios';

export async function getImagesByQuery(query, page) {
    const baseURL = "https://pixabay.com/api/";
    console.log(baseURL);
    const response = await axios.get(baseURL, {
        params: {
            key: "53364117-23ce706026567dc1d7b8b2eb2",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 15,
            page: page
        },
    });
    return response.data;
}