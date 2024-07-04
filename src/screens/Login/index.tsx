import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native"
import Navigation from "../../navigation"
import { MenuStackTypes } from "../../navigation/MenuStack"
import { Painel } from './style';
import { useState } from "react";
import React from "react";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

export interface IAuthenticate {
    email?: string;
    password?: string;
}

export function Slide1({navigation}: MenuStackTypes) {
    const [data, setData] = useState<IAuthenticate>();

    async function handleSignIn() {
        if (data?.email && data.password) {
            console.log(data)
        } else {
            Alert.alert("Preencha todos os campos!!!")
        }

    function handleRegister() {
        navigation.navigate("Cadastro")
    }

    function handleChange (item: IAuthenticate) {
        setData({...data, ...item});
    }
    
    }
    return (
        <View style={Painel.container}>
            <KeyboardAvoidingView>
                <TextInput
                    placeholder="Email"
                    onChangeText={(i) => handleChange({email: i})}
                />

            </KeyboardAvoidingView>

            <TouchableOpacity style={Painel.botao}
                onPress={() => navigation.push("Cadastro")}
            >
            </TouchableOpacity>
        </View>
        
    )
}