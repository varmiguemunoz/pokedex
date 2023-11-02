import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { capitalize } from "lodash";

import { getcolorByPokemonType } from "../../../utils/getColorBypokemon/index";

export default function PokemonCard({ item }) {
  const pokemonColor = getcolorByPokemonType(item.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const navigation = useNavigation();

  const GoPokemonDetail = () => {
    navigation.navigate("PokemonDetails", { id: item.id });
  };

  return (
    <TouchableWithoutFeedback onPress={GoPokemonDetail}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${item.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{capitalize(item.name)}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
});
