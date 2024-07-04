import {DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer';
import { Slide1, Slide2, Slide3 } from '../screens/index';
import React from 'react';
import { MenuBottomTabs } from './MenuBottomTabs';

type MenuDrawerParam = {
    Slide1: undefined;
    Slide2: undefined;
    Slide3: undefined;
}

type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Slide1">

export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation;
}

export function MenuDrawer () {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Slide1' component={Slide1}/>
            <Drawer.Screen name='Slide2' component={Slide2}/>
            <Drawer.Screen name='Slide3' component={MenuBottomTabs}/>
        </Drawer.Navigator>
    )
}