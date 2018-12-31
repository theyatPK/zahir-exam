import React from 'react'
import { ActivityIndicator, View } from 'react-native'

class Loading extends React.Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                <ActivityIndicator size="small" color="white" />
            </View>
        )
    }
}
export default Loading