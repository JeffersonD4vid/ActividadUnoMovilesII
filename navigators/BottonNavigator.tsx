import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ClimaScreen from "../screens/ClimaScreen";
import LoginScreen from "../screens/LoginScreen";
import ListaScreen from "../screens/ListaScreen";
import PersonajesScreen from "../screens/PersonajesScreen";
import WelcomeScreems from "../screens/WelcomeScreens";

const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Login" component={LoginScreen}/>
            <Tab.Screen name="Clima" component={ClimaScreen}/>
            <Tab.Screen name="Lista" component={ListaScreen}/>
            <Tab.Screen name="Personajes" component={PersonajesScreen}/>
            <Tab.Screen name="Welcome" component={WelcomeScreems}/>
        </Tab.Navigator>
    )
}

export default function NavegadorBottom(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}