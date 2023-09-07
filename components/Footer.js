import { StyleSheet, Text, View } from "react-native";
import Padlock from "../assets/SVG/https.svg";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Padlock width="20" height="15" />
      <Text>Your personal messages are end-to-end encrypted</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    marginBottom: 80,
  },
});
