import { observer } from "mobx-react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SectionList,
  Button
} from "react-native";

import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useMst } from "../state/RootModel";

import IconYes from "../assets/yes.svg";
import IconNo from "../assets/no.svg";

export const ServiceReport = observer(({ navigation }) => {
  const {
    loginForm: { setEmail, setPassword }
  } = useMst();
  return (
    <ScrollView>
      <SectionList
        sections={[
          {
            title: "Main Pool Cleanliness",
            data: [
              "Chlorine",
              "Spa Clarity",
              "Pool Bottom Vacuumed",
              "Skimmer Baskets Clean",
              "Blow Pool Deck Area",
              "Pool Pump Area Organized",
              "Main Pool Cleanliness",
              "Spa Cleanliness",
              "Hair Strainer Basket Clean",
              "Tile Line Clean"
            ]
          }
        ]}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.title}>
              <Text style={styles.titleText}>{item}</Text>
              <Text style={styles.additionalText}>
                xxSmall paragraph text. U.K. Brexit secretary David Davis speaks
                in the House of Commons in London about analysis of the cost of
                Brexit.
              </Text>
            </View>

            <Text>3</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionWrap}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
          </View>
        )}
        //   keyExtractor={(item, index) => index}
      />

      <SectionList
        sections={[
          {
            title: "Chemicals",
            data: ["Chlorine", "PH", "Alkalinity", "Calcium", "CYa"]
          }
        ]}
        renderItem={({ item }) => (
          <View style={[styles.item, styles.itemTypes]}>
            <View style={styles.titleTypes}>
              <Text style={styles.titleText}>{item}</Text>
              <View style={styles.types}>
                <Text style={styles.type}>
                  MAIN: <Text style={styles.number}>3</Text>
                </Text>
                <Text style={styles.type}>
                  SPA: <Text style={styles.number}>3</Text>
                </Text>
              </View>
            </View>

            <Text style={styles.additionalText}>
              xxSmall paragraph text. U.K. Brexit secretary David Davis speaks
              in the House of Commons in London about analysis of the cost of
              Brexit.
            </Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionWrap}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
          </View>
        )}
        //   keyExtractor={(item, index) => index}
      />

      <SectionList
        sections={[
          {
            title: "System Used",
            data: ["Tablet Chlorine", "Liquid chlroine", "Salt"]
          }
        ]}
        renderItem={({ item }) => (
          <View style={[styles.item, styles.itemTypes]}>
            <View style={styles.titleTypes}>
              <Text style={styles.titleText}>{item}</Text>
              <View style={styles.types}>
                <IconYes />
                <IconNo />
              </View>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionWrap}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
          </View>
        )}
        //   keyExtractor={(item, index) => index}
      />

      <SectionList
        sections={[
          {
            title: "Chemicals added",
            data: [
              "Chlorine",
              "Murlatic Acid",
              "CYA",
              "Dechlorine",
              "Sodium Bicarbonate"
            ]
          }
        ]}
        renderItem={({ item }) => (
          <View style={[styles.item, styles.itemTypes]}>
            <View style={styles.titleTypes}>
              <Text style={styles.titleText}>{item}</Text>
              <View style={styles.types}>
                <IconYes />
                <IconNo />
              </View>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionWrap}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
          </View>
        )}
        //   keyExtractor={(item, index) => index}
      />

      <SectionList
        sections={[
          {
            title: "Overall Pool",
            data: [
              "Chlorinator operational",
              "All gauges working",
              "HAZMAT kit",
              "MSDS sheet postage",
              "Filter backwashed",
              "Cartridges Washed",
              "Water Leak"
            ]
          }
        ]}
        renderItem={({ item }) => (
          <View style={[styles.item, styles.itemTypes]}>
            <View style={styles.titleTypes}>
              <Text style={styles.titleText}>{item}</Text>
              <View style={styles.types}>
                <IconYes />
                <IconNo />
              </View>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionWrap}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
          </View>
        )}
        //   keyExtractor={(item, index) => index}
      />

      <SectionList
        sections={[
          {
            title: "Equipment Condition",
            data: [
              "Pool pump in good condition?	",
              "Pool filter in good condition?",
              "Valves in good condition?",
              "Others?"
            ]
          }
        ]}
        renderItem={({ item }) => (
          <View style={[styles.item, styles.itemTypes]}>
            <View style={styles.titleTypes}>
              <Text style={styles.titleText}>{item}</Text>
              <View style={styles.types}>
                <IconYes />
                <IconNo />
              </View>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionWrap}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
          </View>
        )}
        //   keyExtractor={(item, index) => index}
      />

      <SectionList
        sections={[
          {
            title: "Comments",
            data: ["Comment", "Signature", "Before & After"]
          }
        ]}
        renderItem={({ item }) => (
          <View style={[styles.item, styles.itemTypes]}>
            <View style={styles.titleTypes}>
              <Text style={styles.titleText}>{item}</Text>
            </View>

            {/* Show Comment/Signature/BeforeAfter */}
            <Text style={styles.additionalText}>
              xxSmall paragraph text. U.K. Brexit secretary David Davis speaks
              in the House of Commons in London about analysis of the cost of
              Brexit.
            </Text>

            <View style={styles.signature}>
              <View>
                <Text>Signature Image</Text>
              </View>
            </View>

            <View style={styles.beforeAfter}>
              <View>
                <Text>Before</Text>
              </View>
              <View>
                <Text>After</Text>
              </View>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionWrap}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
          </View>
        )}
        //   keyExtractor={(item, index) => index}
      />
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#EFEFF4"
  },
  sectionWrap: {
    backgroundColor: "#7360B8",
    paddingTop: 18,
    paddingBottom: 9,
    marginBottom: 25,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingLeft: 10
  },
  sectionHeader: {
    paddingBottom: 4,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    fontFamily: "AcuminPro-Bold",
    textAlign: "center",
    color: "#fff"
  },
  item: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: "#D3D9EB",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 15,
    fontFamily: "AcuminPro-Bold",
    marginBottom: 13,
    marginLeft: 15,
    marginRight: 15
  },
  itemTypes: {
    flexDirection: "column"
  },
  icon: {
    marginRight: 30
  },
  title: {
    flexDirection: "column",
    marginRight: "auto",
    flex: 1,
    marginBottom: 11
  },
  titleTypes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleText: {
    fontFamily: "AcuminPro-Regular",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    color: "#231D38",
    marginBottom: 11
  },
  types: {
    flexDirection: "row"
  },
  type: {
    fontFamily: "AcuminPro-Regular",
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: 0.07,
    color: "#231D38",
    marginRight: 11
  },
  number: {
    fontFamily: "AcuminPro-Regular",
    fontSize: 17,
    lineHeight: 17,
    letterSpacing: -0.41,
    color: "#231D38"
  },
  additionalText: {
    fontFamily: "AcuminPro-Light",
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: 0.07,
    color: "#231D38"
  },
  button: {
    color: "#745FB8",
    backgroundColor: "#F6F6F6",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 17,
    fontFamily: "AcuminPro-Bold",
    fontSize: 15,
    overflow: "hidden"
  },
  beforeAfter: {
    flexDirection: "row"
  },
  signature: {}
});
