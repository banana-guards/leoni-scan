import Camera from "@/components/camera";
import GalleryPicker from "@/components/imagePicker";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import globalStyles from "../globalStyles";

export default function Scan() {

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={"#002857"} />
      <Text style={[style.title, globalStyles.leoniFontHeavy]}>
        Escanea la pieza con Inteligencia Artificial
      </Text>
      <View style={style.optionsContainer}>
        <GalleryPicker />
        <Camera/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffff",
    height: "100%",
  },
  optionsContainer: {
    display: "flex",
    gap: 57,
    marginVertical: "auto",
  },

  title: {
    marginTop: 25,
    fontSize: 26,
    textAlign: "center",
    color: "#0064c8",
  },
});
