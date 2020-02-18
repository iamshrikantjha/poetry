import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AboutUs from '../screens/AboutUs';
import Example from '../screens/Example';
import Welcome from '../screens/Welcome';
import PoemScreen from '../screens/PoemScreen';
import ListCategories from '../screens/ListCategories';
import ListCategories2 from '../screens/ListCategories2';
import ListPoems from '../screens/ListPoems';

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        {/* <Stack.Screen name="Example" component={Example} /> */}
        {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
        <Stack.Screen name="ListCategories2" component={ListCategories2} />

        {/* <Stack.Screen name="ListCategories" component={ListCategories} /> */}
        <Stack.Screen name="ListPoems" component={ListPoems} />
        <Stack.Screen name="PoemScreen" component={PoemScreen} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
