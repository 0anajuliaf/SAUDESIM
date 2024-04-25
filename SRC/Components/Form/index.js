import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";


export default function  Form(){

const[height, setHeight] = useState(null)
const[weight, setWeight] = useState(null)
const[messegeImc, setMessegeImc] = useState("preencha o peso e a altura");
const[imc, setImc] = useState(null)
const[textButton, setTextButton] = useState("Calcular IMC");

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

           <Button
         
          title="nnnn"
           />


           </View>
        </View>
    );
}
