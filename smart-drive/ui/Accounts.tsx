import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { FlatList } from "react-native-gesture-handler";

function AuthenticationScreen() {
  const [authMode, setAuthMode] = useState("initial");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {authMode === "initial" ? (
        <>
          <PrimaryButton onPress={() => setAuthMode("signIn")}>
            Sign In
          </PrimaryButton>
          <PrimaryButton onPress={() => setAuthMode("signUp")}>
            Sign Up
          </PrimaryButton>
        </>
      ) : authMode === "signIn" ? (
        <SignIn />
      ) : authMode === "signUp" ? (
        <SignUp />
      ) : null}
    </SafeAreaView>
  );
}

export default AuthenticationScreen;
