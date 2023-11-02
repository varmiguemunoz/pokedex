import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { GetPokemonsById } from "../../api/getPokemonsById/index";
import Header from "../../components/pokemondetails/header";
import Type from "../../components/pokemondetails/type";
import Stats from "../../components/pokemondetails/stacts";

export default function PokemonDetails({ route, navigation }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    () => {
      navigation.setOptions({
        headerRigth: () => null,
        headerLeft: () => (
          <Icon
            name="hear"
            color="#ffff"
            size={20}
            style={{ marginLeft: 20 }}
            onPress={navigation.goBack}
          />
        ),
      });
    };
  }, [navigation, route.params]);

  useEffect(() => {
    const fecthPokemonDetails = async () => {
      try {
        const pokemonDetails = await GetPokemonsById(route.params.id);
        setPokemonData(pokemonDetails.data);
      } catch (err) {
        navigation.goBack();
      }
    };
    fecthPokemonDetails();
  }, []);

  if (!pokemonData) return null;

  return (
    <ScrollView>
      <Header
        name={pokemonData.name}
        order={pokemonData.order}
        image={pokemonData.sprites.other["official-artwork"].front_default}
        type={pokemonData.types[0].type.name}
      />
      <Type types={pokemonData.types} />
      <Stats stats={pokemonData.stats} />
    </ScrollView>
  );
}
