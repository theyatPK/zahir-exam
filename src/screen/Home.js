import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, BackHandler, Alert} from 'react-native'
import Tabs from '../tabs/Tabs'
import { Actions } from 'react-native-router-flux'
import {connect} from 'react-redux'
import { laporan_Drawer, datadata_Drawer, transaksi_Drawer, pengaturan_Drawer, lempar_Drawer} from '../actions/Draweraction'
import Drawer from 'react-native-circle-drawer'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Ionicons'



class Home extends React.Component {
    
  
    openDrawer = () => {
        this.refs.DRAWER.open()
    };

    renderSideMenu() {
        return (
            <View style={{ flex: 1, paddingRight: 15 }}>
                <View style={{ width: '100%' }}>
                    <Text style={{ fontFamily: 'BreeSerif-Regular', color: '#ffb817' }}>Username</Text>
                    <Text style={{ fontFamily: 'BreeSerif-Regular', color: '#ffb817' }}>email-user@gmail.com</Text>
                </View>
                <View style={{ width: '100%', height: '100%', paddingVertical: 60 }}>
                    <TouchableOpacity onPress={() => {
                        Actions.home()
                        this.props.lempar_Drawer('')}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                           <Icon1 
                           name="barchart"
                           color="#ffb817"
                           size={25}/>
                            <Text style={{ fontFamily: 'BreeSerif-Regular', color: '#ffb817', left: 10, fontSize: 17 }}> Laporan</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> {Actions.datadataDrawer()}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                           <Icon2 
                           name="database"
                           color="#ffb817"
                           size={24}/>
                            <Text style={{ fontFamily: 'BreeSerif-Regular', color: '#ffb817', left: 10, fontSize: 17 }}>  Data-data</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> Actions.transaksiDrawer()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                            <Icon2
                             name="balance-scale"
                             color="#ffb817"
                             size={20}/>
                            <Text style={{ fontFamily: 'BreeSerif-Regular', color: '#ffb817', left: 10, fontSize: 17 }}>Transaksi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> Actions.pengaturanDrawer()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                        <Icon3
                             name="ios-settings"
                             color="#ffb817"
                             size={29}/>
                            <Text style={{ fontFamily: 'BreeSerif-Regular', color: '#ffb817', left: 10, fontSize: 17 }}> Pengaturan</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderTopRightView() {
        return (
            <View style={{ width: '100%', paddingVertical: 10, alignItems: 'flex-end', paddingRight: 10 }}>
                <Icon2 name="user-circle"
                color="#ffb817"
                size={90}/>
            </View>
        )
    }

    render() {
        const lemparD=this.props.lemparDrawer
        setTimeout(() => {
           if (lemparD!="") {
               this.openDrawer()
           } 
        }, 0);
        return (
            <Drawer
                ref="DRAWER"
                sideMenu={this.renderSideMenu()}
                topRightView={this.renderTopRightView()}
                primaryColor='white'
                secondaryColor="#cdcdcd"
                cancelColor='#cdcdcd'>
                <View style={{ flex: 1 }}>
                    <ImageBackground style={{ height: '100%', width: '100%' }} source={require('../assets/backgroundApp.png')}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, alignItems: 'center', backgroundColor: '#ff9906' }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 25,
                                    fontFamily: 'BreeSerif-Regular', fontWeight: '400'
                                }}>Laporan</Text>
                            <TouchableOpacity onPress={() => this.openDrawer()}>
                                <Image source={require('../assets/drawer.png')}
                                    style={{ height: 20, width: 25 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', height: '100%', flex: 1 }}>
                            <View style={{ width: '100%', height: 20 }}>
                            </View>
                            <Tabs />
                        </View>
                    </ImageBackground>
                </View>
            </Drawer>
        )
    }
}
const mapStateToProps2 = state => {
    const { laporanD, datadataD, transaksiD, pengaturanD, lemparDrawer} = state.drawerReducer
    return {
    laporanD,
    datadataD,
    transaksiD,
    pengaturanD,
    lemparDrawer
    }
}

export default connect ( mapStateToProps2, {laporan_Drawer, datadata_Drawer, transaksi_Drawer, pengaturan_Drawer, lempar_Drawer}) (Home)