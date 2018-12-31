import { LAPORAN_DRAWER, DATADATA_DRAWER, TRANSAKSI_DRAWER, PENGATURAN_DRAWER, LEMPAR_DRAWER, KATEGORI_BARANG} from '../actions/Types'
const initialState2 = {
    laporanD: "",
    datadataD: "",
    transaksiD: "",
    pengaturanD: "",
    lemparDrawer: "",
    kategoriB: ""
}

export default (state = initialState2, action) => {
    switch (action.type) {
        case LAPORAN_DRAWER:
        return {
            ...state, laporanD:
            action.payload
        }
        case DATADATA_DRAWER:
        return {
            ...state, datadataD:
            action.payload
        }
        case TRANSAKSI_DRAWER:
        return {
            ...state, transaksiD:
            action.payload
        }
        case PENGATURAN_DRAWER:
        return {
            ...state, pengaturanD:
            action.payload
        }
        case LEMPAR_DRAWER: 
        return {
            ...state, lemparDrawer:
            action.payload
        }
        case KATEGORI_BARANG:
        return {
            ...state, kategoriB:
            action.payload
        }
        default:
        return state

    }
}