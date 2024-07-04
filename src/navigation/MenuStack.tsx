import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import {Slide1, Slide2, Slide3} from "../screens/index"

type MenuStackParam = {
    Slide1: undefined
    Slide2: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Slide1">
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true
        }}>
           <Stack.Screen options={{
            headerTitle: "Login"
           }} name="Slide1" component={Slide1}/>

           <Stack.Screen options={{
            headerTitle: "Cadastro" 
           }} name="Slide2" component={Slide2}/>
        </Stack.Navigator>
    )
}