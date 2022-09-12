import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import AppButton from '../components/Button';
import MyCheckbox from '../components/CheckBox';
import RoundButton from '../components/RoundButton';


export default function ShoppingList({route}) {
    const myListEmpty = () => {
        return (
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text1}>Pick some recipes to see your shopping list.</Text>
            </View>
        );
    };

    const getHeader = () => {
        return (
            <View>
                <StatusBar />
                <Text style={styles.heading1}>SHOPPING LIST</Text>
            </View>
        )

    }

    const getFooter = () => {
        return (
            <View>
                <Text style={styles.heading1}>ADD MORE? <RoundButton buttonText='+' /></Text>
                <Text style={styles.text1}>
                OR click the button below to clear this list once you're done shopping! </Text>
                <AppButton buttonText='Clear list' onPress={() => myListEmpty()} />
            </View>

        )

    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.checkboxContainer}>
                <FlatList
                    data={route.params?.paramKey}
                    ListEmptyComponent={myListEmpty}
                    renderItem={({ item }) =>
                        <Text style={styles.text2}><MyCheckbox /> {item.nameClean}</Text>
                    }
                    keyExtractor={item => item.id}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                    ListHeaderComponent={getHeader}
                    ListFooterComponent={getFooter}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#D3EBDD',
        marginTop: 30,
    },
    checkboxContainer: {
        marginLeft: '20%',
        marginRight: '10%',
        textAlign: 'left',
    },
    heading1: {
        fontFamily: 'PermamentMarkerRegular',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 5,
    },
    text1: {
        fontFamily: 'IndieFlowerRegular',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        marginLeft: '15%',
        marginRight: '15%',
    },
    text2: {
        fontFamily: 'IndieFlowerRegular', 
        fontSize: 20,
    }
});
