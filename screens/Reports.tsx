import { observer } from "mobx-react";

import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  SectionList
} from "react-native";

import Icon from "../assets/report-icon.svg";
import React from "react";
import { useMst } from "../state/RootModel";
import { ReportDataType } from "../state/CombinedReportsModel";

export const Reports = observer(({ navigation }) => {
  const {
    combinedReportsForm: { reportSections, getReportById }
  } = useMst();
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={reportSections.slice()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) =>
          index < reportSections.length ? (
            <View style={styles.item}>
              <View style={styles.icon}>
                <Icon />
              </View>
              <View style={styles.date}>
                <Text style={styles.dateText}>
                  {(item as ReportDataType).date}
                </Text>
                <Text>{(item as ReportDataType).time}</Text>
              </View>

              <View style={{ alignSelf: "flex-end" }}>
                <Text
                  data-id={(item as ReportDataType)._id}
                  data-report-type={(item as ReportDataType).type}
                  style={styles.button}
                  onPress={() => {
                    getReportById(item, navigation);
                  }}
                >
                  SEE
                </Text>
              </View>
            </View>
          ) : null
        }
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionWrap}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#EFEFF4"
  },
  sectionWrap: {
    backgroundColor: "#EFEFF4",
    borderBottomColor: "#D3D9EB",
    borderBottomWidth: 1,
    marginBottom: 25,
    borderRadius: 10,
    paddingLeft: 10
  },
  sectionHeader: {
    paddingBottom: 4,
    fontSize: 15,
    fontFamily: "AcuminPro-Bold"
  },
  item: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 32,
    paddingRight: 14,
    borderColor: "#D3D9EB",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 15,
    fontFamily: "AcuminPro-Bold",
    marginBottom: 13
  },
  icon: {
    marginRight: 30
  },
  date: {
    flexDirection: "column",
    marginRight: "auto"
  },
  dateText: {
    fontFamily: "AcuminPro-Bold",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    color: "#231D38"
  },
  timeText: {
    fontFamily: "AcuminPro-Light",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: "#231D38",
    opacity: 0.4
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
  }
});
