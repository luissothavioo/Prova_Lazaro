import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import {Login, Cadastro} from "../screens/index"
import { MenuDrawer } from "./MenuDrawer";

type MenuStackParam = {
    Login: undefined
    Cadastro: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Login">
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true,
            headerShown: false
        }}>
           <Stack.Screen options={{
            headerTitle: "Login"
           }} name="Login" component={Login}/>

           <Stack.Screen options={{
            headerTitle: "Cadastro" 
           }} name="Cadastro" component={Cadastro}/>
        </Stack.Navigator>
    )
}