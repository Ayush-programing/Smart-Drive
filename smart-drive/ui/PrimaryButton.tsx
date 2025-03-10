import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

export default function PrimaryButton({
  children,
  onPress,
}: ButtonProps): JSX.Element {
  return (
    <Pressable
      style={styles.button}
      android_ripple={{ color: "#cccc" }}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#bfe1e3",
    padding: 10,
    borderRadius: 5,
    width: 200,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginLeft: 30,
  },
  text: {
    fontWeight: "bold",
  },
});
