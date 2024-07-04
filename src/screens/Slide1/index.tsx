import { View, Text, TouchableOpacity } from "react-native"
import Navigation from "../../navigation"
import { MenuStackTypes } from "../../navigation/MenuStack"
import { Painel } from './style';

export function Slide1({navigation}: MenuStackTypes) {
    return (
        <View style={Painel.container}>
            <TouchableOpacity style={Painel.botao}
                onPress={() => navigation.push("Slide2")}
            >
                <Text style={Painel.text}>Slide 2</Text>
            </TouchableOpacity>
        </View>
        
    )
}