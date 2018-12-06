import React from 'react';
import LoginContext from '../components/auth/context.js';
import Login from '../components/auth/login.js';
import Auth from '../components/auth/auth.js';

class App extends React.Component{
  render(){
    return (
    <LoginContext>
      <Login />
      <hr/>
      <Auth capability='delete'>
        <h2>Hello</h2>
      </Auth>
    </LoginContext>
    );
  }
}

export default App;