import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDFvnu1cxKYewSzGcWHw5epV_TDEfdyE5A',
      authDomain: 'auth-9f5a4.firebaseapp.com',
      databaseURL: 'https://auth-9f5a4.firebaseio.com',
      projectId: 'auth-9f5a4',
      storageBucket: 'auth-9f5a4.appspot.com',
      messagingSenderId: '157213089576'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
