import { observer } from "mobx-react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  ImageBackground,
} from "react-native";

//@ts-ignore
import Logo from "../assets/logo.svg";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useMst } from "../state/RootModel";

import LinearGradient from "react-native-linear-gradient";

export const LoginScreen = observer(({ navigation }) => {
  const {
    loginForm: {
      setEmail,
      setPassword,
      submitLogin,
      password,
      email,
      getCombinedReports
    },
  } = useMst();
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/login-bg.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Logo style={styles.logo} />

          <Text style={styles.titleText}>Welcome to our field report app.</Text>

          <Text style={styles.baseText}>
            Enter your email address and password to access your account.
          </Text>

          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            placeholder="Password"
          />

          <View
            onTouchEnd={() => {
              console.log("logging");
              submitLogin(email, password)
                .then(() => {
                  console.log("getting");
                  getCombinedReports().then(() => {
                    navigation.navigate("Reports");
                  });
                })
                .catch((e) => {
                  console.log(e);
                });
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#5B70B8", "#7360B8"]}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonText}>Login</Text>
            </LinearGradient>
          </View>

          {/* <Button onPress={() => {}} title="Contact us" color="#745FB8" /> */}
          {/* <GradientButton text="Purple Violet" width='90%' purpleViolet impact /> */}
        </View>
      </ImageBackground>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  logo: {
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 281,
    width: "100%",
  },
  titleText: {
    fontSize: 40,
    lineHeight: 48,
    fontFamily: "AcuminPro-Bold",
    letterSpacing: -0.41,
    marginBottom: 10,
    marginTop: 88,
  },
  linearGradient: {
    marginTop: 31,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    flex: 1,
  },
  buttonText: {
    fontSize: 17,
    textAlign: "center",
    fontFamily: "AcuminPro-Bold",
    paddingTop: 18,
    paddingBottom: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  baseText: {
    fontFamily: "AcuminPro-Light",
    fontSize: 20,
    marginBottom: 40,
    letterSpacing: 0.38,
  },
  input: {
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D3D9EB",
    padding: 12,
    marginBottom: 8,
  },

  link: {
    color: "#745FB8",
  },
});
