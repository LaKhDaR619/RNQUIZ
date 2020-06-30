import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import QuestionsScreen from "../screens/QuestionsScreen";
import ResultScreen from "../screens/ResultScreen";

const screens = {
  Home: {
    screen: HomeScreen,
    /*navigationOptions: {
        title: "Not Home",
      },*/
  },
  Questions: {
    screen: QuestionsScreen,
  },
  Result: {
    screen: ResultScreen,
  },
};

const DrawerNavigator = createDrawerNavigator(screens);

export default createAppContainer(DrawerNavigator);
