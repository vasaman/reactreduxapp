import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AddPersonForm from './components/AddPersonForm';
import PeopleList from './components/PeopleList';
import { createStore } from 'redux';

const initialState = {
  contacts: ["appu","tappu","pappu"]
};
function reducer(state=initialState, action) {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        contacts:
        [...state.contacts,
        action.data]}
    default:
      return state;
  }
}
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store} >
    <AddPersonForm />
    <PeopleList />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

