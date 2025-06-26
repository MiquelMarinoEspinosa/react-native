import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid data")} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid data", "DOB incorrect")}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid data!", "DOB incorrect", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel pressed"),
            },
            {
              text: "OK",
              onPress: () => console.log("OK pressed"),
            },
          ])
        }
      />

      {/* <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator size="large" color="midnightblue" animating={false} /> */}
      {/* <StatusBar backgroundColor="lightgreen" barStyle="dark-content" /> */}
      {/* <Button
        title="Press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal content </Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal> */}
    </View>
  );
}
