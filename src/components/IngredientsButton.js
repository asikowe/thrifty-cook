import { TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function IngredientsButton(props) {

    return (
        <TouchableOpacity onPress={props.onPress3} activeOpacity={0.7}>
            <Ionicons color={props.color} size={props.size} name={props.isClicked2 ? "cart" : "cart-outline" } />
        </TouchableOpacity >
    );
}