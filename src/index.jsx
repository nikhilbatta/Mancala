import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import rootReducer from './reducers/index'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(rootReducer)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
      <HashRouter>
        <Component/>
      </HashRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}