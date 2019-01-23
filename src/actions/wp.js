import wpApiClient from '../util/wpApiClient';

export const actions = {
    FETCHING_POSTS: 'FETCHING_POSTS',
    POSTS_FETCHED: 'POSTS_FETCHED',
    FETCHING_PAGES: 'FETCHING_PAGES',
    PAGES_FETCHED: 'PAGES_FETCHED',
}

export const fetchingPosts = () => ({
    type: actions.FETCHING_POSTS
})

export const postsFetched = (posts) => ({
    type: actions.POSTS_FETCHED,
    posts
})

export const fetchPosts = () => (dispatch) => {
    dispatch(fetchingPosts())
    return wpApiClient.fetchPosts()
        .then(resp => dispatch(postsFetched(resp.data)))
        .catch(err => {
            console.log('ERR: ', err)
        })
}

export const fetchingPages = () => ({
    type: actions.FETCHING_PAGES
})

export const pagesFetched = (pages) => ({
    type: actions.PAGES_FETCHED,
    pages
})

export const fetchPages = () => (dispatch) => {
    dispatch(fetchingPages())
    return wpApiClient.fetchPages()
        .then(resp => dispatch(pagesFetched(resp.data)))
        .catch(err => {
            console.log('ERR: ', err)
        })
}
