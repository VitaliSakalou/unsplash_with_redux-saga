import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import ImagesComponent from "./components/ImageComponent/ImagesComponent";
import { rootReducer } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./sagas/index";
import Header from "./components/HeaderComponent/HeaderComponent";

import "./App.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Header title={"Unsplash with redux-saga"} />
          </header>
          <main>
            <ImagesComponent />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
