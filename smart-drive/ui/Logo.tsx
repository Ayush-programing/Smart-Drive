import { View, Text } from "react-native";

export default function Logo() {
  return (
    <View
      style={{
        padding: 10,
        margin: 25,
        justifyContent: "center",
        marginBottom: 50,
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Smart Drive</Text>
      <Text style={{ fontSize: 15 }}>Drive Smart Save Smart</Text>
    </View>
  );
}
