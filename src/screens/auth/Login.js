import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  StatusBar
} from "react-native";

import { Touchable } from "../../components";
import Logo from "../../assets/logo.png";

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#8dc342"} barStyle="light-content" />
        <View style={styles.head}>
          <Image source={Logo} />
          <Text style={styles.subtitle}>به منتا‌ما خوش آمدید</Text>
        </View>
        <View style={styles.block}>
          <View style={styles.title}>
            <Text style={styles.titleH1}>ورود</Text>
            <Text style={styles.titleH2}>
              برای ورود نام کاربری و رمز عبور خود را وارد کنید
            </Text>
          </View>
          <View style={styles.inputsBox}>
            <TextInput
              style={styles.input}
              placeholder={"نام کاربری یا شماره همراه"}
            />
            <TextInput
              style={styles.input}
              placeholder={"رمز عبور"}
              secureTextEntry
            />
          </View>
          <Touchable style={styles.loginBtn}>
            <Text style={styles.loginBtnTxt}>ورود</Text>
          </Touchable>
          <View style={styles.register}>
            <Text style={styles.haveAccount}>حساب کاربری ندارید؟</Text>
            <Text style={styles.registerText}> ثبت‌نام کنید</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8dc342"
  },
  head: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  subtitle: {
    fontFamily: "IRANYekanWeb",
    paddingTop: 16,
    fontSize: 14,
    color: "white"
  },
  block: {
    flex: 3,
    backgroundColor: "white",
    marginHorizontal: 10,
    paddingHorizontal: 30,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  title: {
    paddingTop: 30,
    alignItems: "center"
  },
  titleH1: {
    fontFamily: "IRANYekanWeb",
    fontSize: 20,
    color: "#8dc342"
  },
  titleH2: {
    paddingTop: 10,
    fontFamily: "IRANYekanWeb",
    fontSize: 12,
    color: "#676767",
    marginBottom: 30
  },
  inputsBox: {
    marginTop: 5,
    marginBottom: 20
  },
  input: {
    backgroundColor: "#f7f7f7",
    borderRadius: 5,
    height: 50,
    fontFamily: "IRANYekanWeb",
    textAlign: "right",
    marginVertical: 5,
    paddingRight: 15
  },
  loginBtn: {
    backgroundColor: "#8dc342",
    padding: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  loginBtnTxt: {
    color: "white",
    fontFamily: "IRANYekanWeb-bold",
    fontWeight: "bold",
    fontSize: 14
  },
  register: {
    paddingTop: 119,
    justifyContent: "center",
    flexDirection: "row-reverse"
  },
  haveAccount: {
    fontFamily: "IRANYekanWeb",
    color: "#bcbcbc",
    fontSize: 12
  },
  registerText: {
    fontFamily: "IRANYekanWeb-bold",
    color: "#8dc342",
    fontWeight: "700",
    fontSize: 12
  }
});

export default Login;