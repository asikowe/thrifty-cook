import Style from '../../assets/Style';
import { TouchableOpacity, Text } from 'react-native';

export default function RoundButton(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={Style.smallRoundButtonContainer}>
            <Text style={Style.smallRoundButtonText}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
};
