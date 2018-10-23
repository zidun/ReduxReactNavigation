import React, { Component } from 'react';
import Easing from 'react-native';
import {StackNavigator} from 'react-navigation';

import App from './app';
import Search from './components/Search';

const noTransition = () => {
    return {
      transitionSpec: {
        duration: 0,
      },
    }}

const IndexApp = StackNavigator(
    {
        Home:{
            screen:App
        },
        Search:{
            screen:Search
        },
    },{
        transitionConfig:noTransition,
        navigationOptions:{
            header:null
        }
    }
); 

export default IndexApp;
