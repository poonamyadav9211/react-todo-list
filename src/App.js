import React, {Component} from 'react';
import TodoAppContainer from './component/TodoBootstrapApp/TodoAppContainer';
import SimpleTodoContainer from './component/SimpleTodoApp/SimpleTodoContainer';
import TodoAnimationContainer from './component/TodoAnimationApp/TodoAnimationContainer';
import Home from './component/common/Home';
import Navbar from './component/common/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
          </Switch>
      </Router>
    )
  }
}



export default App;
