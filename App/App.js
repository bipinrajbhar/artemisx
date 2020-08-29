import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import StartApp from './StartApp';

const App = (props) => {
     return <StartApp />;
};

export default App;
