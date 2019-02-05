import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/main/main';
import PostForm from './components/main/postForm';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <nav>
              <h2 id='logo'>PKNU-WIKI</h2>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
              </ul>
            </nav>
          </header>
          <PostForm />
          <Main />
        </div>
    );
  }
}

export default App;
