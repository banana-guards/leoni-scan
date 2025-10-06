import globalStyles from "@/app/globalStyles";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface PieceCardTypes {
  title: string;
}

export default function PieceCard({ title }: PieceCardTypes) {
  return (
    <Link href="/Piece" asChild>
      <Pressable style={style.container}>
        <Image
          source={require("../../assets/images/piece-item/1.jpeg")}
          style={style.image}
        />
        <View>
          <Text style={[style.title, globalStyles.leoniFont]}>{title}</Text>
          <Text style={style.subtitle}>Entrada cremita</Text>
          <Text style={style.subtitle}>Empaque azul</Text>
          <Text style={style.subtitle}>Color gris</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  image: {
    height: 90,
    aspectRatio: 1 / 1,
    objectFit: "cover",
    borderRadius: 7,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#3f5265",
  },
});
