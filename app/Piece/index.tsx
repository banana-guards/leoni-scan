import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import globalStyles from "../globalStyles";

export default function Piece() {
  const [pageIndex, setPageIndex] = useState(0);

  const images = [
    require("../../assets/images/piece-item/1.jpeg"),
    require("../../assets/images/piece-item/2.jpeg"),
    require("../../assets/images/piece-item/3.jpeg"),
  ];

  return (
    <View style={style.container}>
      <PagerView
        style={style.carousel}
        initialPage={0}
        onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
      >
        {images.map((img, index) => (
          <Image key={index} source={img} style={style.image} />
        ))}
      </PagerView>

      <View style={style.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              style.dot,
              pageIndex === index ? style.activeDot : style.inactiveDot,
            ]}
          />
        ))}
      </View>

      <View style={style.featureContainer}>
        <Text style={[globalStyles.leoniFontHeavy, style.title]}>
          P01076933 - 0-2320920-1
        </Text>

        <View style={style.tagContainer}>
          <Text style={[globalStyles.leoniFonttBook, style.tag]}>
            TE CONNECTIVITY
          </Text>
        </View>

        <View style={style.tagContainer}>
          <Text style={[globalStyles.leoniFonttBook, style.tag]}>
            2SOC E CONNECTOR DTPH
          </Text>
        </View>

        <Text style={[globalStyles.leoniFontHeavy, style.subTitle]}>
          Recursos
        </Text>

        <View style={style.sourceContainer}>
          <MaterialIcons name="picture-as-pdf" size={24} color="#A30000" />
          <Text style={[globalStyles.leoniFonttBook, style.sourceFont]}>
            data sheet
          </Text>
        </View>

        <View style={style.sourceContainer}>
          <MaterialIcons name="picture-as-pdf" size={24} color="#A30000" />
          <Text style={[globalStyles.leoniFonttBook, style.sourceFont]}>
            quejas del proveedor
          </Text>
        </View>

        <View style={style.sourceContainer}>
          <MaterialCommunityIcons
            name="microsoft-excel"
            size={24}
            color="#008000"
          />
          <Text style={[globalStyles.leoniFonttBook, style.sourceFont]}>
            estudio
          </Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
  },
  carousel: {
    width: "100%",
    height: "40%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: "#abe6ff",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
  featureContainer: {
    height: "60%",
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
  },
  tagContainer: {
    display: "flex",
    padding: 8,
    maxWidth: 200,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 9,
    marginBottom: 10,
  },
  tag: {
    fontSize: 14,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  sourceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 15,
  },
  sourceFont: {
    fontSize: 17,
  },
});
