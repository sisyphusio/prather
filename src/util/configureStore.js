import { routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()

function configureStore(history, initialState = {}) {
    const middleware = [thunkMiddleware, loggerMiddleware, routerMiddleware(history)]
    const composedEnhancers = compose(applyMiddleware(...middleware))
    return createStore(rootReducer(history), initialState, composedEnhancers)
}

export default configureStore
