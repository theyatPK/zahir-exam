import React from 'react'
import { View, Text, ImageBackground, TouchableNativeFeedback, Keyboard, Image, StyleSheet, StatusBar } from 'react-native'
import LoginForm from './LoginForm';
import Icon from 'react-native-vector-icons/AntDesign'
class Login extends React.Component {
    state = {
        splash: true
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({ splash: false })
        }, 5000);
    }
    splas() {
        if (this.state.splash) {
            return (
                <ImageBackground
                    source={require('../assets/background.jpg')}
                    style={styles.splash}>
                    <StatusBar
                        backgroundColor='#ffb817' />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/rupiahlogo.png')}
                            style={{ height: 60, width: 60 }} />
                        <Text style={{ fontSize: 30, color: 'white', fontFamily: 'BreeSerif-Regular' }}> upiah.id</Text>
                    </View>
                </ImageBackground>
            )
        }
        else {
            false
        }
    }
    render() {
        return (
            <TouchableNativeFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    {this.splas()}
                    <ImageBackground source={require('../assets/background.jpg')}
                        style={styles.background}>
                        <StatusBar
                            backgroundColor='#ffb817' />
                        <View style={styles.view}>
                            <View>
                                <Image source={require('../assets/rupiahlogo.png')}
                                    style={styles.logo} />
                            </View>
                            <LoginForm />
                            <View style={styles.viewcopyRight}>
                                <Icon name="copyright"
                                    color="white"
                                    size={15} />
                                <Text style={styles.textTahun}>2018</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableNativeFeedback>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    splash: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        paddingBottom: 20,
        flexDirection: 'column',
        paddingVertical: 20,
    },
    viewcopyRight: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textTahun: {
        left: 3,
        color: 'white',
        fontFamily: 'BreeSerif-Regular'
    },
    background: {
        height: '100%',
        width: '100%'
    },
    logo: {
        height: 70,
        width: 70
    }
})
export default Login