import Style from '../../assets/Style';
import { useState } from 'react';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Checkbox() {

    const [checked, onChange] = useState(false);

    function onCheckmarkPress() {
        onChange(!checked);
    }

    return (
        <Pressable style={[Style.checkbox, checked && Style.checkbox]}
            onPress={onCheckmarkPress}>
            {checked && <Ionicons name='chevron-down-outline' size={18} color={'#3d3d3d'} />}
        </Pressable>
    );
}