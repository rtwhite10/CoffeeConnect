import LandingScreen from './app/screens/LandingScreen'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,  createSwitchNavigator } from 'react-navigation'


const AppStack = createStackNavigator(
  {
    Home: LandingScreen
  }
)

// const AuthStack = createStackNavigator(
//   {
    
//     SignUpRoute: SignUpScreen,
//     LoginRoute: LoginScreen,
//   }
// )



export default createAppContainer(createSwitchNavigator(
{
  App: AppStack
}
));