import React from 'react';
import { Pressable, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/**
 * ? Local & Shared Imports
 */
import { palette } from '@theme/themes';
// ? Screens
import HomeScreen from '@screens/home';
import Tab1Screen from '@screens/tab1';
import Tab2Screen from '@screens/tab2';
import Tab3Screen from '@screens/tab3';
import DetailScreen from '@screens/detail';
import { SCREENS } from '@shared-constants';
import Icon from 'assets/icons';

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name={'Main'}
          component={RenderTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name={SCREENS.DETAIL} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const renderTabIcon = (
  route: any,
  focused: boolean,
  color: string,
  size: number,
) => {
  let TabIcon;

  switch (route.name) {
    case SCREENS.HOME:
      TabIcon = Icon.Home;
      break;
    case SCREENS.TAB1:
      TabIcon = Icon.Cart;
      break;
    case SCREENS.TAB2:
      TabIcon = Icon.Clipboard;
      break;
    case SCREENS.TAB3:
      TabIcon = Icon.Layers;
      break;
    default:
      TabIcon = Icon.Home;
      break;
  }

  return TabIcon({ size: 30, color: color });
};

const RenderTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerRight: headerBtn,
        tabBarIcon: ({ focused, color, size }) => {
          return renderTabIcon(route, focused, color, size);
        },
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: palette.white,
        },
      })}>
      <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Tab.Screen name={SCREENS.TAB1} component={Tab1Screen} />
      <Tab.Screen name={SCREENS.TAB2} component={Tab2Screen} />
      <Tab.Screen name={SCREENS.TAB3} component={Tab3Screen} />
    </Tab.Navigator>
  );
};

const headerBtn = () => {
  return (
    <Pressable
      onPress={() => console.log('header button pressed!')}
      style={{
        paddingRight: 10,
      }}>
      <Icon.Bell />
    </Pressable>
  );
};

export default Navigation;
