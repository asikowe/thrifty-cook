import React from 'react';
import AppButton from '../components/Button';
import MyCheckbox from '../components/CheckBox';
import RoundButton from '../components/RoundButton';
import Style from '../../assets/Style';
import { Text, View, FlatList} from 'react-native';

export default function ShoppingList({route}) {
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
                <Text style={Style.heading}>SHOPPING LIST</Text>
            </View>
        )
    }

    const getFooter = () => {
        return (
            <View>
                <Text style={Style.heading}>ADD MORE? <RoundButton buttonText='+' /></Text>
                <Text style={Style.text}>OR click the button below to clear this list once you're done shopping!</Text>
                <AppButton buttonText='Clear list' onPress={() => myListEmpty()} />
            </View>
        )
    }

    return (
        <View style={Style.container}>
            <View style={Style.checkboxContainer}>
                <FlatList
                    data={route.params?.paramKey}
                    ListEmptyComponent={myListEmpty}
                    renderItem={({ item }) =>
                        <Text style={Style.text}><MyCheckbox /> {item.nameClean}</Text>
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
