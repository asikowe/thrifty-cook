import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from "@rneui/themed";
import AppButton from '../components/Button';


export default function Searching() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [searchTimer, setSearchTimer] = useState(null);
    const [loading, setLoading] = useState(false)
    const info = 'fillIngredients=true&addRecipeInformation=true&instructionsRequired=true'
    const API_KEY = 'your-api-key'
    
    const navigation = useNavigation();

    async function fetchData(text) {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${text}&${info}&number=2`,
        );
        res
            .json()
            .then((res) => {
                setResponse(res);
                setLoading(false)
            })
            .catch((err) => console.log(err));
    };

    return (
        <View style={styles.container}>
            <StatusBar style='dark'/>
            <SearchBar
                placeholder="Search for recipes"
                onChangeText={(text) => {
                    if (searchTimer) {
                        clearTimeout(searchTimer);
                    }
                    setLoading(true);
                    setInput(text);
                    setSearchTimer(
                        setTimeout(() => {
                            fetchData(text);
                        }, 3000),
                    );
                }}
                value={input}
                containerStyle={{ backgroundColor: '#fdf6da', borderBottomColor: '#fdf6da', borderTopColor: '#fdf6da' }}
                inputContainerStyle={{ backgroundColor: '#fdf6da' }}
                inputStyle={{color: 'black'}}
                onSubmitEditing={()=>setInput('')}
                clearIcon={false}
                onFocus={()=>setResponse('')}
            />
            {loading === true &&
                <View style={styles.myloader}>
                    <ActivityIndicator size='large' color='#fdf6da' />
                </View>}
            {response &&
                <View style={styles.container3}>
                    <ScrollView contentContainerStyle={styles.scrollcontainer}>
                    <Text style={{ fontFamily: 'PermamentMarkerRegular', fontSize: 35 }}>{response?.results[0].title}</Text>
                    <Text style={{ fontFamily: 'IndieFlowerRegular', fontSize: 20 }}>Ready in: {response?.results[0].readyInMinutes} minutes. Servings: {response?.results[0].servings}</Text>
                    <Text style={{ fontFamily: 'IndieFlowerRegular', fontSize: 20 }}>COOKING INSTRUCTIONS:</Text>
                    <View style={styles.container2}>
                        {response?.results[0].analyzedInstructions[0].steps.map((item) => (
                            <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14 }} key={item.step}>{item.number}. {item.step}</Text>
                        ))}
                    </View>
                    <AppButton buttonText=" Show recipe " onPress={() => navigation.navigate("Recipe", { paramKey: response.results[0] })} />
                    <Text style={{ fontFamily: 'PermamentMarkerRegular', fontSize: 35 }}>{response?.results[1].title}</Text>
                    <Text style={{ fontFamily: 'IndieFlowerRegular', fontSize: 20 }}>Ready in: {response?.results[1].readyInMinutes} minutes. Servings: {response?.results[1].servings}</Text>
                    <Text style={{ fontFamily: 'IndieFlowerRegular', fontSize: 20 }}>COOKING INSTRUCTIONS:</Text>
                    <View style={styles.container2}>
                        {response?.results[1].analyzedInstructions[0].steps.map((item) => (
                            <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14 }} key={item.step}>{item.number}. {item.step}</Text>
                        ))}
                    </View>
                    <AppButton buttonText=" Show recipe " onPress={() => navigation.navigate("Recipe", { paramKey: response.results[1] })} />
                    </ScrollView>
                </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3EBDD",
    },
    container2: {
        flex: 1,
        backgroundColor: '#D3EBDD',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#FFB3BA',

    },
    container3: {
        flex: 1,
        backgroundColor: "#D3EBDD",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    scrollcontainer: {
        backgroundColor: "#D3EBDD",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    myloader: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
    }
});