import { LAPORAN_PENJUALAN, LAPORAN_PEMBELIAN, LAPORAN_STOKBARANG, LAPORAN_MUTASIBARANG } from '../actions/Types'
const initialState1 = {
    lPenjualan: "",
    lPembelian: "",
    lStokBarang: "",
    lMutasiBarang: ""
}

export default (state = initialState1, action) => {
    switch (action.type) {
        case LAPORAN_PENJUALAN:
            return {
                ...state, lPenjualan: action.payload
            }
        case LAPORAN_PEMBELIAN:
            return {
                ...state, lPembelian: action.payload
            }
        case LAPORAN_STOKBARANG:
            return {
                ...state, lStokBarang: action.payload
            }
        case LAPORAN_MUTASIBARANG:
            return {
                ...state, lMutasiBarang: action.payload
            }
        default:
            return state
    }
}