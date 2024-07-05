import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Adicionar, Comprar } from "../screens/index";
import { Entypo, Feather } from "@expo/vector-icons";
import React from 'react';

type MenuTabParam = {
    Adicionar: undefined
    Comprar: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Adicionar">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation;
}

export function MenuBottomTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Adicionar" component={Adicionar}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="plus" size={24} color="black" />
                    )
                }}
            />

            <Tab.Screen name="Comprar" component={Comprar}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="shopping-cart" size={24} color="black" />
                    )
                }}
            />

        </Tab.Navigator>
    )
}