import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {Slide3 } from "../screens/index";
import { Entypo, Feather } from "@expo/vector-icons";
import React from 'react';

type MenuTabParam = {
    Slide3: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Slide3">
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