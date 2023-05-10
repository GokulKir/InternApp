import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
    ScrollView,
  } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { ScreenStackHeaderSubview } from "react-native-screens";
  export default function Home({navigation}){

    const DATA = [
      {
        id : 1 ,
        Image : "path" ,


      }
    ]
    return (
        <View style={{backgroundColor:'#FDEEDC',}} >
          <ScrollView>
          <View style={styles.white}>
            <View style={{justifyContent:'center' , alignSelf:'center' , top:20}}>
            <Text style={{fontSize:16 , color:'#F1A661' , fontWeight:"500"}}>FROM YOUR PAST ORDER</Text>
            </View>
            <View style={{flexDirection:'row' , justifyContent:'space-evenly' , top:50 , padding:10}}>
            <Image style={{top:-25,padding:35,}}  source={require("../assets/Leftarrow.png")}  />

          
            <Image style={{right:30}}  source={require("../assets/Peanut.png")}  />
            <Image  style={{right:10}}  source={require("../assets/image2.png")}  />
            <Image  style={{right:-20}} source={require("../assets/image3.png")}  />

            <Image style={{top:28,marginLeft:20}}   source={require("../assets/Rightarrow.png")}  />

            </View>
          </View>

          <View style={{backgroundColor:'FDEEDC',}}>
            <View style={styles.lightorange}>
            <Image style={{top:20}}  source={require("../assets/Leftarrow.png")}  />
            <Image  style={{marginBottom:35,justifyContent:"center"}} source={require("../assets/image4.png")}  />
            <Image  style={{top:75,marginRight:20}} source={require("../assets/Rightarrow.png")}  />
            </View>
          </View>
          <View style={styles.orange}>
            <View style={{justifyContent:'center' , alignSelf:'center' , top:20}}>
            <Text style={{fontSize:16 , color:'#F1A661' , fontWeight:"500"}}>TRENDING NOW</Text>
            </View>
            <View style={{flexDirection:'row' , justifyContent:'space-evenly' , top:50 , padding:10}}>
            <Image style={{top:-25,padding:32}}  source={require("../assets/Leftarrow.png")}  />

          
            <Image style={{right:30}}  source={require("../assets/image5.png")}  />
            <Image  style={{right:10}}  source={require("../assets/image6.png")}  />
            <Image  style={{right:-20}} source={require("../assets/image7.png")}  />

            <Image style={{top:28,marginLeft:20}}   source={require("../assets/Rightarrow.png")}  />

            </View>
          </View>
          
          <View style={{backgroundColor:'FDEEDC',}}>
            <View style={styles.lightorange}>
            <Image style={{top:20}}  source={require("../assets/Leftarrow.png")}  />
            <Image  style={{marginBottom:35,justifyContent:"center"}} source={require("../assets/image8.png")}  />
            <Image  style={{top:75,marginRight:20}} source={require("../assets/Rightarrow.png")}  />
            </View>
          </View>
          <View style={styles.orange}>
            <View style={{justifyContent:'center' , alignSelf:'center' , top:20}}>
            <Text style={{fontSize:16 , color:'#F1A661' , fontWeight:"500"}}>RECOMMENDED</Text>
            </View>
            <View style={{flexDirection:'row' , justifyContent:'space-evenly' , top:50 , padding:10}}>
            <Image style={{top:-25,padding:32}}  source={require("../assets/Leftarrow.png")}  />

          
            <Image style={{right:30}}  source={require("../assets/image9.png")}  />
            <Image  style={{right:10}}  source={require("../assets/image10.png")}  />
            <Image  style={{right:-20}} source={require("../assets/image11.png")}  />

            <Image style={{top:28,marginLeft:20}}   source={require("../assets/Rightarrow.png")}  />

            </View>
          </View>
          <View style={{backgroundColor:'FDEEDC',}}>

          <View style={{justifyContent:'center' , alignSelf:'center'}}>
            <Text style={{fontSize:16 , color:'#F1A661',alignItems:"center" , top:15  }}>TOP SELECTION</Text>
            </View>
            <View style={styles.lightorange}>
              
             
          
            <Image  style={{right:80,marginTop:38 , marginLeft:responsiveWidth(28)}} source={require("../assets/image12.png")}  />
            <Image  style={{right:50,marginTop:38}} source={require("../assets/image13.png")}  />
          
            </View>
          </View>
          <View style={styles.white}>
            <View style={{justifyContent:'center' , alignSelf:'center' , top:20}}>
            <Text style={{fontSize:16 , color:'#F1A661' , fontWeight:"500"}}>FEATURED PRODUCT</Text>
            </View>
            <View style={{flexDirection:'row' , justifyContent:'space-evenly' , top:50 , padding:10}}>
          

          
            <Image style={{right:10,marginBottom:30,alignItems:"center"}}  source={require("../assets/image14.png")}  />
            <Image  style={{right:10}}  source={require("../assets/image15.png")}  />
           

          

            </View>
          </View>
          {/* <View style={{backgroundColor:'FDEEDC',}}>
            <View style={styles.lightorange}>
              

            <Text style={{fontSize:16 , color:'#F1A661',justifyContent:"center",alignItems:"center",  marginTop: 15,}}>DISCOUNT FOR YOU</Text>
          
            <Image  style={{right:80,marginTop:38}} source={require("../assets/images/image16.png")}  />
            <Image  style={{right:50,marginTop:38}} source={require("../assets/images/image17.png")}  />
          
            </View>
          </View> */}
          <View style={{backgroundColor:'#FDEEDC',}}>

<View style={{justifyContent:'center' , alignSelf:'center'}}>
  <Text style={{fontSize:16 , color:'#F1A661',alignItems:"center" , top:15  }}>DISCOUNT FOR YOU</Text>
  </View>
  <View style={styles.lightorange}>
    
   

  <Image  style={{right:80,marginTop:38 , marginLeft:responsiveWidth(28)}} source={require("../assets/image16.png")}  />
  <Image  style={{right:50,marginTop:38}} source={require("../assets/image17.png")}  />

  </View>
</View>
          <View style={styles.white}>
            <View style={{justifyContent:'center' , alignSelf:'center' , top:20}}>
            <Text style={{fontSize:16 , color:'#F1A661' , fontWeight:"500"}}>BEST QUALITY</Text>
            </View>
            <View style={{flexDirection:'row' , justifyContent:'space-evenly' , top:50 , padding:10}}>
          

          
            <Image style={{right:10,marginBottom:30,alignItems:"center"}}  source={require("../assets/image18.png")}  />
            <Image  style={{right:10}}  source={require("../assets/image19.png")}  />
           

          

            </View>
          </View>
          
          

          
          </ScrollView>

          <TouchableOpacity style={styles.floatingButton}>
           <View  style={{width : responsiveWidth(90) , height: 50 , backgroundColor:'#FFD8A9' , borderRadius:100 , elevation:3  }} >
            <View>
              
            <Image style={{marginTop:18,marginLeft:300}}   source={require("../assets/sendbutton.png")}  />
            </View>
          </View>

          </TouchableOpacity>

          {/* <View style={{ marginTop:20 , alignSelf:'center'  , top:10}}>
          
          <View  style={{width : responsiveWidth(90) , height: 50 , backgroundColor:'#FFD8A9' , borderRadius:100 , elevation:3  }} >
            <View>
              
            <Image style={{marginTop:18,marginLeft:300}}   source={require("../assets/images/sendbutton.png")}  />
            </View>
              


          </View>
                    

          </View> */}
        </View> 
      );
    }
    const styles = StyleSheet.create({
      white: {
        backgroundColor: 'white',
        
        height:250,
        marginTop: 15,
        borderBottomLeftRadius:10 , 
        borderBottomRightRadius:10,
        
    

      },
      lightorange: {
        backgroundColor: 'lightorange',
        
        height:250,
        marginTop: 15,
        borderBottomLeftRadius:10 , 
        borderBottomRightRadius:10,
        flexDirection:'row',
        justifyContent:"space-evenly"

      },
      orange: {
        backgroundColor: 'white',
        
        height:250,
        marginTop: 15,
        borderBottomLeftRadius:10 , 
        borderBottomRightRadius:10
    

      },
      lightorange: {
        backgroundColor: 'lightorange',
        justifyContent:'space-between' ,
        height:250,
        marginTop: 15,
        borderBottomLeftRadius:10 , 
        borderBottomRightRadius:10,
        flexDirection:'row',
        justifyContent:"space-evenly"

      },
      floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: responsiveWidth(90),
        height: responsiveWidth(9),
        borderRadius: 30,
        backgroundColor: '#F1A661',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5, // for android shadow effect
        shadowColor: '#000', // for ios shadow effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius: 200
      },
        

    })
  