import { StyleSheet, Text, View } from 'react-native';
import Home from './src/paginas/home/'
import Sobre from './src/paginas/sobre/'
import Contato from './src/paginas/contato'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

export default function App() {
  return (



  
      <NavigationContainer>

       <Tab.Navigator 
       initialRouteName='Sobre'
       screenOptions={{headerShown:false,
        tabBarActiveTintColor:"red",
        tabBarInactiveTintColor:'blue',
        tabBarStyle:{
          backgroundColor:"black"

        }

      }}

       >

          <Tab.Screen name = "Home" component={Home} 
          options = 
          {{tabBarIcon: ({color,size}) => {

          return   <Ionicons name="home-sharp" size={size} color={color}/>
          } 
          
          }}/>
          <Tab.Screen name ="Contato" component ={Contato}
           options = 
           {{tabBarIcon: ({color,size}) => {
 
           return   <AntDesign name="contacts" size={size} color={color} />
           } }}
          
          ></Tab.Screen>
          <Tab.Screen name = "Sobre" component={Sobre}
          
          options =
          {{
            tabBarIcon:({color,size}) => {
              return <Ionicons name="information-circle-outline" size={size} color={color} />
            }
          }}
          
          ></Tab.Screen>



        </Tab.Navigator>   

      </NavigationContainer>


   
  );
}


