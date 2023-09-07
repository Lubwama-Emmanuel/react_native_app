import { Image, StyleSheet, Text, View } from "react-native";

export default function Chat() {
  return (
    <View style={styles.chat}>
      <View>
        <Image style={styles.dp} source={require("../assets/serah.jpeg")} />
      </View>
      <View style={styles.messageCon}>
        <View style={styles.nameCon}>
          <Text style={styles.name}>Alinda Serah</Text>
          <Text style={styles.message}>Hello Rex!</Text>
        </View>
        <View style={styles.timeCon}>
          <Text style={styles.time}>14:24</Text>
          <View style={styles.countCon}>
            <Text style={styles.count}>1</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chat: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  dp: {
    width: 60,
    height: 60,
    borderRadius: 200,
  },
  messageCon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  nameCon: {
    gap: 6,
  },
  name: {
    fontSize: 20,
  },
  message: {
    color: "grey",
  },
  timeCon: {
    alignItems: "center",
  },
  time: {
    color: "green",
  },
  countCon: {
    backgroundColor: "green",
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 200,
  },
  count: {
    color: "#f1f1f1",
  },
});
