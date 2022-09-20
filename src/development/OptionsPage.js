import React, { Component } from 'react';
import { View } from 'react-native'
import { AppConsumer } from './AppContextProvider';
import { ChalkboardTheme, LightTheme } from './Themes';
import { Button } from 'react-native-paper';
import Style from '../../assets/Style';

class Options extends Component {
    render() {
        return (
            <AppConsumer>
                { appConsumer => (
                     <View style={Style.container}>
                         <Button onPress={ () => appConsumer.updateTheme(ChalkboardTheme) }>Chalkboard Theme</Button>
                         <Button onPress={ () => appConsumer.updateTheme(LightTheme) }>Light Theme</Button>
                     </View>
                )}
            </AppConsumer>
        )
    }
}

export default Options;