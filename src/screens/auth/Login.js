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
import Google from "../../assets/google.png";
import Telegram from "../../assets/google.png";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
      this.props.navigator.push({
        screen: "auth.code"
      });
    }, 1000);
  }

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
            <TextInput style={styles.input} placeholder={"شماره همراه"} />
          </View>
          <Touchable
            style={styles.loginBtn}
            onPress={this.login}
            isLoading={this.state.isLoading}
          >
            <Text style={styles.loginBtnTxt}>ورود</Text>
          </Touchable>
          <View style={styles.login3rd}>
            <View style={styles.login3rdBtn}>
              <Image source={Google} />
              <Text style={styles.login3rdText}>ورود با گوگل</Text>
            </View>
            <View style={styles.login3rdHr} />
            <View style={styles.login3rdBtn}>
              <Image source={Telegram} />
              <Text style={styles.login3rdText}>ورود با تلگرام</Text>
            </View>
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
    flex: 1,
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
  login3rd: {
    flex: 1,
    flexDirection: "row-reverse"
  },
  login3rdBtn: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "center"
  },
  login3rdText: {
    fontFamily: "IRANYekanWeb",
    fontSize: 14,
    paddingRight: 6,
    fontWeight: "400",
    color: "#676767"
  },
  login3rdHr: {
    height: 18,
    borderRightWidth: 1,
    borderColor: "#ebebeb",
    marginVertical: 26
  }
});

export default Login;
