import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    /* CONTAINERS */

    container: {
        flex: 1,
        backgroundColor: '#3d3d3d',
        justifyContent: 'center',
        textAlign: 'center',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
    },

    checkboxContainer: {
        maxHeight: '95%',
        alignItems: 'center',
    },

    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    containerSearch: {
        flex: 1,
        backgroundColor: '#3d3d3d',
        marginHorizontal: 0,
        marginVertical: 0
    },

    containerBorder: {
        flex: 1,
        backgroundColor: '#3d3d3d',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#315817'
    },

    /* BUTTON STYLES */

    appButtonContainer: {
        backgroundColor: '#ffb3ba',
        borderRadius: 20,
        minHeight: 45,
        elevation: 5,
        paddingVertical: 3,
        paddingHorizontal: 3,
        marginTop: '5%',
        marginBottom: '5%',
        marginHorizontal: '20%'
    },
    appButtonText: {
        fontFamily: 'PermamentMarkerRegular',
        fontSize: 25,
        lineHeight: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: 10,
        color: 'black'
    },
    smallRoundButtonContainer: {
        backgroundColor: '#baffc9',
        borderRadius: 20,
        elevation: 3,
        paddingVertical: 0,
        paddingHorizontal: 9,
    },
    smallRoundButtonText: {
        fontFamily: 'PoppinsRegular',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },

    /* COMPONENT STYLES */

    checkbox: {
        backgroundColor: '#fef6db',
        borderRadius: 4,
        width: 20,
        height: 20,
    },

    logo: {
        height: 105,
        width: 75,
        resizeMode: 'scale'
    },

    myloader: {
        position: 'absolute',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    searchContainer: {
        backgroundColor: '#fef6db', 
        borderTopColor: '#fef6db',
        borderBottomColor: '#fef6db', 
    },

    searchInputContainer: {
        backgroundColor: '#fef6db', 
        borderColor: '#fef6db',
        paddingTop: 5,
    },

    searchInput: {
        fontFamily: 'IndieFlowerRegular',
        fontSize: 25,
        color: 'black',
        lineHeight: 30,
        paddingTop: 5,
    },

        /* TEXT STYLES */

    heading: {
        fontFamily: 'PermamentMarkerRegular',
        fontSize: 30,
        lineHeight: 60,
        textAlign: 'center',
        color: '#ffffba'
    },

    headingLogo: {
        fontFamily: 'PermamentMarkerRegular',
        fontSize: 35,
        lineHeight: 200,
        textAlign: 'center',
        color: '#ffffba'
    },

    subtitle: {
        fontFamily: 'IndieFlowerRegular',
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'center',
        color: '#fdf6da'
    },

    text: {
        fontFamily: 'PoppinsRegular', 
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        color: '#fdf6da'
    },
});