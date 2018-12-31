import React from 'react'
import { View, Text, TouchableOpacity, AsyncStorage, Alert, BackHandler } from 'react-native'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Entypo'
import { Actions } from 'react-native-router-flux';


class PengaturanDrawer extends React.Component {

   

    button() {
        Alert.alert(
            'Keluar?',
            'Anda yakin ingin keluar?',
            [
                { text: 'Ya', onPress: () => {
                    AsyncStorage.removeItem('token')
                    .then(() => {
                        return Actions.login()
                    })
                }},
                { text: 'Tidak', onPress: () => false }
            ],
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', width: '100%', height: '100%' }}>
                <View style={{ width: '100%', paddingVertical: 10, paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: "#cdcdcd", flexDirection: 'row' }}>
                    <Text style={{ color: '#ffc136', fontSize: 23, fontFamily: 'BreeSerif-Regular'}}>Pengaturan</Text>
                    <TouchableOpacity onPress={() => Actions.home()}>
                        <Icon1
                            name="arrow-right"
                            color='#ffc136'
                            size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', width: '100%' }}>
                    <TouchableOpacity onPress={() => Actions.pengaturanProfilDrawer()}>
                        <View style={{ paddingTop: 20, paddingLeft: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Icon2 name="user-circle"
                                color='#ffc136'
                                size={27} />
                            <Text style={{ fontFamily: 'BreeSerif-Regular', color: '#ffc136', fontSize: 17, left: 10 }}>Profil</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.button()} >
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15, paddingLeft: 15 }}>
                            <Icon3 name="log-out"
                                color='#ffc136'
                                size={28} />
                            <Text style={{ fontFamily: 'BreeSerif-Regular', color: '#ffc136', left: 10, fontSize: 17 }}>Keluar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default PengaturanDrawer