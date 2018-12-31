import React from 'react'
import { StyleSheet, View, Text, TextInput, SafeAreaView, TouchableOpacity, ToastAndroid } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { email_Change, password_Change, user_Change } from '../actions/Authaction'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/Zocial'
import Icon3 from 'react-native-vector-icons/Foundation'
import Icon4 from 'react-native-vector-icons/FontAwesome5'

class DaftarForm extends React.Component {
    state = {
        isloading: false,
        eye: true,
        scure: true,
        buttom: true
    }

    loading() {
        if (this.state.isloading) {
            return <Loading />
        }
    }

    postdata = ({ user, email, password }) => {
        const url = 'https://api-penjualanapp.herokuapp.com/api/v1/register'
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user,
                email: email,
                password: password
            })
        })
            .then(data => data.json())
            .then(this.setState({ isloading: true }))
            .then(data => {
                this.setState({ isloading: false })
                console.log(data)
                ToastAndroid.show('Berhasil daftar', ToastAndroid.SHORT)
                Actions.login()
            })
            .catch(err => {
                this.setState({ isloading: false })
                console.log(err)
                ToastAndroid.show('Gagal daftar', ToastAndroid.SHORT)
            })
    }

    cangheEye() {
        if (this.state.eye) {
            return (
                <TouchableOpacity onPress={() => this.setState({ eye: false, scure: false })}>
                    <Icon4 name="eye"
                        color="white"
                        size={20} />
                </TouchableOpacity>)
        } else {
            return (
                <TouchableOpacity onPress={() => this.setState({ eye: true, scure: true })}>
                    <Icon4 name="eye-slash"
                        color="white"
                        size={20} />
                </TouchableOpacity>)
        }
    }
    buttom() {
        const { user, email, password } = this.props
        if (user == "" || password == "") {
            return (
                <View style={styles.viewLogin2}>
                    <Text style={styles.textLogin2}>DAFTAR</Text>
                </View>
            )
        } else {
            return (
                <TouchableOpacity onPress={() => this.postdata({ user, email, password })}>
                    <View style={styles.viewLogin}>
                        <Text style={styles.textLogin}>DAFTAR</Text>
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
                <View style={styles.containerInput}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon1 name="user"
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
                                    blurOnSubmit={false}
                                    returnKeyType='next'
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    autoCapitalize='none'
                                    autoCorrect={false} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon2 name="email"
                            color="white"
                            size={20} />
                        <View style={styles.viewInput}>
                            <View style={{ width: '100%' }}>
                                <TextInput
                                    style={{ color: "white", fontFamily: 'BreeSerif-Regular' }}
                                    onChangeText={text => this.props.email_Change(text)}
                                    value={this.props.email}
                                    placeholder="Email"
                                    placeholderTextColor="#cdcdcd"
                                    fontFamily='BreeSerif-Regular'
                                    blurOnSubmit={false}
                                    returnKeyType='next'
                                    ref={(input) => this.passwordInput = input}
                                    onSubmitEditing={() => this.emailInput.focus()}
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    autoCorrect={false} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon3 name="lock"
                            color="white"
                            size={25} />
                        <View style={styles.viewInput}>
                            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    style={{ color: "white", fontFamily: 'BreeSerif-Regular' }}
                                    width={'85%'}
                                    onChangeText={text => this.props.password_Change(text)}
                                    value={this.props.password}
                                    placeholder="Password (min 6 karakter)"
                                    placeholderTextColor="#cdcdcd"
                                    fontFamily='BreeSerif-Regular'
                                    returnKeyType='go'
                                    secureTextEntry={this.state.scure}
                                    ref={(input) => this.emailInput = input} />
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
                        <View style={styles.viewDaftar}>
                            <TouchableOpacity onPress={() => Actions.login()}>
                                <Text style={styles.textU}>Masuk dengan akun anda</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => {
    const { email, password, user } = state.authReducer
    return {
        email,
        password,
        user
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
    viewDaftar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    viewTitle: {
        paddingTop: 5,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontFamily: 'BreeSerif-Regular', fontSize: 40
    },
    containerInput: {
        paddingVertical: 20,
    },
    loginContainer1: {
        paddingVertical: 20,
        width: '100%',
        alignItems: 'center'
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
})

export default connect(mapStateToProps, { email_Change, password_Change, user_Change })(DaftarForm)