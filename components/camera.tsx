import globalStyles from "@/app/globalStyles";
import Octicons from "@expo/vector-icons/Octicons";
import * as ImagePicker from "expo-image-picker";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Camera() {
  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permiso requerido", "Se necesita acceso a la cámara para continuar.");
      return;
    }

    await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openCamera}>
      <Octicons name="device-camera" size={90} color="#ffa464" />
      <Text style={[globalStyles.leoniFonttBook, styles.subTittle]}>
        Toma una fotografía
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  subTittle: {
    fontSize: 23,
    marginTop: 10,
    textAlign: "center",
  },
});