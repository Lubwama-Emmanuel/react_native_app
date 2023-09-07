import { View, StyleSheet, ScrollView } from "react-native";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Message from "./components/Message";

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.chatCon}>
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
        </ScrollView>
      </View>
      <Message />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  header: {
    flex: 2,
  },
  chatCon: {
    flex: 8,
  },
});
