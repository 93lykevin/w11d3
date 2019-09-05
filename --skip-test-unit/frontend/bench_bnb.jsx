// frontend/bench_bnb.jsx
import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import createStore from './store/store';
import {postUser, postSession, deleteSession } from './utils/session_utils';


document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = undefined;
  const root = document.getElementById("root");
  const store = createStore(preloadedState);
  window.postUser = postUser;
  window.postSession = postSession;
  window.deleteSession = deleteSession;

  ReactDOM.render(<Root store={store} />, root);
});