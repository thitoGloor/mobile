import {StyleSheet , Text, View } from 'react-native'
import {Feather} from '@expo/vector-icons';

import React from "react"
import { ScrollView, TouchableOpacity } from 'react-native-web'
export default function Inicio({nome, data}){
    return(
        <View style={estilo.container}>
            <ScrollView>
        <Text style={estilo.textoBoasVindas}>{nome}, Bem vindo!</Text>
        <Text>{data}</Text>
        <TouchableOpacity style={estilo.botaoPrincipal} >
            <Text style={textoBotao}> abrir aplicativo</Text>
        </TouchableOpacity>
        <button title="esse é um exemplo de botao"></button>
        <Feather name="file" size={20} color='white'></Feather>
        </ScrollView>
        <View style={estilo.containerSB}>
            <Text style={textoSB}>item</Text>
            <Text style={textoSB}>outro intem</Text>
        </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container : {
         backgroundColor: 'silver',
        flex : 1,
        flexDirection: 'row',
        paddingTop: 60,
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center',

},
textoBoasVindas:{
    fontSize: 30,
},
botaoPrincipal:{
    marginTop:12,
    width:60,
    heigth:40,
    backgroundColor: 'blue',
    fontSize: 30,
    justifyContent:'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom:20,


},
textoBotao:{
    fontSize: 20,
    color:'afff',


},
containerSB:{
    justifyContent: 'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginTop:40,

},
textoSB:{
    fontSize:14,
    fontWeight:'bold',
    color:'grey',

}
})
