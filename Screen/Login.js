
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
export default function App() {
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const navigation=useNavigation()


  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/Logo_1.png")} /> 
      <Text style={[styles.bold,styles.size]}>USER LOGIN</Text>
      <View
      // style={{flexDirection:"row"}}
       style={styles.inputView}
       >
       <Image style={styles.icon} source={require("../assets/phone-android.png")}  />  
        <TextInput
          style={styles.TextInput}
          placeholder="Enter phone number*"
          placeholderTextColor="#003f5c"
          onChangeText={(phonenumber) => setPhonenumber(phonenumber)}
        /> 
      </View> 
      <View style={styles.inputView}>
      <Image style={styles.icon} source={require("../assets/password.png")}  />  
        <TextInput
          style={styles.TextInput}
          placeholder="Password/OTP*"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.account_button} onPress={() =>{
           navigation.navigate("Signup")
      }} >Create an account</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>{
        navigation.navigate("MyDrawer")
      }}>
        <Text style={styles.loginText}>LOGIN</Text> 
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