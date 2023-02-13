import React from 'react';
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/**
 * ? Local & Shared Imports
 */
import { palette } from '@theme/themes';
// ? Screens
import HomeScreen from '@screens/home';
import SearchScreen from '@screens/tab1';
import DetailScreen from '@screens/tab2';
import ProfileScreen from '@screens/tab3';
import NotificationScreen from '@screens/detail';
import { SCREENS } from '@shared-constants';

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
            headerTitle: '',
            headerRight: headerBtn,
            headerLeft: headerBtn,
            // headerTransparent: true,
          }}
        />
        <Stack.Screen name={SCREENS.DETAIL}>
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>
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
  let iconName = 'home';
  switch (route.name) {
    case SCREENS.HOME:
      iconName = focused ? 'home' : 'home-out';
      break;
    case SCREENS.TAB1:
      iconName = focused ? 'search' : 'search-out';
      break;
    case SCREENS.TAB2:
      iconName = focused ? 'noti' : 'noti-out';
      break;
    case SCREENS.TAB3:
      iconName = focused ? 'person' : 'person-out';
      break;
    default:
      iconName = focused ? 'home' : 'home-out';
      break;
  }
  return <Text>{iconName}</Text>;
};

const RenderTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          return renderTabIcon(route, focused, color, size);
        },
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: palette.white,
        },
        // tabBarShowLabel: false,
      })}>
      <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Tab.Screen name={SCREENS.TAB1} component={SearchScreen} />
      <Tab.Screen name={SCREENS.TAB2} component={NotificationScreen} />
      <Tab.Screen name={SCREENS.TAB3} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const headerBtn = () => {
  return (
    <Button
      onPress={() => console.log('btn clicked!!')}
      title="Info"
      color="#12f"
    />
  );
};

export default Navigation;
