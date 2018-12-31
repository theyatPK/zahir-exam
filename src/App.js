import React from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import Router from './router/Routes'
import Reducer from './reducer'

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(Reducer, {}, applyMiddleware(thunk))}>
        <Router/>
      </Provider>
    )
  }
}
export default App