import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Logo from "./ui/Logo";
import Home from "./ui/Home";
import Services from "./ui/Services";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Trips from "./ui/Trips";
import Accounts from "./ui/Accounts";
import { AppContextProvider } from "./helpers/contexts/AppContexts";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Tabs = createBottomTabNavigator();

const queryClinet = new QueryClient();

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClinet}>
      <AppContextProvider>
        <NavigationContainer>
          <Tabs.Navigator screenOptions={{ headerShown: false }}>
            <Tabs.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
                tabBarActiveTintColor: "#000",
              }}
            />
            <Tabs.Screen
              name="Services"
              component={Services}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="cogs" size={size} color={color} />
                ),
                tabBarActiveTintColor: "#000",
              }}
            />
            <Tabs.Screen
              name="Trips"
              component={Trips}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="map-marker-path"
                    size={size}
                    color={color}
                  />
                ),
                tabBarActiveTintColor: "#000",
              }}
            />
            <Tabs.Screen
              name="Account"
              component={Accounts}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Feather name="user" size={size} color={color} />
                ),
                tabBarActiveTintColor: "#000",
              }}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      </AppContextProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({});
