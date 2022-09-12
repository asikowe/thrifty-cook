import { StyleSheet, TouchableOpacity, Text } from "react-native";


export default function AppButton(props) {
    function randomText() {
        console.log("This is a random text")
    }
    return (
        <TouchableOpacity onPress={randomText} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 5,
        backgroundColor: "#FDF6DA",
        borderRadius: 20,
        paddingVertical: 1,
        paddingHorizontal: 10,
    },
    appButtonText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'PoppinsRegular'
    }
});