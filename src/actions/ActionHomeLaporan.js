import { LAPORAN_PENJUALAN, LAPORAN_PEMBELIAN, LAPORAN_STOKBARANG, LAPORAN_MUTASIBARANG } from './Types'

export const laporan_Penjualan = (text) => {
    return {
        type: LAPORAN_PENJUALAN,
        payload: text
    }
}

export const laporan_Pembelian = (text) => {
    return {
        type: LAPORAN_PEMBELIAN,
        payload: text
    }
}

export const laporan_StokBarang = (text) => {
    return {
        type: LAPORAN_STOKBARANG,
        payload: text
    }
}

export const laporan_MutasiBarang = (text) => {
    return {
        type: LAPORAN_MUTASIBARANG,
        payload: text
    }
}