import React, {Component} from 'react';
import TodoAppContainer from './component/TodoBootstrapApp/TodoAppContainer';
import SimpleTodoContainer from './component/SimpleTodoApp/SimpleTodoContainer';
import TodoAnimationContainer from './component/TodoAnimationApp/TodoAnimationContainer';
import Home from './component/common/Home';
import Navbar from './component/common/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './component/common/Login';
import Register from './component/common/Register';
import Logout from './component/common/Logout';
import SimpleMath from './ReduxExample/Component/SimpleMath';
import Test from './ReduxExample/Component/Test';
import ReduxRegister from './ReduxExample/ReduxRegister';
import ReduxLogin from './ReduxExample/ReduxLogin';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/simpletodo" component={SimpleTodoContainer} />
            <Route path="/bootstrapodo" component={TodoAppContainer} />
            <Route path="/animationtodo" component={TodoAnimationContainer} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route path="/counter" component={SimpleMath} />
            <Route path="/test" component={Test} />
            <Route path="/reduxregister" component={ReduxRegister} />
            <Route path="/reduxlogin" component={ReduxLogin} />
          </Switch>
      </Router>
    )
  }
}



export default App;
