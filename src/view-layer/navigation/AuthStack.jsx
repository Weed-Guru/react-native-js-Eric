import { createStackNavigator } from '@react-navigation/stack';
import NewsList from '../screens/NewsList';
import NewsDetail from '../screens/NewsDetail';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}>
      <AuthStack.Screen name="NewsList" component={NewsList}/>
      <AuthStack.Screen name="NewsDetail" component={NewsDetail}/>
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator;