import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Main from './components/main/main';
import Menu from './components/menu/menu';
import PostForm from './components/main/postForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <nav>
              <h2 id='logo'>부경위키</h2>
              <ul className='navigation'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
              </ul>
            </nav>
          </header>
          <PostForm />
          <div id='board'>
            <Main />
            <Menu />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
