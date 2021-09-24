import React from 'react';
import Quiz from './components/Quiz';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
     <div className = "App">
       <h1 className="display-1">React QuizApp</h1>
       <Quiz/>
     </div>
    )
  }
}


export default App;
