import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Slide1, Slide2, Slide3 } from "../screens/index";
import { Entypo, Feather } from "@expo/vector-icons";
import React from 'react';

type MenuTabParam = {
    Slide1: undefined
    Slide2: undefined
    Slide3: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Slide1">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation;
}

export function MenuBottomTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Slide3" component={Slide3}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="slideshare" size={24} color="black" />
                    )
                }}
            />


        </Tab.Navigator>
    )
}