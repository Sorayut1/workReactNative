import React from "react";
import { FlatList,StyleSheet,Text,View } from "react-native";
import { useState } from "react";
const MyFlatList = () =>{
    const [name,setName] = useState([
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
    ]);
    return(
        <View style={styles.container}>
            <FlatList
            data={name}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            
            />
            
        </View>

    );
}
//กำหนด styles
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:12,
        color:"#000"
    },
    item:{
        padding:10,
        fontSize:20,
        height:40,
    },
});
export default MyFlatList;