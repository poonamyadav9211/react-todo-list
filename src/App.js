import React, {Component} from 'react';
//import TodoAppContainer from './component/TodoBootstrapApp/TodoAppContainer';
import SimpleTodoContainer from './component/SimpleTodoApp/SimpleTodoContainer';
//import TodoAnimationContainer from './component/TodoAnimationApp/TodoAnimationContainer';

class App extends Component {
  render() {
    return (
      <div>
        {/* <TodoAnimationContainer /> */}
        {/* <TodoAppContainer /> */}
        <SimpleTodoContainer />
      </div>
    )
  }
}



export default App;
