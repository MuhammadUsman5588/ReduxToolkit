import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import store from "./redux/store";
import SplashScreen from "./screens/SplashScreen";
// import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import CartScreen from "./redux/slices/CartScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: true }}>
                    <Stack.Screen name="Splash" component={SplashScreen} />
                    {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
                    <Stack.Screen name="CartScreen" component={CartScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}