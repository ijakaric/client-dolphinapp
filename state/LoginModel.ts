import {getRoot, types} from "mobx-state-tree";
import { fetch } from "whatwg-fetch";
import { headers, URLs } from "./URLs";
import { RootType } from "./RootModel";

export const LoginModel = types
  .model("Login", {
    email: "client1@demo.com",
    password: "demo",
    result: "",
    token: "",
  })
  .actions((self) => {
    return {
      setResult(result) {
        self.result = result;
      },
      setEmail(email: string) {
        // Alert.alert(email);
        self.email = email;
      },
      setPassword(password: string) {
        self.password = password;
      },
      setToken(token: string): void {
        self.token = token;
      },
      getCombinedReports() {
        const root: RootType = getRoot(self);
        return fetch(URLs.getCombinedReports, {
          headers: {
            authorization: `Bearer ${self.token}`,
          }
        }).then(response => {
          response.json().then(result => {
            result.data.forEach(report => {
              if(!root.combinedReportsForm.reports.has(report.created_at.substr(0, 7))) {
                root.combinedReportsForm.addReportMap(report.created_at.substr(0, 7));
                root.combinedReportsForm.addReport(report.created_at.substr(0, 7), report);
              } else {
                root.combinedReportsForm.addReport(report.created_at.substr(0, 7), report);
              }
            });
            root.combinedReportsForm.setReportSections();
            /*console.log(Array.from(root.combinedReportsForm.reports.keys()));
            Array.from(root.combinedReportsForm.reports.values()).forEach(map => {
              Array.from(map.values()).forEach(report => {
                console.log(report);
              });
            });*/
          });
        });

      },
      submitLogin(email, password) {
        return new Promise((resolve, reject) => {
          fetch(URLs.login, {
            headers,
            method: "POST",
            body: JSON.stringify({
              email: self.email,
              password: self.password,
            }),
          }).then((response) => {
            response.json().then((result) => {
              if (!result.error && result.token) {
                this.setToken(result.token);
                resolve();
              } else {
                reject(result.error.msg);
              }
            });
          }).catch(e => {
            console.log("error", e);
          });
        });
      },
    };
  });
