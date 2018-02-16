import { Navigation } from "react-native-navigation";

import { Login, Code } from "./auth";

export function registerScreens() {
  Navigation.registerComponent("auth.login", () => Login);
  Navigation.registerComponent("auth.code", () => Code);
}
