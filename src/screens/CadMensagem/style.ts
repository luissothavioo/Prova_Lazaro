import { StyleSheet } from "react-native";

export const Painel = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(239, 253, 255)"
    },
    botao: {
        width: 45,
        height: 45,
        backgroundColor: "blue",
        justifyContent: "center",
        textAlign: "center"
    },
    text: {
        color: "white",
        fontSize: 14
    },
    campoTitulo: {
        alignItems: "center",
        backgroundColor: 'beige',
        borderWidth: 2,
        width: 300,
        height: 40,
        flexDirection: "row",
        padding: 20,
        marginBottom: 20,
        borderColor: "black"
    },
    campoMensagem: {
        alignItems: "center",
        backgroundColor: 'beige',
        borderWidth: 2,
        width: 300,
        height: 200,
        flexDirection: "row",
        padding: 20,
        marginBottom: 20,
        borderColor: "black"
    },
    input: {
        paddingLeft: 13,
        width: 300,
        height: 45,
        fontStyle: "italic",
        fontWeight: "900"
    },
    icone: {
        fontSize: 35
    },
    titulo: {
        fontSize: 25,
        fontWeight: "800",
        fontStyle: "italic",
        marginBottom: 25
    }
})