import { Navigation } from "react-native-navigation";

import { Login, Register } from "./auth";

export function registerScreens() {
  Navigation.registerComponent("auth.login", () => Login);
  Navigation.registerComponent("auth.register", () => Register);
}
