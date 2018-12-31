import React from 'react'
import {Router, Stack, Scene} from 'react-native-router-flux'
import Login from '../screen/Login'
import Daftar from '../screen/Daftar'
import Home from '../screen/Home'
import LaporanPenjualan from '../screen/LaporanPenjualan'
import LaporanPembelian from '../screen/LaporanPembelian'
import LaporanStokBarang from '../screen/LaporanStockBarang'
import LaporanMutasiBarang from '../screen/LaporanMutasiBarang'
import DatadataDrawer from '../screen/DatadataDrawer'
import TransaksiDrawer from '../screen/TransaksiDrawer'
import PengaturanDrawer from '../screen/PengaturanDrawer'
import PengaturanProfilDrawer from '../screen/PengaturanProfilDrawer'
import KategoriBarang from '../screen/KategoriBarang'

const Routers = () => (
    <Router>
        <Stack key="root">
            <Scene key="login" component={Login} hideNavBar={true}/>
            <Scene key="daftar" component={Daftar} hideNavBar={true}/>
            <Scene key="home" component={Home} hideNavBar={true}/>
            <Scene key="laporanPenjualan" component={LaporanPenjualan} hideNavBar={true}/>
            <Scene key="laporanPembelian" component={LaporanPembelian} hideNavBar={true}/>
            <Scene key="laporanStoBarang" component={LaporanStokBarang} hideNavBar={true}/>
            <Scene key="laporanMutasiBarang" component={LaporanMutasiBarang} hideNavBar={true}/>
            <Scene key="datadataDrawer" component={DatadataDrawer} hideNavBar={true}/>
            <Scene key="transaksiDrawer" component={TransaksiDrawer} hideNavBar={true}/>
            <Scene key="pengaturanDrawer" component={PengaturanDrawer} hideNavBar={true}/>
            <Scene key="pengaturanProfilDrawer" component={PengaturanProfilDrawer} hideNavBar={true}/>
            <Scene key="kategoriBarang" component={KategoriBarang} hideNavBar={true} />
        </Stack>
    </Router>
)


export default Routers