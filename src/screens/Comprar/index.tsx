import { Text, View, Image } from "react-native"
import { Painel } from "./style"

export function Comprar() {
    const gato2 = require("../../assets/gatin.jpeg")
    return (
        <View style={Painel.container}>
            <Image source={gato2}></Image>
        </View>
    )
}