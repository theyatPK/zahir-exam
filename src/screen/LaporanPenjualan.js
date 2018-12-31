import React from 'react'
import { Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { Actions } from 'react-native-router-flux';
import {lempar_Drawer} from '../actions/Draweraction'
import { connect } from 'react-redux';

class LaporanPenjualan extends React.Component {

    openDrawer = () => {
        this.refs.DRAWER.open()
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ height: '100%', width: '100%' }}
                    source={require('../assets/backgroundApp.png')}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#ff9906', width: '100%', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15 }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 25,
                            fontFamily: 'BreeSerif-Regular', fontWeight: '400',
                        }}>Laporan Penjualan</Text>
                        <TouchableOpacity onPress={()=> {
                            Actions.home()
                            this.props.lempar_Drawer('')}}>
                      <Icon1
                      name="ios-arrow-forward"
                      color="white"
                      size={30}/>
                      </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'flex-end', width: '100%', right: 10, paddingTop: 10}}>
                    <View style={{borderWidth: 1, borderColor: '#ffb817', backgroundColor: 'white', borderRadius: 20, width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 40}}>
                    <Icon2 
                     name="search1"
                     color='#ffb817'
                     size={20}/>
                        <TextInput
                         style={{fontFamily: 'BreeSerif-Regular', alignItems: 'center', justifyContent: 'center' }}
                         width={'85%'}
                         placeholder="Cari nama barang.."
                         placeholderTextColor="#cdcdcd"
                         fontFamily='BreeSerif-Regular'/>
                    </View>
                    </View>
                </ImageBackground>
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
export default connect (mapStateToProps2, {lempar_Drawer}) (LaporanPenjualan)