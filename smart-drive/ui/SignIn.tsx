import { Alert, SafeAreaView, Text, TextInput, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { useContext, useState } from "react";
import { AppContext } from "../helpers/contexts/AppContexts";
import addDriver from "../helpers/Api/apiDrivers";
import supabase from "../helpers/Api/supabase";
import Logo from "./Logo";

function SignIn() {
  const { email, password, dispatch } = useContext(AppContext);

  const handleSignIn = async () => {
    console.log("Attempting to sign in with username:", email);
    console.log("Attempting to sign in with password:", password);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      console.log("Sign-in response:", data);
      console.log("Sign-in error:", error);

      if (error) {
      } else {
        Alert.alert("Sign In Successful", "You are now signed in", [
          { text: "Ok" },
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Logo />
      <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft: 30 }}>
        Sign In
      </Text>
      <TextInput
        style={{
          backgroundColor: "#ccc",
          padding: 20,
          borderRadius: 10,
          margin: 30,
          width: 300,
          height: 70,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          borderColor: "#000",
          borderWidth: 1,
        }}
        placeholder="Your Email"
        onChangeText={(e) => dispatch({ type: "setEmail", payload: e })}
      />
      <TextInput
        style={{
          backgroundColor: "#ccc",
          padding: 20,
          borderRadius: 10,
          margin: 30,
          width: 300,
          height: 70,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          borderColor: "#000",
          borderWidth: 1,
        }}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(e) => dispatch({ type: "setPassword", payload: e })}
      />
      <View></View>
      <PrimaryButton onPress={handleSignIn}>Sign In</PrimaryButton>
    </SafeAreaView>
  );
}

export default SignIn;
