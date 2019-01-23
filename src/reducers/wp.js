import { actions as wpActions } from '../actions/wp'

const INITIAL_STATE = {
    isFetchingPosts: false,
    posts: [],
    isFetchingPages: false,
    pages: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case wpActions.FETCHING_POSTS:
            return { ...state, isFetchingPosts: true }
        case wpActions.POSTS_FETCHED:
            return { ...state, posts: action.posts, isFetchingPosts: false }
        case wpActions.FETCHING_PAGES:
            return { ...state, isFetchingPages: true }
        case wpActions.PAGES_FETCHED:
            return { ...state, pages: action.pages, isFetchingPages: false }
        default:
            return state
    }
}