import axios from 'axios';

// Local WP instance
// const URL = 'http://prather.dv'

// AWS Dev Server
const URL = 'http://18.212.59.172'

export default {
    fetchPosts: () => {
        return axios.get(`${URL}/wp-json/wp/v2/posts?_embed`)
    },
    fetchPages: () => {
        return axios.get(`${URL}/wp-json/wp/v2/pages?_embed`)
    },
    fetchPage: (page) => {
        return axios.get(`${URL}/wp-json/wp/v2/pages?page=${page}`)
    },
    fetchPost: (id) => {
        return axios.get(`${URL}/wp-json/wp/v2/posts?id=${id}`)
    },
    getContentForPage: (pageSlug) => {
        return axios.get(`${URL}/wp-json/wp/v2/pages?slug=${pageSlug}`)
            .then(resp => {
                const page = resp.data[0]
                const pageContent = page.content.rendered
                const acf = page.acf
                const acfContent = { ...acf, type: acf['acf_fc_layout'] }

                return { pageContent, acfContent }
            })
    }
}
