import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
//redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Header from './routes/Header';
import Loading from './components/Loading';
import Authentication from './components/Authentication';
import NoteDetail from './components/NoteDetail';
import NoteEdit from './components/NoteEdit';
import Faq from './components/Faq';

//create redux store -> reducers -> 'actions -> actionType' | applyMiddleware()
//in order for actions to be async we need applyMiddleware

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//provide the store to react

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <Loading>
              <div>
                  <Switch>
                      <Route path="/login" component={Login} exact={true} />
                      <Redirect from="/logout" to="/login" />
                      <Authentication>
                          <Header />
                          <Route path="/:id/edit" component={NoteEdit} exact={true} />
                          <Route path="/:id" component={NoteDetail} exact={true} />
                          <Route path="/" component={App} exact={true} />
                          <Route path="/faq" component={Faq} exact={true} />
                      </Authentication>
                  </Switch>
              </div>
          </Loading>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
