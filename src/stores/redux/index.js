import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import movieReducer from './movie/reducer';
import toggleMenuReducer from './menu/reducer';

const composeEnhancers =
  // eslint-disable-next-line no-undef
  (process.env.NODE_ENV === 'development'
    ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
    : null) || compose;

/**
 * reducer
 */
export const reducer = combineReducers({
  movie: movieReducer,
  menu: toggleMenuReducer,
});

/**
 * store
 */
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

/**
 * dispatcher
 */
export * from './movie/action';
export * from './menu/action';

/**
 * selector
 */
export * from './movie/selector';
export * from './menu/selector';
