import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Platform,
} from "react-native";

import PokemonCard from "../pokemonCard/index";

export default function PokemonList({
  pokemons,
  loadPokemons,
  isnextPokemons,
}) {
  const loadmore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard item={item} />}
      contentContainerStyle={styles.FlatListContentContainer}
      onEndReached={isnextPokemons && loadmore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isnextPokemons && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});
