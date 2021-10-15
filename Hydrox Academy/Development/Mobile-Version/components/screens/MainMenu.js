import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View} from 'react-native';
import logo from '../../assets/images/logo.png'
import backicon from '../../assets/icons/backicon.jpg'
import AddRank from '../buttons/addrank';
import Button1v1 from '../buttons/button1v1'
import Button3v3 from '../buttons/button3v3'
import SeeRank from '../buttons/seerank'
import { TouchableOpacity } from 'react-native-gesture-handler';


  export default ({history}) => (
  

    <View style={styles.header_logo}>
      <Image source={logo} style={{width:184, height:184, marginTop:40}} />
      <Text style={{fontSize:17 ,color: '#00ABAB'}}>Hydrox Academy Rocket League</Text>
      <View style={styles.container}>

      <View style={styles.buttons}>
       <TouchableOpacity onPress= {() => history.push("ADD_EscolhaRank")}>
       <AddRank text = "Adicionar Rank" />
       </TouchableOpacity>

       <TouchableOpacity onPress= {() => history.push("CHECK_EscolhaRank")}> 
       <SeeRank text = "Consultar Rank" />
       </TouchableOpacity>
      </View>
      
      <View style={{ height: 100, marginTop: 10 }}>
        <Text style={{color: '#00ABAB', fontSize: 18}}>Developed by Ricardo Oliveira.</Text>
      </View>
      </View>
      <StatusBar style="auto" />
    </View>

  );



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121E5E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_logo: {
    flex: 1,
    backgroundColor: '#121E5E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
    backgroundColor: '#121E5E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_back: {
    flex: 1,
    backgroundColor: '#121E5E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcenter: {
    flex: 1,
    color: '#707070',
    backgroundColor: '#121E5E',
    alignItems: 'center',
    marginBottom: 300,
    justifyContent: 'center',
  },
});