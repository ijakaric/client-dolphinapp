// @ts-ignore
import React from "react";
import { Provider, rootStore } from "./state/RootModel";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./screens/Login";
import { Reports } from "./screens/Reports";
import { SingleReport } from "./screens/SingleReport";
import { Contact } from "./screens/Contact";


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider value={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
          <Stack.Screen name="Reports" component={Reports} />
          <Stack.Screen name="SingleReport" component={SingleReport} />
          <Stack.Screen name="SingleServiceReport" component={Contact} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
