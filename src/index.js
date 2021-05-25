import React from "react";
import ReactDOM from "react-dom";

import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer/reducer.js";
import {createAPI} from "./api.js";

import {Operation as DataOperation} from "./reducer/reducer.js";

import App from "./components/app/app.jsx";
import {MenuCategory} from "./const.js";

const api = createAPI();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`.site-container`)
  );
};


// store.dispatch(DataOperation.loadCategories());
store.dispatch(DataOperation.loadPoint(MenuCategory.CATERING, () => {
  store.dispatch(DataOperation.loadPoint(MenuCategory.ONLINE_COOKING, () => {
    store.dispatch(DataOperation.loadPoint(MenuCategory.NO_GLUTEN, () => {

        ReactDOM.render(
          <Provider store={store}>
            <App />
          </Provider>,
          document.querySelector(`.site-container`)
        );

      }))
    }))
    })
  );



// ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//   document.querySelector(`.site-container`)
// );
