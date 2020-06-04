import React from 'react';
import "../styles/styles.scss";
import AppRourtes from './AppRoutes';
import { Provider } from 'react-redux'
import store from "../redux/store"
import { getBooksList } from '../redux/actionCreators';

store.dispatch(getBooksList())

const App = () => (
  <Provider store={ store }>
    <AppRourtes />
  </Provider>
)

export default App;
