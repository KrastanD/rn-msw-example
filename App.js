import { LoginForm } from "./LoginForm";
import { server } from "./mocks/devServer";
import "react-native-url-polyfill/auto";
import Constants from "expo-constants";
import StorybookEntrypoint from "./.storybook/index";

export default function App() {
  server.listen();
  if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
    return <StorybookEntrypoint />;
  }
  return <LoginForm />;
}
