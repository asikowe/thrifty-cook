import { Text, TouchableOpacity } from 'react-native';
import Style from '../../assets/Style';

export default function RecipeCardButton(props) {
    
    return (
        <TouchableOpacity style={Style.recipeCardButton} onPress={props.onPress}>
            <Text style={Style.recipeCardButtonText}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
}