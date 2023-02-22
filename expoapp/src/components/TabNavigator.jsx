import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//  import HomePage from "../../screen/HomePage";
import { Ionicons,Octicons, Zocial, Fontisto } from "@expo/vector-icons";
import HomePage from "../../screens/HomePage";
import Register from "../../screens/Register";
import Login from "../../screens/Login";
import Wallet from "../../screens/Wallet";
import Profile from "../../screens/Profile";



const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
    
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        showIcon: true,
      }}
    >
      <Tab.Screen
      
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="home"
                size={focused ? 35 : 30}
                color={focused ? "purple" : "black"}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Zocial
                name="plancast"
                size={focused ? 35 : 30}
                color={focused ? "purple" : "black"}
              />
            );
          },
        }}
      /> */}
      {/* <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Octicons
                name="checklist"
                size={focused ? 35 : 30}
                color={focused ? "purple" : "black"}
              />
            );
          },
        }}
      /> */}
        <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Fontisto
                name="wallet"
                size={focused ? 35 : 30}
                color={focused ? "purple" : "black"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profle"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="person-circle"
                size={focused ? 35 : 30}
                color={focused ? "purple" : "black"}
              />
            );
          },
        }}
      />
    
    </Tab.Navigator>
  );
};

export default TabNavigator;
