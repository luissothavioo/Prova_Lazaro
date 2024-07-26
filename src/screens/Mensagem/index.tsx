import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { useAuth } from "../../hook/auth";
import { apiMessage } from "../../services/data";
import { IResponseMessage } from "../../services/data/Message";
import { FlatList } from "react-native-gesture-handler";



export function Mensagem() {
    const [message, setMessage] = useState<IResponseMessage[]>([])
    const { setLoading } = useAuth()
    useEffect(() => {
        setLoading(true)
        async function loadMessage() {
            const response = await apiMessage.index()
            setMessage(response.data)
        }
        setLoading(false)
        loadMessage()
    }, [])
    interface itemMessage {
        item: IResponseMessage
    }
    const renderItem = (({ item }: itemMessage) => {
        return (
            <View>
                <Text>Título: {item.title}</Text>
                <Text>Mensagem: {item.message}</Text>
            </View>
        )
    })
    return(
        <ImageBackground>
            <View>
                {
                    message.length > 0 && (
                        <FlatList
                            data={message}
                            renderItem={renderItem}
                            keyExtractor={item => String(item.id)}
                        />
                    )
                }
            </View>
        </ImageBackground>
    )
}