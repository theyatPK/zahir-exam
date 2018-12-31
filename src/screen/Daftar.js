import React from 'react'
import { View, Text, ImageBackground, TouchableNativeFeedback, Keyboard, Image, StyleSheet, StatusBar } from 'react-native'
import DaftarForm from './DaftarForm'
import Icon from 'react-native-vector-icons/AntDesign'

class Daftar extends React.Component {
    render() {
        return (
            <TouchableNativeFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/background.jpg')}
                        style={styles.backgound}>
                        <StatusBar
                            backgroundColor='#ffb817' />
                        <View style={styles.view}>
                            <View>
                                <Image source={require('../assets/rupiahlogo.png')}
                                    style={styles.logo} />
                            </View>
                            <DaftarForm />
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
    backgound: {
        height: '100%',
        width: '100%'
    },
    logo: {
        height: 70,
        width: 70
    }
})
export default Daftar