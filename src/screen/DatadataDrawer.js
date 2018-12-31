import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/FontAwesome5'
import { Actions } from 'react-native-router-flux';
import { lempar_Drawer, kategori_Barang} from '../actions/Draweraction'
import {connect} from 'react-redux'


class DatadataDrawer extends React.Component {

    openDrawer = () => {
        this.refs.DRAWER.open()
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
                    source={require('../assets/backgroundApp.png')}>
                    <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ff9b07', flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10 }}>
                        <Text style={{ color: 'white', fontSize: 25, fontFamily: 'BreeSerif-Regular', fontWeight: '400' }}>Data-data</Text>
                        <TouchableOpacity onPress={() => {
                            Actions.home()
                            this.props.lempar_Drawer('asa')}}>
                            <Icon1
                                name="arrow-right"
                                color="white"
                                size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', height: '90%', paddingLeft: 15, paddingTop: 40 }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon2 name="home"
                                color="#ff9b07"
                                size={25} />
                            <Text style={{ fontFamily: 'BreeSerif-Regular', color: '#ff9b07', left: 10, fontSize: 17 }}>Stok Barang</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> Actions.kategoriBarang()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                            <Icon3 name="file-document-box-multiple-outline"
                                color="#ff9b07"
                                size={25} />
                            <Text style={{ fontFamily: 'BreeSerif-Regular', color: '#ff9b07', left: 10, fontSize: 17 }}>Kategori Barang</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                            <Icon4 name="hand-holding-usd"
                                color="#ff9b07"
                                size={25} />
                            <Text style={{ fontFamily: 'BreeSerif-Regular', color: '#ff9b07', left: 10, fontSize: 17 }}>Pemasok</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                            <Icon4 name="handshake"
                                color="#ff9b07"
                                size={23} />
                            <Text style={{ fontFamily: 'BreeSerif-Regular', color: '#ff9b07', left: 10, fontSize: 17 }}>Pelanggan</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps2 = state => {
    const { lemparDrawer, kategoriD} = state.drawerReducer
    return {
    lemparDrawer,
    kategoriD
    }
}


export default connect (mapStateToProps2, {lempar_Drawer, kategori_Barang}) (DatadataDrawer)