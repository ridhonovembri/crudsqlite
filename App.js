import { StyleSheet, Text, View, StatusBar } from "react-native";
import TodoScreen from "./screens/TodoScreen";
import Sandbox from "./components/Sandbox";
import SandboxScreen from "./screens/SandboxScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <TodoScreen />
      {/* <Sandbox /> */}
      {/* <SandboxScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
});
