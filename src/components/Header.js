import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const Header = props => {
    const {navigate} = props.navigation
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggle()}>
                <Icon 
                    name="md-menu"
                    color="white"
                    size={25}
                />
            </TouchableWithoutFeedback>
            <Image  style={styles.logo} source={require("../images/Netflix-logo.png")}/>
            <TouchableWithoutFeedback onPress={()=> navigate('Search')}>
                <Icon 
                    name="md-search"
                    color="white"
                    size={25}
                />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 56,
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    logo: {
        width: 120,
        height: 30
    }
})

export default Header