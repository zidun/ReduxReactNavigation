import React, { Component } from 'react';
import { 
    View, 
    Text,
    FlatList,
    Image,
    StyleSheet
 } from 'react-native';

 const shows_first = [
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
 ]

 const shows_second = [
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
 ]

 const shows_third = [
    {
        "key":13,
        "name":"The 100",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/94/236401.jpg"
     },
    {
        "key":8,
        "name":"The Walking Dead",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/67/168817.jpg"
     },
    {
       "key":3,
       "name":"The Flash",
       "image":"https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg"
    },
    {
       "key":5,
       "name":"Designated Survivor",
       "image":"https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg",
    },
]

class List extends Component {
    _renderItem(item){
        return(
            <Image style={{width: 120, height: 180}} source={{uri: item.image}}/>
            // <Text>{item.name}</Text>
        );
    }

  render() {
    return (
      <View style={{backgroundColor: 'black'}}>
        <View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>My List</Text>
                <Text style={styles.see} onPress={()=>alert("You Click See All")}>See All ></Text>
            </View>
            <FlatList
                horizontal
                ItemSeparatorComponent={() => <View style={{width: 5}} />}
                keyExtractor={item => item.key.toString()}
                renderItem={({item}) => this._renderItem(item)} 
                data={shows_first}
            />
        </View>
        <View>
             <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Recomender For You</Text>
                <Text style={styles.see} onPress={()=>alert("You Click See All")}>See All ></Text>
            </View>
            <FlatList
                horizontal
                ItemSeparatorComponent={() => <View style={{width: 5}} />}
                keyExtractor={item => item.key.toString()}
                renderItem={({item}) => this._renderItem(item)} 
                data={shows_second}
            />
        </View>
        <View>
             <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>New Release</Text>
                <Text style={styles.see} onPress={()=>alert("You Click See All")}>See All ></Text>
            </View>
            <FlatList
                horizontal
                ItemSeparatorComponent={() => <View style={{width: 5}} />}
                keyExtractor={item => item.key.toString()}
                renderItem={({item}) => this._renderItem(item)} 
                data={shows_third}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize:20,
        fontWeight: '500',
        marginLeft: 8,
        marginTop: 8,
        marginBottom: 4,
    },
    see:{
        color:'white',
        marginTop:8,
        fontWeight:'500',
        fontSize:14,
        position:'absolute',
        right:10
    }
})

export default List;
