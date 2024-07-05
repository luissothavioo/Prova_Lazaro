import { Text, View, Image } from "react-native"
import { Painel } from "./style"

export function Adicionar() {
    const gato = require("../../assets/gato.jpeg")
    return (
        <View style={Painel.container}>
            <Image source={gato}></Image>
        </View>
    )
}