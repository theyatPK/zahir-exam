import { LAPORAN_DRAWER, DATADATA_DRAWER, TRANSAKSI_DRAWER, PENGATURAN_DRAWER, LEMPAR_DRAWER, KATEGORI_BARANG} from './Types'

export const laporan_Drawer = (text) => {
    return {
        type: LAPORAN_DRAWER,
        payload: text
    }
}

export const datadata_Drawer = (text) => {
    return {
        type: DATADATA_DRAWER,
        payload: text
    }
}

export const transaksi_Drawer = (text) => {
    return {
        type: TRANSAKSI_DRAWER,
        payload: text
    }
}

export const pengaturan_Drawer = (text) => {
    return {
        type: PENGATURAN_DRAWER,
        payload: text
    }
}

export const lempar_Drawer = (text) => {
    return {
        type: LEMPAR_DRAWER,
        payload: text
    }
}

export const kategori_Barang = ( text ) => {
    return {
        type: KATEGORI_BARANG,
        payload: text
    }
}