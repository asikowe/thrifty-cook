import Style from '../../assets/Style';
import { TouchableOpacity, Text } from 'react-native';

export default function RoundButton(props) {

    function randomText() {
        console.log("This is a random text")
    }

    return (
        <TouchableOpacity onPress={randomText} style={Style.smallRoundButtonContainer}>
            <Text style={Style.smallRoundButtonText}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
};
