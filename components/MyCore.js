import React from "react";
import { View,Text,Image,ScrollView,TextInput,StyleSheet} from "react-native";
import { useState } from "react";
import { Button } from "react-native";
const MyCore = (props) => {
        const myCatName = props.pokemonName;
       const [isHungry , setIsHungry] = useState(true);
    return (
        <View>
            <Text>My Cat name '{myCatName}'</Text>
            <View>
                <Text>คำอธิบาย:....ไก่เกิดก่อนไข่ หรือไข่เกิดก่อนไก่</Text>
                <Image
                source={{
                    uri:props.pokamonPic
                }}
                style={{width:200,height:200}}
                />
                </View>
                <TextInput
                style={{
                    height:40,
                    borderColor:'gray',
                    borderWidth:1,
                    color:'gray',
                    paddingLeft:5
                }}
                placeholder="คุณต้องกรอกข้อความที่นี่..."
                // defaultValue=""
                />
               
                <Button
                style={styles.button}
                onPress={()=>{
                    setIsHungry(!isHungry)
                }}
                title = {isHungry ? "ให้อาหารฉันหน่อยสิ" : "อิ่มมากเลย: ขอบคุณ"}
                disabled = {!isHungry}
                />
                <View/>

        </View>
    );
}

const styles = StyleSheet.create({
  
    button: {
     marginTop:10
    },
   
    
  
  
  });
export default MyCore;