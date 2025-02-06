import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Meal from '../screens/Main/Meal';
import CustomTabBar from '../components/CustomTabBar';
import QandA from '../screens/Main/Q&A';
import CustomDrawer from '../components/CustomDrawer';
import Calendar from '../screens/Main/Calendar';
import Track from '../screens/Main/Track';
import Messages from '../screens/Main/Message';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const renderCustomTabBar = (props: any) => <CustomTabBar {...props} />;

const MainTabs = () => {
  return (
    <Tab.Navigator tabBar={renderCustomTabBar}>
      <Tab.Screen name="Meal" component={Meal} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="DietTrack" component={Track} />
    </Tab.Navigator>
  );
};

const renderCustomDrawer = (props: any) => <CustomDrawer {...props} />;

const MainNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={renderCustomDrawer}>
      <Drawer.Screen name="MainTabs" component={MainTabs} />
      <Drawer.Screen name="Messages" component={Messages} />
      <Drawer.Screen name="Q&A" component={QandA} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
