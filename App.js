import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/components/navigation/Navigator";
import { Provider as PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
