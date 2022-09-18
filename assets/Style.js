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

    containerSearch: {
        flex: 1,
        backgroundColor: '#3d3d3d',
        marginHorizontal: 0,
        marginVertical: 0
    },

    containerRecipeCards: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerRecipeCard: {
        backgroundColor: '#fdf6da',
        borderColor: '#ffffba',
        borderWidth: 3,
        borderStyle: 'solid',
        height: 'auto',
        width: '75%',
        borderRadius: 6,
        marginHorizontal: '3%',
        marginVertical: '3%',
    },

    containerRecipeCardButton: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3%',
        marginBottom: '5%'
    },

    containerRecipeBottomCardButtons: {
        flexDirection: 'row-reverse', 
        padding: 5
    },

    containerInstructions: {
        backgroundColor: '#3d3d3d',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: '3%',
        paddingVertical: '5%',
    },


    /* BUTTON STYLES */


    appButtonContainer: {
        backgroundColor: '#ffb3ba',
        borderRadius: 20,
        minHeight: 45,
        elevation: 5,
        paddingVertical: 3,
        paddingHorizontal: 3,
        marginVertical: '5%',
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
        borderRadius: 18,
        elevation: 3,
        paddingVertical: 0,
        paddingHorizontal: 9,
    },

    smallRoundButtonText: {
        fontFamily: 'PoppinsRegular',
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        paddingVertical: 0,
        paddingHorizontal: 0,
        marginBottom: -3,
        textShadowColor: 'black',
        textShadowRadius: 2,
    },

    recipeCardButton: {
        backgroundColor: '#ffb3ba',
        borderRadius: 5,
        elevation: 3,
        width: '35%',
        marginRight: '5%',
        marginLeft: '5%',
    },

    recipeCardButtonText: {
        fontFamily: 'PermamentMarkerRegular',
        fontSize: 14,
        textAlign: 'center',
        color: 'black'
    },


    /* COMPONENT STYLES */


    checkbox: {
        backgroundColor: '#fef6db',
        borderColor: '#ffb3ba',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 3,
        width: 18,
        height: 18,
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
        color: '#ffffba',
        textShadowColor: '#ffffba',
        textShadowRadius: 3
    },

    subtitle: {
        fontFamily: 'IndieFlowerRegular',
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'center',
        color: '#fdf6da',
        textShadowColor: '#fdf6da',
        textShadowRadius: 2
    },

    recipeCardTitle: {
        fontFamily: 'PermamentMarkerRegular',
        fontSize: 18,
        lineHeight: 30,
        textAlign: 'center',
        color: '#3d3d3d',
    },

    recipeCardText: {
        fontFamily: 'IndieFlowerRegular', 
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'center',
        color: '#3d3d3d',
        textShadowColor: '#3d3d3d',
        textShadowRadius: 1
    },

    text: {
        fontFamily: 'PoppinsRegular', 
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        color: '#fdf6da'
    },

    textShoppingList: {
        fontFamily: 'PoppinsRegular', 
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        color: '#fdf6da',
        paddingBottom: 6
    },

    textInstructions: {
        fontFamily: 'PoppinsRegular', 
        fontSize: 14,
        lineHeight: 20,
        color: '#fdf6da'
    },

});