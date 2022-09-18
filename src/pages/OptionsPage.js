import React, { Component } from "react";
import { View } from 'react-native'
import { AppConsumer } from '../components/AppContextProvider';
import { BlueGray, LightGreen } from '../../assets/Themes';
import { Button } from "react-native-paper";
import Style from '../../assets/Style';

class Options extends Component {
    render() {
        return (
            <AppConsumer>
                { appConsumer => (
                     <View style={Style.container}>
                         <Button onPress={ () => appConsumer.updateTheme(BlueGray) }>Blue Gray Theme</Button>
                         <Button onPress={ () => appConsumer.updateTheme(LightGreen) }>Light Green Theme</Button>
                     </View>
                )}
            </AppConsumer>
        )
    }
}

export default Options;