import {DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer';
import { Animais, Cadastro } from '../screens/index';
import React from 'react';
import { MenuBottomTabs } from './MenuBottomTabs';

type MenuDrawerParam = {
    Cadastro: undefined
    Animais: undefined
    Carros: undefined
}

type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Cadastro">

export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation;
}

export function MenuDrawer () {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Cadastro' component={Cadastro}/>
            <Drawer.Screen name='Animais' component={MenuBottomTabs}/>   
        </Drawer.Navigator>
    )
}