import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native"
import Navigation from "../../navigation"
import { MenuStackTypes } from "../../navigation/MenuStack"
import { Painel } from './style';
import { useState } from "react";
import React from "react";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { ButtonInterface } from "../../components/ButtonInterface";

export interface IRegister {
    name?: string
    email?: string
    password?: string
}

export function Cadastro({ navigation }: MenuStackTypes) {
    const [data, setData] = useState<IRegister>();

    async function handleRegister() {
        if (data?.email && data.password) {
            console.log(data)
        } else {
            Alert.alert("Preencha todos os campos!!!")
        }
    }

    function handleGoBack() {
        navigation.navigate("Login")
    }

    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
    }

    return (
        <View style={Painel.container}>
            <KeyboardAvoidingView>
                <View style={Painel.campo}>
                    <MaterialIcons name="person" style={Painel.icone} />
                    <TextInput style={Painel.input}
                        placeholderTextColor={"black"}
                        placeholder="Nome"
                        onChangeText={(i) => handleChange({ email: i })}
                    />
                </View>

                <View style={Painel.campo}>
                    <MaterialIcons name="email" style={Painel.icone} />
                    <TextInput style={Painel.input}
                        placeholderTextColor={"black"}
                        placeholder="Email"
                        secureTextEntry={true}
                        keyboardType="email-address"
                        onChangeText={(i) => handleChange({ password: i })}
                    />
                </View>

                <View style={Painel.campo}>
                    <MaterialIcons name="password" style={Painel.icone}/>
                    <TextInput style={Painel.input}
                        placeholderTextColor={"black"}
                        placeholder="Senha"
                        secureTextEntry={true}
                        keyboardType="email-address"
                        onChangeText={(i) => handleChange({ password: i })}
                    />
                </View>

                <ButtonInterface title="Login" type="primary" onPressI={handleGoBack} />
                <ButtonInterface title="Cadastrar" type="secondary" onPressI={handleRegister} />

            </KeyboardAvoidingView>
        </View>

    )
}