import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { reactReduxFirebase, ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from "firebase/app";
import { connect } from 'react-redux'
import Spinner from './components/auth/Spinner';


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fbConfig)
  )
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  userProfile: 'users',
};


const mapStateToProps = (state) => ({
  authIsLoaded: state.firebase.auth && state.firebase.auth.isLoaded,
});
const WaitTillAuth = connect(mapStateToProps)(({ authIsLoaded }) => {
  if (!authIsLoaded) return <Spinner />;
  return (
    <App />
  );
});

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <WaitTillAuth />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
