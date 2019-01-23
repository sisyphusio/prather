import wpApiClient from '../util/wpApiClient';

export const actions = {
    FETCHING_POSTS: 'FETCHING_POSTS',
    POSTS_FETCHED: 'POSTS_FETCHED',
    FETCHING_PAGES: 'FETCHING_PAGES',
    PAGES_FETCHED: 'PAGES_FETCHED',
    FETCHING_PAGE_CONTENT: 'FETCHING_PAGE_CONTENT',
    PAGE_CONTENT_FETCHED: 'PAGE_CONTENT_FETCHED'
}

const fetchingPosts = () => ({
    type: actions.FETCHING_POSTS
})

const postsFetched = (posts) => ({
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

const fetchingPages = () => ({
    type: actions.FETCHING_PAGES
})

const pagesFetched = (pages) => ({
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

const fetchingPageContent = () => ({
    type: actions.FETCHING_PAGE_CONTENT
})

const pageContentFetched = (pageContent, acfContent) => ({
    type: actions.PAGE_CONTENT_FETCHED,
    pageContent,
    acfContent
})

export const fetchPageContent = (pageSlug) => (dispatch) => {
    dispatch(fetchingPageContent())
    return wpApiClient.getContentForPage(pageSlug)
        .then(({ pageContent, acfContent }) => dispatch(pageContentFetched(pageContent, acfContent)))
        .catch(err => {
            console.log('ERR: ', err)
        })
}
