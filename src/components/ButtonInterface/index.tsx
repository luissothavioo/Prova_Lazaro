import { TouchableOpacityProps, Text, TouchableOpacity } from "react-native";

export interface IBIInterface extends TouchableOpacityProps {
    onPressI: () => void
    title: string
    type: 'primary' | 'secondary' | 'third'
}

export function ButtonInterface({onPressI, title, type, ...rest}: IBIInterface) {
    return (
        <TouchableOpacity onPress={onPressI} {...rest}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}