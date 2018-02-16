textAlign: "center";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  PixelRatio
} from "react-native";
import NumbersApi from "../../api/numbers";
import Back from "../../assets/back.svg";
import { Touchable, ProgressBar } from "../../components";
class Code extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };
  state = { number: "", isLoading: false, timeRemain: 5, fullTime: 5 };
  inputRefs = {};
  constructor(props) {
    super(props);
  }

  setChar(i, t) {
    this.setState(p => {
      return {
        ...p,
        number: `${p.number.substr(0, i)}${t}${p.number.substr(i + 1)}`
      };
    });
  }

  checkWithServer() {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
      // this.props.navigator.push({
      //   screen: "auth.code"
      // });
    }, 1000);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(p => {
        if (p.timeRemain === 0) {
          clearInterval(this.interval);
        } else
          return {
            ...p,
            timeRemain: p.timeRemain - 1
          };
      });
    }, 1000);
  }

  textInput(i) {
    return (
      <TextInput
        style={styles.digit}
        onChangeText={text => {
          this.setChar(i, text.substr(-1));
          if (!text) {
            if (this.inputRefs[i - 1]) this.inputRefs[i - 1].focus();
          } else {
            console.log("a", this.state.number.length);
            if (this.inputRefs[this.state.number.length + 1])
              this.inputRefs[this.state.number.length + 1].focus();
            else this.checkWithServer();
          }
        }}
        key={i}
        value={NumbersApi.toPersianDigits(this.state.number.substr(i, 1))}
        keyboardType={"number-pad"}
        editable={!this.state.isLoading}
        selectTextOnFocus={!this.state.isLoadi}
        ref={r => (this.inputRefs[i] = r)}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.back}>
          <Image source={Back} style={styles.backImg} />
        </View>
        <View style={styles.head}>
          <Text style={styles.textH1}>لطفا شکیبا باشید ...</Text>
          <Text style={styles.textH2}>
            لطفا کد دریافتی را برای ادامه بنویسید.
          </Text>
        </View>
        <View style={styles.digitNumber}>
          <View style={styles.digits}>
            {[...Array(5).keys()].map(i => {
              return this.textInput(i);
            })}
          </View>
        </View>
        <View style={styles.timeRemain}>
          <Text style={styles.remainText2}>
            {NumbersApi.toTime(this.state.timeRemain)}{" "}
          </Text>
          <Text style={styles.remainText1}> از </Text>
          <Text style={styles.remainText1}>
            {NumbersApi.toTime(this.state.fullTime)}{" "}
          </Text>
          <Text style={styles.remainText1}> مانده </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <ProgressBar
            percent={100 - this.state.timeRemain / this.state.fullTime * 100}
          />
        </View>
        <View style={styles.retryBlock}>
          <Touchable
            style={[
              styles.retryBtn,
              {
                borderColor: !this.state.timeRemain ? "#8dc342" : "#ddd"
              }
            ]}
            activeOpacity={this.state.timeRemain ? 1 : 0.4}
          >
            <Text
              style={[
                styles.retryText,
                {
                  color: !this.state.timeRemain ? "#8dc342" : "#ddd"
                }
              ]}
            >
              ارسال دوباره
            </Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#2c3e50"
  },
  back: {
    position: "absolute",
    width: 12,
    height: 21,
    left: 10,
    top: 20
  },
  backImg: {
    width: 12,
    height: 21
  },
  head: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  textH1: {
    fontFamily: "IRANYekanWeb-bold",
    color: "#676767",
    fontWeight: "400",
    fontSize: 20,
    marginBottom: 10
  },
  textH2: {
    fontFamily: "IRANYekanWeb",
    color: "#676767",
    fontSize: 12
  },
  digitNumber: {
    flex: 10
  },
  digits: {
    flexDirection: "row",
    paddingHorizontal: 67
  },
  digit: {
    fontFamily: "IRANYekanWeb",
    borderColor: "#d8d8d8",
    borderBottomWidth: 1,
    marginHorizontal: 5,
    textAlign: "center",
    fontSize: 20,
    height: 40,
    width: 40
  },
  timeRemain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 20,
    flexDirection: "row-reverse"
  },
  remainText1: {
    fontFamily: "IRANYekanWeb",
    color: "#bcbcbc"
  },
  remainText2: {
    fontFamily: "IRANYekanWeb",
    color: "#676767"
  },
  retryBlock: { paddingHorizontal: 45, paddingBottom: 30 },
  retryBtn: {
    borderWidth: 1 / PixelRatio.get(),
    alignItems: "center",
    padding: 16,
    borderRadius: 5
  },
  retryText: {
    fontFamily: "IRANYekanWeb",
    color: "#8dc342"
  }
});

export default Code;
