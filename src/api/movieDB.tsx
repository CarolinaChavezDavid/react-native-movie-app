import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '93e00339f0bb515443c213c47d41f8ef',
        language: 'en-US'
    }
})

export default movieDB;