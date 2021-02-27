import React from "react";
import { Provider, rootStore } from "./state/RootModel";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./screens/Login";
import { Reports } from "./screens/Reports";
import { MaintenanceReport } from "./screens/MaintenanceReport";
import { Contact } from "./screens/Contact";
import { ServiceReport } from "./screens/ServiceReport";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider value={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen name="Reports" component={Reports} />
          <Stack.Screen
            name="MaintenanceReport"
            component={MaintenanceReport}
          />
          <Stack.Screen name="ServiceReport" component={ServiceReport} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
