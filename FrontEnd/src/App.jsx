import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AppGrid from './screens/home';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <AppGrid />
      </div>
    </Provider>
  )
}

export default App
