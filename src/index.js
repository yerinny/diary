import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
//redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import Header from './routes/Header';

//create redux store -> reducers -> 'actions -> actionType' | applyMiddleware()
//in order for actions to be async we need applyMiddleware

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//provide the store to react

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
           <Route path="/" component={App} exact={true} />
           <Route path="/login" component={Login} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
