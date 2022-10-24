import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../../screens/Welcome/Welcome';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';
import Home from '../../screens/Home/Home';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @StackNav
 **/

const StackNav: FC<IProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNav;
