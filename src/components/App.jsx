import React from 'react';
import "../styles/styles.scss";
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux'
import store from "../redux/store"
import { getBooksList } from '../redux/actionCreators';
import BooksProvider from './Context/BooksProvider';

store.dispatch(getBooksList())

const App = () => (

  // Using Redux
  <Provider store={ store }>
    <AppRoutes />
  </Provider>

  /*
  //Using Context
  <BooksProvider>
    <AppRoutes />
  </BooksProvider>
  */
)

export default App;
