import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'jest';
import App from './App';
import Navbar from './components/Navbar';
import Playerlist from './components/PlayerList'
import { TestScheduler } from '@jest/core';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Navbar', ()=>{
  const navDiv = document.createElement('div');
  ReactDOM.render(<Navbar/>, navDiv);
  ReactDOM.unmountComponentAtNode(navDiv)
})

it('renders list of players', ()=>{
  const playerDiv = document.createElement('div');
  ReactDOM.render(<Playerlist/>, playerDiv);
  ReactDOM.unmountComponentAtNode(playerDiv)
})

