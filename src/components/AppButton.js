import Style from '../../assets/Style';
import { TouchableOpacity, Text } from 'react-native';

export default function AppButton(props) {
    
    return (
        <TouchableOpacity onPress={props.onPress} style={Style.appButtonContainer}>
            <Text style={Style.appButtonText}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
};
