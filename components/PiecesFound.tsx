import globalStyles from "@/app/globalStyles";
import useSearchStore from "@/app/stores/searchStore";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PieceCard from "./ui/PieceCard";

export default function PiecesFound() {
  const searchText = useSearchStore((state) => state.searchText);
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");

  return (
    <SafeAreaView
      style={[
        style.container,
        { display: `${searchText == "" ? "none" : "flex"}` },
        style.safeArea,
      ]}
    >
      <View style={style.pickersContainer}>
        <View style={style.pickerBlock}>
          <Text style={style.pickerLabel}>Color</Text>
          <View style={style.pickerContainer}>
            <Picker
              style={style.picker}
              selectedValue={selectedColor}
              onValueChange={(itemValue) => setSelectedColor(itemValue)}
            >
              <Picker.Item label="Todos" value="all" />
              <Picker.Item label="Negro" value="black" />
              <Picker.Item label="Blanco" value="white" />
              <Picker.Item label="Verde" value="green" />
              <Picker.Item label="Azul" value="blue" />
            </Picker>
          </View>
        </View>

        <View style={style.pickerBlock}>
          <Text style={style.pickerLabel}>Compañía</Text>
          <View style={style.pickerContainer}>
            <Picker
              style={style.picker}
              selectedValue={selectedCompany}
              onValueChange={(itemValue) => setSelectedCompany(itemValue)}
            >
              <Picker.Item label="Todas" value="all" />
              <Picker.Item label="TE Connectivity" value="TE Connectivity" />
              <Picker.Item label="Bosch" value="Bosch" />
              <Picker.Item label="Deutsch" value="Deutsch" />
              <Picker.Item label="Aptiv" value="Aptiv" />
            </Picker>
          </View>
        </View>
      </View>

      <PieceCard title={searchText} />

      <Text style={[globalStyles.leoniFontHeavy, style.title]}>
        Piezas Similares
      </Text>

      <ScrollView>
        <View style={style.scrollView}>
          <PieceCard title="P000341" />
          <PieceCard title="P000342" />
          <PieceCard title="P00034e" />
          <PieceCard title="P00034g" />
          <PieceCard title="P000344" />
          <PieceCard title="P00034f" />
          <PieceCard title="P00034r" />
          <PieceCard title="P00034c" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
  },
  safeArea: {
    flex: 1,
  },
  pickersContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  pickerBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "35%",
    maxWidth: 200,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
    paddingLeft: 8,
  },
  pickerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 55,
    paddingHorizontal: 10,
  },
  picker: {
    width: "100%",
    height: "110%",
  },
  scrollView: {
    display: "flex",
    gap: 4,
  },
});
