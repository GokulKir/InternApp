import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navbar from './Screen/component/navbar';
const Drawer = createDrawerNavigator();


import Signup from './Screen/Signup';
import Splash from './Screen/Splash';
import Login from './Screen/Login';
import Nextpage from './Screen/Nextpage';
import Home from './Screen/Home';
// import Navbar from './Screen/component/navbar';
import Cart from './Screen/Drawer/Cart';
import Feedback from './Screen/Drawer/Feedback' ;
import Logout from './Screen/Drawer/Logout';
import Notification from './Screen/Drawer/Notification';
import Offerzone from './Screen/Drawer/Offerzone';
import Order from './Screen/Drawer/Order';


const Stack = createStackNavigator();



function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen  name="Signup" component={Signup} />
      <Stack.Screen  name="Nextpage" component={Nextpage} />
     <Stack.Screen name="MyDrawer" component={MyDrawer} options={{headerShown : false }}/>
    </Stack.Navigator>
  );
}
function MyDrawer(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen  name="Home" component={Home} options={{ headerLeft: ()=> null, header:() =><Navbar/>}}/>
      <Drawer.Screen name="Cart" component={Cart}/>
      <Drawer.Screen name="Feedback" component={Feedback}/>
      <Drawer.Screen name="Logout" component={Logout}/>
      <Drawer.Screen name="Notification" component={Notification}/>
      <Drawer.Screen name="Offerzone" component={Offerzone}/>
      <Drawer.Screen name="Order" component={Order}/>


    </Drawer.Navigator>
  )
} 


export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
