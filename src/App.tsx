import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

import {Explore} from './screens/Explore'
import {Chat} from './screens/Chat'
import {Matches} from './screens/Matches'
import {Profile} from './screens/Profile'
import {PRIMARY, FONT_WEIGHT_STYLE} from './theme'

const Navigator = createMaterialTopTabNavigator(
    {
        Explore: {
            screen: Explore,
            navigationOptions: {
                tabBarIcon: e => <Icon name="ios-search" color={e.tintColor} size={20} />,
            },
        },
        Matches: {
            screen: Matches,
            navigationOptions: {
                tabBarIcon: e => <Icon name="ios-heart" color={e.tintColor} size={20} />,
            },
        },
        Chat: {
            screen: Chat,
            navigationOptions: {
                tabBarIcon: e => <Icon name="ios-chatboxes" color={e.tintColor} size={20} />,
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: e => <Icon name="ios-contact" color={e.tintColor} size={20} />,
            },
        },
    },
    {
        tabBarPosition: 'bottom',
        initialRouteName: 'Matches',
        tabBarOptions: {
            showIcon: true,
            labelStyle: {
                fontFamily: FONT_WEIGHT_STYLE[600],
                fontSize: 10,
                lineHeight: 12,
            },
            activeTintColor: PRIMARY,
            inactiveTintColor: 'black',
            indicatorStyle: {
                position: 'absolute',
                top: 0,
                borderBottomWidth: 3,
                borderBottomColor: PRIMARY,
            },
            style: {
                backgroundColor: 'white',
            },
        },
    },
)

const App = createAppContainer(Navigator)

export default App
