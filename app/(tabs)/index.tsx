import SearchItem from "@/components/search";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import globalStyles from "../globalStyles";

export default function Search() {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={"#002857"} />
      <SearchItem />
      <Text style={[style.instructions, globalStyles.leoniFontHeavy]}>
        Ingresa el código o número de serie para buscar la pieza
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ffff",
  },
  instructions: {
    fontSize: 26,
    textAlign: "center",
    color: "#0064c8",
    marginVertical: "auto",
    marginHorizontal: 20,
    fontFamily: "Georgia",
  },
});
