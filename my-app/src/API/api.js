import axios from "axios"; 

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}${endpoint}`);
        return response.data;
    } catch(e) {
        console.error(`Error fetching data from ${endpoint}:`, e);
    }
};

const fetchTopAlbums = async () => fetchData("/albums/top");

const fetchNewAlbums = async () => fetchData("/albums/new");

const fetchSongs = async () => fetchData("/songs");

const fetchFilters = async () => fetchData("/genres")

export {
    BACKEND_ENDPOINT,
    fetchTopAlbums,
    fetchNewAlbums,
    fetchSongs,
    fetchFilters
};
