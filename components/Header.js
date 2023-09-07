import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Search from "../assets/SVG/search.svg";
import Dots from "../assets/SVG/dots-three-vertical.svg";
import Groups from "../assets/SVG/groups.svg";
import { useState } from "react";

const titles = [
  {
    id: 0,
    item: "chats",
  },
  {
    id: 1,
    item: "calls",
  },
  {
    id: 2,
    item: "status",
  },
];

export default function Header({ activeTitle, setActiveTitle }) {
  
  function handleChangetitle(newTitle) {
    setActiveTitle((current) => newTitle);
  }

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
          {titles.map((el) => (
            <TitleCon
              el={el}
              active={el.id === activeTitle}
              onTouch={handleChangetitle}
              key={el.id}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

function TitleCon({ el, active, onTouch }) {
  return (
    <View
      style={
        active ? [styles.titleCon, styles.titleConActive] : styles.titleCon
      }
    >
      <Pressable onPress={() => onTouch(el.id)}>
        <Text style={styles.title}>{el.item}</Text>
      </Pressable>
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
    justifyContent: "space-between",
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
  titleCon: {
    width: "30%",
    alignItems: "center",
  },
  titleConActive: {
    borderBottomWidth: 3,
    borderColor: "#f1f1f1",
  },
  title: {
    color: "#f1f1f1",
    fontSize: 20,
    textTransform: "uppercase",
    borderBottomWidth: 5,
    borderColor: "#f1f1f1",
  },
});
