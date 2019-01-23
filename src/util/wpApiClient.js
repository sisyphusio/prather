import axios from 'axios';

const URL = 'http://prather.dv';

export default {
    fetchPosts: () => {
        return axios.get(`${URL}/wp-json/wp/v2/posts?_embed`)
    },
    fetchPages: () => {
        return axios.get(`${URL}/wp-json/wp/v2/pages?_embed`)
    }
}
