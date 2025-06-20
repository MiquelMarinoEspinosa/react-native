import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Press" onPress={() => console.log("Button pressed")} />
      <Pressable
        onPress={() => console.log("Image pressed")}
        onPressIn={() => console.log("Button pressed IN")}
        onPressOut={() => console.log("Button pressed OUT")}
        onLongPress={() => console.log("Button pressed LONG")}
      >
        <Image source={logoImg} style={{ width: 300, height: 300 }} />{" "}
      </Pressable>
      <Pressable onPress={() => console.log("Text press")}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor
        </Text>
      </Pressable>
    </View>
  );
}
