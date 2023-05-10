
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
  const [Fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [Dob, setDob]=useState("");
  const [Gender, setGender] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");

  const navigation = useNavigation()

  return (
    <View style={styles.container}> 
      <Text style={[styles.bold,styles.size]}>CREATE AN ACCOUNT</Text>
    
      <View
      // style={{flexDirection:"row"}}
       style={styles.inputView}
       >
       <Image style={styles.icon} source={require("../assets/Fullname.png")}  />  
        <TextInput
          style={styles.TextInput}
          placeholder="Full name*"
          placeholderTextColor="#003f5c"
          onChangeText={(Fullname) => setFullname(Fullname)}
        /> 
      </View> 
      <View style={styles.inputView}>
      <Image style={styles.icon} source={require("../assets/phone-android.png")}  />  
        <TextInput
          style={styles.TextInput}
          placeholder="Phonenumber*"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(Phonenumber) => setPhonenumber(Phonenumber)}
        /> 
      </View> 
      <View style={styles.inputView}>
      <Image style={styles.icon} source={require("../assets/Dob.png")}  />  
        <TextInput
          style={styles.TextInput}
          placeholder="Dob*"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(Dob) => setDob(Dob)}
        /> 
      </View> 
      <View style={styles.inputView}>
      <Image style={styles.icon} source={require("../assets/Gender.png")}  />  
        <TextInput
          style={styles.TextInput}
          placeholder="Gender*"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(Gender) => setGender(Gender)}
        /> 
      </View> 
      <View style={styles.inputView}>
      <Image style={styles.icon} source={require("../assets/Email.png")}  />  
        <TextInput
          style={styles.TextInput}
          placeholder="Email*"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(Email) => setEmail(Email)}
        /> 
      </View> 
      <View style={styles.inputView}>
      <Image style={styles.icon} source={require("../assets/password.png")}  />  
        <TextInput
          style={styles.TextInput}
          placeholder="Password*"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(Password) => setPassword(Password)}
        /> 
      </View> 
      <View style={styles.inputView}>
      <Image style={styles.icon} source={require("../assets/password.png")}  />  
        <TextInput
          style={styles.TextInput}
          placeholder="Confirmpassword*"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(Confirmpassword) => setConfirmpassword(Confirmpassword)}
        /> 
      </View> 
      <TouchableOpacity style={{flex : 1}}>
        <Text style={styles.account_button} onPress={() =>{
          
           navigation.navigate("Nextpage")
      }} >Next page</Text> 
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
    backgroundColor: "red",
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