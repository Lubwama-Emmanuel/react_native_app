import { Image, StyleSheet, View } from "react-native";
import SvgMsg from "../assets/SVG/message.svg";

export default function Message() {
  return (
    <View style={styles.sendMsg}>
      <SvgMsg width="30" height="30" fill="#f1f1f1" />
    </View>
  );
}

const styles = StyleSheet.create({
  sendMsg: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
    backgroundColor: "green",
    padding: 15,
    borderRadius: 200,
  },
});
