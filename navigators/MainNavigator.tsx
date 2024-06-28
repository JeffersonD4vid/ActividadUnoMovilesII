import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '../screens/LoginScreen';
import ClimaScreen from "../screens/ClimaScreen";
import ListaScreen from "../screens/ListaScreen";
import PersonajesScreen from "../screens/PersonajesScreen";
import WelcomeScreems from "../screens/WelcomeScreens";
import Lista2Screen from "../screens/Lista2Screen";
import Personaje2Screen from "../screens/Personaje2Screen";
import Welcome2Screen from "../screens/Welcome2Screen";


//Botton tab
const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator>    
            <Tab.Screen name="Clima" component={ClimaScreen}/>
            <Tab.Screen name="Top" component={MyTop} options={{headerShown:false}}/>
            <Tab.Screen name="Top2" component={MyTop2} options={{headerShown:false}}/>
            <Tab.Screen name="Top3" component={MyTop3} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}

//Stack

const Stack = createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="BottonTab" component={MyTabs}/>
        </Stack.Navigator>
    )
}


///////////////////////////////////////////////
//TOP-TAB

const Top = createMaterialTopTabNavigator()
function MyTop(){
    return (
        <Top.Navigator>
            <Top.Screen name="Lista" component={ListaScreen}/>
            <Top.Screen  name="Lista2" component={Lista2Screen}/>
        </Top.Navigator>
    )
}

const Top2 = createMaterialTopTabNavigator()
function MyTop2(){
    return (
        <Top.Navigator>
            <Top.Screen name="Personaje" component={PersonajesScreen}/>
            <Top.Screen  name="Personaje2" component={Personaje2Screen}/>
        </Top.Navigator>
    )
}


const Tab3 = createMaterialTopTabNavigator()
function MyTop3(){
    return(
        <Top.Navigator >
            <Top.Screen name="Welcome" component={WelcomeScreems}/>
            <Top.Screen name="Welcome2" component={Welcome2Screen}/>
        </Top.Navigator>
    )
}




export default function Navigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}