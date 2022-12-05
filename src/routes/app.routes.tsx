import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages
import { WelcomePage } from '../screens/Welcome';
import { Search } from '../screens/Search';
import { ListProducts } from '../screens/ListProducts';
import { ShowProduct } from '../screens/ShowProduct';
import { Faq } from '../screens/Faq';
import { Contact } from '../screens/Contact';

// const Tab = createBottomTabNavigator();
const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
    <Screen name="Welcome" component={WelcomePage} />
    <Screen name="Search" component={Search} />
    <Screen name="ListProducts" component={ListProducts} />
    <Screen name="ShowProduct" component={ShowProduct} />
    <Screen name="Information" component={Faq} />
    <Screen name="Contact" component={Contact} />
  </Navigator>
);
