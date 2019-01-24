import axios from 'axios';

const URL = 'http://s29554.p832.sites.pressdns.com'

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
                const acf = page.acf.block
                const acfContent = acf.map(content => ({
                    ...content,
                    type: content['acf_fc_layout']
                }))

                return { pageContent, acfContent }
            })
    }
}
