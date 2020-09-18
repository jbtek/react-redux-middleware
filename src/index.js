import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/reducers/store";
import App from "./App";
import axios from 'axios';
const rootElement = document.getElementById("root");
/**
 * set the axios interceptor, we can pass the config object.
 */
axios.interceptors.request.use(request => {
  console.log('request::', request);
  return request;
}, (error) => {
  console.log('Something went wrong..');
  Promise.reject(error);
})

/**
 * StrictMode does not render any visible UI. Like Fragment
 * It activates additional checks and warnings for its descendants.
 * You can enable strict mode for any part of your application. it will be apply 
 * on any component or any part of the application. Not only root.
 * StrictMode currently helps with:
    Identifying components with unsafe lifecycles
    Warning about legacy string ref API usage
    Warning about deprecated findDOMNode usage
    Detecting unexpected side effects
    Detecting legacy context API
 */
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);
