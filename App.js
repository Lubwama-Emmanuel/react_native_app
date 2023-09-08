import { View, StyleSheet, ScrollView } from "react-native";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Message from "./components/Message";
import Footer from "./components/Footer";
import { useState } from "react";
import Calls from "./components/Calls";
import Status from "./components/Status";

export default function App() {
  const [activeTitle, setActiveTitle] = useState(0);

  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Header setActiveTitle={setActiveTitle} activeTitle={activeTitle} />
      </View>
      <View style={styles.chatCon}>
        {activeTitle === 0 && (
          <ScrollView>
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />

            <Footer />
          </ScrollView>
        )}
        {activeTitle === 1 && <Calls />}
        {activeTitle === 2 && <Status />}
      </View>
      <Message />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flex: 2,
  },
  chatCon: {
    flex: 8,
  },
});
