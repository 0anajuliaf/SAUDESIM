import React from "react";
import { View, TextInput, Text } from "react-native";


export default function  Form(){
    return(
        <View>
            <View>
           <Text>Altura</Text>
           <TextInput
           placeholder= "Ex. 1.72"
           keyboard= "numeric"/>

            <Text>Peso</Text>
           <TextInput
           placeholder= "Ex. 80.365"
           keyboard= "numeric"/>
           </View>
        </View>
    );
}
