import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { Actions } from 'react-native-router-flux'
import Modal from 'react-native-modal'
class KategoriBarang extends React.Component {

    state = {
        isModal: false,
        text: '',
        list: []
    }
    create() {
        if (this.state.text == '') {
            ('Input tidak boleh kosng')
        } else {
            this.state.list.push(this.state.text)
            this.setState({ list: this.state.list, text: '' })
        }
    }
    createNew() {
        if (this.create()) {
            return true
        }else
        return this._toggleModal()
    }

    delete(deleted) {
        const newDeleted = this.state.list.filter((checkItem) => {
            return checkItem != deleted
        })
        this.setState({ list: newDeleted })
    }

    _toggleModal = () => {
        this.setState({
            isModal: !this.state.isModal
        })

    }

    render() {
        const items = this.state.list.map((val, key) => {
            return (
                <View key={key}>
                    <View style={{
                        marginTop: 3,
                        position: 'relative',
                        padding: 20,
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#ff9b07',
                    }}>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'serif', paddingRight: 5}}>{key+1}. {val}</Text>

                        </View>

                        <TouchableOpacity style={{
                            position: 'absolute',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                            top: 10,
                            bottom: 10,
                            right: 1,
                            flexDirection: 'row-reverse',
                        }} onPress={this.delete.bind(this, val)}>
                            <Icon2
                                name="trash"
                                color="red"
                                size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        })
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ff9b07', flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10 }}>
                    <Text style={{ color: 'white', fontSize: 25, fontFamily: 'BreeSerif-Regular', fontWeight: '400' }}>Kategori Barang</Text>
                    <TouchableOpacity onPress={() => Actions.datadataDrawer()}>
                        <Icon1
                            name="arrow-right"
                            color="white"
                            size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: 'white', width: '100%', height: '90%', justifyContent: 'space-between', paddingTop: 30, paddingBottom: 10 }}>
                    <View style={{ paddingLeft: 15 }}>
                        <Text style={{
                            color: "#cdcdcd", fontFamily: 'BreeSerif-Regular',
                            fontSize: 15
                        }}>List Kategori :</Text>
                    </View>
                    <ScrollView>
                        <View style={{paddingHorizontal: 10 }}>
                            {items}
                        </View>
                    </ScrollView>
                    <View style={{ width: '100%', alignItems: 'flex-end', paddingRight: 20 }}>
                        <TouchableOpacity onPress={this._toggleModal}>
                            <View style={{ elevation: 7, borderRadius: 35 }}>
                                <Icon2 name="plus-circle"
                                    size={60}
                                    color="#ff9b07" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal isVisible={this.state.isModal}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'white', width: '100%', paddingHorizontal: 10, paddingVertical: 25, borderRadius: 10 }}>

                            <Text style={{
                                fontFamily: 'BreeSerif-Regular',
                                fontSize: 15
                            }}>Tambah Kategori Barang :</Text>
                            <View style={{ paddingTop: 10, paddingBottom: 30 }}>
                                <TextInput
                                    borderBottomWidth={0.5}
                                    borderBottomColor="#ff9b07" 
                                    multiline={true}
                                    value={this.state.text}
                                    onChangeText={(text) => this.setState({ text: text })}
                                    style={{ fontSize: 15, fontFamily: 'serif' }}
                                />
                            </View>
                            <View style={{ width: '100%', alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={this.createNew.bind(this)}
                                >
                                    <View style={{ backgroundColor: "#ff9b07", paddingVertical: 5, paddingHorizontal: 20, borderRadius: 15 }}>
                                        <Text style={{
                                            color: "white", fontFamily: 'BreeSerif-Regular',
                                            fontSize: 15
                                        }}>Tambah</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        )
    }
}
export default KategoriBarang