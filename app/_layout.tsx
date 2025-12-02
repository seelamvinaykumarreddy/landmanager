import { Stack } from "expo-router";
import { LogBox } from "react-native";
import "./global.css";

LogBox.ignoreLogs(["SafeAreaView has been deprecated"]);

export default function RootLayout() {
  return <Stack />;
}
