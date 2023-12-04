import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,  Button, ScrollView, FlatList } from 'react-native';
import MyCore from './components/MyCore';
import { useState } from 'react';
import MyFlatList from './components/MyFlatList';
export default function App() {
  const [pokemon,setPokemon] = useState([
    {pokemonName:"นก", pokamonPic :'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'},
    {pokemonName:"นก", pokamonPic :'https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg'},
    {pokemonName:"ไก่มัง", pokamonPic :'https://cdn.thinglink.me/api/image/655498865562091522/1024/10/scaletowidth/0/0/1/1/false/true?wait=true'},
    {pokemonName:"ไก่มัง", pokamonPic :'https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180'},
    {pokemonName:"ไข่", pokamonPic :'https://tse1.mm.bing.net/th?id=OIP.hF8_3tDhRrZvxm-j1kZwgwHaE9&pid=Api&P=0&h=180'},
    {pokemonName:"ไข่", pokamonPic :'https://pixy.org/src2/578/5782085.jpg'},
  ]);
  return (
    
     
<ScrollView>
<View style={styles.container}>
<StatusBar style='auto'/>

  <Text>My Name is Sorayut</Text>
  
{/* <MyCore pokemonName="นก" pokamonPic ='https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg' />
<MyCore pokemonName="ไก่มัง" pokamonPic ='https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180' />
<MyCore pokemonName="ไข่" pokamonPic ='https://pixy.org/src2/578/5782085.jpg' />  */}
<FlatList
style={{marginTop:20}}
data={pokemon}
renderItem={({item}) => <MyCore pokemonName={item.pokemonName} pokamonPic={item.pokamonPic}/>}/>
<MyFlatList/>
</View>
</ScrollView>
    

  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    //backgroundColor: 'linear-gradient(90deg, rgba(250,203,178,1) 11%, rgba(249,208,187,1) 34%, rgba(255,182,144,1) 75%, rgba(251,161,114,1) 100%)',
    alignItems: 'center',
    justifyContent: 'center',
    // gap:10
  },
 
  


});
/* React Native เป็น opensource framework สำหรับในการสร้าง android และ ios แอพพลิเคชั่น โดยมี
    การใช้ React และ สร้างของโครงสร้างพื้นฐานของตัวโมบายทำให้สามารถรองรับการพัฒนาได้
โดย React Native จะใช้ Javascritp ในการเข้าถึง platfrom's API ในการสร้าง UI (user interface)
มีการใช้งาน Component ของ React เพื่อให้สามารถ reuseable , nestable , nestable code

View and Mobile development
  ทั้งในการพัฒนาในฝั่ง android และ ios จะมีสิ่งที่เรียกว่า View ซึ่งเป็นพื้นฐานในการแสดงผล UI ซึ่งสามารถใช้
  ในการแสดงผล text , images หรือการโต้ตอบในการป้อนข้อมูลของผู้ใช้งาน หรือพวก element ต่างๆเช่น เส้น
  ปุ่ม หรือส่วนอื่นๆ ทั้งหมดเป็นส่วนหนึ่งของ views 

    React Fundamentals
    react native จะทำงานบน react ซึ่งเป็น open source library ที่ได้รับความนิยมในการสร้าง UI โดยใช้
    ภาษา JS และเพื่อที่จะเริ่มต้นใช้งาน react native ใครต้องมีพื้นฐานแนวคิดของ react ดังนี้
    -Component
      เป็นเหมือนฟังก์ชั่นที่จะ return เนื้อหาต่างๆที่สร้างผ่าน component ซึ่งเป็นอิสระต่อกันและนำกลับมาใช้ได้ใหม่(reusable)
    -JSX
      สามารถให้เขียน element แทรกในภาษา JS ได้ สามารถใส่ตัวแปรแทรกไปพร้อมกับตัวอักษร (Text) ได้
    -props
      คือการกำหนดคุณสมบัติ "properties" เพื่อตกแต่งหรือระบุค่าเจาะจงให้กับ components
    -state
      ตัวเก็บข้อมูลของ Component ซึ่งถูกใช้ในการจัดการข้อมูล และตรวจสอบข้อมูลเมื่อมีการเปลี่ยนแปลง เพื่อที่แสดงผล
      โต้ตอบผู้ใช้งาน

    List Views
      React Native มี Component ที่ใช้ในการนำเสนอข้อมูลในรูปแบบ List of Data โดยใช้ผ่าน FlatList หรือ SectionList

      FlatList Component จะสามารถช่วยแสดงผลรายการของข้อมูลบางโครงสร้างข้อมูลที่ต้องการแสดงผล ซึ่งจะแสดงข้อมูลตามจำนวน item 
      และสามารถ update ให้ตลอดเวลา
      FlatList Component ต้องการ props 2 ตัว คือ Data และ renderItem
        data คือ แหล่งข้อมูลต้นทางของรายการที่จะแสดงผล 
        renderItem คือตัวที่นำเอา 1 รายการจาก list ของแหล่งข้อมูลนำมาแสดงผล
*/