import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableNativeFeedback, Keyboard, TouchableOpacity} from 'react-native'
import {lempar_Drawer} from '../actions/Draweraction'
import {connect} from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/FontAwesome'

class PengaturanProfilDrawer extends React.Component {

    openDrawer = () => {
        this.refs.DRAWER.open()
    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', width: '100%', height: '100%', }}>
                <View style={{ paddingVertical: 10, width: '100%', borderBottomWidth: 0.5, borderBottomColor: "#cdcdcd", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                    <Text style={{ color: '#ffc136', fontSize: 20, fontFamily: 'BreeSerif-Regular', }}>Ubah</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#ffc136', fontSize: 22, fontFamily: 'BreeSerif-Regular', paddingRight: 15 }}>Profil</Text>
                        <TouchableOpacity onPress={()=> {
                            Actions.home()
                            this.props.lempar_Drawer('')}}>
                        <Icon1 name="close"
                            color='#ffc136'
                            size={25} />
                            </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <View style={{ alignItems: 'center', width: '100%', paddingTop: 20 }}>
                            <Icon2 name="user-circle"
                                color='#ffc136'
                                size={100} />
                            <Text style={{ color: '#ffc136', fontSize: 18, fontFamily: 'BreeSerif-Regular', fontWeight: '400', alignSelf: 'center' }}>Ubah Foto</Text>
                        </View>
                        <View style={{ width: '90%', paddingTop: 15, paddingBottom: 5 }}>
                            <TextInput
                                placeholder='Nama'
                                style={{ borderBottomColor: '#ffc136', borderBottomWidth: 0.5, fontFamily: 'BreeSerif-Regular', color: '#ffc136' }}
                                placeholderTextColor="#cdcdcd"
                                fontFamily='BreeSerif-Regular'
                                blurOnSubmit={false}
                                returnKeyType='next'
                                onSubmitEditing={() => this.alamatInput.focus()}
                                autoCorrect={false}

                            />
                            <TextInput
                                placeholder='Username'
                                style={{ borderBottomColor: '#ffc136', borderBottomWidth: 0.5, fontFamily: 'BreeSerif-Regular', color: '#ffc136' }}
                                placeholderTextColor="#cdcdcd"
                                fontFamily='BreeSerif-Regular'
                                blurOnSubmit={false}
                                returnKeyType='next'
                                autoCapitalize='none'
                                ref={(input) => this.alamatInput = input}
                                onSubmitEditing={() => this.usernameInput.focus()}
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                            <TextInput
                                placeholder='Email'
                                style={{ borderBottomColor: '#ffc136', borderBottomWidth: 0.5, fontFamily: 'BreeSerif-Regular', color: '#ffc136' }}
                                placeholderTextColor="#cdcdcd"
                                fontFamily='BreeSerif-Regular'
                                blurOnSubmit={false}
                                returnKeyType='next'
                                autoCapitalize='none'
                                ref={(input) => this.usernameInput = input}
                                onSubmitEditing={() => this.emailInput.focus()}
                                keyboardType='email-address'
                                autoCorrect={false}
                                />
                            <TextInput
                                placeholder='No. Hp'
                                style={{ borderBottomColor: '#ffc136', borderBottomWidth: 0.5, fontFamily: 'BreeSerif-Regular', color: '#ffc136' }}
                                placeholderTextColor="#cdcdcd"
                                fontFamily='BreeSerif-Regular'
                                blurOnSubmit={false}
                                returnKeyType='next'
                                ref={(input) => this.emailInput = input}
                                onSubmitEditing={() => this.nohpInput.focus()}
                                keyboardType='numeric'
                                autoCorrect={false}
                            />
                            <TextInput
                                placeholder='Alamat'
                                style={{ borderBottomColor: '#ffc136', borderBottomWidth: 0.5, fontFamily: 'BreeSerif-Regular', color: '#ffc136' }}
                                placeholderTextColor="#cdcdcd"
                                fontFamily='BreeSerif-Regular'
                                multiline={true}
                                returnKeyType='go'
                                ref={(input) => this.nohpInput = input}
                            />
                        </View>
                    </View>
                    </TouchableNativeFeedback>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps2 = state => {
    const { lemparDrawer} = state.drawerReducer
    return {
    lemparDrawer
    }
}

export default connect (mapStateToProps2, {lempar_Drawer}) (PengaturanProfilDrawer)