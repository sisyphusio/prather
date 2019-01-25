import { actions as wpActions } from '../actions/wp'
import { LOCATION_CHANGE } from 'connected-react-router'

const INITIAL_STATE = {
    currentPage: 'home',
    isFetchingPosts: false,
    posts: [],
    isFetchingPages: false,
    pages: [],
    isFetchingPageContent: false,
    content: {
        pageContent: null,
        acfContent: [],
    },
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            const currentPage = action.payload.location.pathname.split('/')[1] || 'home'
            return { ...state, currentPage }
        case wpActions.FETCHING_POSTS:
            return { ...state, isFetchingPosts: true }
        case wpActions.POSTS_FETCHED:
            return { ...state, posts: action.posts, isFetchingPosts: false }
        case wpActions.FETCHING_PAGES:
            return { ...state, isFetchingPages: true }
        case wpActions.PAGES_FETCHED:
            return { ...state, pages: action.pages, isFetchingPages: false }
        case wpActions.FETCHING_PAGE_CONTENT:
            return { ...state, isFetchingPageContent: true }
        case wpActions.PAGE_CONTENT_FETCHED:
            return {
                ...state,
                isFetchingPageContent: false,
                content: {
                    pageContent: action.pageContent,
                    acfContent: action.acfContent
                }
            }
        default:
            return state
    }
}