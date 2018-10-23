import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    FlatList,
    ScrollView,
    Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

const shows_all = [
    {
        "key":1,
        "name":"Suits",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg",
     },
     {
        "key":2,
        "name":"Modern Family",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg"
     },
     {
        "key":3,
        "name":"The Flash",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg"
     },
     {
        "key":4,
        "name":"Supergirl",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg"
     },
     {
        "key":5,
        "name":"Designated Survivor",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg",
     },
     {
        "key":6,
        "name":"24: Legacy",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg"
     },
     {
        "key":7,
        "name":"Colony",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/91/229234.jpg"
     },
     {
        "key":8,
        "name":"The Walking Dead",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/67/168817.jpg"
     },
     {
        "key":9,
        "name":"Taken",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/100/250528.jpg"
     },
     {
        "key":10,
        "name":"This is us",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/70/175831.jpg"
     },
     {
        "key":11,
        "name":"Superstore",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/69/174909.jpg"
     },
     {
        "key":12,
        "name":"Lethal Weapon",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/93/234808.jpg"
     },
     {
        "key":13,
        "name":"The 100",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/94/236401.jpg"
     },
     {
        "key":14,
        "name":"Homeland",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/101/254425.jpg"
     }
];

export class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:"",
            data:shows_all,
        }
    }

    filter(text){
        const newData = shows_all.filter(
            function(item){
                const itemData = item.name.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            }
        );
        this.setState({
            data:newData,
            text:text
        });
    }

    deleteData(){
        this.setState({
            text:"",
            data:shows_all
        })
    }

    _renderItem(item){
        return(
            <Image
                key={item.key}
                style={styles.image}
                source={{uri:item.image}}
            />
        );
    }

  render() {
    const {goBack} = this.props.navigation
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon 
                    name="search"
                    color="grey"
                    size={20}
                    style={styles.searchIcon}
                />
                <TextInput 
                    value={this.state.text}
                    onChangeText={(text) => this.filter(text)}
                    style={styles.input}
                    placeholder="Search..."
                    placeholderTextColor="grey"
                    keyboardAppearance="dark"
                    autoFocus={true}
                />
                {
                    this.state.text ? 
                        <TouchableWithoutFeedback onPress={() => this.deleteData()}>
                            <Icon 
                                name="times-circle"
                                color="grey"
                                size={18}
                                style={styles.iconInputClose}
                            />
                        </TouchableWithoutFeedback>
                    : null
                }
                <TouchableWithoutFeedback style={styles.cancelButton} onPress={() => goBack()}>
                    <View style={styles.containerButton}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView>
                <FlatList 
                    style={{marginTop:5,marginLeft:4}}
                    data={this.state.data}
                    numColumns={3}
                    renderItem={({item})=>this._renderItem(item)}
                />
            </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    header: {
        height: 51,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 5,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        left:20,
        top:10,
        justifyContent: 'center',
        zIndex: 1,
        backgroundColor:'transparent'
    },
    iconInputClose: {
        position: 'absolute',
        top: 13,
        right: 80,
        backgroundColor: 'transparent',
        zIndex: 1
    },
    input: {
        fontSize:16,
        width: SCREEN_WIDTH - (SCREEN_WIDTH / 5),
        height: 40,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 38,
        borderRadius: 3,
        color: 'grey'
    },
    cancelButtonText: {
        color: 'white',
        fontSize:16
    },
    image: {
        justifyContent:'space-between',
        width: (SCREEN_WIDTH/3)-6,
        marginBottom: 5,
        marginRight: 5,
        height: (SCREEN_HEIGHT/3)-35
    }
})

export default Search