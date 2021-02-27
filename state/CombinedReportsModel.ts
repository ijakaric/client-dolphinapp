import { getRoot, Instance, types } from "mobx-state-tree";
import { RootType } from "./RootModel";
import { URLs } from "./URLs";
import { fetch } from "whatwg-fetch";

function parseISOString(s) {
  const b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}
function getTime(date) {
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes + " " + ampm;
}

export const ReportModel = types.model("Report", {
  _id: types.identifier,
  created_at: "",
  type:"",
});

const ReportData = types.model("",{
  date: "",
  time: "",
  _id: "",
  type: "",
})

const tempReportData = ReportData.create();

export interface ReportDataType extends Instance<typeof tempReportData> {}



const ReportSection = types.model("ReportSection", {
  title: "",
  data: types.array(ReportData),
})

export const CombinedReportsModel = types.model("CombinedReports", {
  reports: types.map(types.map(ReportModel)),
  reportSections: types.array(ReportSection),
}).views(self => {
  return {
    get reportsSortedByMonths() {
      return Array.from(self.reports.keys()).sort((mapA, mapB) => {
        return parseInt(mapB.substr(0,4)) - parseInt(mapA.substr(0,4)) ||
          parseInt(mapB.substr(5,2)) - parseInt(mapA.substr(5,2));
      })
    },
   /* get reportSections() {
      const maps = this.reportsSortedByMonths.map((key) => {
        return self.reports.get(key);
      });
      console.log(this.reportsSortedByMonths);
      return maps.map((map, index) => {
        //@ts-ignore
        if(map.size) {
          return {
            //@ts-ignore
            title: index === 0 ? "This month" : parseISOString(Array.from(map?.values())[0]?.created_at).toDateString()?.split(' ')[1],
            //@ts-ignore
            data: Array.from(map?.values()).map(report => {
              return {
                date: parseISOString(report.created_at).toDateString(),
                time: getTime(parseISOString(report.created_at)),
              }
            })
          }
        } else {
          return {
            date: "",
            time: "",
          }
        }
      });
    },*/
  }
}).actions(self => {
  return {
    addReportMap(key: string) {
      self.reports.set(key, {});
    },
    addReport(key, report) {
      self.reports.get(key)?.put(report);
    },
    setReportSections() {
      const maps = self.reportsSortedByMonths.map((key) => {
        return self.reports.get(key);
      });
      let sections = [];
      maps.forEach((map, index) => {
        //@ts-ignore
        sections.push({
          //@ts-ignore
          title: index === 0 ? "This month" : parseISOString(Array.from(map?.values())[0]?.created_at).toDateString()?.split(' ')[1],
          //@ts-ignore
          data: Array.from(map?.values()).map(report => {
            return {
              date: parseISOString(report.created_at).toDateString(),
              time: getTime(parseISOString(report.created_at)),
              _id: report._id,
              type: report.type,
            }
          })
        });
      });
      // @ts-ignore
      self.reportSections = sections.slice();
    },
    getReportById(report, navigation) {
      const root: RootType = getRoot(self);
      const url = report.type === "maintenanceReport"
        ? `${URLs.getMaintenanceReportById}/${report._id}`
        : `${URLs.getServiceReportById}/${report._id}`;
      return fetch(url, {
        headers: {
          authorization: `Bearer ${root.loginForm.token}`,
        }
      }).then(response => {
        response.json().then(result => {
          console.log(report.type);
          if(report.type === "maintenanceReport") {
            //SingleReportForm call setters
            navigation.navigate("MaintenanceReport");
          } else {
            //SingleReportForm call setters
            navigation.navigate("ServiceReport");
          }
        })
      });
    },
  }
});
