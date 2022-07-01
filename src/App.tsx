import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import States from './components/States';
import UseEffect from './components/UseEffect';
import OnChange from './components/OnChange';
import OnSubmit from './components/OnSubmit';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Calculator from './components/Calculator';

class App extends Component{
  render(){
    return (
      <div className="App">


        {/* <Counter />   */}

        {/* <Greet name="harshavardhan" course="computer-science" /> */}

        {/* <States /> */}
        {/* <UseEffect /> */}

        {/* <OnChange /> */}

        {/* <OnSubmit /> */}

        {/* <LoginForm /> */}

        <SignupForm />

        {/* <Calculator /> */}
        
           
      </div>
    )
  }
}

export default App;

//props are immutable
