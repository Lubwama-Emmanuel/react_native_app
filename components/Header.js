import { View, Text, Image, StyleSheet } from "react-native";
import Search from "../assets/SVG/search.svg";
import Dots from "../assets/SVG/dots-three-vertical.svg";
import Groups from "../assets/SVG/groups.svg";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Text style={styles.logoContent}>WhatsApp</Text>
        <View style={styles.icons}>
          <Search fill="#f1f1f1" />
          <Dots fill="#f1f1f1" />
        </View>
      </View>
      <View style={styles.sections}>
        <Groups fill="#f1f1f1" />
        <View style={styles.titles}>
          <View>
            <Text style={styles.title}>Chats</Text>
          </View>
          <View>
            <Text style={styles.title}>calls</Text>
          </View>
          <View>
            <Text style={styles.title}>status</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "green",
    height: 170,
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,

    flexDirection: "column",
    justifyContent: "space-around",
  },
  logo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoContent: {
    color: "#f1f1f1",
    fontSize: 30,
  },
  icons: {
    flexDirection: "row",
    gap: 10,
  },
  sections: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
    alignItems: "center",
  },
  titles: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    color: "#f1f1f1",
    fontSize: 20,
    textTransform: "uppercase",
    borderBottomWidth: 5,
    borderColor: "#f1f1f1",
  },
});
