import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { laporan_Penjualan, laporan_Pembelian, laporan_StokBarang, laporan_MutasiBarang } from '../actions/ActionHomeLaporan'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

class Harian extends React.Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingBottom: 20 }}>
                    <View style={{ alignItems: 'center', paddingTop: 20 }}>
                        <View style={{ width: '100%', alignItems: 'center', backgroundColor: '#ffb817', justifyContent: 'center', paddingVertical: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'BreeSerif-Regular', color: 'white', fontWeight: '400' }}>Jumlah Transaksi</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, width: '100%', paddingVertical: 5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'white' }}>
                            <Text style={{ fontFamily: 'BreeSerif-Regular', fontSize: 40, color: '#ffb817' }}>0</Text>
                            <View style={{ paddingRight: 200, paddingVertical: 5 }}>
                                <Text style={{ fontSize: 10, fontFamily: 'BreeSerif-Regular', fontWeight: '400' }}>Hari ini: 10/10/2018</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', backgroundColor: '#ffb817', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10 }}>
                            <Text style={{ fontSize: 15, fontFamily: 'BreeSerif-Regular', color: 'white', fontWeight: '400' }}>Barang{'\n'}Terjual</Text>
                            <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 40, fontFamily: 'BreeSerif-Regular', color: 'white', fontWeight: '400' }}>0</Text>
                            </View>
                            <Text style={{ fontSize: 10, fontFamily: 'BreeSerif-Regular', color: 'white', fontWeight: '400' }}>hari ini :{'\n'}10/10/2018</Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', backgroundColor: '#ffb817', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10 }}>
                            <Text style={{ fontSize: 15, fontFamily: 'BreeSerif-Regular', color: 'white', fontWeight: '400' }}>Barang{'\n'}Terbeli</Text>
                            <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 40, fontFamily: 'BreeSerif-Regular', color: 'white', fontWeight: '400' }}>0</Text>
                            </View>
                            <Text style={{ fontSize: 10, fontFamily: 'BreeSerif-Regular', color: 'white', fontWeight: '400' }}>hari ini :{'\n'}10/10/2018</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                        <TouchableOpacity onPress={() => Actions.laporanPenjualan()}
                            style={{ backgroundColor: '#ff9906', paddingVertical: 10, alignItems: 'center', borderRadius: 10, width: '45%' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'BreeSerif-Regular', color: 'white', fontWeight: '400' }}>  Laporan{'\n'}Penjualan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.laporanPembelian()}
                            style={{ backgroundColor: '#ff9906', paddingVertical: 10, borderRadius: 10, alignItems: 'center', width: '45%' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'BreeSerif-Regular', color: 'white', fontWeight: '400' }}>  Laporan{'\n'}Pembelian</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                        <TouchableOpacity onPress={() => Actions.laporanStoBarang()}
                            style={{ backgroundColor: '#ff9906', paddingVertical: 10, alignItems: 'center', borderRadius: 10, width: '45%' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'BreeSerif-Regular', color: 'white', fontWeight: '400' }}>    Laporan{'\n'}Stok Barang</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.laporanMutasiBarang()}
                            style={{ backgroundColor: '#ff9906', paddingVertical: 10, borderRadius: 10, alignItems: 'center', width: '45%' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'BreeSerif-Regular', color: 'white', fontWeight: '400' }}>       Laporan{'\n'}Mutasi Barang</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps1 = state => {
    const { lPenjualan, lPembelian, lStokBarang, lMutasiBarang } = state.homeReducer
    return {
        lPenjualan,
        lPembelian,
        lStokBarang,
        lMutasiBarang
    }
}

export default connect(mapStateToProps1, { laporan_Penjualan, laporan_Pembelian, laporan_StokBarang, laporan_MutasiBarang })(Harian)





