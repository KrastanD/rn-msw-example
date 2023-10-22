import { LoginForm } from "./LoginForm";
import { server } from "./mocks/devServer";
import "react-native-url-polyfill/auto";

export default function App() {
  server.listen();
  return <LoginForm />;
}
