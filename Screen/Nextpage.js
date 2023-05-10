import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
export default function App({navigation}) {
  const [Shippingaddress, setShippingaddress] = useState("");
  const [Billingaddress, setBillingaddress] = useState("");
  const [Location, setLocation]=useState("");
  
  return (
    <View style={styles.container}> 
      <Text style={[styles.bold,styles.size]}>CREATE AN ACCOUNT</Text>
      <View
      // style={{flexDirection:"row"}}
       style={styles.inputView}
       >
       <Image style={styles.icon} source={require("../assets/Shippingaddress.png")}  />  
        <TextInput
          style={styles.TextInput}
          placeholder="Shipping address"
          placeholderTextColor="#003f5c"
          onChangeText={(Shippingaddress) => setShippingaddress(Shippingaddress)}
        /> 
      </View> 
      <View style={styles.inputView}>
      <Image style={styles.icon} source={require("../assets/Billingaddress.png")}  />  
        <TextInput
          style={styles.TextInput}
          placeholder="Billing address"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(Billingaddress) => setBillingaddress(Billingaddress)}
        /> 
      </View> 
      <View style={styles.inputView}>
      <Image style={styles.icon} source={require("../assets/Location.png")}  />  
        <TextInput
          style={styles.TextInput}
          placeholder="Location"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(Location) => setDob(Location)}
        /> 
      </View> 


      
      
      
      <TouchableOpacity>
        <Text style={styles.account_button} onPress={() =>{
           navigation.navigate("Signup")
      }} ></Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() =>{
        navigation.navigate("Login")
      }} >
        <Text style={styles.loginText}>Create</Text> 
      </TouchableOpacity> 
      
 
 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDEEDC",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 100,
    width: 120,
    height:120,
  },
  inputView: {
    backgroundColor: '#F1A661',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  TextInput: {
    width: '75%',
    marginVertical: 10,
    color: 'black',
    fontSize: 15,
    height: 40,
  },
  account_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: 100,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#F1A661",
  },
  bold: {
    fontWeight: "bold",
    color: "black",


  },
  size:{
    fontSize: 20,
    textAlignVertical: "top",
    marginBottom: 65

  },
  icon: {
    width: 25,
    height: 25,
  },
});