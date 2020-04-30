import { observer } from "mobx-react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Linking,
  Alert,
} from "react-native";

//@ts-ignore
import Icon from "../assets/report-icon.svg";
import React, { useCallback } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useMst } from "../state/RootModel";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Reports } from "./Reports";


const telephone = "tel:(866) 681- POOL (7665)";
const website = "dolphinpoolsservies.com";
const mail = "mailto:dolphinpoolsservies.com";
const google = "https://goo.gl/maps/eJreTxA6S532";


const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};




export const Contact = observer(({ navigation }) => {
  const {
    loginForm: { setEmail, setPassword },
  } = useMst();
  return (
    
    <View style={styles.container}>
    
  
     <View style={styles.item}> 
        <Text>Working Hours</Text>
        <Text>Monday -Saturday 08:00 - 06:00</Text>
     </View>
     <View style={styles.item}> 
        <Text>Telephone</Text>
        <OpenURLButton url={telephone}>(866) 681- POOL (7665)</OpenURLButton>
     </View>

     <View style={styles.item}> 
        <Text>Website</Text>
        <OpenURLButton url={website}>dolphinpoolsservies.com</OpenURLButton>
     </View>

     <View style={styles.item}> 
        <Text>Mail</Text>
        <OpenURLButton url={mail}>info@dolphinpoolsservies.com</OpenURLButton>
     </View>

     <View style={styles.item}> 
        <Text>Mail</Text>
        <OpenURLButton url={google}>P.O. BOX 16002  Alexandria VA 22302</OpenURLButton>
     </View>
  

  </View>

  );
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#EFEFF4",
  },
  item: {
    flexDirection: "column",
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 15,
    paddingRight: 14,
    borderColor: "#D3D9EB",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 15,
    fontFamily: "AcuminPro-Bold",
    marginBottom: 13,
  },
  icon: {
      marginRight: 30,
  },
  date: {
      flexDirection: "column",
      marginRight: "auto",
  },
  dateText: {
    fontFamily: "AcuminPro-Bold",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    color: "#231D38",
  },
  timeText: {
    fontFamily: "AcuminPro-Light",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: "#231D38",
    opacity: .4,
  },
  button: {
      color: "#745FB8",
      backgroundColor: "#F6F6F6",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 17,
      fontFamily: "AcuminPro-Bold",
      fontSize: 15,
      overflow: "hidden",
  },
  link: {

  },
});