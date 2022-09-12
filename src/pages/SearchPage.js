import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from "@rneui/themed";
import AppButton from '../components/Button';


export default function Searching() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [searchTimer, setSearchTimer] = useState(null);
    const info = 'fillIngredients=true&addRecipeInformation=true&instructionsRequired=true'
    
    const navigation = useNavigation();

    async function fetchData(text) {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=3fe0281632b048d9a3783898520399a7&query=${text}&${info}&number=2`,
        );
        res
            .json()
            .then((res) => {
                setResponse(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <SearchBar
                placeholder="Search"
                onChangeText={(text) => {
                    if (searchTimer) {
                        clearTimeout(searchTimer);
                    }
                    setInput(text);
                    setSearchTimer(
                        setTimeout(() => {
                            fetchData(text);
                        }, 2000),
                    );
                }}
                value={input}
                containerStyle={{ backgroundColor: '#fdf6da', borderBottomColor: '#fdf6da', borderTopColor: '#fdf6da'}}
                inputContainerStyle={{ backgroundColor: '#fdf6da' }}
                inputStyle={{color: 'black'}}
                clearIcon={false}
            />
            {response &&
                <View style={styles.container3}>
                    <Text style={{ fontFamily: 'PermamentMarkerRegular', fontSize: 35 }}>{response?.results[0].title}</Text>
                    <Text style={{ fontFamily: 'IndieFlowerRegular', fontSize: 20 }}>Ready in: {response?.results[0].readyInMinutes} minutes. Servings: {response?.results[0].servings}</Text>
                    <Text style={{ fontFamily: 'IndieFlowerRegular', fontSize: 20 }}>COOKING INSTRUCTIONS:</Text>
                    <FlatList
                        data={response?.results[0].analyzedInstructions[0].steps}
                        renderItem={({ item }) =>
                            <View style={styles.container2}>
                                <Text style={{ fontFamily: 'PoppinsLight', fontSize: 12 }}>{item.number}. {item.step}</Text>
                            </View>
                        }
                        keyExtractor={item => item.number}
                    />
                    <AppButton buttonText=" Add to list " onPress={() => navigation.navigate("Shopping List", {paramKey: response.results[0].extendedIngredients})} />
                </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
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
});