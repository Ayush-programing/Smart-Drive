import { Alert, SafeAreaView, Text, TextInput } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { useContext, useState } from "react";
import { AppContext } from "../helpers/contexts/AppContexts";
import supabase from "../helpers/api/supabase";

function SignUp(): JSX.Element {
  const { email, password, dispatch } = useContext(AppContext);

  const handleAddDriver = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        Alert.alert("Message", `${error.message}`, [{ text: "OK" }]);
      } else {
        Alert.alert("Done!", "Account Created!", [{ text: "ok" }]);
      }
    } catch (error) {
      Alert.alert("Error!", `${error}`, [{ text: "OK" }]);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Add A Driver</Text>
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
        onChangeText={(e) => dispatch({ type: "setPassword", payload: e })}
        textContentType="password"
      />

      <PrimaryButton onPress={handleAddDriver}>Add Driver</PrimaryButton>
    </SafeAreaView>
  );
}

export default SignUp;
