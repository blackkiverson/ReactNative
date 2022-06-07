//First of all, we need to import React to be able to use JSX, 
//which will then be transformed to the native components of each platform.
import React from 'react';

//On line 2, we import the Text and View components from react-native.
import { Text, View } from 'react-native';

function HelloWorldApp() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text>Hello, world!</Text>
        </View>
    )
}
export default HelloWorldApp;
