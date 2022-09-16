import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CardButton(props) {
    
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#F48668',
        borderRadius: 4,
        marginHorizontal: 80,
        marginTop: 15,
        marginBottom: 20
    },
    text: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold'
    }
})