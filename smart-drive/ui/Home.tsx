import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import Logo from "./Logo";
import Analytics from "./Analytics";
import PrimaryButton from "./PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import AddDriver from "./AddDriver";
import { useContext } from "react";
import { AppContext } from "../helpers/contexts/AppContexts";

interface Props {
  navigation: any;
}

export default function Home({ navigation }: Props): JSX.Element {
  return (
    <SafeAreaView>
      <Logo />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Analytics />
      </View>
      <Text style={styles.text}>Start driving Smart...</Text>
      <PrimaryButton onPress={() => navigation.navigate("Account")}>
        Add A Driver
        <Text>
          <Ionicons name="add" />
        </Text>
      </PrimaryButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 20,
    fontWeight: "bold",
  },
});
