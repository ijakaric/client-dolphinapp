import { Instance, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { LoginModel } from "./LoginModel";
import { ReportsModel } from "./ReportsModel";
import { SingleReportModel } from "./SingleReportModel";
import {CombinedReportsModel} from "./CombinedReportsModel";
import {SingleServiceReportModel} from "./SingleServiceReportModel";


export const RootModel = types.model("Root", {
  loginForm: LoginModel,
  reportsForm: ReportsModel,
  singleReportForm: SingleReportModel,
  singleServiceReportForm: SingleServiceReportModel,
  combinedReportsForm: CombinedReportsModel,
});

export const rootStore = RootModel.create({
  loginForm: {},
  reportsForm: {
    reportDate: new Date(),
    reportTime: new Date(),
  },
  singleReportForm: {
    reportDate: new Date(),
    reportTime: new Date(),
  },
  singleServiceReportForm: {
    reportDate: new Date(),
    reportTime: new Date(),
  },
  combinedReportsForm: {},
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(rootStore);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store as RootInstance;
}
export interface RootType extends Instance<typeof rootStore> {}
