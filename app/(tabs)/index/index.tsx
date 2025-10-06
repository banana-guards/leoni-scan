import globalStyles from "@/app/globalStyles";
import useSearchStore from "@/app/stores/searchStore";
import PiecesFound from "@/components/PiecesFound";
import SearchItem from "@/components/search";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Search() {
  const searchText = useSearchStore(state=> state.searchText)

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={"#002857"} />
      <SearchItem />
      <Text style={[style.instructions, globalStyles.leoniFontHeavy, {display: `${searchText == "" ? "flex" : "none"}`}]}>
        Ingresa el código o número de serie para buscar la pieza
      </Text>
      <PiecesFound />
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
  },
});
