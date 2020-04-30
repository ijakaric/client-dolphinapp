import { types } from "mobx-state-tree";

export const EquipmentModel = types
  .model("Login", {
    poolName: "",
    reportDate: types.Date,
    reportTime: types.Date,
    note: "",
    isDatePickerVisible: false,
    isTimePickerVisible: false,
    isModalVisible: false,
  })
  .views((self) => {
    return {
      get time() {
        return `${self.reportTime.getHours()}:${self.reportTime.getMinutes()}`;
      },
    };
  })
  .actions((self) => {
    return {
      setName(poolName: string) {
        // Alert.alert(poolName);
        self.poolName = poolName;
      },
      setReportDate(reportDate) {
        self.reportDate = reportDate;
      },
      setReportTime(reportTime) {
        self.reportTime = reportTime;
      },
      setNote(note: string) {
        self.note = note;
      },
      showTimePicker() {
        self.isTimePickerVisible = true;
      },
      hideTimePicker() {
        self.isTimePickerVisible = false;
      },
      showDatePicker() {
        self.isDatePickerVisible = true;
      },
      hideDatePicker() {
        self.isDatePickerVisible = false;
      },
      onFocusDatePicker(event): void {
        event.preventDefault();
        this.showDatePicker();
      },
      onFocusTimePicker(event): void {
        event.preventDefault();
        this.showTimePicker();
      },
      onChange(event, value) {
        this.hideDatePicker();
        this.hideTimePicker();
        console.log(value);
        if (self.isDatePickerVisible) {
          this.setReportDate(value);
        } else {
          this.setReportTime(value);
        }
      },
      onSubmit() {
        self.isModalVisible = true;
      },
      hideModal(navigation) {
        self.isModalVisible = false;
        navigation.navigate("ReportChoice");
      }
    };
  });
