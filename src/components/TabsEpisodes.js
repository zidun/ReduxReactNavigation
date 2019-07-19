import React, { Component } from 'react';
import { 
    StyleSheet, 
    View 
} from 'react-native';
import { TabBar,TabView} from 'react-native-tab-view';
import { Episodes } from './Episodes';
import { Trailers } from './Trailers';

class TabsEpisodes extends Component {
    constructor(props){
        super(props);
        this.state = {
            index:0,
            route: [
                {
                    key:'1',
                    title:'Episodes'
                },
                {
                    key:'2',
                    title:'Trailer & More'
                }

            ]
        }
    }

    _handleChangeTab = index =>{
        this.setState({index})
    }
    _renderHeader(props){
        return <TabBar {...props} />
    }
    _renderScene = ({route}) => {
        switch(route.key){
            case '1':
                return <Episodes navigation={this.props.navigation} />
            case '2':
                return <Trailers />
            default: 
                return null
        }
    }

  render() {
    return (
      <TabView
        styles={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderHeader}
        onIndexChange={this._handleChangeTab.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 2,
        backgroundColor: 'red',
        borderColor: 'black'
    },
});

export default TabsEpisodes