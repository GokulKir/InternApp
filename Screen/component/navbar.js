import React from 'react'
import { View, Text, Image, StyleSheet} from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
export default function Navbar() {
    return (
        < View style={styles.container}>
            <View style={styles.Navbar}>
                <View>
                    <TouchableOpacity>
                    <Image style={{height : responsiveHeight(4) , width : responsiveWidth(5)}} source={require('../../assets/Me.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.bold}>HOME</Text>
                <View style={styles.iconcontainer}> 
                    <Image style={{height : responsiveHeight(3) , width :responsiveWidth(5)}}  source={require("../../assets/User.png")} />
                    <Image source={require("../../assets/Cart.png")} />
                    <Image source={require("../../assets/Notification.png")} />
                    <Image source={require("../../assets/Filter.png")} />

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20 ,
        backgroundColor: "#FDEEDC",
        paddingTop: 50,

    }, 
    Navbar: {
      
        height : responsiveHeight(1) ,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
      

        


    },
    iconcontainer: {
        backgroundColor:"#FDEEDC",
     
        flexDirection:'row',
        gap: 10



    },
    bold: {
        fontWeight:'bold',
        color:'#F1A661',
        fontSize: 20,

    }


}
)
