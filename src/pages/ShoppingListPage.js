import React from 'react';
import Checkbox from '../components/CheckBox';
import AppButton from '../components/AppButton';
import RoundButton from '../components/RoundButton';
import Style from '../../assets/Style';
import { Text, View, FlatList, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { clearIngredients } from '../redux/action';

export default function ShoppingList() {

    const myListEmpty = () => {
        return (
            <View>
                <Text style={Style.text}>Pick some recipes to see your shopping list.</Text>
            </View>
        );
    };

    const getHeader = () => {
        return (
            <View>
                <StatusBar style='dark' />
                <Text style={Style.heading}>SHOPPING LIST</Text>
            </View>
        )
    }

    const getFooter = (props) => {
        return (
            <View>
                <Text style={Style.heading}>ADD MORE? <RoundButton buttonText='+' /></Text>
                <Text style={Style.text}>OR click the button below to clear this list once you're done shopping!</Text>
                <AppButton buttonText='Clear list' onPress={() => handleClearIngredients(props)} />
            </View>
        )
    }

    const ingredients = useSelector(state => state.ingredients);

    const dispatch = useDispatch();

    const handleClearIngredients = (ingredient) => {
        dispatch(clearIngredients(ingredient))
    };


    return (
        <View style={Style.container}>
            <FlatList
                data={ingredients}
                ListEmptyComponent={myListEmpty}
                renderItem={({ item }) =>
                <View style={Style.containerInstructions}>
                    {item.extendedIngredients.map((v, i) => (
                        <Text style={Style.textShoppingList} key={i}><Checkbox /> {v.measures.us.amount} {v.measures.us.unitLong} {v.nameClean}</Text>))}
                </View>}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
                ListHeaderComponent={getHeader}
                ListFooterComponent={(item) => getFooter(item)}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
