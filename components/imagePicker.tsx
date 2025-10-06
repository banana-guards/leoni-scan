import globalStyles from "@/app/globalStyles";
import Entypo from "@expo/vector-icons/Entypo";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function GalleryPicker() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity style={style.container} onPress={pickImage}>
      <Entypo name="folder-images" size={90} color="#00b2ff" />
      <Text style={[globalStyles.leoniFonttBook, style.subTittle]}>
        Imagen de la galeria
      </Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  subTittle: {
    fontSize: 23,
  },
});
