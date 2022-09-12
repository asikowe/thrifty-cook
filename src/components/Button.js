import { StyleSheet, TouchableOpacity, Text } from "react-native";


export default function AppButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 10,
        backgroundColor: "#FDF6DA",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 1,
        marginLeft: '20%',
        marginRight: '20%',
    },
    appButtonText: {
        fontFamily: "PermamentMarkerRegular",
        fontSize: 25,
        color: 'black',
        textAlign: 'center'
    }
});