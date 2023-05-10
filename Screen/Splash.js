import { useNavigation } from '@react-navigation/native';
import React,{useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Splash = (props) => {

    const navigation = useNavigation()

    // useEffect(()=>{
    //   setInterval(()=>{

    //    navigation.replace("Login")

    //   },2000)   
    // })

    useEffect(()=>{
      setTimeout(()=>{

        navigation.navigate("Login")

      },2000)
    })

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo_1.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome To My App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDEEDC',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Splash;




