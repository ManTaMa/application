import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: "auth.login",
    title: "Login",
    navigatorStyle: {
      navBarHidden: true
    }
  }
});
