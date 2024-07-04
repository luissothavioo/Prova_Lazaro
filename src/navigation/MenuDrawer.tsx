import {DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer';
import { Slide3 } from '../screens/index';
import React from 'react';
import { MenuBottomTabs } from './MenuBottomTabs';

type MenuDrawerParam = {
    Slide3: undefined;
}

type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Slide3">

export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation;
}

export function MenuDrawer () {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Slide3' component={Slide3}/>        </Drawer.Navigator>
    )
}