import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <BrowserRouter>
            <div>
              <Header />
              <Fragment>
                <Route path="/" exact component={Home}></Route>
                <Route path="/detail/:id" exact component={Detail}></Route>
                <Route path="/login" exact component={Login}></Route>
              </Fragment>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>

    )
  }
}
export default App;
