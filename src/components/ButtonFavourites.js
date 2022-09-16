import { TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FavouritesButton(props) {

    return (
        <TouchableOpacity onPress={props.onPress2} activeOpacity={0.7}>
            <Ionicons color="orange" size={20} name={"star-outline"} />
        </TouchableOpacity >
    );
}
