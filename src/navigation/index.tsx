import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {MenuBottomTabs} from "./MenuBottomTabs"
import { MenuDrawer } from './MenuDrawer';
import { MenuStack } from './MenuStack';

export default function Navigation () {
    return (
        <NavigationContainer>
            <MenuStack/>
        </NavigationContainer>
    )
}