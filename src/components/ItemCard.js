import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title } from 'react-native-paper';
import CardButton from "./ButtonItemCard";
import FavouritesButton from "./ButtonFavourites";

const CreateCard = (props) => {
    
    return(
        <Card style={styles.container}>
            <Card.Content style={{alignItems: 'center'}}>
                <Title style={styles.title}>{props.title} <FavouritesButton onPress2={props.onPress2} /></Title>
                <Text style={styles.text}>Cooking Time: {props.cookingTime} min</Text>
                <Text style={styles.text}>Serves: {props.servings}</Text>
            </Card.Content>
            <View style={{flex:1, flexDirection:'row', alignItems:'flex-end',}}>
            <CardButton buttonText='SEE RECIPE' onPress={props.onPress1}/>
            <CardButton buttonText='ADD TO LIST' onPress={props.onPress2}/>
            </View>


        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent:'center',
		height: 'auto',
        width: 280,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 6,
        backgroundColor: '#FFFBEB',
    },
    title: {
        color: '#1f1135',
        fontWeight: 'bold',
        fontSize: 13,
        marginVertical: -5,
        lineHeight: 20,
        marginBottom: 10
    },
    text: {
        fontSize: 12,
        justifyContent: "flex-end"
    },
})

export default CreateCard;