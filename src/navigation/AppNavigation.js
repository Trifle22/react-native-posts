import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import {theme} from '../theme';
const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? theme.main_color : 'white',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : theme.main_color,
    }
  }
)

export const AppNavigation = createAppContainer(PostNavigator)
