import React from 'react'
import { StyleSheet, ToastAndroid, View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/Foundation'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import { Actions } from 'react-native-router-flux'
import { email_Change, password_Change, user_Change, lempar_Drawer } from '../actions/Authaction'
import { connect } from 'react-redux'
import Loading from '../components/Loading'

class LoginForm extends React.Component {
    state = {
        isloading: false,
        eye: true,
        scure: true,
        buttom: true
    }

    openDrawer = () => {
        this.refs.DRAWER.open()
    };

    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(value => {
                if (value) {
                    Actions.home()
                }
            })
    }

    loading() {
        if (this.state.isloading) {
            return <Loading />
        }
    }

    postdata = ({ user, password }) => {
        const url = 'https://api-penjualanapp.herokuapp.com/api/v1/login'
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user,
                password: password
            })
        })
            .then(res => res.json())
            .then(this.setState({ isloading: true }))
            .then(res => {
                if (res.data.token) {
                    this.setState({ isloading: false })
                    AsyncStorage.setItem('token', res.data.token)
                        .then(value => { return value })
                    Actions.home()
                    this.props.lempar_Drawer('')
                } else {
                    ToastAndroid.show('Username / Password Salah', ToastAndroid.SHORT)
                }
            })
            .catch(err => {
                this.setState({ isloading: false })
                console.log(err)
                ToastAndroid.show('Kesalahan Server', ToastAndroid.SHORT)
            })
    }

    cangheEye() {
        if (this.state.eye) {
            return (
                <TouchableOpacity onPress={() => this.setState({ eye: false, scure: false })}>
                    <Icon3 name="eye"
                        color="white"
                        size={20} />
                </TouchableOpacity>)
        } else {
            return (
                <TouchableOpacity onPress={() => this.setState({ eye: true, scure: true })}>
                    <Icon3 name="eye-slash"
                        color="white"
                        size={20} />
                </TouchableOpacity>)
        }
    }

    buttom() {
        const { user, password } = this.props
        if (user == "" || password == "") {
            return (
                <View style={styles.viewLogin2}>
                    <Text style={styles.textLogin2}>MASUK</Text>
                </View>
            )
        } else {
            return (
                <TouchableOpacity onPress={() => this.postdata({ user, password })}>
                    <View style={styles.viewLogin}>
                        <Text style={styles.textLogin}>MASUK</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    render() {
        return (
            <View style={styles.viewContainer}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Rupiah.id</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon1
                            name="user"
                            color="white"
                            size={20} />
                        <View style={styles.viewInput}>
                            <View style={{ width: '100%' }}>
                                <TextInput
                                    style={{ color: "white", fontFamily: 'BreeSerif-Regular' }}
                                    onChangeText={text => this.props.user_Change(text)}
                                    value={this.props.user}
                                    placeholder="Username"
                                    placeholderTextColor="#cdcdcd"
                                    fontFamily='BreeSerif-Regular'
                                    returnKeyType='next'
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    autoCapitalize='none'
                                    autoCorrect={false} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon2
                            name="lock"
                            color="white"
                            size={25} />
                        <View style={styles.viewInput}>
                            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    style={{ color: "white", fontFamily: 'BreeSerif-Regular' }}
                                    width={'85%'}
                                    onChangeText={text => this.props.password_Change(text)}
                                    value={this.props.password}
                                    placeholder="Password"
                                    placeholderTextColor="#cdcdcd"
                                    fontFamily='BreeSerif-Regular'
                                    returnKeyType='go'
                                    secureTextEntry={this.state.scure}
                                    ref={(input) => this.passwordInput = input} />
                                {this.cangheEye()}
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.loginContainer1}>
                    <View>
                        {this.loading()}
                    </View>
                    <View style={styles.loginContainer}>
                        {this.buttom()}
                    </View>
                    <View style={styles.daftarConatiner}>
                        <Text style={styles.textGabung}>Belum punya akun?</Text>
                        <View style={styles.viewDaftar}>
                            <TouchableOpacity onPress={() => Actions.daftar()}>
                                <Text style={styles.textU}>Gabung sekarang!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => {
    const { email, password, user, lemparDra} = state.authReducer
    return {
        email,
        password,
        user,
        lemparDra
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        width: '85%',
        backgroundColor: 'rgba(202, 129, 0, 0.5)',
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'column',
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    textU: {
        color: 'white',
        fontFamily: 'BreeSerif-Regular'
    },
    loginContainer: {
        width: '85%',
    },
    viewLogin: {
        backgroundColor: '#ffb817',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogin: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'BreeSerif-Regular',
    },
    viewLogin2: {
        backgroundColor: 'white',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogin2: {
        color: '#ffb817',
        fontSize: 20,
        fontFamily: 'BreeSerif-Regular',
    },
    daftarConatiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    viewDaftar: {
        left: 5
    },
    textGabung: {
        color: "#cdcdcd",
        fontFamily: 'BreeSerif-Regular'
    },
    viewTitle: {
        paddingTop: 5,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontFamily: 'BreeSerif-Regular', fontSize: 40
    },
    loginContainer1: {
        paddingVertical: 20,
        width: '100%',
        alignItems: 'center'
    },
    inputContainer: {
        paddingVertical: 45,
        width: '90%'
    }
})
export default connect(mapStateToProps, { email_Change, password_Change, user_Change, lempar_Drawer }) (LoginForm)