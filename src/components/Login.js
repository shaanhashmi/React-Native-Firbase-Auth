import React, { Component } from 'react'
import {
	View,
	Text,
	Image,
	TouchableWithoutFeedback,
	StatusBar,
	TextInput,
	SafeAreaView,
	Keyboard, TouchableOpacity,
	KeyboardAvoidingView,
	Animated,
	Dimensions,
	Alert
} from 'react-native';
import firebase from 'firebase'
import { Spinner, ButtonAuth } from './common';
import * as Animatable from 'react-native-animatable'
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class Login extends Component {



	state = { email: '', password: '', error: '', loading: false }

	componentWillMount() {
		this.infoHeight = new Animated.Value(0);
	};

	componentDidMount = () => {
		this.increaseBoxHeight()
	};


	increaseBoxHeight = () => {
		Animated.timing(this.infoHeight, {
			toValue: 220,
			duration: 500
		}).start()
	}

	onLoginPress() {
		const { email, password } = this.state;
		this.setState({ error: '', loading: true })
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(res => {
				alert(JSON.stringify(res))
				this.onLoginSuccess.bind(this)
			})
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(this.onLoginFailed.bind(this))
			})
	}

	onLoginFailed() {
		this.setState({ error: 'Authentication failed.', loading: false })
	}

	onLoginSuccess() {
		this.setState({ email: '', password: '', error: '', loading: false })
	}

	renderButton() {
		if (this.state.loading) {
			return (
				<View style={styles.spinnerContainer}>
					<Spinner size={'small'} />
				</View>
			)
		}

		return (
			<ButtonAuth onPress={this.onLoginPress.bind(this)}>
				LOGIN
      </ButtonAuth>
		)
	}

	render() {
		const { email, password } = this.state;
		const { container, logoContainer, logo, logoText, title, infoContainer, inputStyle, errorMsg } = styles;
		return (
			<SafeAreaView style={container}>
				<StatusBar backgroundColor={'rgb(32, 53, 70)'} barStyle="light-content" />
				<KeyboardAvoidingView style={container}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={container}>
							<Animatable.View animation="zoomIn" iterationCount={1} style={logoContainer}>
								<Image style={logo} source={require('../images/firebase_logo.png')} />
								{/* <Text style={logoText} >Authentication</Text> */}
							</Animatable.View>
							{/* <Animated.View style={{ height: this.infoHeight }} style={infoContainer} > */}
							<Animated.View style={{
								position: 'absolute',
								left: 0,
								right: 0,
								bottom: 0,
								height: this.infoHeight,
								padding: 20,
							}} >
								<TextInput style={inputStyle}
									placeholder={'Username'}
									placeholderTextColor={'rgba(255,255,255,0.8)'}
									keyboardType={'email-address'}
									returnKeyType={'next'}
									onSubmitEditing={() => this.refs.txtPassword.focus()}
									autoCorrect={false}
									value={email}
									onChangeText={email => this.setState({ email })}
								/>
								<TextInput style={inputStyle}
									placeholder={'Password'}
									placeholderTextColor={'rgba(255,255,255,0.8)'}
									secureTextEntry
									returnKeyType={'go'}
									autoCorrect={false}
									ref={'txtPassword'}
									value={password}
									onChangeText={password => this.setState({ password })}
								/>
								{this.state.error ? <Text style={errorMsg}>{this.state.error}</Text> : null}
								{this.renderButton()}
							</Animated.View>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</SafeAreaView >
		)
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: 'rgb(32, 53, 70)',
		flexDirection: 'column'
	},
	logoContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	logo: {
		width: 220,
		height: 100,
		marginBottom: 200,
	},
	logoText: {
		fontSize: 24,
		color: '#FFF',
		fontWeight: '600',
		marginBottom: 170
	},
	title: {
		color: '#f7c744',
		fontSize: 18,
		textAlign: 'center'
	},
	infoContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		height: 0,
		padding: 20,
		backgroundColor: 'red',

	},
	inputStyle: {
		height: 45,
		backgroundColor: 'rgba(255,255,255,0.2)',
		paddingHorizontal: 10,
		color: '#FFF',
		marginBottom: 20

	},
	errorMsg: {
		fontSize: 16,
		alignSelf: 'center',
		color: 'red',
		marginTop: -15,
		marginBottom: 10
	},
	spinnerContainer: {
		backgroundColor: '#f7c744',
		paddingVertical: 22
	},
}
