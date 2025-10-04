import { StyleSheet, Text, View } from "react-native";

export default function Scan() {
  return (
    <View style={style.container}>
      <Text>SCAN</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ffff",
  },
});
