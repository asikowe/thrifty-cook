import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function MyCheckbox() {

    const [checked, onChange] = useState(false);

    function onCheckmarkPress() {
        onChange(!checked);
    }

    return (
        <Pressable
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={onCheckmarkPress}>
            {checked && <Ionicons name="checkmark-outline" size={20} color="black" />}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    checkboxBase: {
        width: 20,
        height: 20,
        backgroundColor: '#FDF6DA',
        borderRadius: 4,
    },
    checkboxChecked: {
        width: 20,
        height: 20,
        backgroundColor: '#FDF6DA',
        borderRadius: 4,
    },
});
