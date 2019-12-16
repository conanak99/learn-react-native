import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

import {Explore} from './screens/Explore'
import {Chat} from './screens/Chat'
import {Matches} from './screens/Matches'
import {Profile} from './screens/Profile'

const Navigator = createMaterialTopTabNavigator(
    {
        Explore: {screen: Explore},
        Matches: {screen: Matches},
        Chat: {screen: Chat},
        Profile: {screen: Profile},
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {}
        },
        tabBarPosition: 'bottom',
    },
)

const App = createAppContainer(Navigator)

export default App
