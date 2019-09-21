import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import firebase from 'firebase';
import appConfig from './app.config';
import SplashScreen from 'react-native-splash-screen';

// import { Header } from './components/common';
// import LoginForm from './components/LoginForm';
// import Splash from './components/Splash';

import Login from './components/Login';
import Logout from './components/Logout';
import { Spinner } from './components/common';

class App extends Component {
  state = { loggedIn: null }

  componentDidMount() {
    SplashScreen.hide()
  }

  componentWillMount() {
    firebase.initializeApp(appConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return <Logout />
      case false:
        return <Login />
      default:
        return <Spinner />
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'rgb(32, 53, 70)'} barStyle="light-content" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(32, 53, 70)',
  }
}

export default App
