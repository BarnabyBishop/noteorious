import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import thunkMiddleware from 'redux-thunk';

const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunkMiddleware),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}

// import { compose, createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers';
// import DevTools from '../containers/DevTools';
// import { persistState } from 'redux-devtools';
// import thunkMiddleware from 'redux-thunk';
//
// export default function configureStore(initialState) {
//     const finalCreateStore = compose(
//         // Enables middleware:
//         applyMiddleware(thunkMiddleware),
//         // Provides support for DevTools:
//         DevTools.instrument(),
//         // Lets you write ?debug_session=<name> in address bar to persist debug sessions
//         persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//     )(createStore);
//
//     const store = finalCreateStore(rootReducer, initialState);
//
//     if (module.hot) {
//         // Enable Webpack hot module replacement for reducers
//         module.hot.accept('../reducers', () => {
//             const nextReducer = require('../reducers');
//             store.replaceReducer(nextReducer);
//         });
//     }
//
//   return store;
// }
