import Fontisto from "@expo/vector-icons/Fontisto";
import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput } from "react-native";

export default function SearchItem() {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={undefined}
      style={[style.androidBoxShadow, style.inputContainer]}
    >
      <Fontisto
        name="search"
        size={15}
        color={"#3f5265"}
        style={{ display: !isFocus ? "flex" : "none" }}
      />
      <TextInput
        onFocus={handleFocus}
        style={style.input}
        placeholder="Empieza la búsqueda"
        placeholderTextColor={"#3f5265"}
        autoCapitalize="characters"
      />
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  input: {
    color: "#000",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    width: "84%",
    height: "9%",
    maxWidth: 500,
    marginHorizontal: "auto",
    marginTop: 23,
    maxHeight: 84,
    borderRadius: 40,
    backgroundColor: "#ffff",
  },
  androidBoxShadow: {
    elevation: 60,
  },
});
