export const API_URL = "http://api.dolphinpoolsservices.com/api/v1";
export const URLs = {
  login: `${API_URL}/auth/client/login`,
  getMaintenanceReports: `${API_URL}/client/maintenance-reports`,
  getCombinedReports: `${API_URL}/client/reports`,
};
export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
