import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import App from './components/App';
import reducers from './reducers';
import DevTools from './containers/DevTools';
import PostList from './containers/PostList';
import PostDetail from './containers/PostDetail';
import CreatePost from './containers/CreatePost';
import login from './containers/Login';
import Frame from './containers/Frame';


const middleware = [
  ReduxThunk,
  promiseMiddleware,
  routerMiddleware(browserHistory),
];
const finalCreateStore = compose(
  applyMiddleware(...middleware),
  DevTools.instrument())(createStore);

const store = finalCreateStore(reducers);
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="" component={Frame}>
          <IndexRoute component={PostList}/>
          <Route path="create" component={CreatePost}/>
          <Route path="login" component={login}/>
          <Route path="article/:id" component={PostDetail}/>
        </Route>
      </Route>

    </Router>
  </Provider>
  , document.querySelector('.root'));