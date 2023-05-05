import React from "react";
import {StyleSheet, View, FlatList} from 'react-native';

import Topo from "./Componentes/Topo";
import Detalhes from "./Componentes/Detalhes";
import Item from "./Componentes/Item";

export default function Cesta({topo, detalhes, itens}){
    return <>
        <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={() =>{
            return <>
                <Topo {...topo}/>
                <View style={estilos.cesta}>
                    <Detalhes {...detalhes} />
                </View>
            </>
        }}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});